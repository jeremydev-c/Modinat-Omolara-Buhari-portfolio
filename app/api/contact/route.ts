import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_KEY ? new Resend(process.env.RESEND_KEY) : null;

// Visitors' text goes into an HTML email, so it must never be able to inject markup.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 };

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim();
    const subject = String(body?.subject ?? '').trim();
    const message = String(body?.message ?? '').trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      subject.length > LIMITS.subject ||
      message.length > LIMITS.message
    ) {
      return NextResponse.json({ error: 'That message is too long.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // Without an email key the message would be lost, so say so instead of pretending it was sent.
    if (!resend) {
      console.error('Contact form: RESEND_KEY is not configured');
      return NextResponse.json({ error: 'The contact form is not available right now.' }, { status: 503 });
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      subject: escapeHtml(subject),
      message: escapeHtml(message).replace(/\n/g, '<br>'),
    };

    const { error } = await resend.emails.send({
      // Must be on a domain verified in Resend: omolarabuhari.com has its Resend DNS records.
      from: process.env.FROM_EMAIL || 'Portfolio Contact <contact@omolarabuhari.com>',
      to: ['omolarabuhari1@gmail.com'],
      replyTo: email,
      subject: `Portfolio: ${subject.replace(/[\r\n]+/g, ' ')}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #111a2e;">
          <p style="font-family: monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #646c7e;">New message from your portfolio</p>
          <h2 style="margin: 8px 0 16px;">${safe.subject}</h2>
          <p style="margin: 4px 0;"><strong>Name:</strong> ${safe.name}</p>
          <p style="margin: 4px 0;"><strong>Email:</strong> ${safe.email}</p>
          <div style="border-top: 2px solid #111a2e; margin-top: 16px; padding-top: 12px; line-height: 1.6;">${safe.message}</div>
        </div>
      `,
      text: `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return NextResponse.json({ error: 'The message could not be sent.' }, { status: 502 });
    }

    return NextResponse.json({ message: 'Message sent.' }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'The message could not be sent.' }, { status: 500 });
  }
}
