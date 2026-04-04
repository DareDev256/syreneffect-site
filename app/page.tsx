import Image from "next/image";
import { TwitchPlayer } from "./components/TwitchPlayer";
import { SocialLinks } from "./components/SocialLinks";
import { PhotoBackground } from "./components/PhotoBackground";

/* Inline SVG flag components */
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative flex-1 flex items-stretch pt-16 md:pt-[72px]">
        <PhotoBackground />

        {/* === DESKTOP: 3-column === */}
        <div className="relative z-10 hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 w-full max-w-[1400px] mx-auto px-6 py-6 items-center min-h-[calc(100vh-72px)]">
          {/* LEFT — Twitch */}
          <div className="flex flex-col gap-4 h-full justify-center max-h-[70vh]">
            <TwitchPlayer />
            <div className="flex items-center gap-3">
              <a
                href="https://www.twitch.tv/syreneffect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-soft-white transition-colors tracking-wider uppercase"
              >
                Open in Twitch
              </a>
              <span className="text-muted/30">|</span>
              <a
                href="https://kick.com/syreneffect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-[#53FC18] transition-colors tracking-wider uppercase flex items-center gap-1"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 2h4v4h4V2h4v4h-4v4h4v4h-4v4h4v4h-4v-4h-4v4H4v-4h4v-4H4v-4h4V6H4V2z" />
                </svg>
                Kick
              </a>
            </div>
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
      </section>
    </div>
  );
}
