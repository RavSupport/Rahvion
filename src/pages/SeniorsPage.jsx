import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const SeniorsPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Senior Technical Support",
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
    "description": "Patient, scam-aware tech support for seniors. Protection from fraud, malware, and tech confusion."
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Seniors | Rahvion, LLC</title>
        <meta name="description" content="Patient, scam-aware tech support for seniors. Protection from fraud, malware, and tech confusion. US-based support team." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="relative min-h-screen bg-[#0B0B0D]">
        <MathGridBackground />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1661250150188-242c8ab80bfc)',
              filter: 'brightness(0.3) grayscale(0.5)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-transparent" />
          
          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0B0D] border border-[#D4AF37]/20 text-[#D4AF37] text-sm mb-6">
                <Heart size={16} />
                <span>Rahvion for Seniors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#F5F5F5] leading-tight">
                Patient, Scam-Aware Tech Support for Seniors
              </h1>
              <p className="text-xl md:text-2xl text-[#A0A0A0] mb-8 font-light">
                Stay Safe Online. Stay Connected. Stay Independent.
              </p>
              <Link to="/membership">
                <Button className="bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] text-lg px-8 py-6 rounded-full shadow-lg transition-all">
                  Get Senior Tech Peace of Mind <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-16 space-y-24">
          
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6">What This Means For You</h2>
            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              Technology changes fast, but you shouldn't have to face it alone. Our US-based team provides patient, respectful support. We help you distinguish between real alerts and scams, ensure your video calls with family work, and keep your devices secure—without using confusing jargon.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47] shadow-xl">
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6 flex items-center gap-3">
                <Shield className="text-[#D4AF37]" /> Why Seniors Need This
              </h2>
              <ul className="space-y-4">
                {[
                  "Active Scam & Fraud Protection Guidance",
                  "Patient, unhurried explanations",
                  "Help with Zoom, FaceTime, and Email",
                  "New device setup and data transfer",
                  "Automatic security updates",
                  "Monthly flat fee - no surprise bills",
                  "US-based team you can understand"
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
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Imagine staying connected without the fear...</h3>
                <p className="text-[#A0A0A0] italic">
                  "I almost clicked on a fake bank email last month. I called Rahvion first. They looked at it remotely, told me it was a scam, and blocked the sender. That one call saved my savings. Now I don't worry because I know I can just ask them."
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-12 text-center">What Seniors Love About Rahvion</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Patient Support", desc: "We never rush you or make you feel 'behind'." },
                { title: "US-Based", desc: "Clear communication from local experts." },
                { title: "Proactive", desc: "We fix problems before they interrupt your day." },
                { title: "Simple Pricing", desc: "Budget-friendly options." },
                { title: "Flexible", desc: "We adapt to your specific devices and needs." },
                { title: "Remote Support", desc: "Help arrives in minutes, right on your screen." }
              ].map((card, i) => (
                <div key={i} className="bg-[#0B0B0D] p-6 rounded-lg border border-[#3A3F47] hover:bg-[#0B0B0D]/80 transition-colors">
                  <h3 className="text-lg font-bold text-[#D4AF37] mb-2">{card.title}</h3>
                  <p className="text-sm text-[#A0A0A0]">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center space-y-6 py-12 bg-[#0B0B0D]/20 rounded-2xl border border-[#3A3F47]">
            <h2 className="text-3xl font-bold text-[#F5F5F5]">Secure your digital life today.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/membership">
                <Button className="w-full sm:w-auto bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] text-lg px-8 py-6 rounded-full shadow-lg">
                  Get Senior Tech Peace of Mind
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

export default SeniorsPage;