import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Code, Server, Flag, Phone, Mail, Globe, Monitor, CheckCircle2, Quote } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const CareersPage = () => {
  const supportRoles = [
    {
      title: 'Systems Administrator',
      type: 'US-Based (Remote)',
      icon: Server,
      description: 'Join our US-based technical support team. Advising on stability for the home. Manage RMM tools, patch policies, and network optimization guidance for our Shield and Command tier members.',
      requirements: ['3+ years sysadmin experience', 'CCNA or equivalent', 'U.S. Citizen or Green Card holder'],
      benefits: ['Health insurance', '401k', 'Professional development budget']
    },
    {
      title: 'Technical Support Specialist',
      type: 'US-Based (Remote)',
      icon: Users,
      description: 'Join our US-based technical support team. You will assist residential clients with first-line remote support, scam verification guidance, and customer education.',
      requirements: ['CompTIA A+', 'Customer service experience', 'U.S. Citizen or Green Card holder'],
      benefits: ['Health insurance', '401k', 'Professional development budget']
    },
    {
      title: 'IT Support Engineer',
      type: 'US-Based (Remote)',
      icon: Monitor,
      description: 'Join our US-based technical support team. Handle complex escalations and provide detailed guidance on home network architecture and security.',
      requirements: ['Network+ / Security+', 'Advanced troubleshooting skills', 'U.S. Citizen or Green Card holder'],
      benefits: ['Health insurance', '401k', 'Professional development budget']
    }
  ];

  const webRoles = [
    {
      title: 'Full-Stack Developer',
      type: 'Global (Remote)',
      icon: Code,
      description: 'Join our global web development team. Build high-performance React applications and robust backend services for our client portal.',
      requirements: ['React/Node.js expertise', 'Experience with TailwindCSS', 'Strong portfolio'],
      benefits: ['Competitive contractor rates', 'Flexible hours', 'Remote-first culture']
    },
    {
      title: 'Frontend Developer',
      type: 'Global (Remote)',
      icon: Code,
      description: 'Join our global web development team. Focus on crafting beautiful, responsive user interfaces using modern web technologies.',
      requirements: ['Advanced CSS/Animation skills', 'React proficiency', 'Eye for design details'],
      benefits: ['Competitive contractor rates', 'Flexible hours', 'Remote-first culture']
    },
    {
      title: 'Backend Developer',
      type: 'Global (Remote)',
      icon: Code,
      description: 'Join our global web development team. Architect scalable APIs and database solutions to support our growing user base.',
      requirements: ['Node.js/Python expertise', 'Database design skills', 'API security knowledge'],
      benefits: ['Competitive contractor rates', 'Flexible hours', 'Remote-first culture']
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Careers | Rahvion, LLC</title>
        <meta name="description" content="Join our team. US-Based Technical Support and Global Web Development opportunities available." />
      </Helmet>

      <section className="py-24 relative">
        <MathGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Join the Personal IT Department
            </h1>
            <h2 className="text-2xl text-white/90 mb-6">Building the future of residential IT governance.</h2>
          </motion.div>

          {/* Why Work at Rahvion Section */}
          <div className="mb-20 bg-white/5 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Why Work at Rahvion</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-4xl">
              At Rahvion, we believe that leadership is a responsibility, not a rank. We treat our team with the same respect, governance, and attention to detail that we apply to our clients' infrastructure. We don't believe in "crunch time" or burnout as a badge of honor.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">How We Hire</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We operate on a professional contractor model that respects your expertise and autonomy. We provide clear deliverables, stable opportunities, and consistent processes without the politics of traditional corporate structures.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">What You Can Expect</h3>
                <ul className="space-y-2 mb-4">
                  {[
                    "Clear leadership that listens",
                    "Fair management practices",
                    "Defined roles and responsibilities",
                    "No favoritism or office politics",
                    "Growth without burnout"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2 size={14} className="text-blue-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/90 font-medium text-sm italic border-l-2 border-blue-500 pl-3">
                  "Structure exists here to protect people, not control them."
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Who Thrives at Rahvion</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We look for professionals who value accountability and integrity. If you take pride in doing the job right, documenting your work, helping people, and owning your outcomes without micromanagement, you will thrive here.
                </p>
              </div>
            </div>
          </div>

          {/* Founder's Note Section */}
          <div className="mb-20 bg-[#0b0f19] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row">
              {/* Image Column */}
              <div className="md:w-1/3 lg:w-1/4 bg-white/5 relative flex items-center justify-center p-8 md:p-0">
                <div className="relative w-40 h-40 md:w-full md:h-full max-w-[250px] md:max-w-none aspect-[3/4] md:aspect-auto">
                   <img 
                    src="https://horizons-cdn.hostinger.com/520cc614-3085-4740-9c72-f6ea1082763e/ef2e21f93e624211c98181f41f22245f.jpg" 
                    alt="Akbar Ali, Founder of Rahvion, LLC" 
                    className="object-cover w-full h-full rounded-lg md:rounded-none shadow-lg md:shadow-none"
                  />
                </div>
              </div>
              
              {/* Text Column */}
              <div className="md:w-2/3 lg:w-3/4 p-8 md:p-12 flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-6">
                    <Quote className="text-blue-500/40 rotate-180" size={32} />
                    <h2 className="text-2xl font-bold text-white">Founder's Note</h2>
                 </div>
                 
                 <div className="space-y-6 text-white/80 text-lg leading-relaxed italic font-light">
                    <p>
                      "I founded Rahvion with a singular mission: to bring enterprise-grade IT governance to the home. But I also built it to be the kind of place where I would want to work. After 18 years in corporate systems administration, I saw too many good engineers burned out by chaos and reactive management."
                    </p>
                    <p>
                      "At Rahvion, we prioritize stability—for our clients and our team. We believe that a rested, respected, and supported engineer provides vastly superior support than an overworked one. When you join us, you are joining a team that values your humanity as much as your technical skill."
                    </p>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white font-semibold text-lg">Akbar Ali</p>
                    <p className="text-blue-400 text-sm">Founder, Rahvion, LLC</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Section 1: Technical Support Careers (US-Based) */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-500/30">
                <Flag className="text-blue-400" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Technical Support Careers</h2>
                <p className="text-blue-400 font-medium">US-Based Opportunities</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 flex flex-col shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <role.icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                  <span className="text-sm text-blue-300 font-medium mb-4 flex items-center gap-1">
                    <Flag size={12}/> {role.type}
                  </span>
                  <p className="text-white/70 mb-6 flex-grow text-sm leading-relaxed">{role.description}</p>
                  
                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {role.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                             <span className="w-1 h-1 rounded-full bg-blue-500 mt-2"></span>
                             {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a href={`mailto:careers@rahvion.com?subject=Application for ${role.title} (US-Based)`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 2: Web Development Careers (Global) */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-500/30">
                <Globe className="text-purple-400" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Web Development Careers</h2>
                <p className="text-purple-400 font-medium">Global Opportunities</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {webRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 flex flex-col shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <role.icon className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                  <span className="text-sm text-purple-300 font-medium mb-4 flex items-center gap-1">
                    <Globe size={12}/> {role.type}
                  </span>
                  <p className="text-white/70 mb-6 flex-grow text-sm leading-relaxed">{role.description}</p>
                  
                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {role.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                             <span className="w-1 h-1 rounded-full bg-purple-500 mt-2"></span>
                             {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a href={`mailto:careers@rahvion.com?subject=Application for ${role.title} (Global)`}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Apply Now</Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Questions about careers section */}
          <div className="bg-white/5 rounded-xl p-8 text-center border border-white/10 mt-12 mb-12">
            <h3 className="text-xl font-bold text-white mb-4">Questions about careers?</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-white/70">
                <a href="tel:+14104298159" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                    <Phone size={20} />
                    <span>Call 410-429-8159</span>
                </a>
                <span>or</span>
                <a href="mailto:careers@rahvion.com" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                    <Mail size={20} />
                    <span>email careers@rahvion.com</span>
                </a>
            </div>
          </div>

          {/* Culture of Stability */}
          <div className="bg-white/5 rounded-xl p-8 text-center border border-white/10 mt-12">
            <h3 className="text-xl font-bold text-white mb-4">Culture of Stability</h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-6">
              We value stability, deep work, and continuous learning. We don't do crunch time. We do prevention.
            </p>
            <p className="text-sm text-white/40 font-medium">18 Years of Corporate Systems Administration Experience</p>
          </div>

           {/* Our Philosophy Section */}
          <div className="mt-20 border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-[#0b0f19] rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-blue-400 mb-3">Respect & Dignity</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We believe that how we treat our team directly impacts how they treat you. By fostering a culture of respect, dignity, and stability internally, we ensure that our clients receive patient, focused, and high-quality support.
                </p>
              </div>
              <div className="p-6 bg-[#0b0f19] rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-purple-400 mb-3">Operational Discipline</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We maintain strict policies and operational discipline because reliability is our core product. We don't cut corners on security or procedure. We are reliable because we are disciplined.
                </p>
              </div>
              <div className="p-6 bg-[#0b0f19] rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-green-400 mb-3">Honest Advisory</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We provide best-effort advisory support. We don't claim to be magicians, and we don't use fear to sell services. We offer professional guidance, honesty about limitations, and a steady hand.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default CareersPage;