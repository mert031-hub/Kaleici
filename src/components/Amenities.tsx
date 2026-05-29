'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const amenities = [
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1 6.5C1 4.015 3.015 2 5.5 2h13C20.985 2 23 4.015 23 6.5V9h-2V6.5A1.5 1.5 0 0019.5 5h-15A1.5 1.5 0 003 6.5V9H1V6.5zM3 11v5.5C3 18.985 5.015 21 7.5 21h9c2.485 0 4.5-2.015 4.5-4.5V11H3z"/>
      </svg>
    ),
    title: 'Free Wi-Fi',
    description: 'High-speed internet throughout the hotel and garden areas',
    color: 'bg-secondary-50 text-secondary-600',
    border: 'border-secondary-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd"/>
      </svg>
    ),
    title: 'Free Breakfast',
    description: 'Freshly prepared Turkish breakfast served in our garden every morning',
    color: 'bg-accent-50 text-accent-600',
    border: 'border-accent-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
      </svg>
    ),
    title: 'Outdoor Pool',
    description: 'Refreshing outdoor swimming pool perfect for sunny Antalya days',
    color: 'bg-secondary-50 text-secondary-500',
    border: 'border-secondary-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Air Conditioning',
    description: 'Individual climate control in every room for your comfort',
    color: 'bg-primary-50 text-primary-600',
    border: 'border-primary-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
      </svg>
    ),
    title: 'Garden Area',
    description: 'Lush Mediterranean garden with lounging areas and morning breakfast spot',
    color: 'bg-primary-50 text-primary-700',
    border: 'border-primary-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Central Location',
    description: 'Walking distance to Hadrian\'s Gate, Mermerli Beach & historic streets',
    color: 'bg-stone-100 text-stone-700',
    border: 'border-stone-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Check-in 14:00',
    description: 'Flexible check-in from 2:00 PM. Early check-in subject to availability',
    color: 'bg-primary-50 text-primary-600',
    border: 'border-primary-100',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Check-out 11:00',
    description: 'Check-out by 11:00 AM. Late check-out available upon request',
    color: 'bg-accent-50 text-accent-500',
    border: 'border-accent-100',
  },
];

function AmenityCard({
  amenity,
  index,
}: {
  amenity: (typeof amenities)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group bg-white rounded-2xl p-6 shadow-soft border ${amenity.border} hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1`}
    >
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${amenity.color} mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        {amenity.icon}
      </div>
      <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2">
        {amenity.title}
      </h3>
      <p className="font-inter text-sm text-gray-500 leading-relaxed">
        {amenity.description}
      </p>
    </motion.div>
  );
}

export default function Amenities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="amenities" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3"
          >
            Hotel Amenities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-gray-900 mb-4"
          >
            Everything You{' '}
            <span className="gradient-text">Need & More</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-gray-500 leading-relaxed"
          >
            From complimentary breakfast to a refreshing pool, we have everything
            to make your stay exceptional.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {amenities.map((amenity, index) => (
            <AmenityCard key={amenity.title} amenity={amenity} index={index} />
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-primary-800 to-primary-900 rounded-3xl p-8 md:p-10 text-center pattern-overlay"
        >
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-3">
            All Amenities Included
          </h3>
          <p className="font-inter text-primary-200 text-base mb-6 max-w-xl mx-auto">
            No hidden fees. Your stay includes free breakfast, pool access, Wi-Fi, and
            the warmth of our family-run hospitality.
          </p>
          <a
            href="https://wa.me/905431480700?text=Hello%2C%20I%20would%20like%20to%20receive%20reservation%20information%20for%20Kalei%C3%A7i%20Hotel."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-800 font-inter font-semibold text-base px-8 py-3.5 rounded-full hover:bg-stone-100 transition-all duration-300 shadow-soft-lg hover:scale-105"
          >
            Reserve Your Room
          </a>
        </motion.div>
      </div>
    </section>
  );
}
