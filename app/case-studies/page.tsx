'use client';

import { motion } from 'framer-motion';
import { Database, Code, TrendingUp, BarChart3, Target, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Employee Success Analysis using SQL",
      subtitle: "HR Analytics Dashboard - Data-Driven HR Decisions",
      problem: "Organizations needed comprehensive insights into employee performance and success metrics to make data-driven HR decisions, optimize workforce management, and identify high-performing employees.",
      solution: "Developed a comprehensive SQL-based analysis system with Power BI dashboards featuring 26 slides and 22 interactive visualizations. The solution provides real-time employee performance metrics, success indicators, and actionable HR insights.",
      approach: [
        "Designed and optimized SQL queries for employee data extraction",
        "Created data models for performance metrics and success indicators",
        "Built interactive Power BI dashboards with 22 visualizations",
        "Implemented filtering and drill-down capabilities",
        "Developed comprehensive analysis reports"
      ],
      results: [
        "26 comprehensive analysis slides",
        "22 interactive Power BI visualizations",
        "Data-driven HR decision-making capabilities",
        "Real-time employee performance tracking",
        "Comprehensive workforce insights"
      ],
      tools: ["SQL", "Power BI", "Data Modeling", "Business Intelligence"],
      icon: Database,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Week 2: Green Cart Ltd - Sales & Customer Behaviour Insights",
      subtitle: "Python Data Analysis - Customer Analytics",
      problem: "Green Cart Ltd needed to understand sales patterns, customer behavior, and product performance to optimize inventory, improve customer retention, and increase revenue. Raw data from multiple sources required cleaning and analysis.",
      solution: "Conducted comprehensive data analysis using Python (Pandas, NumPy, Matplotlib, Seaborn) with 78 code cells. Performed data cleaning, feature engineering, statistical analysis, and created multiple visualizations to uncover key business insights.",
      approach: [
        "Loaded and merged data from 3 CSV files (sales, products, customers)",
        "Cleaned and standardized data (text, dates, numeric values)",
        "Engineered features (revenue, price bands, loyalty tiers, order weeks)",
        "Created summary tables for key metrics",
        "Developed multiple visualizations (line plots, bar charts, boxplots, heatmaps, countplots)"
      ],
      results: [
        "Identified weekly revenue trends by region",
        "Discovered top product categories by revenue",
        "Analyzed customer loyalty patterns and behavior",
        "Evaluated delivery performance metrics",
        "Created actionable business recommendations"
      ],
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis"],
      icon: Code,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Week 3: Stream Works Media - Churn Prediction",
      subtitle: "Machine Learning - Predictive Analytics",
      problem: "Stream Works Media was experiencing customer churn and needed to predict which customers were likely to cancel their subscriptions. This would enable proactive retention strategies and reduce revenue loss.",
      solution: "Developed a machine learning-based churn prediction system using Python and Scikit-learn. The solution includes predictive models, customer segmentation, risk scoring algorithms, and actionable retention insights.",
      approach: [
        "Collected and prepared customer data for analysis",
        "Engineered features for churn prediction",
        "Developed machine learning models using Scikit-learn",
        "Implemented customer segmentation algorithms",
        "Created risk scoring and churn probability metrics",
        "Generated actionable retention strategy recommendations"
      ],
      results: [
        "Accurate churn prediction models",
        "Customer segmentation for targeted retention",
        "Risk scoring algorithms for prioritization",
        "48 comprehensive analysis cells",
        "Data-driven retention strategies"
      ],
      tools: ["Python", "Machine Learning", "Scikit-learn", "Predictive Analytics"],
      icon: TrendingUp,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "NovoMed Sales Performance Analysis",
      subtitle: "Pharmaceutical Sales Dashboard - Top/Bottom Analysis",
      problem: "NovaMed Solutions needed comprehensive sales performance insights to identify top-performing drugs, understand profit margins, analyze customer behavior, and optimize sales strategies in the pharmaceutical market.",
      solution: "Created an advanced Power BI dashboard featuring top/bottom analysis with profit margin tracking (82%), revenue trends, drug performance metrics, and customer segmentation. The solution provides interactive business intelligence for strategic decision-making.",
      approach: [
        "Analyzed sales data for top/bottom drug performance",
        "Calculated profit margins and revenue metrics",
        "Developed customer performance analysis",
        "Created month-on-month trend visualizations",
        "Built interactive dashboard with filtering capabilities"
      ],
      results: [
        "82% profit margin identification",
        "Top/bottom drug performance analysis",
        "Customer segmentation insights",
        "Month-on-month revenue trends",
        "Interactive dashboard for stakeholders"
      ],
      tools: ["Power BI", "Data Visualization", "Business Intelligence"],
      icon: BarChart3,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation activePage="case-studies" />

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
              Deep Dive
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Detailed analysis of how data transforms into actionable business insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${study.color} p-8 rounded-lg mb-8`}>
                <div className="flex items-center gap-4 mb-4">
                  <study.icon className="w-12 h-12 text-white" />
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{study.title}</h2>
                    <p className="text-white/90">{study.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {study.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-bold text-white">Problem / Goal</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{study.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">Solution</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{study.solution}</p>
              </div>

              {/* Approach */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Approach</h3>
                </div>
                <ul className="space-y-3">
                  {study.approach.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Key Results & Insights</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
            <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Transform Your Data?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's discuss how data analytics can drive your business forward
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}


