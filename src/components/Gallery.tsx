'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryItem {
  id: number;
  label: string;
  sublabel: string;
  gradient: string;
  icon: string;
  span?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    label: 'Outdoor Pool',
    sublabel: 'Crystal clear Mediterranean waters',
    gradient: 'linear-gradient(135deg, #48cae4 0%, #0096c7 40%, #0077b6 100%)',
    icon: '🏊',
  },
  {
    id: 2,
    label: 'Garden Terrace',
    sublabel: 'Lush greenery & breakfast spot',
    gradient: 'linear-gradient(135deg, #52b788 0%, #2d9e6b 50%, #1a4731 100%)',
    icon: '🌿',
    span: true,
  },
  {
    id: 3,
    label: 'Hotel Facade',
    sublabel: 'Ottoman architecture meets modern charm',
    gradient: 'linear-gradient(135deg, #e8d5b7 0%, #c9b89a 40%, #a89070 100%)',
    icon: '🏛️',
  },
  {
    id: 4,
    label: 'Bougainvillea Walk',
    sublabel: 'Vibrant pink blossoms year-round',
    gradient: 'linear-gradient(135deg, #f4845f 0%, #e07a5f 40%, #cc5e43 100%)',
    icon: '🌸',
    span: true,
  },
  {
    id: 5,
    label: 'Pool Lounge',
    sublabel: 'Relax under the Antalya sun',
    gradient: 'linear-gradient(135deg, #67e8f9 0%, #48cae4 50%, #0096c7 100%)',
    icon: '☀️',
  },
  {
    id: 6,
    label: 'Breakfast Garden',
    sublabel: 'Fresh start every morning',
    gradient: 'linear-gradient(135deg, #84d4a2 0%, #52b788 50%, #2d9e6b 100%)',
    icon: '🍳',
  },
  {
    id: 7,
    label: 'Stone Courtyard',
    sublabel: 'Ancient Kaleiçi atmosphere',
    gradient: 'linear-gradient(135deg, #d4b896 0%, #c9b89a 50%, #a89070 100%)',
    icon: '🪨',
    span: true,
  },
  {
    id: 8,
    label: 'Evening Garden',
    sublabel: 'Magical lighting after sunset',
    gradient: 'linear-gradient(135deg, #1a4731 0%, #184f38 50%, #14402e 100%)',
    icon: '🌙',
  },
  {
    id: 9,
    label: 'Pool Side',
    sublabel: 'Afternoon dips & relaxation',
    gradient: 'linear-gradient(135deg, #a5f3fc 0%, #67e8f9 40%, #48cae4 100%)',
    icon: '💧',
  },
  {
    id: 10,
    label: 'Floral Alley',
    sublabel: 'A secret garden path',
    gradient: 'linear-gradient(135deg, #fad0ae 0%, #f7b267 40%, #f4845f 100%)',
    icon: '🌺',
    span: true,
  },
  {
    id: 11,
    label: 'Guest Room',
    sublabel: 'Comfort & Ottoman style',
    gradient: 'linear-gradient(135deg, #f5e6d3 0%, #e8d5b7 50%, #d4b896 100%)',
    icon: '🛏️',
  },
  {
    id: 12,
    label: 'Rooftop View',
    sublabel: 'Panoramic Antalya vista',
    gradient: 'linear-gradient(160deg, #87CEEB 0%, #48cae4 40%, #2d9e6b 100%)',
    icon: '🏙️',
  },
];

// Generate fake lightbox slides from gallery items
const slides = galleryItems.map((item) => ({
  src: `https://placehold.co/1200x800/1a4731/ffffff?text=${encodeURIComponent(item.label)}`,
  alt: item.label,
  width: 1200,
  height: 800,
}));

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-soft hover:shadow-soft-xl transition-all duration-400 ${
        item.span ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      style={{ aspectRatio: item.span ? '16/9' : '4/3' }}
      whileHover={{ y: -4 }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 pattern-overlay transition-transform duration-500 group-hover:scale-105"
        style={{ background: item.gradient }}
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

      {/* Icon */}
      <div className="absolute top-4 right-4 text-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
        {item.icon}
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-playfair text-white font-semibold text-lg leading-tight">
          {item.label}
        </p>
        <p className="font-inter text-white/80 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.sublabel}
        </p>
      </div>

      {/* Zoom icon */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(sectionRef, { once: true, margin: '-80px' });

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
            Garden & Pool
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-gray-900 mb-4"
          >
            A Mediterranean{' '}
            <span className="gradient-text">Paradise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-gray-500 leading-relaxed"
          >
            Explore our lush gardens, shimmering pool, and charming Ottoman-era
            architecture. Every corner tells a story.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>

        {/* View more hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center font-inter text-sm text-gray-400 mt-8"
        >
          Click any image to view full-screen
        </motion.p>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  );
}
