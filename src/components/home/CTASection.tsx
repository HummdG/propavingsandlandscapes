import { BUSINESS } from '@/lib/constants';
import Link from 'next/link';

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
}

export default function CTASection({
  headline = 'Ready to Begin?',
  subheadline = 'Get your free, no-obligation quote. We cover London, Essex and Kent.',
}: CTASectionProps) {
  return (
    <section className="bg-forest relative overflow-hidden py-20 lg:py-24">
      {/* Decorative diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04]"
        style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(158,123,65,1) 100%)' }}
      />
      {/* Thin gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">

        <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold mb-5">
          Get in Touch
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-parchment leading-tight mb-4">
          {headline}
        </h2>
        <p className="font-body text-base text-parchment/50 mb-10 max-w-md mx-auto">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="group flex items-center gap-2.5 bg-gold hover:bg-gold-light text-parchment font-body font-semibold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gold/20 w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call {BUSINESS.phone}
          </a>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-body font-semibold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-parchment/20 hover:border-parchment/40 text-parchment/60 hover:text-parchment font-body text-sm px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Send Enquiry
          </Link>
        </div>

        <p className="font-body text-xs text-parchment/25 mt-8 tracking-wide">
          Covering {BUSINESS.coverage} · Free estimates · No hidden charges
        </p>
      </div>
    </section>
  );
}
