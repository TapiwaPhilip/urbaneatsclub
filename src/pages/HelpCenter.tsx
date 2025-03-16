
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/home/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpCenter = () => {
  return (
    <Layout>
      <Helmet>
        <title>Help Center | Urban Eats Club</title>
        <meta name="description" content="Get answers to your questions about Urban Eats Club's services and platform." />
      </Helmet>
      
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
          <p className="text-xl text-slate-600 mb-12">Find answers to frequently asked questions about Urban Eats Club.</p>
          
          <Accordion type="single" collapsible className="mb-12">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">How does Urban Eats Club work?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Urban Eats Club partners with local restaurants to provide seamless lunch experiences for companies. Employees can order meals within their daily budget, while employers only pay for what's actually used. Our platform handles all logistics, payments, and reporting.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">How do I set up an account for my company?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Getting started is easy! Schedule a demo through our website, and our team will guide you through the setup process. We'll help you configure your account, set budgets, and onboard your employees.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">What restaurants are available in my area?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Urban Eats Club works with a diverse network of restaurants in major cities. During your onboarding, we'll provide a list of available restaurants in your area. We continuously expand our network to offer more options.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">How are meal budgets managed?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                You set daily meal allowances for your employees based on your chosen plan. Employees can order within this budget, and you only pay for what they use. Our platform provides detailed reporting so you can track usage and expenses.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">Can employees with dietary restrictions use Urban Eats Club?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Absolutely! Our platform allows employees to set dietary preferences and restrictions. When ordering, they'll see meals that match their needs, making it easy to find suitable options.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Need more help?</h2>
            <p className="text-slate-600 mb-6">Our support team is available Monday through Friday, 9am to 6pm CET.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:support@urbaneats.club" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Email Support
              </a>
              <a href="tel:+15551234567" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Call Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpCenter;
