
import React from 'react';
import Button from '@/components/ui/Button';
import { useCalendly } from '@/contexts/CalendlyContext';

const Contact = () => {
  const { openCalendly } = useCalendly();

  return (
    <section id="contact" className="section bg-urban-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-hidden">
            <p className="text-urban-600 font-semibold mb-2">Ready to Get Started?</p>
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              Transform Your Office Culture Today
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Join 500+ forward-thinking companies using Urban Eats Club to boost employee satisfaction and office attendance. Schedule a demo to see how our platform can work for your team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="lg" onClick={openCalendly}>
                Schedule a Demo
              </Button>
              <Button variant="secondary" size="lg" onClick={() => {
                const pricingSection = document.getElementById('pricing');
                pricingSection?.scrollIntoView({ behavior: 'smooth' });
              }}>
                View Pricing Plans
              </Button>
            </div>
            
            <div className="flex items-center text-slate-600">
              <svg className="w-5 h-5 text-urban-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>No credit card required</span>
              
              <svg className="w-5 h-5 text-urban-600 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Free 14-day trial</span>
            </div>
          </div>
          
          <div className="relative reveal-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-urban-300 to-food-300 rounded-2xl blur-lg opacity-30"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                openCalendly();
              }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-urban-500 focus:border-urban-500"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-urban-500 focus:border-urban-500"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-urban-500 focus:border-urban-500"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-urban-500 focus:border-urban-500"
                    placeholder="Your Company, Inc."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-urban-500 focus:border-urban-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button variant="primary" size="lg" className="w-full" type="submit">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
