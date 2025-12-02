'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Database, BarChart3, TrendingUp, Award, Zap, Target, Code, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <a href="#main-heading" className="skip-to-main">
        Skip to main content
      </a>
      
      <Navigation />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        aria-label="Hero section"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <Image
                  src="/profile-photo.jpg"
                  alt="Modinat Omolara Buhari"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient text-center" id="main-heading">
              Data Analyst | Business Intelligence | Reporting Analyst
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Transforming Data Into Actionable Business Insights
            </p>
            <p className="text-lg text-blue-400 mb-4">
              Excel • Power BI • SQL • Tableau • Microsoft Fabrics • Python
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Data Analyst | Business Intelligence | Reporting Analyst with expertise in ETL processes, data warehousing, and cloud-based analytics solutions. 
              Proven ability to leverage Excel, Power BI, SQL, Tableau, Microsoft Fabrics, and Python 
              to optimize business intelligence, streamline data pipelines, and deliver actionable insights that drive business decisions.
            </p>
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="flex justify-center gap-6 md:gap-8 flex-wrap text-center mt-12">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-400">8+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-gray-400">Certificates</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">40%</div>
                <div className="text-sm text-gray-400">ETL Time Reduction</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 px-4 relative overflow-hidden"
        aria-labelledby="about-heading"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm md:text-base text-blue-400 mb-4 uppercase tracking-widest font-semibold">
              My Story
            </p>
            <h2 className="section-title text-5xl md:text-6xl" id="about-heading">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              {/* Profile Photo in About Section */}
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Modinat Omolara Buhari"
                    fill
                    className="object-cover"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Who I Am</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm Modinat Omolara Buhari, a passionate Data Analyst currently working as a Data Analyst 
                at Amdari Inc. (UK, Remote) since April 2025. Based in Vilnius, Lithuania, I specialize in 
                transforming complex datasets into actionable business strategies.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                My expertise spans ETL processes, data warehousing, and cloud-based analytics solutions. 
                I have a proven track record of designing and optimizing ETL pipelines using SQL and Airflow, 
                reducing data processing time by 40% for real-time analytics.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about creating interactive dashboards in Tableau and Power BI that enable 
                stakeholders to make data-driven decisions. My work involves presenting analytical findings 
                to cross-functional teams and senior management, translating complex datasets into actionable 
                business strategies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">Core Strengths</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Database className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">ETL Pipeline Optimization</h4>
                    <p className="text-gray-400 text-sm">Reduced data processing time by 40% using SQL and Airflow</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Interactive Dashboard Development</h4>
                    <p className="text-gray-400 text-sm">Power BI and Tableau dashboards for stakeholder decision-making</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Data Visualization & Storytelling</h4>
                    <p className="text-gray-400 text-sm">Transforming complex data into clear, actionable insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">SQL & Python Expertise</h4>
                    <p className="text-gray-400 text-sm">Advanced data analysis and predictive modeling</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Value Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "Data Engineering",
                description: "ETL pipelines, data warehousing, and cloud-based analytics solutions",
                color: "blue"
              },
              {
                icon: BarChart3,
                title: "Business Intelligence",
                description: "Interactive dashboards and reports that drive strategic decisions",
                color: "purple"
              },
              {
                icon: Target,
                title: "Actionable Insights",
                description: "Translating complex datasets into clear business strategies",
                color: "cyan"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <value.icon className={`w-12 h-12 mx-auto mb-4 text-${value.color}-400`} />
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
