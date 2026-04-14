'use client';

import { useState } from 'react';
import { FAQ } from '@/types';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-stone/40">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between gap-4 py-5 text-left group"
          >
            <span className="font-body text-sm font-medium text-ink/80 group-hover:text-forest transition-colors pr-4">
              {faq.question}
            </span>
            <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
              open === i ? 'bg-forest text-parchment' : 'bg-stone/50 text-ink/40 group-hover:bg-stone'
            }`}>
              <svg className={`w-3 h-3 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="pb-5 font-body text-sm text-ink/55 leading-relaxed pr-10">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
