import React, { useState } from 'react';
import { X, Key, Copy, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SecurePasswordGenerator = ({ onClose }) => {
  const { toast } = useToast();
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState('');

  const generate = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(retVal);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2"><Key /> Password Gen</h2>
      
      <div className="mb-6">
         <div className="bg-gray-100 p-4 rounded-lg break-all font-mono text-lg text-center min-h-[60px] flex items-center justify-center text-gray-800">
            {password || "Click Generate"}
         </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
         <input type="range" min="8" max="64" value={length} onChange={(e) => setLength(Number(e.target.value))} className="flex-grow accent-[#1E3A8A]" />
         <span className="font-mono font-bold text-gray-700 w-12">{length}</span>
      </div>

      <div className="flex gap-4">
         <Button onClick={generate} className="flex-1 bg-[#1E3A8A] text-white">
            <RefreshCw size={18} className="mr-2" /> Generate
         </Button>
         <Button variant="outline" onClick={() => {navigator.clipboard.writeText(password); toast({title:"Copied!"});}}>
            <Copy size={18} />
         </Button>
      </div>
    </div>
  );
};
export default SecurePasswordGenerator;