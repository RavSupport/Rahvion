import React, { useState, useEffect } from 'react';
import { Copy, X, Heart, Wind, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

const QuantumLifeOdometer = ({ onClose }) => {
  const { toast } = useToast();
  const [birthDate, setBirthDate] = useState('');
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!birthDate) return;

    const calculate = () => {
      const start = new Date(birthDate);
      const now = new Date();
      const diff = now - start;

      // Basic Time
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor(diff / (1000 * 60));
      const seconds = Math.floor(diff / 1000);

      // Biological
      const heartbeats = Math.floor(minutes * 80); // Avg 80 bpm
      const breaths = Math.floor(minutes * 16); // Avg 16 bpm
      
      // Percentage (Avg lifespan 80 years)
      const lifespanMs = 80 * 365.25 * 24 * 60 * 60 * 1000;
      const percentage = Math.min(100, Math.max(0, (diff / lifespanMs) * 100)).toFixed(7);

      setStats({ years, months, days, hours, minutes, seconds, heartbeats, breaths, percentage });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [birthDate]);

  const handleCopy = () => {
    if (!stats) return;
    const text = `I have lived ${stats.seconds.toLocaleString()} seconds, taken ${stats.breaths.toLocaleString()} breaths, and my heart has beaten ${stats.heartbeats.toLocaleString()} times. My life odometer: ${stats.percentage}% complete.`;
    navigator.clipboard.writeText(text);
    toast({ title: "Copied to clipboard!", description: "Your life stats are ready to share." });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 md:p-8 relative overflow-hidden">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-gray-400 hover:text-gray-900" onClick={onClose}>
        <X size={24} />
      </Button>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
          <Clock className="text-[#1E3A8A]" /> Quantum Life Odometer
        </h2>
        
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter your Date of Birth</label>
          <input 
            type="date" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none text-gray-900"
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <AnimatePresence>
          {stats && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-[#1E3A8A] font-mono">{stats.seconds.toLocaleString()}</div>
                  <div className="text-xs text-blue-600 uppercase tracking-wide font-semibold mt-1">Seconds Lived</div>
                </div>
                 <div className="bg-red-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-red-600 font-mono flex items-center justify-center gap-2">
                    <Heart size={20} className="fill-red-600 animate-pulse" /> {stats.heartbeats.toLocaleString()}
                  </div>
                  <div className="text-xs text-red-600 uppercase tracking-wide font-semibold mt-1">Heartbeats</div>
                </div>
                 <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-600 font-mono flex items-center justify-center gap-2">
                    <Wind size={20} /> {stats.breaths.toLocaleString()}
                  </div>
                  <div className="text-xs text-green-600 uppercase tracking-wide font-semibold mt-1">Breaths Taken</div>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-6 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-400 text-sm">Life Completion (80yr est.)</span>
                    <span className="text-2xl font-mono text-[#D4AF37]">{stats.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-[#D4AF37]" 
                      style={{ width: `${stats.percentage}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button onClick={handleCopy} variant="outline" className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-blue-50">
                  <Copy size={16} className="mr-2" /> Copy My Stats
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuantumLifeOdometer;