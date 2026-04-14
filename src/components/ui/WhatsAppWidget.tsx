'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-forest/60 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
        {/* Panel */}
        <div className={`transition-all duration-300 ease-out origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none translate-y-2'
        } ${isMobile ? 'fixed bottom-0 left-0 right-0 rounded-t-2xl' : 'w-80 rounded-2xl'} shadow-2xl overflow-hidden`}>

          {/* Header — dark forest */}
          <div className="bg-forest border-b border-parchment/5 px-4 py-3.5 flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-gold/20 shrink-0">
              <Image src="/assets/propaving/favicon-180.jpeg" alt="Pro Paving" fill className="object-cover" sizes="40px" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body text-sm font-semibold text-parchment leading-tight truncate">
                Pro Paving &amp; Landscaping
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full" />
                <p className="font-body text-xs text-parchment/40">Usually replies quickly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-parchment/30 hover:text-parchment/70 transition-colors p-1 shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="bg-parchment px-4 py-5">
            <div className="bg-mist border border-stone/40 rounded-2xl rounded-tl-sm px-4 py-3.5 mb-4">
              <p className="font-body text-sm font-medium text-forest mb-1">
                👋 Need help with your garden or driveway?
              </p>
              <p className="font-body text-sm text-ink/55">
                Message us for a quick quote and availability.
              </p>
              <p className="font-body text-xs text-ink/30 mt-2 text-right">Pro Paving Team</p>
            </div>

            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da851] text-white font-body font-semibold text-sm py-3.5 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Open WhatsApp
            </a>
            <p className="font-body text-xs text-center text-ink/30 mt-3">
              Or call: <a href={BUSINESS.phoneHref} className="text-forest hover:text-gold-light transition-colors">{BUSINESS.phone}</a>
            </p>
          </div>
        </div>

        {/* Trigger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-13 h-13 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
          style={{ width: '52px', height: '52px' }}
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          <svg className="w-6 h-6 relative" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
          )}
        </button>
      </div>
    </>
  );
}
