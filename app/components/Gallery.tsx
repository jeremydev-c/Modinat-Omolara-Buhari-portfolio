'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Dashboard screenshots as numbered exhibits; click one to see it full size.
export default function Gallery({ images, title, start = 2 }: { images: string[]; title: string; start?: number }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, images.length]);

  return (
    <>
      <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
        {images.map((src, i) => (
          <li key={src} className={i === 0 && images.length % 2 === 1 ? 'sm:col-span-2' : ''}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="figure group block aspect-[16/10] w-full cursor-zoom-in"
              aria-label={`Open exhibit ${start + i} full size`}
            >
              <Image
                src={src}
                alt={`${title}, exhibit ${start + i}`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
            <p className="exhibit mt-3">
              <b>Exhibit {String(start + i).padStart(2, '0')}</b> · {title}
            </p>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title}, exhibit ${start + open}`}
          className="fixed inset-0 z-[60] flex flex-col bg-band/95 p-4 text-band-ink sm:p-8"
          onClick={() => setOpen(null)}
        >
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em]">
            <span>
              Exhibit {String(start + open).padStart(2, '0')} · {open + 1} of {images.length}
            </span>
            <button type="button" onClick={() => setOpen(null)} className="border border-band-ink/30 px-3 py-1" autoFocus>
              Close
            </button>
          </div>
          <div className="relative mt-4 flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={images[open]} alt={`${title}, exhibit ${start + open}`} fill sizes="100vw" className="object-contain" />
          </div>
          {images.length > 1 && (
            <div className="mt-4 flex justify-center gap-3" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setOpen((open - 1 + images.length) % images.length)}
                className="border border-band-ink/30 px-4 py-1.5 font-mono text-[11px] uppercase"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() => setOpen((open + 1) % images.length)}
                className="border border-band-ink/30 px-4 py-1.5 font-mono text-[11px] uppercase"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
