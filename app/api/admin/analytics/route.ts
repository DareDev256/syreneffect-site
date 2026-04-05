import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { getSupabase } from "@/lib/supabase";

async function verifyAuth(request: NextRequest): Promise<boolean> {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return false;
  const { data } = await getSupabase().auth.getUser(token);
  return !!data?.user;
}

export async function GET(request: NextRequest) {
  if (!(await verifyAuth(request))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();
  const { searchParams } = new URL(request.url);
  const days = parseInt(searchParams.get("days") || "7");
  const since = new Date(Date.now() - days * 86400000).toISOString();

  // Parallel queries
  const [
    totalViews,
    totalClicks,
    viewsByPage,
    topLinks,
    deviceBreakdown,
    countryBreakdown,
    dailyStats,
  ] = await Promise.all([
    admin
      .from("analytics_events")
      .select("id", { count: "exact", head: true })
      .eq("event_type", "page_view")
      .gte("created_at", since),
    admin
      .from("analytics_events")
      .select("id", { count: "exact", head: true })
      .eq("event_type", "link_click")
      .gte("created_at", since),
    admin.rpc("get_views_by_page", { since_date: since }).then(r => r, () => ({ data: [] })),
    admin.rpc("get_top_links", { since_date: since }).then(r => r, () => ({ data: [] })),
    admin.rpc("get_device_breakdown", { since_date: since }).then(r => r, () => ({ data: [] })),
    admin.rpc("get_country_breakdown", { since_date: since }).then(r => r, () => ({ data: [] })),
    admin.rpc("get_daily_stats", { since_date: since }).then(r => r, () => ({ data: [] })),
  ]);

  return NextResponse.json({
    period: `${days}d`,
    total_views: totalViews.count || 0,
    total_clicks: totalClicks.count || 0,
    views_by_page: viewsByPage.data || [],
    top_links: topLinks.data || [],
    device_breakdown: deviceBreakdown.data || [],
    country_breakdown: countryBreakdown.data || [],
    daily_stats: dailyStats.data || [],
  });
}
