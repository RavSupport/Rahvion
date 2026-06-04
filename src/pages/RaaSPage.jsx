import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bot, Check, Mail, ShieldCheck, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const RaaSPage = () => {
  const services = [
    'Robotics setup planning and advisory support',
    'Automation workflow design for home and small operations',
    'Device onboarding, configuration, and troubleshooting guidance',
    'Safety-minded documentation and maintenance planning'
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Robotics-as-a-Service | Rahvion</title>
        <meta
          name="description"
          content="Rahvion Robotics-as-a-Service provides advisory support for robotics setup, automation planning, device onboarding, and workflow support."
        />
      </Helmet>

      <section className="py-24 relative bg-[#0B0B0D]">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="mx-auto h-20 w-20 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center mb-8">
                <Bot className="text-[#D4AF37]" size={42} />
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#F5F5F5] mb-6">
                Robotics-as-a-Service
              </h1>
              <p className="text-xl text-[#A0A0A0] leading-relaxed max-w-3xl mx-auto font-light">
                Practical robotics and automation guidance for people who want new systems introduced carefully, documented clearly, and supported by a real technical partner.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
              {services.map((service) => (
                <div key={service} className="bg-[#111827] border border-[#3A3F47] rounded-xl p-6 flex items-start gap-4">
                  <Check className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                  <span className="text-[#D7D7D7] font-light leading-relaxed">{service}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
              <div className="bg-[#0B0B0D] border border-[#3A3F47] rounded-xl p-8">
                <Wrench className="text-[#D4AF37] mb-5" size={34} />
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-3">Setup Support</h2>
                <p className="text-[#A0A0A0] leading-relaxed font-light">
                  Rahvion helps evaluate requirements, prepare devices, and guide configuration so robotics projects begin with a clear operating plan.
                </p>
              </div>
              <div className="bg-[#0B0B0D] border border-[#3A3F47] rounded-xl p-8">
                <ShieldCheck className="text-[#D4AF37] mb-5" size={34} />
                <h2 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-3">Safety-Minded Care</h2>
                <p className="text-[#A0A0A0] leading-relaxed font-light">
                  We focus on documentation, boundaries, maintenance habits, and realistic support expectations for connected automation systems.
                </p>
              </div>
            </div>

            <a href="mailto:helpdesk@rahvion.com?subject=Robotics-as-a-Service%20Inquiry">
              <Button className="bg-[#D4AF37] hover:bg-[#F5F5F5] text-[#0B0B0D] font-bold text-lg px-8 py-6 rounded-full">
                <Mail size={20} className="mr-2" />
                Ask About RaaS
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default RaaSPage;
