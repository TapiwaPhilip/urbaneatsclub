
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/home/Layout';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

// Import new components
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyStats from '@/components/case-study/CaseStudyStats';
import AttendanceTracking from '@/components/case-study/AttendanceTracking';
import SurveyResults from '@/components/case-study/SurveyResults';
import Testimonial from '@/components/case-study/Testimonial';
import CallToAction from '@/components/case-study/CallToAction';

const CaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>TechGrowth Inc. Case Study | Urban Eats Club</title>
        <meta name="description" content="See how TechGrowth Inc. transformed their office culture with Urban Eats Club, increasing office attendance by 42% and improving team collaboration." />
      </Helmet>
      
      <Layout>
        <div className="container-custom py-12 md:py-20">
          <CaseStudyHeader />
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 mb-12 animate-fade-in-up">
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
              
              <CaseStudyStats />
              
              <h3 className="text-2xl font-display mb-6 text-slate-800">The Solution</h3>
              <p className="text-lg text-slate-700 mb-10 max-w-4xl leading-relaxed">
                TechGrowth partnered with Urban Eats Club to provide high-quality lunches three days a week. This initiative was positioned as an employee benefit rather than an incentive to return to the office, though that was a key objective.
              </p>
              
              <AttendanceTracking />
              
              <SurveyResults />
              
              <h3 className="text-2xl font-display mb-6 text-slate-800">The Results</h3>
              <p className="text-lg text-slate-700 mb-10 max-w-4xl leading-relaxed">
                Within just two months, in-office attendance increased from 30% to 72% on lunch days. Teams started scheduling collaborative work sessions around these days, and overall employee satisfaction scores improved by a remarkable 23%.
              </p>
              
              <Testimonial />
              
              <CallToAction />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CaseStudy;
