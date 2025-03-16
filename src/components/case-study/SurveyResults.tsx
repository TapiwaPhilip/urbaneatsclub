
import React from 'react';
import { 
  ChartPie, 
  MapPin, 
  BadgePercent, 
  User, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

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

const SurveyResults = () => {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-urban-50 rounded-2xl p-8 md:p-12 mb-16 shadow-sm border border-slate-100">
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-6">
            <h4 className="text-xl font-semibold mb-4 text-slate-800">Incentive Preferences</h4>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={incentivePreferenceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {incentivePreferenceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6">
              <h5 className="font-medium text-slate-700 mb-2">Key Finding</h5>
              <p className="text-slate-600">60% of respondents preferred lunch incentives over other benefits like bonus payments, time off, or home office stipends.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-6">
            <h4 className="text-xl font-semibold mb-4 text-slate-800">Age Distribution</h4>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ageDemographicData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1a9bf0" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6">
              <h5 className="font-medium text-slate-700 mb-2">Demographic Insight</h5>
              <p className="text-slate-600">The 26-35 age group showed the strongest preference for lunch incentives, followed by the 36-45 age group.</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-t-4 border-t-urban-500">
          <CardContent className="pt-6">
            <div className="flex items-start mb-4">
              <div className="bg-urban-100 text-urban-600 p-3 rounded-lg mr-3">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-lg">Participant Demographics</h5>
                <p className="text-slate-600 text-sm mt-1">Balanced gender representation</p>
              </div>
            </div>
            <div className="h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderDemographicData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    {genderDemographicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-t-4 border-t-food-500">
          <CardContent className="pt-6">
            <div className="flex items-start mb-4">
              <div className="bg-food-100 text-food-600 p-3 rounded-lg mr-3">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-lg">Industry Breakdown</h5>
                <p className="text-slate-600 text-sm mt-1">Cross-industry representation</p>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              <li className="flex justify-between items-center">
                <span className="text-slate-700">Technology</span>
                <span className="font-medium">35%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-700">Finance</span>
                <span className="font-medium">25%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-700">Healthcare</span>
                <span className="font-medium">20%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-700">Other Sectors</span>
                <span className="font-medium">20%</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border-t-4 border-t-urban-500">
          <CardContent className="pt-6">
            <div className="flex items-start mb-4">
              <div className="bg-urban-100 text-urban-600 p-3 rounded-lg mr-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-semibold text-lg">Education Level</h5>
                <p className="text-slate-600 text-sm mt-1">Survey participant education</p>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              <li className="flex justify-between items-center">
                <span className="text-slate-700">University Degree</span>
                <span className="font-medium">65%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-700">Vocational Training</span>
                <span className="font-medium">25%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-700">High School</span>
                <span className="font-medium">10%</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
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
    </div>
  );
};

export default SurveyResults;
