/**
 * Centralized image configuration for Kaleiçi Hotel website.
 *
 * HOW TO ADD REAL HOTEL PHOTOS:
 * 1. Place your photo files inside the `public/images/` folder.
 * 2. Update the `src` field below to match the filename you used.
 *    Example: replace "/images/galeri-havuz.svg" with "/images/havuz.jpg"
 * 3. Run `npm run build` to verify everything works.
 *
 * Supported formats: .jpg  .jpeg  .webp  .png  .svg
 */

export interface HotelImage {
  src: string;
  alt: string;
  altTr: string;
  width: number;
  height: number;
}

// ─── Gallery (12 images) ──────────────────────────────────────────────────────
export const galleryImages: HotelImage[] = [
  {
    src: '/images/galeri-havuz.svg',
    alt: 'Outdoor Pool',
    altTr: 'Açık Havuz',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-bahce.svg',
    alt: 'Garden Terrace',
    altTr: 'Bahçe Terası',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-cephe.svg',
    alt: 'Hotel Facade',
    altTr: 'Otel Cephesi',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-begonvil.svg',
    alt: 'Bougainvillea Walk',
    altTr: 'Begonvil Yolu',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-havuz-kenar.svg',
    alt: 'Pool Lounge',
    altTr: 'Havuz Kenarı',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-kahvalti.svg',
    alt: 'Breakfast Garden',
    altTr: 'Kahvaltı Bahçesi',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-avlu.svg',
    alt: 'Stone Courtyard',
    altTr: 'Taş Avlu',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-aksam.svg',
    alt: 'Evening Garden',
    altTr: 'Akşam Bahçesi',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-havuz-yani.svg',
    alt: 'Pool Side',
    altTr: 'Havuz Yanı',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-cicek.svg',
    alt: 'Floral Alley',
    altTr: 'Çiçek Koridoru',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-oda.svg',
    alt: 'Guest Room',
    altTr: 'Misafir Odası',
    width: 800,
    height: 600,
  },
  {
    src: '/images/galeri-manzara.svg',
    alt: 'Rooftop View',
    altTr: 'Çatı Manzarası',
    width: 800,
    height: 600,
  },
];

// ─── About section ────────────────────────────────────────────────────────────
export const aboutImage: HotelImage = {
  src: '/images/hakkimizda.svg',
  alt: 'Kaleiçi Hotel garden and pool',
  altTr: 'Kaleiçi Hotel bahçe ve havuz',
  width: 600,
  height: 750,
};

// ─── Accommodation section ────────────────────────────────────────────────────
export const accommodationImage: HotelImage = {
  src: '/images/konaklama.svg',
  alt: 'Kaleiçi Hotel room',
  altTr: 'Kaleiçi Hotel odası',
  width: 900,
  height: 600,
};
