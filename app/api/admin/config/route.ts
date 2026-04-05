import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { getSupabase } from "@/lib/supabase";

async function verifyAuth(request: NextRequest): Promise<boolean> {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return false;
  const { data } = await getSupabase().auth.getUser(token);
  return !!data?.user;
}

// GET all config
export async function GET(request: NextRequest) {
  if (!(await verifyAuth(request))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();
  const { data, error } = await admin.from("site_config").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const config: Record<string, unknown> = {};
  for (const row of data || []) {
    config[row.key] = row.value;
  }
  return NextResponse.json(config);
}

// PUT update a config key
export async function PUT(request: NextRequest) {
  if (!(await verifyAuth(request))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { key, value } = body;

  if (!key || value === undefined) {
    return NextResponse.json({ error: "missing key/value" }, { status: 400 });
  }

  const admin = createAdminClient();
  const { error } = await admin
    .from("site_config")
    .upsert({ key, value, updated_at: new Date().toISOString() });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
