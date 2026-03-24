import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ToolCard = ({ icon: Icon, title, description, onClick, isActive }) => {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 overflow-hidden flex flex-col h-full ${
        isActive ? 'border-[#1E3A8A] ring-2 ring-[#1E3A8A]/20' : 'border-transparent hover:border-[#1E3A8A]/30'
      }`}
    >
      <div className="p-6 flex-grow">
        <div className="w-12 h-12 bg-[#F0F9FF] rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-[#1E3A8A]" size={24} />
        </div>
        <h3 className="text-xl font-bold text-[#0F172A] mb-2 font-inter">{title}</h3>
        <p className="text-[#475569] text-sm leading-relaxed">{description}</p>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <Button 
          onClick={onClick}
          className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white h-11 text-sm font-medium rounded-lg flex items-center justify-center gap-2 group"
        >
          {isActive ? 'Close Tool' : 'Open Tool'}
          <ArrowRight size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
        </Button>
      </div>
    </motion.div>
  );
};

export default ToolCard;