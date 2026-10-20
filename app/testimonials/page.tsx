import type { Metadata } from 'next';
import Reveal from '../components/Reveal';
import { person, recommendations, recommendationsDate } from '../lib/content';

export const metadata: Metadata = {
  title: 'Recommendations',
  description: 'LinkedIn recommendations for Omolara Buhari from her trainer and fellow data analysts.',
  alternates: { canonical: '/testimonials' },
};

export default function Testimonials() {
  return (
    <>
      <header className="gridlines border-b border-rule">
        <div className="wrap pb-14 pt-28 sm:pt-36">
          <p className="anim-up label">Recommendations · {recommendations.length}</p>
          <h1 className="anim-up condensed mt-4 text-fig-xl uppercase" style={{ animationDelay: '0.05s' }}>
            In their words
          </h1>
          <p className="anim-up mt-6 max-w-[36rem] text-[18px] leading-[1.6] text-ink-2" style={{ animationDelay: '0.1s' }}>
            Recommendations from the trainer who taught me and the analysts I’ve worked alongside,
            quoted in full from{' '}
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="link">
              LinkedIn
            </a>
            , {recommendationsDate}.
          </p>
        </div>
      </header>

      <section className="wrap py-14 sm:py-20">
        <ol>
          {recommendations.map((r, i) => (
            <Reveal
              as="li"
              key={r.name}
              className="grid gap-6 border-t border-rule py-10 first:border-t-2 first:border-ink lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-4">
                <p className="font-mono text-[12px] text-amber">{String(i + 1).padStart(2, '0')}</p>
                <p className="condensed mt-2 text-[30px] uppercase leading-none">{r.name}</p>
                <p className="mt-2 text-[14px] text-ink-2">{r.role}</p>
                <p className="label mt-3">{r.relation}</p>
              </div>
              <blockquote className="lg:col-span-8">
                <p className="text-[20px] font-medium leading-[1.4]">“{r.pull}”</p>
                <p className="mt-5 text-[15px] leading-[1.7] text-ink-2">{r.quote}</p>
              </blockquote>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
