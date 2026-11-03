"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

interface LogoIntroProps {
  onComplete?: () => void;
}

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  const [stage, setStage] = useState<"ambient" | "logo" | "statement" | "exit">("ambient");
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro in this session
    const seen = sessionStorage.getItem("webly_cinematic_intro_seen");
    if (seen === "true") {
      setIsVisible(false);
      setShouldRender(false);
      onComplete?.();
      return;
    }

    setShouldRender(true);

    // Stage 1 -> Stage 2 (Logo reveal at 0.9s)
    const t1 = setTimeout(() => {
      setStage("logo");
    }, 900);

    // Stage 2 -> Stage 3 (Statement reveal at 2.6s)
    const t2 = setTimeout(() => {
      setStage("statement");
    }, 2600);

    // Stage 3 -> Stage 4 (Exit transition at 5.2s)
    const t3 = setTimeout(() => {
      handleExit();
    }, 5200);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        handleExit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleExit = () => {
    sessionStorage.setItem("webly_cinematic_intro_seen", "true");
    setStage("exit");
    setTimeout(() => {
      setIsVisible(false);
      setShouldRender(false);
      onComplete?.();
    }, 850);
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={stage === "exit" ? { opacity: 0, scale: 1.04, filter: "blur(10px)" } : { opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#000000] text-white overflow-hidden select-none"
        >
          {/* Deep Ambient Radial Backlight in Warm Champagne / Platinum */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: stage === "ambient" ? 0.2 : 0.45,
              scale: stage === "statement" ? 1.4 : 1.1,
            }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-white/10 via-[#d8c3a5]/10 to-transparent blur-[150px]"
          />

          {/* Elegant Horizontal Light Beam Axis */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: stage !== "ambient" ? 1 : 0.4,
              opacity: stage === "exit" ? 0 : [0, 0.4, 0.2],
            }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="pointer-events-none absolute h-[1px] w-[90vw] max-w-5xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          {/* Centerpiece Container */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-4xl">
            {/* The Actual WEBLY Logo — Significantly Larger and Commanding */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={
                stage === "logo" || stage === "statement" || stage === "exit"
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.9, y: 16 }
              }
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              {/* Logo Image */}
              <div className="relative px-8 py-4">
                <Image
                  src="/webly-logo.png"
                  alt="WEBLY"
                  width={520}
                  height={190}
                  priority
                  className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-[0_10px_45px_rgba(255,255,255,0.22)]"
                />

                {/* Subtle Specular Sheen sweep across the logo */}
                <motion.div
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={
                    stage === "logo" || stage === "statement"
                      ? { x: "200%", opacity: [0, 0.7, 0] }
                      : {}
                  }
                  transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-0 w-24 -skew-x-25 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-[2px]"
                />

                {/* Sparkling Star Gleam Accent on the Logo's Diamond Star */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    stage === "logo" || stage === "statement"
                      ? { opacity: [0, 1, 0.9], scale: [0, 1.4, 1] }
                      : {}
                  }
                  transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
                  className="absolute top-2 right-12 sm:right-16 md:right-20 pointer-events-none flex items-center justify-center text-white"
                >
                  <Sparkles size={22} className="text-white drop-shadow-[0_0_12px_#ffffff]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Stage 3: Catchy Brand Statement */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={
                stage === "statement" || stage === "exit"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 14 }
              }
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h2 className="font-syne text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
                WE MAKE THE WEB{" "}
                <span className="font-serif italic font-normal text-[#d8c3a5] lowercase sm:text-5xl md:text-6xl">
                  unforgettable.
                </span>
              </h2>

              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.32em] text-white/50">
                BESPOKE WEB ATELIER · CHENNAI &amp; WORLDWIDE
              </p>
            </motion.div>
          </div>

          {/* Minimalist Skip / Enter Control */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 right-10 z-20"
          >
            <button
              onClick={handleExit}
              className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 font-mono text-[11px] uppercase tracking-wider text-white/70 backdrop-blur-md transition-all hover:bg-white hover:text-black hover:border-white shadow-sm"
            >
              <span>Enter Studio [Esc]</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
