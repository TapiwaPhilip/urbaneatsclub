
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'header-glass py-4' : 'py-6'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span className="text-2xl font-bold font-display text-urban-600">
              Urban<span className="text-food-500">Eats</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#contact" className="hidden md:inline-flex btn btn-primary btn-md">
              Get Started
            </a>

            <button
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold font-display text-urban-600">
              Urban<span className="text-food-500">Eats</span>
            </span>
            <button
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-lg">
            <MobileNavLink href="#features" onClick={closeMenu}>
              Features
            </MobileNavLink>
            <MobileNavLink href="#how-it-works" onClick={closeMenu}>
              How It Works
            </MobileNavLink>
            <MobileNavLink href="#pricing" onClick={closeMenu}>
              Pricing
            </MobileNavLink>
            <MobileNavLink href="#benefits" onClick={closeMenu}>
              Benefits
            </MobileNavLink>
          </nav>

          <div className="mt-auto">
            <a
              href="#contact"
              className="w-full btn btn-primary btn-lg text-center"
              onClick={closeMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-slate-700 hover:text-urban-600 transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-slate-800 font-medium py-2 hover:text-urban-600 transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Header;
