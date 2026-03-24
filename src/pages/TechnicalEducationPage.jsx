import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, Lock, Network, Video, CheckSquare, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const TechnicalEducationPage = () => {
  const levels = [
    {
      level: 'Level 1: Foundations',
      access: 'Core Members',
      description: 'Essential digital hygiene education for every household member.',
      topics: [
        'Multi-Factor Authentication (MFA) Mastery',
        'AI Scam Detection Guidance',
        'System Health Guidance: Reading Vital Signs',
        'Password Hygiene & Credential Management'
      ],
      icon: ShieldCheck,
      color: 'blue'
    },
    {
      level: 'Level 2: Intermediate',
      access: 'Shield Plus Members',
      description: 'Advanced privacy protection guidance and data sovereignty.',
      topics: [
        'Data Privacy Law Fundamentals (MODPA, CCPA)',
        'Network Segmentation for Home Offices',
        'Digital Asset Management & Legacy Planning',
        'Metadata Awareness & Photo Privacy'
      ],
      icon: Lock,
      color: 'purple'
    },
    {
      level: 'Level 3: Advanced',
      access: 'Home Command Members',
      description: 'Infrastructure architecture and autonomous logic guidance.',
      topics: [
        'Home Network Architecture & Optimization',
        'AI Agent Safety & Autonomous Logic Guidance',
        'Compliance Auditing Guidance for Regulated Industries',
        'Infrastructure Resilience & Disaster Recovery'
      ],
      icon: Network,
      color: 'emerald'
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Technical Education | Rahvion, LLC</title>
        <meta name="description" content="Technical Education provided by Rahvion, LLC. Master your digital life with our structured learning modules." />
      </Helmet>

      <section className="py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Education
            </h1>
            <h2 className="text-2xl text-white mb-4">Master Your Digital Life</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Education is the foundation of confidence. We teach you to understand, not just use.
              <br/><span className="text-sm opacity-60">*All educational content is for advisory purposes only.</span>
            </p>
          </motion.div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {levels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-xl"
              >
                {/* Level Identifier */}
                <div className={`p-8 bg-${level.color}-900/20 md:w-1/3 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/10`}>
                  <div className="bg-white/10 p-4 rounded-full mb-4">
                      <level.icon size={32} className={`text-${level.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{level.level}</h3>
                  <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-white/80 mb-2">
                    {level.access}
                  </span>
                  <p className="text-sm text-white/60">{level.description}</p>
                </div>
                
                {/* Content */}
                <div className="p-8 md:w-2/3">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <BookOpen size={20} className="text-white/60"/> Curriculum Modules
                  </h4>
                  <div className="grid grid-cols-1 gap-4 mb-8">
                     {level.topics.map((topic, i) => (
                       <div key={i} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/5">
                         <div className={`mt-1 w-2 h-2 rounded-full bg-${level.color}-400`} />
                         <span className="text-white/80 text-sm font-medium">{topic}</span>
                       </div>
                     ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                      <span className="text-xs text-white/50 flex items-center gap-1">
                        <Video size={14}/> Video Previews
                      </span>
                      <span className="text-xs text-white/50 flex items-center gap-1">
                        <CheckSquare size={14}/> Downloadable Checklists
                      </span>
                      <span className="text-xs text-white/50 flex items-center gap-1">
                        <Brain size={14}/> Interactive Quizzes
                      </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
             <div className="inline-block bg-white/5 px-6 py-3 rounded-lg border border-white/10 text-sm text-white/60 mb-8">
                <span className="font-semibold text-white">Trust Anchor:</span> 18 Years of Corporate Systems Administration
             </div>
             <br />
             <a href="mailto:helpdesk@rahvion.com?subject=Core%20Plan%20Signup%20-%20%2424.99%2Fmo">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg rounded-full">
                Enroll in Technical Education via Membership
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TechnicalEducationPage;