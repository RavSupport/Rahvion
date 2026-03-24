import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, Check, AlertTriangle, CreditCard, Clock, 
  FileSignature, Send, User, Mail, Phone, FileText, ArrowRight, Flag 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const NonMemberSupportPage = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: ''
  });

  const [checkboxes, setCheckboxes] = useState({
    residential: false,
    access: false,
    advisory: false,
    billing: false,
    credentials: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes(prev => ({ ...prev, [name]: checked }));
  };

  const isFormValid = 
    formData.name.trim() !== '' && 
    formData.email.trim() !== '' && 
    Object.values(checkboxes).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const subject = "Non-Member Support Request - Payment Required";
    const body = `
Non-Member Support Request
--------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Timestamp: ${new Date().toISOString()}

Issue Summary:
${formData.summary || 'No details provided'}

Client Authorizations:
[x] I confirm this is residential or home-office support only
[x] I authorize Rahvion to remotely access my device for diagnostics and support
[x] I understand services are best-effort and advisory with no guarantees
[x] I authorize billing of $89.99 + tax with a one-hour minimum
[x] I will change or revoke any credentials shared after service completion
    `;

    window.location.href = `mailto:helpdesk@rahvion.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Request Submitted",
      description: "Thank you. We'll send you a payment link within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', summary: '' });
    setCheckboxes({ residential: false, access: false, advisory: false, billing: false, credentials: false });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Non-Member Technical Support",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Rahvion, LLC",
      "telephone": "helpdesk@rahvion.com",
      "priceRange": "$$"
    },
    "offers": {
      "@type": "Offer",
      "price": "89.99",
      "priceCurrency": "USD",
      "description": "One-hour minimum remote technical support session"
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Non-Member Support | Rahvion, LLC</title>
        <meta name="description" content="One-time, best-effort remote technical support for home and home-office users. $89.99 + tax, one-hour minimum. Serving MD, VA, DC, PA, DE, NC, SC." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="relative min-h-screen pb-20 bg-[#0B0B0D]">
        <MathGridBackground />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-16 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#F5F5F5]">
              Non-Member One-Time <span className="text-[#D4AF37]">Technical Support</span>
            </h1>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-4">
              For individuals and home users who are not enrolled in a Rahvion membership.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#0B0B0D] border border-[#3A3F47] px-4 py-2 rounded-lg text-[#D4AF37] text-sm">
                <Flag size={14} className="flex-shrink-0" />
                <span>One-time remote technical support from our US-based team.</span>
            </div>
          </motion.div>
        </section>

        {/* Main Content Grid */}
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info & Pricing */}
          <div className="lg:col-span-5 space-y-8">
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B0B0D] backdrop-blur-lg rounded-xl p-8 border border-[#3A3F47] shadow-lg hover:shadow-[#D4AF37]/10 transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-[#D4AF37]" size={28} />
                <h2 className="text-2xl font-bold text-[#F5F5F5]">Service Rate</h2>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-[#F5F5F5]">$89.99 <span className="text-lg text-[#A0A0A0] font-normal">+ applicable tax</span></div>
                <ul className="space-y-3 pt-4 border-t border-[#0F1419]">
                  <li className="flex items-center gap-3 text-[#A0A0A0]">
                    <Clock size={18} className="text-[#D4AF37]" />
                    One (1) hour minimum
                  </li>
                  <li className="flex items-center gap-3 text-[#A0A0A0]">
                    <Check size={18} className="text-[#D4AF37]" />
                    Payment required before support begins
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Scope Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0B0B0D] backdrop-blur-lg rounded-xl p-8 border border-[#3A3F47] shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="text-[#D4AF37]" size={28} />
                <h2 className="text-xl font-bold text-[#F5F5F5]">Scope & Limitations</h2>
              </div>
              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
                Best-effort, advisory remote technical support for residential and home-office environments only. No physical work, cabling, electrical, construction, or structural modifications. No guarantees of outcome, performance, uptime, or security.
              </p>
              <div className="p-3 bg-[#0B0B0D] border border-[#3A3F47] rounded-lg">
                <p className="text-[#A0A0A0] text-xs font-semibold flex items-start gap-2">
                  <AlertTriangle size={14} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                  Not for regulated industries (HIPAA, GLBA, PCI-DSS).
                </p>
              </div>
            </motion.div>

            {/* Secondary Action */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 bg-[#0B0B0D]/50 rounded-xl border border-[#3A3F47]"
            >
              <p className="text-[#A0A0A0] mb-4">Looking for ongoing support?</p>
              <Link to="/membership">
                <Button variant="outline" className="w-full border-[#3A3F47] text-[#F5F5F5] hover:bg-[#0B0B0D]">
                  View Membership Plans <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0B0B0D] rounded-xl p-8 border border-[#3A3F47] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#B4941F] to-[#D4AF37]" />
              
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2 flex items-center gap-2">
                <FileSignature className="text-[#D4AF37]" /> Request Support
              </h2>
              <p className="text-[#A0A0A0] text-sm mb-8">Complete this form to receive a secure payment invoice.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#A0A0A0] flex items-center gap-2">
                      <User size={14} /> Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                      className="w-full bg-[#0B0B0D] border border-[#3A3F47] rounded-lg p-3 text-[#F5F5F5] focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#A0A0A0] flex items-center gap-2">
                      <Mail size={14} /> Email <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      className="w-full bg-[#0B0B0D] border border-[#3A3F47] rounded-lg p-3 text-[#F5F5F5] focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#A0A0A0] flex items-center gap-2">
                    <Phone size={14} /> Phone (Optional)
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange}
                    className="w-full bg-[#0B0B0D] border border-[#3A3F47] rounded-lg p-3 text-[#F5F5F5] focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#A0A0A0] flex items-center gap-2">
                    <FileText size={14} /> Issue Summary (Optional)
                  </label>
                  <textarea 
                    name="summary" 
                    value={formData.summary} 
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-[#0B0B0D] border border-[#3A3F47] rounded-lg p-3 text-[#F5F5F5] focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all resize-none"
                    placeholder="Briefly describe the problem..."
                  />
                </div>

                <div className="space-y-4 pt-6 border-t border-[#3A3F47]">
                  <p className="text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-2">Required Authorizations</p>
                  
                  {[
                    { id: 'residential', text: "I confirm this is residential or home-office support only" },
                    { id: 'access', text: "I authorize Rahvion to remotely access my device for diagnostics and support" },
                    { id: 'advisory', text: "I understand services are best-effort and advisory with no guarantees" },
                    { id: 'billing', text: "I authorize billing of $89.99 + tax with a one-hour minimum" },
                    { id: 'credentials', text: "I will change or revoke any credentials shared after service completion" }
                  ].map((item) => (
                    <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name={item.id}
                        checked={checkboxes[item.id]}
                        onChange={handleCheckboxChange}
                        className="mt-1 w-4 h-4 rounded border-[#3A3F47] bg-[#3A3F47] text-[#D4AF37] focus:ring-offset-0 focus:ring-[#D4AF37] transition-all"
                      />
                      <span className="text-sm text-[#A0A0A0] group-hover:text-[#F5F5F5] transition-colors select-none">
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>

                <Button 
                  type="submit" 
                  disabled={!isFormValid}
                  className="w-full bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] py-6 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Request Payment Link <Send size={18} className="ml-2" />
                </Button>
                
                {!isFormValid && (
                  <p className="text-center text-xs text-red-400 mt-2">
                    Please complete all required fields and check all authorization boxes.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="container mx-auto px-4 mt-16 text-center">
          <p className="text-[#A0A0A0] text-xs max-w-2xl mx-auto leading-relaxed">
            Rahvion provides best-effort, advisory technical support services for residential and home-office environments. Clients retain responsibility for their systems, data, and backups.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default NonMemberSupportPage;