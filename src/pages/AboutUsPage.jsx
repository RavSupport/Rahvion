import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Lock, Phone, Mail } from 'lucide-react';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const AboutUsPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Us - Rahvion</title>
        <meta name="description" content="Learn about Rahvion's mission to provide enterprise-grade IT support for residential homes. Privacy-first, family-focused technology management." />
      </Helmet>

      <div className="relative min-h-screen bg-[#0B0B0D]">
        <MathGridBackground />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4 z-10">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#F5F5F5]"
            >
              About <span className="text-[#D4AF37]">Rahvion</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#A0A0A0] leading-relaxed font-light"
            >
              America's Personal IT Department. Dedicated to bringing enterprise-grade security and support to your home.
            </motion.p>
          </div>
        </section>

        {/* AdSense Container */}
        <div className="container mx-auto px-4 mb-16 relative z-10">
          <div className="w-full h-32 bg-[#1A1F2E] border border-[#3A3F47] border-dashed rounded-xl flex items-center justify-center text-[#A0A0A0] text-sm">
            AdSense Placement
          </div>
        </div>

        {/* Main Content */}
        <section className="pb-24 px-4 relative z-10">
          <div className="container mx-auto max-w-4xl space-y-16">
            
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B0B0D] backdrop-blur-xl border border-[#3A3F47] p-8 md:p-12 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="text-[#D4AF37]" size={32} />
                <h2 className="text-3xl font-serif font-bold text-[#F5F5F5]">Our Mission</h2>
              </div>
              <p className="text-[#A0A0A0] leading-relaxed text-lg font-light">
                Rahvion was founded on a simple premise: homeowners deserve the same quality of technical support as Fortune 500 CEOs. Our mission is to demystify technology, secure family networks against evolving threats, and provide a calm, professional voice when things go wrong. We aren't just fixing computers; we are empowering families to live safely in a digital world.
              </p>
            </motion.div>

            {/* Privacy First */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B0B0D] backdrop-blur-xl border border-[#3A3F47] p-8 md:p-12 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Lock className="text-[#D4AF37]" size={32} />
                <h2 className="text-3xl font-serif font-bold text-[#F5F5F5]">Privacy-First Approach</h2>
              </div>
              <p className="text-[#A0A0A0] leading-relaxed text-lg font-light mb-6">
                We believe your data is yours alone. Unlike "free" support services that harvest your information, Rahvion operates on a strict fiduciary model. We act in your best interest, protecting your digital estate with the highest standards of confidentiality and integrity.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-[#F5F5F5]">
                  <Shield size={18} className="text-[#D4AF37]" /> No Data Selling
                </li>
                <li className="flex items-center gap-3 text-[#F5F5F5]">
                  <Shield size={18} className="text-[#D4AF37]" /> Encrypted Remote Sessions
                </li>
                <li className="flex items-center gap-3 text-[#F5F5F5]">
                  <Shield size={18} className="text-[#D4AF37]" /> Strict Confidentiality Agreements
                </li>
                <li className="flex items-center gap-3 text-[#F5F5F5]">
                  <Shield size={18} className="text-[#D4AF37]" /> Transparent Operations
                </li>
              </ul>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B0B0D] backdrop-blur-xl border border-[#3A3F47] p-8 md:p-12 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Users className="text-[#D4AF37]" size={32} />
                <h2 className="text-3xl font-serif font-bold text-[#F5F5F5]">Why Choose Rahvion?</h2>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <div>
                    <h3 className="text-[#F5F5F5] font-bold text-lg">US-Based Expertise</h3>
                    <p className="text-[#A0A0A0] font-light">Our team is located in the Mid-Atlantic region, ensuring clear communication and reliable service hours.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <div>
                    <h3 className="text-[#F5F5F5] font-bold text-lg">Proactive vs. Reactive</h3>
                    <p className="text-[#A0A0A0] font-light">We don't just fix what breaks; we monitor your systems to prevent issues before they disrupt your life.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <div>
                    <h3 className="text-[#F5F5F5] font-bold text-lg">Family Focused</h3>
                    <p className="text-[#A0A0A0] font-light">We understand the unique dynamics of a connected home, from parental controls to smart home automation.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-8 md:p-12 rounded-2xl"
            >
              <h2 className="text-3xl font-serif font-bold text-[#F5F5F5] mb-6">Get in Touch</h2>
              <p className="text-[#A0A0A0] mb-8 font-light">
                Have questions or need immediate support? Our team is ready to help.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="tel:+14104298159" className="flex items-center justify-center gap-3 bg-[#D4AF37] text-[#0B0B0D] px-8 py-4 rounded-full font-bold hover:bg-[#F5F5F5] transition-colors">
                  <Phone size={20} /> Call Support: 410-429-8159
                </a>
                <a href="mailto:helpdesk@rahvion.com" className="flex items-center justify-center gap-3 bg-[#0B0B0D] text-[#F5F5F5] border border-[#3A3F47] px-8 py-4 rounded-full font-bold hover:border-[#D4AF37] transition-colors">
                  <Mail size={20} /> Email Us
                </a>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutUsPage;