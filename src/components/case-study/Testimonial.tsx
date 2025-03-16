
import React from 'react';

const Testimonial = () => {
  return (
    <blockquote className="border-l-4 border-urban-500 pl-6 md:pl-8 py-4 my-10 bg-slate-50 rounded-r-xl shadow-sm">
      <p className="italic text-xl md:text-2xl text-slate-600 leading-relaxed mb-4">
        "Urban Eats Club delivered beyond our expectations. Not only did we see our teams return to the office, but the quality of the meals and service has been exceptional. The ROI on this program has been significant both in terms of culture and productivity."
      </p>
      <footer className="flex items-center">
        <div className="w-10 h-10 bg-urban-100 flex items-center justify-center rounded-full mr-3">
          <span className="text-urban-600 font-bold">SJ</span>
        </div>
        <div>
          <p className="font-medium text-slate-800">Sarah Johnson</p>
          <p className="text-slate-500 text-sm">Head of HR, TechGrowth Inc.</p>
        </div>
      </footer>
    </blockquote>
  );
};

export default Testimonial;
