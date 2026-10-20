import type { Metadata } from 'next';
import Reveal from '../components/Reveal';
import { credentials, skills } from '../lib/content';

export const metadata: Metadata = {
  title: 'Credentials & skills',
  description: 'Certificates and tools of data analyst Omolara Buhari: 10Alytics, Uptrail, Power BI, Tableau, SQL and Python.',
  alternates: { canonical: '/certificates' },
};

export default function Certificates() {
  return (
    <>
      <header className="gridlines border-b border-rule">
        <div className="wrap pb-14 pt-28 sm:pt-36">
          <p className="anim-up label">Credentials · {credentials.length}</p>
          <h1 className="anim-up condensed mt-4 text-fig-xl uppercase" style={{ animationDelay: '0.05s' }}>
            On paper
          </h1>
          <p className="anim-up mt-6 max-w-[34rem] text-[18px] leading-[1.6] text-ink-2" style={{ animationDelay: '0.1s' }}>
            Certificates from my training and internship, each one open to view, followed by the tools
            I work with.
          </p>
        </div>
      </header>

      <section className="wrap py-14 sm:py-20">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Credentials</caption>
          <thead>
            <tr className="border-b-2 border-ink">
              <th scope="col" className="label py-3 pr-4 font-normal">
                Credential
              </th>
              <th scope="col" className="label hidden py-3 pr-4 font-normal md:table-cell">
                Issued by
              </th>
              <th scope="col" className="label hidden py-3 pr-4 font-normal sm:table-cell">
                Date
              </th>
              <th scope="col" className="label py-3 text-right font-normal">
                File
              </th>
            </tr>
          </thead>
          <tbody>
            {credentials.map((c) => (
              <tr key={c.title} className="border-b border-rule align-top">
                <td className="py-6 pr-4">
                  <p className="condensed text-[clamp(1.3rem,2.4vw,1.9rem)] uppercase leading-none">{c.title}</p>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink-2">{c.detail}</p>
                  <p className="mt-2 text-[13px] text-ink-3 md:hidden">
                    {c.issuer} · {c.date}
                  </p>
                </td>
                <td className="hidden py-6 pr-4 text-[14px] md:table-cell">{c.issuer}</td>
                <td className="tabular hidden whitespace-nowrap py-6 pr-4 font-mono text-[12px] text-ink-2 sm:table-cell">{c.date}</td>
                <td className="py-6 text-right">
                  <a href={encodeURI(c.href)} target="_blank" rel="noopener noreferrer" className="tag whitespace-nowrap hover:border-ink hover:text-ink">
                    View PDF ↗
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="skills" className="scroll-mt-24 border-t border-rule bg-surface">
        <div className="wrap py-14 sm:py-20">
          <Reveal>
            <p className="label">Skills</p>
            <h2 className="condensed mt-3 text-fig-md uppercase">The toolkit</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {Object.entries(skills).map(([level, items], i) => (
              <Reveal key={level} delay={i * 0.06} className="border-t-2 border-ink pt-4">
                <p className="flex items-baseline justify-between">
                  <span className="text-[17px] font-semibold">{level}</span>
                  <span className="font-mono text-[12px] text-ink-3">{items.length}</span>
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
