import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. Inventory, blog, and admin features will not work until these are set in .env.local (see .env.example).',
  )
}

// Fall back to a syntactically valid placeholder so a missing/misconfigured
// env var fails each request gracefully instead of crashing the whole app
// (createClient throws synchronously on an empty URL, and this module sits
// in the static import graph for the public site too).
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key',
)
