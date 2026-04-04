import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Background } from "./components/Background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syreneffect.com"),
  title: {
    default: "THE SYREN EFFECT | Twitch Streamer & Content Creator",
    template: "%s | THE SYREN EFFECT",
  },
  description:
    "Syreneffect — Twitch Streamer, Content Creator & Digital Influencer. Live every Wednesday, Thursday & Sunday. Monthly 24-hour marathon streams.",
  keywords: [
    "syreneffect",
    "syren effect",
    "twitch streamer",
    "content creator",
    "gaming",
    "live streaming",
    "kick streamer",
  ],
  authors: [{ name: "SyrenEffect" }],
  creator: "SyrenEffect",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "THE SYREN EFFECT",
    title: "THE SYREN EFFECT | Twitch Streamer & Content Creator",
    description:
      "Twitch Streamer, Content Creator & Digital Influencer. Live every Wednesday, Thursday & Sunday.",
    images: [
      {
        url: "/photos/Syren3.jpeg",
        width: 1200,
        height: 630,
        alt: "SyrenEffect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@syreneffect",
    creator: "@syreneffect",
    title: "THE SYREN EFFECT",
    description:
      "Twitch Streamer, Content Creator & Digital Influencer. Live Wed/Thu/Sun.",
    images: ["/photos/Syren3.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "SyrenEffect",
              alternateName: "The Syren Effect",
              url: "https://syreneffect.com",
              description:
                "Twitch Streamer, Content Creator & Digital Influencer",
              sameAs: [
                "https://www.twitch.tv/syreneffect",
                "https://kick.com/syreneffect",
                "https://www.instagram.com/syreneffect",
                "https://www.tiktok.com/@thesyreneffect",
                "https://www.youtube.com/@syreneffect",
                "https://x.com/syreneffect",
                "https://www.threads.net/@syreneffect",
              ],
              jobTitle: "Content Creator",
              knowsAbout: ["Gaming", "Live Streaming", "Content Creation"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <Background />
        <Navigation />
        <main className="relative z-10 flex-1">{children}</main>
        <footer className="relative z-10 py-8 text-center border-t border-purple-glow/10">
          <p className="text-muted text-sm tracking-[0.2em] uppercase font-light">
            SYRENEFFECT
          </p>
        </footer>
      </body>
    </html>
  );
}
