import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import { person } from '../lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Omolara Buhari about data analyst roles, freelance dashboards and analytics projects.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  const rows = [
    { label: 'Email', value: person.email, href: `mailto:${person.email}` },
    { label: 'Phone', value: person.phone, href: person.phoneHref },
    { label: 'LinkedIn', value: 'in/omolarabuhari', href: person.linkedin, external: true },
    { label: 'GitHub', value: 'Omolara-Buhari', href: person.github, external: true },
    { label: 'Based in', value: person.location },
  ];

  return (
    <section className="gridlines">
      <div className="wrap grid gap-14 pb-20 pt-28 sm:pb-28 sm:pt-36 lg:grid-cols-12 lg:gap-8">
        <div className="anim-up lg:col-span-5">
          <p className="label">Contact</p>
          <h1 className="condensed mt-4 text-fig-lg uppercase">
            Let’s talk
            <br />
            <span className="text-amber">about your data</span>
          </h1>
          <p className="mt-6 max-w-md text-[18px] leading-[1.6] text-ink-2">
            Open to data analyst roles, freelance dashboard work and analytics projects. Tell me what
            you’re trying to decide, and I’ll tell you how the data can help.
          </p>

          <dl className="mt-10 border-t-2 border-ink">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[6.5rem_1fr] items-baseline border-b border-rule py-3.5">
                <dt className="label">{r.label}</dt>
                <dd className="text-[16px]">
                  {r.href ? (
                    <a
                      href={r.href}
                      {...(r.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="link break-all"
                    >
                      {r.value}
                      {r.external && ' ↗'}
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="anim-up lg:col-span-6 lg:col-start-7" style={{ animationDelay: '0.12s' }}>
          <div className="border border-rule bg-surface p-6 sm:p-10">
            <p className="condensed text-fig-sm uppercase">Send a message</p>
            <p className="mt-2 text-[14px] text-ink-3">All fields are required.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
