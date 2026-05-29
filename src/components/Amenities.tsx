'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const amenityKeys = [
  'wifi',
  'breakfast',
  'pool',
  'ac',
  'garden',
  'location',
  'checkin',
  'checkout',
] as const;

const amenityIcons = [
  // Wi-Fi
  <svg key="wifi" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M1 6.5C1 4.015 3.015 2 5.5 2h13C20.985 2 23 4.015 23 6.5V9h-2V6.5A1.5 1.5 0 0019.5 5h-15A1.5 1.5 0 003 6.5V9H1V6.5zM3 11v5.5C3 18.985 5.015 21 7.5 21h9c2.485 0 4.5-2.015 4.5-4.5V11H3z" />
  </svg>,
  // Breakfast
  <svg key="breakfast" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
  </svg>,
  // Pool
  <svg key="pool" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M2 12.5c.67 0 1.33-.25 2-.75s1.33-.75 2-.75 1.33.25 2 .75 1.33.75 2 .75 1.33-.25 2-.75 1.33-.75 2-.75 1.33.25 2 .75 1.33.75 2 .75V14c-.67 0-1.33-.25-2-.75s-1.33-.75-2-.75-1.33.25-2 .75-1.33.75-2 .75-1.33-.25-2-.75-1.33-.75-2-.75-1.33.25-2 .75S2.67 14 2 14v-1.5zm0 3c.67 0 1.33-.25 2-.75s1.33-.75 2-.75 1.33.25 2 .75 1.33.75 2 .75 1.33-.25 2-.75 1.33-.75 2-.75 1.33.25 2 .75 1.33.75 2 .75V17c-.67 0-1.33-.25-2-.75s-1.33-.75-2-.75-1.33.25-2 .75-1.33.75-2 .75-1.33-.25-2-.75-1.33-.75-2-.75-1.33.25-2 .75S2.67 17 2 17v-1.5zM15.5 8c0-1.9-.88-3.5-2.5-4.5V2h-2v1.5c-.17.1-.33.21-.5.32V2H8.5v2.54C7.27 5.48 6.5 6.93 6.5 8.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5zM11 11c-1.38 0-2.5-1.12-2.5-2.5S9.62 6 11 6s2.5 1.12 2.5 2.5S12.38 11 11 11z" />
  </svg>,
  // AC
  <svg key="ac" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
  </svg>,
  // Garden
  <svg key="garden" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 8C8 10 5.9 16.17 3.82 21H5.71C6.47 19.36 7.43 17.69 8.93 16.35C10.64 14.82 12.72 14 15 14H17V16L21 12.5L17 9V8Z" />
  </svg>,
  // Location
  <svg key="location" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>,
  // Check-in
  <svg key="checkin" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Check-out
  <svg key="checkout" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
];

const iconColors = [
  { bg: 'bg-secondary-50', text: 'text-secondary-600', border: 'border-secondary-100' },
  { bg: 'bg-accent-50', text: 'text-accent-600', border: 'border-accent-100' },
  { bg: 'bg-secondary-50', text: 'text-secondary-500', border: 'border-secondary-100' },
  { bg: 'bg-primary-50', text: 'text-primary-600', border: 'border-primary-100' },
  { bg: 'bg-primary-50', text: 'text-primary-700', border: 'border-primary-100' },
  { bg: 'bg-stone-100', text: 'text-stone-700', border: 'border-stone-200' },
  { bg: 'bg-primary-50', text: 'text-primary-600', border: 'border-primary-100' },
  { bg: 'bg-accent-50', text: 'text-accent-500', border: 'border-accent-100' },
];

function AmenityCard({
  icon,
  title,
  description,
  color,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: (typeof iconColors)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group bg-white rounded-2xl p-5 md:p-6 shadow-soft border ${color.border} hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1`}
    >
      <div
        className={`inline-flex items-center justify-center w-13 h-13 w-14 h-14 rounded-2xl ${color.bg} ${color.text} mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="font-playfair text-base md:text-lg font-semibold text-gray-900 mb-1.5">
        {title}
      </h3>
      <p className="font-inter text-sm text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Amenities() {
  const { t, whatsappUrl } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const at = t.amenities;

  const amenityData = [
    { title: at.wifiTitle, description: at.wifiDesc },
    { title: at.breakfastTitle, description: at.breakfastDesc },
    { title: at.poolTitle, description: at.poolDesc },
    { title: at.acTitle, description: at.acDesc },
    { title: at.gardenTitle, description: at.gardenDesc },
    { title: at.locationTitle, description: at.locationDesc },
    { title: at.checkinTitle, description: at.checkinDesc },
    { title: at.checkoutTitle, description: at.checkoutDesc },
  ];

  return (
    <section
      id="amenities"
      className="relative section-padding overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #f5f0e8 0%, #f0faf4 45%, #eef7f2 70%, #faf0e6 100%)',
      }}
    >
      {/* Decorative background shapes — Mediterranean feel, no photo */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-200/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-secondary-200/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-100/10 blur-3xl pointer-events-none" />

      {/* Decorative leaf outlines */}
      <svg
        className="absolute top-8 right-8 opacity-[0.07] text-primary-800 pointer-events-none"
        width="140"
        height="210"
        viewBox="0 0 80 120"
        fill="currentColor"
      >
        <path d="M40 120 C40 120 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 120 40 120Z" />
      </svg>
      <svg
        className="absolute bottom-12 left-6 opacity-[0.06] text-secondary-700 pointer-events-none rotate-[-20deg]"
        width="100"
        height="150"
        viewBox="0 0 80 120"
        fill="currentColor"
      >
        <path d="M40 120 C40 120 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 120 40 120Z" />
      </svg>
      <svg
        className="absolute top-1/3 left-10 opacity-[0.05] text-primary-600 pointer-events-none rotate-[30deg]"
        width="70"
        height="105"
        viewBox="0 0 80 120"
        fill="currentColor"
      >
        <path d="M40 120 C40 120 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 120 40 120Z" />
      </svg>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%231a4731'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3"
          >
            {at.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-gray-900 mb-4"
          >
            {at.title1}{' '}
            <span className="gradient-text">{at.title2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-gray-600 leading-relaxed"
          >
            {at.subtitle}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {amenityData.map((amenity, index) => (
            <AmenityCard
              key={amenityKeys[index]}
              icon={amenityIcons[index]}
              title={amenity.title}
              description={amenity.description}
              color={iconColors[index]}
              index={index}
            />
          ))}
        </div>

        {/* Bottom banner — TASK 4: fixed contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-primary-800 to-primary-900 rounded-3xl p-8 md:p-10 text-center shadow-soft-xl"
        >
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow">
            {at.bannerTitle}
          </h3>
          <p className="font-inter text-white/90 text-base mb-6 max-w-xl mx-auto leading-relaxed">
            {at.bannerDesc}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-800 font-inter font-semibold text-base px-8 py-3.5 rounded-full hover:bg-stone-100 transition-all duration-300 shadow-soft-lg hover:scale-105"
          >
            {at.bannerCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
