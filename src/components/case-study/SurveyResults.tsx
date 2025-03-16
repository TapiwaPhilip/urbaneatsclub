
import React from 'react';
import { User, Briefcase, GraduationCap } from 'lucide-react';

// Import new components
import SurveyHeader from './survey/SurveyHeader';
import PieChartCard from './survey/PieChartCard';
import BarChartCard from './survey/BarChartCard';
import DemographicCard from './survey/DemographicCard';
import KeyTakeaways from './survey/KeyTakeaways';

// Survey data
const incentivePreferenceData = [
  { name: 'Lunch Incentives', value: 120, color: '#1a9bf0' },
  { name: 'Bonus Payments', value: 40, color: '#f59e0b' },
  { name: 'Extra Time Off', value: 25, color: '#10b981' },
  { name: 'Home Office Stipend', value: 15, color: '#8b5cf6' },
];

const genderDemographicData = [
  { name: 'Female', value: 105, color: '#ec4899' },
  { name: 'Male', value: 90, color: '#3b82f6' },
  { name: 'Non-binary', value: 5, color: '#8b5cf6' },
];

const ageDemographicData = [
  { name: '18-25', value: 35 },
  { name: '26-35', value: 80 },
  { name: '36-45', value: 55 },
  { name: '46-55', value: 20 },
  { name: '56+', value: 10 },
];

const industryBreakdownData = [
  { name: 'Technology', value: 35, color: '#3b82f6' },
  { name: 'Finance', value: 25, color: '#10b981' },
  { name: 'Healthcare', value: 20, color: '#f59e0b' },
  { name: 'Other Sectors', value: 20, color: '#8b5cf6' }
];

const educationLevelData = [
  { name: 'University Degree', value: 65, color: '#3b82f6' },
  { name: 'Vocational Training', value: 25, color: '#10b981' },
  { name: 'High School', value: 10, color: '#f59e0b' }
];

const SurveyResults = () => {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-urban-50 rounded-2xl p-8 md:p-12 mb-16 shadow-sm border border-slate-100">
      <SurveyHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <PieChartCard 
          title="Incentive Preferences" 
          data={incentivePreferenceData}
          findingTitle="Key Finding"
          findingText="60% of respondents preferred lunch incentives over other benefits like bonus payments, time off, or home office stipends."
        />
        
        <BarChartCard 
          title="Age Distribution" 
          data={ageDemographicData}
          findingTitle="Demographic Insight"
          findingText="The 26-35 age group showed the strongest preference for lunch incentives, followed by the 36-45 age group."
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DemographicCard 
          title="Participant Demographics" 
          subtitle="Balanced gender representation"
          icon={User}
          iconColor="text-urban-600" 
          iconBgColor="bg-urban-100"
          borderColor="border-t-urban-500"
          variant="pie-chart"
          data={genderDemographicData}
        />
        
        <DemographicCard 
          title="Industry Breakdown" 
          subtitle="Cross-industry representation"
          icon={Briefcase}
          iconColor="text-food-600" 
          iconBgColor="bg-food-100"
          borderColor="border-t-food-500"
          variant="list"
          data={industryBreakdownData}
        />
        
        <DemographicCard 
          title="Education Level" 
          subtitle="Survey participant education"
          icon={GraduationCap}
          iconColor="text-urban-600" 
          iconBgColor="bg-urban-100"
          borderColor="border-t-urban-500"
          variant="list"
          data={educationLevelData}
        />
      </div>
      
      <KeyTakeaways />
    </div>
  );
};

export default SurveyResults;
