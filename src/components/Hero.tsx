"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const MIN_SPLASH_MS = 100;
const MAX_SPLASH_MS = 700;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { t, whatsappUrl } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [minSplashDone, setMinSplashDone] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Min: guarantee at least 600ms of branding
    const minTimer = setTimeout(() => setMinSplashDone(true), MIN_SPLASH_MS);
    // Max: force-close splash after 1400ms even if video not ready
    const maxTimer = setTimeout(() => setShowSplash(false), MAX_SPLASH_MS);
    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  // Close splash as soon as BOTH minimum time passed AND video is ready
  useEffect(() => {
    if (minSplashDone && videoReady) {
      setShowSplash(false);
    }
  }, [minSplashDone, videoReady]);

  const h = t.hero;

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a4731]"
          >
            <div className="px-6 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-white"
              >
                KALEİÇİ HOTEL
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="mt-3 font-inter text-sm sm:text-base uppercase tracking-[0.25em] text-white/70"
              >
                Antalya Old Town Boutique Hotel
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scaleX: 0.85 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mx-auto mt-8 h-1 w-44 overflow-hidden rounded-full bg-white/20"
              >
                <motion.div
                  className="h-full w-1/2 rounded-full bg-yellow-300"
                  animate={{ x: ["-100%", "220%"] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* bg-[#1a4731] is the safety color if video fails */}
      <section
        id="hero"
        className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-[#1a4731]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/heroorj2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/55 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {mounted && (
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-inter font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="text-yellow-300">★</span>
              <span>{h.badge}</span>
            </motion.div>
          )}

          {mounted && (
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
            >
              {h.title1}
              <br />
              <span className="text-yellow-200">{h.title2}</span>
            </motion.h1>
          )}

          {mounted && (
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-inter text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-md"
            >
              {h.subtitle}
            </motion.p>
          )}

          {mounted && (
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-inter font-semibold text-base px-8 py-4 rounded-full shadow-soft-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto justify-center"
              >
                {h.cta1}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white font-inter font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
              >
                {h.cta2}
              </a>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
