import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowDownToLine, BookOpenCheck, Check, GraduationCap, Headphones, MonitorPlay, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const guideUrl = '/GoHighLevel_Complete_Training_Guide.pdf';
const membershipUrl = 'https://buy.stripe.com/4gMdR9eooaGYgEwa7d6kg00';

const HighLevelTrainingPage = () => {
  const memberBenefits = [
    'Software training for HighLevel CRM and everyday business tools',
    'Support services when setup, workflows, automations, or technical questions get stuck',
    'Plain-language guidance so you can use the software with confidence',
    'Remote help from Rahvion instead of trying to figure everything out alone'
  ];

  const guideTopics = [
    'HighLevel CRM fundamentals',
    'Contacts, pipelines, and conversations',
    'Automation and workflow basics',
    'Practical setup guidance for daily use'
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Free HighLevel CRM Training Guide | Rahvion</title>
        <meta
          name="description"
          content="Download Rahvion's free HighLevel CRM training guide. Join Rahvion Core for $25 per month to receive software training and support services."
        />
        <meta
          name="keywords"
          content="HighLevel CRM training, GoHighLevel guide, free CRM training guide, Rahvion membership, software training support"
        />
      </Helmet>

      <section className="py-24 relative bg-[#0B0B0D] overflow-hidden">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-[#F5F5F5] leading-tight">
                HighLevel CRM Training Guide
              </h1>
              <p className="text-xl md:text-2xl text-[#D4AF37] font-semibold mb-5">
                Free download from Rahvion.
              </p>
              <p className="text-lg text-[#A0A0A0] leading-relaxed max-w-2xl font-light mb-8">
                Use this training guide to get more comfortable with HighLevel CRM, understand the core tools, and start building cleaner systems for contacts, conversations, pipelines, and automations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={guideUrl} download>
                  <Button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#F5F5F5] text-[#0B0B0D] font-bold text-base px-8 py-6 rounded-full shadow-lg">
                    <ArrowDownToLine size={20} className="mr-2" />
                    Download Free Guide
                  </Button>
                </a>
                <a href={guideUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#F5F5F5] font-bold text-base px-8 py-6 rounded-full">
                    <BookOpenCheck size={20} className="mr-2" />
                    Preview PDF
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#111827]/90 border border-[#3A3F47] rounded-xl p-8 shadow-2xl shadow-black/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-[#D4AF37]" size={30} />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-2">
                    Want help putting it into practice?
                  </h2>
                  <p className="text-[#A0A0A0] leading-relaxed font-light">
                    The guide is free. Rahvion membership gives you ongoing software training and support services for $25 per month.
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {memberBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-[#D7D7D7]">
                    <Check className="text-[#D4AF37] mt-0.5 flex-shrink-0" size={18} />
                    <span className="font-light leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a href={membershipUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#D4AF37] hover:bg-[#F5F5F5] text-[#0B0B0D] font-bold text-lg py-6 rounded-xl">
                  Become a Rahvion Member
                </Button>
              </a>
              <p className="text-xs text-[#A0A0A0] mt-4 text-center">
                Core membership is $24.99 per month plus applicable tax.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f1422] border-y border-[#3A3F47]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
                What the free guide helps with
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed font-light">
                It is built for people who want a clear starting point before asking for hands-on help.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {guideTopics.map((topic) => (
                <div key={topic} className="bg-[#0B0B0D] border border-[#3A3F47] rounded-xl p-6">
                  <MonitorPlay className="text-[#D4AF37] mb-4" size={28} />
                  <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">{topic}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed font-light">
                    Learn the concepts, then use Rahvion support when you want guided setup or a second set of eyes.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B0B0D]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111827] border border-[#3A3F47] rounded-xl p-8">
              <Headphones className="text-[#D4AF37] mb-5" size={34} />
              <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-3">
                Training plus support
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed font-light">
                Membership is for people who want more than a PDF. Rahvion helps you understand the software, troubleshoot issues, and keep moving when the tool becomes confusing.
              </p>
            </div>
            <div className="bg-[#111827] border border-[#3A3F47] rounded-xl p-8">
              <ShieldCheck className="text-[#D4AF37] mb-5" size={34} />
              <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-3">
                Practical, patient guidance
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed font-light">
                Rahvion supports software learning with plain-language explanations, remote help, and a steady monthly relationship for $25 per month.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HighLevelTrainingPage;
