'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

const services = [
  { name: 'Garden', href: '/garden' },
  { name: 'Landscaping', href: '/landscaping' },
  { name: 'Driveways', href: '/driveways' },
  { name: 'Fencing', href: '/fencing' },
  { name: 'Paving', href: '/paving' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = !scrolled && !mobileOpen;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent border-b border-white/10'
          : 'bg-parchment/96 backdrop-blur-md border-b border-stone/40 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center group">
            <Image
              src="/assets/propaving/hero-bg.jpg"
              alt="Pro Paving & Landscaping"
              width={160}
              height={50}
              className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Our Work', 'Contact'].map((label) => {
              const hrefs: Record<string, string> = { Home: '/', 'Our Work': '/#gallery', Contact: '/contact' };
              return (
                <Link
                  key={label}
                  href={hrefs[label]}
                  className={`nav-link text-sm font-body font-medium tracking-wide transition-colors duration-300 ${isTransparent ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-forest'}`}
                >
                  {label}
                </Link>
              );
            })}

            {/* Services dropdown */}
            <div className="relative group">
              <button className={`nav-link flex items-center gap-1.5 text-sm font-body font-medium tracking-wide transition-colors duration-300 py-6 ${isTransparent ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-forest'}`}>
                Services
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                <div className="bg-parchment border border-stone/50 rounded-xl shadow-xl overflow-hidden w-44">
                  <div className="p-1">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-2 px-3 py-2.5 text-sm font-body text-ink/70 hover:text-forest hover:bg-parchment-dark rounded-lg transition-colors group/item"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className={`flex items-center gap-2 text-sm font-body font-semibold px-5 py-2.5 rounded-full border transition-all duration-300 ${
                isTransparent
                  ? 'border-white/30 text-white hover:bg-white hover:text-forest'
                  : 'border-forest text-forest hover:bg-forest hover:text-parchment'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-forest hover:bg-parchment-dark'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-parchment border-t border-stone/40 px-5 py-4 space-y-1">
          {['Home', 'Our Work', 'Contact'].map((label) => {
            const hrefs: Record<string, string> = { Home: '/', 'Our Work': '/#gallery', Contact: '/contact' };
            return (
              <Link key={label} href={hrefs[label]} onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 font-body text-sm text-ink/70 hover:text-forest hover:bg-parchment-dark rounded-xl transition-colors">
                {label}
              </Link>
            );
          })}

          <button onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full px-4 py-3 font-body text-sm text-ink/70 hover:text-forest hover:bg-parchment-dark rounded-xl transition-colors">
            Services
            <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {servicesOpen && (
            <div className="pl-4 pb-1 space-y-0.5">
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 font-body text-sm text-ink/60 hover:text-forest hover:bg-parchment-dark rounded-lg transition-colors">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {s.name}
                </Link>
              ))}
            </div>
          )}

          <div className="pt-3 border-t border-stone/40">
            <a href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-2 w-full bg-forest text-parchment font-body font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors hover:bg-forest-mid">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
