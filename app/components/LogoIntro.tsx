"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface LogoIntroProps {
  onComplete?: () => void;
}

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  const [isMounted, setIsMounted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const completedRef = useRef(false);

  const handleFinish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsMounted(false);
    onComplete?.();
  };

  useEffect(() => {
    // Check reduced motion accessibility
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setReducedMotion(true);
      const timer = setTimeout(() => {
        handleFinish();
      }, 1800);
      return () => clearTimeout(timer);
    }

    // Reliable animation completion fallback timer (3.5s)
    // Ensures the homepage ALWAYS becomes visible even if browser events stall
    const fallbackTimer = setTimeout(() => {
      handleFinish();
    }, 3500);

    return () => clearTimeout(fallbackTimer);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      id="webly-intro-container"
      onAnimationEnd={handleFinish}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFF9EE] text-[#17243A] overflow-hidden select-none"
      style={{
        height: "100dvh",
        animation: reducedMotion
          ? "weblyStaticFade 1.8s ease forwards"
          : "weblyOverlayFade 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
      aria-label="WEBLY studio introduction"
      role="region"
    >
        {/* Subtle vibrant ambient lighting & architectural grid */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 sm:w-96 sm:h-96 bg-[#315BFF]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 sm:w-96 sm:h-96 bg-[#F08075]/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DCD9F5]/30 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-[#F6D77A]/15 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#17243A_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        {/* Centerpiece Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-2xl w-full">
          {/* Logo Container */}
          <div
            className="relative w-full max-w-[240px] xs:max-w-[290px] sm:max-w-[380px] md:max-w-[440px] mb-6 sm:mb-8"
            style={{
              animation: reducedMotion
                ? "none"
                : "weblyLogoReveal 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <Image
              src="/webly-logo-navy.png"
              alt="WEBLY"
              width={820}
              height={532}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_4px_20px_rgba(23,36,58,0.08)]"
            />

            {/* Subtle cobalt sheen */}
            {!reducedMotion && (
              <div
                className="pointer-events-none absolute inset-0 w-24 bg-gradient-to-r from-transparent via-[#315BFF]/25 to-transparent blur-sm"
                style={{
                  animation: "weblySheenSweep 3.4s ease-in-out infinite",
                }}
              />
            )}
          </div>

          {/* Approved Brand Statement */}
          <div
            className="px-2"
            style={{
              animation: reducedMotion
                ? "none"
                : "weblyTaglineReveal 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <h2 className="font-syne text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-[#17243A] uppercase tracking-tight leading-tight">
              YOUR IDEAS.{" "}
              <span className="text-[#315BFF]">OUR DIGITAL</span>{" "}
              <span className="text-[#F08075]">CANVAS.</span>
            </h2>
          </div>
        </div>
    </div>
  );
}

