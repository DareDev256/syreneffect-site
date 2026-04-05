-- Run this AFTER schema.sql in the Supabase SQL Editor
-- These are the RPC functions used by the admin analytics dashboard

CREATE OR REPLACE FUNCTION get_views_by_page(since_date TIMESTAMPTZ)
RETURNS TABLE(page TEXT, count BIGINT) AS $$
  SELECT page, COUNT(*) as count
  FROM analytics_events
  WHERE event_type = 'page_view' AND created_at >= since_date
  GROUP BY page
  ORDER BY count DESC
  LIMIT 10;
$$ LANGUAGE sql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION get_top_links(since_date TIMESTAMPTZ)
RETURNS TABLE(link_label TEXT, link_url TEXT, count BIGINT) AS $$
  SELECT link_label, link_url, COUNT(*) as count
  FROM analytics_events
  WHERE event_type = 'link_click' AND created_at >= since_date
  GROUP BY link_label, link_url
  ORDER BY count DESC
  LIMIT 10;
$$ LANGUAGE sql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION get_device_breakdown(since_date TIMESTAMPTZ)
RETURNS TABLE(device_type TEXT, count BIGINT) AS $$
  SELECT device_type, COUNT(*) as count
  FROM analytics_events
  WHERE created_at >= since_date
  GROUP BY device_type
  ORDER BY count DESC;
$$ LANGUAGE sql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION get_country_breakdown(since_date TIMESTAMPTZ)
RETURNS TABLE(country TEXT, count BIGINT) AS $$
  SELECT country, COUNT(*) as count
  FROM analytics_events
  WHERE created_at >= since_date AND country != ''
  GROUP BY country
  ORDER BY count DESC
  LIMIT 10;
$$ LANGUAGE sql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION get_daily_stats(since_date TIMESTAMPTZ)
RETURNS TABLE(day TEXT, views BIGINT, clicks BIGINT) AS $$
  SELECT
    TO_CHAR(created_at::date, 'YYYY-MM-DD') as day,
    COUNT(*) FILTER (WHERE event_type = 'page_view') as views,
    COUNT(*) FILTER (WHERE event_type = 'link_click') as clicks
  FROM analytics_events
  WHERE created_at >= since_date
  GROUP BY created_at::date
  ORDER BY day DESC;
$$ LANGUAGE sql SECURITY DEFINER;
