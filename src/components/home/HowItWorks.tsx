
import React from 'react';
import AnimatedImage from '@/components/ui/AnimatedImage';
import { CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-title">How It Works</p>
          <h2 className="section-heading">Simple, Streamlined Process</h2>
          <p className="text-slate-600 text-lg">
            Getting started with Urban Eats Club is easy for both companies and employees. 
            Our seamless onboarding ensures you can start enjoying the benefits right away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-urban-300 to-food-300 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden p-2 border border-slate-100 transition-transform duration-500 hover:scale-[1.02]">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="HR Admin using Urban Eats Club"
                  className="w-full rounded-xl"
                  aspectRatio="square"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm text-urban-600 font-semibold bg-urban-50 px-3 py-1 rounded-full mb-4">Step 1</span>
            <h3 className="text-2xl sm:text-3xl font-display mb-6">We Invite the HR Admin</h3>
            <p className="text-slate-600 mb-8">
              HR administrators with admin privileges can easily manage the entire employee onboarding process and lunch benefit distribution through our intuitive platform.
            </p>
            
            <ul className="space-y-4">
              {[
                "Set up company profile and preferences",
                "Manage user invitations for all employees",
                "Select specific membership plans for each employee",
                "Define spending limits and location restrictions",
                "Access detailed analytics and reports"
              ].map((feature, index) => (
                <li key={index} className="flex">
                  <CheckCircle2 className="h-6 w-6 text-urban-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="inline-block text-sm text-food-600 font-semibold bg-food-50 px-3 py-1 rounded-full mb-4">Step 2</span>
            <h3 className="text-2xl sm:text-3xl font-display mb-6">Select Membership Plans</h3>
            <p className="text-slate-600 mb-8">
              Choose from a variety of membership plans tailored for different budgets and needs. Our flexible options ensure there's a perfect fit for every company and team.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-urban-100 flex items-center justify-center text-urban-600 font-semibold text-xl">S</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Standard Plan</h4>
                    <p className="text-slate-600 mb-2">2 check-ins per week, standard-priced restaurants (€0-€10)</p>
                    <p className="text-sm text-urban-600 font-medium">Perfect for small teams and startups</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-urban-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-urban-500 flex items-center justify-center text-white font-semibold text-xl">M</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Premium Plan</h4>
                    <p className="text-slate-600 mb-2">3 check-ins per week, mid-level restaurants (€10-€14)</p>
                    <p className="text-sm text-urban-600 font-medium">Ideal for growing companies</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-food-100 flex items-center justify-center text-food-600 font-semibold text-xl">L</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Executive Plan</h4>
                    <p className="text-slate-600 mb-2">5 check-ins per week, high-end restaurants (€14-€20)</p>
                    <p className="text-sm text-food-600 font-medium">For companies prioritizing premium benefits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-urban-300 to-food-300 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden p-2 border border-slate-100 transition-transform duration-500 hover:scale-[1.02]">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                alt="Selecting membership plans"
                className="w-full rounded-xl"
                aspectRatio="square"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-urban-300 to-food-300 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden p-2 border border-slate-100 transition-transform duration-500 hover:scale-[1.02]">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                  alt="Employees using the app"
                  className="w-full rounded-xl"
                  aspectRatio="square"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm text-food-600 font-semibold bg-food-50 px-3 py-1 rounded-full mb-4">Step 3</span>
            <h3 className="text-2xl sm:text-3xl font-display mb-6">Employees Start Using The App</h3>
            <p className="text-slate-600 mb-8">
              The employee experience is simple and delightful. After receiving an invitation, they can immediately start enjoying their lunch benefits.
            </p>
            
            <ol className="space-y-6 relative before:absolute before:left-3.5 before:top-8 before:bottom-4 before:w-0.5 before:bg-urban-100">
              {[
                { step: "Sign up after receiving an invitation from HR", color: "border-urban-100" },
                { step: "Browse restaurants and menus within their plan's budget", color: "border-urban-400" },
                { step: "Select meals and pay directly through the app", color: "border-food-100" },
                { step: "Coordinate with colleagues for team lunches", color: "border-food-400" },
                { step: "Enjoy delicious meals without hassle", color: "border-urban-100" }
              ].map((item, index) => (
                <li key={index} className="pl-10 relative">
                  <div className={`absolute left-0 top-0.5 w-7 h-7 rounded-full bg-white border-2 ${item.color} flex items-center justify-center`}>
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                  <p className="text-slate-700">{item.step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
