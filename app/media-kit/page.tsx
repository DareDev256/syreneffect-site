import type { Metadata } from "next";
import Image from "next/image";
import { PhotoBackground } from "../components/PhotoBackground";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "SyrenEffect media kit — audience stats, collaboration highlights, and partnership inquiries for brands and sponsors.",
  openGraph: {
    title: "SyrenEffect Media Kit",
    description:
      "Audience stats, collaboration highlights, and partnership inquiries.",
  },
};

const platforms = [
  {
    name: "Instagram",
    handle: "@syreneffect",
    followers: "21.4K",
    color: "text-[#E4405F]",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Twitch",
    handle: "@syreneffect",
    followers: "Growing",
    color: "text-[#9146FF]",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@syren.effect",
    followers: "Growing",
    color: "text-soft-white",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    handle: "@syreneffect",
    followers: "3.7K",
    color: "text-soft-white",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@syreneffect",
    followers: "Growing",
    color: "text-[#FF0000]",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <path d="M9.545 15.568V8.432L15.818 12z" fill="#0a0a0f" />
      </svg>
    ),
  },
];

const collabLogos = [
  { name: "Neon", image: "/photos/collabs/neon.webp" },
  { name: "Bktherula", image: "/photos/collabs/bktherula.webp" },
  { name: "Roy Woods", image: "/photos/collabs/roy-woods.webp" },
  { name: "MK", image: "/photos/collabs/mk-kiatipis.webp" },
  { name: "Ramriddlz", image: "/photos/collabs/ramriddlz.webp" },
  { name: "K Showtime", image: "/photos/collabs/kshowtime.webp" },
];

const contentTypes = [
  {
    type: "Live Streams",
    desc: "3x weekly + monthly 24hr marathons",
    icon: "🎮",
  },
  {
    type: "Short-Form Content",
    desc: "TikTok, Reels, YouTube Shorts",
    icon: "📱",
  },
  {
    type: "Brand Integrations",
    desc: "Product placement, sponsored streams",
    icon: "🤝",
  },
  {
    type: "Event Appearances",
    desc: "Meet & greets, gaming events",
    icon: "🎤",
  },
];

export default function MediaKitPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      <PhotoBackground />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative flex-shrink-0">
            <div className="avatar-ring">
              <Image
                src="/photos/Syren5.jpeg"
                alt="SyrenEffect"
                width={160}
                height={160}
                className="rounded-full object-cover w-[160px] h-[160px]"
                priority
              />
            </div>
          </div>
          <div className="text-center md:text-left space-y-3">
            <p className="text-xs text-purple-glow tracking-[0.3em] uppercase font-medium">
              Media Kit
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold gradient-text">
              SyrenEffect
            </h1>
            <p className="text-soft-white/70 text-lg leading-relaxed max-w-lg">
              Greek-Iranian content creator, Twitch streamer, and digital
              influencer based in Toronto. Authentic energy, loyal community,
              consistent content.
            </p>
          </div>
        </div>

        {/* Audience Overview */}
        <section className="glass-card p-8 space-y-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
            Audience Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl"
              >
                <div className={p.color}>{p.icon}</div>
                <div>
                  <p className={`text-xl font-bold ${p.color}`}>
                    {p.followers}
                  </p>
                  <p className="text-muted text-xs">{p.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-card-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-glow">3x</p>
              <p className="text-muted text-xs">Streams / Week</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-teal-glow">24hr</p>
              <p className="text-muted text-xs">Monthly Marathon</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-pink-accent">18-34</p>
              <p className="text-muted text-xs">Core Demographic</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-soft-white">Toronto</p>
              <p className="text-muted text-xs">Based In</p>
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="glass-card p-8 space-y-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contentTypes.map((c) => (
              <div
                key={c.type}
                className="flex items-start gap-3 p-4 bg-white/5 rounded-xl"
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="text-soft-white font-semibold text-sm">
                    {c.type}
                  </p>
                  <p className="text-muted text-xs">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notable Collaborations */}
        <section className="glass-card p-8 space-y-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
            Notable Collaborations
          </h2>
          <p className="text-soft-white/70 text-sm">
            Featured with artists and creators across music, basketball,
            entertainment, and streaming.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {collabLogos.map((c) => (
              <div key={c.name} className="text-center space-y-2">
                <Image
                  src={c.image}
                  alt={c.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-glow/20 mx-auto"
                />
                <p className="text-muted text-xs">{c.name}</p>
              </div>
            ))}
          </div>
          <p className="text-muted text-xs text-center">
            Also featured as a cast member on{" "}
            <span className="text-teal-glow font-semibold">PLYGRND</span> — a
            live show on Twitch & Kick
          </p>
        </section>

        {/* Brand Values */}
        <section className="glass-card p-8 space-y-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
            Why Syren
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/5 rounded-xl text-center space-y-2">
              <p className="text-purple-glow text-2xl font-bold">Authentic</p>
              <p className="text-muted text-xs">
                Real personality, not a character. Audience trusts her
                recommendations.
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl text-center space-y-2">
              <p className="text-teal-glow text-2xl font-bold">Consistent</p>
              <p className="text-muted text-xs">
                3x weekly streams, daily social posts. Always showing up.
              </p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl text-center space-y-2">
              <p className="text-pink-accent text-2xl font-bold">Connected</p>
              <p className="text-muted text-xs">
                Engaged community that shows up live and interacts across
                platforms.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold gradient-text">
            Let&apos;s Work Together
          </h2>
          <p className="text-soft-white/70 max-w-md mx-auto">
            Open to brand partnerships, sponsorships, event appearances, and
            creative collaborations.
          </p>
          <a
            href="mailto:management@syreneffect.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-glow to-teal-glow text-white font-semibold text-sm tracking-wider uppercase hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:scale-105 transition-all"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            management@syreneffect.com
          </a>
        </section>
      </div>
    </div>
  );
}
