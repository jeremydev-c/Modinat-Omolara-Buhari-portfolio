'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Database, BarChart3, TrendingUp, FileText, Code, Users, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Projects() {
  const [baseUrl, setBaseUrl] = useState('');

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const getViewUrl = (url: string, projectName: string) => {
    if (url.endsWith('.pptx')) {
      // Open PowerPoint directly in Office Online viewer
      if (baseUrl) {
        return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(baseUrl + url)}`;
      }
      return url;
    }
    if (url.endsWith('.pdf')) {
      // Use API route for PDF files
      return `/api/view-pdf${url}`;
    }
    return url;
  };

  const projects = [
    {
      name: "Employee Success Analysis using SQL",
      tagline: "HR Analytics Dashboard - SQL & Excel",
      description: "Comprehensive employee performance and success metrics analysis using SQL queries and Excel dashboards. Features 26 slides with 22 interactive visualizations covering employee performance trends, success metrics, and data-driven HR insights.",
      tech: ["SQL", "Excel", "Data Analysis", "HR Analytics"],
      features: [
        "SQL Query Optimization",
        "Employee Performance Metrics",
        "Interactive Excel Dashboards",
        "Data-Driven HR Insights",
        "22 Interactive Visualizations",
        "Comprehensive Analysis Reports"
      ],
      image: "👥",
      color: "from-blue-500 to-cyan-600",
      icon: Users,
      type: "PowerPoint Project",
      pdfUrl: "/projects/Employee Success Analysis using SQL.pptx"
    },
    {
      name: "NovoMed Sales Performance Analysis",
      tagline: "Pharmaceutical Sales Dashboard - Top/Bottom Analysis",
      description: "Advanced sales performance analysis for NovaMed Solutions featuring top/bottom analysis dashboards. Includes profit margin analysis, revenue trends, drug performance metrics, and customer segmentation. Built with Power BI for interactive business intelligence.",
      tech: ["Power BI", "Data Visualization", "Business Intelligence"],
      features: [
        "Top/Bottom Drug Analysis",
        "Profit Margin Tracking (82%)",
        "Revenue & COGS Analysis",
        "Customer Performance Metrics",
        "Month-on-Month Trends",
        "Interactive Dashboard Views"
      ],
      image: "💊",
      color: "from-purple-500 to-indigo-600",
      icon: BarChart3,
      type: "PowerPoint Project",
      pdfUrl: "/projects/NovoMed Sales Performance Analysis.pptx"
    },
    {
      name: "Analysis of Choco De Luxe Sales Data",
      tagline: "Sales Analytics Dashboard - Power BI",
      description: "Comprehensive sales data analysis for Choco De Luxe featuring 16 slides with 12 detailed visualizations. Includes sales trends, product performance, regional analysis, and actionable business insights for strategic decision-making.",
      tech: ["Power BI", "Excel", "Data Analysis", "Sales Analytics"],
      features: [
        "Sales Trend Analysis",
        "Product Performance Metrics",
        "Regional Sales Breakdown",
        "12 Interactive Visualizations",
        "Business Intelligence Reports",
        "Data-Driven Recommendations"
      ],
      image: "🍫",
      color: "from-yellow-500 to-orange-600",
      icon: ShoppingCart,
      type: "PowerPoint Project",
      pdfUrl: "/projects/Analysis of Choco De Luxe Sales Data ppt.pptx"
    },
    {
      name: "Consumer Electronic Sales Trend Analysis",
      tagline: "Trend Analysis Dashboard - Power BI",
      description: "In-depth consumer electronics sales trend analysis with 19 slides and 11 visualizations. Features time-series analysis, product category performance, seasonal trends, and predictive insights for electronic retail business.",
      tech: ["Power BI", "Excel", "Trend Analysis", "Time Series"],
      features: [
        "Time-Series Trend Analysis",
        "Product Category Performance",
        "Seasonal Pattern Recognition",
        "11 Detailed Visualizations",
        "Predictive Sales Insights",
        "Market Trend Identification"
      ],
      image: "📱",
      color: "from-cyan-500 to-blue-600",
      icon: TrendingUp,
      type: "PowerPoint Project",
      pdfUrl: "/projects/Consumer Electronic Sales Trend Analysis.pptx"
    },
    {
      name: "Week 2: Sales & Customer Behaviour Insights - Green Cart Ltd",
      tagline: "Python Data Analysis - Customer Analytics",
      description: "Comprehensive sales and customer behavior analysis using Python, Pandas, and data visualization libraries. Features data cleaning, feature engineering, statistical analysis, and multiple visualizations including line plots, bar charts, boxplots, and heatmaps.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis"],
      features: [
        "Data Cleaning & Standardization",
        "Feature Engineering (Revenue, Price Bands)",
        "Customer Behavior Analysis",
        "78 Code Cells with Analysis",
        "Multiple Visualization Types",
        "Statistical Insights"
      ],
      image: "🛒",
      color: "from-green-500 to-emerald-600",
      icon: Code,
      type: "Jupyter Notebook + PDF",
      notebookUrl: "/projects/week 2.ipynb",
      pdfUrl: "/projects/Week 2 - Project Brief - Sales and Customer Behaviour Insights - Green Cart Ltd.pdf"
    },
    {
      name: "Week 3: Churn Prediction for Stream Works Media",
      tagline: "Machine Learning - Predictive Analytics",
      description: "Advanced churn prediction analysis using machine learning models. Features predictive modeling, customer segmentation, churn risk scoring, and actionable insights for customer retention strategies.",
      tech: ["Python", "Machine Learning", "Scikit-learn", "Predictive Analytics"],
      features: [
        "Churn Prediction Models",
        "Customer Segmentation",
        "Risk Scoring Algorithms",
        "48 Analysis Cells",
        "ML Model Development",
        "Retention Strategy Insights"
      ],
      image: "📊",
      color: "from-pink-500 to-rose-600",
      icon: TrendingUp,
      type: "Jupyter Notebook + PDF",
      notebookUrl: "/projects/week 3 streamworks_analysis .ipynb.ipynb",
      pdfUrl: "/projects/week 3-Churn Prediction for Stream Works Media Analysis.pdf"
    },
    {
      name: "Tech Hub Retail Sales Analysis",
      tagline: "Retail Analytics Dashboard",
      description: "Comprehensive retail sales analysis for Tech Hub featuring executive business intelligence dashboard. Includes customer segmentation, product portfolio analysis, geographic performance, and sales profitability trends.",
      tech: ["Power BI", "Business Intelligence", "Retail Analytics"],
      features: [
        "Executive BI Dashboard",
        "Customer Segmentation Matrix",
        "Product Portfolio Analysis",
        "Geographic Performance Maps",
        "Sales & Profitability Trends",
        "Customer Acquisition Channels"
      ],
      image: "🏪",
      color: "from-indigo-500 to-purple-600",
      icon: BarChart3,
      type: "PDF Project",
      pdfUrl: "/projects/Tech Hub Retail Sales Analysis.pdf"
    },
    {
      name: "Sales Analysis of Cafe Harmony",
      tagline: "Restaurant Sales Analytics - Excel Dashboard",
      description: "Detailed sales analysis for Cafe Harmony using Excel dashboards covering sales performance, revenue trends, product analysis, and business insights for restaurant operations optimization.",
      tech: ["Excel", "Data Analysis", "Sales Analytics", "Business Intelligence"],
      features: [
        "Excel Dashboard Creation",
        "Sales Performance Metrics",
        "Revenue Trend Analysis",
        "Product Performance",
        "Operational Insights",
        "Business Recommendations"
      ],
      image: "☕",
      color: "from-amber-500 to-yellow-600",
      icon: BarChart3,
      type: "Excel Project",
      pdfUrl: "/projects/Sales Analysis of Cafe Harmony.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation activePage="projects" />

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
              Featured Work
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Data Analytics Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transforming raw data into actionable business insights through Excel dashboards, Power BI dashboards, Python analysis, SQL queries, and machine learning models.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">8+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">4</div>
                <div className="text-sm text-gray-400">Power BI Dashboards</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2</div>
                <div className="text-sm text-gray-400">Python Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">48</div>
                <div className="text-sm text-gray-400">Dashboard Images</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-[1.02] transition-transform"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${project.color} p-6 rounded-t-lg -m-6 mb-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="w-12 h-12 text-white" />
                    <span className="text-4xl">{project.image}</span>
                  </div>
                  <div className="text-xs text-white/80 mb-2">{project.type}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-white/90 text-sm">{project.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 border border-blue-500/20 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  {project.pdfUrl && (
                    <a
                      href={getViewUrl(project.pdfUrl, project.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm py-2 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.pdfUrl.endsWith('.pdf') ? 'View PDF' : project.pdfUrl.endsWith('.pptx') ? 'View Dashboard' : 'View Project'}
                    </a>
                  )}
                  {project.notebookUrl && (
                    <a
                      href={project.notebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-secondary text-center text-sm py-2 flex items-center justify-center gap-2"
                    >
                      <Code className="w-4 h-4" />
                      View Notebook
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

