import React, { useState } from 'react';
import { Radio, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IoTShadowMap = ({ onClose }) => {
  const [selected, setSelected] = useState({});
  const [score, setScore] = useState(null);

  const categories = [
    "Smart Speakers (Alexa/Google)", "Smart Cameras (Ring/Nest)", "Smart Locks", 
    "Thermostats", "Smart Plugs/Lights", "Wearables", "Smart TVs"
  ];

  const toggle = (cat) => {
    setSelected(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const analyze = () => {
    const count = Object.values(selected).filter(Boolean).length;
    // Arbitrary risk calculation: more devices = higher attack surface
    const riskScore = Math.min(100, count * 12); 
    setScore(riskScore);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2"><Radio /> IoT Shadow Map</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {categories.map(cat => (
          <label key={cat} className="flex items-center space-x-3 p-3 border rounded hover:bg-gray-50 cursor-pointer">
            <input 
              type="checkbox" 
              checked={!!selected[cat]} 
              onChange={() => toggle(cat)}
              className="w-5 h-5 text-[#1E3A8A] rounded focus:ring-[#1E3A8A]"
            />
            <span className="text-gray-700 text-sm">{cat}</span>
          </label>
        ))}
      </div>

      <Button onClick={analyze} className="w-full bg-[#1E3A8A] text-white">Assess Vulnerability Surface</Button>

      {score !== null && (
        <div className="mt-6 bg-gray-50 p-6 rounded-xl border text-center">
          <div className="text-sm text-gray-500 mb-1">Attack Surface Score</div>
          <div className={`text-4xl font-bold ${score > 50 ? 'text-red-600' : 'text-green-600'} mb-2`}>
            {score}/100
          </div>
          <p className="text-sm text-gray-600">
            {score > 50 ? "High exposure. Ensure all devices are on a Guest Network." : "Moderate/Low exposure. Keep firmware updated."}
          </p>
        </div>
      )}
    </div>
  );
};

export default IoTShadowMap;