import React from 'react';
import { X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SmartEnergyOptimizer = ({ onClose }) => (
  <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
    <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
    <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2"><Zap /> Energy Optimizer</h2>
    <p className="text-gray-500 mb-4">Calculate the cost of leaving your tech running 24/7.</p>
    <div className="bg-green-50 p-4 rounded text-sm text-green-800 border border-green-200">
       Input wattage and hours to see annual cost and CO2 impact. (Simulation)
    </div>
  </div>
);
export default SmartEnergyOptimizer;