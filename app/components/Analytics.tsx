"use client";

import { usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";

export function Analytics() {
  const pathname = usePathname();

  // Track page view
  useEffect(() => {
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_type: "page_view",
        page: pathname,
        referrer: document.referrer || null,
      }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}

// Hook for tracking link clicks — use in any component
export function useTrackClick() {
  return useCallback((url: string, label: string) => {
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_type: "link_click",
        page: window.location.pathname,
        link_url: url,
        link_label: label,
      }),
    }).catch(() => {});
  }, []);
}
