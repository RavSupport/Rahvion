
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Wifi, Smartphone, Lock, HardDrive, FileCheck, Home, AlertCircle, Flag, Cpu, Check, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';

const ServicesPage = () => {
  const { toast } = useToast();
  const [networkForm, setNetworkForm] = useState({ type: 'Wi-Fi Issues', devices: '', homeSize: '' });

  const sendMail = (to, subject, body) => {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleNetworkSubmit = (e) => {
    e.preventDefault();
    const body = `Issue Type: ${networkForm.type}\nConnected Devices: ${networkForm.devices}\nHome Size: ${networkForm.homeSize}`;
    sendMail("helpdesk@rahvion.com", "Home Network Consultation Request", body);
    toast({ title: "Request Sent", description: "Opening your email client to complete submission." });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Home Wi-Fi Support & Services | Smart Home Setup | Rahvion</title>
        <meta name="description" content="Comprehensive home IT services: Wi-Fi optimization, cybersecurity, device management, and smart home AI automations tailored for your lifestyle." />
        <meta name="keywords" content="Home Wi-Fi Support, Smart Home Setup, Device Management, AI Home Automation, Residential IT Services" />
      </Helmet>

      <div className="relative bg-[#0B0B0D]">
        <MathGridBackground />
        
        {/* Header */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
             <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1643101807331-21a4a3f081d5)',
                filter: 'brightness(0.3) grayscale(0.5)'
              }}
              aria-label="Modern smart home technology background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/80 to-transparent" />
            <div className="relative z-10 text-center container mx-auto px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#F5F5F5]"
              >
                Home Technology <span className="text-[#D4AF37]">Services</span>
              </motion.h1>
              <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto font-light">
                Professional-grade support for your personal digital life.
              </p>
              <div className="mt-8 text-sm text-[#A0A0A0] font-medium tracking-wide">
                America's Personal IT Department
              </div>
            </div>
        </section>

        {/* Pricing & Policy Banner */}
        <section className="py-12 bg-[#0B0B0D]/20 border-y border-[#3A3F47] relative z-20">
           <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Standard Pricing */}
                <div className="bg-[#0B0B0D] p-6 rounded-xl border border-[#3A3F47]">
                   <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-4 flex items-center gap-2">
                     <DollarSign size={20} className="text-[#D4AF37]" /> Service Rates
                   </h3>
                   <ul className="space-y-3 text-sm text-[#A0A0A0]">
                      <li className="flex justify-between border-b border-[#3A3F47] pb-2">
                         <span>Standard Hourly Rate:</span>
                         <span className="text-[#F5F5F5] font-bold">$89.99/hr + tax</span>
                      </li>
                      <li className="text-xs text-[#A0A0A0]/70 italic">*1-hour minimum for all billable sessions (Non-Members).</li>
                      <li className="mt-4 pt-2 font-semibold text-[#D4AF37]">Approval is required before billable work begins.</li>
                   </ul>
                </div>

                {/* After Hours Policy */}
                <div className="bg-[#0B0B0D] p-6 rounded-xl border border-[#3A3F47]">
                   <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-4 flex items-center gap-2">
                     <Clock size={20} className="text-[#D4AF37]" /> After-Hours Policy
                   </h3>
                   <p className="text-xs text-[#A0A0A0] mb-3">
                     Window: 6:00 PM – 8:00 AM ET, plus Weekends & Federal Holidays.
                   </p>
                   <ul className="space-y-3 text-sm text-[#A0A0A0]">
                      <li className="flex justify-between border-b border-[#3A3F47] pb-2">
                         <span>Non-Member Rate:</span>
                         <span className="text-[#F5F5F5] font-bold">$100 (1st hr)</span>
                      </li>
                      <li className="flex justify-between border-b border-[#3A3F47] pb-2">
                         <span>Member Emergency:</span>
                         <span className="text-[#D4AF37] font-bold">$0.00 (Included)</span>
                      </li>
                      <li className="flex justify-between">
                         <span>Member Non-Emergency:</span>
                         <span className="text-[#F5F5F5]">Standard Rate</span>
                      </li>
                   </ul>
                </div>
              </div>
           </div>
        </section>

        {/* Scope of Services Block */}
        <section className="py-12 bg-[#0B0B0D]">
           <div className="container mx-auto px-4 max-w-5xl">
              <div className="flex items-start gap-4 p-6 bg-[#0B0B0D] rounded-xl border border-[#3A3F47]">
                 <AlertCircle className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} aria-label="Notice" />
                 <div>
                    <h3 className="font-serif text-lg font-bold text-[#F5F5F5] mb-2">Residential Services Notice</h3>
                    <p className="text-sm text-[#A0A0A0] leading-relaxed font-light">
                      Rahvion provides remote technical support for residential homes. We focus on troubleshooting, optimization, and education. We are advisors and troubleshooters, not contractors. We do not perform in-wall wiring, electrical work, or structural home modifications. You retain full ownership and responsibility for your data and devices.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* PILLAR 1: HOME NETWORK & WI-FI */}
        <section className="py-20 relative z-10 border-t border-[#3A3F47]">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-xl bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/20">
                <Wifi size={32} className="text-[#D4AF37]" aria-label="Wi-Fi icon" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#F5F5F5]">Home Wi-Fi & Networking</h2>
                <p className="text-[#D4AF37] mb-1">Fast, Reliable Internet for Every Room</p>
                <div className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                   <Flag size={14} className="text-[#D4AF37]"/>
                   <span>Support provided by our US-based team.</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-8 border border-[#3A3F47]">
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-4 flex items-center gap-2">
                    <Wifi size={20} className="text-[#D4AF37]"/> Wi-Fi Optimization
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4 font-light">
                    Eliminate dead zones and buffering. We analyze your home layout and recommend the best router placement or mesh system settings.
                  </p>
                </div>
                <div className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-8 border border-[#3A3F47]">
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-4 flex items-center gap-2">
                    <Lock size={20} className="text-[#D4AF37]"/> Network Security
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4 font-light">
                    Stop neighbors from stealing your Wi-Fi and hackers from accessing your devices. We help you secure your router with proper encryption.
                  </p>
                </div>
                <div className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-8 border border-[#3A3F47]">
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-4 flex items-center gap-2">
                     <FileCheck size={20} className="text-[#D4AF37]"/> Smart Home Setup
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4 font-light">
                     Get your smart TV, doorbell, and thermostat talking to each other. We troubleshoot connection issues for all IoT devices.
                  </p>
                </div>
            </div>

             {/* Network Intake Form */}
             <div className="bg-[#0B0B0D] backdrop-blur-md rounded-xl p-8 border border-[#3A3F47] shadow-xl max-w-3xl mx-auto">
                <h3 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-6 text-center">Fix My Home Wi-Fi</h3>
                <form onSubmit={handleNetworkSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#A0A0A0] mb-1">What's the problem?</label>
                      <select 
                        className="w-full bg-[#0B0B0D] border border-[#3A3F47] rounded-md p-3 text-[#F5F5F5] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                        value={networkForm.type}
                        onChange={(e) => setNetworkForm({...networkForm, type: e.target.value})}
                      >
                        <option value="Wi-Fi Dead Zones">Wi-Fi Dead Zones</option>
                        <option value="Slow Speed">Slow Speed / Buffering</option>
                        <option value="Device Won't Connect">Device Won't Connect</option>
                        <option value="Security Concern">Security Concern</option>
                      </select>
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-[#A0A0A0] mb-1">Approx. Home Size (sq ft)</label>
                       <input 
                        type="text" 
                        className="w-full bg-[#0B0B0D] border border-[#3A3F47] rounded-md p-3 text-[#F5F5F5] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                        placeholder="e.g. 2500"
                        value={networkForm.homeSize}
                        onChange={(e) => setNetworkForm({...networkForm, homeSize: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A0A0A0] mb-1">Number of Connected Devices (Approx)</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#0B0B0D] border border-[#3A3F47] rounded-md p-3 text-[#F5F5F5] focus:ring-2 focus:ring-[#D4AF37] outline-none"
                      placeholder="e.g. 15 (Phones, TVs, Laptops...)"
                      value={networkForm.devices}
                      onChange={(e) => setNetworkForm({...networkForm, devices: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#0B0B0D] text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37]/10 mt-2 font-medium">
                    Request Network Help
                  </Button>
                </form>
              </div>
          </div>
        </section>
        
        {/* NEW PILLAR: AI AUTOMATIONS */}
        <section className="py-20 relative z-10 border-t border-[#3A3F47] bg-[#0B0B0D]/30">
          <div className="container mx-auto px-4">
             <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-xl bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/20">
                <Cpu size={32} className="text-[#D4AF37]" aria-label="AI Icon" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#F5F5F5]">Customized AI Automations</h2>
                <p className="text-[#D4AF37]">Smart Living, Simplified</p>
              </div>
            </div>
            
            <div className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-10 border border-[#3A3F47] shadow-xl">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-4">Making Your Home Think For You</h3>
                    <p className="text-[#A0A0A0] text-lg leading-relaxed mb-6 font-light">
                      We help you set up smart home automations tailored to your lifestyle. From voice assistants that actually understand you to automated routines that secure your home at night, we make AI work for your home, not the other way around.
                    </p>
                    <ul className="space-y-3 mb-8">
                       <li className="flex items-center text-[#A0A0A0]"><Check size={18} className="text-[#D4AF37] mr-3" /> Voice Assistant Optimization (Alexa/Siri/Google)</li>
                       <li className="flex items-center text-[#A0A0A0]"><Check size={18} className="text-[#D4AF37] mr-3" /> Automated Security Routines</li>
                       <li className="flex items-center text-[#A0A0A0]"><Check size={18} className="text-[#D4AF37] mr-3" /> Smart Lighting & Climate Schedules</li>
                       <li className="flex items-center text-[#A0A0A0]"><Check size={18} className="text-[#D4AF37] mr-3" /> Custom Family Dashboards</li>
                    </ul>
                    <a href="mailto:support@rahvion.com?subject=AI%20Automation%20Inquiry">
                      <Button className="bg-[#D4AF37] text-[#0B0B0D] hover:bg-[#F5F5F5] font-bold px-8 py-3 rounded-full">
                         Explore AI Solutions
                      </Button>
                    </a>
                  </div>
                  <div className="relative h-64 lg:h-full min-h-[300px] rounded-xl overflow-hidden border border-[#3A3F47]">
                     <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: 'url(https://images.unsplash.com/photo-1558002038-1091a1661116)',
                          filter: 'brightness(0.4) grayscale(0.2)'
                        }}
                        aria-label="Smart home automation interface"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Sparkles size={64} className="text-[#D4AF37]/50" />
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* PILLAR 2: PERSONAL DEVICE MANAGEMENT */}
        <section className="py-20 relative z-10 border-t border-[#3A3F47] bg-[#0B0B0D]/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-xl bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/20">
                <Smartphone size={32} className="text-[#D4AF37]" aria-label="Smartphone icon" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#F5F5F5]">Personal Device Management</h2>
                <p className="text-[#D4AF37]">Care for Your Computers & Phones</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-[#0B0B0D] rounded-xl p-8 border border-[#3A3F47]">
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-2 flex items-center gap-2"><HardDrive size={20} className="text-[#D4AF37]"/> Backup & Recovery</h3>
                  <p className="text-[#A0A0A0] font-light">Don't lose your family photos. We help you set up automatic, secure backups for all your computers and phones so memories are safe.</p>
                </div>
                <div className="bg-[#0B0B0D] rounded-xl p-8 border border-[#3A3F47]">
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-2 flex items-center gap-2"><Shield size={20} className="text-[#D4AF37]"/> Virus & Malware Removal</h3>
                  <p className="text-[#A0A0A0] font-light">Computer acting strange? We scan, clean, and restore your devices to full speed, removing any malicious software.</p>
                </div>
              </div>

               <div className="space-y-8">
                <div className="bg-[#0B0B0D] rounded-xl p-8 border border-[#3A3F47]">
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-2 flex items-center gap-2"><Home size={20} className="text-[#D4AF37]"/> New Device Setup</h3>
                  <p className="text-[#A0A0A0] font-light">Got a new laptop or phone? We help you transfer your data, set up your accounts, and get everything working just like the old one.</p>
                </div>
                <div className="bg-[#0B0B0D] rounded-xl p-8 border border-[#3A3F47]">
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-2 flex items-center gap-2"><Sparkles size={20} className="text-[#D4AF37]"/> Performance Tuning</h3>
                  <p className="text-[#A0A0A0] font-light">Make your old computer feel new again. We optimize settings, remove bloatware, and speed up slow devices.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
               <a href="mailto:helpdesk@rahvion.com?subject=Device%20Support%20Request">
                  <Button size="lg" className="bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] px-8 py-6 text-lg font-medium tracking-wide">
                     Get Device Support
                  </Button>
               </a>
            </div>
          </div>
        </section>

        {/* PILLAR 3: CYBERSECURITY */}
        <section className="py-20 relative z-10 border-t border-[#3A3F47]">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-xl bg-[#0B0B0D] flex items-center justify-center border border-[#D4AF37]/20">
                <Shield size={32} className="text-[#D4AF37]" aria-label="Shield icon" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#F5F5F5]">Home Cybersecurity</h2>
                <p className="text-[#D4AF37]">Protecting Your Family's Identity</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-8 border border-[#3A3F47]">
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-4">Identity Protection</h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4 font-light">
                    We guide you on how to lock down your credit, remove your info from data broker sites, and monitor for identity theft.
                  </p>
                </div>
                <div className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-8 border border-[#3A3F47]">
                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] mb-4">Parental Controls</h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4 font-light">
                    Keep your kids safe online. We help you set up content filters, screen time limits, and monitoring on all family devices.
                  </p>
                </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
