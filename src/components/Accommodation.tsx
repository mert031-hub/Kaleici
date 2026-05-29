'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WHATSAPP_URL =
  'https://wa.me/905431480700?text=Hello%2C%20I%20would%20like%20to%20receive%20reservation%20information%20for%20Kalei%C3%A7i%20Hotel.';

const roomAmenities = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm0 8a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    ),
    label: 'Comfortable Beds',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Air Conditioning',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Private Bathroom',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Free Wi-Fi',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Daily Cleaning',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
    ),
    label: 'City View',
  },
];

export default function Accommodation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: '-60px' });

  return (
    <section id="accommodation" className="section-padding bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3"
          >
            Stay With Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-lg text-gray-900 mb-4"
          >
            Your Perfect{' '}
            <span className="gradient-text">Retreat</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-base text-gray-500 leading-relaxed"
          >
            Our thoughtfully designed rooms combine Ottoman elegance with modern
            comfort — a peaceful sanctuary in the heart of old Antalya.
          </motion.p>
        </div>

        {/* Feature card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          animate={cardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-soft-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: Visual card */}
            <div
              className="relative min-h-[320px] lg:min-h-[520px] pattern-overlay"
              style={{
                background:
                  'linear-gradient(135deg, #84d4a2 0%, #52b788 25%, #2d9e6b 60%, #1a4731 100%)',
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full border-2 border-white/20 opacity-50" />
              <div className="absolute top-16 right-16 w-16 h-16 rounded-full border-2 border-white/20 opacity-50" />
              <div className="absolute bottom-12 left-8 w-20 h-20 rounded-full border-2 border-white/20 opacity-50" />

              {/* Leaf accents */}
              <svg className="absolute top-10 left-10 opacity-25" width="70" height="105" viewBox="0 0 80 120" fill="none">
                <path d="M40 120 C40 120 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 120 40 120Z" fill="white"/>
              </svg>
              <svg className="absolute bottom-16 right-10 opacity-15 -rotate-45" width="50" height="75" viewBox="0 0 80 120" fill="none">
                <path d="M40 120 C40 120 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 120 40 120Z" fill="white"/>
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🛏️</div>
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-3 inline-block">
                    <p className="font-playfair text-white font-semibold text-lg">Standard Room</p>
                    <p className="font-inter text-white/80 text-sm">With Breakfast Included</p>
                  </div>
                </div>
              </div>

              {/* Bottom badges */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-2 flex-1 text-center">
                  <p className="font-inter text-white text-xs font-semibold">Check-in</p>
                  <p className="font-playfair text-white font-bold text-base">14:00</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-2 flex-1 text-center">
                  <p className="font-inter text-white text-xs font-semibold">Check-out</p>
                  <p className="font-playfair text-white font-bold text-base">11:00</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-2 flex-1 text-center">
                  <p className="font-inter text-white text-xs font-semibold">Rating</p>
                  <p className="font-playfair text-white font-bold text-base">4.5 ★</p>
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-inter font-semibold px-3 py-1.5 rounded-full mb-6 self-start">
                <span>⭐</span>
                <span>Most Popular Choice</span>
              </div>

              <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
                Cozy Garden Room
              </h3>

              <p className="font-inter text-base text-gray-600 leading-relaxed mb-8">
                Experience the warmth of Ottoman hospitality in our beautifully appointed
                rooms. Each room features quality bedding, modern amenities, and the
                soothing sounds of our garden below. Wake up refreshed, enjoy a complimentary
                breakfast, and start your Kaleiçi adventure.
              </p>

              {/* Amenities grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {roomAmenities.map((amenity) => (
                  <div
                    key={amenity.label}
                    className="flex items-center gap-2.5 bg-stone-50 rounded-xl p-3 border border-stone-200"
                  >
                    <div className="flex-shrink-0 text-primary-600">{amenity.icon}</div>
                    <span className="font-inter text-sm text-gray-700 font-medium leading-tight">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-primary-700 hover:bg-primary-800 text-white font-inter font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-soft-lg hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book Your Stay
                </a>
                <a
                  href="tel:+905431480700"
                  className="inline-flex items-center justify-center gap-2.5 bg-stone-100 hover:bg-stone-200 text-gray-800 font-inter font-semibold text-base px-6 py-4 rounded-2xl transition-all duration-300 border border-stone-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>

              <p className="font-inter text-xs text-gray-400 mt-4">
                No booking fees. Direct reservation only. Best rates guaranteed.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
