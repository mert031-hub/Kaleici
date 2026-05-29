import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kaleiçi Hotel – Boutique Hotel in Antalya Old Town',
  description:
    'Stay in the heart of Antalya\'s historic Kaleiçi district. A peaceful 3-star boutique hotel with free breakfast, outdoor pool, and garden — minutes from Hadrian\'s Gate and Mermerli Beach.',
  keywords: [
    'Kaleiçi Hotel',
    'Antalya boutique hotel',
    'hotel in Kaleiçi',
    'Antalya old town hotel',
    'Hadrian\'s Gate hotel',
    'Mermerli Beach hotel',
    'Antalya accommodation',
    'Turkey boutique hotel',
  ],
  authors: [{ name: 'Kaleiçi Hotel' }],
  creator: 'Kaleiçi Hotel',
  publisher: 'Kaleiçi Hotel',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kaleicihotel.com',
    title: 'Kaleiçi Hotel – Boutique Hotel in Antalya Old Town',
    description:
      'Stay in the heart of Antalya\'s historic Kaleiçi district. Free breakfast, outdoor pool, garden — prime location.',
    siteName: 'Kaleiçi Hotel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaleiçi Hotel – Boutique Hotel in Antalya',
    description: 'Stay in the heart of Antalya\'s historic Kaleiçi district.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a4731',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter bg-stone-50 text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
