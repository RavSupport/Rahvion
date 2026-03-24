import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const NonTechSavvyPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Technical Support",
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
    "description": "Tech support for non-technical people. We handle it all. No jargon. No confusion. Just simple help."
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Non-Tech Savvy | Rahvion, LLC</title>
        <meta name="description" content="Tech support for non-technical people. We handle it all. No jargon. No confusion. Just simple, friendly help." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="relative min-h-screen bg-[#0B0B0D]">
        <MathGridBackground />

        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1621252179027-94459d278660)',
              filter: 'brightness(0.25) grayscale(0.5)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-transparent" />
          
          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0B0D] border border-[#D4AF37]/20 text-[#D4AF37] text-sm mb-6">
                <HelpCircle size={16} />
                <span>Rahvion Simplified</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#F5F5F5] leading-tight">
                We Handle It All For You
              </h1>
              <p className="text-xl md:text-2xl text-[#A0A0A0] mb-8 font-light">
                No Tech Jargon. No Confusion. Just Simple, Friendly Help.
              </p>
              <Link to="/membership">
                <Button className="bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] text-lg px-8 py-6 rounded-full shadow-lg transition-all">
                  Get Simple Tech Support <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 space-y-24">
          
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6">What This Means For You</h2>
            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              You don't need to know what a "driver" or "IP address" is. That's our job. We translate technology into plain English. If something breaks, you just tell us "it's broken," and we fix it. We are your personal IT department that makes the technology invisible so you can just use it.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47] shadow-xl">
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6 flex items-center gap-3">
                <Shield className="text-[#D4AF37]" /> Why Non-Technical People Need This
              </h2>
              <ul className="space-y-4">
                {[
                  "No confusing error messages to read",
                  "No technical jargon - plain English only",
                  "Simple support for any device",
                  "Proactive monitoring (we fix it before you know)",
                  "Monthly flat fee for peace of mind",
                  "Remote support - we do the clicking for you",
                  "Judgment-free zone - no question is too basic"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#A0A0A0]">
                    <CheckCircle2 className="text-[#D4AF37] shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-[#0B0B0D]/50 p-8 rounded-xl border border-[#3A3F47]">
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Imagine tech just working...</h3>
                <p className="text-[#A0A0A0] italic">
                  "I used to get so frustrated with my computer I wanted to throw it out the window. Every time I asked my nephew for help, he made me feel stupid. Rahvion is different. They are kind, patient, and they just fix it without making me feel like I should know how."
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-12 text-center">What Non-Tech People Love About Rahvion</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Plain English", desc: "We speak human, not robot." },
                { title: "Patient Support", desc: "Take all the time you need." },
                { title: "Proactive", desc: "Fewer problems to deal with." },
                { title: "Transparent Pricing", desc: "One simple fee covers it." },
                { title: "Flexible", desc: "We work around your schedule." },
                { title: "Remote Support", desc: "Watch us fix it on your screen." }
              ].map((card, i) => (
                <div key={i} className="bg-[#0B0B0D] p-6 rounded-lg border border-[#3A3F47] hover:bg-[#0B0B0D]/80 transition-colors">
                  <h3 className="text-lg font-bold text-[#D4AF37] mb-2">{card.title}</h3>
                  <p className="text-sm text-[#A0A0A0]">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center space-y-6 py-12 bg-[#0B0B0D]/20 rounded-2xl border border-[#3A3F47]">
            <h2 className="text-3xl font-bold text-[#F5F5F5]">Make technology simple again.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership">
                <Button className="w-full sm:w-auto bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] text-lg px-8 py-6 rounded-full shadow-lg">
                  Get Simple Tech Support
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

export default NonTechSavvyPage;