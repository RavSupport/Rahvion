import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const TermsPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Terms of Service - Rahvion</title>
        <meta name="description" content="Terms of Service. Rahvion is an advisory service, not insurance." />
      </Helmet>

      <section className="py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-white text-center">Terms of Service</h1>
            <p className="text-white/60 text-center mb-12">Last Updated: January 2026</p>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10 space-y-8 text-white/70">
              
              <section className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                 <h2 className="text-xl font-bold text-white mb-2">Advisory Service Notice</h2>
                 <p className="text-white/90 font-medium">Rahvion is an advisory and technical support service. We are NOT an insurance provider. We do not offer financial reimbursement for data loss, hardware failure, or cyber theft.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Residential Use Only</h2>
                <p className="leading-relaxed">
                  Services are strictly for residential households. Commercial use, resale of services, or enterprise deployment without a specific commercial contract is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  <strong className="text-white">Risk Reduction, Not Absolute Prevention.</strong> By using our services, you acknowledge that IT security is an evolving landscape. Rahvion is not liable for data breaches, ransomware attacks, or hardware failures that occur despite best-effort preventative measures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Subscription & Billing</h2>
                <p className="leading-relaxed">
                  Memberships are billed monthly. You may cancel at any time. Cancellations become effective at the end of the current billing cycle. No pro-rated refunds are issued for partial months.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TermsPage;