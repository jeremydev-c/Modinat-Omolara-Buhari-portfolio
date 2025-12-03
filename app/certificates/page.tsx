'use client';

import { motion } from 'framer-motion';
import { Award, FileText, Download, ExternalLink, CheckCircle, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Certificates() {
  const [baseUrl, setBaseUrl] = useState('');

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const certificates = [
    {
      title: "Master Data Analyst (MDA)",
      issuer: "Data Analytics EU",
      date: "2025",
      description: "Comprehensive certification covering Problem Solving, Microsoft Excel, SQL, Data Storytelling, Power BI for Business Intelligence and Data Visualization, Tableau, Microsoft Fabric, and ChatGPT for Analytics.",
      skills: ["Problem Solving", "Microsoft Excel", "SQL", "Data Storytelling", "Power BI", "Tableau", "Microsoft Fabric", "ChatGPT for Analytics"],
      pdf: "/CERTIFICATES/Data Analyst Certificate.pdf",
      icon: Award,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Certificate of Excellence",
      issuer: "Data Analytics EU",
      date: "2025",
      description: "Recognition for outstanding performance and excellence in data analytics coursework and projects.",
      skills: ["Data Analysis", "Excellence"],
      pdf: "/CERTIFICATES/Modinat Omolara Buhari - CE (1).pdf",
      icon: CheckCircle,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Certificate of Completion",
      issuer: "Data Analytics EU",
      date: "2025",
      description: "Successfully completed comprehensive data analytics program with distinction.",
      skills: ["Data Analytics", "Completion"],
      pdf: "/CERTIFICATES/Modinat Omolara Buhari .cc.pdf",
      icon: FileText,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Hackathon Certificate",
      issuer: "Hackathon Competition",
      date: "2025",
      description: "Recognition for outstanding performance and achievement in hackathon competition, demonstrating technical skills, problem-solving abilities, and innovation in data analytics.",
      skills: ["Hackathon", "Problem Solving", "Innovation", "Data Analytics", "Competition"],
      pdf: "/CERTIFICATES/Modinat_Omolara_Buhari_Hackathon_Certificate.pdf",
      icon: Trophy,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation activePage="certificates" />

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
              Credentials
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Certificates & Achievements
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Verified certifications and achievements demonstrating expertise in data analytics and business intelligence
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">4</div>
              <div className="text-sm text-gray-400">Certificates</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">MDA</div>
              <div className="text-sm text-gray-400">Master Data Analyst</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-gray-400">Verified</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2025</div>
              <div className="text-sm text-gray-400">Current Year</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-[1.02] transition-transform"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${cert.color} p-6 rounded-lg mb-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <cert.icon className="w-12 h-12 text-white" />
                    <Award className="w-8 h-8 text-white/80" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-white/90 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-white/70 text-xs">{cert.date}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{cert.description}</p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-800/50 border border-blue-500/20 rounded text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={`/api/view-pdf${cert.pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="flex-1 btn-primary text-center text-sm py-2 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View PDF
                  </a>
                  <a
                    href={cert.pdf}
                    download
                    className="px-4 py-2 bg-gray-800/50 border border-blue-500/20 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors flex items-center justify-center"
                    title="Download Certificate"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card"
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h2 className="text-3xl font-bold mb-4 text-gradient">Verified Expertise</h2>
            <p className="text-gray-300 mb-8 text-lg">
              All certificates are verified and demonstrate comprehensive expertise in data analytics, 
              business intelligence, and data visualization tools.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Let's Work Together
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

