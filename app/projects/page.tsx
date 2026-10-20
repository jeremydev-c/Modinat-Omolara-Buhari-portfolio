import type { Metadata } from 'next';
import ProjectTable from '../components/ProjectTable';
import ToolChart from '../components/ToolChart';
import { projects } from '../lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Data analytics projects by Omolara Buhari: Power BI, Tableau and Excel dashboards, SQL analysis and Python notebooks.',
  alternates: { canonical: '/projects' },
};

export default function Projects() {
  return (
    <>
      <header className="gridlines border-b border-rule">
        <div className="wrap grid gap-10 pb-14 pt-28 sm:pt-36 lg:grid-cols-12 lg:gap-8">
          <div className="anim-up lg:col-span-7">
            <p className="label">Projects · {projects.length}</p>
            <h1 className="condensed mt-4 text-fig-xl uppercase">The work</h1>
            <p className="mt-6 max-w-[34rem] text-[18px] leading-[1.6] text-ink-2">
              Dashboards, analyses and models, each with the question it answered and the files behind
              it. Filter by tool to see how I use each one.
            </p>
          </div>
          <div className="anim-up lg:col-span-4 lg:col-start-9 lg:self-end" style={{ animationDelay: '0.15s' }}>
            <ToolChart delay={0.3} />
          </div>
        </div>
      </header>

      <section className="wrap py-14 sm:py-20">
        <ProjectTable projects={projects} />
      </section>
    </>
  );
}
