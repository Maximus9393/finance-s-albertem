import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  gdpr_consent: boolean
  created_at?: string
}