-- SyrenEffect Database Schema
-- Run this in Supabase SQL Editor after creating the project

-- ============================================
-- ANALYTICS: Page views + Link clicks
-- ============================================
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL CHECK (event_type IN ('page_view', 'link_click')),
  page TEXT NOT NULL,
  link_url TEXT,
  link_label TEXT,
  referrer TEXT,
  user_agent TEXT,
  country TEXT,
  city TEXT,
  device_type TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for fast dashboard queries
CREATE INDEX idx_analytics_created_at ON analytics_events (created_at DESC);
CREATE INDEX idx_analytics_event_type ON analytics_events (event_type);
CREATE INDEX idx_analytics_page ON analytics_events (page);

-- RLS: Anyone can INSERT (tracking), only service role can SELECT
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON analytics_events
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Only service role can read" ON analytics_events
  FOR SELECT TO service_role USING (true);

-- ============================================
-- SITE CONFIG: Manageable content
-- ============================================
CREATE TABLE IF NOT EXISTS site_config (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Default config entries
INSERT INTO site_config (key, value) VALUES
  ('bio', '"Digital Creator & Twitch Streamer"'),
  ('schedule', '["Wed", "Thu", "Sun"]'),
  ('instagram_posts', '["https://www.instagram.com/p/DTvoQXwDlby/","https://www.instagram.com/p/DR8E0Cejuc_/","https://www.instagram.com/p/DO9NxVNjlPD/","https://www.instagram.com/p/DFLi2lgRTEU/","https://www.instagram.com/p/DOMp9mlDk1b/","https://www.instagram.com/p/DRNiP8pjpRK/","https://www.instagram.com/p/DM8fGLFRdZO/","https://www.instagram.com/p/DLbFE8kMuhS/"]'),
  ('background_photos', '["/photos/Syren1.jpeg","/photos/Syren2.jpeg","/photos/Syren3.jpeg","/photos/Syren5.jpeg","/photos/Syren6.jpeg","/photos/Syren7.jpeg","/photos/Syren8.jpeg"]'),
  ('social_links', '{}')
ON CONFLICT (key) DO NOTHING;

-- RLS: Anyone can read config, only service role can update
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read config" ON site_config
  FOR SELECT TO anon USING (true);

CREATE POLICY "Service role can manage config" ON site_config
  FOR ALL TO service_role USING (true);
