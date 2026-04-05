import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;
let _adminClient: SupabaseClient | null = null;

// Lazy client — won't crash at build time if env vars are missing
export function getSupabase(): SupabaseClient {
  if (_client) return _client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Supabase env vars not configured");
  }
  _client = createClient(url, key);
  return _client;
}

export function createAdminClient(): SupabaseClient {
  if (_adminClient) return _adminClient;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Supabase admin env vars not configured");
  }
  _adminClient = createClient(url, key);
  return _adminClient;
}

// Re-export for backwards compat
export const supabase = typeof window !== "undefined"
  ? (() => { try { return getSupabase(); } catch { return null; } })()
  : null;
