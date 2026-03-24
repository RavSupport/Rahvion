import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const CookiesPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Cookie Policy - Rahvion</title>
      </Helmet>

      <section className="py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-white text-center">Cookie Policy</h1>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10 space-y-8 text-white/70 mt-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Minimal Usage</h2>
                <p className="leading-relaxed">
                  We believe in digital minimalism. We use essential cookies necessary for the operation of this website (e.g., login sessions, cart functionality).
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Analytics</h2>
                <p className="leading-relaxed">
                  We use privacy-preserving analytics to understand site performance. We do not sell your browsing history to third-party advertisers.
                </p>
              </section>

              <section className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                 <h2 className="text-xl font-bold text-white mb-2">Residential Focus</h2>
                 <p>Tracking is limited to improving our residential support capabilities. We do not build commercial advertising profiles from your data.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CookiesPage;