import type { Metadata } from "next";
import Image from "next/image";
import { PhotoBackground } from "../components/PhotoBackground";
import { SocialIcons } from "../components/SocialIcons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet SyrenEffect — Greek-Iranian content creator, Twitch streamer, and digital influencer based in Toronto. Featured with Roy Woods, MK, Bktherula, Ramriddlz, Neon, and more. Live every Wed, Thu & Sun with monthly 24-hour marathons.",
  keywords: [
    "SyrenEffect",
    "Syren Effect",
    "Toronto Twitch streamer",
    "Greek Iranian creator",
    "content creator Toronto",
    "female Twitch streamer",
    "gaming streamer",
    "Roy Woods collab",
    "PLYGRND cast",
    "Bktherula",
    "Ramriddlz",
    "MK Kiatipis",
    "Neon",
    "K Showtime",
    "Twitch Toronto",
    "live streamer Canada",
  ],
  openGraph: {
    title: "About SyrenEffect — Toronto Creator & Twitch Streamer",
    description:
      "Greek-Iranian content creator and Twitch streamer. Featured with Roy Woods, MK, Bktherula, Ramriddlz & more. Live every Wed/Thu/Sun.",
  },
};

const collabHighlights = [
  {
    name: "Neon",
    desc: "Viral content creator and streamer",
    image: "/photos/collabs/neon.webp",
    link: "https://www.instagram.com/n3onsingh/",
  },
  {
    name: "Bktherula",
    desc: "Atlanta rapper and recording artist",
    image: "/photos/collabs/bktherula.webp",
    link: "https://www.instagram.com/bktherula/",
  },
  {
    name: "Roy Woods",
    desc: "OVO Sound artist, Canadian rapper & singer from Brampton",
    image: "/photos/collabs/roy-woods.webp",
    link: "https://www.instagram.com/roywoods/",
  },
  {
    name: "MK",
    desc: "Street basketball creator from Ontario with 5M+ followers",
    image: "/photos/collabs/mk-kiatipis.webp",
    link: "https://www.instagram.com/mkiatipis/",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      <PhotoBackground />

      <div className="max-w-3xl mx-auto space-y-16 relative z-10">
        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative flex-shrink-0">
            <div className="avatar-ring">
              <Image
                src="/photos/Syren5.jpeg"
                alt="SyrenEffect — Toronto Twitch Streamer and Content Creator"
                width={200}
                height={200}
                className="rounded-full object-cover w-[200px] h-[200px]"
                priority
              />
            </div>
          </div>
          <div className="text-center md:text-left space-y-4">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold gradient-text">
              About Syren
            </h1>
            <p className="text-soft-white/80 text-lg leading-relaxed">
              Greek-Iranian content creator, Twitch streamer, and digital
              influencer based in Toronto, Canada.
            </p>
          </div>
        </div>

        {/* Bio sections */}
        <div className="space-y-8">
          <section className="glass-card p-8 space-y-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
              The Creator
            </h2>
            <p className="text-soft-white/70 leading-relaxed">
              SyrenEffect is a Toronto-based digital creator who has built a
              loyal community across Twitch, Instagram, TikTok, and beyond. With
              over 21K followers on Instagram and a rapidly growing audience, she
              brings authenticity, energy, and personality to every stream and
              post.
            </p>
            <p className="text-soft-white/70 leading-relaxed">
              Born of Greek and Iranian heritage, Syren streams live every
              Wednesday, Thursday, and Sunday — with monthly 24-hour marathon
              streams that have become a community staple. Her content spans
              gaming, lifestyle, and entertainment, connecting audiences through
              genuine interaction and creative collaborations.
            </p>
          </section>

          <section className="glass-card p-8 space-y-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
              Streaming
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-purple-glow">3x</p>
                <p className="text-muted text-sm">Weekly streams</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-teal-glow">24hr</p>
                <p className="text-muted text-sm">Monthly marathon</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-2xl font-bold text-pink-accent">21K+</p>
                <p className="text-muted text-sm">Instagram followers</p>
              </div>
            </div>
          </section>

          {/* Collabs section on About page */}
          <section className="glass-card p-8 space-y-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
              Collaborations
            </h2>
            <p className="text-soft-white/70 leading-relaxed">
              Syren has worked with creators and artists across music,
              basketball, entertainment, and streaming — from OVO Sound artists
              to viral content creators with millions of followers.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {collabHighlights.map((collab) => (
                <a
                  key={collab.name}
                  href={collab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <Image
                    src={collab.image}
                    alt={collab.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover ring-1 ring-purple-glow/20 group-hover:ring-purple-glow/50 transition-all flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-soft-white text-sm font-semibold group-hover:text-purple-glow transition-colors truncate">
                      {collab.name}
                    </p>
                    <p className="text-muted text-xs truncate">{collab.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-muted text-xs text-center pt-2">
              Also featured with Khalil, Neon, K Showtime, Lebraun Smith,
              Swavy, Alk Hussein, Nater, and as a cast member on{" "}
              <span className="text-teal-glow">PLYGRND</span> (live show on
              Twitch & Kick).
            </p>
          </section>

          <section className="glass-card p-8 space-y-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
              Work With Syren
            </h2>
            <p className="text-soft-white/70 leading-relaxed">
              Open to brand partnerships, sponsorships, and collaborations.
              Whether you are a gaming brand, lifestyle company, or content
              platform — let us create something together.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:management@syreneffect.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-glow to-teal-glow text-white font-semibold text-sm tracking-wider uppercase hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:scale-105 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                Business Inquiries
              </a>
              <a
                href="/media-kit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-card-border text-soft-white font-medium text-sm tracking-wider uppercase hover:border-purple-glow/40 hover:bg-card-bg transition-all hover:scale-105"
              >
                View Media Kit
              </a>
            </div>
          </section>
        </div>

        {/* Social icons */}
        <div className="text-center space-y-4">
          <p className="text-muted text-sm tracking-wider uppercase">
            Find Syren everywhere
          </p>
          <SocialIcons size="lg" />
        </div>
      </div>
    </div>
  );
}
