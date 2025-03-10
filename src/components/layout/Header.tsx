import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import useIsMobile from '@/hooks/use-mobile';
import Button from '@/components/ui/Button';
import { useCalendly } from '@/contexts/CalendlyContext';
import { Link as ScrollLink } from 'react-scroll';
import LanguageSelector from '../ui/LanguageSelector';
import { useTranslation } from 'react-i18next';

type NavLink = {
  id: string;
  label: string;
};

const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { openCalendly } = useCalendly();

  const links: NavLink[] = [
    { id: 'features', label: t('nav.features') },
    { id: 'how-it-works', label: t('nav.howItWorks') },
    { id: 'benefits', label: t('nav.benefits') },
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-slate-900">
                Urban<span className="text-urban-600">Eats</span>Club
              </span>
            </a>
          </div>

          {!isMobile && (
            <nav className="hidden lg:flex items-center space-x-1">
              {links.map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              ))}
              <div className="ml-4">
                <LanguageSelector />
              </div>
              <div className="ml-4">
                <Button variant="primary" onClick={openCalendly}>
                  {t('hero.getStarted')}
                </Button>
              </div>
            </nav>
          )}

          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-900"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {isMobile && mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg py-4 animate-slide-down">
          <div className="container-custom">
            <nav className="flex flex-col space-y-3">
              {links.map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
                >
                  {link.label}
                </ScrollLink>
              ))}
              <div className="px-4 pt-2">
                <LanguageSelector />
              </div>
              <div className="px-4 pt-2">
                <Button variant="primary" onClick={openCalendly} className="w-full">
                  {t('hero.getStarted')}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
