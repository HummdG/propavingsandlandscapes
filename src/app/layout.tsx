import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import StickyMobileCTA from '@/components/ui/StickyMobileCTA';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://propaving-landscaping.co.uk'),
  title: {
    default: 'Pro Paving and Landscaping | London, Essex & Kent',
    template: '%s | Pro Paving and Landscaping',
  },
  description:
    'Best landscaping, paving, driveways, fencing and garden services in London, Essex and Kent. Professional team, competitive prices. Call 07747 193288 for a free quote.',
  keywords: [
    'landscaping London',
    'paving Essex',
    'driveways Kent',
    'garden services London',
    'fencing Essex',
    'patio installation',
    'block paving',
    'Pro Paving Landscaping',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://propaving-landscaping.co.uk',
    siteName: 'Pro Paving and Landscaping',
    title: 'Pro Paving & Landscaping | Driveways, Gardens & Patios',
    description:
      'Professional landscaping, paving, and driveway specialists. Transform your outdoor space today. Serving London, Essex and Kent.',
    images: [
      {
        url: '/assets/propaving/gallery-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Pro Paving and Landscaping — Garden Transformations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Paving & Landscaping | Driveways, Gardens & Patios',
    description:
      'Professional landscaping, paving, and driveway specialists in London, Essex and Kent.',
    images: ['/assets/propaving/gallery-01.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pro Paving and Landscaping',
  image: 'https://propaving-landscaping.co.uk/assets/propaving/gallery-01.jpg',
  '@id': 'https://propaving-landscaping.co.uk',
  url: 'https://propaving-landscaping.co.uk',
  telephone: '07747193288',
  email: 'info@propaving-landscaping.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '33 Grovelands Way',
    addressLocality: 'Grays',
    addressRegion: 'Essex',
    postalCode: 'RM17 5YQ',
    addressCountry: 'GB',
  },
  areaServed: ['London', 'Essex', 'Kent'],
  priceRange: '££',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
