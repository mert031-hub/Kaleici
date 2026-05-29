'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

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
  useEffect(() => setMounted(true), []);

  const h = t.hero;

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #87CEEB 0%, #48cae4 22%, #2d9e6b 58%, #1a4731 100%)',
      }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3Ccircle cx='80' cy='0' r='2'/%3E%3Ccircle cx='0' cy='80' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f4845f 0%, transparent 70%)' }}
      />
      <svg className="absolute top-1/4 left-8 opacity-15 pointer-events-none" width="80" height="120" viewBox="0 0 80 120" fill="none">
        <path d="M40 120 C40 120 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 120 40 120Z" fill="white" />
      </svg>
      <svg className="absolute bottom-32 right-12 opacity-15 pointer-events-none rotate-45" width="60" height="90" viewBox="0 0 80 120" fill="none">
        <path d="M40 120 C40 120 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 120 40 120Z" fill="white" />
      </svg>

      {/* Main content */}
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
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
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
            className="font-inter text-lg sm:text-xl md:text-2xl text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto"
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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

        {mounted && (
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-inter">
              <span className="text-yellow-300 text-sm sm:text-base">★★★★★</span>
              <span className="font-semibold">{h.trustRating}</span>
              <span className="text-white/75">· {h.trustReviews}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-inter">
              <svg className="w-3.5 h-3.5 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{h.trustLocation}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-inter">
              <svg className="w-3.5 h-3.5 text-yellow-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{h.trustBreakfast}</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="font-inter text-xs uppercase tracking-widest">{h.scroll}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
