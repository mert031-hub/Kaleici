'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const WA_ICON = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TICKET_ICON = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
  </svg>
);

export default function FloatingButtons() {
  const { t, whatsappUrl } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop floating buttons — bottom-right */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-5 z-50 hidden md:flex flex-col gap-3 items-end"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-inter font-semibold text-sm px-5 py-3 rounded-full shadow-soft-lg hover:shadow-xl transition-all duration-300"
              aria-label="WhatsApp"
            >
              {WA_ICON}
              {t.floating.whatsapp}
            </motion.a>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2.5 bg-primary-700 hover:bg-primary-800 text-white font-inter font-semibold text-sm px-5 py-3 rounded-full shadow-soft-lg hover:shadow-xl transition-all duration-300"
              aria-label="Book Now"
            >
              {TICKET_ICON}
              {t.floating.bookNow}
            </motion.a>

            <AnimatePresence>
              {scrolled && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5 text-gray-600 hover:text-primary-700"
                  aria-label="Scroll to top"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-stone-200 shadow-soft-xl"
            style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
          >
            <div className="flex gap-3 px-4 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-inter font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                aria-label="WhatsApp"
              >
                {WA_ICON}
                {t.floating.whatsapp}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-inter font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                aria-label="Book Now"
              >
                {TICKET_ICON}
                {t.floating.bookNow}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
