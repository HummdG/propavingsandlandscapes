import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'Pro Paving and Landscaping — Gardens & Driveways Built to Last';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public/assets/propaving/hero-bg.jpg'));
  const logoSrc = `data:image/jpeg;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          backgroundColor: '#111A12',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle green centre vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage:
              'radial-gradient(ellipse 80% 70% at 30% 60%, rgba(27,47,29,0.9) 0%, rgba(8,14,9,0.0) 100%)',
          }}
        />

        {/* Logo — large watermark top-right */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          style={{
            position: 'absolute',
            top: '-30px',
            right: '-20px',
            width: '380px',
            height: '380px',
            objectFit: 'contain',
            opacity: 0.08,
          }}
        />

        {/* Top gold bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            backgroundColor: '#C4A265',
            display: 'flex',
          }}
        />

        {/* Left gold bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '5px',
            backgroundColor: 'rgba(196,162,101,0.45)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '0 88px 72px 88px',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '26px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '1px',
                backgroundColor: '#9E7B41',
                display: 'flex',
              }}
            />
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '5px',
                color: 'rgba(196,162,101,0.75)',
                fontFamily: 'sans-serif',
              }}
            >
              LONDON · ESSEX · KENT
            </span>
          </div>

          {/* Headline line 1 */}
          <div
            style={{
              fontSize: '90px',
              fontWeight: 300,
              lineHeight: 1.0,
              color: '#F0EBE0',
              fontFamily: 'Georgia, serif',
              display: 'flex',
              marginBottom: '6px',
            }}
          >
            Gardens &amp; Driveways
          </div>

          {/* Headline line 2 — italic gold */}
          <div
            style={{
              fontSize: '90px',
              fontWeight: 300,
              lineHeight: 1.0,
              color: '#C4A265',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              marginBottom: '38px',
              display: 'flex',
            }}
          >
            Built to Last.
          </div>

          {/* Divider */}
          <div
            style={{
              width: '54px',
              height: '1px',
              backgroundColor: '#9E7B41',
              marginBottom: '26px',
              display: 'flex',
            }}
          />

          {/* Sub text */}
          <div
            style={{
              fontSize: '22px',
              color: 'rgba(240,235,224,0.45)',
              fontFamily: 'sans-serif',
              lineHeight: 1.6,
              maxWidth: '640px',
              display: 'flex',
            }}
          >
            Landscaping, paving, driveways, fencing and garden specialists. Serving London, Essex and Kent since 2016.
          </div>
        </div>

        {/* Company tag — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '72px',
            right: '88px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '7px',
          }}
        >
          <span
            style={{
              fontSize: '15px',
              fontFamily: 'sans-serif',
              fontWeight: 700,
              color: 'rgba(240,235,224,0.28)',
              letterSpacing: '2.5px',
            }}
          >
            PRO PAVING AND LANDSCAPING LTD
          </span>
          <span
            style={{
              fontSize: '13px',
              fontFamily: 'sans-serif',
              color: 'rgba(196,162,101,0.38)',
              letterSpacing: '1.5px',
            }}
          >
            Est. 2016 · 07747 193288
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
