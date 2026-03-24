import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, MessageCircle, Monitor, Shield, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: 'Join Core',
      subtitle: '$25/month',
      description: 'Sign up for Rahvion Core membership. Gain immediate access to our helpdesk and governance framework. No long-term contracts.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: 2,
      icon: MessageCircle,
      title: 'Reach Out Anytime',
      subtitle: 'Unlimited Support',
      description: 'Email or chat with us whenever an issue arises. From "Is this email a scam?" to "My printer won\'t connect", we are your first line of defense.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: 3,
      icon: Monitor,
      title: 'Remote Resolution',
      subtitle: 'Hands-off Fixing',
      description: 'We securely connect to your device to diagnose and fix issues while you watch. Fast resolution without a stranger entering your home.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      number: 4,
      icon: Shield,
      title: 'Prevention Built-In',
      subtitle: 'Quarterly Audits',
      description: 'We don\'t just fix breaks. We perform quarterly check-ins to update software, check backups, and harden security settings.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      number: 5,
      icon: Eye,
      title: 'Governance',
      subtitle: 'Continuous Monitoring',
      description: 'Ongoing infrastructure management. We act as the CIO for your home, ensuring your digital estate remains stable, secure, and private.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>How It Works - The Rahvion Process</title>
        <meta name="description" content="Our 5-step process for personal IT governance: Join, Reach Out, Resolve, Prevent, and Govern. Stability for your digital life." />
      </Helmet>

      <section className="py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Operational Workflow
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From reactive support to proactive governance.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent -translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center md:justify-between ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-2xl relative z-10 hover:border-white/20 transition-colors`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                        <step.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                        <span className="text-sm font-semibold text-blue-300 uppercase tracking-wide">{step.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-white/70 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Number Circle (Center) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0b0f19] border-2 border-white/20 flex items-center justify-center z-20 hidden md:flex">
                    <span className="text-sm font-bold text-white">{step.number}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <a href="mailto:helpdesk@rahvion.com?subject=Core%20Plan%20Signup%20-%20%2425%2Fmo">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 text-lg rounded-full">
                Begin Governance
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HowItWorksPage;