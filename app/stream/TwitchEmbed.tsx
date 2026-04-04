"use client";

import { useEffect, useRef, useState, useId } from "react";

export function TwitchEmbed() {
  const reactId = useId();
  const embedId = `twitch-stream-${reactId.replace(/:/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const embedCreated = useRef(false);

  useEffect(() => {
    if (embedCreated.current) return;

    const parent =
      typeof window !== "undefined" ? window.location.hostname : "localhost";

    const initEmbed = () => {
      if (embedCreated.current) return;
      const el = document.getElementById(embedId);
      if (!el) return;

      const tw = (window as unknown as Record<string, unknown>).Twitch as
        | { Embed: new (id: string, opts: Record<string, unknown>) => unknown }
        | undefined;
      if (tw) {
        embedCreated.current = true;
        new tw.Embed(embedId, {
          width: "100%",
          height: "100%",
          channel: "syreneffect",
          parent: [parent],
          layout: "video-with-chat",
          theme: "dark",
          allowfullscreen: true,
          muted: true,
        });
        setLoaded(true);
      }
    };

    if ((window as unknown as Record<string, unknown>).Twitch) {
      requestAnimationFrame(initEmbed);
      return;
    }

    const existing = document.querySelector(
      'script[src="https://embed.twitch.tv/embed/v1.js"]'
    );
    if (existing) {
      existing.addEventListener("load", initEmbed);
      requestAnimationFrame(initEmbed);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://embed.twitch.tv/embed/v1.js";
    script.async = true;
    script.onload = initEmbed;
    document.head.appendChild(script);
  }, [embedId]);

  return (
    <div className="glass-card overflow-hidden">
      <div
        ref={containerRef}
        id={embedId}
        className="w-full aspect-video md:aspect-[16/9] min-h-[400px] md:min-h-[500px]"
      >
        {!loaded && (
          <div className="w-full h-full flex items-center justify-center bg-abyss/50 min-h-[400px]">
            <div className="text-center space-y-4">
              <svg
                className="w-12 h-12 text-purple-glow mx-auto animate-pulse"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
              </svg>
              <p className="text-muted">Loading Twitch stream...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
