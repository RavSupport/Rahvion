import React, { useState } from 'react';
import { Cpu, X, Check, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const AIHardwareReadiness = ({ onClose }) => {
  const { toast } = useToast();
  const [specs, setSpecs] = useState({ type: 'PC', ram: '8GB', gpu: 'Integrated', storage: 'SSD' });
  const [result, setResult] = useState(null);

  const assess = () => {
    let score = 0;
    // RAM Logic
    if (specs.ram === '64GB+') score += 40;
    else if (specs.ram === '32GB') score += 30;
    else if (specs.ram === '16GB') score += 20;
    
    // GPU Logic
    if (specs.gpu.includes('RTX') || specs.gpu.includes('Apple')) score += 40;
    else if (specs.gpu.includes('GTX') || specs.gpu.includes('Radeon')) score += 20;
    
    // Storage
    if (specs.storage === 'SSD') score += 20;

    let status = 'Cloud-Dependent';
    let color = 'text-yellow-600';
    if (score > 70) { status = 'Local AI Ready'; color = 'text-green-600'; }
    if (score < 30) { status = 'Limited Capability'; color = 'text-red-600'; }

    setResult({ score, status, color });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2"><Cpu /> AI Hardware Readiness</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
         <div>
           <label className="block text-sm font-medium mb-1 text-gray-700">Device Type</label>
           <select className="w-full p-2 border rounded text-gray-900" onChange={(e) => setSpecs({...specs, type: e.target.value})}>
             <option>PC</option><option>Laptop</option><option>Mac</option>
           </select>
         </div>
         <div>
           <label className="block text-sm font-medium mb-1 text-gray-700">RAM</label>
           <select className="w-full p-2 border rounded text-gray-900" onChange={(e) => setSpecs({...specs, ram: e.target.value})}>
             <option>4GB</option><option>8GB</option><option>16GB</option><option>32GB</option><option>64GB+</option>
           </select>
         </div>
         <div>
           <label className="block text-sm font-medium mb-1 text-gray-700">GPU</label>
           <select className="w-full p-2 border rounded text-gray-900" onChange={(e) => setSpecs({...specs, gpu: e.target.value})}>
             <option>Integrated</option><option>NVIDIA GTX</option><option>NVIDIA RTX</option><option>Apple Silicon</option>
           </select>
         </div>
         <div>
           <label className="block text-sm font-medium mb-1 text-gray-700">Storage</label>
           <select className="w-full p-2 border rounded text-gray-900" onChange={(e) => setSpecs({...specs, storage: e.target.value})}>
             <option>HDD</option><option>SSD</option>
           </select>
         </div>
      </div>
      
      <Button onClick={assess} className="w-full bg-[#1E3A8A] text-white mb-6">Analyze Hardware</Button>

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gray-50 p-6 rounded-xl border">
          <h3 className={`text-xl font-bold ${result.color} mb-2`}>{result.status}</h3>
          <p className="text-gray-600 text-sm">
            Based on your specs, your capability score is {result.score}/100. 
            {result.score > 70 ? " You can run local LLMs like Llama-3-8B comfortably." : " You should rely on cloud tools like ChatGPT or upgrade your GPU/RAM."}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default AIHardwareReadiness;