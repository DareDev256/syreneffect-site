import type { Metadata } from "next";
import Image from "next/image";
import { SocialLinks } from "../components/SocialLinks";
import { SocialIcons } from "../components/SocialIcons";
import { PhotoBackground } from "../components/PhotoBackground";

export const metadata: Metadata = {
  title: "Links",
  description:
    "All of SyrenEffect's social media links — Twitch, Instagram, TikTok, X, Kick, and more.",
  openGraph: {
    title: "SyrenEffect Links",
    description: "Find Syren everywhere — all socials in one place.",
  },
};

export default function LinksPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      <PhotoBackground />
      <div className="max-w-lg mx-auto space-y-8 relative z-10">
        {/* Profile Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
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
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold gradient-text">
              THE SYREN EFFECT
            </h1>
            <p className="text-muted text-sm mt-1">@syreneffect</p>
          </div>
          <p className="text-soft-white/70 text-sm">
            Digital Creator & Twitch Streamer
            <br />
            <span className="text-muted text-xs">
              Live every Wed · Thu · Sun — 24hr streams monthly
            </span>
          </p>
        </div>

        {/* Shared Link Cards */}
        <SocialLinks />

        {/* Social Icons Row */}
        <div className="pt-4">
          <SocialIcons size="md" />
        </div>
      </div>
    </div>
  );
}
