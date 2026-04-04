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

        {/* 6th slot — photo card linking to profile */}
        <a
        href="https://www.instagram.com/syreneffect"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card p-3 overflow-hidden group block"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
          <Image
            src="/photos/Syren2.jpeg"
            alt="View more on Instagram"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-abyss/20 to-transparent flex items-end justify-center pb-6">
            <div className="text-center space-y-2">
              <svg className="w-8 h-8 text-white mx-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <p className="text-white text-sm font-semibold">View all posts</p>
            </div>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
}
