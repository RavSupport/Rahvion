import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const NEIGHBORHOODS = [
  { name: 'Bel Air', description: 'Our home base — fast on-site and remote support for Bel Air homeowners.' },
  { name: 'Fallston', description: 'Wi-Fi optimization and family device support across Fallston households.' },
  { name: 'Forest Hill', description: 'Proactive security and PC tune-ups for Forest Hill residents.' },
  { name: 'Abingdon', description: 'Smart home setup and network troubleshooting in Abingdon.' },
  { name: 'Aberdeen', description: 'Remote and scam-shield support for Aberdeen families.' },
  { name: 'Havre de Grace', description: 'Personal IT support for homeowners along the Havre de Grace waterfront.' },
  { name: 'Jarrettsville', description: 'Rural broadband and device support for Jarrettsville homes.' },
  { name: 'Churchville', description: 'Home office connectivity and security for Churchville professionals.' }
];

const ServiceAreas = () => (
  <section className="py-24 bg-[#0B0B0D] border-t border-[#3A3F47]" aria-labelledby="service-areas-heading">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 id="service-areas-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
          Neighborhoods We Serve
        </h2>
        <p className="text-[#A0A0A0] font-light">
          Local, personal IT support for homeowners across Harford County, Maryland and the surrounding Mid-Atlantic region.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {NEIGHBORHOODS.map((n, index) => (
          <motion.div
            key={n.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#0B0B0D] border border-[#3A3F47] rounded-xl p-6 hover:border-[#D4AF37]/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={18} className="text-[#D4AF37]" aria-hidden="true" />
              <h3 className="font-serif text-lg font-bold text-[#F5F5F5]">{n.name}</h3>
            </div>
            <p className="text-sm text-[#A0A0A0] font-light">{n.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreas;
