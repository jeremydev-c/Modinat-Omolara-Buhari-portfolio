import Image from 'next/image';
import type { Project } from '../lib/content';

// A project's dashboard, or a typeset title card when it has no screenshot.
export default function Cover({
  project,
  priority,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  ratio = 'aspect-[16/10]',
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
  ratio?: string;
}) {
  if (project.cover) {
    return (
      <div className={`figure ${ratio}`}>
        <Image
          src={project.cover}
          alt={`${project.title} dashboard`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    );
  }
  return (
    <div className={`figure ${ratio} gridlines flex flex-col justify-between bg-surface p-6 sm:p-8`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">{project.format}</p>
      <div>
        <p className="condensed text-fig-sm uppercase leading-none">{project.client}</p>
        <p className="mt-2 text-[14px] text-ink-2">{project.title}</p>
      </div>
      <div className="flex gap-1.5">
        {project.tools.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
