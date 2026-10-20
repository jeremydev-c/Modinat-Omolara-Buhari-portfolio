import Link from 'next/link';
import { person } from '../lib/content';

export default function SiteFooter() {
  return (
    <footer className="bg-band text-band-ink">
      <div className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-band-ink/55">Next step</p>
          <p className="condensed mt-4 text-fig-md uppercase">
            Have data that needs
            <br />
            <span className="text-amber">a clear answer?</span>
          </p>
          <a href={`mailto:${person.email}`} className="mt-8 inline-block text-[18px] underline decoration-band-ink/30 underline-offset-4 hover:decoration-amber">
            {person.email}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:col-start-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-band-ink/55">Pages</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              {[
                ['/', 'Overview'],
                ['/projects', 'Projects'],
                ['/testimonials', 'Recommendations'],
                ['/certificates', 'Credentials'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-band-ink/80 hover:text-amber">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-band-ink/55">Profiles</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-band-ink/80 hover:text-amber">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-band-ink/80 hover:text-amber">
                  GitHub ↗
                </a>
              </li>
            </ul>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-band-ink/55">Based in</p>
            <p className="mt-2 text-[15px] text-band-ink/80">{person.location}</p>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="flex flex-col gap-2 border-t border-band-ink/15 py-6 font-mono text-[10.5px] uppercase tracking-[0.1em] text-band-ink/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {person.fullName}</p>
          <p>All figures from her own dashboards and reports</p>
        </div>
      </div>
    </footer>
  );
}
