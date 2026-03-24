import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldAlert, Key, Mail, Smartphone, Wifi, BookOpen, Users, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const SafetyAcademy = () => {
  const courses = [
    {
      title: "Family Scam Prevention",
      description: "Learn to spot the latest scams targeting families, including grandparent scams, fake invoices, and AI voice cloning.",
      icon: ShieldAlert,
    },
    {
      title: "Password Management for Families",
      description: "Stop writing passwords on sticky notes. Learn how to set up a secure family password manager that everyone can actually use.",
      icon: Key,
    },
    {
      title: "Safe Emailing & Phishing",
      description: "Teach your family how to identify fake emails and dangerous links before they click. Essential for kids and seniors.",
      icon: Mail,
    },
    {
      title: "Kid-Safe Mobile Devices",
      description: "Set up iPhones and Androids securely for children. Manage screen time, block adult content, and ensure location safety.",
      icon: Smartphone,
    },
    {
      title: "Home Wi-Fi Security",
      description: "Lock down your home router to prevent neighbors or hackers from accessing your private network and smart devices.",
      icon: Wifi,
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Family Tech Safety Academy | Cyber Education | Rahvion</title>
        <meta name="description" content="Protect your family online with our Safety Academy. Learn about scam prevention, password security, and child safety. Cyber education for the home." />
        <meta name="keywords" content="Family Cyber Safety, Online Safety Course, Scam Prevention, Child Internet Safety, Home Cybersecurity Education" />
      </Helmet>

      <section className="relative min-h-screen pb-20 bg-[#0B0B0D]">
        {/* Hero */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-16">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1654588830920-92085849e384)',
                filter: 'brightness(0.2) grayscale(0.5)'
              }}
              aria-label="Family learning about digital safety"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />
            <MathGridBackground />
            
            <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
               <motion.h1
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#F5F5F5]"
               >
                 Digital Safety for <span className="text-[#D4AF37]">Every Family</span>
               </motion.h1>
               <motion.p 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 className="text-xl text-[#A0A0A0] mb-8 font-light"
               >
                 The best antivirus is a well-educated family. We teach you how to protect your home, your kids, and your identity from modern digital threats.
               </motion.p>
               <a href="mailto:helpdesk@rahvion.com?subject=Safety%20Academy%20Inquiry">
                  <Button size="lg" className="bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] rounded-full px-8 py-6 text-lg shadow-lg font-medium tracking-wide">
                     Request Family Training
                  </Button>
               </a>
            </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Section 1: Learn to Protect Yourself */}
          <div className="mb-20 max-w-4xl mx-auto text-center">
             <h2 className="font-serif text-3xl font-bold text-[#F5F5F5] mb-6">Empowering You, Not Scaring You</h2>
             <p className="text-lg text-[#A0A0A0] leading-relaxed font-light">
                Cybercriminals are targeting homes because they know families are busy and often unprotected. Our Safety Academy isn't about fear; it's about empowerment. We give you simple, practical skills to spot scams, secure your accounts, and keep your personal life private.
             </p>
          </div>

          {/* Section 2: Course Cards */}
          <div className="mb-24">
             <h2 className="font-serif text-3xl font-bold text-[#F5F5F5] mb-10 border-l-4 border-[#D4AF37] pl-4">Safety Topics We Cover</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                   <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#0B0B0D] backdrop-blur-md border border-[#3A3F47] rounded-xl p-8 hover:bg-[#0B0B0D]/80 transition-colors group"
                   >
                      <div className={`w-14 h-14 rounded-lg bg-[#0B0B0D] text-[#D4AF37] flex items-center justify-center mb-6 border border-[#3A3F47] group-hover:scale-110 transition-transform`}>
                         <course.icon size={28} aria-label={`${course.title} icon`} />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-3">{course.title}</h3>
                      <p className="text-sm text-[#A0A0A0] leading-relaxed font-light">{course.description}</p>
                   </motion.div>
                ))}
             </div>
          </div>

          {/* Section 3: On-Demand Tutoring */}
          <div className="bg-[#0B0B0D]/30 rounded-2xl p-8 md:p-12 border border-[#3A3F47] flex flex-col md:flex-row items-center gap-12">
             <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                   <Video className="text-[#D4AF37]" aria-label="Video Call Icon" />
                   <h2 className="font-serif text-3xl font-bold text-[#F5F5F5]">One-on-One Tech Tutoring</h2>
                </div>
                <p className="text-[#A0A0A0] text-lg font-light">
                   Does grandma need help with her iPad? Do you want to learn how to organize your digital photos? We offer patient, private tutoring sessions for every member of the family. We don't just fix things; we teach you how to use them with confidence.
                </p>
                <div className="flex gap-4 pt-4">
                   <div className="flex items-center gap-2 text-sm text-[#A0A0A0] bg-[#0B0B0D] px-4 py-2 rounded-full border border-[#3A3F47]">
                      <Users size={14} className="text-[#D4AF37]" /> Family Sessions
                   </div>
                   <div className="flex items-center gap-2 text-sm text-[#A0A0A0] bg-[#0B0B0D] px-4 py-2 rounded-full border border-[#3A3F47]">
                      <BookOpen size={14} className="text-[#D4AF37]" /> Senior Friendly
                   </div>
                </div>
                <a href="mailto:helpdesk@rahvion.com?subject=Tutoring%20Request" className="inline-block mt-6">
                   <Button variant="outline" className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 bg-[#0B0B0D] font-medium tracking-wide">
                      Schedule a Session
                   </Button>
                </a>
             </div>
             <div className="flex-1 w-full md:max-w-md">
                <div className="aspect-video rounded-xl bg-[#0B0B0D] border border-[#3A3F47] flex items-center justify-center text-[#F5F5F5] shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-[#D4AF37]/5"></div>
                   <span className="font-serif font-bold text-2xl opacity-90 z-10">Live Expert Help</span>
                </div>
             </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default SafetyAcademy;