import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Home, Laptop, Wifi, ShieldAlert, HelpCircle, 
  CheckSquare, Calendar, Lock, Briefcase, Send, Loader2,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ClientIntakeForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const initialState = {
    fullName: '',
    phone: '',
    email: '',
    address: '',
    contactMethod: 'Email',
    bestTime: '',
    userCount: '',
    hasSeniorsChildren: false,
    remoteWork: 'No',
    remoteWorkDetails: '',
    deviceTypes: {
      windows: false, mac: false, ios: false, android: false, 
      linux: false, printers: false, smarthome: false
    },
    computerCount: '',
    osDetails: '',
    isp: '',
    networkIssues: {
      slowSpeed: false, coverageGaps: false, disconnects: false, streamingIssues: false
    },
    hasExtenders: false,
    pastIncidents: '',
    antivirus: '',
    backups: '',
    concerns: '',
    services: {
      governance: false, networkSetup: false, virusRemoval: false, 
      dataRecovery: false, passwordMgmt: false, parentControls: false,
      newPcSetup: false, training: false, backupSetup: false, auditing: false
    },
    remoteComfort: 'Comfortable',
    onboardingMethod: 'Remote',
    consentData: false,
    consentRemote: false,
    consentTerms: false,
    currentProvider: '',
    budget: '',
    language: 'English',
    accessibility: '',
    deviceBrands: '',
    passwordManager: '',
    mfa: '',
    homeAutomation: '',
    compliance: '',
    insurance: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (type === 'checkbox') {
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setFormData(prev => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: checked
          }
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else if (type === 'radio') {
       setFormData(prev => ({ ...prev, [name]: value === 'true' || value === true }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleRemoteWorkChange = (val) => {
     setFormData(prev => ({ ...prev, remoteWork: val }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.address.trim()) newErrors.address = "Service address is required";
    if (!formData.userCount) newErrors.userCount = "Household size is required";
    if (!formData.computerCount) newErrors.computerCount = "Computer count is required";
    if (!formData.consentTerms) newErrors.consentTerms = "You must agree to the Terms of Service";
    if (!formData.consentData) newErrors.consentData = "Data processing consent is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields marked with *.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    const subject = "Client Intake Form Submission";
    const body = `Client Intake Submission: (Details Omitted for brevity)`;
    window.location.href = `mailto:helpdesk@rahvion.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Success",
      description: "Thank you for completing the intake form. We'll review your information and contact you within 24 hours.",
    });

    setFormData(initialState);
    setIsSubmitting(false);
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-6 border-b border-[#3A3F47] pb-2">
      <div className="p-2 bg-[#0B0B0D] rounded-lg text-[#D4AF37] border border-[#3A3F47]">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-bold text-[#F5F5F5]">{title}</h3>
    </div>
  );

  const InputGroup = ({ label, required, error, children }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-[#A0A0A0] flex justify-between">
        <span>{label} {required && <span className="text-[#D4AF37]">*</span>}</span>
        {error && <span className="text-red-400 text-xs flex items-center"><AlertCircle size={12} className="mr-1"/> {error}</span>}
      </label>
      {children}
    </div>
  );

  const Checkbox = ({ label, name, checked, onChange, error }) => (
    <div>
      <label className={`flex items-center space-x-3 p-3 rounded-lg border ${error ? 'border-red-500/50 bg-red-500/10' : 'border-[#3A3F47] bg-[#0B0B0D]'} hover:bg-[#3A3F47] transition-colors cursor-pointer`}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 rounded border-[#3A3F47] bg-[#0B0B0D] text-[#D4AF37] focus:ring-offset-0 focus:ring-[#D4AF37]"
        />
        <span className="text-sm text-[#A0A0A0]">{label}</span>
      </label>
      {error && <span className="text-red-400 text-xs mt-1 block">{error}</span>}
    </div>
  );

  const inputClasses = (error) => `w-full bg-[#0B0B0D] border ${error ? 'border-red-500 focus:ring-red-500' : 'border-[#3A3F47] focus:ring-[#D4AF37]'} rounded-md p-3 text-[#F5F5F5] focus:ring-2 outline-none transition-all placeholder:text-[#3A3F47]`;

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
      
      {/* Disclaimer */}
      <div className="bg-[#0B0B0D] border border-[#D4AF37]/20 p-4 rounded-lg mb-6 text-xs text-[#A0A0A0]">
        All services are provided on a best-effort, advisory basis. By submitting this form, you acknowledge that Rahvion is not responsible for data loss or system failures.
      </div>

      {/* Section 1: Client Information */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#3A3F47] shadow-lg">
        <SectionHeader icon={User} title="1. Client Information" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputGroup label="Full Name" required error={errors.fullName}>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className={inputClasses(errors.fullName)} placeholder="John Doe" />
          </InputGroup>
          <InputGroup label="Email Address" required error={errors.email}>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClasses(errors.email)} placeholder="john@example.com" />
          </InputGroup>
          <InputGroup label="Phone Number" required error={errors.phone}>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={inputClasses(errors.phone)} placeholder="(443) 555-0123" />
          </InputGroup>
          <InputGroup label="Service Address" required error={errors.address}>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} className={inputClasses(errors.address)} placeholder="123 Main St, Bel Air, MD" />
          </InputGroup>
          <InputGroup label="Preferred Contact Method">
            <select name="contactMethod" value={formData.contactMethod} onChange={handleInputChange} className={inputClasses()}>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="Text">Text Message</option>
            </select>
          </InputGroup>
          <InputGroup label="Best Time to Reach">
            <input type="text" name="bestTime" value={formData.bestTime} onChange={handleInputChange} className={inputClasses()} placeholder="e.g., Weekdays after 5PM" />
          </InputGroup>
        </div>
      </motion.div>

      {/* Section 2: Household Overview */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#3A3F47] shadow-lg">
        <SectionHeader icon={Home} title="2. Household Overview" />
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup label="Number of Household Users" required error={errors.userCount}>
              <input type="number" name="userCount" value={formData.userCount} onChange={handleInputChange} className={inputClasses(errors.userCount)} min="1" />
            </InputGroup>
            <div className="flex items-center pt-8">
              <Checkbox label="Household includes Seniors or Children?" name="hasSeniorsChildren" checked={formData.hasSeniorsChildren} onChange={handleInputChange} />
            </div>
          </div>
          
          <div className="space-y-4">
             <label className="text-sm font-medium text-[#A0A0A0]">Does anyone work from home remotely?</label>
             <div className="flex gap-4">
               <label className="flex items-center space-x-2 cursor-pointer">
                 <input 
                   type="radio" 
                   name="remoteWork" 
                   value="Yes" 
                   checked={formData.remoteWork === 'Yes'} 
                   onChange={(e) => handleRemoteWorkChange(e.target.value)}
                   className="text-[#D4AF37] focus:ring-[#D4AF37] bg-[#0B0B0D] border-[#3A3F47]"
                 />
                 <span className="text-[#F5F5F5]">Yes</span>
               </label>
               <label className="flex items-center space-x-2 cursor-pointer">
                 <input 
                   type="radio" 
                   name="remoteWork" 
                   value="No" 
                   checked={formData.remoteWork === 'No'} 
                   onChange={(e) => handleRemoteWorkChange(e.target.value)}
                   className="text-[#D4AF37] focus:ring-[#D4AF37] bg-[#0B0B0D] border-[#3A3F47]"
                 />
                 <span className="text-[#F5F5F5]">No</span>
               </label>
             </div>
             
             <AnimatePresence>
               {formData.remoteWork === 'Yes' && (
                 <motion.div 
                   initial={{ opacity: 0, height: 0 }} 
                   animate={{ opacity: 1, height: 'auto' }} 
                   exit={{ opacity: 0, height: 0 }}
                   className="overflow-hidden"
                 >
                   <InputGroup label="If yes, briefly describe setup (VPN, specific software, etc.)">
                     <textarea name="remoteWorkDetails" value={formData.remoteWorkDetails} onChange={handleInputChange} className={inputClasses()} rows={2} />
                   </InputGroup>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Section 3: Devices */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#3A3F47] shadow-lg">
        <SectionHeader icon={Laptop} title="3. Devices" />
        <div className="space-y-6">
          <InputGroup label="Select all device types in the home">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Checkbox label="Windows PC" name="deviceTypes.windows" checked={formData.deviceTypes.windows} onChange={handleInputChange} />
              <Checkbox label="Mac / Apple" name="deviceTypes.mac" checked={formData.deviceTypes.mac} onChange={handleInputChange} />
              <Checkbox label="iOS (iPhone/iPad)" name="deviceTypes.ios" checked={formData.deviceTypes.ios} onChange={handleInputChange} />
              <Checkbox label="Android" name="deviceTypes.android" checked={formData.deviceTypes.android} onChange={handleInputChange} />
              <Checkbox label="Linux" name="deviceTypes.linux" checked={formData.deviceTypes.linux} onChange={handleInputChange} />
              <Checkbox label="Printers" name="deviceTypes.printers" checked={formData.deviceTypes.printers} onChange={handleInputChange} />
              <Checkbox label="Smart Home" name="deviceTypes.smarthome" checked={formData.deviceTypes.smarthome} onChange={handleInputChange} />
            </div>
          </InputGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputGroup label="Total Computer Count" required error={errors.computerCount}>
              <input type="number" name="computerCount" value={formData.computerCount} onChange={handleInputChange} className={inputClasses(errors.computerCount)} min="0" />
            </InputGroup>
            <InputGroup label="Operating Systems (Versions if known)">
              <input type="text" name="osDetails" value={formData.osDetails} onChange={handleInputChange} className={inputClasses()} placeholder="e.g., Windows 11, macOS Sonoma" />
            </InputGroup>
          </div>
          <InputGroup label="Common Device Brands (optional)">
              <input type="text" name="deviceBrands" value={formData.deviceBrands} onChange={handleInputChange} className={inputClasses()} placeholder="Dell, HP, Lenovo, Ubiquiti, etc." />
          </InputGroup>
        </div>
      </motion.div>

      {/* Section 4: Internet & Network */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#3A3F47] shadow-lg">
        <SectionHeader icon={Wifi} title="4. Internet & Network" />
        <div className="space-y-6">
          <InputGroup label="Internet Service Provider (ISP) (Optional)">
            <input type="text" name="isp" value={formData.isp} onChange={handleInputChange} className={inputClasses()} placeholder="e.g., Comcast Xfinity, Verizon Fios" />
          </InputGroup>
          <InputGroup label="Current Network Issues">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Checkbox label="Slow Speeds" name="networkIssues.slowSpeed" checked={formData.networkIssues.slowSpeed} onChange={handleInputChange} />
              <Checkbox label="Wi-Fi Dead Zones" name="networkIssues.coverageGaps" checked={formData.networkIssues.coverageGaps} onChange={handleInputChange} />
              <Checkbox label="Frequent Disconnects" name="networkIssues.disconnects" checked={formData.networkIssues.disconnects} onChange={handleInputChange} />
              <Checkbox label="Streaming Buffering" name="networkIssues.streamingIssues" checked={formData.networkIssues.streamingIssues} onChange={handleInputChange} />
            </div>
          </InputGroup>
          <Checkbox label="Do you use Wi-Fi Extenders or Mesh points?" name="hasExtenders" checked={formData.hasExtenders} onChange={handleInputChange} />
        </div>
      </motion.div>

      {/* Section 5: Security & Safety */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#3A3F47] shadow-lg">
        <SectionHeader icon={ShieldAlert} title="5. Security & Safety" />
        <div className="grid grid-cols-1 gap-6">
           <InputGroup label="Past Security Incidents (Scams, Viruses, Hacks)">
             <textarea name="pastIncidents" value={formData.pastIncidents} onChange={handleInputChange} className={inputClasses()} rows={2} placeholder="Briefly describe any past issues..." />
           </InputGroup>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <InputGroup label="Current Antivirus / Security Software">
               <input type="text" name="antivirus" value={formData.antivirus} onChange={handleInputChange} className={inputClasses()} placeholder="e.g., Norton, McAfee, None" />
             </InputGroup>
             <InputGroup label="Data Backup Strategy">
               <input type="text" name="backups" value={formData.backups} onChange={handleInputChange} className={inputClasses()} placeholder="e.g., External Hard Drive, iCloud, None" />
             </InputGroup>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Do you use a Password Manager?">
                 <input type="text" name="passwordManager" value={formData.passwordManager} onChange={handleInputChange} className={inputClasses()} placeholder="Yes/No (Which one?)" />
              </InputGroup>
              <InputGroup label="Is MFA (2FA) enabled on key accounts?">
                 <input type="text" name="mfa" value={formData.mfa} onChange={handleInputChange} className={inputClasses()} placeholder="Yes, No, or Unsure" />
              </InputGroup>
           </div>
        </div>
      </motion.div>

      {/* Section 6: Current Concerns */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#3A3F47] shadow-lg">
        <SectionHeader icon={HelpCircle} title="6. Current Concerns (Optional)" />
        <InputGroup label="Please describe your main technical issues or goals">
          <textarea 
            name="concerns" 
            value={formData.concerns} 
            onChange={handleInputChange} 
            className={inputClasses()} 
            rows={4} 
            placeholder="e.g., 'My printer never stays connected', 'I'm worried about my parents getting scammed', 'I need a better Wi-Fi setup for my home office'..." 
          />
        </InputGroup>
      </motion.div>

      {/* Section 7: Services of Interest */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#3A3F47] shadow-lg">
        <SectionHeader icon={CheckSquare} title="7. Services of Interest" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Checkbox label="Ongoing IT Governance (Membership)" name="services.governance" checked={formData.services.governance} onChange={handleInputChange} />
          <Checkbox label="Home Network Setup / Optimization" name="services.networkSetup" checked={formData.services.networkSetup} onChange={handleInputChange} />
          <Checkbox label="Virus / Malware Removal" name="services.virusRemoval" checked={formData.services.virusRemoval} onChange={handleInputChange} />
          <Checkbox label="Data Recovery / Backups" name="services.dataRecovery" checked={formData.services.dataRecovery} onChange={handleInputChange} />
          <Checkbox label="Password Management Help" name="services.passwordMgmt" checked={formData.services.passwordMgmt} onChange={handleInputChange} />
          <Checkbox label="Parental Controls / Safety" name="services.parentControls" checked={formData.services.parentControls} onChange={handleInputChange} />
          <Checkbox label="New Computer Setup" name="services.newPcSetup" checked={formData.services.newPcSetup} onChange={handleInputChange} />
          <Checkbox label="Technical Education" name="services.training" checked={formData.services.training} onChange={handleInputChange} />
          <Checkbox label="Security Auditing" name="services.auditing" checked={formData.services.auditing} onChange={handleInputChange} />
          <Checkbox label="Backup Configuration" name="services.backupSetup" checked={formData.services.backupSetup} onChange={handleInputChange} />
        </div>
      </motion.div>
      
      {/* MSP Additional Fields (Collapsible or just section) */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#3A3F47] shadow-lg">
        <SectionHeader icon={Briefcase} title="Additional Details" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <InputGroup label="Current IT Provider (if any)">
             <input type="text" name="currentProvider" value={formData.currentProvider} onChange={handleInputChange} className={inputClasses()} placeholder="Previous company or 'Myself'" />
           </InputGroup>
           <InputGroup label="Estimated Budget / Service Tier">
             <input type="text" name="budget" value={formData.budget} onChange={handleInputChange} className={inputClasses()} placeholder="e.g., Core Plan, Hourly, etc." />
           </InputGroup>
           <InputGroup label="Accessibility Needs">
             <input type="text" name="accessibility" value={formData.accessibility} onChange={handleInputChange} className={inputClasses()} placeholder="Any specific requirements?" />
           </InputGroup>
           <InputGroup label="Home Automation Devices">
             <input type="text" name="homeAutomation" value={formData.homeAutomation} onChange={handleInputChange} className={inputClasses()} placeholder="Alexa, Google Home, Cameras..." />
           </InputGroup>
        </div>
      </motion.div>

      {/* Section 8: Access & Scheduling */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-[#0B0B0D] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#3A3F47] shadow-lg">
        <SectionHeader icon={Calendar} title="8. Access & Scheduling" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputGroup label="Comfort with Remote Support Software">
            <select name="remoteComfort" value={formData.remoteComfort} onChange={handleInputChange} className={inputClasses()}>
              <option value="Very Comfortable">Very Comfortable</option>
              <option value="Comfortable">Comfortable</option>
              <option value="Needs Assistance">Needs Assistance</option>
              <option value="Uncomfortable">Uncomfortable</option>
            </select>
          </InputGroup>
          <InputGroup label="Preferred Onboarding Method (Optional)">
             <select name="onboardingMethod" value={formData.onboardingMethod} onChange={handleInputChange} className={inputClasses()}>
              <option value="Remote">Remote (Phone/Screen Share)</option>
              <option value="Email">Email Instructions Only</option>
              <option value="Chat">Chat / Text</option>
            </select>
          </InputGroup>
        </div>
      </motion.div>

      {/* Section 9: Privacy & Consent */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-[#0B0B0D] rounded-xl p-6 md:p-8 border border-[#3A3F47] shadow-lg">
        <SectionHeader icon={Lock} title="9. Privacy & Consent" />
        <div className="space-y-4">
          <Checkbox 
            label="I understand that Rahvion will use this information solely for assessing my technical needs and will not sell my data to third parties.*" 
            name="consentData" 
            checked={formData.consentData} 
            onChange={handleInputChange} 
            error={errors.consentData}
          />
          <Checkbox 
            label="I consent to receiving communication via the methods selected above regarding this inquiry." 
            name="consentRemote" 
            checked={formData.consentRemote} 
            onChange={handleInputChange} 
          />
          <Checkbox 
            label="I agree to the Terms of Service and Privacy Policy.*" 
            name="consentTerms" 
            checked={formData.consentTerms} 
            onChange={handleInputChange} 
            error={errors.consentTerms}
          />
        </div>
      </motion.div>

      <div className="pt-6">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#0B0B0D] hover:bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] py-8 text-lg font-bold shadow-lg rounded-xl transition-all hover:scale-[1.01]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              Processing Submission...
            </>
          ) : (
            <>
              Submit Intake Form
              <Send className="ml-2 h-6 w-6" />
            </>
          )}
        </Button>
        <p className="text-center text-[#A0A0A0] text-sm mt-4">
          By submitting this form, you are requesting a technical assessment. No payment is required at this stage.
        </p>
      </div>

    </form>
  );
};

export default ClientIntakeForm;