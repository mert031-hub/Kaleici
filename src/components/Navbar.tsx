'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, type Language } from '@/context/LanguageContext';

export default function Navbar() {
  const { t, lang, setLang, whatsappUrl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.accommodation, href: '#accommodation' },
    { label: t.nav.amenities, href: '#amenities' },
    { label: t.nav.location, href: '#location' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const closeMenu = () => setMobileOpen(false);

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
    closeMenu();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex-shrink-0" onClick={closeMenu}>
              <span
                className={`font-playfair text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? 'text-primary-800' : 'text-white'
                }`}
              >
                Kaleiçi Hotel
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-inter text-sm font-medium transition-colors duration-300 hover:text-primary-500 ${
                    scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop right: lang switcher + CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language switcher */}
              <div className="flex items-center rounded-full border border-white/30 overflow-hidden bg-white/10 backdrop-blur-sm">
                <button
                  onClick={() => toggleLang('tr')}
                  className={`px-3 py-1.5 font-inter text-xs font-semibold transition-all duration-200 ${
                    lang === 'tr'
                      ? scrolled
                        ? 'bg-primary-700 text-white'
                        : 'bg-white/25 text-white'
                      : scrolled
                      ? 'text-gray-600 hover:text-primary-700'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  TR
                </button>
                <button
                  onClick={() => toggleLang('en')}
                  className={`px-3 py-1.5 font-inter text-xs font-semibold transition-all duration-200 ${
                    lang === 'en'
                      ? scrolled
                        ? 'bg-primary-700 text-white'
                        : 'bg-white/25 text-white'
                      : scrolled
                      ? 'text-gray-600 hover:text-primary-700'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Book Now CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-inter text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.nav.bookNow}
              </a>
            </div>

            {/* Mobile right: lang toggle + hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Compact language switcher */}
              <button
                onClick={() => toggleLang(lang === 'tr' ? 'en' : 'tr')}
                className={`font-inter text-xs font-bold px-2.5 py-1.5 rounded-full border transition-all duration-200 ${
                  scrolled
                    ? 'border-primary-300 text-primary-700 bg-primary-50'
                    : 'border-white/40 text-white bg-white/15'
                }`}
                aria-label="Toggle language"
              >
                {lang === 'tr' ? 'EN' : 'TR'}
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 rounded-full transition-all duration-300 ${
                      scrolled ? 'bg-gray-700' : 'bg-white'
                    } ${mobileOpen ? 'rotate-45 translate-y-2.5' : ''}`}
                  />
                  <span
                    className={`block h-0.5 rounded-full transition-all duration-300 ${
                      scrolled ? 'bg-gray-700' : 'bg-white'
                    } ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}
                  />
                  <span
                    className={`block h-0.5 rounded-full transition-all duration-300 ${
                      scrolled ? 'bg-gray-700' : 'bg-white'
                    } ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay + drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="fixed top-16 left-0 right-0 z-50 bg-white shadow-soft-xl md:hidden max-h-[calc(100svh-4rem)] overflow-y-auto"
            >
              <nav className="px-4 py-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="font-inter text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-primary-50 px-4 py-3 rounded-xl transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}

                {/* Language selector in mobile menu */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="font-inter text-xs text-gray-400 uppercase tracking-wider px-4 mb-2">
                    Language / Dil
                  </p>
                  <div className="flex gap-2 px-4">
                    <button
                      onClick={() => toggleLang('tr')}
                      className={`flex-1 py-2.5 rounded-xl font-inter text-sm font-semibold transition-all duration-200 ${
                        lang === 'tr'
                          ? 'bg-primary-700 text-white'
                          : 'bg-stone-100 text-gray-600 hover:bg-stone-200'
                      }`}
                    >
                      🇹🇷 Türkçe
                    </button>
                    <button
                      onClick={() => toggleLang('en')}
                      className={`flex-1 py-2.5 rounded-xl font-inter text-sm font-semibold transition-all duration-200 ${
                        lang === 'en'
                          ? 'bg-primary-700 text-white'
                          : 'bg-stone-100 text-gray-600 hover:bg-stone-200'
                      }`}
                    >
                      🇬🇧 English
                    </button>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white font-inter text-base font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t.nav.bookNowWa}
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
