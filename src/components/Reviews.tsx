'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const reviewData = [
  {
    name: 'Iliana',
    source: 'Google',
    rating: 5,
    timeKey: 'time1' as const,
    text: 'Kaleiçi Hotel is a true gem. The owner is incredibly kind, welcoming, and always ready to help with anything you need. The service is top-notch — warm, personal, and attentive. The garden and pool area are beautiful. I felt completely at home.',
    avatar: 'IL',
    avatarColor: 'bg-secondary-500',
  },
  {
    name: 'Savas Caliskan',
    source: 'Google',
    rating: 5,
    timeKey: 'time2' as const,
    text: 'Ali kardeş çok ilgili akıllı bir işletmeci, otel çok güzel merkezi konumda, kahvaltı çok güzel, sigara böreği hayatımda yediğim en iyisi. Kesinlikle tavsiye ediyorum!',
    avatar: 'SC',
    avatarColor: 'bg-primary-600',
  },
  {
    name: 'Binam288',
    source: 'Tripadvisor',
    rating: 3,
    timeKey: 'time3' as const,
    text: 'The owner is very friendly and his family is very hard working. The breakfast was good. The location is excellent — right in the heart of Kaleiçi with everything within walking distance.',
    avatar: 'BI',
    avatarColor: 'bg-accent-500',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, delay }: { review: typeof reviewData[0]; delay: number }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl p-7 shadow-soft border border-stone-200 card-hover flex flex-col"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-inter font-semibold text-sm`}>
            {review.avatar}
          </div>
          <div>
            <p className="font-inter font-semibold text-gray-900 text-sm">{review.name}</p>
            <p className="font-inter text-xs text-gray-400">{t.reviews[review.timeKey]}</p>
          </div>
        </div>
        <div className={`text-xs font-inter font-semibold px-3 py-1.5 rounded-full ${
          review.source === 'Google' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
        }`}>
          {review.source}
        </div>
      </div>

      <StarRating rating={review.rating} />

      <p className="font-inter text-sm text-gray-600 leading-relaxed mt-4 flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
    </motion.div>
  );
}

export default function Reviews() {
  const { t } = useLanguage();
  const rv = t.reviews;

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const badgeRef = useRef<HTMLDivElement>(null);
  const badgeInView = useInView(badgeRef, { once: true });

  return (
    <section id="reviews" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-inter text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3">
            {rv.badge}
          </p>
          <h2 className="heading-lg text-gray-900 mb-5">
            {rv.title1}{' '}
            <span className="gradient-text">{rv.title2}</span>
          </h2>

          <motion.div
            ref={badgeRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={badgeInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-5 bg-white rounded-2xl px-8 py-5 shadow-soft border border-stone-200 mt-4"
          >
            <div className="text-center">
              <p className="font-playfair text-5xl font-bold text-primary-800">4.5</p>
              <div className="flex justify-center mt-1">
                <StarRating rating={5} />
              </div>
            </div>
            <div className="w-px h-14 bg-stone-200" />
            <div className="text-left">
              <p className="font-inter text-sm font-semibold text-gray-900">{rv.count}</p>
              <p className="font-inter text-xs text-gray-500 mt-0.5">{rv.on}</p>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="w-2 h-2 rounded-full bg-primary-500" />
                <p className="font-inter text-xs text-gray-600">{rv.verified}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviewData.map((review, i) => (
            <ReviewCard key={review.name} review={review} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/maps/place/Kalei%C3%A7i+Hotel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors duration-200 border-b-2 border-primary-300 hover:border-primary-600 pb-0.5"
          >
            {rv.seeAll}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
