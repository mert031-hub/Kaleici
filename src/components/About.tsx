'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

function AnimatedSection({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
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

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Mermerli Beach',
    detail: '6 min walk',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    label: "Hadrian's Gate",
    detail: '7 min walk',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Historic Streets',
    detail: 'Right at doorstep',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
      </svg>
    ),
    label: 'Antalya Old Harbor',
    detail: '10 min walk',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Decorative visual card */}
          <AnimatedSection delay={0}>
            <div className="relative">
              {/* Main decorative card */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-soft-xl aspect-[4/5] max-w-md mx-auto lg:mx-0 pattern-overlay"
                style={{
                  background:
                    'linear-gradient(135deg, #52b788 0%, #2d9e6b 50%, #1a4731 100%)',
                }}
              >
                {/* Inner decorative elements */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Decorative circles */}
                  <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-white/10 border border-white/20" />
                  <div className="absolute top-16 right-16 w-10 h-10 rounded-full bg-white/10 border border-white/20" />

                  {/* Leaf decorations */}
                  <svg className="absolute top-12 left-8 opacity-30" width="60" height="90" viewBox="0 0 80 120" fill="none">
                    <path d="M40 120 C40 120 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 120 40 120Z" fill="white"/>
                  </svg>
                  <svg className="absolute top-20 left-20 opacity-20 rotate-12" width="40" height="60" viewBox="0 0 80 120" fill="none">
                    <path d="M40 120 C40 120 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 120 40 120Z" fill="white"/>
                  </svg>

                  {/* Pool ripples */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3">
                    <div className="w-32 h-32 rounded-full border-2 border-white/20 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-4 rounded-full border-2 border-white/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  </div>

                  {/* Bottom info card */}
                  <div className="relative z-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-5">
                    <p className="font-playfair text-xl font-semibold text-white mb-1">
                      Since 2015
                    </p>
                    <p className="font-inter text-sm text-white/80">
                      Welcoming guests to the heart of historic Kaleiçi
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
                      <span className="font-inter text-sm text-white/80">875+ Happy Guests</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white rounded-2xl shadow-soft-xl p-5 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌿</span>
                  <span className="font-playfair font-semibold text-primary-800 text-sm">Garden Hotel</span>
                </div>
                <p className="font-inter text-xs text-gray-500 leading-relaxed">
                  Surrounded by lush Mediterranean greenery
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Text content */}
          <div className="space-y-8">
            <AnimatedSection delay={0.15}>
              <div>
                <p className="font-inter text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3">
                  About Us
                </p>
                <h2 className="heading-lg text-gray-900 mb-6">
                  A Boutique Gem in{' '}
                  <span className="gradient-text">Historic Kaleiçi</span>
                </h2>
                <p className="font-inter text-base text-gray-600 leading-relaxed mb-4">
                  Nestled within the ancient walls of Antalya's most beloved neighborhood,
                  Kaleiçi Hotel is a family-run boutique hotel that blends Ottoman charm
                  with modern comfort. Our lush garden, sparkling outdoor pool, and warm
                  hospitality create an unforgettable retreat.
                </p>
                <p className="font-inter text-base text-gray-600 leading-relaxed">
                  Wake up to a complimentary breakfast in our garden terrace, spend your
                  afternoons by the pool, and step out to discover centuries of history
                  just minutes away. Our dedicated team treats every guest as family.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.25}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: '4.5★', label: 'Google Rating' },
                  { number: '875+', label: 'Guest Reviews' },
                  { number: '3★', label: 'Star Hotel' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center bg-white rounded-2xl p-4 shadow-soft border border-stone-200"
                  >
                    <p className="font-playfair text-2xl font-bold text-primary-700">
                      {stat.number}
                    </p>
                    <p className="font-inter text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Nearby attractions */}
            <AnimatedSection delay={0.35}>
              <div>
                <p className="font-inter text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Walking Distance
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-center gap-3 bg-white rounded-xl p-3.5 shadow-soft border border-stone-200 card-hover"
                    >
                      <div className="flex-shrink-0 w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                        {feature.icon}
                      </div>
                      <div>
                        <p className="font-inter text-sm font-semibold text-gray-800 leading-tight">
                          {feature.label}
                        </p>
                        <p className="font-inter text-xs text-primary-600">{feature.detail}</p>
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
