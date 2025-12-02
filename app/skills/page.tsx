'use client';

import { motion } from 'framer-motion';
import { Database, BarChart3, Code, TrendingUp, FileText, Zap, Cloud, GitBranch, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Skills() {
  const skillCategories = [
    {
      title: "Tools & Technologies",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Excel", level: "Advanced" },
        { name: "Power BI", level: "Advanced" },
        { name: "Tableau", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "Microsoft Fabrics", level: "Advanced" },
        { name: "Microsoft SQL Server", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Microsoft Azure", level: "Intermediate" },
        { name: "Looker Studio", level: "Intermediate" },
        { name: "SSRS", level: "Intermediate" },
        { name: "R", level: "Intermediate" },
        { name: "Pandas", level: "Advanced" },
        { name: "NumPy", level: "Advanced" },
        { name: "Jupyter", level: "Advanced" },
        { name: "ChatGPT", level: "Advanced" },
        { name: "Microsoft PowerPoint", level: "Intermediate" },
        { name: "Microsoft Access", level: "Intermediate" }
      ]
    },
    {
      title: "Data Analysis Skills",
      icon: Database,
      color: "purple",
      skills: [
        { name: "Data Cleaning", level: "Advanced" },
        { name: "Data Wrangling", level: "Advanced" },
        { name: "Data Collection", level: "Advanced" },
        { name: "ETL (Extract, Transform, Load)", level: "Advanced" },
        { name: "Statistics", level: "Advanced" },
        { name: "Intelligence Analysis", level: "Advanced" },
        { name: "Reporting & Analysis", level: "Advanced" },
        { name: "Data Storytelling", level: "Advanced" },
        { name: "Visualization", level: "Advanced" },
        { name: "Dashboard Building", level: "Advanced" }
      ]
    },
    {
      title: "Interpersonal Skills",
      icon: FileText,
      color: "cyan",
      skills: [
        { name: "Attention to Detail", level: "Advanced" },
        { name: "Collaboration", level: "Advanced" },
        { name: "Teamwork", level: "Advanced" },
        { name: "Critical Thinking", level: "Advanced" },
        { name: "Solution Focused", level: "Advanced" },
        { name: "Stakeholder Engagement", level: "Advanced" },
        { name: "Adaptability", level: "Advanced" },
        { name: "Time Management", level: "Advanced" },
        { name: "Productivity Improvement", level: "Advanced" },
        { name: "Goal Setting", level: "Advanced" },
        { name: "Collaborative Problem Solving", level: "Advanced" },
        { name: "Presentations", level: "Advanced" },
        { name: "Research Skills", level: "Advanced" },
        { name: "Organization Skills", level: "Advanced" },
        { name: "Documentation", level: "Advanced" },
        { name: "Evidence-Based Practice", level: "Advanced" },
        { name: "Ethics and Confidentiality", level: "Advanced" },
        { name: "Observation", level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "text-green-400";
      case "Intermediate":
        return "text-yellow-400";
      case "Beginner":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Advanced":
        return "w-full";
      case "Intermediate":
        return "w-2/3";
      case "Beginner":
        return "w-1/3";
      default:
        return "w-1/2";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation activePage="skills" />

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
              Expertise
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Skills & Technologies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data analytics toolkit for transforming data into actionable insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${
                    category.color === 'blue' ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20' :
                    category.color === 'purple' ? 'bg-gradient-to-br from-purple-500/20 to-purple-600/20' :
                    'bg-gradient-to-br from-cyan-500/20 to-cyan-600/20'
                  }`}>
                    <category.icon className={`w-6 h-6 ${
                      category.color === 'blue' ? 'text-blue-400' :
                      category.color === 'purple' ? 'text-purple-400' :
                      'text-cyan-400'
                    }`} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className={`text-xs font-semibold ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: getLevelWidth(skill.level).replace('w-', '').replace('full', '100%').replace('2/3', '66.67%').replace('1/3', '33.33%').replace('1/2', '50%') + '%' }}
                          transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full ${
                            category.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                            category.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                            'bg-gradient-to-r from-cyan-500 to-cyan-600'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">Key Achievements</h2>
            <p className="text-gray-400">Proven expertise through real-world results</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "40% ETL Time Reduction",
                description: "Optimized data processing pipelines using SQL and Airflow",
                color: "blue"
              },
              {
                icon: BarChart3,
                title: "22 Interactive Dashboards",
                description: "Created comprehensive Power BI visualizations for stakeholders",
                color: "purple"
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Developed ML models for churn prediction and customer insights",
                color: "cyan"
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <achievement.icon className={`w-12 h-12 mx-auto mb-4 text-${achievement.color}-400`} />
                <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certified & Verified */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h2 className="text-3xl font-bold mb-4 text-gradient">Certified & Verified</h2>
            <p className="text-gray-300 mb-6">
              Master Data Analyst (MDA) certification and verified expertise from Data Analyst Internship Programme, AMDARI, and 10Alytics:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Excel", "Power BI", "Tableau", "SQL", "Python", "Microsoft Fabrics", "ETL", "Data Storytelling", "Dashboard Building", "Data Cleaning", "Statistics", "Reporting & Analysis", "Critical Thinking", "Collaboration", "Time Management"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800/50 border border-blue-500/20 rounded-full text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
            <Link href="/certificates" className="btn-primary mt-8 inline-block">
              View Certificates
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

