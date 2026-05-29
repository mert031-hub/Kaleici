"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "tr";

export const WHATSAPP_EN =
  "https://wa.me/905431480700?text=Hello%2C%20I%20would%20like%20to%20receive%20reservation%20information%20for%20Kalei%C3%A7i%20Hotel.";
export const WHATSAPP_TR =
  "https://wa.me/905431480700?text=Merhaba%2C%20Kalei%C3%A7i%20Hotel%20i%C3%A7in%20rezervasyon%20bilgisi%20almak%20istiyorum.";

const translations = {
  en: {
    nav: {
      about: "About",
      gallery: "Gallery",
      accommodation: "Accommodation",
      amenities: "Amenities",
      location: "Location",
      reviews: "Reviews",
      contact: "Contact",
      bookNow: "Book Now",
      bookNowWa: "Book Now via WhatsApp",
    },
    hero: {
      badge: "3-Star Boutique Hotel · Antalya Kaleiçi",
      title1: "Stay in the Heart",
      title2: "of Antalya Kaleiçi",
      subtitle:
        "A peaceful boutique hotel surrounded by gardens, history, and Mediterranean charm.",
      cta1: "Book Now",
      cta2: "Contact Us",
      trustRating: "4.5/5",
      trustReviews: "875 Reviews",
      trustLocation: "Prime Kaleiçi Location",
      trustBreakfast: "Free Breakfast Included",
      scroll: "Scroll",
    },
    about: {
      badge: "About Us",
      title1: "A Boutique Gem in",
      title2: "Historic Kaleiçi",
      desc1:
        "Nestled within the ancient walls of Antalya's most beloved neighborhood, Kaleiçi Hotel is a family-run boutique hotel that blends Ottoman charm with modern comfort. Our lush garden, sparkling outdoor pool, and warm hospitality create an unforgettable retreat.",
      desc2:
        "Wake up to a complimentary breakfast in our garden terrace, spend your afternoons by the pool, and step out to discover centuries of history just minutes away. Our dedicated team treats every guest as family.",
      since: "Since 2015",
      sinceDesc: "Welcoming guests to the heart of historic Kaleiçi",
      guests: "875+ Happy Guests",
      rating: "Google Rating",
      reviews: "Guest Reviews",
      stars: "Star Hotel",
      walkingDistance: "Walking Distance",
      mermerli: "Mermerli Beach",
      mermerliTime: "6 min walk",
      hadrian: "Hadrian's Gate",
      hadrianTime: "7 min walk",
      historic: "Historic Streets",
      historicTime: "Right at doorstep",
      harbor: "Antalya Old Harbor",
      harborTime: "10 min walk",
      gardenHotel: "Garden Hotel",
      gardenDesc: "Surrounded by lush Mediterranean greenery",
    },
    gallery: {
      badge: "Garden & Pool",
      title1: "A Mediterranean",
      title2: "Paradise",
      subtitle:
        "Explore our lush gardens, shimmering pool, and charming Ottoman-era architecture. Every corner tells a story.",
      clickHint: "Tap any photo to view full screen",
      pool: "",
      garden: "",
      facade: "",
      bougainvillea: "",
      lounge: "",
      breakfast: "",
      courtyard: "",
      evening: "",
      poolside: "",
      floral: "",
      room: "",
      rooftop: "",
    },
    accommodation: {
      badge: "Stay With Us",
      title1: "Your Perfect",
      title2: "Retreat",
      subtitle:
        "Our thoughtfully designed rooms combine Ottoman elegance with modern comfort — a peaceful sanctuary in the heart of old Antalya.",
      popular: "Most Popular Choice",
      roomName: "Cozy Garden Room",
      roomDesc:
        "Experience the warmth of Ottoman hospitality in our beautifully appointed rooms. Each room features quality bedding, modern amenities, and the soothing sounds of our garden below. Wake up refreshed, enjoy a complimentary breakfast, and start your Kaleiçi adventure.",
      checkin: "Check-in",
      checkout: "Check-out",
      rating: "Rating",
      beds: "Comfortable Beds",
      ac: "Air Conditioning",
      bathroom: "Private Bathroom",
      wifi: "Free Wi-Fi",
      cleaning: "Daily Cleaning",
      view: "City View",
      cta1: "Book Your Stay",
      cta2: "Call Us",
      noFees:
        "No booking fees. Direct reservation only. Best rates guaranteed.",
    },
    amenities: {
      badge: "Hotel Amenities",
      title1: "Everything You",
      title2: "Need & More",
      subtitle:
        "From complimentary breakfast to a refreshing pool, we have everything to make your stay exceptional.",
      wifiTitle: "Free Wi-Fi",
      wifiDesc: "High-speed internet throughout the hotel and garden areas",
      breakfastTitle: " Breakfast",
      breakfastDesc:
        "Freshly prepared Turkish breakfast served in our garden every morning",
      poolTitle: "Outdoor Pool",
      poolDesc:
        "Refreshing outdoor swimming pool perfect for sunny Antalya days",
      acTitle: "Air Conditioning",
      acDesc: "Individual climate control in every room for your comfort",
      gardenTitle: "Garden Area",
      gardenDesc:
        "Lush Mediterranean garden with lounging areas and morning breakfast spot",
      locationTitle: "Central Location",
      locationDesc:
        "Walking distance to Hadrian's Gate, Mermerli Beach & historic streets",
      checkinTitle: "Check-in 14:00",
      checkinDesc:
        "Flexible check-in from 2:00 PM. Early check-in subject to availability",
      checkoutTitle: "Check-out 11:00",
      checkoutDesc:
        "Check-out by 11:00 AM. Late check-out available upon request",
      bannerTitle: "All Amenities Included",
      bannerDesc:
        "No hidden fees. Your stay includes  breakfast, pool access, Wi-Fi, and the warmth of our family-run hospitality.",
      bannerCta: "Reserve Your Room",
    },
    location: {
      badge: "Our Location",
      title1: "In the Heart of",
      title2: "Historic Kaleiçi",
      subtitle:
        "Perfectly positioned within Antalya's ancient walled city, steps away from the best beaches, historic sites, and vibrant markets.",
      address: "Address",
      phone: "Phone",
      nearby: "Nearby Attractions",
      getDirections: "Get Directions",
      openMaps: "Open in Maps",
      beach: "Mermerli Beach",
      beachTime: "6 min walk",
      gate: "Hadrian's Gate",
      gateTime: "7 min walk",
      historicStreets: "Kaleiçi Historic Streets",
      historicTime: "At doorstep",
      harbor: "Antalya Old Harbor",
      harborTime: "10 min walk",
      bazaar: "Local Bazaars",
      bazaarTime: "5 min walk",
      sea: "Mediterranean Sea",
      seaTime: "8 min walk",
    },
    reviews: {
      badge: "Guest Reviews",
      title1: "What Our Guests",
      title2: "Say",
      count: "875+ Reviews",
      on: "on Google Maps",
      verified: "Verified guest reviews",
      seeAll: "See all 875 reviews on Google",
      time1: "6 months ago",
      time2: "2 months ago",
      time3: "7 months ago",
    },
    contact: {
      badge: "Get In Touch",
      title1: "Reserve Your",
      title2: "Stay",
      subtitle:
        "No online forms, no booking fees. Simply reach out directly and our team will take care of everything.",
      whatsapp: "WhatsApp",
      whatsappDesc:
        "Chat with us instantly. We typically respond within minutes.",
      phone: "Phone Call",
      phoneDesc: "Speak directly with our team. Available every day.",
      checkin: "Check-in",
      checkinTime: "From 14:00",
      checkout: "Check-out",
      checkoutTime: "By 11:00",
      instagram: "Instagram",
    },
    footer: {
      tagline:
        "A boutique 3-star hotel nestled in the heart of historic Antalya Kaleiçi. Experience Mediterranean warmth, garden tranquility, and warm Turkish hospitality.",
      quickLinks: "Quick Links",
      contactTitle: "Contact",
      copyright: "All rights reserved.",
      noFees: "No booking fees. Direct reservation only.",
      checkInOut: "Check-in / Check-out",
    },
    floating: {
      whatsapp: "WhatsApp",
      bookNow: "Book Now",
    },
  },
  tr: {
    nav: {
      about: "Hakkımızda",
      gallery: "Galeri",
      accommodation: "Konaklama",
      amenities: "Olanaklar",
      location: "Konum",
      reviews: "Yorumlar",
      contact: "İletişim",
      bookNow: "Rezervasyon",
      bookNowWa: "WhatsApp ile Rezervasyon",
    },
    hero: {
      badge: "3 Yıldızlı Butik Otel · Antalya Kaleiçi",
      title1: "Antalya Kaleiçi'nin",
      title2: "Kalbinde Kalın",
      subtitle:
        "Bahçeler, tarih ve Akdeniz cazibesiyle çevrili huzurlu bir butik otel.",
      cta1: "Rezervasyon",
      cta2: "Bize Ulaşın",
      trustRating: "4,5/5",
      trustReviews: "875 Yorum",
      trustLocation: "Kaleiçi'nin Tam Merkezinde",
      trustBreakfast: "Kahvaltı Dahil",
      scroll: "Kaydır",
    },
    about: {
      badge: "Hakkımızda",
      title1: "Tarihi Kaleiçi'nde",
      title2: "Butik Bir Mücevher",
      desc1:
        "Antalya'nın en sevilen semtinin antik surları içine sinen Kaleiçi Hotel, Osmanlı şöhretini modern konforla harmanlayan aile işletmesi bir butik oteldir. Bakımlı bahçemiz, ferahlatıcı açık havuzumuz ve sıcak misafirperverliğimiz unutulmaz bir konaklama deneyimi sunar.",
      desc2:
        "Sabahları bahçe terasımızda  kahvaltının keyfini çıkarın, öğleden sonraları havuz başında dinlenin ve yüzyıllık tarihi dakikalar içinde keşfedin. Ekibimiz her misafirimize aile gibi davranır.",
      since: "2015'ten Beri",
      sinceDesc: "Tarihi Kaleiçi'nin kalbinde misafirlerimizi ağırlıyoruz",
      guests: "875'ten Fazla Mutlu Misafir",
      rating: "Google Puanı",
      reviews: "Misafir Yorumu",
      stars: "Yıldızlı Otel",
      walkingDistance: "Yürüme Mesafesi",
      mermerli: "Mermerli Plajı",
      mermerliTime: "6 dk yürüme",
      hadrian: "Hadrian Kapısı",
      hadrianTime: "7 dk yürüme",
      historic: "Tarihi Sokaklar",
      historicTime: "Tam kapı önünde",
      harbor: "Antalya Eski Limanı",
      harborTime: "10 dk yürüme",
      gardenHotel: "Bahçeli Otel",
      gardenDesc: "Yemyeşil Akdeniz bitki örtüsüyle çevrili",
    },
    gallery: {
      badge: "Bahçe & Havuz",
      title1: "Bir Akdeniz",
      title2: "Cenneti",
      subtitle:
        "Yemyeşil bahçelerimizi, pırıl pırıl havuzumuzu ve büyüleyici Osmanlı mimarisini keşfedin. Her köşe bir hikaye anlatır.",
      clickHint: "Tam ekranda görmek için fotoğrafa dokunun",
      pool: "",
      garden: "",
      facade: "",
      bougainvillea: "",
      lounge: "",
      breakfast: "",
      courtyard: "",
      evening: "",
      poolside: "",
      floral: "",
      room: "",
      rooftop: "",
    },
    accommodation: {
      badge: "Konaklamanız",
      title1: "Mükemmel",
      title2: "Kaçamağınız",
      subtitle:
        "Özenle tasarlanmış odalarımız, Osmanlı zarafetini modern konforla bir araya getiriyor — eski Antalya'nın kalbinde huzurlu bir sığınak.",
      popular: "En Çok Tercih Edilen",
      roomName: "Klasik Odamız",
      roomDesc:
        "Osmanlı misafirperverliğinin sıcaklığını güzelce döşenmiş odalarımızda yaşayın. Her odada kaliteli yatak takımları, modern olanaklar ve aşağıdaki bahçenin huzurlu sesleri sizi bekliyor. Dinlenmiş uyanın, ücretsiz kahvaltının keyfini çıkarın ve Kaleiçi maceranıza başlayın.",
      checkin: "Giriş",
      checkout: "Çıkış",
      rating: "Puan",
      beds: "Konforlu Yataklar",
      ac: "Klima",
      bathroom: "Özel Banyo",
      wifi: "Ücretsiz Wi-Fi",
      cleaning: "Günlük Temizlik",
      view: "Şehir Manzarası",
      cta1: "Rezervasyon Yap",
      cta2: "Bizi Arayın",
      noFees:
        "Rezervasyon ücreti yok. Yalnızca direkt rezervasyon. En iyi fiyat garantisi.",
    },
    amenities: {
      badge: "Otel Olanakları",
      title1: "İhtiyacınız Olan",
      title2: "Her Şey Burada",
      subtitle:
        "Kahvaltıdan ferahlatıcı havuza kadar, konaklamanızı olağanüstü kılacak her şey bizde mevcut.",
      wifiTitle: "Ücretsiz Wi-Fi",
      wifiDesc: "Otel ve bahçe alanlarında yüksek hızlı internet",
      breakfastTitle: "Kahvaltı",
      breakfastDesc: "Her sabah bahçemizde taze hazırlanan Türk kahvaltısı",
      poolTitle: "Açık Havuz",
      poolDesc: "Güneşli Antalya günleri için ferahlatıcı açık yüzme havuzu",
      acTitle: "Klima",
      acDesc: "Konforunuz için her odada bireysel iklim kontrolü",
      gardenTitle: "Bahçe Alanı",
      gardenDesc:
        "Dinlenme alanları ve sabah kahvaltı noktasıyla yemyeşil Akdeniz bahçesi",
      locationTitle: "Merkezi Konum",
      locationDesc:
        "Hadrian Kapısı, Mermerli Plajı ve tarihi sokaklara yürüme mesafesinde",
      checkinTitle: "Giriş 14:00",
      checkinDesc:
        "Öğleden sonra 14:00'ten itibaren giriş. Erken giriş müsaitliğe göre",
      checkoutTitle: "Çıkış 11:00",
      checkoutDesc: "11:00'e kadar çıkış. Geç çıkış talep üzerine mümkün",
      bannerTitle: "Tüm Olanaklar Dahil",
      bannerDesc:
        "Gizli ücret yok. Konaklamanıza  kahvaltı, havuz erişimi, Wi-Fi ve aile sıcaklığımız dahildir.",
      bannerCta: "Odanızı Rezerve Edin",
    },
    location: {
      badge: "Konumumuz",
      title1: "Tarihi Kaleiçi'nin",
      title2: "Tam Kalbinde",
      subtitle:
        "Antalya'nın antik surlarla çevrili şehrinde mükemmel konumda, en iyi plajlara, tarihi mekanlara ve canlı çarşılara adım mesafesinde.",
      address: "Adres",
      phone: "Telefon",
      nearby: "Yakın Çevredeki Yerler",
      getDirections: "Yol Tarifi Al",
      openMaps: "Haritada Aç",
      beach: "Mermerli Plajı",
      beachTime: "6 dk yürüme",
      gate: "Hadrian Kapısı",
      gateTime: "7 dk yürüme",
      historicStreets: "Kaleiçi Tarihi Sokakları",
      historicTime: "Tam kapı önünde",
      harbor: "Antalya Eski Limanı",
      harborTime: "10 dk yürüme",
      bazaar: "Yerel Çarşılar",
      bazaarTime: "5 dk yürüme",
      sea: "Akdeniz",
      seaTime: "8 dk yürüme",
    },
    reviews: {
      badge: "Misafir Yorumları",
      title1: "Misafirlerimiz",
      title2: "Ne Diyor",
      count: "875'ten Fazla Yorum",
      on: "Google Maps'te",
      verified: "Doğrulanmış misafir yorumları",
      seeAll: "Google'da 875 yorumun tamamını gör",
      time1: "6 ay önce",
      time2: "2 ay önce",
      time3: "7 ay önce",
    },
    contact: {
      badge: "İletişime Geçin",
      title1: "Rezervasyonunuzu",
      title2: "Yapın",
      subtitle:
        "Online form yok, rezervasyon ücreti yok. Doğrudan bizimle iletişime geçin, ekibimiz her şeyi halleder.",
      whatsapp: "WhatsApp",
      whatsappDesc:
        "Anında mesaj gönderin. Genellikle dakikalar içinde yanıt veriyoruz.",
      phone: "Telefon",
      phoneDesc: "Ekibimizle direkt konuşun. Her gün hizmetinizdeyiz.",
      checkin: "Giriş",
      checkinTime: "14:00'ten itibaren",
      checkout: "Çıkış",
      checkoutTime: "11:00'e kadar",
      instagram: "Instagram",
    },
    footer: {
      tagline:
        "Tarihi Antalya Kaleiçi'nin kalbine gömülü bir butik 3 yıldızlı otel. Akdeniz sıcaklığını, bahçe huzurunu ve sıcak Türk misafirperverliğini deneyimleyin.",
      quickLinks: "Hızlı Bağlantılar",
      contactTitle: "İletişim",
      copyright: "Tüm hakları saklıdır.",
      noFees: "Rezervasyon ücreti yok. Yalnızca direkt rezervasyon.",
      checkInOut: "Giriş / Çıkış",
    },
    floating: {
      whatsapp: "WhatsApp",
      bookNow: "Rezervasyon",
    },
  },
};

export type Translations = (typeof translations)["en"];

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  whatsappUrl: string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("kaleici-lang") as Language | null;
    if (saved === "en" || saved === "tr") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("kaleici-lang", newLang);
  };

  const currentLang = mounted ? lang : "en";

  return (
    <LanguageContext.Provider
      value={{
        lang: currentLang,
        setLang,
        t: translations[currentLang],
        whatsappUrl: currentLang === "tr" ? WHATSAPP_TR : WHATSAPP_EN,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
