"use client";

import { useEffect, useRef, useState } from "react";

const TWITCH_CHANNEL = "syreneffect";

export function TwitchPlayer() {
  const [loaded, setLoaded] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const embedCreated = useRef(false);
  const embedId = useRef(
    `twitch-${Math.random().toString(36).slice(2, 8)}`
  );

  // Check live status
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const resp = await fetch("https://gql.twitch.tv/gql", {
          method: "POST",
          headers: {
            "Client-Id": "kimne78kx3ncx6brgo4mv6wki5h1ko",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `query { user(login: "${TWITCH_CHANNEL}") { stream { title viewersCount game { name } } } }`,
          }),
        });
        const data = await resp.json();
        setIsLive(!!data?.data?.user?.stream);
      } catch {
        setIsLive(false);
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Load Twitch embed — singleton guard
  useEffect(() => {
    if (embedCreated.current) return;

    const parent =
      typeof window !== "undefined" ? window.location.hostname : "localhost";

    const initEmbed = () => {
      if (embedCreated.current) return;
      const tw = (window as unknown as Record<string, unknown>).Twitch as
        | {
            Embed: new (id: string, opts: Record<string, unknown>) => unknown;
          }
        | undefined;
      if (tw && containerRef.current) {
        embedCreated.current = true;
        new tw.Embed(embedId.current, {
          width: "100%",
          height: "100%",
          channel: TWITCH_CHANNEL,
          parent: [parent],
          layout: "video",
          theme: "dark",
          allowfullscreen: true,
          muted: true,
        });
        setLoaded(true);
      }
    };

    // If Twitch script already loaded by another component
    if ((window as unknown as Record<string, unknown>).Twitch) {
      initEmbed();
      return;
    }

    // Check if script tag already exists
    const existing = document.querySelector(
      'script[src="https://embed.twitch.tv/embed/v1.js"]'
    );
    if (existing) {
      existing.addEventListener("load", initEmbed);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://embed.twitch.tv/embed/v1.js";
    script.async = true;
    script.onload = initEmbed;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="glass-card overflow-hidden relative">
      {isLive && (
        <div className="absolute top-3 left-3 z-20 live-badge px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
          LIVE
        </div>
      )}
      <div
        ref={containerRef}
        id={embedId.current}
        className="w-full aspect-video"
      >
        {!loaded && (
          <div className="w-full h-full flex items-center justify-center bg-abyss/50 aspect-video">
            <div className="text-center space-y-3">
              <svg
                className="w-10 h-10 text-purple-glow mx-auto animate-pulse"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
              </svg>
              <p className="text-muted text-xs">Loading stream...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
