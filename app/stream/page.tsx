import type { Metadata } from "next";
import { TwitchEmbed } from "./TwitchEmbed";
import { PhotoBackground } from "../components/PhotoBackground";

export const metadata: Metadata = {
  title: "Stream",
  description:
    "Watch SyrenEffect live on Twitch. Streaming every Wednesday, Thursday & Sunday with monthly 24-hour marathon streams.",
  openGraph: {
    title: "Watch SyrenEffect Live",
    description:
      "Catch the stream every Wed, Thu & Sun. Monthly 24-hour marathons!",
  },
};

const schedule = [
  {
    day: "Wednesday",
    time: "Evening",
    icon: (
      <svg className="w-8 h-8 text-purple-glow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    day: "Thursday",
    time: "Evening",
    icon: (
      <svg className="w-8 h-8 text-teal-glow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
  },
  {
    day: "Sunday",
    time: "All Day",
    icon: (
      <svg className="w-8 h-8 text-pink-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
];

export default function StreamPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      <PhotoBackground />
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold gradient-text">
            Live Stream
          </h1>
          <p className="text-muted text-lg max-w-lg mx-auto">
            Watch Syren live on Twitch. Chat, vibe, and be part of the
            community.
          </p>
        </div>

        {/* Twitch Embed */}
        <TwitchEmbed />

        {/* Schedule */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-center gradient-text">
            Stream Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {schedule.map((s) => (
              <div
                key={s.day}
                className="glass-card p-6 text-center space-y-2"
              >
                {s.icon}
                <h3 className="text-soft-white font-semibold text-lg">
                  {s.day}
                </h3>
                <p className="text-muted text-sm">{s.time}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="glass-card inline-flex items-center gap-3 px-6 py-3">
              <svg className="w-6 h-6 text-teal-glow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a17.015 17.015 0 01-8.54 0" />
              </svg>
              <div className="text-left">
                <p className="text-soft-white font-medium">
                  24-Hour Marathon
                </p>
                <p className="text-muted text-sm">Once a month</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kick Embed */}
        <section className="space-y-6">
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6 text-[#53FC18]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 2h4v4h4V2h4v4h-4v4h4v4h-4v4h4v4h-4v-4h-4v4H4v-4h4v-4H4v-4h4V6H4V2z" />
            </svg>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold gradient-text">
              Also on Kick
            </h2>
          </div>
          <div className="glass-card overflow-hidden">
            <iframe
              src="https://player.kick.com/syreneffect"
              title="SyrenEffect on Kick"
              allowFullScreen
              className="w-full aspect-video border-0"
            />
          </div>
          <div className="text-center">
            <a
              href="https://kick.com/syreneffect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-[#53FC18] transition-colors tracking-wider uppercase"
            >
              Open in Kick
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
