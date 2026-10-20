'use client';

import { useSyncExternalStore } from 'react';

function currentTheme(): 'light' | 'dark' {
  const set = document.documentElement.getAttribute('data-theme');
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  media.addEventListener('change', onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener('change', onChange);
  };
}

// A two-position switch labelled like a report filter: LIGHT | DARK.
export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => 'light' as const);

  function set(next: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
  }

  return (
    <div role="group" aria-label="Colour theme" className="flex border border-ink/20 font-mono text-[10.5px] uppercase tracking-[0.08em]">
      {(['light', 'dark'] as const).map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => set(t)}
          aria-pressed={theme === t}
          className={`px-2 py-1 transition-colors ${theme === t ? 'bg-ink text-paper' : 'text-ink-3 hover:text-ink'}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
