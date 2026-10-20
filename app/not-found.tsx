import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="gridlines">
      <div className="wrap flex min-h-[75vh] flex-col justify-center pb-20 pt-28">
        <p className="label">Error 404</p>
        <h1 className="condensed mt-4 text-fig-xl uppercase">
          No data
          <br />
          <span className="text-amber">for this page</span>
        </h1>
        <p className="mt-6 max-w-md text-[18px] text-ink-2">The link may be out of date. Try the projects instead.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-solid">
            Overview
          </Link>
          <Link href="/projects" className="btn-outline">
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
