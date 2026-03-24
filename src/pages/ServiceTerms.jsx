import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Siren, HardDrive, Cpu, AlertOctagon, CheckSquare, HelpCircle } from 'lucide-react';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';

const ServiceTerms = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Service Terms | Rahvion, LLC</title>
        <meta name="description" content="Specific Service Terms regarding emergencies, backups, hardware limitations, and liability for Rahvion support services." />
      </Helmet>

      <section className="py-24 relative min-h-screen bg-[#0B0B0D]">
        <MathGridBackground />
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#F5F5F5]">
              Service <span className="text-[#D4AF37]">Terms</span>
            </h1>
            <p className="text-xl text-[#A0A0A0] font-light">
              Specific conditions regarding our technical support services.
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* 1. Emergency Definition */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/30">
                  <Siren className="text-[#D4AF37]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">1. Emergency Definition</h2>
              </div>
              <div className="text-[#A0A0A0] space-y-4 font-light leading-relaxed">
                <p>
                  For the purposes of determining billing rates and response times, Rahvion defines a "True Emergency" strictly as an event that meets one or more of the following criteria:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                   <li><strong>Complete Network Outage:</strong> Total loss of internet connectivity preventing all work or communication at the primary residence/office.</li>
                   <li><strong>Active Security Breach:</strong> Confirmed unauthorized access, active ransomware infection, or immediate identity theft in progress.</li>
                   <li><strong>Critical System Failure:</strong> Total failure of a primary work device preventing time-sensitive, deadline-critical work from being completed.</li>
                </ul>
                <p className="mt-4 p-4 bg-[#D4AF37]/10 border-l-2 border-[#D4AF37] rounded-r-md italic">
                   Note: Convenience issues (e.g., printer jams, slow Wi-Fi in a guest room, forgotten passwords for non-critical accounts) are NOT classified as emergencies and will be scheduled during standard business hours or billed at non-emergency after-hours rates.
                </p>
              </div>
            </motion.div>

            {/* 2. Backup Liability */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/30">
                  <HardDrive className="text-[#D4AF37]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">2. Backup Liability</h2>
              </div>
              <div className="text-[#A0A0A0] space-y-4 font-light leading-relaxed">
                <p>
                   <strong>Client Responsibility:</strong> The Client acknowledges that they are solely responsible for maintaining current, verified backups of their data. While Rahvion may advise on backup strategies or assist in configuring backup software, Rahvion does not guarantee the integrity or recoverability of any data.
                </p>
                <p>
                   <strong>Disclaimer:</strong> Rahvion shall not be held liable for any data loss, corruption, or inability to restore data, regardless of the cause, including but not limited to hardware failure, software corruption, malware, or human error during support sessions.
                </p>
              </div>
            </motion.div>

            {/* 3. Hardware Limitation Scope */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/30">
                  <Cpu className="text-[#D4AF37]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">3. Hardware Limitation Scope</h2>
              </div>
              <div className="text-[#A0A0A0] space-y-4 font-light leading-relaxed">
                <p>
                   Rahvion provides advisory and software-level support. We do not perform physical hardware repairs (e.g., soldering, screen replacement, internal component replacement) on-site.
                </p>
                <p>
                   For hardware failures, our scope of service is limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                   <li>Diagnosing the likely hardware fault.</li>
                   <li>Facilitating warranty claims with the manufacturer (via Warranty Concierge).</li>
                   <li>Recommending replacement hardware.</li>
                   <li>Assisting with data migration to new hardware if the old storage medium is readable.</li>
                </ul>
              </div>
            </motion.div>

            {/* 4. Limitation of Liability */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/30">
                  <AlertOctagon className="text-[#D4AF37]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">4. Limitation of Liability (Cap)</h2>
              </div>
              <div className="text-[#A0A0A0] space-y-4 font-light leading-relaxed">
                <p>
                   TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RAHVION'S TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICES, WHETHER IN CONTRACT, TORT, OR OTHERWISE, SHALL NOT EXCEED THE GREATER OF:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-bold text-[#F5F5F5]">
                   <li>(A) FIFTY U.S. DOLLARS ($50.00 USD); OR</li>
                   <li>(B) THE TOTAL AMOUNT PAID BY YOU TO RAHVION FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM DURING THE SIX (6) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.</li>
                </ul>
              </div>
            </motion.div>

            {/* 5. Service Approval Requirement */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/30">
                  <CheckSquare className="text-[#D4AF37]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">5. Service Approval Requirement</h2>
              </div>
              <div className="text-[#A0A0A0] space-y-4 font-light leading-relaxed">
                <p>
                   <strong>No Surprise Bills:</strong> Rahvion will never commence billable work without your explicit prior approval.
                </p>
                <p>
                   Before any billable session begins, or before any hourly charges accrue beyond a pre-agreed scope, we will provide an estimate of time and cost. Work will only proceed once you have verbally or digitally authorized the charges.
                </p>
              </div>
            </motion.div>

             {/* 6. Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47] text-center"
            >
               <HelpCircle className="text-[#D4AF37] mx-auto mb-4" size={32} />
               <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-4">Questions about Service Terms?</h2>
               <p className="text-[#A0A0A0] mb-6">
                  Our support team is happy to clarify any of these policies.
               </p>
               <a href="mailto:support@rahvion.com">
                  <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                     support@rahvion.com
                  </Button>
               </a>
            </motion.div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServiceTerms;