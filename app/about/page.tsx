import type { Metadata } from "next";
import Image from "next/image";
import { PhotoBackground } from "../components/PhotoBackground";
import { SocialIcons } from "../components/SocialIcons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet SyrenEffect — Greek-Iranian content creator and Twitch streamer based in Toronto. Streaming every Wednesday, Thursday & Sunday with monthly 24-hour marathon streams.",
  openGraph: {
    title: "About SyrenEffect",
    description:
      "Greek-Iranian content creator and Twitch streamer. Live every Wed/Thu/Sun.",
  },
};

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
                alt="SyrenEffect"
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
              SyrenEffect is a digital content creator who has built a community
              across Twitch, Instagram, TikTok, and YouTube. With over 21K
              followers on Instagram and a growing audience across all platforms,
              she brings authenticity, energy, and personality to every stream
              and post.
            </p>
            <p className="text-soft-white/70 leading-relaxed">
              Born of Greek and Iranian heritage, Syren streams live every
              Wednesday, Thursday, and Sunday — with monthly 24-hour marathon
              streams that have become a community staple.
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

          <section className="glass-card p-8 space-y-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
              Work With Syren
            </h2>
            <p className="text-soft-white/70 leading-relaxed">
              Open to brand partnerships, sponsorships, and collaborations.
              Whether you are a gaming brand, lifestyle company, or content
              platform — let us create something together.
            </p>
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
