import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Eye, AlertTriangle, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const SecurityPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Security & Digital Protection - AI Threat Verification | Rahvion</title>
        <meta name="description" content="Human verification of AI threats and deepfakes. Learn how Rahvion helps Maryland households navigate digital security challenges." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1654588836190-d8e6c12122f8)',
            filter: 'brightness(0.3)'
          }}
        />
        <MathGridBackground />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Security & Digital Protection
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Human expertise protecting you from evolving digital threats
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Human Verification of AI Threats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10 shadow-2xl mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Eye size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Human Verification of AI Threats & Deepfakes</h2>
            </div>
            
            <div className="text-white/70 text-lg leading-relaxed space-y-4">
              <p>
                As artificial intelligence becomes more sophisticated, so do the threats it enables. Deepfakes, AI-generated scams, and synthetic media are increasingly difficult to detect with automated tools alone.
              </p>
              <p>
                That's where Rahvion comes in. Our team provides <strong className="text-white">human-verified analysis</strong> of suspicious content, communications, and requests. When you're unsure if an email, video, or voice call is legitimate, we apply expert judgment and contextual understanding that AI detection tools often miss.
              </p>
              <p>
                We help you answer critical questions: Is this really from my bank? Is that video authentic? Should I trust this request? Our human-first approach combines technical knowledge with common sense to keep you safe in an increasingly complex digital landscape.
              </p>
            </div>
          </motion.div>

          {/* Common Threats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Common Digital Threats</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: AlertTriangle,
                  title: 'Phishing & Email Scams',
                  description: 'Fraudulent emails designed to steal personal information, credentials, or money through deceptive links and requests.',
                  gradient: 'from-red-500 to-orange-500'
                },
                {
                  icon: Shield,
                  title: 'Tech Support Scams',
                  description: 'Fake technical support calls or pop-ups claiming your computer has issues, attempting to gain remote access or payment.',
                  gradient: 'from-yellow-500 to-orange-500'
                },
                {
                  icon: Eye,
                  title: 'Deepfakes & AI-Generated Content',
                  description: 'Realistic but fake videos, audio, or images created using AI to impersonate trusted individuals or spread misinformation.',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Lock,
                  title: 'Ransomware & Malware',
                  description: 'Malicious software that encrypts your files or monitors your activity, often demanding payment for restoration or removal.',
                  gradient: 'from-blue-500 to-cyan-500'
                }
              ].map((threat, index) => (
                <motion.div
                  key={threat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${threat.gradient} flex items-center justify-center mb-4`}>
                    <threat.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{threat.title}</h3>
                  <p className="text-white/70">{threat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Link to="/security/scam-fraud-protection">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg">
                Learn About Scam & Fraud Protection
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 text-center"
          >
            <p className="text-white/70">
              <strong className="text-white">Risk Reduction, Not Absolute Prevention:</strong> While we implement comprehensive security practices and provide expert guidance, no security measure can guarantee complete protection. Our goal is to significantly reduce your risk while empowering you with knowledge and best practices.
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default SecurityPage;