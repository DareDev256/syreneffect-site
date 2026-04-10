"use client";

import { useState } from "react";

const GUILD_ID = "1347381472117657621";
const INVITE_URL = "https://discord.gg/GvZVgSCV";

export function DiscordWidget() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
          </svg>
          <div>
            <p className="text-soft-white text-sm font-semibold">
              Syren&apos;s Safe Space
            </p>
            <p className="text-muted text-xs">260+ members</p>
          </div>
        </div>
        <a
          href={INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-[#5865F2] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#4752C4] transition-colors"
        >
          Join
        </a>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-muted text-xs hover:text-soft-white transition-colors w-full text-left"
      >
        {expanded ? "Hide preview ▲" : "Show server preview ▼"}
      </button>

      {expanded && (
        <div className="rounded-xl overflow-hidden border border-card-border">
          <iframe
            src={`https://discord.com/widget?id=${GUILD_ID}&theme=dark`}
            width="100%"
            height="400"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="border-0"
            title="Discord Server Widget"
          />
        </div>
      )}
    </div>
  );
}
