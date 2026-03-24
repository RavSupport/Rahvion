import React, { useState } from 'react';
import { Wifi, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HomeOfficeConnectivityGrade = ({ onClose }) => {
  const { toast } = useToast();
  const [speed, setSpeed] = useState(100);
  const [users, setUsers] = useState(2);
  const [grade, setGrade] = useState(null);

  const calculate = () => {
    const bandwidthPerUser = speed / users;
    let letter = 'F';
    let color = 'text-red-600';

    if (bandwidthPerUser > 100) { letter = 'A'; color = 'text-green-600'; }
    else if (bandwidthPerUser > 50) { letter = 'B'; color = 'text-blue-600'; }
    else if (bandwidthPerUser > 25) { letter = 'C'; color = 'text-yellow-600'; }
    else if (bandwidthPerUser > 10) { letter = 'D'; color = 'text-orange-600'; }

    setGrade({ letter, color, bandwidthPerUser: bandwidthPerUser.toFixed(1) });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative">
      <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}><X size={24} /></Button>
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2"><Wifi /> Connectivity Grader</h2>
      
      <div className="space-y-6 mb-8">
        <div>
           <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
             <span>Download Speed</span>
             <span>{speed} Mbps</span>
           </label>
           <input type="range" min="10" max="1000" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="w-full accent-[#1E3A8A]" />
        </div>
        <div>
           <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
             <span>Active Users</span>
             <span>{users}</span>
           </label>
           <input type="range" min="1" max="10" value={users} onChange={(e) => setUsers(Number(e.target.value))} className="w-full accent-[#1E3A8A]" />
        </div>
      </div>
      
      <Button onClick={calculate} className="w-full bg-[#1E3A8A] text-white">Calculate Grade</Button>

      {grade && (
        <div className="mt-6 text-center bg-gray-50 p-6 rounded-xl border">
           <div className={`text-6xl font-bold ${grade.color} mb-2`}>{grade.letter}</div>
           <p className="text-gray-600 text-sm">
             Each user gets approx <strong>{grade.bandwidthPerUser} Mbps</strong>.
             {grade.letter === 'A' ? " Excellent for 4K streaming and gaming!" : " Consider upgrading your plan or router."}
           </p>
        </div>
      )}
    </div>
  );
};

export default HomeOfficeConnectivityGrade;