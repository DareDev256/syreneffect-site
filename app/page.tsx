import Image from "next/image";
import { TwitchPlayer } from "./components/TwitchPlayer";
import { SocialLinks } from "./components/SocialLinks";
import { PhotoBackground } from "./components/PhotoBackground";
import { SocialIcons } from "./components/SocialIcons";
import { SplashGate } from "./components/SplashGate";
import { LazyClip } from "./components/LazyClip";

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

const collabs = [
  {
    name: "Roy Woods",
    role: "OVO Sound Artist",
    image: "/photos/collabs/roy-woods.png",
    link: "https://www.instagram.com/roywoods/",
  },
  {
    name: "MK",
    role: "Street Basketball Creator",
    image: "/photos/collabs/mk-kiatipis.jpg",
    link: "https://www.instagram.com/mkiatipis/",
  },
  {
    name: "SisiBanana",
    role: "Content Creator",
    image: "/photos/collabs/sisibanana.jpg",
    link: "https://www.instagram.com/sisibanana/",
  },
  {
    name: "KShowTime",
    role: "Entertainment Creator",
    image: "/photos/collabs/kshowtime.jpg",
    link: "https://www.instagram.com/k_showtime/",
  },
  {
    name: "Cribazz",
    role: "Streamer & Creator",
    image: "/photos/collabs/cribazz.png",
    link: "https://www.twitch.tv/cribazz",
  },
  {
    name: "Kishka",
    role: "Twitch Streamer",
    image: "/photos/collabs/kishka.png",
    link: "https://www.instagram.com/almightykishka/",
  },
  {
    name: "Ryan Diaz",
    role: "Creator & Streamer",
    image: "/photos/collabs/ryan-diaz.png",
    link: "https://www.instagram.com/ryan_railer/",
  },
  {
    name: "Khalil",
    role: "Twitch Streamer",
    image: "/photos/collabs/khalil.png",
    link: "https://www.twitch.tv/khalil_",
  },
  {
    name: "RicohEffna",
    role: "Content Creator",
    image: null,
    link: null,
  },
];

const clips = [
  {
    title: "sexyy red x syreneffect",
    embed: "https://clips.twitch.tv/embed?clip=AbstemiousWanderingBaguetteWutFace-LmUq5-EnpgGYt-Iz&parent=syreneffect.com&parent=localhost",
    platform: "Twitch Clip",
  },
  {
    title: "poppin bottle$$$",
    embed: "https://clips.twitch.tv/embed?clip=AdorableSuccessfulSardineTBTacoLeft-jr5Zos6THWdImhRm&parent=syreneffect.com&parent=localhost",
    platform: "Twitch Clip",
  },
  {
    title: "BB Motion",
    embed: "https://clips.twitch.tv/embed?clip=WonderfulHardClintJKanStyle-lEmo1Bfe6ywqguwU&parent=syreneffect.com&parent=localhost",
    platform: "Twitch Clip",
  },
  {
    title: "yams stacked",
    embed: "https://clips.twitch.tv/embed?clip=RealAssiduousWaffleRalpherZ-9WMtXxC4k7Qk8TOc&parent=syreneffect.com&parent=localhost",
    platform: "Twitch Clip",
  },
  {
    title: "Fortnite stream highlights",
    embed: "https://www.youtube.com/embed/cb-oDl9xRKY",
    platform: "YouTube",
  },
  {
    title: "splits",
    embed: "https://clips.twitch.tv/embed?clip=AthleticUnusualSquidRaccAttack-GlGxgVXX8yqndp5h&parent=syreneffect.com&parent=localhost",
    platform: "Twitch Clip",
  },
];

export default function Home() {
  return (
    <SplashGate>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clips.map((clip) => (
              <LazyClip
                key={clip.title}
                title={clip.title}
                embed={clip.embed}
                platform={clip.platform}
              />
            ))}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {collabs.map((collab) => {
              const Card = (
                <div className="glass-card p-5 text-center space-y-3 group hover:border-purple-glow/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all">
                  {collab.image ? (
                    <Image
                      src={collab.image}
                      alt={collab.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 mx-auto rounded-full object-cover ring-2 ring-purple-glow/20 group-hover:ring-purple-glow/50 transition-all"
                    />
                  ) : (
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-glow/30 to-teal-glow/20 flex items-center justify-center ring-2 ring-purple-glow/20">
                      <span className="text-soft-white/60 text-lg font-bold">
                        {collab.name.split(" ").map((w) => w[0]).join("")}
                      </span>
                    </div>
                  )}
                  <p className="text-soft-white text-sm font-semibold group-hover:text-purple-glow transition-colors">
                    {collab.name}
                  </p>
                  <p className="text-muted text-xs">{collab.role}</p>
                </div>
              );
              return collab.link ? (
                <a
                  key={collab.name}
                  href={collab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Card}
                </a>
              ) : (
                <div key={collab.name}>{Card}</div>
              );
            })}
          </div>

          {/* PLYGRND mention */}
          <div className="glass-card p-4 text-center max-w-md mx-auto opacity-80">
            <p className="text-soft-white/70 text-sm">
              Also featured on{" "}
              <span className="text-teal-glow font-semibold">PLYGRND</span>
              {" "}&mdash; a live streaming show on Twitch & Kick
            </p>
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
    </SplashGate>
  );
}
