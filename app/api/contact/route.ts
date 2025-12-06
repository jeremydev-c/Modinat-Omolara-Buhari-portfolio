import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_KEY ? new Resend(process.env.RESEND_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend (if API key is configured)
    if (!resend) {
      // If Resend is not configured, just log the contact and return success
      console.log('Contact form submission (Resend not configured):', { name, email, subject, message });
      return NextResponse.json(
        { message: 'Message received successfully (email service not configured)' },
        { status: 200 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <contact@omalarabuhari.com>',
      to: ['nduatijeremy7@gmail.com'],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2));
      
      // Format error message for display
      let errorMessage = 'Failed to send email';
      if (error && typeof error === 'object') {
        const errorObj = error as Record<string, unknown>;
        if ('message' in errorObj && typeof errorObj.message === 'string') {
          errorMessage = errorObj.message;
        } else if ('name' in errorObj && typeof errorObj.name === 'string') {
          const message = ('message' in errorObj && typeof errorObj.message === 'string') 
            ? errorObj.message 
            : 'Unknown error';
          errorMessage = `${errorObj.name}: ${message}`;
        }
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: error 
        },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

