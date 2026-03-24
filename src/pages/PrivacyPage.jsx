import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const PrivacyPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Privacy Policy - Rahvion</title>
        <meta name="description" content="Rahvion's privacy policy. Data governance standards for our residential clients." />
      </Helmet>

      <section className="py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-white text-center">Privacy Policy</h1>
            <p className="text-white/60 text-center mb-12">Last Updated: January 2026</p>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10 space-y-8 text-white/70">
              
              <section className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                 <h2 className="text-xl font-bold text-white mb-2">Residential Use Only</h2>
                 <p>All Rahvion services, including IT governance and digital architecture, are designed exclusively for personal and household use. Data collected is strictly for the purpose of supporting residential environments.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Risk Reduction, Not Absolute Prevention</h2>
                <p className="leading-relaxed">
                  We employ enterprise-grade methodologies to protect your privacy and data. However, in the digital age, no system can guarantee 100% immunity from sophisticated threats. Our role is to significantly reduce your attack surface and provide rapid response capabilities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information Collection</h2>
                <p className="leading-relaxed mb-4">
                  We collect information necessary to provide IT governance and support:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact details (Name, Email, Phone, Address) for billing and support dispatch.</li>
                  <li>Technical specifications of your devices for inventory management.</li>
                  <li>Network configuration details necessary for remote troubleshooting.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Usage & Governance</h2>
                <p className="leading-relaxed">
                  We do not sell your data. We act as a fiduciary for your digital estate. Your information is used solely to:
                  <br/>1. Verify your identity (Anti-Fraud).
                  <br/>2. Diagnose technical issues.
                  <br/>3. Communicate service updates and security alerts.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default PrivacyPage;