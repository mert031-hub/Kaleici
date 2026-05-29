'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useLanguage } from '@/context/LanguageContext';

interface GalleryItem {
  id: number;
  seed: string;
  altKey: keyof ReturnType<typeof useLanguage>['t']['gallery'];
  width: number;
  height: number;
}

const galleryItems: GalleryItem[] = [
  { id: 1, seed: 'kaleici-pool1', altKey: 'pool', width: 800, height: 600 },
  { id: 2, seed: 'kaleici-garden1', altKey: 'garden', width: 800, height: 600 },
  { id: 3, seed: 'kaleici-hotel1', altKey: 'facade', width: 800, height: 600 },
  { id: 4, seed: 'kaleici-flowers1', altKey: 'bougainvillea', width: 800, height: 600 },
  { id: 5, seed: 'kaleici-pool2', altKey: 'lounge', width: 800, height: 600 },
  { id: 6, seed: 'kaleici-morning1', altKey: 'breakfast', width: 800, height: 600 },
  { id: 7, seed: 'kaleici-stone1', altKey: 'courtyard', width: 800, height: 600 },
  { id: 8, seed: 'kaleici-evening1', altKey: 'evening', width: 800, height: 600 },
  { id: 9, seed: 'kaleici-water1', altKey: 'poolside', width: 800, height: 600 },
  { id: 10, seed: 'kaleici-path1', altKey: 'floral', width: 800, height: 600 },
  { id: 11, seed: 'kaleici-room1', altKey: 'room', width: 800, height: 600 },
  { id: 12, seed: 'kaleici-view1', altKey: 'rooftop', width: 800, height: 600 },
];

function imgUrl(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

function GalleryCard({
  item,
  index,
  label,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  label: string;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-soft hover:shadow-soft-xl transition-all duration-400 aspect-[4/3]"
      whileHover={{ y: -4 }}
    >
      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgUrl(item.seed, item.width, item.height)}
        alt={`Kaleiçi Hotel – ${label}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        width={item.width}
        height={item.height}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-playfair text-white font-semibold text-sm leading-tight drop-shadow">
          {label}
        </p>
      </div>

      {/* Zoom icon on hover */}
      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const galleryT = t.gallery;

  const altKeys: Array<keyof typeof galleryT> = [
    'pool', 'garden', 'facade', 'bougainvillea', 'lounge', 'breakfast',
    'courtyard', 'evening', 'poolside', 'floral', 'room', 'rooftop',
  ];

  const slides = galleryItems.map((item, i) => ({
    src: imgUrl(item.seed, 1200, 900),
    alt: `Kaleiçi Hotel – ${galleryT[altKeys[i]] as string}`,
    width: 1200,
    height: 900,
  }));

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={sectionRef} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
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
            {t.gallery.title1}{' '}
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
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              label={galleryT[altKeys[index]] as string}
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

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  );
}
