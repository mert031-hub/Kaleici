'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Location() {
  const { t } = useLanguage();
  const lc = t.location;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, { once: true, margin: '-40px' });

  const attractions = [
    { emoji: '🏖️', label: lc.beach, time: lc.beachTime },
    { emoji: '🏛️', label: lc.gate, time: lc.gateTime },
    { emoji: '🏘️', label: lc.historicStreets, time: lc.historicTime },
    { emoji: '⚓', label: lc.harbor, time: lc.harborTime },
    { emoji: '🛍️', label: lc.bazaar, time: lc.bazaarTime },
    { emoji: '🌊', label: lc.sea, time: lc.seaTime },
  ];

  return (
    <section id="location" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3"
          >
            {lc.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-gray-900 mb-4"
          >
            {lc.title1}{' '}
            <span className="gradient-text">{lc.title2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-gray-500 leading-relaxed"
          >
            {lc.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map — 2/3 width */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: -30 }}
            animate={mapInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl overflow-hidden shadow-soft-xl border border-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25530.744866999656!2d30.682106812458347!3d36.8821393735403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39005f531ff73%3A0x7e885a7448ab2654!2sKalei%C3%A7i%20Hotel!5e0!3m2!1str!2str!4v1780050973579!5m2!1str!2str"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaleiçi Hotel Location"
                className="w-full block"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Kalei%C3%A7i+Hotel+Antalya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-inter font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-soft-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {lc.getDirections}
              </a>
              <a
                href="https://www.google.com/maps/place/Kalei%C3%A7i+Hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-gray-700 font-inter font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 border border-stone-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {lc.openMaps}
              </a>
            </div>
          </motion.div>

          {/* Right sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={mapInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {/* Address card */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-inter font-semibold text-gray-800 text-sm mb-1">{lc.address}</p>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    Kılınçarslan, Sakarya Sk. No:11,<br />
                    07100 Muratpaşa/<br />
                    Antalya, Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-3 border-t border-stone-200">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-inter font-semibold text-gray-800 text-sm mb-0.5">{lc.phone}</p>
                  <a
                    href="tel:+905431480700"
                    className="font-inter text-sm text-primary-700 hover:text-primary-800 transition-colors"
                  >
                    +90 543 148 07 00
                  </a>
                </div>
              </div>
            </div>

            {/* Nearby attractions */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-soft">
              <p className="font-inter text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {lc.nearby}
              </p>
              <div className="space-y-3">
                {attractions.map((attr) => (
                  <div key={attr.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{attr.emoji}</span>
                      <span className="font-inter text-sm text-gray-700 font-medium">{attr.label}</span>
                    </div>
                    <span className="font-inter text-xs text-primary-600 font-semibold bg-primary-50 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                      {attr.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
