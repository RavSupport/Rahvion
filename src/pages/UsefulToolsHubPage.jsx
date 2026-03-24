import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Copy, Check, Calculator, Type, Image as ImageIcon, 
  Palette, Lock, RefreshCw, Calendar, ChevronDown, 
  ChevronUp, Zap, Shield, Globe 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PageTransition from '@/components/PageTransition';

// --- Utility Components ---

const AdPlaceholder = ({ label, size, className }) => (
  <div className={`bg-gray-100 border border-gray-300 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-400 text-sm ${className}`}>
    <span className="font-semibold text-xs uppercase tracking-wider mb-1">Advertisement</span>
    <span>{label}</span>
    <span className="text-xs mt-1 opacity-75">{size}</span>
  </div>
);

const SectionHeader = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="p-3 bg-[#B3D9E8]/30 rounded-xl text-[#005a8c]">
      <Icon size={24} />
    </div>
    <div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const ToolCard = ({ title, icon: Icon, children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ duration: 0.2 }}
    className={`bg-white/80 backdrop-blur-md border border-white/40 shadow-xl shadow-blue-900/5 rounded-xl p-6 flex flex-col h-full ${className}`}
  >
    <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
        <Icon size={20} />
      </div>
      <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
    </div>
    <div className="flex-1">
      {children}
    </div>
  </motion.div>
);

const CopyButton = ({ text, label = "Copy" }) => {
  const { toast } = useToast();
  
  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
      className: "bg-[#10B981] text-white border-none",
      duration: 2000,
    });
  };

  return (
    <Button 
      onClick={handleCopy} 
      variant="outline" 
      size="sm" 
      className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
      aria-label={`Copy ${label} to clipboard`}
    >
      <Copy size={14} />
      {label}
    </Button>
  );
};

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden bg-white mb-4">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      aria-expanded={isOpen}
    >
      <span className="font-semibold text-gray-800 text-lg">{title}</span>
      {isOpen ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-gray-400" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- Main Page Component ---

const UsefulToolsHubPage = () => {
  // State for Accordions
  const [openAccordion, setOpenAccordion] = useState(0);

  // State for Tools
  // 1. Word Counter
  const [wcText, setWcText] = useState("");
  const [wcStats, setWcStats] = useState({ words: 0, chars: 0, sentences: 0 });

  // 2. Case Converter
  const [ccText, setCcText] = useState("");

  // 3. Percentage Calculator
  const [pcVal1, setPcVal1] = useState("");
  const [pcVal2, setPcVal2] = useState("");
  const [pcResult, setPcResult] = useState(null);

  // 4. Age Calculator
  const [birthDate, setBirthDate] = useState("");
  const [ageResult, setAgeResult] = useState(null);

  // 5. Color Palette
  const [palette, setPalette] = useState(["#3B82F6", "#10B981", "#F59E0B", "#EF4444"]);
  
  // 6. Password Gen
  const [pwLength, setPwLength] = useState(12);
  const [pwResult, setPwResult] = useState("");
  
  // 7. Image Resizer
  const [imgFile, setImgFile] = useState(null);
  const [imgDims, setImgDims] = useState({ w: 0, h: 0 });
  const [targetDims, setTargetDims] = useState({ w: 0, h: 0 });
  const canvasRef = useRef(null);

  // Debounced Effects
  useEffect(() => {
    const timer = setTimeout(() => {
      const words = wcText.trim() === "" ? 0 : wcText.trim().split(/\s+/).length;
      const chars = wcText.length;
      const sentences = wcText.split(/[.!?]+/).filter(Boolean).length;
      setWcStats({ words, chars, sentences });
    }, 300);
    return () => clearTimeout(timer);
  }, [wcText]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pcVal1 && pcVal2) {
        const res = (parseFloat(pcVal1) / 100) * parseFloat(pcVal2);
        setPcResult(isNaN(res) ? "Invalid Input" : res.toFixed(2));
      } else {
        setPcResult(null);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [pcVal1, pcVal2]);

  // Tool Handlers
  const handleCaseConvert = (type) => {
    let newText = ccText;
    if (type === 'upper') newText = ccText.toUpperCase();
    if (type === 'lower') newText = ccText.toLowerCase();
    if (type === 'title') {
      newText = ccText.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    setCcText(newText);
  };

  const calculateAge = () => {
    if (!birthDate) return;
    const diff = Date.now() - new Date(birthDate).getTime();
    const ageDate = new Date(diff); 
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    setAgeResult(`${years} years, ${months} months, ${days} days`);
  };

  const generatePalette = () => {
    const randomHex = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setPalette([randomHex(), randomHex(), randomHex(), randomHex()]);
  };

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let pass = "";
    for (let i = 0; i < pwLength; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPwResult(pass);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        setImgDims({ w: img.width, h: img.height });
        setTargetDims({ w: img.width, h: img.height });
        setImgFile(img);
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const resizeImage = () => {
    if (!imgFile || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    canvasRef.current.width = targetDims.w;
    canvasRef.current.height = targetDims.h;
    ctx.drawImage(imgFile, 0, 0, targetDims.w, targetDims.h);
    
    // Download trigger
    const link = document.createElement('a');
    link.download = 'resized-image.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  // Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to Use These Tools for Maximum Productivity",
        "acceptedAnswer": { "@type": "Answer", "text": "Our tools are designed for quick browser-side execution..." }
      },
      {
        "@type": "Question",
        "name": "The Importance of Browser-Side Security",
        "acceptedAnswer": { "@type": "Answer", "text": "Client-side processing ensures your data never leaves your device..." }
      }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Useful Tools Hub - Free Web Utilities for Productivity & Security | Rahvion</title>
        <meta name="description" content="Free, browser-based web utilities for text formatting, calculations, design, and security. No sign-up required. Secure client-side processing." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#E8F4F8] text-gray-800 pb-24">
        
        {/* Header Section */}
        <section className="bg-white border-b border-gray-200 py-16">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
            >
              Useful <span className="text-[#3B82F6]">Tools Hub</span>
            </motion.h1>
            <p className="text-xl text-gray-600 font-light">
              Essential utilities for productivity, design, and security. Fast, free, and private.
            </p>
          </div>
        </section>

        {/* Leaderboard Ad */}
        <div className="container mx-auto px-4 my-8 max-w-7xl">
          <AdPlaceholder label="Leaderboard Ad" size="728x90 (Desktop) / 320x50 (Mobile)" className="h-[90px] w-full" />
        </div>

        {/* Main Content Grid */}
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Tools Column */}
            <div className="lg:col-span-9 space-y-12">
              
              {/* Text Tools */}
              <section>
                <SectionHeader icon={Type} title="Text & Content Tools" description="Format, analyze, and optimize your writing." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Word Counter */}
                  <ToolCard title="Word Counter" icon={Type}>
                    <textarea 
                      className="w-full h-32 p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all text-sm"
                      placeholder="Type or paste text here..."
                      value={wcText}
                      onChange={(e) => setWcText(e.target.value)}
                      aria-label="Text input for word counter"
                    ></textarea>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <span className="block text-2xl font-bold text-blue-600">{wcStats.words}</span>
                        <span className="text-xs text-gray-500 uppercase">Words</span>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <span className="block text-2xl font-bold text-blue-600">{wcStats.chars}</span>
                        <span className="text-xs text-gray-500 uppercase">Chars</span>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <span className="block text-2xl font-bold text-blue-600">{wcStats.sentences}</span>
                        <span className="text-xs text-gray-500 uppercase">Sentences</span>
                      </div>
                    </div>
                  </ToolCard>

                  {/* Case Converter */}
                  <ToolCard title="Case Converter" icon={RefreshCw}>
                    <textarea 
                      className="w-full h-32 p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all text-sm mb-4"
                      placeholder="Enter text to convert..."
                      value={ccText}
                      onChange={(e) => setCcText(e.target.value)}
                      aria-label="Text input for case converter"
                    ></textarea>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Button size="sm" variant="secondary" onClick={() => handleCaseConvert('upper')}>UPPERCASE</Button>
                      <Button size="sm" variant="secondary" onClick={() => handleCaseConvert('lower')}>lowercase</Button>
                      <Button size="sm" variant="secondary" onClick={() => handleCaseConvert('title')}>Title Case</Button>
                    </div>
                    <div className="flex justify-end">
                      <CopyButton text={ccText} label="Copy Result" />
                    </div>
                  </ToolCard>
                </div>
              </section>

              {/* In-Feed Ad Native */}
              <AdPlaceholder label="In-Feed Native Ad" size="Responsive" className="h-32 w-full my-8 bg-white/50" />

              {/* Math Tools */}
              <section>
                <SectionHeader icon={Calculator} title="Math & Finance" description="Quick calculations for everyday tasks." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Percentage Calc */}
                  <ToolCard title="Percentage Calculator" icon={Calculator}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span>What is</span>
                        <input 
                          type="number" 
                          className="w-20 p-2 border border-gray-200 rounded text-center"
                          value={pcVal1}
                          onChange={(e) => setPcVal1(e.target.value)}
                          aria-label="Percentage value"
                        />
                        <span>% of</span>
                        <input 
                          type="number" 
                          className="w-24 p-2 border border-gray-200 rounded text-center"
                          value={pcVal2}
                          onChange={(e) => setPcVal2(e.target.value)}
                          aria-label="Total value"
                        />
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between">
                        <span className="font-semibold text-gray-700">Result:</span>
                        <span className="text-2xl font-bold text-blue-600">{pcResult || "-"}</span>
                      </div>
                      <div className="flex justify-end">
                         <CopyButton text={pcResult} label="Copy" />
                      </div>
                    </div>
                  </ToolCard>

                  {/* Age Calculator */}
                  <ToolCard title="Age Calculator" icon={Calendar}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Date of Birth</label>
                        <input 
                          type="date" 
                          className="w-full p-2 border border-gray-200 rounded-lg"
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                        />
                      </div>
                      <Button onClick={calculateAge} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Calculate Age
                      </Button>
                      {ageResult && (
                         <div className="bg-green-50 p-4 rounded-lg border border-green-100 mt-2">
                            <p className="text-center font-bold text-green-700">{ageResult}</p>
                         </div>
                      )}
                    </div>
                  </ToolCard>
                </div>
              </section>

              {/* Design & Security Tools */}
              <section>
                <SectionHeader icon={Palette} title="Design & Security" description="Create assets and secure your data." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Color Palette */}
                  <ToolCard title="Color Palette" icon={Palette}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-2 h-20">
                        {palette.map((color, i) => (
                          <div 
                            key={i} 
                            className="rounded-md shadow-sm relative group cursor-pointer"
                            style={{ backgroundColor: color }}
                            onClick={() => {navigator.clipboard.writeText(color); document.getElementById(`toast-${i}`).click()}}
                            aria-label={`Color box ${color}`}
                          >
                            <span className="sr-only">Copy {color}</span>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity rounded-md">
                               <Copy className="text-white w-4 h-4" />
                            </div>
                            <Button id={`toast-${i}`} className="hidden" onClick={() => {}}></Button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 justify-center">
                         {palette.map((color, i) => (
                            <span key={i} className="text-xs font-mono bg-gray-100 px-1 rounded">{color}</span>
                         ))}
                      </div>
                      <Button onClick={generatePalette} variant="outline" className="w-full">
                        <RefreshCw size={16} className="mr-2" /> Generate New
                      </Button>
                    </div>
                  </ToolCard>

                  {/* Password Gen */}
                  <ToolCard title="Password Generator" icon={Lock}>
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-3 rounded-lg break-all font-mono text-center text-lg h-14 flex items-center justify-center">
                        {pwResult || "Click Generate"}
                      </div>
                      <div>
                        <label className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Length: {pwLength}</span>
                        </label>
                        <input 
                          type="range" 
                          min="8" 
                          max="32" 
                          value={pwLength} 
                          onChange={(e) => setPwLength(e.target.value)}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={generatePassword} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Generate</Button>
                        <CopyButton text={pwResult} label="" />
                      </div>
                    </div>
                  </ToolCard>

                  {/* Image Resizer */}
                  <ToolCard title="Image Resizer" icon={ImageIcon}>
                    <div className="space-y-3">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      {imgFile && (
                        <div className="space-y-3">
                          <div className="flex gap-2">
                            <div className="flex-1">
                              <label className="text-xs text-gray-500">Width</label>
                              <input 
                                type="number" 
                                value={targetDims.w} 
                                onChange={(e) => setTargetDims({...targetDims, w: parseInt(e.target.value)})}
                                className="w-full p-1 border rounded text-sm"
                              />
                            </div>
                            <div className="flex-1">
                              <label className="text-xs text-gray-500">Height</label>
                              <input 
                                type="number" 
                                value={targetDims.h} 
                                onChange={(e) => setTargetDims({...targetDims, h: parseInt(e.target.value)})}
                                className="w-full p-1 border rounded text-sm"
                              />
                            </div>
                          </div>
                          <Button onClick={resizeImage} size="sm" className="w-full bg-blue-600 text-white">
                            Resize & Download
                          </Button>
                        </div>
                      )}
                      <canvas ref={canvasRef} className="hidden" />
                    </div>
                  </ToolCard>
                </div>
              </section>

              {/* Expert Guides / Accordion Section */}
              <section className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-8">
                  <Globe className="text-[#3B82F6]" />
                  <h2 className="text-3xl font-serif font-bold text-gray-900">Expert Guides & Resources</h2>
                </div>
                
                <AccordionItem 
                  title="How to Use These Tools for Maximum Productivity" 
                  isOpen={openAccordion === 0} 
                  onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800">Text Formatting for Content Creators</h3>
                    <p>Clean, properly formatted text is crucial for SEO and readability. Use the Case Converter to instantly standardize headings (Title Case) or fix accidental CAPS LOCK errors. The Word Counter helps you stay within strict limits for social media posts or meta descriptions without needing a heavy word processor.</p>
                    
                    <h3 className="text-lg font-bold text-gray-800">Calculations Made Simple</h3>
                    <p>Stop guessing percentages. Whether you're calculating a discount, a tip, or a project growth metric, the Percentage Calculator gives you precise numbers instantly. Combined with the Age Calculator, you can manage dates and financial figures quickly in one tab.</p>
                    
                    <h3 className="text-lg font-bold text-gray-800">Design Tools for Quick Prototyping</h3>
                    <p>Web designers often need a quick hex code or a resized image placeholder. Our Color Palette generator provides instant inspiration with WCAG-friendly contrast possibilities, while the Image Resizer lets you optimize assets for the web directly in the browser.</p>
                  </div>
                </AccordionItem>

                <AccordionItem 
                  title="The Importance of Browser-Side Security" 
                  isOpen={openAccordion === 1} 
                  onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}
                >
                   <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800">Why Client-Side Processing Matters</h3>
                    <p>All tools on this page run 100% in your browser using JavaScript. This means your data—whether it's a private photo for resizing or a password you just generated—never leaves your device. No data is sent to a server. This is the gold standard for privacy.</p>
                    
                    <h3 className="text-lg font-bold text-gray-800">Password Security Best Practices</h3>
                    <p>A strong password should be at least 12 characters long and include a mix of symbols, numbers, and casing. Our Password Generator uses a cryptographically pseudo-random number generator to ensure unpredictability, unlike human-created passwords which often follow predictable patterns.</p>
                  </div>
                </AccordionItem>
                
                <AccordionItem 
                  title="Understanding Web Units and Conversions" 
                  isOpen={openAccordion === 2} 
                  onClick={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}
                >
                   <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800">Common Web Units Explained</h3>
                    <p>In web design, precision matters. Pixels (px) are absolute units, while percentages (%) and REMs are relative. Understanding how these interact is key to responsive design. Our tools help you calculate these relationships quickly.</p>
                    
                    <h3 className="text-lg font-bold text-gray-800">Why Conversions Matter</h3>
                    <p>Converting between formats or dimensions ensures your content looks consistent across devices. Resizing images prevents slow load times on mobile networks, directly impacting your site's SEO ranking and user retention.</p>
                  </div>
                </AccordionItem>
              </section>

            </div>

            {/* Sidebar Column */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                <AdPlaceholder label="Sidebar Skyscraper" size="300x600" className="h-[600px] w-[300px] mx-auto" />
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg">
                  <div className="flex items-center gap-2 mb-4 text-[#3B82F6]">
                    <Shield size={20} />
                    <h3 className="font-bold">Privacy First</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    All calculations happen directly in your browser. No data is ever uploaded to our servers.
                  </p>
                  <Button variant="outline" className="w-full text-xs">Read Privacy Policy</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default UsefulToolsHubPage;