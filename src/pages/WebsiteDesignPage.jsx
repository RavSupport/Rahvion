import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Gauge, Shield, Zap, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const WebsiteDesignPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    projectScope: '',
    technicalGoals: [],
    timeline: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const caseStudies = [
    {
      name: 'Local Restaurant Redesign',
      metrics: {
        performance: 95,
        seo: 98,
        accessibility: 100,
        bestPractices: 92
      },
      achievements: [
        'Security hardening with SSL/TLS',
        'Clean-code architecture',
        'Mobile-first responsive design',
        'Optimized image delivery'
      ],
      technologies: ['React', 'TailwindCSS', 'Vite', 'Cloudflare CDN']
    },
    {
      name: 'Professional Services Portal',
      metrics: {
        performance: 98,
        seo: 100,
        accessibility: 96,
        bestPractices: 95
      },
      achievements: [
        'SEO optimization for local search',
        'Automated lead capture forms',
        'Google Analytics integration',
        'Contact management system'
      ],
      technologies: ['React', 'Supabase', 'React Router', 'Framer Motion']
    },
    {
      name: 'E-commerce Platform',
      metrics: {
        performance: 96,
        seo: 94,
        accessibility: 98,
        bestPractices: 100
      },
      achievements: [
        'Custom data workflows',
        'High-speed performance',
        'WCAG AA accessibility standards',
        'Secure payment integration'
      ],
      technologies: ['React', 'Stripe', 'TailwindCSS', 'API integrations']
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (goal) => {
    setFormData(prev => ({
      ...prev,
      technicalGoals: prev.technicalGoals.includes(goal)
        ? prev.technicalGoals.filter(g => g !== goal)
        : [...prev.technicalGoals, goal]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Thank you! We'll reach out to discuss your website architecture needs."
    });
    // Reset form
    setFormData({
      projectScope: '',
      technicalGoals: [],
      timeline: '',
      name: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Website Design & Digital Architecture - Rahvion</title>
        <meta name="description" content="Professional website design with Lighthouse scores 95+. Custom-scoped digital architecture for local businesses and personal brands in Maryland." />
      </Helmet>

      <section className="py-16 md:py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Website Design & Digital Architecture
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              High-performance websites built for speed, security, and results
            </p>
          </motion.div>

          {/* Standards & Engineering Showcase */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-white text-center"
            >
              Standards & Engineering Showcase
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-2xl"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">{study.name}</h3>
                  
                  {/* Lighthouse Scores */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm">Performance</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-400 to-green-500"
                            style={{ width: `${study.metrics.performance}%` }}
                          />
                        </div>
                        <span className="text-green-400 font-semibold text-sm">{study.metrics.performance}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm">SEO</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-500"
                            style={{ width: `${study.metrics.seo}%` }}
                          />
                        </div>
                        <span className="text-blue-400 font-semibold text-sm">{study.metrics.seo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <span className="text-white font-semibold text-sm">Key Achievements</span>
                    <ul className="mt-2 space-y-1">
                      {study.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/60 text-sm flex items-start">
                          <Trophy size={12} className="mt-1 mr-2 text-yellow-400 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <span className="text-white/70 text-xs">Technologies:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {study.technologies.map((tech, i) => (
                        <span key={i} className="bg-white/10 px-2 py-1 rounded text-xs text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Intake Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10 shadow-2xl mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Project Intake Form</h2>
            <p className="text-white/70 text-center mb-8">
              Start your website architecture inquiry. We'll discuss scope, timeline, and technical requirements.
            </p>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {/* Project Scope */}
              <div>
                <label className="block text-white font-semibold mb-2">Project Scope</label>
                <select
                  name="projectScope"
                  value={formData.projectScope}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" className="bg-[#0b0f19] text-white">Select project type</option>
                  <option value="personal-brand" className="bg-[#0b0f19] text-white">Personal Brand</option>
                  <option value="local-business" className="bg-[#0b0f19] text-white">Local Business</option>
                  <option value="ai-integration" className="bg-[#0b0f19] text-white">AI Integration</option>
                  <option value="other" className="bg-[#0b0f19] text-white">Other</option>
                </select>
              </div>

              {/* Technical Goals */}
              <div>
                <label className="block text-white font-semibold mb-2">Technical Goals (select all that apply)</label>
                <div className="space-y-2">
                  {['High-speed SEO', 'Automated lead capture', 'Custom data workflows', 'Other'].map((goal) => (
                    <label key={goal} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.technicalGoals.includes(goal)}
                        onChange={() => handleCheckboxChange(goal)}
                        className="w-4 h-4 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-white/80">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-white font-semibold mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" className="bg-[#0b0f19] text-white">Select timeline</option>
                  <option value="asap" className="bg-[#0b0f19] text-white">ASAP</option>
                  <option value="1-3-months" className="bg-[#0b0f19] text-white">1-3 months</option>
                  <option value="3-6-months" className="bg-[#0b0f19] text-white">3-6 months</option>
                  <option value="6-plus-months" className="bg-[#0b0f19] text-white">6+ months</option>
                </select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project vision..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Submit Inquiry
              </Button>
            </form>
          </motion.div>

          {/* Pricing & Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-lg p-6 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Pricing</h3>
              <p className="text-white/80 text-lg">Custom Scoped via Consultation</p>
              <p className="text-white/60 text-sm mt-2">
                Every project is unique. We'll discuss your requirements and provide a tailored proposal.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 text-center">
              <p className="text-white/70 text-sm">
                <strong className="text-white">Risk Reduction, Not Absolute Prevention:</strong> While we implement industry-leading security practices, no digital system can guarantee complete protection. We focus on maximizing security while maintaining usability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default WebsiteDesignPage;