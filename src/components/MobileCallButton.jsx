import React from 'react';
import { Phone } from 'lucide-react';

const MobileCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a 
        href="tel:+14104298159"
        className="flex items-center gap-2 bg-[#D4AF37] text-[#0B0B0D] px-6 py-4 rounded-full font-bold shadow-lg shadow-black/50 border border-[#F5F5F5]/20 hover:scale-105 transition-transform"
      >
        <Phone size={20} fill="currentColor" />
        <span>Call Support: 410-429-8159</span>
      </a>
    </div>
  );
};

export default MobileCallButton;