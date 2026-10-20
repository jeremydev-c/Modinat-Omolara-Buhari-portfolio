import Image from 'next/image';
import Link from 'next/link';
import Reveal from './components/Reveal';
import ToolChart from './components/ToolChart';
import Cover from './components/Cover';
import { credentials, person, projects, recommendations, skills, TOOLS } from './lib/content';

const featured = ['novomed-sales-performance', 'choco-de-luxe-sales', 'fusionpoint-consumer-electronics'].map(
  (slug) => projects.find((p) => p.slug === slug)!,
);

const strengths = [
  {
    title: 'Pipelines that hold up',
    body: 'Merging and cleaning multi-source data with SQL, Python and ETL, so the numbers can be trusted before anyone charts them.',
  },
  {
    title: 'Dashboards people use',
    body: 'Power BI, Tableau and Excel reports built around the decision they support, with filters that answer the next question.',
  },
  {
    title: 'Findings in plain words',
    body: 'Every analysis ends in what it means and what to do next, for executives and operations teams alike.',
  },
];

export default function Home() {
  const lead = recommendations[0];

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="gridlines border-b border-rule">
        <div className="wrap pb-14 pt-28 sm:pb-20 sm:pt-36">
          <p className="anim-up label flex flex-wrap gap-x-4 gap-y-1">
            <span>{person.role}</span>
            <span aria-hidden>/</span>
            <span>{person.focus}</span>
            <span aria-hidden>/</span>
            <span>{person.location}</span>
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <h1 className="condensed text-[clamp(2.2rem,10.4vw,5rem)] uppercase leading-[0.88] tracking-[-0.015em] sm:text-[clamp(3.5rem,9vw,7rem)] lg:col-span-9 lg:text-[clamp(4rem,8.2vw,8.3rem)]">
              <span className="anim-up block" style={{ animationDelay: '0.05s' }}>
                Clean data.
              </span>
              <span className="anim-up block" style={{ animationDelay: '0.15s' }}>
                Clear dashboards.
              </span>
              <span className="anim-up block text-amber" style={{ animationDelay: '0.25s' }}>
                Better decisions.
              </span>
            </h1>

            <figure className="anim-up lg:col-span-3 lg:pt-3" style={{ animationDelay: '0.3s' }}>
              <div className="figure aspect-[4/5] max-w-[340px] lg:max-w-none">
                <Image
                  src="/profile-photo.jpg"
                  alt={`Portrait of ${person.fullName}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 22vw, 340px"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="exhibit mt-3">
                <b>{person.fullName}</b>
              </figcaption>
            </figure>
          </div>

          <div className="anim-up mt-12 grid gap-10 border-t-2 border-ink pt-8 lg:grid-cols-12 lg:gap-8" style={{ animationDelay: '0.4s' }}>
            <div className="lg:col-span-7">
              <p className="max-w-[38rem] text-[19px] leading-[1.6] text-ink-2">
                I’m Omolara, a data analyst in Vilnius. I take messy, multi-source data and turn it into
                Power BI, Tableau and Excel dashboards that people actually use to decide what to do
                next. I’m currently a data analyst at Amdari Inc. (UK, remote).
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects" className="btn-solid">
                  See the projects →
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <ToolChart delay={0.6} />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Figures */}
      <section aria-label="At a glance" className="border-b border-rule bg-surface">
        <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
          {[
            [String(projects.length), 'Analytics projects', 'across retail, health, HR and logistics'],
            ['40%', 'Less processing time', 'from ETL pipeline work with SQL and Airflow'],
            [String(recommendations.length), 'Recommendations', 'from trainers and teammates'],
            [String(credentials.length), 'Credentials', '10Alytics and Uptrail, 2025'],
          ].map(([value, label, note], i) => (
            <Reveal
              key={label}
              delay={i * 0.06}
              className={`py-8 pr-4 sm:py-10 ${i % 2 === 1 ? 'border-l border-rule pl-5 sm:pl-8' : ''} ${
                i >= 2 ? 'border-t border-rule lg:border-t-0' : ''
              } ${i === 2 ? 'lg:border-l lg:pl-8' : ''}`}
            >
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="condensed tabular block text-fig-lg">{value}</span>
                <span className="mt-2 block text-[15px] font-semibold">{label}</span>
                <span className="mt-1 block text-[13px] text-ink-3">{note}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* ----------------------------------------------------------- Featured */}
      <section className="wrap py-20 sm:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">Selected work</p>
            <h2 className="condensed mt-3 text-fig-md uppercase">Three dashboards, three decisions</h2>
          </div>
          <Link href="/projects" className="link text-[15px]">
            All {projects.length} projects →
          </Link>
        </Reveal>

        <ol className="mt-12 grid gap-x-8 gap-y-14 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.08}>
              <Link href={`/projects/${p.slug}`} className="group block">
                <Cover project={p} sizes="(min-width: 1024px) 30vw, 100vw" />
                <p className="exhibit mt-4">
                  <b>{String(i + 2).padStart(2, '0')}</b> · {p.tools.join(' + ')} · {p.sector}
                </p>
                <h3 className="condensed mt-2 text-[28px] uppercase leading-none transition-colors group-hover:text-claret">
                  {p.client}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{p.summary}</p>
                {p.kpis && (
                  <dl className="mt-5 grid grid-cols-2 border-t border-rule">
                    {p.kpis.slice(0, 2).map((k) => (
                      <div key={k.label} className="pt-3">
                        <dt className="label">{k.label}</dt>
                        <dd className="condensed tabular mt-1 text-[30px] leading-none">{k.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </Link>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* --------------------------------------------------------------- About */}
      <section className="border-y border-rule bg-surface">
        <div className="wrap grid gap-14 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="label">How I work</p>
            <h2 className="condensed mt-3 text-fig-md uppercase">From raw files to a decision</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-2">
              Trained through 10Alytics’ Master Data Analyst programme and an Uptrail data analyst
              internship, and now working with data every day.
            </p>
          </Reveal>
          <ol className="lg:col-span-7 lg:col-start-6">
            {strengths.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06} className="grid grid-cols-[3rem_1fr] border-t border-rule py-6">
                <span className="condensed text-[28px] leading-none text-amber">{i + 1}</span>
                <span>
                  <span className="block text-[19px] font-semibold">{s.title}</span>
                  <span className="mt-1.5 block text-[15px] leading-relaxed text-ink-2">{s.body}</span>
                </span>
              </Reveal>
            ))}
            <Reveal className="border-t border-rule pt-6">
              <p className="label">Strongest tools</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {[...TOOLS, ...skills.Advanced.filter((s) => !TOOLS.includes(s as never))].slice(0, 11).map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------ Recommendation */}
      <section className="wrap py-20 sm:py-28">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <p className="label lg:col-span-3">Recommended by</p>
          <figure className="lg:col-span-9">
            <blockquote className="text-[clamp(1.5rem,3vw,2.4rem)] font-medium leading-[1.25] tracking-[-0.01em]">
              <span className="text-amber">“</span>
              {lead.pull}
              <span className="text-amber">”</span>
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-4">
              <span>
                <span className="font-semibold">{lead.name}</span>
                <span className="text-ink-3"> · {lead.relation}</span>
              </span>
              <Link href="/testimonials" className="link text-[15px]">
                Read all {recommendations.length} recommendations →
              </Link>
            </figcaption>
          </figure>
        </Reveal>
      </section>
    </>
  );
}
