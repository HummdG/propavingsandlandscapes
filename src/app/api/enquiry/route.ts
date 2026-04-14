import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, postcode, message } = body;

    // Basic validation
    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // In development without API key, just log and succeed
      console.log('Enquiry received (no RESEND_API_KEY set):', { name, phone, email, service, postcode, message });
      return NextResponse.json({ success: true });
    }

    const html = `
      <h2>New Website Enquiry</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        <tr><td style="font-weight:bold;color:#2D6A4F;border-bottom:1px solid #eee">Name</td><td style="border-bottom:1px solid #eee">${escapeHtml(name)}</td></tr>
        <tr><td style="font-weight:bold;color:#2D6A4F;border-bottom:1px solid #eee">Phone</td><td style="border-bottom:1px solid #eee"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
        ${email ? `<tr><td style="font-weight:bold;color:#2D6A4F;border-bottom:1px solid #eee">Email</td><td style="border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>` : ''}
        ${service ? `<tr><td style="font-weight:bold;color:#2D6A4F;border-bottom:1px solid #eee">Service</td><td style="border-bottom:1px solid #eee">${escapeHtml(service)}</td></tr>` : ''}
        ${postcode ? `<tr><td style="font-weight:bold;color:#2D6A4F;border-bottom:1px solid #eee">Post Code</td><td style="border-bottom:1px solid #eee">${escapeHtml(postcode)}</td></tr>` : ''}
        ${message ? `<tr><td style="font-weight:bold;color:#2D6A4F;vertical-align:top">Message</td><td>${escapeHtml(message).replace(/\n/g, '<br>')}</td></tr>` : ''}
      </table>
      <hr style="margin:24px 0;border:none;border-top:1px solid #eee">
      <p style="color:#888;font-size:12px">Sent from propaving-landscaping.co.uk enquiry form</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'website@propaving-landscaping.co.uk',
        to: 'info@propaving-landscaping.co.uk',
        reply_to: email || undefined,
        subject: `New enquiry from ${name}${service ? ` — ${service}` : ''}`,
        html,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error('Resend error:', errBody);
      return NextResponse.json({ error: 'Email send failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Enquiry route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
