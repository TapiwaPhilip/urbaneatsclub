
import React from 'react';
import AnimatedImage from '@/components/ui/AnimatedImage';

const Testimonials = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-title">Testimonials</p>
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="text-slate-600 text-lg">
            Discover how Urban Eats Club has transformed company culture and employee satisfaction for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Since implementing Urban Eats Club, our office attendance has increased by 45%. The seamless integration with our HR systems made rollout incredibly easy."
            name="Michael Rodriguez"
            position="Director of HR, Insight Technologies"
            imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a"
          />
          
          <TestimonialCard 
            quote="The flexibility of meal plans allows us to cater to our diverse team's needs. The reporting tools help us track usage and optimize our benefits program."
            name="Aisha Johnson"
            position="Operations Manager, FinCore Solutions"
            imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
          />
          
          <TestimonialCard 
            quote="Our employees love the social aspect of the app. Team lunches have become a highlight of the week, boosting morale and cross-department collaboration."
            name="Thomas Chen"
            position="CEO, Novus Creatives"
            imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
          />
        </div>

        <div className="mt-20 rounded-2xl bg-gradient-to-r from-urban-500 to-urban-600 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-lg text-white/80 italic mb-6">
                "Urban Eats Club has been a game-changer for our company culture. Not only has it increased office attendance, but the quality of interaction between teams has improved dramatically. It's one of the best investments we've made in our employee experience program."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white/30 mr-4">
                  <AnimatedImage
                    src="https://images.unsplash.com/photo-1573497019236-61e1a29bce76"
                    alt="Jessica Williams"
                    aspectRatio="square"
                  />
                </div>
                <div>
                  <p className="font-medium text-white">Jessica Williams</p>
                  <p className="text-white/70">Chief People Officer, Elevate Media</p>
                </div>
              </div>
            </div>
            <div className="relative lg:h-auto">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                alt="Team enjoying lunch together"
                className="h-full w-full object-cover"
                aspectRatio="wide"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 mb-8">
            <CompanyLogo name="TechCorp" />
            <CompanyLogo name="InnovateLabs" />
            <CompanyLogo name="FutureWorks" />
            <CompanyLogo name="Amplitude" />
            <CompanyLogo name="CoreSystems" />
          </div>
          <p className="text-slate-500">Trusted by 500+ companies worldwide</p>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  quote, 
  name, 
  position, 
  imageSrc 
}: { 
  quote: string;
  name: string;
  position: string;
  imageSrc: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:border-slate-200">
      <div className="flex flex-col h-full">
        <div className="mb-6 text-urban-500">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.93333 12.3333 6.13333 10.7333C7.33333 9.13333 9 7.86667 11.1333 6.93333L12.6667 9.06667C10.9333 9.86667 9.66667 10.6667 8.86667 11.4667C8.06667 12.2667 7.66667 13.0667 7.66667 13.8667C7.66667 14.2 7.73333 14.4667 7.86667 14.6667C8 14.8667 8.2 15 8.46667 15.0667C8.73333 15.1333 9.06667 15.1333 9.46667 15.0667C9.86667 15 10.3333 14.9333 10.8667 14.8667C12.0667 14.6667 13 14.9333 13.6667 15.6667C14.3333 16.4 14.6667 17.2667 14.6667 18.2667C14.6667 19.2667 14.2667 20.1333 13.4667 20.8667C12.6667 21.1333 11.6667 21.3333 9.33333 21.3333ZM22 21.3333C20.5333 21.3333 19.3333 20.8 18.4 19.7333C17.4667 18.6667 17 17.3333 17 15.7333C17 14 17.6 12.3333 18.8 10.7333C20 9.13333 21.6667 7.86667 23.8 6.93333L25.3333 9.06667C23.6 9.86667 22.3333 10.6667 21.5333 11.4667C20.7333 12.2667 20.3333 13.0667 20.3333 13.8667C20.3333 14.2 20.4 14.4667 20.5333 14.6667C20.6667 14.8667 20.8667 15 21.1333 15.0667C21.4 15.1333 21.7333 15.1333 22.1333 15.0667C22.5333 15 23 14.9333 23.5333 14.8667C24.7333 14.6667 25.6667 14.9333 26.3333 15.6667C27 16.4 27.3333 17.2667 27.3333 18.2667C27.3333 19.2667 26.9333 20.1333 26.1333 20.8667C25.3333 21.1333 24.3333 21.3333 22 21.3333Z" fill="currentColor"/>
          </svg>
        </div>
        <p className="text-slate-700 mb-8 flex-grow">{quote}</p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
            <AnimatedImage
              src={imageSrc}
              alt={name}
              aspectRatio="square"
            />
          </div>
          <div>
            <p className="font-medium text-slate-800">{name}</p>
            <p className="text-sm text-slate-500">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyLogo = ({ name }: { name: string }) => {
  return (
    <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-slate-100">
      <p className="font-semibold text-slate-500">{name}</p>
    </div>
  );
};

export default Testimonials;
