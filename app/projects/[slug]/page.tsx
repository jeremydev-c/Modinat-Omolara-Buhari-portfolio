import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Cover from '../../components/Cover';
import Gallery from '../../components/Gallery';
import Reveal from '../../components/Reveal';
import { person, projects } from '../../lib/content';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.client}: ${p.title}`,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: p.cover ? { images: [{ url: p.cover }] } : undefined,
  };
}

const kindLabel = { pptx: 'PowerPoint', pdf: 'PDF', ipynb: 'Jupyter' } as const;

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const gallery = p.gallery.filter((g) => g !== p.cover);

  return (
    <article>
      <header className="gridlines border-b border-rule">
        <div className="wrap pb-12 pt-28 sm:pt-36">
          <p className="anim-up label">
            <Link href="/projects" className="hover:text-ink">
              Projects
            </Link>{' '}
            / {String(index + 1).padStart(2, '0')}
          </p>
          <h1 className="anim-up condensed mt-4 text-fig-lg uppercase" style={{ animationDelay: '0.05s' }}>
            {p.client}
          </h1>
          <p className="anim-up mt-3 text-[clamp(1.2rem,2vw,1.6rem)] font-medium text-ink-2" style={{ animationDelay: '0.1s' }}>
            {p.title}
          </p>

          <dl
            className="anim-up mt-10 grid grid-cols-2 gap-6 border-t-2 border-ink pt-6 text-[15px] lg:grid-cols-4"
            style={{ animationDelay: '0.15s' }}
          >
            <div>
              <dt className="label">Sector</dt>
              <dd className="mt-1.5">{p.sector}</dd>
            </div>
            <div>
              <dt className="label">Tools</dt>
              <dd className="mt-1.5">{p.tools.join(', ')}</dd>
            </div>
            <div>
              <dt className="label">Deliverable</dt>
              <dd className="mt-1.5">{p.format}</dd>
            </div>
            {p.programme && (
              <div>
                <dt className="label">Context</dt>
                <dd className="mt-1.5">{p.programme}</dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      <div className="wrap py-14 sm:py-20">
        <div className="anim-up" style={{ animationDelay: '0.2s' }}>
          <Cover project={p} priority sizes="(min-width: 1400px) 1300px, 100vw" ratio={p.cover ? 'aspect-[16/9]' : 'aspect-[16/7]'} />
          {p.cover && (
            <p className="exhibit mt-3">
              <b>Exhibit 01</b> · {p.client}, main dashboard
            </p>
          )}
        </div>

        {p.kpis && (
          <Reveal>
            <dl className="mt-14 grid grid-cols-2 border-y border-rule bg-surface lg:grid-cols-4">
              {p.kpis.map((k, i) => (
                <div key={k.label} className={`p-5 sm:p-7 ${i > 0 ? 'border-l border-rule' : ''} ${i === 2 ? 'border-l-0 border-t lg:border-l lg:border-t-0' : ''} ${i === 3 ? 'border-t lg:border-t-0' : ''}`}>
                  <dt className="label">{k.label}</dt>
                  <dd className="condensed tabular mt-2 text-fig-md">{k.value}</dd>
                </div>
              ))}
            </dl>
            <p className="exhibit mt-3">Figures as reported in the dashboard</p>
          </Reveal>
        )}

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="label">The question</p>
            <p className="mt-3 text-[20px] font-medium leading-[1.45]">{p.problem}</p>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={0.06}>
            <p className="label">What I did</p>
            <ol className="mt-3 space-y-3">
              {p.approach.map((a, i) => (
                <li key={a} className="grid grid-cols-[1.75rem_1fr] text-[15px] leading-relaxed text-ink-2">
                  <span className="font-mono text-[12px] text-amber">{i + 1}.</span>
                  {a}
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={0.12}>
            <p className="label">What it showed</p>
            <ul className="mt-3 space-y-3">
              {p.findings.map((f) => (
                <li key={f} className="border-l-[3px] border-amber pl-4 text-[15px] leading-relaxed">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {gallery.length > 0 && (
          <section className="mt-20">
            <Reveal>
              <p className="label">From the deck</p>
              <h2 className="condensed mt-2 text-fig-sm uppercase">More views</h2>
            </Reveal>
            <div className="mt-8">
              <Gallery images={gallery} title={p.client} start={2} />
            </div>
          </section>
        )}

        <Reveal className="mt-20 border-t-2 border-ink pt-6">
          <p className="label">Source files</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {p.files.map((f) => (
              <li key={f.href}>
                <a
                  href={encodeURI(f.href)}
                  {...(f.kind === 'pdf' ? { target: '_blank', rel: 'noopener noreferrer' } : { download: '' })}
                  className="btn-outline"
                >
                  {f.label} <span className="font-mono text-[11px] text-ink-3">{kindLabel[f.kind]}</span>
                  <span aria-hidden>{f.kind === 'pdf' ? '↗' : '↓'}</span>
                </a>
              </li>
            ))}
            {p.files.some((f) => f.kind === 'pptx') && (
              <li>
                <a
                  href={`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
                    person.url + encodeURI(p.files.find((f) => f.kind === 'pptx')!.href),
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  View slides online <span aria-hidden>↗</span>
                </a>
              </li>
            )}
          </ul>
        </Reveal>
      </div>

      <Link href={`/projects/${next.slug}`} className="group block border-t border-rule bg-surface">
        <div className="wrap flex flex-wrap items-end justify-between gap-4 py-12 sm:py-16">
          <div>
            <p className="label">Next project</p>
            <p className="condensed mt-2 text-fig-md uppercase transition-colors group-hover:text-claret">{next.client}</p>
            <p className="mt-1 text-[15px] text-ink-2">{next.title}</p>
          </div>
          <span aria-hidden className="condensed text-fig-md text-amber transition-transform group-hover:translate-x-2">
            →
          </span>
        </div>
      </Link>
    </article>
  );
}
