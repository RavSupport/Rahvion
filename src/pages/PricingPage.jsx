import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Check, X, AlertCircle, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const PricingPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>IT Support Pricing | Home Tech Support Cost | Rahvion</title>
        <meta name="description" content="Transparent pricing for home IT support. Membership plans starting at $24.99/mo and one-time fix options available." />
        <meta name="keywords" content="IT Support Pricing, Tech Support Cost, Computer Repair Rates, Home IT Membership" />
      </Helmet>

      <section className="py-24 relative min-h-screen bg-[#0B0B0D]">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#F5F5F5]">
              Service <span className="text-[#D4AF37]">Rates</span>
            </h1>
            <p className="text-xl text-[#A0A0A0] mb-4 max-w-2xl mx-auto font-light">
              Simple, transparent pricing for non-members.
            </p>
             <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37] px-6 py-3 rounded-full text-[#D4AF37] text-sm font-bold mt-4 shadow-lg">
                <AlertCircle size={16} />
                Service rates apply to NON-MEMBERS ONLY. Members have NO service rates - all support included in membership.
             </div>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
             
             {/* Card 1: Members */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[#0B0B0D] backdrop-blur-xl border border-[#D4AF37] rounded-xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0B0B0D] text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30">
                      <Shield className="text-[#D4AF37]" size={24} />
                   </div>
                   <h3 className="font-serif text-2xl font-bold text-[#F5F5F5]">Members</h3>
                </div>
                <div className="mb-6">
                   <span className="text-4xl font-bold text-[#D4AF37]">$0</span>
                   <span className="text-[#A0A0A0] text-sm ml-2">for Emergencies</span>
                </div>
                <ul className="space-y-4 mb-8">
                   <li className="flex items-center gap-3 text-sm text-[#F5F5F5]">
                      <Check size={16} className="text-[#D4AF37]" /> All Remote Support Included
                   </li>
                   <li className="flex items-center gap-3 text-sm text-[#F5F5F5]">
                      <Check size={16} className="text-[#D4AF37]" /> Priority Response
                   </li>
                   <li className="flex items-center gap-3 text-sm text-[#F5F5F5]">
                      <Check size={16} className="text-[#D4AF37]" /> No Hidden Fees
                   </li>
                </ul>
                <Button className="w-full bg-[#D4AF37] text-[#0B0B0D] hover:bg-[#F5F5F5] font-bold">See Plans</Button>
             </motion.div>

             {/* Card 2: Non-Members Standard */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-[#0B0B0D] backdrop-blur-md border border-[#3A3F47] rounded-xl p-8 shadow-lg"
             >
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-[#3A3F47]/30 rounded-lg border border-[#3A3F47]">
                      <Clock className="text-[#A0A0A0]" size={24} />
                   </div>
                   <h3 className="font-serif text-2xl font-bold text-[#F5F5F5]">Non-Members</h3>
                </div>
                <div className="mb-6">
                   <span className="text-4xl font-bold text-[#F5F5F5]">$100</span>
                   <span className="text-[#A0A0A0] text-sm ml-2">First Hour (Min)</span>
                </div>
                <p className="text-sm text-[#A0A0A0] mb-6 border-b border-[#3A3F47] pb-4">
                   Standard rate thereafter: $89.99/hour + tax.
                </p>
                 <ul className="space-y-4 mb-8">
                   <li className="flex items-center gap-3 text-sm text-[#A0A0A0]">
                      <Check size={16} className="text-[#A0A0A0]" /> One-Time Fixes
                   </li>
                   <li className="flex items-center gap-3 text-sm text-[#A0A0A0]">
                      <Check size={16} className="text-[#A0A0A0]" /> No Commitment
                   </li>
                   <li className="flex items-center gap-3 text-sm text-[#A0A0A0]">
                      <Check size={16} className="text-[#A0A0A0]" /> Standard Scheduling
                   </li>
                </ul>
                <Button variant="outline" className="w-full border-[#3A3F47] text-[#F5F5F5] hover:bg-[#3A3F47]">Book Session</Button>
             </motion.div>

             {/* Card 3: After Hours */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-[#0B0B0D] backdrop-blur-md border border-[#3A3F47] rounded-xl p-8 shadow-lg"
             >
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-[#3A3F47]/30 rounded-lg border border-[#3A3F47]">
                      <Zap className="text-[#A0A0A0]" size={24} />
                   </div>
                   <h3 className="font-serif text-2xl font-bold text-[#F5F5F5]">After-Hours</h3>
                </div>
                <div className="mb-6">
                   <span className="text-4xl font-bold text-[#F5F5F5]">$100</span>
                   <span className="text-[#A0A0A0] text-sm ml-2">First Hour (Min)</span>
                </div>
                <p className="text-sm text-[#A0A0A0] mb-6 border-b border-[#3A3F47] pb-4">
                   6:00 PM – 8:00 AM ET, Weekends, Holidays. Non-Members Only.
                </p>
                 <ul className="space-y-4 mb-8">
                   <li className="flex items-center gap-3 text-sm text-[#A0A0A0]">
                      <Check size={16} className="text-[#A0A0A0]" /> Emergency Support
                   </li>
                   <li className="flex items-center gap-3 text-sm text-[#A0A0A0]">
                      <Check size={16} className="text-[#A0A0A0]" /> Off-Hours Access
                   </li>
                </ul>
                <Button variant="outline" className="w-full border-[#3A3F47] text-[#F5F5F5] hover:bg-[#3A3F47]">Request Emergency</Button>
             </motion.div>

          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto mb-20 bg-[#0B0B0D] border border-[#3A3F47] rounded-xl overflow-hidden shadow-xl">
             <div className="grid grid-cols-3 bg-[#0B0B0D] border-b border-[#3A3F47] p-6 text-center">
                <div className="font-bold text-[#A0A0A0] text-sm uppercase tracking-wider text-left pl-4">Service</div>
                <div className="font-bold text-[#A0A0A0] text-sm uppercase tracking-wider">Traditional Retail</div>
                <div className="font-bold text-[#D4AF37] text-sm uppercase tracking-wider bg-[#D4AF37]/5 rounded-lg py-1">Rahvion AI Edge</div>
             </div>
             
             {/* Rows */}
             {[
               { name: "Virus Removal", retail: "$150+", rahvion: "Included" },
               { name: "Scam Help", retail: "Hourly / None", rahvion: "Included" },
               { name: "New PC Setup", retail: "$100+", rahvion: "Included" },
               { name: "Troubleshooting", retail: "$80+/hr", rahvion: "Included" }
             ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-6 border-b border-[#3A3F47] last:border-0 hover:bg-[#3A3F47]/10 transition-colors">
                   <div className="text-[#F5F5F5] font-medium pl-4 flex items-center">{row.name}</div>
                   <div className="text-[#A0A0A0] text-center flex items-center justify-center font-mono">{row.retail}</div>
                   <div className="text-[#D4AF37] text-center font-bold flex items-center justify-center bg-[#D4AF37]/5 -my-6 py-6 border-x border-[#3A3F47]">{row.rahvion}</div>
                </div>
             ))}
          </div>

           <div className="text-center text-[#A0A0A0] text-sm font-light mt-12 max-w-3xl mx-auto">
              <p>All pricing is subject to change without notice. "Included" refers to services covered under active membership plans. Hardware costs are separate.</p>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default PricingPage;