"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLanguage } from "@/context/LanguageContext";
import { galleryImages } from "@/data/images";

function GalleryCard({
  src,
  alt,
  index,
  onClick,
}: {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-soft hover:shadow-soft-xl transition-all duration-300 aspect-[4/3]"
      whileHover={{ y: -4 }}
    >
      {/* Photo */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-playfair text-white font-semibold text-sm leading-tight drop-shadow">
          {alt}
        </p>
      </div>

      {/* Zoom icon */}
      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Build per-image alt text from language
  const labelKeys: Array<keyof typeof t.gallery> = [
    "pool",
    "garden",
    "facade",
    "bougainvillea",
    "lounge",
    "breakfast",
    "courtyard",
    "evening",
    "poolside",
    "floral",
    "room",
    "rooftop",
  ];

  const images = galleryImages.map((img, i) => ({
    ...img,
    displayAlt:
      (t.gallery[labelKeys[i]] as string) ??
      (lang === "tr" ? img.altTr : img.alt),
  }));

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.displayAlt,
    width: img.width,
    height: img.height,
  }));

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={sectionRef}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3"
          >
            {t.gallery.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-gray-900 mb-4"
          >
            {t.gallery.title1}{" "}
            <span className="gradient-text">{t.gallery.title2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-gray-500 leading-relaxed"
          >
            {t.gallery.subtitle}
          </motion.p>
        </div>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, index) => (
            <GalleryCard
              key={img.src}
              src={img.src}
              alt={img.displayAlt}
              index={index}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center font-inter text-sm text-gray-400 mt-8"
        >
          {t.gallery.clickHint}
        </motion.p>
      </div>

      {/* Lightbox with real local images */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  );
}
