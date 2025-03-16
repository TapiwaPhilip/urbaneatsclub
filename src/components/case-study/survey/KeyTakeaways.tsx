
import React from 'react';
import { BadgePercent } from 'lucide-react';

const KeyTakeaways = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <h4 className="font-semibold text-lg mb-3">Key Takeaways from the Study</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <div className="text-food-600 mr-2 mt-1">
            <BadgePercent size={16} />
          </div>
          <p className="text-slate-700">60% of German employees prefer lunch incentives over other types of benefits</p>
        </li>
        <li className="flex items-start">
          <div className="text-food-600 mr-2 mt-1">
            <BadgePercent size={16} />
          </div>
          <p className="text-slate-700">The preference is consistent across different genders and industry sectors</p>
        </li>
        <li className="flex items-start">
          <div className="text-food-600 mr-2 mt-1">
            <BadgePercent size={16} />
          </div>
          <p className="text-slate-700">Younger professionals (26-35) show the strongest preference for food-related incentives</p>
        </li>
      </ul>
    </div>
  );
};

export default KeyTakeaways;
