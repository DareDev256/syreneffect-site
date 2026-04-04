import type { Metadata } from "next";
import { SocialFeed } from "./SocialFeed";
import { PhotoBackground } from "../components/PhotoBackground";

export const metadata: Metadata = {
  title: "Gallery & Feed",
  description:
    "SyrenEffect's latest content — live feeds from Instagram, YouTube, TikTok, and X/Twitter.",
  openGraph: {
    title: "SyrenEffect Gallery & Feed",
    description: "Latest content from across all platforms.",
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      <PhotoBackground />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold gradient-text">
            Feed & Gallery
          </h1>
          <p className="text-muted text-lg max-w-lg mx-auto">
            Latest content from across all platforms.
          </p>
        </div>

        <SocialFeed />
      </div>
    </div>
  );
}
