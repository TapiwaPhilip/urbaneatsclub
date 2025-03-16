
import React from 'react';
import { Calendar, Users2, Trophy, Gift, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend 
} from 'recharts';

const attendanceData = [
  { month: 'Jan', beforeProgram: 30, afterProgram: 72 },
  { month: 'Feb', beforeProgram: 32, afterProgram: 74 },
  { month: 'Mar', beforeProgram: 29, afterProgram: 71 },
  { month: 'Apr', beforeProgram: 31, afterProgram: 73 },
];

const rewardSteps = [
  {
    title: "Visit Office Twice Weekly",
    description: "Employees commit to visiting the office at least twice per week for four consecutive weeks",
    icon: Calendar,
    color: "bg-urban-100 text-urban-600"
  },
  {
    title: "Track Attendance",
    description: "HR departments track attendance through access card data or simple check-ins",
    icon: Users2,
    color: "bg-slate-100 text-slate-600"
  },
  {
    title: "Earn Rewards",
    description: "After completing the four-week challenge, employees earn their reward",
    icon: Trophy,
    color: "bg-food-100 text-food-600"
  },
  {
    title: "Receive Lunch Credits",
    description: "Four lunch credits are added to the employee's Urban Eats Club account",
    icon: Gift,
    color: "bg-urban-100 text-urban-600"
  }
];

const AttendanceTracking = () => {
  return (
    <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
      <h3 className="text-2xl font-display mb-8 text-slate-800">How Companies Use Urban Eats Club</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
        <div>
          <h4 className="text-xl font-semibold mb-4 text-slate-800">Incentivizing Office Attendance</h4>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Companies are leveraging Urban Eats Club to reward employees for in-office attendance. For example, employees who visit the office twice a week for four weeks receive four lunch credits on their Urban Eats Club app the following month.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 mb-6">
            {rewardSteps.map((step, index) => (
              <Card key={index} className="border border-slate-200 transition-all duration-300 hover:shadow-md">
                <CardContent className="pt-6">
                  <div className={`rounded-full p-3 inline-flex mb-3 ${step.color}`}>
                    <step.icon size={24} />
                  </div>
                  <h5 className="font-semibold text-lg mb-2">{step.title}</h5>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="h-80 md:h-96">
          <ChartContainer
            config={{
              beforeProgram: { label: "Before Program", color: "#cbd5e1" },
              afterProgram: { label: "After Program", color: "#1a9bf0" }
            }}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
          >
            <BarChart data={attendanceData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <ChartTooltip
                content={
                  <ChartTooltipContent 
                    formatter={(value) => [`${value}%`, "Office Attendance"]}
                  />
                }
              />
              <Legend />
              <Bar dataKey="beforeProgram" name="Before Program" fill="var(--color-beforeProgram)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="afterProgram" name="After Program" fill="var(--color-afterProgram)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
          <p className="text-center text-slate-500 text-sm mt-2">Office attendance rates before and after implementation</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
        <h4 className="text-xl font-semibold mb-3 text-slate-800">Key Benefits</h4>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="flex items-start">
            <div className="bg-urban-100 text-urban-600 p-2 rounded-full mr-3 mt-0.5">
              <Building2 size={16} />
            </div>
            <p className="text-slate-700">Increased collaboration in physical office spaces</p>
          </li>
          <li className="flex items-start">
            <div className="bg-food-100 text-food-600 p-2 rounded-full mr-3 mt-0.5">
              <Trophy size={16} />
            </div>
            <p className="text-slate-700">Positive reinforcement rather than mandated attendance</p>
          </li>
          <li className="flex items-start">
            <div className="bg-urban-100 text-urban-600 p-2 rounded-full mr-3 mt-0.5">
              <Gift size={16} />
            </div>
            <p className="text-slate-700">Measurable improvement in team culture and morale</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AttendanceTracking;
