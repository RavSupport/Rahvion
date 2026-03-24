import React, { useState } from 'react';
import { X, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WordCharacterCounter = ({ onClose }) => {
  const [text, setText] = useState('');

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, '').length;
  
  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2"><Type /> Word Counter</h2>
      
      <textarea 
        className="w-full h-40 p-4 border rounded-lg mb-4 text-gray-800"
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="grid grid-cols-3 gap-4 text-center">
         <div className="bg-gray-100 p-3 rounded">
            <div className="text-2xl font-bold text-[#1E3A8A]">{words}</div>
            <div className="text-xs text-gray-500">Words</div>
         </div>
         <div className="bg-gray-100 p-3 rounded">
            <div className="text-2xl font-bold text-[#1E3A8A]">{chars}</div>
            <div className="text-xs text-gray-500">Characters</div>
         </div>
         <div className="bg-gray-100 p-3 rounded">
            <div className="text-2xl font-bold text-[#1E3A8A]">{charsNoSpace}</div>
            <div className="text-xs text-gray-500">No Spaces</div>
         </div>
      </div>
    </div>
  );
};
export default WordCharacterCounter;