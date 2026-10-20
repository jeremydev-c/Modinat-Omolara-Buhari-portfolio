import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import MotionProvider from './components/MotionProvider';
import StructuredData from './components/StructuredData';
import { person } from './lib/content';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const sans = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-sans', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

const description =
  'Omolara Buhari is a data analyst in Vilnius who turns messy, multi-source data into clear Power BI, Tableau and Excel dashboards that people use to make decisions.';

export const metadata: Metadata = {
  title: {
    default: 'Omolara Buhari — Data Analyst',
    template: '%s — Omolara Buhari',
  },
  description,
  keywords: [
    'Modinat Omolara Buhari',
    'data analyst',
    'business intelligence',
    'Power BI',
    'Tableau',
    'SQL',
    'Excel dashboards',
    'Vilnius',
  ],
  authors: [{ name: person.fullName }],
  metadataBase: new URL(person.url),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: person.name,
    title: 'Omolara Buhari — Data Analyst',
    description,
    images: [{ url: '/dashboards/choco-deluxe/choco_deluxe_main_dashboard.png', alt: 'A dashboard by Omolara Buhari' }],
  },
  twitter: { card: 'summary_large_image', title: 'Omolara Buhari — Data Analyst', description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1f1ed' },
    { media: '(prefers-color-scheme: dark)', color: '#0b111f' },
  ],
};

// Runs before paint so a saved light/dark choice never flashes the wrong theme.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <StructuredData />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
