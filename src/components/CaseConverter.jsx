import React, { useState } from 'react';
import { X, AlignLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseConverter = ({ onClose }) => {
  const [text, setText] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2"><AlignLeft /> Case Converter</h2>
      
      <textarea 
        className="w-full h-32 p-3 border rounded mb-4 text-gray-800" 
        placeholder="Enter text..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      
      <div className="grid grid-cols-2 gap-2">
         <Button variant="outline" size="sm" onClick={() => setText(text.toUpperCase())}>UPPERCASE</Button>
         <Button variant="outline" size="sm" onClick={() => setText(text.toLowerCase())}>lowercase</Button>
         <Button variant="outline" size="sm" onClick={() => setText(text.replace(/\b\w/g, l => l.toUpperCase()))}>Title Case</Button>
         <Button variant="outline" size="sm" onClick={() => setText(text.split('').reverse().join(''))}>Reverse</Button>
      </div>
    </div>
  );
};
export default CaseConverter;