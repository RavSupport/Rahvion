
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, ShieldAlert, Cpu, Wifi, Radio, Moon, Database, Zap, 
  Type, Key, FileImage, AlignLeft 
} from 'lucide-react';

import MathGridBackground from '@/components/MathGridBackground';
import PageTransition from '@/components/PageTransition';
import ToolCard from '@/components/ToolCard';

// Import all tools
import QuantumLifeOdometer from '@/components/QuantumLifeOdometer';
import ScamIntelligenceAuditor from '@/components/ScamIntelligenceAuditor';
import AIHardwareReadiness from '@/components/AIHardwareReadiness';
import HomeOfficeConnectivityGrade from '@/components/HomeOfficeConnectivityGrade';
import IoTShadowMap from '@/components/IoTShadowMap';
import DigitalCircadianSync from '@/components/DigitalCircadianSync';
import DataSovereigntyScore from '@/components/DataSovereigntyScore';
import SmartEnergyOptimizer from '@/components/SmartEnergyOptimizer';
import WordCharacterCounter from '@/components/WordCharacterCounter';
import SecurePasswordGenerator from '@/components/SecurePasswordGenerator';
import ImageToPDFConverter from '@/components/ImageToPDFConverter';
import CaseConverter from '@/components/CaseConverter';

const PersonalITToolkitPage = () => {
  const [activeToolId, setActiveToolId] = useState(null);
  const scrollRef = useRef(null);

  const tools = [
    { id: 1, title: "Quantum Life Odometer", description: "Real-time visualization of your lifespan statistics.", icon: Clock, component: QuantumLifeOdometer },
    { id: 2, title: "Scam Intelligence Auditor", description: "Analyze suspicious texts/emails for threat patterns.", icon: ShieldAlert, component: ScamIntelligenceAuditor },
    { id: 3, title: "AI Hardware Readiness", description: "Check if your PC is ready for local AI models.", icon: Cpu, component: AIHardwareReadiness },
    { id: 4, title: "Connectivity Grader", description: "Assess your home network bandwidth allocation.", icon: Wifi, component: HomeOfficeConnectivityGrade },
    { id: 5, title: "IoT Shadow Map", description: "Visualize the vulnerability surface of your smart home.", icon: Radio, component: IoTShadowMap },
    { id: 6, title: "Digital Circadian Sync", description: "Optimize screen time for better sleep hygiene.", icon: Moon, component: DigitalCircadianSync },
    { id: 7, title: "Data Sovereignty Score", description: "Assess your privacy across Big Tech platforms.", icon: Database, component: DataSovereigntyScore },
    { id: 8, title: "Smart Energy Optimizer", description: "Calculate cost of 24/7 tech power consumption.", icon: Zap, component: SmartEnergyOptimizer },
    { id: 9, title: "Word & Char Counter", description: "Detailed text metrics for writers and editors.", icon: Type, component: WordCharacterCounter },
    { id: 10, title: "Secure Password Gen", description: "Create high-entropy passwords instantly.", icon: Key, component: SecurePasswordGenerator },
    { id: 11, title: "Image to PDF", description: "Convert images to PDF documents securely.", icon: FileImage, component: ImageToPDFConverter },
    { id: 12, title: "Case Converter", description: "Transform text casing instantly.", icon: AlignLeft, component: CaseConverter },
  ];

  const handleToolClick = (id) => {
    setActiveToolId(activeToolId === id ? null : id);
    // Smooth scroll if opening
    if (activeToolId !== id) {
      setTimeout(() => {
        const element = document.getElementById(`tool-${id}`);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Personal IT Toolkit - Rahvion.com | Digital Intelligence & Security Tools</title>
        <meta name="description" content="12 Essential Tools for Digital Intelligence, Security & Optimization. Analyze scams, check AI readiness, and optimize your tech life." />
      </Helmet>
      
      <div className="relative min-h-screen bg-[#F8FAFC]">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <MathGridBackground />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10 max-w-[1400px]">
          
          {/* Header Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6 font-inter tracking-tight">
              Personal IT Toolkit
            </h1>
            <p className="text-xl text-[#475569] font-medium mb-4">
              12 Essential Tools for Digital Intelligence, Security & Optimization
            </p>
            <p className="text-[#64748B] text-lg font-light">
              Analyze your digital footprint, assess device readiness, and optimize your tech ecosystem.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Grid */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <React.Fragment key={tool.id}>
                    {/* Tool Card Item */}
                    <div id={`tool-${tool.id}`} className={`${activeToolId === tool.id ? 'md:col-span-2 xl:col-span-3' : 'col-span-1'} transition-all duration-300`}>
                      <AnimatePresence mode="wait">
                        {activeToolId === tool.id ? (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                          >
                            <tool.component onClose={() => setActiveToolId(null)} />
                          </motion.div>
                        ) : (
                          <ToolCard 
                            icon={tool.icon}
                            title={tool.title}
                            description={tool.description}
                            onClick={() => handleToolClick(tool.id)}
                            isActive={false}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PersonalITToolkitPage;
