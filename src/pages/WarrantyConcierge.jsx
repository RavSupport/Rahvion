import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Phone, Truck, CheckCircle, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const WarrantyConcierge = () => {
  const steps = [
    { icon: Phone, title: 'Tell Us The Issue', desc: 'Call us when something breaks.' },
    { icon: FileText, title: 'We Check Warranty', desc: 'We dig up the receipts and policies.' },
    { icon: Truck, title: 'We Start the Claim', desc: 'We handle the forms and filings.' },
    { icon: ShieldCheck, title: 'We Track It', desc: 'We ensure nothing gets lost.' },
    { icon: Headphones, title: 'We Talk to Them', desc: 'We sit on hold so you don\'t have to.' },
    { icon: CheckCircle, title: 'Device Fixed', desc: 'You get your working device back.' },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Home Warranty Management | Device Warranty Concierge | Rahvion</title>
        <meta name="description" content="We handle your home electronics warranties and repairs. Don't sit on hold or fight with manufacturers. We do it for you." />
        <meta name="keywords" content="Home Warranty Management, Electronics Warranty, Device Repair, Warranty Claims Service" />
      </Helmet>

      <section className="py-24 relative min-h-screen bg-[#0B0B0D]">
        <MathGridBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#F5F5F5]">
              Total Home <span className="text-[#D4AF37]">Device Protection</span>
            </h1>
            <p className="text-xl text-[#A0A0A0] mb-8 max-w-3xl mx-auto font-light">
              When your TV, laptop, or smart fridge breaks, don't spend hours on hold. We handle the warranty claims, repairs, and manufacturer disputes for you.
            </p>
            <a href="mailto:helpdesk@rahvion.com?subject=Warranty%20Concierge%20Request">
               <Button size="lg" className="bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] px-8 py-6 text-lg rounded-full font-medium tracking-wide">
                  Get Warranty Help
               </Button>
            </a>
          </motion.div>

          {/* Section 1: Image & Advocacy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative rounded-2xl overflow-hidden border border-[#3A3F47] shadow-2xl"
             >
                <div className="absolute inset-0 bg-[#0B0B0D]/50 mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1444858022246-8041d3f55938" 
                  alt="Rahvion specialist helping with warranty paperwork" 
                  className="w-full h-full object-cover min-h-[400px]"
                />
             </motion.div>
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-6"
             >
                <h2 className="font-serif text-3xl font-bold text-[#F5F5F5]">We Fight for Homeowners</h2>
                <p className="text-[#A0A0A0] text-lg leading-relaxed font-light">
                   Household electronics are expensive. When they break, dealing with customer service can ruin your week.
                </p>
                <p className="text-[#A0A0A0] text-lg leading-relaxed font-light">
                   We act as your personal representative. Whether it's a laptop, a smart washer, or a home theater system, we manage the return and repair process. We speak the technical language to ensure manufacturers honor their warranties and treat you fairly.
                </p>
                
                <div className="bg-[#0B0B0D] border border-[#3A3F47] p-6 rounded-xl mt-6">
                   <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-4">Devices We Help With</h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#A0A0A0]">
                      <li className="flex items-center"><CheckCircle size={16} className="text-[#D4AF37] mr-2"/> Personal Computers & Laptops</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-[#D4AF37] mr-2"/> Smart Home Hubs & Cameras</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-[#D4AF37] mr-2"/> TVs & Home Theater</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-[#D4AF37] mr-2"/> Wi-Fi Routers & Modems</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-[#D4AF37] mr-2"/> Printers & Scanners</li>
                      <li className="flex items-center"><CheckCircle size={16} className="text-[#D4AF37] mr-2"/> Tablets & Mobile Phones</li>
                   </ul>
                </div>
             </motion.div>
          </div>

          {/* Section 3: How It Works */}
          <div className="mb-24">
             <h2 className="font-serif text-3xl font-bold text-[#F5F5F5] text-center mb-12">How It Works</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {steps.map((step, index) => (
                   <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#0B0B0D] border border-[#3A3F47] p-4 rounded-xl text-center flex flex-col items-center h-full"
                   >
                      <div className="w-12 h-12 rounded-full bg-[#0B0B0D] text-[#D4AF37] flex items-center justify-center mb-4 border border-[#3A3F47]">
                         <step.icon size={24} aria-label={`${step.title} icon`} />
                      </div>
                      <h4 className="font-bold text-[#F5F5F5] mb-2">{step.title}</h4>
                      <p className="text-xs text-[#A0A0A0] font-light">{step.desc}</p>
                   </motion.div>
                ))}
             </div>
          </div>

          {/* Section 4: Member Benefit */}
          <div className="bg-[#0B0B0D]/50 border border-[#D4AF37]/20 rounded-2xl p-12 text-center relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="font-serif text-3xl font-bold text-[#F5F5F5] mb-4">Included for Members</h2>
                <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-8 font-light">
                   Warranty Concierge service is included free with every Rahvion membership. Not a member? We can still help for a one-time consultation fee.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <a href="mailto:helpdesk@rahvion.com?subject=Warranty%20Concierge%20Request">
                     <Button className="bg-[#D4AF37] text-[#0B0B0D] hover:bg-[#F5F5F5] font-bold px-8 py-6 rounded-full tracking-wide">
                        Request Help Now
                     </Button>
                   </a>
                </div>
             </div>
          </div>
          
        </div>
      </section>
    </PageTransition>
  );
};

export default WarrantyConcierge;