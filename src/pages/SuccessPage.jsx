import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, HelpCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const SuccessPage = () => {
  const faqs = [
    { q: "When does my service start?", a: "Immediately upon onboarding. Your account is active once setup is complete." },
    { q: "How do I contact support?", a: "Email helpdesk@rahvion.com. Your email is now whitelisted for priority response." },
    { q: "What's included in my Core plan?", a: "Please refer to your welcome email for the full advisory feature list of the Core plan." },
    { q: "Can I upgrade to a consultation-based tier?", a: "Yes, you can request a consultation for Active Support, Shield Plus, or Home Command at any time." },
    { q: "What if I have questions?", a: "We are here to help. Just reply to your welcome email." }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Success | Rahvion, LLC</title>
      </Helmet>

      <section className="min-h-screen flex flex-col items-center justify-center relative py-20">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <ShieldCheck size={48} className="text-green-400" />
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-4">Request Received</h1>
            <h2 className="text-2xl text-white/80 mb-8">Welcome to the Personal IT Department</h2>
            
            {/* Order Confirmation Message */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8 text-left max-w-md mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10">
                    <ShieldCheck size={100} />
                </div>
                <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Thank you for your interest in Rahvion Core. We have received your request.
                    </p>
                    <p>
                      Our team will process your application and send an official invoice and onboarding packet to your email address shortly.
                    </p>
                    <div className="text-sm border-t border-white/10 pt-4 mt-4 text-white/60">
                       Look for an email from <strong>helpdesk@rahvion.com</strong>
                    </div>
                </div>
            </div>

            <div className="bg-blue-900/20 rounded-xl p-8 border border-blue-500/30 text-center mb-8">
               <h3 className="text-lg font-bold text-blue-200 mb-2">Next Steps</h3>
               <p className="text-blue-100/80 mb-6 flex flex-col sm:flex-row items-center justify-center gap-1">
                 Call <a href="tel:+14432197559" className="text-blue-200 hover:underline flex items-center gap-1"><Phone size={16} /> (443) 219-7559</a> or email helpdesk@rahvion.com if you don't receive your welcome packet within 2 hours.
               </p>
               <a href="mailto:helpdesk@rahvion.com?subject=Onboarding%20Request&body=Please%20start%20my%20onboarding%20process.">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg shadow-lg">
                    Check Onboarding Status <Mail className="ml-2" size={20} />
                </Button>
               </a>
            </div>
            
            <p className="text-white/60 text-sm mb-4">
               All services are delivered on a best-effort basis. You retain responsibility for your systems, data, and backups.
            </p>

            <p className="text-white/60 italic mb-12">
                "You're now part of a community of households that have chosen enterprise-grade guidance for their homes."
            </p>

            <div className="text-left space-y-4 border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                  <HelpCircle size={20}/> Frequently Asked Questions
              </h3>
              {faqs.map((faq, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="font-semibold text-white text-sm mb-1">{faq.q}</h4>
                      <p className="text-white/60 text-xs">{faq.a}</p>
                  </div>
              ))}
            </div>

            <div className="mt-12 text-sm text-white/40 font-medium">
               18 Years of Corporate Systems Administration Experience
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default SuccessPage;