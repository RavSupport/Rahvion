import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Lock, AlertCircle, Wrench, Users, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const MembershipsPage = () => {
  const tiers = [
    {
      name: 'Rahvion Core',
      price: '$24.99/mo + Tax',
      description: 'Essential support for individuals.',
      icon: Shield,
      features: [
        'Unlimited Remote Support',
        'AI Virus & Malware Defense',
        'Proactive Scam Email Filtering',
        'Weekly PC Health Checks',
        'Proactive Updating and Patching',
        'AI Automations Included',
        'Educational Resources Included',
        'True Emergencies: $0 Included',
      ],
      comparison: {
        devices: '1 Device',
        response: 'Standard Support'
      },
      ctaText: 'Get Started',
      link: 'https://buy.stripe.com/4gMdR9eooaGYgEwa7d6kg00',
      isLink: true,
      highlight: true,
      label: 'Most Popular'
    },
    {
      name: 'Rahvion Active Family',
      price: 'Inquire for Access',
      description: 'Proactive care for the whole household.',
      icon: Users,
      features: [
        'Unlimited Remote Support',
        'AI Virus & Malware Defense',
        'Proactive Scam Email Filtering',
        'Weekly PC Health Checks',
        'Proactive Updating and Patching',
        'AI Automations Included',
        'Educational Resources Included',
        'True Emergencies: $0 Included',
      ],
      comparison: {
        devices: 'Up to 5 Devices',
        response: 'Priority 2-Hour Response'
      },
      ctaText: 'Inquire for Access',
      link: 'mailto:support@rahvion.com?subject=Active%20Family%20Inquiry',
      isLink: false,
      highlight: false
    },
    {
      name: 'Rahvion Secure',
      price: 'Inquire for Access',
      description: 'Privacy and protection for your digital life.',
      icon: Lock,
      features: [
        'Unlimited Remote Support',
        'AI Virus & Malware Defense',
        'Proactive Scam Email Filtering',
        'Weekly PC Health Checks',
        'Proactive Updating and Patching',
        'AI Automations Included',
        'Educational Resources Included',
        'True Emergencies: $0 Included',
      ],
      comparison: {
        devices: 'Up to 10 Devices',
        response: '24/7 Threat Detection'
      },
      ctaText: 'Inquire for Access',
      link: 'mailto:support@rahvion.com?subject=Secure%20Plan%20Inquiry',
      isLink: false,
      highlight: false
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Family IT Membership Plans | Rahvion Home Tech Support</title>
        <meta name="description" content="Affordable IT membership plans for homeowners and families. Get ongoing support, protection, and peace of mind for your personal technology. Plans start at $24.99/mo." />
        <meta name="keywords" content="Family IT Support, Tech Membership, Home Tech Support Plans, Personal IT Department" />
      </Helmet>

      <section className="py-24 relative bg-[#0B0B0D]">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#F5F5F5]">
              Family <span className="text-[#D4AF37]">Support Plans</span>
            </h1>
            <p className="text-xl text-[#A0A0A0] mb-4 font-light">
              Peace of mind for your home technology. Choose the level of care your household needs.
            </p>
          </motion.div>
          
          {/* One-Time Fix Callout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto mb-20 bg-gradient-to-r from-[#0B0B0D] to-[#1a1f2e] border border-[#D4AF37] rounded-2xl p-8 md:p-10 shadow-lg shadow-[#D4AF37]/5 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
            <div className="flex-1 z-10">
                <div className="flex items-center gap-3 mb-2">
                    <Wrench className="text-[#D4AF37]" size={24} />
                    <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">Need a One-Time Fix?</h2>
                </div>
                <h3 className="text-xl text-[#D4AF37] font-medium mb-3">Professional remote support for $89.99</h3>
                <p className="text-[#A0A0A0] font-light">
                    Not ready for a membership? Get immediate expert help for a single issue. We'll connect remotely, diagnose the problem, and fix it while you watch.
                </p>
            </div>
            <a href="mailto:support@rahvion.com?subject=One-Time%20Support%20Request" className="z-10 w-full md:w-auto">
                <Button className="w-full md:w-auto bg-[#D4AF37] hover:bg-[#F5F5F5] text-[#0B0B0D] font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
                    Get One-Time Support
                </Button>
            </a>
          </motion.div>

          {/* Pricing Grid - Updated to 3 tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {tiers.map((tier, index) => {
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative flex flex-col bg-[#0B0B0D] backdrop-blur-lg rounded-xl p-8 border ${
                    tier.highlight ? 'border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/10' : 'border-[#3A3F47] hover:border-[#D4AF37]/30 hover:shadow-2xl'
                  } transition-all duration-300`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0B0B0D] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg transform">
                      {tier.label}
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 rounded-xl bg-[#0B0B0D] border border-[#3A3F47] flex items-center justify-center mb-6`}>
                    <tier.icon size={28} className="text-[#D4AF37]" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-2">{tier.name}</h3>
                  <p className="text-sm text-[#A0A0A0] mb-6 h-10 font-light">{tier.description}</p>
                  
                  <div className="mb-8">
                    <p className="text-2xl text-[#F5F5F5] font-bold leading-relaxed">
                      {tier.price}
                    </p>
                  </div>

                  <div className="mb-8 p-4 bg-[#0B0B0D]/50 rounded-lg border border-[#3A3F47] space-y-2">
                     <div className="flex items-center justify-between text-sm">
                        <span className="text-[#A0A0A0] flex items-center gap-2"><Monitor size={14}/> Coverage</span>
                        <span className="text-[#F5F5F5] font-semibold">{tier.comparison.devices}</span>
                     </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#A0A0A0] flex items-center gap-2"><Zap size={14}/> Response</span>
                        <span className="text-[#F5F5F5] font-semibold">{tier.comparison.response}</span>
                     </div>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3 text-sm">
                          <Check size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span className="text-[#A0A0A0] font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 mt-auto">
                    <a 
                        href={tier.link} 
                        target={tier.isLink ? "_blank" : undefined}
                        rel={tier.isLink ? "noopener noreferrer" : undefined}
                        className="w-full block"
                    >
                        <Button
                            className={`w-full py-6 text-lg rounded-xl ${tier.highlight ? 'bg-[#D4AF37] text-[#0B0B0D] hover:bg-[#F5F5F5]' : 'bg-[#0B0B0D] text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37]/10'} font-bold transition-colors`}
                        >
                            {tier.ctaText}
                        </Button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center text-[#A0A0A0] text-sm font-light mt-8">
              <p>All pricing is subject to change without notice due to economic factors.</p>
          </div>

          {/* Disclaimer */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="flex items-start gap-4 p-6 bg-[#0B0B0D]/50 rounded-xl border border-[#3A3F47]">
               <AlertCircle className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
               <div>
                  <h3 className="font-serif text-lg font-bold text-[#F5F5F5] mb-2">Residential Service Guarantee</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed font-light">
                    Rahvion is dedicated to the unique needs of residential environments. Our services are designed to be non-intrusive and respectful of your privacy. We provide advisory support for consumer electronics, personal computers, and home networks. We do not perform structural modifications to your home. You remain the owner and administrator of your family's data and devices at all times.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default MembershipsPage;