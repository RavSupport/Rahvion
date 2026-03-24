import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, Phone, ShieldCheck, UserCheck, UserX, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';
import ClientIntakeForm from '@/components/ClientIntakeForm';

const ContactPage = () => {
  const [membershipStatus, setMembershipStatus] = useState(null); // 'yes', 'no', or null

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Rahvion | IT Support Phone Number | Tech Help Desk</title>
        <meta name="description" content="Contact Rahvion for home IT support. Support Line: 410-429-8159. We serve homeowners in Maryland, Virginia, DC, and beyond." />
        <meta name="keywords" content="Contact IT Support, Tech Support Phone Number, Rahvion Contact, Help Desk" />
      </Helmet>

      <section className="py-24 relative min-h-screen bg-[#0B0B0D]">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#F5F5F5]">
              Home Support <span className="text-[#D4AF37]">Intake</span>
            </h1>
            <p className="text-xl text-[#F5F5F5] font-medium mb-4">
              Your Personal IT Department
            </p>
            <div className="mt-6 flex flex-col items-center justify-center space-y-2 text-[#A0A0A0] text-sm font-medium tracking-wide">
              <div className="flex items-center space-x-2">
                 <ShieldCheck size={16} className="text-[#D4AF37]" />
                 <span>America's Personal IT Department</span>
              </div>
            </div>
             <p className="text-xs text-[#A0A0A0] mt-4 font-light">
               Services are best-effort and advisory. We respect your home and privacy.
            </p>
          </motion.div>

          {/* Membership Selector */}
          <div className="max-w-2xl mx-auto mb-16 bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47] text-center">
             <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-6">Are you currently a Member?</h2>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => setMembershipStatus('yes')}
                  className={`flex items-center justify-center px-8 py-4 rounded-xl border transition-all ${membershipStatus === 'yes' ? 'bg-[#D4AF37] text-[#0B0B0D] border-[#D4AF37] shadow-lg scale-105' : 'bg-[#0B0B0D] border-[#3A3F47] text-[#A0A0A0] hover:bg-[#0B0B0D]'}`}
                >
                   <UserCheck className="mr-2" /> Yes, I'm a Member
                </button>
                <button 
                  onClick={() => setMembershipStatus('no')}
                  className={`flex items-center justify-center px-8 py-4 rounded-xl border transition-all ${membershipStatus === 'no' ? 'bg-[#D4AF37] text-[#0B0B0D] border-[#D4AF37] shadow-lg scale-105' : 'bg-[#0B0B0D] border-[#3A3F47] text-[#A0A0A0] hover:bg-[#0B0B0D]'}`}
                >
                   <UserX className="mr-2" /> No, I'm not a Member
                </button>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 space-y-8 h-fit lg:sticky lg:top-24"
            >
              <div className="bg-[#0B0B0D] backdrop-blur-lg rounded-xl p-8 border border-[#3A3F47] shadow-xl">
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-6">Contact Us</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0B0B0D] flex items-center justify-center flex-shrink-0 border border-[#3A3F47]">
                      <Phone className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold">Support Line</h3>
                      <a href="tel:+14104298159" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors font-light">
                        410-429-8159
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0B0B0D] flex items-center justify-center flex-shrink-0 border border-[#3A3F47]">
                      <Phone className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold">Media Relations</h3>
                      <a href="tel:+14432197559" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors font-light">
                        443-219-7559
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0B0B0D] flex items-center justify-center flex-shrink-0 border border-[#3A3F47]">
                      <Mail className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold">Email</h3>
                      <a href="mailto:helpdesk@rahvion.com" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors font-light">
                        helpdesk@rahvion.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0B0B0D] flex items-center justify-center flex-shrink-0 border border-[#3A3F47]">
                      <Clock className="text-[#D4AF37]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold">Support Hours</h3>
                      <p className="text-[#A0A0A0] font-light">Mon-Fri: 9AM - 6PM</p>
                      <p className="text-[#A0A0A0] font-light">Sat: 10AM - 2PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0B0B0D] rounded-xl p-6 border border-[#3A3F47]">
                <h3 className="font-serif text-lg font-bold text-[#F5F5F5] mb-2">Member Priority</h3>
                <p className="text-[#A0A0A0] text-sm mb-4 font-light">
                  Existing members get priority access to our support team. If you're not a member, we'll help you as soon as a specialist is available.
                </p>
              </div>
            </motion.div>

            {/* Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-8"
            >
              <AnimatePresence mode="wait">
                {membershipStatus === null && (
                   <motion.div 
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="text-center py-20 bg-[#0B0B0D] border border-[#3A3F47] rounded-xl"
                   >
                      <p className="text-[#A0A0A0]">Please select your membership status above to proceed.</p>
                   </motion.div>
                )}

                {membershipStatus === 'yes' && (
                  <motion.div
                    key="member-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <ClientIntakeForm />
                  </motion.div>
                )}

                {membershipStatus === 'no' && (
                  <motion.div
                    key="non-member-info"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-[#0B0B0D] backdrop-blur-lg rounded-xl p-8 border border-[#3A3F47] text-center space-y-8"
                  >
                    <div className="w-20 h-20 bg-[#0B0B0D] rounded-full flex items-center justify-center mx-auto text-[#D4AF37] border border-[#3A3F47]">
                        <Home size={32} />
                    </div>
                    <div>
                       <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-4">Not a member yet? We can still help.</h2>
                       <p className="text-[#A0A0A0] text-lg max-w-lg mx-auto font-light">
                         We offer one-time support sessions for non-members. Get immediate help for your home tech issue without a monthly commitment.
                       </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                       <a href="mailto:helpdesk@rahvion.com?subject=One-Time%20Residential%20Support%20Request">
                          <Button size="lg" className="bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] px-8 py-6 w-full sm:w-auto font-medium tracking-wide">
                             Request One-Time Help
                          </Button>
                       </a>
                       <a href="tel:+14104298159">
                          <Button size="lg" variant="outline" className="border-[#3A3F47] text-[#F5F5F5] hover:bg-[#3A3F47] px-8 py-6 w-full sm:w-auto font-medium tracking-wide">
                             Call Support: 410-429-8159
                          </Button>
                       </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="mt-20 text-center text-[#A0A0A0] text-sm max-w-2xl mx-auto border-t border-[#3A3F47] pt-8 font-light">
            <p>Rahvion provides technical support, education, and professional audits for residential clients. We are not a cyber-insurance provider or legal entity.</p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;