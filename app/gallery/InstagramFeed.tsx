"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Most recent first — mix of confirmed working + newly found recent posts
const postUrls = [
  "https://www.instagram.com/p/DRNiP8pjpRK/",  // "I bet I can make U say I love U"
  "https://www.instagram.com/p/DPwrjl1jjtG/",  // "Couldn't get any better"
  "https://www.instagram.com/p/DOMp9mlDk1b/",  // "I Wanna B where U are" (confirmed)
  "https://www.instagram.com/p/DM8fGLFRdZO/",  // "I'll see you in the city" (confirmed)
  "https://www.instagram.com/p/DLbFE8kMuhS/",  // "The Playmaker" (confirmed)
  "https://www.instagram.com/p/DI2BH5GODoU/",  // "Not Regular" (confirmed)
];

export function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (existing) {
      const ig = (window as unknown as Record<string, { Embeds: { process: () => void } }>).instgrm;
      if (ig) ig.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      const ig = (window as unknown as Record<string, { Embeds: { process: () => void } }>).instgrm;
      if (ig) ig.Embeds.process();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="space-y-6">
      {/* Profile header */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#FCAF45] p-[2px] flex-shrink-0">
            <Image
              src="/photos/Syren4.jpeg"
              alt="SyrenEffect on Instagram"
              width={56}
              height={56}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-soft-white font-semibold">@syreneffect</h3>
            <p className="text-muted text-sm">21.4K followers</p>
          </div>
          <a
            href="https://www.instagram.com/syreneffect"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] text-white text-xs font-semibold hover:shadow-[0_0_20px_rgba(228,64,95,0.3)] hover:scale-105 transition-all"
          >
            Follow
          </a>
        </div>
      </div>

      {/* Real Instagram post embeds — most recent first */}
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postUrls.map((url) => (
          <div key={url} className="glass-card p-3 overflow-hidden">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "transparent",
                border: "0",
                margin: "0",
                padding: "0",
                width: "100%",
                maxWidth: "540px",
              }}
            >
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-[#E4405F] transition-colors">
                View post on Instagram
              </a>
            </blockquote>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://www.instagram.com/syreneffect"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted hover:text-[#E4405F] transition-colors tracking-wider uppercase"
        >
          View all posts on Instagram
        </a>
      </div>
    </div>
  );
}
