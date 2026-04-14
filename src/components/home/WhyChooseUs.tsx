const points = [
  {
    num: '—',
    title: 'No Hidden Charges',
    description: 'Upfront quotations every time. When we bill you, there are no surprises — ever.',
  },
  {
    num: '—',
    title: 'Fully Insured',
    description: 'Trained professionals with full public liability insurance on every project.',
  },
  {
    num: '—',
    title: 'Reliable & Punctual',
    description: 'We show up when we say we will and finish when we say we will. Every time.',
  },
  {
    num: '—',
    title: 'Quality Workmanship',
    description: 'Years of experience across London and the South East — results built to last.',
  },
  {
    num: '—',
    title: 'Clear Communication',
    description: 'From Abbey in the office to Nick on site — you\'re kept informed at every step.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-forest relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

          {/* Left — heading */}
          <div className="lg:pt-1">
            <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gold mb-4">
              Our Promise
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-parchment leading-tight mb-6">
              Why Choose<br />
              <em style={{ fontStyle: 'italic' }} className="text-gold-light">Our Team</em>
            </h2>
            <div className="gold-rule mb-6" />
            <p className="font-body text-sm text-parchment/50 leading-relaxed max-w-xs">
              Every project is treated as if it were our own garden — with care, precision and pride.
            </p>
          </div>

          {/* Right — points grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-parchment/10 rounded-2xl overflow-hidden">
            {points.map((p, i) => (
              <div
                key={p.title}
                className={`bg-forest-mid/50 hover:bg-forest-mid/80 transition-colors duration-300 p-6 ${i === 4 ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-gold/40 font-serif text-xl mt-0.5">—</span>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-parchment/90 mb-1.5 tracking-wide">
                      {p.title}
                    </h3>
                    <p className="font-body text-sm text-parchment/45 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
