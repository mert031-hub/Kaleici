"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { aboutImage } from "@/data/images";

function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const locationIcons = [
  <svg key="a" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>,
  <svg key="b" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>,
  <svg key="c" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>,
  <svg key="d" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    />
  </svg>,
];

export default function About() {
  const { t } = useLanguage();
  const ab = t.about;

  const features = [
    { label: ab.mermerli, detail: ab.mermerliTime },
    { label: ab.hadrian, detail: ab.hadrianTime },
    { label: ab.historic, detail: ab.historicTime },
    { label: ab.harbor, detail: ab.harborTime },
  ];

  return (
    <section id="about" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Photo card */}
          <AnimatedSection delay={0}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <Image
                  src={aboutImage.src}
                  alt={aboutImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />

                {/* Bottom info card */}
                <div className="absolute bottom-6 left-6 right-6 z-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-5">
                  <p className="font-playfair text-xl font-semibold text-white mb-1">
                    {ab.since}
                  </p>
                  <p className="font-inter text-sm text-white/80">
                    {ab.sinceDesc}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white/40 bg-white/20"
                        />
                      ))}
                    </div>
                    <span className="font-inter text-sm text-white/80">
                      {ab.guests}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating accent card — desktop only to avoid mobile overlap */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 lg:-right-10 bg-white rounded-2xl shadow-soft-xl p-5 max-w-[200px] z-20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌿</span>
                  <span className="font-playfair font-semibold text-primary-800 text-sm">
                    {ab.gardenHotel}
                  </span>
                </div>
                <p className="font-inter text-xs text-gray-500 leading-relaxed">
                  {ab.gardenDesc}
                </p>
              </div>

              {/* Same info shown inline on mobile */}
              <div className="flex sm:hidden items-center gap-3 mt-4 bg-white rounded-2xl shadow-soft border border-stone-200 p-4">
                <span className="text-xl">🌿</span>
                <div>
                  <p className="font-playfair font-semibold text-primary-800 text-sm">
                    {ab.gardenHotel}
                  </p>
                  <p className="font-inter text-xs text-gray-500">
                    {ab.gardenDesc}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Text content */}
          <div className="space-y-8">
            <AnimatedSection delay={0.15}>
              <div>
                <p className="font-inter text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3">
                  {ab.badge}
                </p>
                <h2 className="heading-lg text-gray-900 mb-6">
                  {ab.title1} <span className="gradient-text">{ab.title2}</span>
                </h2>
                <p className="font-inter text-base text-gray-600 leading-relaxed mb-4">
                  {ab.desc1}
                </p>
                <p className="font-inter text-base text-gray-600 leading-relaxed">
                  {ab.desc2}
                </p>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.25}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "4.5★", label: ab.rating },
                  { number: "875+", label: ab.reviews },
                  { number: "3★", label: ab.stars },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center bg-white rounded-2xl p-4 shadow-soft border border-stone-200"
                  >
                    <p className="font-playfair text-2xl font-bold text-primary-700">
                      {stat.number}
                    </p>
                    <p className="font-inter text-xs text-gray-500 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Nearby attractions */}
            <AnimatedSection delay={0.35}>
              <div>
                <p className="font-inter text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  {ab.walkingDistance}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <div
                      key={feature.label}
                      className="flex items-center gap-3 bg-white rounded-xl p-3.5 shadow-soft border border-stone-200 card-hover"
                    >
                      <div className="flex-shrink-0 w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                        {locationIcons[i]}
                      </div>
                      <div className="min-w-0">
                        <p className="font-inter text-sm font-semibold text-gray-800 leading-tight truncate">
                          {feature.label}
                        </p>
                        <p className="font-inter text-xs text-primary-600">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
