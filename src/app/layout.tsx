import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.explorenorwayvan.com'),
  title: {
    default: 'Location van Norvège | ExploreNorwayVan',
    template: '%s | ExploreNorwayVan',
  },
  description: 'Louez un van aménagé en Norvège et explorez les fjords en toute liberté. Prix, itinéraires, conseils et comparatif des loueurs.',
  keywords: ['location van norvège', 'louer van norvège', 'van aménagé norvège', 'road trip norvège van', 'camping car norvège'],
  authors: [{ name: 'ExploreNorwayVan' }],
  creator: 'ExploreNorwayVan',
  publisher: 'ExploreNorwayVan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.explorenorwayvan.com',
    siteName: 'ExploreNorwayVan',
    title: 'Location van Norvège',
    description: 'Louez un van aménagé en Norvège et explorez les fjords en toute liberté.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Van aménagé devant un fjord norvégien',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location van Norvège',
    description: 'Louez un van aménagé en Norvège et explorez les fjords en toute liberté.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.explorenorwayvan.com',
  },
  icons: {
    icon: '/images/favicon-location-van-norvege.png',
    shortcut: '/images/favicon-location-van-norvege.png',
    apple: '/images/favicon-location-van-norvege.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <FloatingCTA />
      </body>
    </html>
  );
}
