'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aletor AGBOIGBE",
      role: "Educator | Data Analyst | Excel | Power BI | SQL | Tableau",
      quote: "I highly recommend Omolara BUHARI, a dedicated and passionate data analytics professional. I had the opportunity to work with her on cross-team projects, where she consistently stood out for her expertise in Excel, SQL, Tableau, Power BI, and Microsoft Fabric. Omolara's collaborative approach, attention to detail, and ability to turn data into actionable insights make her an invaluable asset to any team.",
      date: "September 2025",
      verified: true
    },
    {
      name: "Evangelista Emelogu",
      role: "Data Analyst | Business Analyst | Customer Experience & Banking Specialist",
      quote: "I had the privilege of working with Omolara Buhari on several data-focused projects, and her expertise in data analysis, Excel, SQL, Power BI, and business intelligence is exceptional. She demonstrates strong analytical thinking, attention to detail, and consistently delivers high-quality insights that drive business decisions.",
      date: "September 2025",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation activePage="testimonials" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm md:text-base text-blue-400 mb-4 uppercase tracking-widest font-semibold">
              Trusted & Recommended
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              See what colleagues and collaborators say about working with me
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-500/20" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 leading-relaxed mb-6 text-lg italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      {testimonial.verified && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs mt-1">{testimonial.date}</p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/omolarabuhari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                    aria-label="View Modinat's LinkedIn profile"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicator */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              <h2 className="text-3xl font-bold text-gradient">Trusted by Professionals</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Verified recommendations from data analytics professionals who have worked with me on cross-team projects
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Work With Me
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

