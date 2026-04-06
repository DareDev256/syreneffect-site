"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashIntro } from "./SplashIntro";

export function SplashGate({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Skip splash if user visited recently (within 30 min)
    const lastVisit = sessionStorage.getItem("syren-splash-seen");
    if (lastVisit) {
      setShowSplash(false);
    }
  }, []);

  const handleComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem("syren-splash-seen", Date.now().toString());
  };

  // SSR: render children immediately, splash only on client
  if (!mounted) return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashIntro onComplete={handleComplete} />}
      </AnimatePresence>
      {/* Hide nav + content during splash, lock scroll */}
      {showSplash && (
        <style>{`nav { display: none !important; } .bg-ocean, .particles { display: none !important; } html, body { overflow: hidden !important; height: 100vh !important; }`}</style>
      )}
      <div
        style={{
          opacity: showSplash ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  );
}
