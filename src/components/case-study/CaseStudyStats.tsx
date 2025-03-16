
import React from 'react';
import { Building2, Users2, TrendingUp } from 'lucide-react';

const CaseStudyStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div className="stat-card bg-gradient-blue-purple p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="text-urban-500 mb-3">
          <Building2 size={32} />
        </div>
        <p className="text-4xl font-bold text-urban-600 mb-2">42%</p>
        <p className="text-slate-600 text-lg">Increased office attendance</p>
      </div>
      <div className="stat-card bg-gradient-orange-yellow p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="text-food-500 mb-3">
          <Users2 size={32} />
        </div>
        <p className="text-4xl font-bold text-food-600 mb-2">89%</p>
        <p className="text-slate-600 text-lg">Employee satisfaction</p>
      </div>
      <div className="stat-card bg-gradient-green-blue p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="text-urban-500 mb-3">
          <TrendingUp size={32} />
        </div>
        <p className="text-4xl font-bold text-urban-600 mb-2">28%</p>
        <p className="text-slate-600 text-lg">Reduced turnover</p>
      </div>
    </div>
  );
};

export default CaseStudyStats;
