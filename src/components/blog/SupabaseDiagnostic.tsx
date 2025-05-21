
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Loader, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  [key: string]: any;
}

const SupabaseDiagnostic = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [diagnosticData, setDiagnosticData] = useState<{
    connectionStatus: 'unknown' | 'success' | 'error';
    rawResponse: any;
    errorMessage: string | null;
    postCount: number;
    posts: Post[];
    queryTimestamp: string;
    supabaseInfo: {
      url: string;
      hasAnonymousKey: boolean;
    };
    rlsStatus: string;
  }>({
    connectionStatus: 'unknown',
    rawResponse: null,
    errorMessage: null,
    postCount: 0,
    posts: [],
    queryTimestamp: '',
    supabaseInfo: {
      url: '',
      hasAnonymousKey: false
    },
    rlsStatus: 'Desconhecido'
  });

  const fetchDiagnosticData = async () => {
    setIsLoading(true);
    console.log('SupabaseDiagnostic: Iniciando consulta de diagnóstico à tabela blog_posts');
    
    const queryTimestamp = new Date().toISOString();
    console.log('SupabaseDiagnostic: Timestamp da consulta:', queryTimestamp);
    
    try {
      // Verificar se o cliente Supabase está inicializado corretamente
      if (!supabase) {
        throw new Error('Cliente Supabase não foi inicializado corretamente');
      }
      
      // Registrar informações do cliente Supabase (URL mascarada, presença de chave)
      // Obter URL do Supabase de forma segura
      const supabaseUrl = "https://xdnfpoytpesnuzcfpajd.supabase.co";
      const hasAnonymousKey = !!supabase.auth.getSession;
      
      console.log('SupabaseDiagnostic: Cliente Supabase inicializado com sucesso');
      console.log(`SupabaseDiagnostic: URL: ${supabaseUrl}`);
      console.log(`SupabaseDiagnostic: Chave anônima disponível: ${hasAnonymousKey}`);
      
      // Executar consulta simples para buscar todos os posts
      console.log('SupabaseDiagnostic: Executando consulta: SELECT * FROM blog_posts ORDER BY created_at DESC LIMIT 5');
      
      const startTime = performance.now();
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      const endTime = performance.now();
      
      console.log(`SupabaseDiagnostic: Tempo de execução da consulta: ${endTime - startTime}ms`);
      
      // Registrar a resposta completa
      console.log('SupabaseDiagnostic: Resposta completa recebida:', { data, error });
      
      let rlsStatus = 'Parece não estar bloqueando o acesso';
      
      if (error) {
        console.error('SupabaseDiagnostic: Erro na consulta:', error.message);
        setDiagnosticData({
          connectionStatus: 'error',
          rawResponse: { error },
          errorMessage: error.message,
          postCount: 0,
          posts: [],
          queryTimestamp,
          supabaseInfo: {
            url: supabaseUrl,
            hasAnonymousKey
          },
          rlsStatus: 'Não foi possível verificar (erro de consulta)'
        });
      } else if (!data || data.length === 0) {
        console.log('SupabaseDiagnostic: Consulta bem-sucedida, mas nenhum post encontrado');
        rlsStatus = 'Provavelmente bloqueando o acesso - Política RLS ausente ou restritiva';
        
        setDiagnosticData({
          connectionStatus: 'success',
          rawResponse: { data },
          errorMessage: null,
          postCount: 0,
          posts: [],
          queryTimestamp,
          supabaseInfo: {
            url: supabaseUrl,
            hasAnonymousKey
          },
          rlsStatus
        });
      } else {
        console.log(`SupabaseDiagnostic: Consulta bem-sucedida! ${data.length || 0} posts encontrados`);
        console.log('SupabaseDiagnostic: Estrutura do primeiro post:', data[0]);
        
        // Mapear os posts recebidos
        const mappedPosts = data.map(post => ({
          id: post.id,
          title: post.title || 'Sem título',
          slug: post.slug || `post-${post.id}`,
          created_at: post.created_at,
          ...post
        }));
        
        console.log('SupabaseDiagnostic: Posts mapeados:', mappedPosts);
        
        setDiagnosticData({
          connectionStatus: 'success',
          rawResponse: { data },
          errorMessage: null,
          postCount: data.length || 0,
          posts: mappedPosts,
          queryTimestamp,
          supabaseInfo: {
            url: supabaseUrl,
            hasAnonymousKey
          },
          rlsStatus
        });
      }
    } catch (err) {
      console.error('SupabaseDiagnostic: Exceção capturada:', err);
      setDiagnosticData({
        connectionStatus: 'error',
        rawResponse: { unexpectedError: String(err) },
        errorMessage: err instanceof Error ? err.message : String(err),
        postCount: 0,
        posts: [],
        queryTimestamp,
        supabaseInfo: {
          url: 'Não disponível devido a erro',
          hasAnonymousKey: false
        },
        rlsStatus: 'Não foi possível verificar (erro de conexão)'
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Executar consulta de diagnóstico ao montar o componente
    fetchDiagnosticData();
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8 border border-gray-200 dark:border-navy-medium rounded-lg overflow-hidden bg-white dark:bg-navy-dark">
      <div 
        className="p-4 bg-gray-50 dark:bg-navy-medium flex justify-between items-center cursor-pointer"
        onClick={toggleExpand}
      >
        <h2 className="font-bold text-navy-dark dark:text-white flex items-center">
          {diagnosticData.connectionStatus === 'success' ? (
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          ) : diagnosticData.connectionStatus === 'error' ? (
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          ) : (
            <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
          )}
          Diagnóstico de Conexão Supabase
        </h2>
        <div className="flex items-center">
          <Button 
            variant="outline" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              fetchDiagnosticData();
            }}
            disabled={isLoading}
            className="mr-2"
          >
            {isLoading ? (
              <Loader className="h-4 w-4 animate-spin" />
            ) : (
              <Loader className="h-4 w-4" />
            )}
            <span className="ml-1">Testar Conexão</span>
          </Button>
          {isExpanded ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 bg-white dark:bg-navy-dark">
          <div className="mb-4">
            <h3 className="font-semibold text-navy-dark dark:text-white mb-2">Informações do Cliente:</h3>
            <div className="bg-gray-50 dark:bg-navy-medium p-3 rounded-md">
              <p className="text-sm text-gray-700 dark:text-gray-300">URL Supabase: {diagnosticData.supabaseInfo.url}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Chave anônima: {diagnosticData.supabaseInfo.hasAnonymousKey ? '✓ Disponível' : '✗ Não detectada'}
              </p>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold text-navy-dark dark:text-white mb-2">Status da Conexão:</h3>
            {diagnosticData.connectionStatus === 'success' ? (
              <Alert className="border-green-500 dark:border-green-700 bg-green-50 dark:bg-green-900/20">
                <AlertTitle className="text-green-800 dark:text-green-300">Conexão bem-sucedida</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-400">
                  A conexão com o Supabase foi estabelecida corretamente.
                </AlertDescription>
              </Alert>
            ) : diagnosticData.connectionStatus === 'error' ? (
              <Alert className="border-red-500 dark:border-red-700 bg-red-50 dark:bg-red-900/20">
                <AlertTitle className="text-red-800 dark:text-red-300">Erro de conexão</AlertTitle>
                <AlertDescription className="text-red-700 dark:text-red-400">
                  {diagnosticData.errorMessage || 'Ocorreu um erro desconhecido na conexão com o Supabase.'}
                </AlertDescription>
              </Alert>
            ) : (
              <Alert className="border-yellow-500 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20">
                <AlertTitle className="text-yellow-800 dark:text-yellow-300">Status desconhecido</AlertTitle>
                <AlertDescription className="text-yellow-700 dark:text-yellow-400">
                  O status da conexão com o Supabase é desconhecido.
                </AlertDescription>
              </Alert>
            )}
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold text-navy-dark dark:text-white mb-2">Resultado da Consulta:</h3>
            <div className="bg-gray-50 dark:bg-navy-medium p-3 rounded-md">
              <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">
                Timestamp da consulta: {diagnosticData.queryTimestamp}
              </p>
              <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                Posts encontrados: <strong>{diagnosticData.postCount}</strong>
              </p>
              
              <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                Status RLS: <strong className={diagnosticData.postCount === 0 ? "text-red-600" : "text-green-600"}>
                  {diagnosticData.rlsStatus}
                </strong>
              </p>
              
              {diagnosticData.postCount > 0 ? (
                <div className="mt-4">
                  <h4 className="font-medium text-navy-dark dark:text-white mb-2">Posts Encontrados:</h4>
                  <ul className="list-disc pl-5">
                    {diagnosticData.posts.map((post) => (
                      <li key={post.id} className="text-gray-700 dark:text-gray-300 mb-1">
                        {post.title} <span className="text-xs text-gray-500">({post.slug})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : diagnosticData.connectionStatus === 'success' ? (
                <Alert className="mt-2 border-amber-500 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700">
                  <AlertTitle className="text-amber-800 dark:text-amber-300">Nenhum post encontrado</AlertTitle>
                  <AlertDescription className="text-amber-700 dark:text-amber-400">
                    <p>A consulta foi bem-sucedida, mas nenhum post foi encontrado na tabela blog_posts.</p>
                    <p className="mt-2 font-semibold">Problema provável: Política RLS (Row Level Security) restritiva.</p>
                    <div className="mt-2 p-2 bg-amber-100 dark:bg-amber-900/40 rounded text-xs">
                      <p className="font-semibold">Para resolver:</p>
                      <p>Execute no Editor SQL do Supabase a seguinte política para permitir acesso público de leitura:</p>
                      <pre className="overflow-auto p-2 mt-1 bg-gray-100 dark:bg-gray-800 rounded">
                        {`CREATE POLICY "Allow public read access to blog_posts"
ON public.blog_posts
FOR SELECT
TO anon
USING (true);`}
                      </pre>
                    </div>
                  </AlertDescription>
                </Alert>
              ) : null}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-navy-dark dark:text-white mb-2">Detalhes Técnicos:</h3>
            <div className="bg-gray-100 dark:bg-navy-medium p-3 rounded-md overflow-auto max-h-60 text-sm font-mono">
              <pre className="text-xs text-gray-800 dark:text-gray-300">
                {JSON.stringify(diagnosticData.rawResponse, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupabaseDiagnostic;
