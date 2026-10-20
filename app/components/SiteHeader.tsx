'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { person } from '../lib/content';

const nav = [
  { href: '/projects', label: 'Projects' },
  { href: '/testimonials', label: 'Recommendations' },
  { href: '/certificates', label: 'Credentials' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu after navigating.
  if (open && openedAt !== pathname) {
    setOpen(false);
    setOpenedAt(pathname);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-rule bg-paper/90 backdrop-blur' : 'border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-3 sm:gap-6">
        <Link href="/" className="flex items-baseline gap-3" aria-label={`${person.name}, home`}>
          <span className="condensed whitespace-nowrap text-[20px] uppercase leading-none tracking-[0.01em] sm:text-[24px]">
            {person.name}
          </span>
          <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-3 sm:inline">
            {person.role}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative py-1 text-[14px] font-medium transition-colors ${
                  active ? 'text-ink' : 'text-ink-2 hover:text-ink'
                }`}
              >
                {item.label}
                {active && <span className="absolute inset-x-0 -bottom-[21px] h-[3px] bg-amber" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              setOpenedAt(pathname);
            }}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="border border-ink/20 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] md:hidden"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="wrap border-t border-rule pb-6 md:hidden">
          {[{ href: '/', label: 'Overview' }, ...nav].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-rule py-4"
            >
              <span className="condensed text-[30px] uppercase leading-none">{item.label}</span>
              <span className="font-mono text-[11px] text-ink-3">{String(i + 1).padStart(2, '0')}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
