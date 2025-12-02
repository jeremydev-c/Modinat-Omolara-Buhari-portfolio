'use client';

import Link from 'next/link';
import MobileNav from './MobileNav';

interface NavigationProps {
  activePage?: string;
}

export default function Navigation({ activePage }: NavigationProps) {
  const navLinks = [
    { href: '/#about', label: 'About', id: 'about' },
    { href: '/projects', label: 'Projects', id: 'projects' },
    { href: '/case-studies', label: 'Case Studies', id: 'case-studies' },
    { href: '/certificates', label: 'Certificates', id: 'certificates' },
    { href: '/skills', label: 'Skills', id: 'skills' },
    { href: '/testimonials', label: 'Testimonials', id: 'testimonials' },
    { href: '/contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full glass-effect-strong z-50 border-b border-blue-500/20 shadow-lg shadow-blue-500/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          Modinat Omolara Buhari
        </Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`nav-link ${activePage === link.id ? 'text-blue-400' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}

