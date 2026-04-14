import Link from 'next/link';

const services = [
  {
    num: '01',
    name: 'Garden',
    href: '/garden',
    description: 'Full transformations — turf, planting, clearance and maintenance to bring your garden to life.',
  },
  {
    num: '02',
    name: 'Landscaping',
    href: '/landscaping',
    description: 'Complete outdoor design — patios, pathways, structures and planting for any scale of project.',
  },
  {
    num: '03',
    name: 'Driveways',
    href: '/driveways',
    description: 'Block paving, gravel and concrete driveways built to last and enhance your property\'s value.',
  },
  {
    num: '04',
    name: 'Fencing',
    href: '/fencing',
    description: 'All styles and finishes for privacy, security and a clean, considered boundary.',
  },
  {
    num: '05',
    name: 'Paving',
    href: '/paving',
    description: 'Sandstone, porcelain, block and natural stone — beautiful paving built to endure for 25+ years.',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 pb-8 border-b border-stone">
          <div>
            <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
              What We Do
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-forest">
              Our Services
            </h2>
          </div>
          <p className="font-body text-sm text-ink/50 max-w-xs leading-relaxed">
            From a single patio to a complete garden transformation — every project handled with care.
          </p>
        </div>

        {/* Service list */}
        <div className="divide-y divide-stone/60">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center gap-6 sm:gap-10 py-7 hover:pl-2 transition-all duration-300"
            >
              {/* Number */}
              <span className="font-serif text-sm text-gold/50 group-hover:text-gold transition-colors duration-300 shrink-0 w-7">
                {s.num}
              </span>

              {/* Name */}
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-forest/80 group-hover:text-forest transition-colors duration-300 w-40 sm:w-56 shrink-0">
                {s.name}
              </h3>

              {/* Description — hidden on small, shown on larger */}
              <p className="hidden sm:block font-body text-sm text-ink/45 leading-relaxed flex-1 group-hover:text-ink/60 transition-colors duration-300">
                {s.description}
              </p>

              {/* Arrow */}
              <div className="ml-auto shrink-0 w-9 h-9 rounded-full border border-stone/80 group-hover:border-gold group-hover:bg-gold flex items-center justify-center transition-all duration-300">
                <svg
                  className="w-3.5 h-3.5 text-ink/40 group-hover:text-parchment -rotate-45 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
