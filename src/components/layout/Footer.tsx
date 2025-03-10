import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold font-display text-slate-950">
                Urban<span className="text-blue-400">Eats</span>
              </span>
            </Link>
            <p className="text-slate-600 mb-6 max-w-md">
              Helping companies offer lunch experiences that boost employee satisfaction and office attendance. There is a thing called free lunch.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Facebook} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#benefits">Benefits</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">API Documentation</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-urban-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">123 Market St, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-urban-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@urbaneats.club" className="text-slate-600 hover:text-urban-600 transition-colors">
                  info@urbaneats.club
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-urban-500 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-slate-600 hover:text-urban-600 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Urban Eats Club. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-slate-500 hover:text-urban-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-urban-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-urban-600 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
const FooterLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <li>
      <a href={href} className="text-slate-600 hover:text-urban-600 transition-colors">
        {children}
      </a>
    </li>;
};
const SocialIcon = ({
  icon: Icon
}: {
  icon: React.ElementType;
}) => {
  return <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-urban-600 hover:border-urban-300 transition-colors">
      <Icon size={20} />
    </a>;
};
export default Footer;