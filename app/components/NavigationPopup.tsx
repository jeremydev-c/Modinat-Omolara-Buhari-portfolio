'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X, Sparkles } from 'lucide-react';

const pageMessages: Record<string, { title: string; message: string; cta: string; link: string }> = {
  '/projects': {
    title: '🚀 Ready to See Data-Driven Results?',
    message: '8+ comprehensive analytics projects with Power BI dashboards, Python analysis, and SQL optimization. From sales performance to churn prediction—see how I transform raw data into strategic business insights.',
    cta: 'Let\'s Talk',
    link: '/contact'
  },
  '/skills': {
    title: '💼 Looking for Top-Tier Data Talent?',
    message: 'ETL optimization (40% time reduction), 22+ interactive dashboards, and Master Data Analyst certification. I combine SQL, Python, and BI expertise to deliver actionable insights.',
    cta: 'Hire Me',
    link: '/contact'
  },
  '/certificates': {
    title: '🏆 Verified Excellence',
    message: 'Master Data Analyst (MDA) certification and 5+ verified credentials prove my commitment to continuous learning. Ready to bring this expertise to your organization?',
    cta: 'Start a Project',
    link: '/contact'
  },
  '/case-studies': {
    title: '⭐ Trusted by Organizations',
    message: 'See detailed case studies showing how I solve complex data challenges. From ETL optimization to predictive analytics, discover the impact I\'ve delivered.',
    cta: 'Get Started',
    link: '/contact'
  },
  '/testimonials': {
    title: '⭐ Trusted by Professionals',
    message: 'Verified recommendations from data analytics professionals who have worked with me on cross-team projects. See what colleagues say about my expertise and collaborative approach.',
    cta: 'Work With Me',
    link: '/contact'
  },
  '/contact': {
    title: '✨ Let\'s Transform Your Data Together',
    message: 'I respond within 24 hours with proven expertise in data analytics and business intelligence. Your data challenges deserve the best—let\'s create something great.',
    cta: 'View My Work',
    link: '/projects'
  }
};

export default function NavigationPopup() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset visibility when pathname changes
    setIsVisible(false);
    
    // Show popup after 2 seconds on page load for supported pages
    if (pathname && pathname !== '/' && pageMessages[pathname]) {
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(showTimer);
    }
  }, [pathname]);

  // Auto-dismiss timer when popup becomes visible
  useEffect(() => {
    if (isVisible) {
      const autoHideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // 5 seconds

      return () => clearTimeout(autoHideTimer);
    }
  }, [isVisible]);

  const currentMessage = pathname ? pageMessages[pathname] : null;

  if (!currentMessage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed top-20 right-4 md:right-8 z-[100] w-full max-w-sm mx-4 pointer-events-none"
        >
          <div className="glass-effect-strong rounded-xl border border-blue-500/30 shadow-2xl shadow-blue-500/20 p-4 md:p-5 relative overflow-hidden pointer-events-auto">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon and Title Row */}
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gradient mb-1">
                    {currentMessage.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {currentMessage.message}
                  </p>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-gray-800/50 rounded transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* CTA Button */}
              <div className="mt-3">
                <Link
                  href={currentMessage.link}
                  onClick={() => setIsVisible(false)}
                  className="btn-primary w-full text-sm py-2 text-center flex items-center justify-center gap-2"
                >
                  {currentMessage.cta}
                  <Sparkles className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
