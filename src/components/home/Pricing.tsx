
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-title">Pricing</p>
          <h2 className="section-heading">Flexible Plans for Every Company</h2>
          <p className="text-slate-600 text-lg">
            Choose the right plan for your team's needs. All plans include our core platform features
            with different lunch credit allocations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="pricing-card bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Standard Plan</h3>
              <p className="text-slate-600">For small teams getting started</p>
            </div>
            
            <div className="mb-6">
              <p className="text-4xl font-bold">€10<span className="text-base font-normal text-slate-500">/employee/day</span></p>
              <p className="text-slate-500 mt-1">2 check-ins per week</p>
            </div>
            
            <div className="mb-8">
              <p className="text-sm font-medium text-slate-700 mb-4">Plan includes:</p>
              <ul className="space-y-3">
                <PricingFeature>Access to standard-priced restaurants (€0-€10)</PricingFeature>
                <PricingFeature>Basic reporting and analytics</PricingFeature>
                <PricingFeature>Team coordination features</PricingFeature>
                <PricingFeature>Standard customer support</PricingFeature>
              </ul>
            </div>
            
            <Button variant="secondary" size="lg" className="w-full">
              Choose Standard
            </Button>
          </div>
          
          <div className="pricing-card bg-white rounded-2xl p-8 border-2 border-urban-400 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0">
              <div className="bg-urban-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Premium Plan</h3>
              <p className="text-slate-600">Perfect for growing companies</p>
            </div>
            
            <div className="mb-6">
              <p className="text-4xl font-bold">€14<span className="text-base font-normal text-slate-500">/employee/day</span></p>
              <p className="text-slate-500 mt-1">3 check-ins per week</p>
            </div>
            
            <div className="mb-8">
              <p className="text-sm font-medium text-slate-700 mb-4">Everything in Standard, plus:</p>
              <ul className="space-y-3">
                <PricingFeature>Access to mid-level restaurants (€10-€14)</PricingFeature>
                <PricingFeature>Advanced reporting and analytics</PricingFeature>
                <PricingFeature>Group ordering capabilities</PricingFeature>
                <PricingFeature>Priority customer support</PricingFeature>
                <PricingFeature>HR system integration</PricingFeature>
              </ul>
            </div>
            
            <Button variant="primary" size="lg" className="w-full">
              Choose Premium
            </Button>
          </div>
          
          <div className="pricing-card bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-1">Executive Plan</h3>
              <p className="text-slate-600">For enterprise-level benefits</p>
            </div>
            
            <div className="mb-6">
              <p className="text-4xl font-bold">€20<span className="text-base font-normal text-slate-500">/employee/day</span></p>
              <p className="text-slate-500 mt-1">5 check-ins per week</p>
            </div>
            
            <div className="mb-8">
              <p className="text-sm font-medium text-slate-700 mb-4">Everything in Premium, plus:</p>
              <ul className="space-y-3">
                <PricingFeature>Access to high-end restaurants (€14-€20)</PricingFeature>
                <PricingFeature>Custom reporting and dedicated dashboard</PricingFeature>
                <PricingFeature>Complete accounting software integration</PricingFeature>
                <PricingFeature>Dedicated account manager</PricingFeature>
                <PricingFeature>Custom branding options</PricingFeature>
              </ul>
            </div>
            
            <Button variant="secondary" size="lg" className="w-full">
              Choose Executive
            </Button>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Need a custom solution?</h3>
              <p className="text-slate-600">We offer tailored plans for enterprises with specific requirements.</p>
            </div>
            <Button variant="primary" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingFeature = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start">
      <CheckCircle2 className="h-5 w-5 text-urban-500 mr-3 flex-shrink-0 mt-0.5" />
      <span className="text-slate-600">{children}</span>
    </li>
  );
};

export default Pricing;
