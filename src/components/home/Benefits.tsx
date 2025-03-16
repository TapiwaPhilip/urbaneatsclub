import React from 'react';
import { 
  HeartHandshake, 
  TrendingUp, 
  CakeSlice, 
  Building2, 
  Users2, 
  DollarSign 
} from 'lucide-react';
import AnimatedImage from '@/components/ui/AnimatedImage';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const Benefits = () => {
  return (
    <section id="benefits" className="section bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-40"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-title">Benefits</p>
          <h2 className="section-heading">Why Companies Choose Urban Eats Club</h2>
          <p className="text-slate-600 text-lg">
            Investing in employee lunches delivers substantial returns for your business beyond simply providing meals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <BenefitCard
            icon={Building2}
            title="Boost Office Attendance"
            description="Motivate employees to come to the office with appealing lunch perks that make commuting worthwhile."
            highlight="65% of employees prefer lunch perks over other benefits"
          />
          
          <BenefitCard
            icon={HeartHandshake}
            title="Improve Employee Morale"
            description="Free meals substantially boost workplace satisfaction, creating a more positive environment."
            highlight="Measurable increase in employee happiness"
          />
          
          <BenefitCard
            icon={Users2}
            title="Encourage Collaboration"
            description="Promote cross-department interaction and collaboration through shared meals and team lunches."
            highlight="Strengthen company culture"
          />
          
          <BenefitCard
            icon={CakeSlice}
            title="Employee Wellbeing"
            description="Support employee health with nutritious meal options, reducing stress and boosting productivity."
            highlight="Healthy employees are more productive"
          />
          
          <BenefitCard
            icon={TrendingUp}
            title="Competitive Advantage"
            description="Stand out in recruitment with attractive benefits that help secure and retain top talent."
            highlight="Gain edge in talent acquisition"
          />
          
          <BenefitCard
            icon={DollarSign}
            title="Reduce Turnover"
            description="Increase employee loyalty and reduce costly turnover with valued daily benefits."
            highlight="Lower recruitment and training costs"
          />
        </div>

        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-urban-50 to-transparent opacity-70 pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-food-50 text-food-600 font-medium text-sm">
                Success Story
              </div>
              <h3 className="text-2xl sm:text-3xl font-display mb-6">
                "Urban Eats Club transformed our office culture"
              </h3>
              <p className="text-slate-600 mb-6 text-lg">
                After implementing Urban Eats Club, we saw a 42% increase in office attendance and significantly improved team collaboration. The streamlined management process saved our HR team countless hours.
              </p>
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                    alt="Sarah Johnson"
                    aspectRatio="square"
                  />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Sarah Johnson</p>
                  <p className="text-sm text-slate-500">Head of HR, TechGrowth Inc.</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="stat-card flex-1">
                  <p className="text-3xl font-bold text-urban-600 mb-1">42%</p>
                  <p className="text-sm text-slate-600">Increased office attendance</p>
                </div>
                <div className="stat-card flex-1">
                  <p className="text-3xl font-bold text-food-600 mb-1">89%</p>
                  <p className="text-sm text-slate-600">Employee satisfaction</p>
                </div>
                <div className="stat-card flex-1">
                  <p className="text-3xl font-bold text-urban-600 mb-1">28%</p>
                  <p className="text-sm text-slate-600">Reduced turnover</p>
                </div>
              </div>
              
              <Link to="/case-study">
                <Button variant="primary" size="lg">
                  Read Full Case Study
                </Button>
              </Link>
            </div>
            
            <div className="relative lg:h-auto overflow-hidden">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Happy office workers at lunch"
                className="h-full w-full object-cover"
                aspectRatio="portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xl font-medium mb-2">TechGrowth Inc.</p>
                <p className="text-sm opacity-80">230 employees · San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon: Icon, title, description, highlight }: { 
  icon: React.ElementType;
  title: string;
  description: string;
  highlight: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:border-slate-200">
      <div className="mb-4 text-urban-500">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <div className="bg-urban-50 text-urban-700 px-4 py-2 rounded-lg text-sm font-medium">
        {highlight}
      </div>
    </div>
  );
};

export default Benefits;
