import type { Metadata } from 'next';
import Link from 'next/link';
import EnquiryForm from '@/components/contact/EnquiryForm';
import CTASection from '@/components/home/CTASection';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | Pro Paving and Landscaping',
  description:
    'Get in touch with Pro Paving & Landscaping for a free quote. Call 07747 193288 or fill in our enquiry form. Serving London, Essex and Kent.',
  openGraph: {
    title: 'Contact Us | Pro Paving and Landscaping',
    description: 'Get a free quote for garden, landscaping, driveways, fencing and paving services across London, Essex and Kent.',
    images: [{ url: '/assets/propaving/gallery-01.jpg', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-forest pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <nav className="flex items-center justify-center gap-2 font-body text-xs text-parchment/35 mb-6">
            <Link href="/" className="hover:text-parchment/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-parchment/50">Contact</span>
          </nav>
          <div className="flex justify-center mb-5">
            <div className="gold-rule" />
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-light text-parchment mb-4">Get in Touch</h1>
          <p className="font-body text-base text-parchment/45">
            Ready to transform your outdoor space? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 lg:py-24 bg-parchment-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — contact info */}
            <div>
              <h2 className="font-serif text-3xl font-light text-forest mb-2">Contact Details</h2>
              <div className="gold-rule my-5" />
              <p className="font-body text-sm text-ink/50 mb-8 leading-relaxed">
                Call us, send a WhatsApp, or fill in the form and we&apos;ll respond promptly.
              </p>

              <div className="space-y-6">
                {[
                  { label: 'Phone', value: BUSINESS.phone, href: BUSINESS.phoneHref },
                  { label: 'Email', value: BUSINESS.email, href: BUSINESS.emailHref },
                  { label: 'Address', value: BUSINESS.address.full, href: null },
                  { label: 'Covering', value: BUSINESS.coverage, href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-px h-full bg-gold/30 self-stretch" />
                    <div>
                      <p className="font-body text-xs font-medium tracking-[0.15em] uppercase text-gold/70 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-body text-sm text-forest hover:text-gold transition-colors font-medium">{item.value}</a>
                      ) : (
                        <p className="font-body text-sm text-ink/60">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-parchment rounded-xl border border-stone/50">
                <p className="font-body text-sm font-medium text-forest mb-1">Prefer WhatsApp?</p>
                <p className="font-body text-xs text-ink/45 mb-4">Quick responses — usually within minutes.</p>
                <a
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-body font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Open WhatsApp
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-parchment rounded-2xl shadow-sm border border-stone/40 p-7 lg:p-8">
              <h2 className="font-serif text-2xl font-light text-forest mb-1">Send an Enquiry</h2>
              <p className="font-body text-xs text-ink/40 mb-7">We&apos;ll get back to you as soon as possible.</p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Or Call for an Instant Response"
        subheadline="Speak directly with Nick or the team. Free quotes — no obligation."
      />
    </>
  );
}
