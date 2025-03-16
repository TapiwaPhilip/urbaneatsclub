
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AnimatedImage from '@/components/ui/AnimatedImage';

const CaseStudyHeader = () => {
  return (
    <>
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-urban-600 hover:text-urban-700 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
      
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
    </>
  );
};

export default CaseStudyHeader;
