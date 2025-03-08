
import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard';
import AnimatedImage from '@/components/ui/AnimatedImage';
import { 
  CalendarClock, 
  BrainCircuit, 
  Users, 
  UtensilsCrossed, 
  ArrowUpRight,
  Slack
} from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="section bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-40"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-title">Features</p>
          <h2 className="section-heading">Simplify Lunch Benefits</h2>
          <p className="text-slate-600 text-lg">
            Our platform makes managing employee lunch programs effortless with powerful features
            designed for both companies and employees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            icon={BrainCircuit}
            title="AI Meal Planning"
            description="AI-powered feature that plans meals for a week or month, tailored to employee preferences, even booking reservations and updating calendars."
            iconClassName="bg-urban-50 text-urban-600"
          />
          
          <FeatureCard
            icon={Users}
            title="Team Lunch Groups"
            description="Create groups with colleagues and select restaurants to eat lunch together, fostering team building and collaboration."
            iconClassName="bg-food-50 text-food-600"
          />
          
          <FeatureCard
            icon={UtensilsCrossed}
            title="Group Ordering"
            description="Order as a group from restaurants and get food delivered together, simplifying the ordering process for teams."
            iconClassName="bg-urban-50 text-urban-600"
          />
          
          <FeatureCard
            icon={CalendarClock}
            title="Flexible Schedules"
            description="Set spending limits, assign lunch check-ins per week/month, and customize for each employee's needs."
            iconClassName="bg-food-50 text-food-600"
          />
          
          <FeatureCard
            icon={ArrowUpRight}
            title="Credit Transfers"
            description="Transfer meal credits to colleagues via the app, allowing for flexibility when plans change."
            iconClassName="bg-urban-50 text-urban-600"
          />
          
          <FeatureCard
            icon={Slack}
            title="HR & Accounting Integration"
            description="Seamlessly integrate with HR systems and accounting software like DATEV, with receipt management."
            iconClassName="bg-food-50 text-food-600"
          />
        </div>

        <div className="mt-20 lg:mt-24 relative">
          <div className="absolute -inset-px bg-gradient-to-r from-urban-300 to-food-300 rounded-2xl blur-md opacity-30"></div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-urban-600 font-semibold mb-2">App Interface</p>
                <h3 className="text-2xl sm:text-3xl font-display mb-4">
                  Beautiful, Intuitive Experience
                </h3>
                <p className="text-slate-600 mb-8">
                  The Urban Eats Club app provides a seamless experience for employees to browse restaurants, order meals, join team lunches, and manage their lunch benefits—all in one place.
                </p>
                <ul className="space-y-4">
                  {[
                    "Restaurant discovery with filters and recommendations",
                    "Easy credit tracking and management",
                    "Calendar integration for lunch scheduling",
                    "Team joining and coordination features",
                    "Receipt and expense management"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-urban-100 text-urban-600 flex items-center justify-center">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative lg:p-12 flex items-center">
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-urban-50 rounded-full blur-3xl opacity-50"></div>
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-urban-100 to-urban-200 rounded-xl blur-md opacity-50"></div>
                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
                      <AnimatedImage
                        src="https://images.unsplash.com/photo-1484723091739-30a097e8f929"
                        alt="Food in the app"
                        aspectRatio="portrait"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 transform rotate-6 w-40 sm:w-48">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-food-100 to-food-200 rounded-xl blur-md opacity-50"></div>
                      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
                        <AnimatedImage
                          src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47"
                          alt="App interface"
                          aspectRatio="portrait"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
