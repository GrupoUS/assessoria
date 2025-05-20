export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          client_email: string | null
          client_name: string
          client_phone: string | null
          clinic_id: string | null
          created_at: string | null
          end_time: string
          id: string
          notes: string | null
          professional_id: string | null
          service_id: string | null
          start_time: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          client_email?: string | null
          client_name: string
          client_phone?: string | null
          clinic_id?: string | null
          created_at?: string | null
          end_time: string
          id?: string
          notes?: string | null
          professional_id?: string | null
          service_id?: string | null
          start_time: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          client_email?: string | null
          client_name?: string
          client_phone?: string | null
          clinic_id?: string | null
          created_at?: string | null
          end_time?: string
          id?: string
          notes?: string | null
          professional_id?: string | null
          service_id?: string | null
          start_time?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      automations: {
        Row: {
          active: boolean | null
          clinic_id: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          trigger_event: string
          updated_at: string | null
          workflow_id: string | null
        }
        Insert: {
          active?: boolean | null
          clinic_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          trigger_event: string
          updated_at?: string | null
          workflow_id?: string | null
        }
        Update: {
          active?: boolean | null
          clinic_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          trigger_event?: string
          updated_at?: string | null
          workflow_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "automations_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      before_after_photos: {
        Row: {
          after_photo: string | null
          before_photo: string | null
          created_at: string | null
          description: string | null
          id: string
          medical_record_id: string | null
          updated_at: string | null
        }
        Insert: {
          after_photo?: string | null
          before_photo?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          medical_record_id?: string | null
          updated_at?: string | null
        }
        Update: {
          after_photo?: string | null
          before_photo?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          medical_record_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "before_after_photos_medical_record_id_fkey"
            columns: ["medical_record_id"]
            isOneToOne: false
            referencedRelation: "medical_records"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          category: string | null
          content: string | null
          created_at: string
          date: string | null
          excerpt: string | null
          id: string
          imageurl: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          content?: string | null
          created_at?: string
          date?: string | null
          excerpt?: string | null
          id?: string
          imageurl?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          content?: string | null
          created_at?: string
          date?: string | null
          excerpt?: string | null
          id?: string
          imageurl?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      "Carrinho Abandonado": {
        Row: {
          Email: string | null
          Evento: string | null
          Fatura: string | null
          id: number
          Nome: string | null
          Telefone: string | null
          Valor: string | null
        }
        Insert: {
          Email?: string | null
          Evento?: string | null
          Fatura?: string | null
          id?: number
          Nome?: string | null
          Telefone?: string | null
          Valor?: string | null
        }
        Update: {
          Email?: string | null
          Evento?: string | null
          Fatura?: string | null
          id?: number
          Nome?: string | null
          Telefone?: string | null
          Valor?: string | null
        }
        Relationships: []
      }
      "Clientes-Kaza": {
        Row: {
          atende_humano: boolean | null
          created_at: string
          dados: string | null
          email: string | null
          id: number
          nome: string | null
          resumo: string | null
          status: string | null
          telefone: string | null
        }
        Insert: {
          atende_humano?: boolean | null
          created_at?: string
          dados?: string | null
          email?: string | null
          id?: number
          nome?: string | null
          resumo?: string | null
          status?: string | null
          telefone?: string | null
        }
        Update: {
          atende_humano?: boolean | null
          created_at?: string
          dados?: string | null
          email?: string | null
          id?: number
          nome?: string | null
          resumo?: string | null
          status?: string | null
          telefone?: string | null
        }
        Relationships: []
      }
      clinics: {
        Row: {
          address: string | null
          created_at: string | null
          email: string | null
          id: string
          logo: string | null
          name: string
          phone: string | null
          stripe_customer_id: string | null
          subscription_status: string | null
          subscription_tier: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          logo?: string | null
          name: string
          phone?: string | null
          stripe_customer_id?: string | null
          subscription_status?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          logo?: string | null
          name?: string
          phone?: string | null
          stripe_customer_id?: string | null
          subscription_status?: string | null
          subscription_tier?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      "Compra Aprovada": {
        Row: {
          Email: string | null
          Evento: string | null
          Fatura: string | null
          id: number
          Nome: string | null
          Telefone: string | null
          Valor: string | null
        }
        Insert: {
          Email?: string | null
          Evento?: string | null
          Fatura?: string | null
          id?: number
          Nome?: string | null
          Telefone?: string | null
          Valor?: string | null
        }
        Update: {
          Email?: string | null
          Evento?: string | null
          Fatura?: string | null
          id?: number
          Nome?: string | null
          Telefone?: string | null
          Valor?: string | null
        }
        Relationships: []
      }
      "Compra Recusada": {
        Row: {
          Email: string | null
          Evento: string | null
          Fatura: string | null
          id: number
          Nome: string | null
          Telefone: string | null
        }
        Insert: {
          Email?: string | null
          Evento?: string | null
          Fatura?: string | null
          id?: number
          Nome?: string | null
          Telefone?: string | null
        }
        Update: {
          Email?: string | null
          Evento?: string | null
          Fatura?: string | null
          id?: number
          Nome?: string | null
          Telefone?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      "Fatura Gerada": {
        Row: {
          Email: string | null
          Evento: string | null
          Fatura: string | null
          id: number
          Nome: string | null
          Telefone: string | null
        }
        Insert: {
          Email?: string | null
          Evento?: string | null
          Fatura?: string | null
          id?: number
          Nome?: string | null
          Telefone?: string | null
        }
        Update: {
          Email?: string | null
          Evento?: string | null
          Fatura?: string | null
          id?: number
          Nome?: string | null
          Telefone?: string | null
        }
        Relationships: []
      }
      financial_transactions: {
        Row: {
          amount: number
          appointment_id: string | null
          category: string | null
          clinic_id: string | null
          created_at: string | null
          description: string
          id: string
          payment_method: string | null
          status: string | null
          transaction_type: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          appointment_id?: string | null
          category?: string | null
          clinic_id?: string | null
          created_at?: string | null
          description: string
          id?: string
          payment_method?: string | null
          status?: string | null
          transaction_type: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          appointment_id?: string | null
          category?: string | null
          clinic_id?: string | null
          created_at?: string | null
          description?: string
          id?: string
          payment_method?: string | null
          status?: string | null
          transaction_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "financial_transactions_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "financial_transactions_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          category: string | null
          clinic_id: string | null
          created_at: string | null
          description: string | null
          id: string
          min_quantity: number | null
          name: string
          price: number | null
          quantity: number
          supplier: string | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          clinic_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          min_quantity?: number | null
          name: string
          price?: number | null
          quantity?: number
          supplier?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          clinic_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          min_quantity?: number | null
          name?: string
          price?: number | null
          quantity?: number
          supplier?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      investment_leads: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          phone: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          phone: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
      marketing_campaigns: {
        Row: {
          campaign_type: string | null
          clinic_id: string | null
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          name: string
          start_date: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          campaign_type?: string | null
          clinic_id?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          campaign_type?: string | null
          clinic_id?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketing_campaigns_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      medical_records: {
        Row: {
          appointment_id: string | null
          clinic_id: string | null
          created_at: string | null
          id: string
          notes: string | null
          patient_id: string | null
          professional_id: string | null
          signed: boolean | null
          treatment_plan: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_id?: string | null
          clinic_id?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          patient_id?: string | null
          professional_id?: string | null
          signed?: boolean | null
          treatment_plan?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_id?: string | null
          clinic_id?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          patient_id?: string | null
          professional_id?: string | null
          signed?: boolean | null
          treatment_plan?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "medical_records_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medical_records_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          address: string | null
          birth_date: string | null
          clinic_id: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string
          phone: string
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          birth_date?: string | null
          clinic_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          phone: string
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          birth_date?: string | null
          clinic_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          phone?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "patients_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      professionals: {
        Row: {
          bio: string | null
          clinic_id: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string
          phone: string | null
          photo: string | null
          specialty: string | null
          updated_at: string | null
        }
        Insert: {
          bio?: string | null
          clinic_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          photo?: string | null
          specialty?: string | null
          updated_at?: string | null
        }
        Update: {
          bio?: string | null
          clinic_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          photo?: string | null
          specialty?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "professionals_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          clinic_id: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string | null
          phone: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          clinic_id?: string | null
          created_at?: string | null
          email?: string | null
          id: string
          name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          clinic_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      "SDR - HISTORICO": {
        Row: {
          created_at: string
          id: number
          id_cliente: string | null
          msg_cliente: string | null
          nome_cliente: string | null
          resposta_agente: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_cliente?: string | null
          msg_cliente?: string | null
          nome_cliente?: string | null
          resposta_agente?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_cliente?: string | null
          msg_cliente?: string | null
          nome_cliente?: string | null
          resposta_agente?: string | null
        }
        Relationships: []
      }
      "Sdr - Leads": {
        Row: {
          email: string | null
          id: number
          nome: string | null
          resumo: string | null
          telefone: string | null
        }
        Insert: {
          email?: string | null
          id?: number
          nome?: string | null
          resumo?: string | null
          telefone?: string | null
        }
        Update: {
          email?: string | null
          id?: number
          nome?: string | null
          resumo?: string | null
          telefone?: string | null
        }
        Relationships: []
      }
      "SDR - LEADS": {
        Row: {
          Email: string | null
          id: number
          Nome: string | null
          Resumo: string | null
          Telefone: string | null
        }
        Insert: {
          Email?: string | null
          id: number
          Nome?: string | null
          Resumo?: string | null
          Telefone?: string | null
        }
        Update: {
          Email?: string | null
          id?: number
          Nome?: string | null
          Resumo?: string | null
          Telefone?: string | null
        }
        Relationships: []
      }
      services: {
        Row: {
          clinic_id: string | null
          created_at: string | null
          description: string | null
          duration: number
          id: string
          name: string
          price: number
          updated_at: string | null
        }
        Insert: {
          clinic_id?: string | null
          created_at?: string | null
          description?: string | null
          duration: number
          id?: string
          name: string
          price: number
          updated_at?: string | null
        }
        Update: {
          clinic_id?: string | null
          created_at?: string | null
          description?: string | null
          duration?: number
          id?: string
          name?: string
          price?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "services_clinic_id_fkey"
            columns: ["clinic_id"]
            isOneToOne: false
            referencedRelation: "clinics"
            referencedColumns: ["id"]
          },
        ]
      }
      website_leads: {
        Row: {
          created_at: string | null
          email: string
          id: string
          name: string
          phone: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          name: string
          phone: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      match_documents: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
