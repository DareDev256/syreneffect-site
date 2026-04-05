import Image from "next/image";
import { TwitchPlayer } from "./components/TwitchPlayer";
import { SocialLinks } from "./components/SocialLinks";
import { PhotoBackground } from "./components/PhotoBackground";
import { SocialIcons } from "./components/SocialIcons";

/* SVG flag components */
function GreeceFlag() {
  return (
    <svg className="inline-block w-5 h-4 rounded-[2px] overflow-hidden" viewBox="0 0 27 18">
      <rect width="27" height="18" fill="#0D5EAF" />
      <rect y="2" width="27" height="2" fill="#FFF" />
      <rect y="6" width="27" height="2" fill="#FFF" />
      <rect y="10" width="27" height="2" fill="#FFF" />
      <rect y="14" width="27" height="2" fill="#FFF" />
      <rect width="10" height="10" fill="#0D5EAF" />
      <rect x="4" width="2" height="10" fill="#FFF" />
      <rect y="4" width="10" height="2" fill="#FFF" />
    </svg>
  );
}

function IranFlag() {
  return (
    <svg className="inline-block w-5 h-4 rounded-[2px] overflow-hidden" viewBox="0 0 21 12">
      <rect width="21" height="4" fill="#239F40" />
      <rect y="4" width="21" height="4" fill="#FFF" />
      <rect y="8" width="21" height="4" fill="#DA0000" />
      <circle cx="10.5" cy="6" r="1.8" fill="#DA0000" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-teal-glow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

const stats = [
  { value: "21.4K", label: "Instagram", color: "text-[#E4405F]" },
  { value: "3.7K", label: "X / Twitter", color: "text-soft-white" },
  { value: "3x", label: "Weekly Streams", color: "text-purple-glow" },
  { value: "24hr", label: "Monthly Marathon", color: "text-teal-glow" },
];

const clips = [
  {
    title: "Fortnite stream highlights",
    embed: "https://www.youtube.com/embed/cb-oDl9xRKY",
    platform: "YouTube",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ========== SECTION 1: HERO ========== */}
      <section className="relative flex items-stretch pt-16 md:pt-[72px] min-h-screen">
        <PhotoBackground />

        {/* === DESKTOP: 3-column === */}
        <div className="relative z-10 hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 w-full max-w-[1400px] mx-auto px-6 py-6 items-center min-h-[calc(100vh-72px)]">
          {/* LEFT — Twitch */}
          <div className="flex flex-col gap-4 h-full justify-center max-h-[70vh]">
            <TwitchPlayer />
            <a
              href="https://www.twitch.tv/syreneffect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-soft-white transition-colors tracking-wider uppercase"
            >
              Open in Twitch
            </a>
          </div>

          {/* CENTER — Profile */}
          <div className="flex flex-col items-center text-center gap-5 py-4">
            <div className="avatar-ring">
              <Image
                src="/photos/Syren4.jpeg"
                alt="SyrenEffect"
                width={120}
                height={120}
                className="rounded-full object-cover w-[120px] h-[120px]"
                priority
              />
            </div>
            <div className="space-y-2">
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold gradient-text tracking-tight">
                THE SYREN
                <br />
                EFFECT
              </h1>
              <p className="text-muted text-sm tracking-[0.1em]">@syreneffect</p>
            </div>
            <p className="text-soft-white/80 text-sm max-w-[200px] leading-relaxed">
              Digital Creator
              <br />
              Twitch Streamer
              <br />
              <span className="inline-flex items-center gap-1.5 mt-2">
                <GreeceFlag />
                <IranFlag />
              </span>
            </p>
            <div className="glass-card inline-flex items-center gap-2 px-4 py-2">
              <CalendarIcon />
              <span className="text-xs font-medium tracking-wider uppercase text-soft-white/90">
                Wed · Thu · Sun
              </span>
            </div>
          </div>

          {/* RIGHT — Social Links */}
          <div className="flex flex-col justify-center h-full">
            <SocialLinks />
          </div>
        </div>

        {/* === MOBILE: Stacked === */}
        <div className="relative z-10 md:hidden flex flex-col w-full max-w-lg mx-auto px-4 py-6 gap-5">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="avatar-ring">
              <Image
                src="/photos/Syren4.jpeg"
                alt="SyrenEffect"
                width={100}
                height={100}
                className="rounded-full object-cover w-[100px] h-[100px]"
                priority
              />
            </div>
            <div className="space-y-1">
              <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
                THE SYREN EFFECT
              </h1>
              <p className="text-muted text-xs tracking-[0.1em]">@syreneffect</p>
            </div>
            <p className="text-soft-white/70 text-sm flex items-center gap-2">
              Digital Creator & Streamer
              <GreeceFlag />
              <IranFlag />
            </p>
            <div className="glass-card inline-flex items-center gap-2 px-3 py-1.5">
              <CalendarIcon />
              <span className="text-[10px] font-medium tracking-wider uppercase text-soft-white/90">
                Live Wed · Thu · Sun
              </span>
            </div>
          </div>
          <TwitchPlayer />
          <SocialLinks />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
          <svg className="w-5 h-5 text-soft-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* ========== SECTION 2: STATS BANNER ========== */}
      <section className="relative z-10 py-12 border-y border-card-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <p className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-muted text-xs tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: CLIPS / VIDEOS ========== */}
      <section className="relative py-20 px-4 overflow-hidden">
        <PhotoBackground />
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="text-center space-y-3">
            <p className="text-xs text-purple-glow tracking-[0.3em] uppercase font-medium">
              Watch
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold gradient-text">
              Latest Clips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clips.map((clip) => (
              <div key={clip.title} className="glass-card overflow-hidden group">
                <div className="aspect-video">
                  <iframe
                    src={clip.embed}
                    title={clip.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="p-4">
                  <p className="text-soft-white text-sm font-medium">{clip.title}</p>
                  <p className="text-muted text-xs mt-1">{clip.platform}</p>
                </div>
              </div>
            ))}

            {/* Placeholder for more clips */}
            <a
              href="https://www.youtube.com/@syreneffect"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center justify-center aspect-video group hover:border-purple-glow/30 transition-all"
            >
              <div className="text-center space-y-3">
                <svg className="w-10 h-10 text-muted/40 group-hover:text-purple-glow mx-auto transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
                <p className="text-muted/60 text-sm group-hover:text-soft-white transition-colors">
                  More on YouTube
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: COLLABS ========== */}
      <section className="relative py-20 px-4 border-t border-card-border">
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="text-center space-y-3">
            <p className="text-xs text-teal-glow tracking-[0.3em] uppercase font-medium">
              Community
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold gradient-text">
              Collabs & Features
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Placeholder collab cards — Syren will fill these */}
            {[
              { name: "Coming Soon", role: "Stream collab" },
              { name: "Coming Soon", role: "Stream collab" },
              { name: "Coming Soon", role: "Stream collab" },
            ].map((collab, i) => (
              <div key={i} className="glass-card p-6 text-center space-y-3 group hover:border-purple-glow/30 transition-all">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-glow/20 to-teal-glow/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-muted/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="text-soft-white/60 text-sm font-medium">{collab.name}</p>
                <p className="text-muted text-xs">{collab.role}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted text-sm">
            Interested in collaborating?{" "}
            <a href="mailto:management@syreneffect.com" className="text-purple-glow hover:text-teal-glow transition-colors">
              Get in touch
            </a>
          </p>
        </div>
      </section>

      {/* ========== SECTION 5: CONNECT ========== */}
      <section className="relative py-20 px-4 border-t border-card-border overflow-hidden">
        <PhotoBackground />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="text-center space-y-3">
            <p className="text-xs text-pink-accent tracking-[0.3em] uppercase font-medium">
              Follow
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold gradient-text">
              Connect With Syren
            </h2>
          </div>

          <SocialIcons size="lg" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://www.twitch.tv/syreneffect"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-glow to-teal-glow text-white font-semibold text-sm tracking-wider uppercase hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:scale-105 transition-all"
            >
              Watch on Twitch
            </a>
            <a
              href="/about"
              className="px-8 py-3.5 rounded-full border border-card-border text-soft-white font-medium text-sm tracking-wider uppercase hover:border-purple-glow/40 hover:bg-card-bg transition-all hover:scale-105"
            >
              About Syren
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
