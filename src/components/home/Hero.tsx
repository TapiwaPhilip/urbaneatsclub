
import React, { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import AnimatedImage from '@/components/ui/AnimatedImage';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${y * -2}deg) scale3d(1.03, 1.03, 1.03)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    };
    
    const element = imageRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove as EventListener);
      element.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove as EventListener);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-urban-50 text-urban-600 font-medium text-sm">
              The Lunch Revolution for Employers
            </div>
            <h1 className="mb-6">
              There <em>is</em> a Thing Called
              <span className="text-gradient block mt-2">Free Lunch</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Boost office attendance and employee satisfaction with a seamless lunch program.
              Urban Eats Club makes employee lunch perks simple, flexible, and effective.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" withArrow>
                Get Started
              </Button>
              <Button variant="secondary" size="lg">
                Book a Demo
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-urban-100 flex items-center justify-center text-urban-600 font-medium overflow-hidden">
                  <AnimatedImage 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5" 
                    alt="User" 
                    aspectRatio="square"
                    priority
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-urban-100 flex items-center justify-center text-urban-600 font-medium overflow-hidden">
                  <AnimatedImage 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
                    alt="User" 
                    aspectRatio="square"
                    priority
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-urban-100 flex items-center justify-center text-urban-600 font-medium overflow-hidden">
                  <AnimatedImage 
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" 
                    alt="User" 
                    aspectRatio="square"
                    priority
                  />
                </div>
              </div>
              <div>
                <span className="text-slate-800 font-medium">500+ companies</span>
                <p className="text-sm text-slate-500">trust Urban Eats Club</p>
              </div>
            </div>
          </div>

          <div 
            ref={imageRef} 
            className="w-full lg:w-1/2 transition-transform duration-300 ease-out animate-fade-in" 
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-urban-300 to-food-300 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden p-2 border border-slate-100">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1"
                  alt="Urban Eats Club App Interface"
                  className="w-full rounded-xl"
                  aspectRatio="wide"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-food-50 rounded-full blur-3xl opacity-50 animate-pulse-subtle"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-urban-50 rounded-full blur-3xl opacity-50 animate-pulse-subtle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
