'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/types';

interface GalleryProps {
  images: GalleryImage[];
  initialShow?: number;
}

export default function Gallery({ images, initialShow = 12 }: GalleryProps) {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const displayed = showAll ? images : images.slice(0, initialShow);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-forest">
              Our Work
            </h2>
          </div>
          <p className="font-body text-sm text-ink/45 max-w-xs">
            Real projects across London, Essex &amp; Kent.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2.5">
          {displayed.map((img, i) => (
            <div
              key={img.src}
              className="break-inside-avoid mb-2.5 overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setLightbox(img)}
            >
              <div className="relative overflow-hidden rounded-xl bg-stone">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={i < 6 ? 'eager' : 'lazy'}
                />
                {/* Warm gold hover tint */}
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-parchment/0 group-hover:bg-parchment/90 transition-all duration-300 flex items-center justify-center scale-75 group-hover:scale-100">
                    <svg className="w-4 h-4 text-forest opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        {!showAll && images.length > initialShow && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2.5 border border-forest/30 hover:border-forest text-forest font-body text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-forest hover:text-parchment"
            >
              View All Projects
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-forest/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-parchment/10 hover:bg-parchment/20 flex items-center justify-center text-parchment/70 hover:text-parchment transition-colors" onClick={() => setLightbox(null)}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={lightbox.width}
              height={lightbox.height}
              className="max-h-[82vh] w-auto object-contain rounded-xl"
            />
            <p className="font-body text-parchment/40 text-xs text-center mt-3 tracking-wide">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
