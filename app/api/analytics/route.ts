import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";

// Rate limit: simple in-memory tracker (resets on deploy)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 60; // max events per minute per IP
const WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "rate limited" }, { status: 429 });
    }

    const body = await request.json();
    const { event_type, page, link_url, link_label, referrer } = body;

    if (!event_type || !page) {
      return NextResponse.json({ error: "missing fields" }, { status: 400 });
    }

    if (!["page_view", "link_click"].includes(event_type)) {
      return NextResponse.json({ error: "invalid event" }, { status: 400 });
    }

    const userAgent = request.headers.get("user-agent") || "";
    const country = request.headers.get("x-vercel-ip-country") || "";
    const city = request.headers.get("x-vercel-ip-city") || "";

    // Detect device type from user agent
    const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);
    const isTablet = /tablet|ipad/i.test(userAgent);
    const device_type = isTablet ? "tablet" : isMobile ? "mobile" : "desktop";

    let supabase;
    try {
      supabase = createAdminClient();
    } catch {
      // Supabase not configured yet — silently skip
      return NextResponse.json({ ok: true });
    }
    const { error } = await supabase.from("analytics_events").insert({
      event_type,
      page: page.substring(0, 200),
      link_url: link_url?.substring(0, 500),
      link_label: link_label?.substring(0, 100),
      referrer: referrer?.substring(0, 500),
      user_agent: userAgent.substring(0, 500),
      country,
      city,
      device_type,
    });

    if (error) {
      console.error("Analytics insert error:", error);
      return NextResponse.json({ error: "db error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
