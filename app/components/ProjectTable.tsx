'use client';

import Link from 'next/link';
import { useState } from 'react';
import { TOOLS, type Project, type Tool } from '../lib/content';

// Her projects as a filterable table: the way an analyst would present them.
export default function ProjectTable({ projects }: { projects: Project[] }) {
  const [tool, setTool] = useState<Tool | 'All'>('All');
  const shown = tool === 'All' ? projects : projects.filter((p) => p.tools.includes(tool));

  return (
    <div>
      <div role="group" aria-label="Filter by tool" className="flex flex-wrap items-center gap-2">
        <span className="label mr-2">Filter</span>
        {(['All', ...TOOLS] as const).map((t) => {
          const count = t === 'All' ? projects.length : projects.filter((p) => p.tools.includes(t)).length;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTool(t)}
              aria-pressed={tool === t}
              className={`border px-3 py-1.5 text-[13px] transition-colors ${
                tool === t ? 'border-ink bg-ink text-paper' : 'border-rule bg-surface text-ink-2 hover:border-ink/40'
              }`}
            >
              {t} <span className="ml-1 font-mono text-[11px] opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <table className="mt-8 w-full border-collapse text-left">
        <caption className="sr-only">
          Projects{tool === 'All' ? '' : ` using ${tool}`}: {shown.length}
        </caption>
        <thead>
          <tr className="border-b-2 border-ink">
            <th scope="col" className="label w-10 py-3 pr-3 font-normal">
              #
            </th>
            <th scope="col" className="label py-3 pr-4 font-normal">
              Project
            </th>
            <th scope="col" className="label hidden py-3 pr-4 font-normal md:table-cell">
              Sector
            </th>
            <th scope="col" className="label hidden py-3 pr-4 font-normal sm:table-cell">
              Tools
            </th>
            <th scope="col" className="label hidden py-3 font-normal lg:table-cell">
              Deliverable
            </th>
          </tr>
        </thead>
        <tbody>
          {shown.map((p) => (
            <tr key={p.slug} className="group border-b border-rule">
              <td className="py-5 pr-3 align-top font-mono text-[12px] text-ink-3">
                {String(projects.indexOf(p) + 1).padStart(2, '0')}
              </td>
              <td className="py-5 pr-4 align-top">
                <Link href={`/projects/${p.slug}`} className="block">
                  <span className="condensed block text-[clamp(1.4rem,2.6vw,2rem)] uppercase leading-none transition-colors group-hover:text-claret">
                    {p.client}
                  </span>
                  <span className="mt-1.5 block text-[14px] text-ink-2">
                    {p.title} <span className="text-amber transition-transform group-hover:translate-x-1">→</span>
                  </span>
                  <span className="mt-2 flex flex-wrap gap-1 sm:hidden">
                    {p.tools.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </span>
                </Link>
              </td>
              <td className="hidden py-5 pr-4 align-top text-[14px] text-ink-2 md:table-cell">{p.sector}</td>
              <td className="hidden py-5 pr-4 align-top sm:table-cell">
                <span className="flex flex-wrap gap-1">
                  {p.tools.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </span>
              </td>
              <td className="hidden py-5 align-top text-[14px] text-ink-2 lg:table-cell">{p.format}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
