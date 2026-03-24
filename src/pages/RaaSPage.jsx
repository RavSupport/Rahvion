import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Settings, DollarSign, TrendingUp, Cpu, CheckCircle2, 
  Wrench, Rocket, Package, Layers, ShieldCheck, Zap, Mail, ArrowRight
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const RaaSPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Robotics-as-a-Service (RaaS) | Rahvion, LLC | Warehouse Automation Solutions</title>
        <meta name="description" content="Deploy autonomous robots on-demand. Scale your warehouse fleet with the seasons. Rahvion RaaS: No capital cost, full maintenance included, Rahvion AOS™ managed." />
        <meta name="keywords" content="robotics-as-a-service, warehouse automation, AMR, cobot, autonomous robots, RaaS pricing, warehouse robots" />
      </Helmet>

      <div className="bg-[var(--raas-deep-navy)] min-h-screen text-[var(--raas-white)] font-sans selection:bg-[var(--raas-electric-blue)] selection:text-white">
        
        {/* SECTION 1 - HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[var(--raas-deep-navy)] to-[var(--raas-black)]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1678132085824-80d99fd48a8e" 
              alt="Autonomous warehouse robots in action" 
              className="w-full h-full object-cover opacity-30"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--raas-black)] via-[var(--raas-deep-navy)]/80 to-transparent" />
          </div>
          
          <div className="raas-container relative z-10 text-center max-w-4xl mx-auto mt-12 mb-24">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="raas-h1 mb-6">Robotics-as-a-Service <span className="text-[var(--raas-electric-blue)]">(RaaS)</span></h1>
              <h2 className="text-[24px] md:text-[32px] font-medium text-[var(--raas-light-gray)] mb-6 leading-tight">
                Intelligent Warehouse Automation Without the Capital Cost
              </h2>
              <p className="raas-body text-xl mb-10 max-w-2xl mx-auto">
                Deploy autonomous robots on-demand. Scale your fleet with the seasons. Let Rahvion AOS™ manage everything.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:helpdesk@rahvion.com?subject=RaaS%207-Day%20Pilot%20Request" 
                  aria-label="Start Your 7-Day Pilot"
                  className="bg-[var(--raas-electric-blue)] hover:bg-[var(--raas-bright-electric)] text-white px-8 py-4 rounded-full raas-cta transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)]"
                >
                  Start Your 7-Day Pilot <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 - THE LABOR FORCE OF THE FUTURE */}
        <section className="py-24 bg-[var(--raas-black)] border-t border-[var(--raas-dark-navy)]">
          <div className="raas-container raas-grid-3 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="raas-h2 mb-6">The Labor Force of the Future, <span className="text-[var(--raas-electric-blue)]">Today.</span></h2>
              <p className="raas-body mb-6">
                Stop worrying about hiring shortages, capital expenditures, and complex integrations. Rahvion’s RaaS model gives you immediate access to cutting-edge robotics.
              </p>
              <p className="raas-body">
                We provide the hardware, the software intelligence, and the maintenance. You just pay a predictable monthly fee.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { title: "Enterprise Hardware", icon: Cpu, desc: "Latest AMR and Cobot technologies." },
                { title: "Rahvion AOS™", icon: Settings, desc: "Centralized AI brain for your fleet." },
                { title: "24/7 Maintenance", icon: Wrench, desc: "We fix it, swap it, and update it." },
                { title: "Pay-Per-Use Model", icon: DollarSign, desc: "Opex instead of Capex. Predictable costs." }
              ].map((item, i) => (
                <div key={i} className="bg-[var(--raas-dark-navy)]/50 p-6 rounded-xl border border-[var(--raas-electric-blue)]/30 flex items-start gap-4">
                  <div className="bg-[var(--raas-electric-blue)]/20 p-3 rounded-lg text-[var(--raas-electric-blue)]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="raas-h3 text-[18px] mb-2">{item.title}</h3>
                    <p className="raas-body text-[14px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 - WHY RaaS */}
        <section className="py-24 bg-[var(--raas-deep-navy)]">
          <div className="raas-container">
            <div className="text-center mb-16">
              <h2 className="raas-h2 mb-4">Why Choose <span className="text-[var(--raas-electric-blue)]">RaaS?</span></h2>
              <p className="raas-body max-w-2xl mx-auto">Transform your operations without the traditional risks of automation deployment.</p>
            </div>
            <div className="raas-grid-4">
              {[
                { title: "Zero Capital Expenditure", icon: DollarSign, text: "No massive upfront costs. Pay monthly as an operating expense." },
                { title: "Instant Scalability", icon: TrendingUp, text: "Add or remove robots based on seasonal demand peaks." },
                { title: "Total Maintenance", icon: Wrench, text: "Hardware breaks? We replace it immediately at no extra cost." },
                { title: "Rahvion AOS™ Managed", icon: Cpu, text: "Our AI brain optimizes routes and tasks automatically." }
              ].map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="raas-card"
                >
                  <benefit.icon className="text-[var(--raas-electric-blue)] mb-6" size={40} />
                  <h3 className="raas-h3 text-[20px] mb-3">{benefit.title}</h3>
                  <p className="raas-body text-[14px]">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 - SERVICE TIERS */}
        <section className="py-24 bg-[var(--raas-black)]">
          <div className="raas-container">
            <div className="text-center mb-16">
              <h2 className="raas-h2 mb-4">Subscription <span className="text-[var(--raas-electric-blue)]">Tiers</span></h2>
              <p className="raas-body max-w-2xl mx-auto">Select the operational level that fits your warehouse needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tier 1 */}
              <motion.div whileHover={{ y: -10 }} className="bg-gradient-to-b from-[var(--raas-dark-navy)] to-[var(--raas-black)] border-[3px] border-[var(--raas-electric-blue)]/50 hover:border-[var(--raas-bright-electric)] rounded-[16px] p-10 flex flex-col shadow-lg transition-all duration-300">
                <Package className="text-[var(--raas-electric-blue)] mb-4" size={32} />
                <h3 className="raas-h3 mb-2">The Porter</h3>
                <p className="raas-body text-sm mb-6 flex-grow">Entry-level point-to-point material transport.</p>
                <div className="mb-6 pb-6 border-b border-[var(--raas-light-gray)]/20">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">$499</span>
                    <span className="text-[var(--raas-light-gray)] text-sm mb-1">/mo per bot</span>
                  </div>
                  <p className="text-[12px] text-[var(--raas-light-gray)]/60 mt-1">+$1,500 Setup Fee</p>
                </div>
                <ul className="space-y-3 mb-8 text-[14px] text-[var(--raas-light-gray)] flex-grow">
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[var(--raas-electric-blue)] shrink-0 mt-0.5" /> Euler Smart Cart Compatible</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[var(--raas-electric-blue)] shrink-0 mt-0.5" /> Point A to B Navigation</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[var(--raas-electric-blue)] shrink-0 mt-0.5" /> Next-Day Hardware Swap</li>
                </ul>
                <a href="mailto:helpdesk@rahvion.com?subject=Porter%20Tier%20Inquiry" className="w-full text-center py-3 rounded-lg border-2 border-[var(--raas-electric-blue)] text-[var(--raas-electric-blue)] hover:bg-[var(--raas-electric-blue)] hover:text-white transition-colors font-bold">Select Tier</a>
              </motion.div>

              {/* Tier 2 */}
              <motion.div whileHover={{ y: -10 }} className="bg-gradient-to-b from-[#111827] to-[#030712] border-[3px] border-[var(--raas-electric-blue)] rounded-[16px] p-10 flex flex-col shadow-[0_0_30px_rgba(14,165,233,0.3)] relative transform md:-translate-y-4 transition-all duration-300 z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[var(--raas-electric-blue)] text-white px-4 py-1 rounded-b-lg text-xs font-bold uppercase tracking-wider">Most Popular</div>
                <Layers className="text-[var(--raas-bright-electric)] mb-4 mt-2" size={32} />
                <h3 className="raas-h3 mb-2">The Specialist</h3>
                <p className="raas-body text-sm mb-6 flex-grow">Advanced cobot manipulation and intelligent routing.</p>
                <div className="mb-6 pb-6 border-b border-[var(--raas-light-gray)]/20">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">$899</span>
                    <span className="text-[var(--raas-light-gray)] text-sm mb-1">/mo per bot</span>
                  </div>
                  <p className="text-[12px] text-[var(--raas-light-gray)]/60 mt-1">+$2,500 Setup Fee</p>
                </div>
                <ul className="space-y-3 mb-8 text-[14px] text-[var(--raas-light-gray)] flex-grow">
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[var(--raas-bright-electric)] shrink-0 mt-0.5" /> AMR Chassis & Mini-Nano</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[var(--raas-bright-electric)] shrink-0 mt-0.5" /> API Integration (WMS/ERP)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[var(--raas-bright-electric)] shrink-0 mt-0.5" /> 12-Hour Hardware Swap</li>
                </ul>
                <a href="mailto:helpdesk@rahvion.com?subject=Specialist%20Tier%20Inquiry" className="w-full text-center py-3 rounded-lg bg-[var(--raas-electric-blue)] text-white hover:bg-[var(--raas-bright-electric)] transition-colors font-bold shadow-lg">Select Tier</a>
              </motion.div>

              {/* Tier 3 */}
              <motion.div whileHover={{ y: -10 }} className="bg-gradient-to-b from-[var(--raas-dark-navy)] to-[var(--raas-black)] border-[3px] border-[var(--raas-electric-blue)]/50 hover:border-[var(--raas-bright-electric)] rounded-[16px] p-10 flex flex-col shadow-lg transition-all duration-300">
                <Rocket className="text-[var(--raas-electric-blue)] mb-4" size={32} />
                <h3 className="raas-h3 mb-2">The Fleet Manager</h3>
                <p className="raas-body text-sm mb-6 flex-grow">Full-scale swarm intelligence for large operations.</p>
                <div className="mb-6 pb-6 border-b border-[var(--raas-light-gray)]/20">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <p className="text-[12px] text-[var(--raas-light-gray)]/60 mt-1">Enterprise Pricing</p>
                </div>
                <ul className="space-y-3 mb-8 text-[14px] text-[var(--raas-light-gray)] flex-grow">
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[var(--raas-electric-blue)] shrink-0 mt-0.5" /> All Hardware Types Included</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[var(--raas-electric-blue)] shrink-0 mt-0.5" /> Swarm Logic & Collision Prev.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-[var(--raas-electric-blue)] shrink-0 mt-0.5" /> Dedicated On-site Technician</li>
                </ul>
                <a href="mailto:helpdesk@rahvion.com?subject=Fleet%20Manager%20Tier%20Inquiry" className="w-full text-center py-3 rounded-lg border-2 border-[var(--raas-electric-blue)] text-[var(--raas-electric-blue)] hover:bg-[var(--raas-electric-blue)] hover:text-white transition-colors font-bold">Request Quote</a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - HARDWARE CATALOG */}
        <section className="py-24 bg-[var(--raas-deep-navy)] border-y border-[var(--raas-dark-navy)]">
          <div className="raas-container">
            <div className="text-center mb-16">
              <h2 className="raas-h2 mb-4">Hardware <span className="text-[var(--raas-electric-blue)]">Catalog</span></h2>
              <p className="raas-body max-w-2xl mx-auto">High-performance robotics available through our RaaS plans.</p>
            </div>
            
            <div className="raas-grid-4">
              {[
                { name: "Smart Mobile AMR Chassis", price: "$5,958", img: "https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?auto=format&fit=crop&w=400&q=80", features: ["1,000kg Payload", "Lidar SLAM Navigation", "12hr Battery Life"] },
                { name: "Euler Smart Cart", price: "$3,679", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80", features: ["Follow-Me Mode", "300kg Payload", "Auto-Dock Charging"] },
                { name: "Fairino FR16 Cobot Arm", price: "$11,699", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80", features: ["16kg Payload", "6-Axis Articulation", "Collision Detection"] },
                { name: "Pickerbot Mini-Nano", price: "$6,296", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=400&q=80", features: ["High-Speed Sorting", "Vision AI Integration", "Compact Footprint"] }
              ].map((hw, idx) => (
                <div key={idx} className="bg-[var(--raas-dark-navy)] rounded-xl overflow-hidden border border-[var(--raas-light-gray)]/10 hover:border-[var(--raas-electric-blue)] transition-all duration-300 group">
                  <div className="h-48 overflow-hidden relative">
                    {/* Fallback styling for images to ensure tech-vibe if unsplash fails */}
                    <div className="absolute inset-0 bg-[var(--raas-black)] mix-blend-overlay opacity-40 z-10 group-hover:opacity-10 transition-opacity"></div>
                    <img src={hw.img} alt={hw.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[18px] mb-1">{hw.name}</h3>
                    <p className="text-[var(--raas-electric-blue)] font-mono text-sm mb-4">Value: {hw.price}</p>
                    <ul className="space-y-2 mb-6">
                      {hw.features.map((feat, i) => (
                        <li key={i} className="text-sm text-[var(--raas-light-gray)] flex items-center gap-2">
                          <Zap size={14} className="text-[var(--raas-bright-electric)]" /> {feat}
                        </li>
                      ))}
                    </ul>
                    <a href="mailto:helpdesk@rahvion.com?subject=Hardware%20Inquiry:%20${hw.name}" className="block w-full text-center py-2 bg-[var(--raas-black)] hover:bg-[var(--raas-electric-blue)] text-white rounded text-sm font-semibold transition-colors border border-[var(--raas-light-gray)]/20 hover:border-transparent">View Details</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 - PRICING TABLE */}
        <section className="py-24 bg-[var(--raas-black)]">
          <div className="raas-container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="raas-h2 mb-4">Transparent <span className="text-[var(--raas-electric-blue)]">Pricing</span></h2>
              <p className="raas-body">Compare features across our standard operational models.</p>
            </div>
            
            <div className="overflow-x-auto rounded-xl border border-[var(--raas-dark-navy)] shadow-2xl">
              <table className="w-full text-left text-[var(--raas-white)] whitespace-nowrap">
                <thead className="bg-[var(--raas-dark-navy)] border-b-2 border-[var(--raas-electric-blue)]">
                  <tr>
                    <th className="p-4 md:p-6 font-bold text-[var(--raas-electric-blue)] tracking-wider uppercase text-sm">Tier Name</th>
                    <th className="p-4 md:p-6 font-bold text-[var(--raas-electric-blue)] tracking-wider uppercase text-sm">Robot Type</th>
                    <th className="p-4 md:p-6 font-bold text-[var(--raas-electric-blue)] tracking-wider uppercase text-sm">Monthly Fee</th>
                    <th className="p-4 md:p-6 font-bold text-[var(--raas-electric-blue)] tracking-wider uppercase text-sm">Setup Fee</th>
                    <th className="p-4 md:p-6 font-bold text-[var(--raas-electric-blue)] tracking-wider uppercase text-sm">Key Capability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--raas-dark-navy)]">
                  <tr className="bg-[var(--raas-black)] hover:bg-[var(--raas-dark-navy)]/50 transition-colors">
                    <td className="p-4 md:p-6 font-semibold">The Porter</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">Euler Smart Cart</td>
                    <td className="p-4 md:p-6 font-mono text-[var(--raas-bright-electric)]">$499</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">$1,500</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">A to B Transport</td>
                  </tr>
                  <tr className="bg-[var(--raas-dark-navy)]/30 hover:bg-[var(--raas-dark-navy)]/80 transition-colors">
                    <td className="p-4 md:p-6 font-semibold">The Specialist</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">AMR Chassis</td>
                    <td className="p-4 md:p-6 font-mono text-[var(--raas-bright-electric)]">$899</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">$2,500</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">API Integration</td>
                  </tr>
                  <tr className="bg-[var(--raas-black)] hover:bg-[var(--raas-dark-navy)]/50 transition-colors">
                    <td className="p-4 md:p-6 font-semibold">The Specialist+</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">Fairino FR16</td>
                    <td className="p-4 md:p-6 font-mono text-[var(--raas-bright-electric)]">$1,299</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">$3,500</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">Cobot Manipulation</td>
                  </tr>
                  <tr className="bg-[var(--raas-dark-navy)]/30 hover:bg-[var(--raas-dark-navy)]/80 transition-colors">
                    <td className="p-4 md:p-6 font-semibold">Fleet Manager</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">Mixed Swarm</td>
                    <td className="p-4 md:p-6 font-mono text-[var(--raas-bright-electric)]">Custom</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">Custom</td>
                    <td className="p-4 md:p-6 text-[var(--raas-light-gray)]">Swarm Logic AOS™</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 7 - CALL TO ACTION */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[var(--raas-dark-navy)] to-[var(--raas-black)] border-t border-[var(--raas-electric-blue)]/30">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-[var(--raas-electric-blue)]/10 blur-[120px] pointer-events-none rounded-full" />
          
          <div className="raas-container relative z-10 text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-sans tracking-tight">Ready to Scale?</h2>
            <p className="text-[20px] text-[var(--raas-electric-blue)] font-medium mb-4">Start Your 7-Day Pilot Program Today</p>
            <p className="raas-body mb-10 text-lg">
              Experience the power of Rahvion AOS™ and our premium hardware lineup on your own warehouse floor with zero long-term commitment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:helpdesk@rahvion.com?subject=RaaS%20Pilot%20Program"
                className="w-full sm:w-auto bg-[var(--raas-electric-blue)] hover:bg-[var(--raas-bright-electric)] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(14,165,233,0.4)]"
              >
                <Mail size={20} /> Contact Helpdesk
              </a>
              <a 
                href="mailto:helpdesk@rahvion.com?subject=Enterprise%20RaaS%20Quote"
                className="w-full sm:w-auto bg-transparent border-2 border-[var(--raas-electric-blue)] text-[var(--raas-electric-blue)] hover:bg-[var(--raas-electric-blue)] hover:text-white px-8 py-4 rounded-lg font-bold transition-all duration-300"
              >
                Request Enterprise Quote
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-2 text-[var(--raas-light-gray)]/60 text-sm font-mono">
               <ShieldCheck size={16} /> Secure, encrypted communications via Rahvion Helpdesk
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default RaaSPage;