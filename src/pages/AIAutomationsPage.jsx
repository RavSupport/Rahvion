import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Brain, Shield, UserPlus, Zap, Check, Cpu } from 'lucide-react';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const AIAutomationsPage = () => {
  const automations = [
    {
      title: "Productivity Pilot",
      subtitle: "For Home Office & Professionals",
      icon: Brain,
      description: "Supercharge your home office with AI that handles the busy work.",
      features: [
        "Local AI LLM Setup (Private Chatbots)",
        "AI Automation Orchestration",
        "Meeting & Voice Intelligence",
        "Automated Scheduling Assistants"
      ]
    },
    {
      title: "Digital Bodyguard",
      subtitle: "Security & Scam Defense",
      icon: Shield,
      description: "Relentless protection against modern AI-driven scams and threats.",
      features: [
        "AI Phishing Analysis",
        "Deepfake Verification Tools",
        "On-Device Behavioral Monitoring",
        "Scam Call Shielding & Auto-Blocking"
      ]
    },
    {
      title: "Senior Tech Concierge",
      subtitle: "Safety & Simplicity",
      icon: UserPlus,
      description: "Making technology accessible and safe for seniors through voice and AI.",
      features: [
        "Voice-First Interfaces (No Typing)",
        "AI Memory Assistants & Reminders",
        "Safe-Browsing AI Guardrails",
        "Simplified Device Modes"
      ]
    },
    {
      title: "Hardware Optimizer",
      subtitle: "Performance & Longevity",
      icon: Zap,
      description: "Keep your devices running like new without constant manual tuning.",
      features: [
        "AI-Driven Update Management",
        "Smart Resource Allocation",
        "AI Photo/Video Deduplication",
        "Predictive Hardware Health Alerts"
      ]
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>AI Automations for Home | Smart Home AI | Rahvion</title>
        <meta name="description" content="Explore Rahvion's AI automation categories: Productivity, Security, Senior Care, and Hardware Optimization. Included in all memberships." />
        <meta name="keywords" content="AI Home Automation, Personal AI, Smart Home Tech, AI Security, Residential AI" />
      </Helmet>

      <section className="py-24 relative min-h-screen bg-[#0B0B0D]">
        <MathGridBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                <Cpu size={16} />
                <span className="text-sm font-bold uppercase tracking-wider">Included in Every Membership</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#F5F5F5]">
              AI <span className="text-[#D4AF37]">Automations</span>
            </h1>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto font-light leading-relaxed">
              We don't just fix computers; we deploy personal AI to make your home smarter, safer, and more efficient.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {automations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#0B0B0D] backdrop-blur-xl border border-[#3A3F47] hover:border-[#D4AF37]/50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                   <div className="p-4 bg-[#0B0B0D] rounded-xl border border-[#3A3F47] group-hover:border-[#D4AF37] transition-colors shadow-md">
                      <item.icon size={32} className="text-[#D4AF37]" />
                   </div>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-1 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider mb-4">{item.subtitle}</p>
                <p className="text-[#A0A0A0] mb-8 font-light leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-3">
                   {item.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#F5F5F5]">
                         <Check size={16} className="text-[#D4AF37] mt-1 shrink-0" />
                         <span className="font-light">{feat}</span>
                      </li>
                   ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <p className="text-[#A0A0A0] max-w-3xl mx-auto text-sm font-light">
                *AI Automations are deployed based on your specific hardware and needs. Some features require compatible devices. Our team will audit your setup to determine the best AI strategy for your home.
             </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AIAutomationsPage;