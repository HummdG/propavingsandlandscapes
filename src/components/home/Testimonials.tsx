import { Testimonial } from '@/types';

interface TestimonialsProps {
  reviews: Testimonial[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
  // Feature the best 3 front and centre, rest in grid
  const featured = reviews.slice(0, 3);
  const rest = reviews.slice(3);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-parchment-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
            Client Reviews
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-forest mb-4">
            What Our Clients Say
          </h2>
          {/* Rating row */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="text-gold tracking-widest text-base">★★★★★</span>
            <span className="font-body text-sm font-semibold text-ink/70">5.0</span>
            <span className="font-body text-sm text-ink/40">·</span>
            <span className="font-body text-sm text-ink/40">{reviews.length} verified reviews</span>
            <span className="font-body text-xs text-ink/35 bg-stone/60 px-2.5 py-1 rounded-full ml-1">CheckaTrade</span>
          </div>
        </div>

        {/* Featured testimonials — large pull-quote style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {featured.map((review) => (
            <div key={review.id} className="bg-parchment rounded-2xl p-7 border border-stone/40 relative overflow-hidden group hover:border-gold/30 transition-colors duration-300">
              {/* Large decorative quote */}
              <span className="absolute -top-2 -left-1 font-serif text-[7rem] leading-none text-stone/60 select-none pointer-events-none">
                &ldquo;
              </span>
              <div className="relative">
                <p className="font-serif text-lg sm:text-xl font-light italic text-ink/80 leading-relaxed mb-6 pt-4">
                  {review.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-sm font-semibold text-forest">{review.name}</p>
                    {review.service && (
                      <p className="font-body text-xs text-ink/40 mt-0.5">{review.service}</p>
                    )}
                  </div>
                  <span className="text-gold text-sm tracking-widest">★★★★★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of reviews — compact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {rest.map((review) => (
            <div key={review.id} className="bg-parchment/70 hover:bg-parchment rounded-xl p-5 border border-stone/30 hover:border-gold/20 transition-all duration-300">
              <span className="text-gold text-xs tracking-widest">★★★★★</span>
              <p className="font-body text-sm text-ink/65 leading-relaxed my-3 line-clamp-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-body text-xs font-semibold text-forest/80">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
