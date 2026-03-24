import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertTriangle, Scale, Mail } from 'lucide-react';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Terms of Service | Rahvion, LLC</title>
        <meta name="description" content="Terms of Service for Rahvion, LLC. Please read these terms carefully before using our services." />
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
              Terms of <span className="text-[#D4AF37]">Service</span>
            </h1>
            <p className="text-xl text-[#A0A0A0] font-light">
              Effective Date: February 7, 2026
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* 1. Acceptance of Terms */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/30">
                  <FileText className="text-[#D4AF37]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">1. Acceptance of Terms</h2>
              </div>
              <div className="text-[#A0A0A0] space-y-4 font-light leading-relaxed">
                <p>
                  By accessing or using the website and services provided by Rahvion, LLC ("Rahvion", "we", "us", or "our"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site or our services.
                </p>
                <p>
                  These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </div>
            </motion.div>

            {/* 2. Intellectual Property */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/30">
                  <Shield className="text-[#D4AF37]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">2. Intellectual Property</h2>
              </div>
              <div className="text-[#A0A0A0] space-y-4 font-light leading-relaxed">
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Rahvion, LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Rahvion, LLC.
                </p>
              </div>
            </motion.div>

            {/* 3. Acceptable Use */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/30">
                  <AlertTriangle className="text-[#D4AF37]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">3. Acceptable Use</h2>
              </div>
              <div className="text-[#A0A0A0] space-y-4 font-light leading-relaxed">
                <p>You agree not to use the Service:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>In any way that violates any applicable national or international law or regulation.</li>
                  <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                  <li>To impersonate or attempt to impersonate Rahvion, a Rahvion employee, another user, or any other person or entity.</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Rahvion or users of the Service or expose them to liability.</li>
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
                  <Scale className="text-[#D4AF37]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">4. Limitation of Liability</h2>
              </div>
              <div className="text-[#A0A0A0] space-y-4 font-light leading-relaxed">
                <p>
                  In no event shall Rahvion, LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
                </p>
              </div>
            </motion.div>

            {/* 5. Governing Law & Jurisdiction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/30">
                  <Scale className="text-[#D4AF37]" size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">5. Governing Law & Jurisdiction</h2>
              </div>
              <div className="text-[#A0A0A0] space-y-4 font-light leading-relaxed">
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the State of Maryland, United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
                <p className="font-medium text-[#D4AF37]">
                  Venue for any disputes shall be exclusively in Harford County, Maryland.
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
               <Mail className="text-[#D4AF37] mx-auto mb-4" size={32} />
               <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-4">Contact for Legal Inquiries</h2>
               <p className="text-[#A0A0A0] mb-6">
                  If you have any questions about these Terms, please contact us.
               </p>
               <a href="mailto:legal@rahvion.com">
                  <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                     legal@rahvion.com
                  </Button>
               </a>
            </motion.div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TermsOfService;