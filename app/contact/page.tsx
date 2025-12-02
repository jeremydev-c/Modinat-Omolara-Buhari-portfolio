'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation activePage="contact" />

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
              Let's Work Together
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Interested in data analytics, business intelligence, or data-driven solutions? 
              I'm always open to discussing new projects and opportunities.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center card p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">Fast</div>
                <div className="text-xs md:text-sm text-gray-400">Response</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center card p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">5+</div>
                <div className="text-xs md:text-sm text-gray-400">Certificates</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center card p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">100%</div>
                <div className="text-xs md:text-sm text-gray-400">Committed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center card p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">8+</div>
                <div className="text-xs md:text-sm text-gray-400">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gradient">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Open to data analyst opportunities, freelance projects, and collaborative data science initiatives. 
                  Let's discuss how data analytics can drive your business forward.
                </p>
              </motion.div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:omolarabuhari1@gmail.com"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="card flex items-center gap-4 hover:scale-[1.02] transition-transform group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-400 text-sm">omolarabuhari1@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+37060291709"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="card flex items-center gap-4 hover:scale-[1.02] transition-transform group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-400 text-sm">+370 602 91709</p>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="card flex items-center gap-4"
                >
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-400 text-sm">Vilnius, Lithuania</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="font-semibold text-white mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/omolarabuhari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </a>
                  <a
                    href="https://github.com/modinat-buhari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-gray-300" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

