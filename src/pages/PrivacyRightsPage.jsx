import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldAlert, Send, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const PrivacyRightsPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', type: 'Access', description: '', verified: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `MODPA Request: ${form.type}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nRequest Type: ${form.type}\nDescription: ${form.description}\nVerified: ${form.verified ? 'Yes' : 'No'}`;
    window.location.href = `mailto:privacy@rahvion.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast({ title: "Opening Email Client...", description: "Please complete the submission via your email client." });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Privacy Rights | Rahvion, LLC</title>
        <meta name="description" content="Exercise your rights under the Maryland Online Data Privacy Act." />
      </Helmet>

      <section className="py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <ShieldAlert size={48} className="mx-auto text-blue-400 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Exercise Your Maryland Privacy Rights
            </h1>
            <h2 className="text-xl text-white/90 mb-4">Your data is yours. We respect that.</h2>
            <p className="text-white/60">
              Rahvion complies with the Maryland Online Data Privacy Act (MODPA). Submit your request below, and we will respond within 45 days.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-2xl"
          >
            <div className="text-center text-white/70 mb-8 flex flex-col sm:flex-row items-center justify-center gap-2">
                <a href="tel:+14104298159" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    <Phone size={16} />
                    <span>Call 410-429-8159</span>
                </a>
                <span>or</span>
                <span>submit the form below.</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Full Name <span className="text-red-400">*</span></label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-[#0b0f19] border border-white/20 rounded-md p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Email Address <span className="text-red-400">*</span></label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-[#0b0f19] border border-white/20 rounded-md p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Request Type <span className="text-red-400">*</span></label>
                <select 
                  className="w-full bg-[#0b0f19] border border-white/20 rounded-md p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={form.type}
                  onChange={(e) => setForm({...form, type: e.target.value})}
                >
                  <option value="Access">Access My Data</option>
                  <option value="Correction">Correct My Data</option>
                  <option value="Deletion">Delete My Data</option>
                  <option value="Opt-Out">Opt-Out of Processing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Description</label>
                <textarea 
                  className="w-full bg-[#0b0f19] border border-white/20 rounded-md p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none h-32"
                  placeholder="Provide any additional details to help us locate your data..."
                  value={form.description}
                  onChange={(e) => setForm({...form, description: e.target.value})}
                />
              </div>
              <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <input 
                  type="checkbox" 
                  id="verify"
                  className="w-4 h-4 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-500 mt-1"
                  checked={form.verified}
                  onChange={(e) => setForm({...form, verified: e.target.checked})}
                />
                <label htmlFor="verify" className="text-sm text-white/70">
                  I certify that I am the consumer whose personal data is the subject of this request. I understand this request will be processed within 45 days per MODPA.
                </label>
              </div>
              
              <Button type="submit" disabled={!form.verified} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 disabled:opacity-50">
                Submit Request <Send size={18} className="ml-2" />
              </Button>
            </form>
          </motion.div>
          
          <div className="mt-12 text-center space-y-4">
             <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-sm text-white/60">
                <FileText className="inline-block mr-2 text-blue-400" size={16} />
                We do not sell your data. We do not share your data with third parties. Your privacy is our priority.
             </div>
             <div className="inline-block px-4 py-2 rounded-lg text-sm text-white/50">
              <span className="font-semibold text-white">Trust Anchor:</span> 18 Years of Corporate Systems Administration
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default PrivacyRightsPage;