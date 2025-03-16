
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/home/Layout';
import Button from '@/components/ui/Button';
import AnimatedImage from '@/components/ui/AnimatedImage';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Users2, TrendingUp } from 'lucide-react';

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
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 mb-12">
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="TechGrowth Inc. office lunch area"
                className="w-full h-full object-cover"
                aspectRatio="wide"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-food-50 text-food-600 font-medium text-sm">
                  Success Story
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-2">
                  TechGrowth Inc.
                </h1>
                <p className="text-lg opacity-90">230 employees · San Francisco, CA</p>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-display mb-6">
                Transforming Office Culture Through Food
              </h2>
              
              <div className="mb-10">
                <p className="text-lg text-slate-700 mb-4">
                  TechGrowth Inc., a rapidly expanding software company in San Francisco, faced challenges with remote work and maintaining their collaborative company culture. With 70% of their workforce working remotely, knowledge transfer between senior and junior employees slowed significantly.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  The leadership team needed a solution to encourage employees to return to the office without mandating in-office days, which could negatively impact morale and retention.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="stat-card bg-slate-50 p-6 rounded-xl">
                  <div className="text-urban-500 mb-2">
                    <Building2 size={24} />
                  </div>
                  <p className="text-3xl font-bold text-urban-600 mb-1">42%</p>
                  <p className="text-slate-600">Increased office attendance</p>
                </div>
                <div className="stat-card bg-slate-50 p-6 rounded-xl">
                  <div className="text-food-500 mb-2">
                    <Users2 size={24} />
                  </div>
                  <p className="text-3xl font-bold text-food-600 mb-1">89%</p>
                  <p className="text-slate-600">Employee satisfaction</p>
                </div>
                <div className="stat-card bg-slate-50 p-6 rounded-xl">
                  <div className="text-urban-500 mb-2">
                    <TrendingUp size={24} />
                  </div>
                  <p className="text-3xl font-bold text-urban-600 mb-1">28%</p>
                  <p className="text-slate-600">Reduced turnover</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">The Solution</h3>
              <p className="text-lg text-slate-700 mb-6">
                TechGrowth partnered with Urban Eats Club to provide high-quality lunches three days a week. This initiative was positioned as an employee benefit rather than an incentive to return to the office, though that was a key objective.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">The Results</h3>
              <p className="text-lg text-slate-700 mb-6">
                Within just two months, in-office attendance increased from 30% to 72% on lunch days. Teams started scheduling collaborative work sessions around these days, and overall employee satisfaction scores improved by 23%.
              </p>
              
              <blockquote className="border-l-4 border-urban-500 pl-6 italic my-8 text-xl text-slate-600">
                "Urban Eats Club delivered beyond our expectations. Not only did we see our teams return to the office, but the quality of the meals and service has been exceptional. The ROI on this program has been significant both in terms of culture and productivity."
                <footer className="mt-2 text-base font-medium text-slate-800">
                  — Sarah Johnson, Head of HR
                </footer>
              </blockquote>
              
              <div className="mt-10">
                <Link to="/">
                  <Button variant="primary" size="lg">
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
