import React from 'react';
import { X, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DataSovereigntyScore = ({ onClose }) => (
  <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
    <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
    <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2"><Database /> Data Sovereignty</h2>
    <p className="text-gray-500 mb-4">Assess who owns your data across Big Tech platforms.</p>
    <div className="bg-blue-50 p-4 rounded text-sm text-blue-800 border border-blue-200">
       Select services (Google, Meta, Apple) to see privacy impact. (Simulation)
    </div>
  </div>
);
export default DataSovereigntyScore;