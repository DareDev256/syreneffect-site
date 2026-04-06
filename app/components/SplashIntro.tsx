"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "static" | "ripple" | "montage" | "ready";

interface SplashIntroProps {
  onComplete: () => void;
}

/* ── TV Static / Noise Canvas ── */
function TVStatic({ opacity = 0.3 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 200;
    canvas.height = 150;

    function draw() {
      if (!ctx || !canvas) return;
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
      frameRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity, imageRendering: "pixelated" }}
    />
  );
}

/* ── Scanline Overlay ── */
function Scanlines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-20"
      style={{
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
      }}
    />
  );
}

/* ── Mermaid Silhouette SVG ── */
function MermaidSilhouette() {
  return (
    <svg
      viewBox="0 0 200 400"
      className="w-32 h-64 md:w-40 md:h-80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hair flowing */}
      <path
        d="M100 40 C80 20, 60 30, 55 60 C50 80, 45 100, 50 120 C40 100, 30 80, 35 55 C40 30, 70 10, 100 30"
        fill="url(#mermaidGrad)"
        opacity="0.6"
      />
      <path
        d="M100 40 C120 20, 140 30, 145 60 C150 80, 155 100, 150 120 C160 100, 170 80, 165 55 C160 30, 130 10, 100 30"
        fill="url(#mermaidGrad)"
        opacity="0.6"
      />
      {/* Head */}
      <ellipse cx="100" cy="55" rx="22" ry="26" fill="url(#mermaidGrad)" />
      {/* Torso */}
      <path
        d="M78 75 C75 100, 72 130, 78 160 L122 160 C128 130, 125 100, 122 75 Z"
        fill="url(#mermaidGrad)"
      />
      {/* Arms */}
      <path
        d="M78 85 C60 95, 45 110, 40 140"
        stroke="url(#mermaidGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M122 85 C140 95, 155 110, 160 140"
        stroke="url(#mermaidGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Tail */}
      <path
        d="M78 160 C75 200, 80 250, 90 290 C95 310, 85 340, 70 370 L80 360 C90 340, 100 320, 100 300 C100 320, 110 340, 120 360 L130 370 C115 340, 105 310, 110 290 C120 250, 125 200, 122 160 Z"
        fill="url(#mermaidGrad)"
      />
      {/* Tail fin */}
      <path
        d="M70 370 C55 380, 45 395, 50 400 C60 395, 75 385, 80 360"
        fill="url(#mermaidGrad)"
        opacity="0.7"
      />
      <path
        d="M130 370 C145 380, 155 395, 150 400 C140 395, 125 385, 120 360"
        fill="url(#mermaidGrad)"
        opacity="0.7"
      />
      <defs>
        <linearGradient
          id="mermaidGrad"
          x1="100"
          y1="0"
          x2="100"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SplashIntro({ onComplete }: SplashIntroProps) {
  const [phase, setPhase] = useState<Phase>("static");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Phase 1: TV static flickers (1.5s)
    const t1 = setTimeout(() => setPhase("ripple"), 1500);
    // Phase 2: Water ripple + mermaid (3s)
    const t2 = setTimeout(() => setPhase("montage"), 4500);
    // Phase 3: Montage plays, "ready" state after text appears (6s)
    const t3 = setTimeout(() => setPhase("ready"), 6500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    if (phase === "montage" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [phase]);

  const handleEnter = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#030308" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Ambient glow behind TV */}
        <div
          className="absolute w-[600px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-col items-center gap-4 md:gap-5">
          {/* ── TV FRAME ── */}
          <div className="relative">
            {/* CRT outer glow */}
            <div
              className="absolute -inset-3 rounded-2xl opacity-40 blur-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.3))",
              }}
            />

            {/* TV body */}
            <div
              className="relative w-[320px] h-[200px] sm:w-[440px] sm:h-[275px] md:w-[560px] md:h-[340px] rounded-xl overflow-hidden border-2 border-white/10"
              style={{
                boxShadow:
                  "inset 0 0 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.15)",
              }}
            >
              {/* CRT screen curvature effect */}
              <div
                className="absolute inset-0 z-30 pointer-events-none rounded-xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",
                }}
              />

              {/* Scanlines always on */}
              <Scanlines />

              {/* ── Phase 1: TV Static ── */}
              <AnimatePresence>
                {phase === "static" && (
                  <motion.div
                    className="absolute inset-0 z-10"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TVStatic opacity={0.6} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Phase 2: Water Ripple + Mermaid ── */}
              <AnimatePresence>
                {phase === "ripple" && (
                  <motion.div
                    className="absolute inset-0 z-10 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Deep ocean background */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, #030318 0%, #0a1628 30%, #0d1f3c 60%, #071224 100%)",
                      }}
                    />

                    {/* Water ripple rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[0, 1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full border border-teal-400/20"
                          initial={{ width: 0, height: 0, opacity: 0.6 }}
                          animate={{
                            width: [0, 300 + i * 80],
                            height: [0, 300 + i * 80],
                            opacity: [0.6, 0],
                          }}
                          transition={{
                            duration: 2.5,
                            delay: i * 0.4,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                    </div>

                    {/* Mermaid rising */}
                    <motion.div
                      initial={{ y: 100, opacity: 0, scale: 0.8 }}
                      animate={{ y: -20, opacity: 1, scale: 1 }}
                      transition={{
                        duration: 2.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative z-10"
                    >
                      <MermaidSilhouette />
                    </motion.div>

                    {/* Underwater light rays */}
                    <div className="absolute inset-0 opacity-30">
                      <div
                        className="absolute top-0 left-1/4 w-1 h-full"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(6,182,212,0.3) 0%, transparent 60%)",
                          transform: "rotate(5deg)",
                        }}
                      />
                      <div
                        className="absolute top-0 right-1/3 w-0.5 h-full"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(124,58,237,0.2) 0%, transparent 50%)",
                          transform: "rotate(-3deg)",
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Phase 3+: Video Montage ── */}
              {(phase === "montage" || phase === "ready") && (
                <motion.div
                  className="absolute inset-0 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    ref={videoRef}
                    src="/syren-montage-web.mp4"
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                </motion.div>
              )}

              {/* TV power light */}
              <div className="absolute bottom-2 right-3 z-30 flex items-center gap-1.5">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor:
                      phase === "static" ? "#ef4444" : "#22c55e",
                    boxShadow:
                      phase === "static"
                        ? "0 0 6px #ef4444"
                        : "0 0 6px #22c55e",
                  }}
                />
              </div>
            </div>

            {/* TV stand */}
            <div className="flex justify-center">
              <div className="w-24 h-2 bg-white/5 rounded-b-lg" />
            </div>
          </div>

          {/* ── TEXT + BUTTON ── */}
          <AnimatePresence>
            {(phase === "montage" || phase === "ready") && (
              <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* SYRENEFFECT TV title */}
                <div className="text-center">
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.2em] uppercase"
                    style={{
                      background:
                        "linear-gradient(90deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation: "gradientShift 3s ease infinite",
                    }}
                  >
                    SyrenEffect TV
                  </h1>
                  <motion.p
                    className="text-white/40 text-xs sm:text-sm tracking-[0.4em] uppercase mt-1"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Now Streaming
                  </motion.p>
                </div>

                {/* Enter button */}
                {phase === "ready" && (
                  <motion.button
                    onClick={handleEnter}
                    className="group relative px-8 py-3 rounded-full overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button glow bg */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-[1px] bg-[#0a0a15] rounded-full" />
                    <span className="relative text-sm font-semibold tracking-[0.3em] uppercase text-white/90 group-hover:text-white transition-colors">
                      Enter
                    </span>
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CSS animation for gradient shift */}
        <style jsx>{`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
}
