'use client';

import { useState } from 'react';
import { person } from '../lib/content';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'The message could not be sent.');
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'The message could not be sent.');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="border-t-2 border-ink pt-6">
        <p className="condensed text-fig-sm uppercase">Message received</p>
        <p className="mt-3 text-[16px] text-ink-2">Thank you. I’ll reply by email, usually within a working day.</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-outline mt-6">
          Send another
        </button>
      </div>
    );
  }

  const field =
    'mt-2 w-full border border-rule bg-paper px-3.5 py-3 text-[16px] text-ink transition-colors placeholder:text-ink-3/70 focus:border-ink focus:outline-none';

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="label">Name</span>
          <input name="name" required maxLength={100} value={form.name} onChange={update} className={field} autoComplete="name" />
        </label>
        <label className="block">
          <span className="label">Email</span>
          <input name="email" type="email" required maxLength={200} value={form.email} onChange={update} className={field} autoComplete="email" />
        </label>
      </div>
      <label className="block">
        <span className="label">Subject</span>
        <input name="subject" required maxLength={150} value={form.subject} onChange={update} className={field} placeholder="A role, a project or a question" />
      </label>
      <label className="block">
        <span className="label">Message</span>
        <textarea name="message" required maxLength={5000} rows={6} value={form.message} onChange={update} className={`${field} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button type="submit" disabled={status === 'sending'} className="btn-solid disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send message →'}
        </button>
        {status === 'error' && (
          <p role="alert" className="text-[14px] text-claret">
            {error} You can also email{' '}
            <a href={`mailto:${person.email}`} className="link">
              {person.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
