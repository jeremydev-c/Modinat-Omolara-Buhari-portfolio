import { projects, toolCounts } from '../lib/content';

// A small horizontal bar chart of how many of her projects use each tool.
// The numbers are counted from the project list, never typed in by hand.
export default function ToolChart({ delay = 0 }: { delay?: number }) {
  const rows = toolCounts();
  const max = Math.max(...rows.map((r) => r.count));

  return (
    <figure>
      <figcaption className="exhibit flex items-baseline justify-between">
        <span>
          <b>Exhibit 01</b> · Projects by tool
        </span>
        <span>n = {projects.length}</span>
      </figcaption>
      <dl className="mt-4 space-y-2.5">
        {rows.map((r, i) => (
          <div key={r.tool} className="grid grid-cols-[5.5rem_1fr_1.5rem] items-center gap-3">
            <dt className="text-[13px] text-ink-2">{r.tool}</dt>
            <dd className="relative h-[14px] bg-ink/[0.06]">
              <span
                className="anim-bar absolute inset-y-0 left-0 bg-amber"
                style={{ width: `${(r.count / max) * 100}%`, animationDelay: `${delay + i * 0.08}s` }}
              />
            </dd>
            <dd className="tabular text-right font-mono text-[12px]">{r.count}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
