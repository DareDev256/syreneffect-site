"use client";

import { useState, useEffect, useCallback } from "react";
import { getSupabase } from "@/lib/supabase";

interface AnalyticsData {
  period: string;
  total_views: number;
  total_clicks: number;
  views_by_page: { page: string; count: number }[];
  top_links: { link_label: string; link_url: string; count: number }[];
  device_breakdown: { device_type: string; count: number }[];
  country_breakdown: { country: string; count: number }[];
  daily_stats: { day: string; views: number; clicks: number }[];
}

export function AdminDashboard() {
  const [session, setSession] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [period, setPeriod] = useState(7);
  const [activeTab, setActiveTab] = useState<"analytics" | "content">("analytics");

  // Config state
  const [config, setConfig] = useState<Record<string, unknown>>({});
  const [igPosts, setIgPosts] = useState("");
  const [bioText, setBioText] = useState("");
  const [saving, setSaving] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { data, error: authError } = await getSupabase().auth.signInWithPassword({
      email,
      password,
    });
    if (authError) {
      setError(authError.message);
    } else {
      setSession(data.session?.access_token || null);
    }
    setLoading(false);
  };

  const fetchAnalytics = useCallback(async () => {
    if (!session) return;
    const res = await fetch(`/api/admin/analytics?days=${period}`, {
      headers: { Authorization: `Bearer ${session}` },
    });
    if (res.ok) {
      setAnalytics(await res.json());
    }
  }, [session, period]);

  const fetchConfig = useCallback(async () => {
    if (!session) return;
    const res = await fetch("/api/admin/config", {
      headers: { Authorization: `Bearer ${session}` },
    });
    if (res.ok) {
      const data = await res.json();
      setConfig(data);
      setIgPosts(
        Array.isArray(data.instagram_posts)
          ? data.instagram_posts.join("\n")
          : ""
      );
      setBioText(typeof data.bio === "string" ? data.bio : "");
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      fetchAnalytics();
      fetchConfig();
    }
  }, [session, fetchAnalytics, fetchConfig]);

  const saveConfig = async (key: string, value: unknown) => {
    setSaving(true);
    await fetch("/api/admin/config", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session}`,
      },
      body: JSON.stringify({ key, value }),
    });
    setSaving(false);
  };

  // Login screen
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="glass-card p-8 w-full max-w-sm space-y-6">
          <div className="text-center">
            <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
              Admin Panel
            </h1>
            <p className="text-muted text-sm mt-1">SyrenEffect Dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-card-border text-soft-white placeholder-muted/50 focus:outline-none focus:border-purple-glow/50 text-sm"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-card-border text-soft-white placeholder-muted/50 focus:outline-none focus:border-purple-glow/50 text-sm"
              required
            />
            {error && (
              <p className="text-red-400 text-xs">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-glow to-teal-glow text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold gradient-text">
            Dashboard
          </h1>
          <button
            onClick={() => {
              getSupabase().auth.signOut();
              setSession(null);
            }}
            className="text-xs text-muted hover:text-soft-white transition-colors"
          >
            Sign Out
          </button>
        </div>

        {/* Tab nav */}
        <div className="flex gap-2">
          {(["analytics", "content"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-glow to-teal-glow text-white"
                  : "glass-card text-muted hover:text-soft-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "analytics" && (
          <div className="space-y-6">
            {/* Period selector */}
            <div className="flex gap-2">
              {[7, 14, 30, 90].map((d) => (
                <button
                  key={d}
                  onClick={() => setPeriod(d)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                    period === d
                      ? "bg-purple-glow/20 text-purple-glow border border-purple-glow/30"
                      : "bg-white/5 text-muted hover:text-soft-white border border-transparent"
                  }`}
                >
                  {d}d
                </button>
              ))}
              <button
                onClick={fetchAnalytics}
                className="ml-auto px-3 py-1.5 rounded-lg text-xs bg-white/5 text-muted hover:text-soft-white"
              >
                Refresh
              </button>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard
                label="Page Views"
                value={analytics?.total_views || 0}
              />
              <StatCard
                label="Link Clicks"
                value={analytics?.total_clicks || 0}
              />
              <StatCard
                label="CTR"
                value={
                  analytics && analytics.total_views > 0
                    ? `${((analytics.total_clicks / analytics.total_views) * 100).toFixed(1)}%`
                    : "0%"
                }
              />
              <StatCard
                label="Period"
                value={`${period} days`}
              />
            </div>

            {/* Top links */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-soft-white font-semibold">Top Links</h2>
              {analytics?.top_links?.length ? (
                <div className="space-y-2">
                  {analytics.top_links.map((link, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-card-border last:border-0"
                    >
                      <div>
                        <p className="text-soft-white text-sm">
                          {link.link_label || "Unknown"}
                        </p>
                        <p className="text-muted text-xs truncate max-w-[300px]">
                          {link.link_url}
                        </p>
                      </div>
                      <span className="text-purple-glow font-semibold text-sm">
                        {link.count}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted text-sm">No click data yet</p>
              )}
            </div>

            {/* Views by page + Device + Country */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-6 space-y-3">
                <h3 className="text-soft-white font-semibold text-sm">
                  Views by Page
                </h3>
                {analytics?.views_by_page?.map((v, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted">{v.page}</span>
                    <span className="text-soft-white">{v.count}</span>
                  </div>
                )) || <p className="text-muted text-xs">No data</p>}
              </div>
              <div className="glass-card p-6 space-y-3">
                <h3 className="text-soft-white font-semibold text-sm">
                  Devices
                </h3>
                {analytics?.device_breakdown?.map((d, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted capitalize">
                      {d.device_type}
                    </span>
                    <span className="text-soft-white">{d.count}</span>
                  </div>
                )) || <p className="text-muted text-xs">No data</p>}
              </div>
              <div className="glass-card p-6 space-y-3">
                <h3 className="text-soft-white font-semibold text-sm">
                  Countries
                </h3>
                {analytics?.country_breakdown?.map((c, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted">
                      {c.country || "Unknown"}
                    </span>
                    <span className="text-soft-white">{c.count}</span>
                  </div>
                )) || <p className="text-muted text-xs">No data</p>}
              </div>
            </div>
          </div>
        )}

        {activeTab === "content" && (
          <div className="space-y-6">
            {/* Bio */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-soft-white font-semibold">Bio Text</h2>
              <input
                type="text"
                value={bioText}
                onChange={(e) => setBioText(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-card-border text-soft-white text-sm focus:outline-none focus:border-purple-glow/50"
              />
              <button
                onClick={() => saveConfig("bio", bioText)}
                disabled={saving}
                className="px-4 py-2 rounded-lg bg-purple-glow/20 text-purple-glow text-xs font-medium hover:bg-purple-glow/30 transition-all disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Bio"}
              </button>
            </div>

            {/* Instagram Posts */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-soft-white font-semibold">
                Instagram Post URLs
              </h2>
              <p className="text-muted text-xs">One URL per line</p>
              <textarea
                value={igPosts}
                onChange={(e) => setIgPosts(e.target.value)}
                rows={8}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-card-border text-soft-white text-sm focus:outline-none focus:border-purple-glow/50 font-mono"
              />
              <button
                onClick={() =>
                  saveConfig(
                    "instagram_posts",
                    igPosts
                      .split("\n")
                      .map((u) => u.trim())
                      .filter(Boolean)
                  )
                }
                disabled={saving}
                className="px-4 py-2 rounded-lg bg-purple-glow/20 text-purple-glow text-xs font-medium hover:bg-purple-glow/30 transition-all disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Instagram Posts"}
              </button>
            </div>

            {/* Current config dump */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-soft-white font-semibold">
                All Config (read-only)
              </h2>
              <pre className="text-muted text-xs overflow-auto max-h-[300px] bg-white/5 p-4 rounded-lg">
                {JSON.stringify(config, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="glass-card p-5 text-center space-y-1">
      <p className="text-2xl md:text-3xl font-bold gradient-text">
        {typeof value === "number" ? value.toLocaleString() : value}
      </p>
      <p className="text-muted text-xs tracking-wider uppercase">{label}</p>
    </div>
  );
}
