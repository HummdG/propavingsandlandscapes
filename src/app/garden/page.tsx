import type { Metadata } from 'next';
import { services } from '@/data/services';
import ServicePageTemplate from '@/components/service/ServicePageTemplate';

const service = services.find((s) => s.slug === 'garden')!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    images: [{ url: '/assets/propaving/gallery-01.jpg', width: 1200, height: 630 }],
  },
};

export default function GardenPage() {
  return <ServicePageTemplate {...service} />;
}
