import React, { useState } from 'react';
import { ShieldAlert, CheckCircle, AlertTriangle, FileText, X, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import jsPDF from 'jspdf';
import { motion } from 'framer-motion';

const ScamIntelligenceAuditor = ({ onClose }) => {
  const { toast } = useToast();
  const [text, setText] = useState('');
  const [report, setReport] = useState(null);
  const [email, setEmail] = useState('');

  const analyzeText = () => {
    if (!text.trim()) return;

    const urgencyTriggers = ["urgent", "immediately", "act now", "limited time", "expires", "deadline", "today only"];
    const authorityTriggers = ["verify account", "confirm identity", "administrator", "official", "required", "irs", "police", "fbi"];
    const financialTriggers = ["claim reward", "refund", "payment", "billing", "suspended", "gift card", "bitcoin", "wire transfer"];
    const phishingTriggers = ["click here", "verify", "re-enter", "login", "password", "ssn", "social security"];

    const findMatches = (triggers) => triggers.filter(t => text.toLowerCase().includes(t));

    const uMatches = findMatches(urgencyTriggers);
    const aMatches = findMatches(authorityTriggers);
    const fMatches = findMatches(financialTriggers);
    const pMatches = findMatches(phishingTriggers);

    const totalMatches = uMatches.length + aMatches.length + fMatches.length + pMatches.length;
    let score = Math.min(100, totalMatches * 15); // Simple scoring logic
    
    let riskLevel = 'Low';
    let color = 'text-green-600';
    let bgColor = 'bg-green-100';

    if (score > 30) { riskLevel = 'Medium'; color = 'text-yellow-600'; bgColor = 'bg-yellow-100'; }
    if (score > 60) { riskLevel = 'High'; color = 'text-orange-600'; bgColor = 'bg-orange-100'; }
    if (score > 80) { riskLevel = 'Critical'; color = 'text-red-600'; bgColor = 'bg-red-100'; }

    setReport({
      score,
      riskLevel,
      color,
      bgColor,
      matches: { urgency: uMatches, authority: aMatches, financial: fMatches, phishing: pMatches },
      totalMatches
    });
  };

  const generatePDF = () => {
    if (!report) return;
    
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Rahvion Scam Intelligence Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
    
    doc.setFontSize(14);
    doc.text(`Risk Level: ${report.riskLevel} (${report.score}/100)`, 20, 50);
    
    doc.setFontSize(12);
    doc.text("Detected Triggers:", 20, 70);
    
    let y = 80;
    const allMatches = [
      ...report.matches.urgency, 
      ...report.matches.authority, 
      ...report.matches.financial, 
      ...report.matches.phishing
    ];

    allMatches.forEach(match => {
      doc.text(`- ${match}`, 30, y);
      y += 10;
    });

    doc.text("Recommendations:", 20, y + 10);
    doc.text("- Do not click any links.", 30, y + 20);
    doc.text("- Verify the sender independently.", 30, y + 30);
    doc.text("- Report this message to your IT department or provider.", 30, y + 40);

    doc.save("Rahvion_Scam_Report.pdf");
    
    // Simulate Backend Submission
    localStorage.setItem('last_scam_report', JSON.stringify({ email, report, date: new Date() }));
    toast({ title: "Report Downloaded", description: `A copy has been saved to your device.` });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
      
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
        <ShieldAlert className="text-[#1E3A8A]" /> Scam Intelligence Auditor
      </h2>

      <div className="space-y-4">
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] outline-none text-gray-800"
          placeholder="Paste suspicious email, text message, or DM content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={analyzeText} className="bg-[#1E3A8A] text-white w-full">Scan for Threats</Button>
      </div>

      {report && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 space-y-6">
          <div className={`p-6 rounded-xl ${report.bgColor} border border-opacity-20`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-lg font-bold ${report.color}`}>Threat Level: {report.riskLevel}</span>
              <span className={`text-2xl font-bold ${report.color}`}>{report.score}/100</span>
            </div>
            <div className="w-full bg-white/50 h-3 rounded-full overflow-hidden">
               <div className={`h-full ${report.color.replace('text-', 'bg-')}`} style={{ width: `${report.score}%` }} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
             <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold block mb-1">Urgency Triggers</span>
                {report.matches.urgency.length > 0 ? report.matches.urgency.join(", ") : "None"}
             </div>
             <div className="bg-gray-50 p-3 rounded">
                <span className="font-semibold block mb-1">Financial Triggers</span>
                {report.matches.financial.length > 0 ? report.matches.financial.join(", ") : "None"}
             </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={generatePDF} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              <FileText size={18} className="mr-2" /> Download Report
            </Button>
             <Button variant="outline" onClick={() => {
               navigator.clipboard.writeText(`Scam Scan Result: ${report.riskLevel} Risk. Score: ${report.score}/100.`);
               toast({title: "Copied!"});
             }}>
              <Copy size={18} />
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ScamIntelligenceAuditor;