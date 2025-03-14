
import React from 'react';
import Layout from '@/components/home/Layout';
import SEOHead from '@/components/home/SEOHead';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Benefits from '@/components/home/Benefits';
import Pricing from '@/components/home/Pricing';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import useScrollReveal from '@/components/home/ScrollReveal';

const Index = () => {
  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <Layout>
      <SEOHead />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
