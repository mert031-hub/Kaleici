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
    src: "/images/bahce1.webp",
    alt: "Outdoor Pool",
    altTr: "Açık Havuz",
    width: 800,
    height: 600,
  },
  {
    src: "/images/bahce2.webp",
    alt: "Garden Terrace",
    altTr: "Bahçe Terası",
    width: 800,
    height: 600,
  },
  {
    src: "/images/bahce3.webp",
    alt: "Hotel Facade",
    altTr: "Otel Cephesi",
    width: 800,
    height: 600,
  },
  {
    src: "/images/odaici1.avif",
    alt: "Bougainvillea Walk",
    altTr: "Begonvil Yolu",
    width: 800,
    height: 600,
  },
  {
    src: "/images/odaici2.avif",
    alt: "Pool Lounge",
    altTr: "Havuz Kenarı",
    width: 800,
    height: 600,
  },
  {
    src: "/images/odaici3.avif",
    alt: "Breakfast Garden",
    altTr: "Kahvaltı Bahçesi",
    width: 800,
    height: 600,
  },
  {
    src: "/images/banyo1.avif",
    alt: "Breakfast Garden",
    altTr: "Kahvaltı Bahçesi",
    width: 800,
    height: 600,
  },
  {
    src: "/images/odaici3.avif",
    alt: "Breakfast Garden",
    altTr: "Kahvaltı Bahçesi",
    width: 800,
    height: 600,
  },
  {
    src: "/images/Hol1.webp",
    alt: "Stone Courtyard",
    altTr: "Taş Avlu",
    width: 800,
    height: 600,
  },
  {
    src: "/images/meydan1.webp",
    alt: "Evening Garden",
    altTr: "Akşam Bahçesi",
    width: 800,
    height: 600,
  },
  {
    src: "/images/Odaici4.avif",
    alt: "Pool Side",
    altTr: "Havuz Yanı",
    width: 800,
    height: 600,
  },
  {
    src: "/images/odaici5.avif",
    alt: "Floral Alley",
    altTr: "Çiçek Koridoru",
    width: 800,
    height: 600,
  },
  {
    src: "/images/odaici6.avif",
    alt: "",
    altTr: "Misafir Odası",
    width: 800,
    height: 600,
  },
  {
    src: "/images/reception.avif",
    alt: "",
    altTr: "Çatı Manzarası",
    width: 800,
    height: 600,
  },
  {
    src: "/images/kahvalti.jpg",
    alt: "",
    altTr: "Çatı Manzarası",
    width: 800,
    height: 600,
  },

  {
    src: "/images/kahvalti3.jpg",
    alt: "",
    altTr: "Çatı Manzarası",
    width: 800,
    height: 600,
  },
];

// ─── About section ────────────────────────────────────────────────────────────
export const aboutImage: HotelImage = {
  src: "/images/Deniz1.webp",
  alt: "Kaleiçi Hotel garden and pool",
  altTr: "Kaleiçi Hotel bahçe ve havuz",
  width: 600,
  height: 750,
};

// ─── Accommodation section ────────────────────────────────────────────────────
export const accommodationImage: HotelImage = {
  src: "/images/odaici3.avif",
  alt: "Kaleiçi Hotel room",
  altTr: "Kaleiçi Hotel odası",
  width: 900,
  height: 600,
};
