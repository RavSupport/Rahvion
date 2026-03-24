import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const StudentsPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Student Technical Support",
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
    "description": "Reliable tech support for students. Device setup, performance, and peace of mind for studying."
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Students | Rahvion, LLC</title>
        <meta name="description" content="Reliable tech support for students. Device setup, performance, and peace of mind for studying and online classes." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="relative min-h-screen bg-[#0B0B0D]">
        <MathGridBackground />

        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1590431533633-9a64bed60fe9)',
              filter: 'brightness(0.25) grayscale(0.5)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-transparent" />
          
          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0B0D] border border-[#D4AF37]/20 text-[#D4AF37] text-sm mb-6">
                <BookOpen size={16} />
                <span>Rahvion for Students</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#F5F5F5] leading-tight">
                Reliable Study Environments for Students
              </h1>
              <p className="text-xl md:text-2xl text-[#A0A0A0] mb-8 font-light">
                Focus on Your Studies. We'll Handle Your Tech.
              </p>
              <Link to="/membership">
                <Button className="bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] text-lg px-8 py-6 rounded-full shadow-lg transition-all">
                  Get Student Tech Support <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 space-y-24">
          
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6">What This Means For You</h2>
            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              Deadlines don't care about computer crashes. We ensure your laptop is optimized, your connection is stable, and your data is backed up. Whether you're in high school or university, we keep your technology invisible so your grades can be visible.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47] shadow-xl">
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6 flex items-center gap-3">
                <Shield className="text-[#D4AF37]" /> Why Students Need This
              </h2>
              <ul className="space-y-4">
                {[
                  "Optimization for speed and battery life",
                  "Malware protection for research safety",
                  "Backup strategies for term papers",
                  "Software installation & compatibility help",
                  "Wi-Fi optimization for online exams",
                  "Affordable for student budgets",
                  "Flexible pause option for summer breaks"
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
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Imagine submitting without anxiety...</h3>
                <p className="text-[#A0A0A0] italic">
                  "My laptop started freezing the night before my thesis was due. Panic mode. I messaged Rahvion support. They identified a rogue background process consuming my CPU and killed it remotely. My laptop ran perfectly, and I submitted on time. Life savers."
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-12 text-center">What Students Love About Rahvion</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Affordable", desc: "Fits easily into a student budget." },
                { title: "Fast Support", desc: "Because deadlines don't wait." },
                { title: "All Devices", desc: "Mac, PC, Tablet - we cover it all." },
                { title: "Flexible", desc: "Pause service when school is out." },
                { title: "US-Based", desc: "Easy communication." },
                { title: "Remote Support", desc: "We fix it while you grab a coffee." }
              ].map((card, i) => (
                <div key={i} className="bg-[#0B0B0D] p-6 rounded-lg border border-[#3A3F47] hover:bg-[#0B0B0D]/80 transition-colors">
                  <h3 className="text-lg font-bold text-[#D4AF37] mb-2">{card.title}</h3>
                  <p className="text-sm text-[#A0A0A0]">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center space-y-6 py-12 bg-[#0B0B0D]/20 rounded-2xl border border-[#3A3F47]">
            <h2 className="text-3xl font-bold text-[#F5F5F5]">Focus on grades, not glitches.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership">
                <Button className="w-full sm:w-auto bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] text-lg px-8 py-6 rounded-full shadow-lg">
                  Get Student Tech Support
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

export default StudentsPage;