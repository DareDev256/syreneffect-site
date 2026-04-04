"use client";

export function TwitterFeed() {
  // X/Twitter timeline embed is broken for logged-out users (Elon killed it).
  // Instead we show a styled profile card with CTA.
  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-soft-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-soft-white font-semibold">@syreneffect</h3>
          <p className="text-muted text-sm">3.7K followers</p>
        </div>
        <a
          href="https://x.com/syreneffect"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-white/10 text-soft-white text-xs font-semibold hover:bg-white/20 hover:scale-105 transition-all"
        >
          Follow
        </a>
      </div>

      <p className="text-soft-white/70 text-sm mb-4">
        Yours Truly / Digital Creator / Oneofak1nd
      </p>

      <div className="border-t border-card-border pt-4">
        <a
          href="https://x.com/syreneffect"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted hover:text-soft-white transition-colors text-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
          View posts on X
        </a>
      </div>
    </div>
  );
}
