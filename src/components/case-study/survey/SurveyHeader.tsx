
import React from 'react';
import { ChartPie, MapPin, BadgePercent } from 'lucide-react';

const SurveyHeader = () => {
  return (
    <>
      <div className="flex items-center mb-6">
        <ChartPie className="w-8 h-8 text-urban-600 mr-3" />
        <h3 className="text-2xl font-display text-slate-800">German Employee Incentive Preference Study</h3>
      </div>
      
      <div className="flex items-center gap-2 text-slate-600 mb-6">
        <MapPin className="w-4 h-4" />
        <span>Germany</span>
        <BadgePercent className="w-4 h-4 ml-4" />
        <span>200 respondents</span>
      </div>
      
      <p className="text-lg text-slate-700 mb-8 max-w-4xl leading-relaxed">
        In a comprehensive survey conducted across various industries in Germany, 200 employees were asked about their preferred workplace incentives. The results showed a strong preference for food-related benefits, with 3 out of 5 participants choosing lunch incentives over other options.
      </p>
    </>
  );
};

export default SurveyHeader;
