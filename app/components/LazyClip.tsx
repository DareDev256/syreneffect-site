"use client";

import { useRef, useState, useEffect } from "react";

interface LazyClipProps {
  title: string;
  embed: string;
  platform: string;
}

export function LazyClip({ title, embed, platform }: LazyClipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass-card overflow-hidden group">
      <div className="aspect-video">
        {visible ? (
          <iframe
            src={embed}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            className="w-full h-full border-0"
          />
        ) : (
          <div className="w-full h-full bg-card-bg flex items-center justify-center">
            <svg
              className="w-10 h-10 text-purple-glow/30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-soft-white text-sm font-medium">{title}</p>
        <p className="text-muted text-xs mt-1">{platform}</p>
      </div>
    </div>
  );
}
