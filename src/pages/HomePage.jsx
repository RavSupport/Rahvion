import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Check, Brain, LayoutDashboard as Desktop, Smartphone, X, Laptop, AlertCircle, Phone, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';
import TrustSection from '@/components/TrustSection';
import ServiceAreas from '@/components/ServiceAreas';
import { trackEvent } from '@/lib/analytics';
import { startCheckout } from '@/lib/stripe';

const CORE_PLAN_FALLBACK_URL = 'https://buy.stripe.com/4gMdR9eooaGYgEwa7d6kg00';

const HomePage = () => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleActivateCore = async () => {
    setIsCheckingOut(true);
    trackEvent('checkout_start', { plan: 'core' });
    try {
      const url = await startCheckout();
      window.location.href = url;
    } catch (err) {
      window.open(CORE_PLAN_FALLBACK_URL, '_blank', 'noopener,noreferrer');
    } finally {
      setIsCheckingOut(false);
    }
  };

  // Task 3: Updated Services Grid (4 Blocks)
  const servicePillars = [
    {
      icon: Desktop, // Changed icon to Desktop
      title: 'PC & Mac Optimization', // Updated title
      description: 'AI-driven tune-ups and hardware upgrade paths', // Updated description
      gradient: 'bg-[#0B0B0D]'
    },
    {
      icon: Shield, // Changed icon to Shield
      title: 'Scam & Virus Shield', // Updated title
      description: 'Proactive email filtering and malware eradication', // Updated description
      gradient: 'bg-[#0B0B0D]'
    },
    {
      icon: Smartphone, // Changed icon to Smartphone
      title: 'Mobile/Tablet Care', // Updated title
      description: 'Secure setups and performance boosts for iOS & Android', // Updated description
      gradient: 'bg-[#0B0B0D]'
    },
    {
      icon: Brain, // Changed icon to Brain
      title: 'AI Tech Advisor', // Updated title
      description: 'Personalized recommendations for your next computer or tool', // Updated description
      gradient: 'bg-[#0B0B0D]'
    }
  ];

  const scopeItems = [
    { icon: Desktop, text: 'Personal Laptops & Desktops' }, // Icon updated to Desktop
    { icon: Smartphone, text: 'Family Phones (iOS/Android)' },
    { icon: Smartphone, text: 'iPads & Tablets' }, // Icon updated to Smartphone
    { icon: Brain, text: 'Home Office Software' }, // Icon updated to Brain
    { icon: Shield, text: 'Wi-Fi & Network Issues' }, // Icon updated to Shield
    { icon: Shield, text: 'Smart Home Setup' } // Icon updated to Shield
  ];

  const audienceGrid = [
    { 
      title: "Families", 
      path: "/families", 
      icon: Shield, // Changed icon for consistency
      tagline: "Safe internet for kids.",
      color: "text-[#D4AF37]"
    },
    { 
      title: "Seniors", 
      path: "/seniors", 
      icon: Brain, // Changed icon for consistency
      tagline: "Patient, kind support.",
      color: "text-[#D4AF37]"
    },
    { 
      title: "Home Offices", 
      path: "/wfh-professionals", 
      icon: Desktop, // Changed icon for consistency
      tagline: "Reliable work connectivity.",
      color: "text-[#D4AF37]"
    },
    { 
      title: "Students", 
      path: "/students", 
      icon: Laptop, // Changed icon for consistency
      tagline: "Tech that just works.",
      color: "text-[#D4AF37]"
    },
    { 
      title: "Busy Homeowners", 
      path: "/non-tech-savvy", 
      icon: Shield, // Changed icon for consistency
      tagline: "We handle it for you.",
      color: "text-[#D4AF37]"
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>America's Personal IT Department | Residential IT Support for Homeowners</title>
        <meta name="description" content="Dedicated IT support for homeowners and families. We manage your personal technology, home Wi-Fi, and digital security so you don't have to." />
        <meta name="keywords" content="Residential IT Support, Home Tech Support, Family Cyber Safety, Smart Home Automation, IT Governance" />
      </Helmet>

      {/* Task 1: Updated Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0D]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1629360067822-89c74b25bb66)',
            filter: 'brightness(0.3) saturate(0.8)'
          }}
          role="img"
          aria-label="Warm residential home setting"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/50 to-transparent" />
        <MathGridBackground />
        
        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-[#F5F5F5] drop-shadow-lg">
              America's Personal <span className="text-[#D4AF37]">IT Department</span>
            </h1>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-[#E0E0E0] mb-12 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-md"
          >
            Professional technology management for homeowners and families. We support your personal computers, smart home devices, and family networks with the care and expertise you deserve.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
          >
            <Link to="/contact" className="w-full sm:w-auto"> 
              <Button size="lg" className="h-16 px-10 text-xl bg-[#D4AF37] text-[#0B0B0D] hover:bg-[#F5F5F5] font-bold rounded-full shadow-lg hover:shadow-[#D4AF37]/30 w-full sm:w-auto transition-all tracking-wide border-2 border-[#D4AF37]">
                Request Home Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Task 2: Comparison Table (Injected Section) */}
      <section className="py-24 bg-[#0B0B0D] border-b border-[#3A3F47]">
         <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-12 text-center">The Rahvion Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 border border-[#3A3F47] rounded-xl overflow-hidden">
               {/* Left Column: Retail */}
               <div className="bg-[#0B0B0D] p-8 md:p-12 md:border-r border-[#3A3F47]">
                  <h3 className="text-xl font-bold text-[#A0A0A0] mb-8 text-center uppercase tracking-widest">Retail Rip-offs</h3>
                  <div className="space-y-8">
                     <div className="flex items-center gap-4 text-[#A0A0A0]">
                        <X size={24} className="text-red-500/70 shrink-0"/>
                        <span className="text-lg">$150+ Virus Removals</span>
                     </div>
                     <div className="flex items-center gap-4 text-[#A0A0A0]">
                        <X size={24} className="text-red-500/70 shrink-0"/>
                        <span className="text-lg">Reactive Scam Support</span>
                     </div>
                     <div className="flex items-center gap-4 text-[#A0A0A0]">
                        <X size={24} className="text-red-500/70 shrink-0"/>
                        <span className="text-lg">Generic Hardware Upsells</span>
                     </div>
                  </div>
               </div>

               {/* Right Column: Rahvion */}
               <div className="bg-[#D4AF37]/5 p-8 md:p-12">
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-8 text-center uppercase tracking-widest">The Rahvion Edge</h3>
                  <div className="space-y-8">
                     <div className="flex items-center gap-4 text-[#F5F5F5]">
                        <Check size={24} className="text-[#D4AF37] shrink-0"/>
                        <span className="text-lg font-medium">Unlimited AI Virus Defense</span>
                     </div>
                     <div className="flex items-center gap-4 text-[#F5F5F5]">
                        <Check size={24} className="text-[#D4AF37] shrink-0"/>
                        <span className="text-lg font-medium">Proactive Scam Filtering</span>
                     </div>
                     <div className="flex items-center gap-4 text-[#F5F5F5]">
                        <Check size={24} className="text-[#D4AF37] shrink-0"/>
                        <span className="text-lg font-medium">Expert Upgrade Recommendations</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Scope Clarity Section */}
      <section className="py-24 bg-[#0B0B0D] border-b border-[#3A3F47]">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-16">Complete Home Technology Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
               {scopeItems.map((item, index) => (
                  <motion.div 
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className="flex flex-col items-center group"
                  >
                     <div className="w-20 h-20 rounded-full bg-[#0B0B0D] flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
                        <item.icon size={32} aria-label={`${item.text} icon`} />
                     </div>
                     <p className="text-[#F5F5F5] text-sm font-medium tracking-wide">{item.text}</p>
                  </motion.div>
               ))}
            </div>
        </div>
      </section>

      {/* Audience Grid Section */}
      <section className="py-24 container mx-auto px-4 bg-[#0B0B0D]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {audienceGrid.map((item, index) => (
            <Link key={index} to={item.path}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-[#0B0B0D] backdrop-blur-md border border-[#3A3F47] rounded-xl p-8 text-center shadow-lg hover:shadow-xl hover:border-[#D4AF37]/50 transition-all cursor-pointer h-full flex flex-col items-center justify-center group"
              >
                <div className={`mb-6 p-4 rounded-full bg-[#0B0B0D] border border-[#3A3F47] group-hover:border-[#D4AF37]/50 transition-colors ${item.color}`}>
                  <item.icon size={32} aria-label={`${item.title} icon`} />
                </div>
                <h3 className="font-serif text-[#F5F5F5] font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[#A0A0A0] text-sm font-light">{item.tagline}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Task 4: Core Membership Section (Injected) */}
      <section className="py-24 relative bg-[#0B0B0D]/50 border-y border-[#3A3F47]">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">Core Plan – Your Personal IT Department.</h2>
            <p className="text-[#D4AF37] text-3xl font-bold mb-8">$24.99/Month + Tax</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
               <div className="bg-[#0B0B0D] p-6 rounded-lg border border-[#3A3F47]">
                  <Check size={24} className="text-[#D4AF37] mx-auto mb-3"/>
                  <p className="text-[#F5F5F5]">Unlimited Remote Virus/Malware Removal</p>
               </div>
               <div className="bg-[#0B0B0D] p-6 rounded-lg border border-[#3A3F47]">
                  <Check size={24} className="text-[#D4AF37] mx-auto mb-3"/>
                  <p className="text-[#F5F5F5]">Proactive Scam Email Defense</p>
               </div>
               <div className="bg-[#0B0B0D] p-6 rounded-lg border border-[#3A3F47]">
                  <Check size={24} className="text-[#D4AF37] mx-auto mb-3"/>
                  <p className="text-[#F5F5F5]">Weekly PC Health Checks</p>
               </div>
                <div className="bg-[#0B0B0D] p-6 rounded-lg border border-[#3A3F47]">
                  <Check size={24} className="text-[#D4AF37] mx-auto mb-3"/>
                  <p className="text-[#F5F5F5]">Proactive Updating and Patching</p>
               </div>
            </div>
            
            <p className="text-xl text-[#A0A0A0] italic font-light mb-8">
               Why pay a retailer $200 for one fix? Core keeps your tech fast and your data safe 365 days a year.
            </p>

            <Button
              size="lg"
              onClick={handleActivateCore}
              disabled={isCheckingOut}
              className="bg-[#D4AF37] text-[#0B0B0D] hover:bg-[#F5F5F5] font-bold px-10 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Redirecting...
                </>
              ) : (
                'Activate Core Plan'
              )}
            </Button>
         </div>
      </section>

      <TrustSection />

      {/* Services Grid */}
      <section className="py-32 relative bg-[#0B0B0D] border-t border-[#3A3F47]" aria-labelledby="service-offerings-heading">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3A3F47] to-transparent" />
        <MathGridBackground />

        <div className="container mx-auto px-4 relative z-10">
          <h2 id="service-offerings-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#F5F5F5] text-center mb-16">
            Our Service Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicePillars.map((pillar, index) => (
              <Link key={index} to="/services" className="group h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="h-full bg-[#0B0B0D] backdrop-blur-lg rounded-xl p-8 border border-[#3A3F47] shadow-lg hover:shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-300 group-hover:-translate-y-2 flex flex-col items-center text-center"
                >
                  <div className={`w-14 h-14 rounded-xl bg-[#0B0B0D] border border-[#D4AF37]/30 flex items-center justify-center mb-6 shadow-lg`}>
                    <pillar.icon size={28} className="text-[#D4AF37]" aria-label={`${pillar.title} icon`} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed mb-6 flex-grow font-light text-sm">
                    {pillar.description}
                  </p>
                  
                  <div className="flex items-center text-xs font-medium text-[#D4AF37] mt-auto uppercase tracking-wider">
                    Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Services Block - Legal Positioning */}
      <section className="py-16 bg-[#0B0B0D]/50 border-y border-[#3A3F47]">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-start gap-6 p-8 bg-[#0B0B0D] rounded-xl border border-[#3A3F47]">
               <AlertCircle className="text-[#D4AF37] flex-shrink-0 mt-1" size={28} aria-label="Advisory notice icon" />
               <div>
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-4">Residential Services Advisory</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed font-light">
                    Rahvion specializes in remote technical support for residential homes and personal home offices. We focus on software troubleshooting, Wi-Fi optimization, account security, and empowering you to use your devices safely. Services are advisory and best-effort. We do not perform in-wall electrical work or structural modifications. Homeowners retain control and responsibility for their personal data and physical property.
                  </p>
               </div>
            </div>
         </div>
      </section>

      <ServiceAreas />

      {/* Why Choose Rahvion - as a contact option */}
      <section className="py-32 relative bg-[#0B0B0D]">
        <MathGridBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0B0B0D] backdrop-blur-lg rounded-xl p-12 border border-[#3A3F47] shadow-lg max-w-3xl mx-auto"
          >
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-6">Need Help with Your Home Tech?</h3>
            <p className="text-[#A0A0A0] text-xl mb-10 font-light">
              Talk to our team about securing your home network and devices today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-now"
                onClick={() => trackEvent('cta_book_now_click', { location: 'home_footer' })}
                className="inline-flex items-center justify-center space-x-3 bg-[#D4AF37] hover:bg-[#F5F5F5] text-[#0B0B0D] font-bold py-4 px-8 rounded-full shadow-lg transition-colors tracking-wide text-lg"
              >
                <span>Book Now</span>
              </Link>
              <a
                href="tel:+14104298159"
                onClick={() => trackEvent('cta_phone_click', { location: 'home_footer' })}
                className="inline-flex items-center justify-center space-x-3 bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] font-medium py-4 px-8 rounded-full shadow-lg transition-colors tracking-wide text-lg"
              >
                <Phone size={20} />
                <span>Call Support: 410-429-8159</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;