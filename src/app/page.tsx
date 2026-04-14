import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Gallery from '@/components/home/Gallery';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import { allGalleryImages } from '@/data/gallery';
import { testimonials } from '@/data/testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Gallery images={allGalleryImages} initialShow={12} />
      <Testimonials reviews={testimonials} />
      <CTASection />
    </>
  );
}
