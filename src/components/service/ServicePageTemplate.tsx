import Image from 'next/image';
import Link from 'next/link';
import { ServiceData } from '@/types';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Gallery from '@/components/home/Gallery';
import CTASection from '@/components/home/CTASection';
import FAQAccordion from './FAQAccordion';
import { BUSINESS } from '@/lib/constants';

type ServicePageTemplateProps = Omit<ServiceData, 'slug' | 'metaTitle' | 'metaDescription'>;

export default function ServicePageTemplate({
  title,
  headline,
  subheadline,
  description,
  features,
  faqs,
  heroImage,
  galleryImages,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Service Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden -mt-[72px]">
        <Image
          src={heroImage}
          alt={`${title} — Pro Paving and Landscaping`}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/50 to-forest/15" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14 sm:pb-18 pt-28 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-body text-xs text-parchment/40 mb-5">
            <Link href="/" className="hover:text-parchment/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-parchment/60">{title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <div className="gold-rule" />
            <span className="font-body text-xs font-medium tracking-[0.2em] uppercase text-parchment/40">
              Our Services
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-parchment leading-[1.1] mb-4 max-w-3xl">
            {headline}
          </h1>
          {subheadline && (
            <p className="font-body text-base text-gold-light font-medium mb-8">
              {subheadline}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-parchment font-body font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] w-fit"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Free Quote
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-parchment/25 hover:border-parchment/50 text-parchment font-body font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-parchment/10 w-fit"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="py-16 lg:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Description */}
            <div>
              <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold mb-4">
                About This Service
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-light text-forest mb-6 leading-tight">
                {title}
              </h2>
              <div className="gold-rule mb-7" />
              <p className="font-body text-base text-ink/60 leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 bg-forest hover:bg-forest-mid text-parchment font-body font-semibold text-sm px-6 py-3 rounded-full transition-colors"
                >
                  {BUSINESS.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-forest/30 hover:border-forest text-forest font-body font-medium text-sm px-6 py-3 rounded-full transition-colors hover:bg-forest hover:text-parchment"
                >
                  Send Enquiry
                </Link>
              </div>
            </div>

            {/* Features list */}
            <div className="bg-mist rounded-2xl p-8 border border-stone/40">
              <h3 className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-6">
                What&apos;s Included
              </h3>
              <ul className="space-y-3.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3.5">
                    <span className="w-5 h-5 rounded-full bg-forest flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-parchment" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-body text-sm text-ink/70">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <Gallery images={galleryImages} initialShow={galleryImages.length} />
      )}

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-parchment-dark">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-10">
            <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-forest">
              Frequently Asked
            </h2>
          </div>
          <div className="bg-parchment rounded-2xl shadow-sm border border-stone/30 px-7">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline={`Start Your ${title} Project`}
        subheadline="Contact us today for a free, no-obligation quote. Covering London, Essex and Kent."
      />
    </>
  );
}
