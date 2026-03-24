import React from 'react';
import { X, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigitalCircadianSync = ({ onClose }) => (
  <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
    <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
    <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2"><Moon /> Digital Circadian Sync</h2>
    <p className="text-gray-500 mb-4">Optimize your screen time for better sleep.</p>
    <div className="bg-yellow-50 p-4 rounded text-sm text-yellow-800 border border-yellow-200">
       Calculates optimal blue-light cutoff times based on your wake-up schedule. (Simulation)
    </div>
  </div>
);
export default DigitalCircadianSync;