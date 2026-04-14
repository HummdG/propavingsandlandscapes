import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

const serviceLinks = [
  { name: 'Garden', href: '/garden' },
  { name: 'Landscaping', href: '/landscaping' },
  { name: 'Driveways', href: '/driveways' },
  { name: 'Fencing', href: '/fencing' },
  { name: 'Paving', href: '/paving' },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-parchment">
      {/* Thin gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 lg:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-1 ring-gold/20 group-hover:ring-gold/40 transition-all duration-300 shrink-0">
                <Image
                  src="/assets/propaving/favicon-180.jpeg"
                  alt="Pro Paving & Landscaping"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <span className="block font-serif text-base font-medium text-parchment leading-tight">
                  Pro Paving
                </span>
                <span className="block font-body text-xs text-gold tracking-[0.12em] uppercase">
                  &amp; Landscaping
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-parchment/40 leading-relaxed mb-5 max-w-[220px]">
              {BUSINESS.tagline}. Transforming outdoor spaces since 2016.
            </p>
            <div className="gold-rule" />
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-parchment/30 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-parchment/50 hover:text-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-parchment/30 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Our Work', href: '/#gallery' },
                { name: 'Reviews', href: '/#testimonials' },
                { name: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-parchment/50 hover:text-gold transition-colors duration-300">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-parchment/30 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={BUSINESS.phoneHref} className="font-body text-sm text-parchment/60 hover:text-gold transition-colors duration-300 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 shrink-0 text-gold/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={BUSINESS.emailHref} className="font-body text-sm text-parchment/60 hover:text-gold transition-colors duration-300 break-all">
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <p className="font-body text-sm text-parchment/40 leading-relaxed">
                  {BUSINESS.address.full}
                </p>
              </li>
              <li>
                <p className="font-body text-xs text-parchment/30 tracking-wide">
                  Covering {BUSINESS.coverage}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-parchment/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-parchment/20">
            © {new Date().getFullYear()} Pro Paving and Landscaping Ltd · Co. No: {BUSINESS.companyNumber}
          </p>
          <p className="font-body text-xs text-parchment/15">
            London · Essex · Kent
          </p>
        </div>
      </div>
    </footer>
  );
}
