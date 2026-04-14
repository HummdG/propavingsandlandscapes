'use client';

import { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  postcode: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  postcode: '',
  message: '',
};

export default function EnquiryForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-forest/5 border border-forest/15 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-parchment" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-light text-forest mb-2">Message Sent</h3>
        <p className="font-body text-sm text-ink/55 mb-6">
          Thank you — we&apos;ll be in touch shortly. For urgent enquiries, call us directly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="font-body text-xs font-medium text-gold hover:text-forest transition-colors tracking-wide"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full border border-stone/60 rounded-xl px-4 py-3 font-body text-sm text-ink/80 placeholder:text-ink/25 bg-parchment focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-body text-xs font-medium tracking-[0.1em] uppercase text-ink/40 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-body text-xs font-medium tracking-[0.1em] uppercase text-ink/40 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="07700 900000"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block font-body text-xs font-medium tracking-[0.1em] uppercase text-ink/40 mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="postcode" className="block font-body text-xs font-medium tracking-[0.1em] uppercase text-ink/40 mb-1.5">
            Post Code
          </label>
          <input
            id="postcode"
            name="postcode"
            type="text"
            value={form.postcode}
            onChange={handleChange}
            placeholder="RM17 5YQ"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block font-body text-xs font-medium tracking-[0.1em] uppercase text-ink/40 mb-1.5">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          <option value="garden">Garden</option>
          <option value="landscaping">Landscaping</option>
          <option value="driveways">Driveways</option>
          <option value="fencing">Fencing</option>
          <option value="paving">Paving &amp; Patios</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-xs font-medium tracking-[0.1em] uppercase text-ink/40 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or{' '}
          <a href="tel:07747193288" className="font-semibold underline">
            call us directly
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-forest hover:bg-forest-mid disabled:opacity-50 disabled:cursor-not-allowed text-parchment font-body font-semibold text-sm py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          'Send Enquiry'
        )}
      </button>
    </form>
  );
}
