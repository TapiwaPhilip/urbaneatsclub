import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/home/Layout';
import Button from '@/components/ui/Button';
import AnimatedImage from '@/components/ui/AnimatedImage';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Building2, 
  Users2, 
  TrendingUp, 
  Calendar, 
  Trophy, 
  Gift, 
  ArrowRight,
  ChartPie,
  MapPin,
  BadgePercent,
  User,
  Briefcase,
  GraduationCap
} from 'lucide-react';
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
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

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

const incentivePreferenceData = [
  { name: 'Lunch Incentives', value: 120, color: '#1a9bf0' },
  { name: 'Bonus Payments', value: 40, color: '#f59e0b' },
  { name: 'Extra Time Off', value: 25, color: '#10b981' },
  { name: 'Home Office Stipend', value: 15, color: '#8b5cf6' },
];

const COLORS = ['#1a9bf0', '#f59e0b', '#10b981', '#8b5cf6'];

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

const CaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>TechGrowth Inc. Case Study | Urban Eats Club</title>
        <meta name="description" content="See how TechGrowth Inc. transformed their office culture with Urban Eats Club, increasing office attendance by 42% and improving team collaboration." />
      </Helmet>
      
      <Layout>
        <div className="container-custom py-12 md:py-20">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-urban-600 hover:text-urban-700 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 mb-12 animate-fade-in-up">
            <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="TechGrowth Inc. office lunch area"
                className="w-full h-full object-cover"
                aspectRatio="wide"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-food-500 text-white font-medium text-sm shadow-sm">
                  Success Story
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-3 text-white drop-shadow-md">
                  TechGrowth Inc.
                </h1>
                <p className="text-lg md:text-xl opacity-90">230 employees · San Francisco, CA</p>
              </div>
            </div>
            
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display mb-8 text-gradient">
                Transforming Office Culture Through Food
              </h2>
              
              <div className="mb-12 max-w-3xl">
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  TechGrowth Inc., a rapidly expanding software company in San Francisco, faced challenges with remote work and maintaining their collaborative company culture. With 70% of their workforce working remotely, knowledge transfer between senior and junior employees slowed significantly.
                </p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  The leadership team needed a solution to encourage employees to return to the office without mandating in-office days, which could negatively impact morale and retention.
                </p>
              </div>
              
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
              
              <h3 className="text-2xl font-display mb-6 text-slate-800">The Solution</h3>
              <p className="text-lg text-slate-700 mb-10 max-w-4xl leading-relaxed">
                TechGrowth partnered with Urban Eats Club to provide high-quality lunches three days a week. This initiative was positioned as an employee benefit rather than an incentive to return to the office, though that was a key objective.
              </p>
              
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
              
              <h3 className="text-2xl font-display mb-6 text-slate-800">The Results</h3>
              <p className="text-lg text-slate-700 mb-10 max-w-4xl leading-relaxed">
                Within just two months, in-office attendance increased from 30% to 72% on lunch days. Teams started scheduling collaborative work sessions around these days, and overall employee satisfaction scores improved by a remarkable 23%.
              </p>
              
              <blockquote className="border-l-4 border-urban-500 pl-6 md:pl-8 py-4 my-10 bg-slate-50 rounded-r-xl shadow-sm">
                <p className="italic text-xl md:text-2xl text-slate-600 leading-relaxed mb-4">
                  "Urban Eats Club delivered beyond our expectations. Not only did we see our teams return to the office, but the quality of the meals and service has been exceptional. The ROI on this program has been significant both in terms of culture and productivity."
                </p>
                <footer className="flex items-center">
                  <div className="w-10 h-10 bg-urban-100 flex items-center justify-center rounded-full mr-3">
                    <span className="text-urban-600 font-bold">SJ</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Sarah Johnson</p>
                    <p className="text-slate-500 text-sm">Head of HR, TechGrowth Inc.</p>
                  </div>
                </footer>
              </blockquote>
              
              <div className="mt-12 text-center">
                <Link to="/">
                  <Button variant="primary" size="lg" withArrow>
                    Learn How We Can Help Your Company
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CaseStudy;

