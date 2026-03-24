import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const FamiliesPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Family Technical Support",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Rahvion, LLC",
      "telephone": "+14104298159",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "MD",
        "addressCountry": "US"
      }
    },
    "description": "Enterprise-grade tech support for families. Device management, security, and peace of mind."
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Families | Rahvion, LLC</title>
        <meta name="description" content="Enterprise-grade tech support for families in Maryland, Virginia, DC, PA, DE, NC, and SC. Device management, security, and peace of mind for all family devices." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="relative min-h-screen bg-[#0F1419]">
        <MathGridBackground />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1640622302099-f10b18de7b16)',
              filter: 'brightness(0.25) grayscale(0.5)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1419] via-[#0F1419]/40 to-transparent" />
          
          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3A3F47] border border-[#D4AF37]/20 text-[#D4AF37] text-sm mb-6">
                <Users size={16} />
                <span>Rahvion for Families</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#F5F5F5] leading-tight">
                Enterprise-Grade Tech Support for Families
              </h1>
              <p className="text-xl md:text-2xl text-[#A0A0A0] mb-8 font-light">
                Peace for Your Devices. Professional IT Governance for Your Home.
              </p>
              <Link to="/membership">
                <Button className="bg-[#0F1419] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] text-lg px-8 py-6 rounded-full shadow-lg transition-all">
                  Get Family Peace of Mind <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-16 space-y-24">
          
          {/* Section 1: What This Means */}
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6">What This Means For You</h2>
            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              It means you stop being the "IT Person" for your household. We provide proactive monitoring, advisory security protocols, and US-based support to ensure your family's digital life runs smoothly. From optimizing the Wi-Fi for gaming to ensuring homework gets printed, we govern the technology so you can enjoy the time.
            </p>
          </section>

          {/* Section 2: Why You Need This */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#3A3F47] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47] shadow-xl">
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6 flex items-center gap-3">
                <Shield className="text-[#D4AF37]" /> Why Your Family Needs This
              </h2>
              <ul className="space-y-4">
                {[
                  "Parental control guidance & setup",
                  "Scam protection for all family members",
                  "Printer troubleshooting (homework must go on!)",
                  "Gamer-grade network optimization advice",
                  "Simple monthly fee for the whole home",
                  "24/7 Advisory Monitoring of device health",
                  "True peace of mind"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#A0A0A0]">
                    <CheckCircle2 className="text-[#D4AF37] shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-[#3A3F47]/50 p-8 rounded-xl border border-[#3A3F47]">
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Imagine a Sunday without "the wifi is down"...</h3>
                <p className="text-[#A0A0A0] italic">
                  "It used to be that every weekend I spent hours fixing the printer or resetting the router because Netflix was buffering. Since Rahvion, I just text them. Usually, they've already noticed the issue before I do. It's like having a corporate IT department in my living room."
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: What Families Love */}
          <section className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-12 text-center">What Families Love About Rahvion</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Remote Support", desc: "We fix 95% of issues remotely. No waiting for a technician window." },
                { title: "Transparent Pricing", desc: "Core plan covers the basics. No hidden fees." },
                { title: "US-Based Team", desc: "Local, friendly experts who understand your context." },
                { title: "Advisory Approach", desc: "We don't just fix; we teach you how to stay safe." },
                { title: "Flexible", desc: "Cancel anytime. We earn your trust every month." },
                { title: "Peace of Mind", desc: "Knowing someone has your back digitally is priceless." }
              ].map((card, i) => (
                <div key={i} className="bg-[#3A3F47] p-6 rounded-lg border border-[#3A3F47] hover:bg-[#3A3F47]/80 transition-colors">
                  <h3 className="text-lg font-bold text-[#D4AF37] mb-2">{card.title}</h3>
                  <p className="text-sm text-[#A0A0A0]">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTAs */}
          <section className="text-center space-y-6 py-12 bg-[#3A3F47]/20 rounded-2xl border border-[#3A3F47]">
            <h2 className="text-3xl font-bold text-[#F5F5F5]">Ready for a smoother digital home?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership">
                <Button className="w-full sm:w-auto bg-[#0F1419] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] text-lg px-8 py-6 rounded-full shadow-lg">
                  Get Family Peace of Mind
                </Button>
              </Link>
              <Link to="/non-member-support">
                <Button variant="outline" className="w-full sm:w-auto border-[#3A3F47] text-[#F5F5F5] hover:bg-[#3A3F47] text-lg px-8 py-6 rounded-full">
                  Learn about Non-Member Support
                </Button>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
};

export default FamiliesPage;