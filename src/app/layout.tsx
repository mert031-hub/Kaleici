import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Kaleiçi Hotel – Boutique Hotel in Antalya Old Town",
  description:
    "Stay in the heart of Antalya's historic Kaleiçi district. A peaceful 3-star boutique hotel with  breakfast, outdoor pool, and garden — minutes from Hadrian's Gate and Mermerli Beach.",
  keywords: [
    "Kaleiçi Hotel",
    "Antalya boutique hotel",
    "hotel in Kaleiçi",
    "Antalya old town hotel",
    "Hadrian's Gate hotel",
    "Mermerli Beach hotel",
    "Antalya accommodation",
    "Turkey boutique hotel",
    "Antalya otel",
    "Kaleiçi otel",
  ],
  authors: [{ name: "Kaleiçi Hotel" }],
  creator: "Kaleiçi Hotel",
  publisher: "Kaleiçi Hotel",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://kaleicihotel.com",
    title: "Kaleiçi Hotel – Boutique Hotel in Antalya Old Town",
    description:
      "Stay in the heart of Antalya's historic Kaleiçi district.Breakfast, outdoor pool, garden — prime location.",
    siteName: "Kaleiçi Hotel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaleiçi Hotel – Boutique Hotel in Antalya",
    description: "Stay in the heart of Antalya's historic Kaleiçi district.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a4731",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* Start fetching hero video as early as possible — before React hydrates */}
        <link
          rel="preload"
          href="/videos/heroorj.mp4"
          as="video"
          type="video/mp4"
        />
        {/* Preload hero fallback image so it appears instantly after splash */}
        <link
          rel="preload"
          href="/images/bahce1.webp"
          as="image"
        />
      </head>
      <body className="font-inter bg-stone-50 text-gray-900 overflow-x-hidden">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
