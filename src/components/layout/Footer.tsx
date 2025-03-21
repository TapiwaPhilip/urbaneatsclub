
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  // Get the base URL of the application
  const baseUrl = window.location.origin;
  
  return (
    <footer className="bg-slate-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold font-display text-slate-950">
                Urban<span className="text-urban-500">Eats</span>
              </span>
            </Link>
            <p className="text-slate-600 mb-6 max-w-md leading-relaxed text-base">
              Helping companies offer lunch experiences that boost employee satisfaction and office attendance. There is a thing called free lunch.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Instagram} aria-label="Instagram" />
              <SocialIcon icon={Twitter} aria-label="Twitter" />
              <SocialIcon icon={Linkedin} aria-label="LinkedIn" />
              <SocialIcon icon={Facebook} aria-label="Facebook" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5 text-slate-800 font-display">Product</h4>
            <ul className="space-y-3">
              <FooterHashLink href="#features">Features</FooterHashLink>
              <FooterHashLink href="#pricing">Pricing</FooterHashLink>
              <FooterHashLink href="#benefits">Benefits</FooterHashLink>
              <FooterHashLink href="#testimonials">Testimonials</FooterHashLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5 text-slate-800 font-display">Resources</h4>
            <ul className="space-y-3">
              <FooterPageLink href="/case-study">Case Studies</FooterPageLink>
              <FooterPageLink href="/help-center">Help Center</FooterPageLink>
              <FooterPageLink href="/api-docs">API Documentation</FooterPageLink>
              <FooterPageLink href="/blog">Blog</FooterPageLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5 text-slate-800 font-display">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-urban-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">123 Market St, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-urban-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@urbaneats.club" className="text-slate-600 hover:text-urban-600 transition-colors text-sm">
                  info@urbaneats.club
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-urban-500 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-slate-600 hover:text-urban-600 transition-colors text-sm">
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
            <div className="flex flex-wrap gap-6">
              <a href={`${baseUrl}/privacy-policy`} className="text-sm text-slate-600 hover:text-urban-600 transition-colors font-medium">
                Privacy Policy
              </a>
              <a href={`${baseUrl}/terms-of-service`} className="text-sm text-slate-600 hover:text-urban-600 transition-colors font-medium">
                Terms of Service
              </a>
              <a href={`${baseUrl}/cookies-policy`} className="text-sm text-slate-600 hover:text-urban-600 transition-colors font-medium">
                Cookies
              </a>
              <a href={`${baseUrl}/imprint`} className="text-sm text-slate-600 hover:text-urban-600 transition-colors font-medium">
                Imprint
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// For hash-based links (on the same page)
const FooterHashLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <a href={href} className="text-slate-600 hover:text-urban-600 transition-colors text-sm">
        {children}
      </a>
    </li>
  );
};

// For page links that need the baseUrl
const FooterPageLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const baseUrl = window.location.origin;
  return (
    <li>
      <a href={`${baseUrl}${href}`} className="text-slate-600 hover:text-urban-600 transition-colors text-sm">
        {children}
      </a>
    </li>
  );
};

const SocialIcon = ({
  icon: Icon,
  'aria-label': ariaLabel
}: {
  icon: React.ElementType;
  'aria-label'?: string;
}) => {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-urban-600 hover:border-urban-300 hover:shadow-sm transition-all"
      aria-label={ariaLabel}
    >
      <Icon size={20} />
    </a>
  );
};

export default Footer;
