import React from 'react';
import { X, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImageToPDFConverter = ({ onClose }) => (
  <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
    <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
    <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2"><FileImage /> IMG to PDF</h2>
    <p className="text-gray-500 mb-4">Convert images to PDF documents securely in browser.</p>
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-400">
       Drag and Drop images here or click to upload. (Simulation)
    </div>
  </div>
);
export default ImageToPDFConverter;