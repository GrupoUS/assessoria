
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
const webhookSecret = Deno.env.get("BLOG_WEBHOOK_SECRET") as string;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Verificar o método da requisição
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Processar o corpo da requisição
    const requestData = await req.json();
    
    // Verificar o segredo do webhook para autenticação
    const authHeader = req.headers.get("authorization");
    if (!authHeader || authHeader !== `Bearer ${webhookSecret}`) {
      console.error("Webhook secret inválido");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Verificar se todos os campos necessários existem
    const requiredFields = ["title", "slug", "content", "category", "imageUrl"];
    for (const field of requiredFields) {
      if (!requestData[field]) {
        return new Response(JSON.stringify({ error: `Missing required field: ${field}` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Inicializar o cliente Supabase
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verificar se já existe um post com o mesmo slug
    const { data: existingPost } = await supabase
      .from("blog_posts")
      .select("id")
      .eq("slug", requestData.slug)
      .maybeSingle();

    let result;
    
    // Se o post já existe, atualize-o, caso contrário, crie um novo
    if (existingPost) {
      result = await supabase
        .from("blog_posts")
        .update({
          title: requestData.title,
          content: requestData.content,
          excerpt: requestData.excerpt || "",
          category: requestData.category,
          imageUrl: requestData.imageUrl,
          date: requestData.date || new Date().toLocaleDateString('pt-BR'),
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingPost.id);
      
      console.log("Post atualizado:", requestData.title);
    } else {
      result = await supabase
        .from("blog_posts")
        .insert({
          title: requestData.title,
          slug: requestData.slug,
          content: requestData.content,
          excerpt: requestData.excerpt || "",
          category: requestData.category,
          imageUrl: requestData.imageUrl,
          date: requestData.date || new Date().toLocaleDateString('pt-BR'),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      
      console.log("Novo post criado:", requestData.title);
    }

    if (result.error) {
      throw result.error;
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: existingPost ? "Post atualizado com sucesso" : "Post criado com sucesso",
        slug: requestData.slug
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error) {
    console.error("Erro ao processar webhook:", error);
    
    return new Response(
      JSON.stringify({ error: error.message || "Ocorreu um erro ao processar a requisição" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
