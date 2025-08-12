import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Lovable: Avoid VITE_* envs (not supported). Try globals first, then Vite envs if present.
const fallbackUrl = (globalThis as any)?.SUPABASE_URL || (typeof window !== 'undefined' ? (window as any)?.SUPABASE_URL : undefined)
const fallbackAnon = (globalThis as any)?.SUPABASE_ANON_KEY || (typeof window !== 'undefined' ? (window as any)?.SUPABASE_ANON_KEY : undefined)

const supabaseUrl: string | undefined = fallbackUrl || (typeof import.meta !== 'undefined' ? (import.meta as any).env?.VITE_SUPABASE_URL : undefined)
const supabaseAnonKey: string | undefined = fallbackAnon || (typeof import.meta !== 'undefined' ? (import.meta as any).env?.VITE_SUPABASE_ANON_KEY : undefined)

// Create client only when configured to prevent runtime crash
export const supabase: SupabaseClient | undefined =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : undefined

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  gdpr_consent: boolean
  created_at?: string
}