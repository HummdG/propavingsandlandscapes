import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

const ticker = [
  'Driveways', 'Gardens', 'Block Paving', 'Landscaping',
  'Fencing', 'Patios', 'Resin Driveways', 'Garden Design',
];

export default function Hero() {
  return (
    <section
      className="relative -mt-[72px] overflow-hidden flex flex-col justify-end"
      style={{ minHeight: '100svh' }}
    >

      {/* ── Background: full-bleed photo with Ken Burns ────── */}
      <div className="absolute inset-0 hero-zoom">
        <Image
          src="/assets/propaving/gallery-25.jpg"
          alt="Completed patio and garden landscaping project"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ── Cinematic overlays (layered for depth) ────────── */}
      {/* Base desaturation tint */}
      <div className="absolute inset-0" style={{ background: 'rgba(8,14,9,0.38)' }} />
      {/* Left-side directional gradient (where text lives) */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(8,14,9,0.92) 0%, rgba(8,14,9,0.72) 45%, rgba(8,14,9,0.18) 75%, transparent 100%)' }}
      />
      {/* Bottom lift — keeps bottom content legible */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(8,14,9,0.88) 0%, rgba(8,14,9,0.4) 30%, transparent 60%)' }}
      />
      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.042'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* ── Gold left-edge accent bar ─────────────────────── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(158,123,65,0.6) 15%, rgba(196,162,101,0.9) 50%, rgba(158,123,65,0.6) 85%, transparent 100%)',
        }}
      />

      {/* ── Main content ──────────────────────────────────── */}
      <div
        className="relative z-20 w-full px-8 sm:px-12 lg:px-16 xl:px-24"
        style={{ paddingTop: '140px', paddingBottom: '120px' }}
      >

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-7"
          style={{ animation: 'heroUp 0.65s 0.08s ease both' }}
        >
          <div className="gold-rule" />
          <span
            className="font-body font-semibold tracking-[0.3em] uppercase"
            style={{ fontSize: '10px', color: 'rgba(196,162,101,0.72)' }}
          >
            London · Essex · Kent
          </span>
        </div>

        {/* ARCHITECTURAL HEADLINE ── the centrepiece */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            lineHeight: 0.93,
            letterSpacing: '-0.025em',
            fontSize: 'clamp(3.8rem, 9.5vw, 10.5rem)',
            color: '#F0EBE0',
            marginBottom: '2.5rem',
            animation: 'heroUp 0.85s 0.16s ease both',
            maxWidth: '14ch',
          }}
        >
          Gardens &amp;<br />
          Driveways<br />
          <span
            style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #9E7B41 0%, #D8B87A 45%, #C4A265 70%, #9E7B41 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Built to Last.
          </span>
        </h1>

        {/* Body + CTAs row */}
        <div
          className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12"
          style={{ animation: 'heroUp 0.7s 0.34s ease both' }}
        >
          <p
            className="font-body text-sm leading-[1.75]"
            style={{ color: 'rgba(240,235,224,0.48)', maxWidth: '300px' }}
          >
            Landscaping, driveways, paving, fencing and garden specialists
            serving homes across London, Essex and Kent since 2016. Fully
            insured, upfront quotes, no hidden charges.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2.5 font-body font-semibold text-sm px-7 py-[14px] rounded-full w-fit transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
              style={{
                background: 'linear-gradient(135deg, #9E7B41 0%, #C4A265 100%)',
                color: '#F0EBE0',
                boxShadow: '0 8px 36px rgba(158,123,65,0.38)',
              }}
            >
              <svg className="w-[14px] h-[14px] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="hero-ghost inline-flex items-center gap-2 font-body font-medium text-sm px-7 py-[14px] rounded-full w-fit transition-all duration-300"
            >
              Get a Free Quote
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>

      {/* ── Bottom: scroll-indicator + trust strip + ticker ─ */}
      <div className="absolute bottom-0 left-0 right-0 z-20">

        {/* Trust bar */}
        <div
          style={{
            borderTop: '1px solid rgba(158,123,65,0.14)',
            background: 'rgba(8,14,9,0.55)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            className="px-8 sm:px-12 lg:px-16 xl:px-24 flex items-center justify-between"
            style={{ paddingTop: '14px', paddingBottom: '14px' }}
          >
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {['Fully Insured', 'Free Estimates', '14+ Five-Star Reviews', 'No Hidden Charges'].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 font-body"
                  style={{ fontSize: '11px', color: 'rgba(240,235,224,0.32)' }}
                >
                  <span
                    className="w-[4px] h-[4px] rounded-full shrink-0"
                    style={{ background: 'rgba(196,162,101,0.5)' }}
                  />
                  {t}
                </span>
              ))}
            </div>
            <span
              className="hidden sm:block font-body italic"
              style={{ fontSize: '11px', color: 'rgba(240,235,224,0.18)', letterSpacing: '0.08em' }}
            >
              Est. 2016
            </span>
          </div>

          {/* Scrolling service ticker */}
          <div
            style={{
              borderTop: '1px solid rgba(158,123,65,0.08)',
              paddingTop: '10px',
              paddingBottom: '10px',
              overflow: 'hidden',
            }}
          >
            <div className="ticker-track flex" style={{ width: 'max-content' }}>
              {[...ticker, ...ticker].map((s, i) => (
                <span
                  key={i}
                  className="font-body font-semibold tracking-[0.22em] uppercase shrink-0"
                  style={{ fontSize: '10px', color: 'rgba(240,235,224,0.18)', paddingRight: '3rem' }}
                >
                  <span style={{ color: 'rgba(196,162,101,0.35)', marginRight: '1rem' }}>·</span>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll caret ──────────────────────────────────── */}
      <div
        className="absolute z-20 hidden lg:flex flex-col items-center gap-1.5"
        style={{
          bottom: '130px',
          right: '2.5rem',
          animation: 'heroUp 0.8s 0.7s ease both',
        }}
      >
        <span
          className="font-body tracking-[0.2em] uppercase"
          style={{
            fontSize: '9px',
            color: 'rgba(240,235,224,0.28)',
            writingMode: 'vertical-rl',
            letterSpacing: '0.22em',
          }}
        >
          Scroll
        </span>
        <div
          className="w-px grow"
          style={{
            height: '48px',
            background: 'linear-gradient(to bottom, rgba(196,162,101,0.45), transparent)',
          }}
        />
      </div>

      <style>{`
        .hero-ghost {
          border: 1px solid rgba(240,235,224,0.18);
          color: rgba(240,235,224,0.78);
          backdrop-filter: blur(6px);
          background: rgba(240,235,224,0.04);
        }
        .hero-ghost:hover {
          background: rgba(240,235,224,0.09);
          border-color: rgba(240,235,224,0.28);
        }
        @keyframes heroUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes kenBurns {
          from { transform: scale(1.0); }
          to   { transform: scale(1.07); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .hero-zoom {
          animation: kenBurns 14s ease-in-out infinite alternate;
        }
        .ticker-track {
          animation: ticker 28s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
