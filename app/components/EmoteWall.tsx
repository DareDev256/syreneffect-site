"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface Emote {
  code: string;
  url: string;
}

/* Konami code: ↑↑↓↓←→←→BA */
const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

/* Popular global emotes as fallback */
const FALLBACK_EMOTES: Emote[] = [
  { code: "LUL", url: "https://cdn.7tv.app/emote/60ae958e229664e8667aea38/2x.webp" },
  { code: "KEKW", url: "https://cdn.7tv.app/emote/60420e3f77137b000de9e675/2x.webp" },
  { code: "catJAM", url: "https://cdn.7tv.app/emote/6042089e77137b000de9df92/2x.webp" },
  { code: "Sadge", url: "https://cdn.7tv.app/emote/61630208c1ff9a15c5f15c78/2x.webp" },
  { code: "monkaS", url: "https://cdn.7tv.app/emote/60ae4bb30e35477634988c18/2x.webp" },
  { code: "PogU", url: "https://cdn.7tv.app/emote/60ae3e54cab55e865925b946/2x.webp" },
  { code: "OMEGALUL", url: "https://cdn.7tv.app/emote/60ae8b11cab55e865924a847/2x.webp" },
  { code: "EZ", url: "https://cdn.7tv.app/emote/63071b80942ffb69e13d700f/2x.webp" },
  { code: "peepoHappy", url: "https://cdn.7tv.app/emote/60bcb44f7229037ee386d09c/2x.webp" },
  { code: "widepeepoHappy", url: "https://cdn.7tv.app/emote/60ae7316f39a7552b658b60d/2x.webp" },
  { code: "Clap", url: "https://cdn.7tv.app/emote/60aed769ac2bcb20ef20363b/2x.webp" },
  { code: "pepeDS", url: "https://cdn.7tv.app/emote/60ae65a4cab55e865924e6ac/2x.webp" },
];

interface FloatingEmote {
  id: number;
  emote: Emote;
  x: number;
  y: number;
  size: number;
  speed: number;
  wobble: number;
  opacity: number;
  delay: number;
}

export function EmoteWall() {
  const [active, setActive] = useState(false);
  const [emotes, setEmotes] = useState<Emote[]>(FALLBACK_EMOTES);
  const [floaters, setFloaters] = useState<FloatingEmote[]>([]);
  const keysRef = useRef<string[]>([]);
  const idRef = useRef(0);

  /* Fetch channel emotes on mount */
  useEffect(() => {
    async function fetchEmotes() {
      const channelEmotes: Emote[] = [];

      /* 7TV */
      try {
        const res = await fetch("https://7tv.io/v3/users/twitch/1278297647");
        if (res.ok) {
          const data = await res.json();
          const set = data?.emote_set?.emotes || [];
          for (const e of set) {
            channelEmotes.push({
              code: e.name,
              url: `https://cdn.7tv.app/emote/${e.id}/2x.webp`,
            });
          }
        }
      } catch {}

      /* BTTV */
      try {
        const res = await fetch(
          "https://api.bettertv.net/3/cached/users/twitch/1278297647"
        );
        if (res.ok) {
          const data = await res.json();
          const all = [
            ...(data.channelEmotes || []),
            ...(data.sharedEmotes || []),
          ];
          for (const e of all) {
            channelEmotes.push({
              code: e.code,
              url: `https://cdn.betterttv.net/emote/${e.id}/2x`,
            });
          }
        }
      } catch {}

      /* FFZ */
      try {
        const res = await fetch(
          "https://api.frankerfacez.com/v1/room/syreneffect"
        );
        if (res.ok) {
          const data = await res.json();
          const sets = Object.values(data.sets || {}) as Array<{
            emoticons: Array<{ name: string; urls: Record<string, string> }>;
          }>;
          for (const set of sets) {
            for (const e of set.emoticons) {
              channelEmotes.push({
                code: e.name,
                url: e.urls["2"] || e.urls["1"] || "",
              });
            }
          }
        }
      } catch {}

      if (channelEmotes.length > 0) {
        setEmotes(channelEmotes);
      }
    }

    fetchEmotes();
  }, []);

  /* Konami code listener */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      keysRef.current.push(e.key);
      if (keysRef.current.length > KONAMI.length) {
        keysRef.current.shift();
      }
      if (keysRef.current.join(",") === KONAMI.join(",")) {
        setActive((prev) => !prev);
        keysRef.current = [];
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Spawn emotes when active */
  const spawnEmote = useCallback(() => {
    const emote = emotes[Math.floor(Math.random() * emotes.length)];
    const id = idRef.current++;
    const floater: FloatingEmote = {
      id,
      emote,
      x: Math.random() * 100,
      y: 100 + Math.random() * 10,
      size: 28 + Math.random() * 32,
      speed: 3 + Math.random() * 4,
      wobble: Math.random() * 20 - 10,
      opacity: 0.7 + Math.random() * 0.3,
      delay: Math.random() * 0.5,
    };
    setFloaters((prev) => [...prev.slice(-60), floater]);
  }, [emotes]);

  useEffect(() => {
    if (!active) {
      setFloaters([]);
      return;
    }
    const interval = setInterval(spawnEmote, 150);
    return () => clearInterval(interval);
  }, [active, spawnEmote]);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Close hint */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-auto">
        <button
          onClick={() => setActive(false)}
          className="glass-card px-4 py-2 text-xs text-soft-white/80 hover:text-soft-white transition-colors"
        >
          Emote Wall Active — Click to close or press ↑↑↓↓←→←→BA again
        </button>
      </div>

      {/* Floating emotes */}
      {floaters.map((f) => (
        <div
          key={f.id}
          className="absolute animate-emote-rise"
          style={{
            left: `${f.x}%`,
            bottom: `-${f.size}px`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            animationDuration: `${f.speed}s`,
            animationDelay: `${f.delay}s`,
            transform: `rotate(${f.wobble}deg)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={f.emote.url}
            alt={f.emote.code}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
