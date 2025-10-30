import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme, isDark } = useTheme();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-base ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-neutral-200 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name - Signature Style */}
          <div className="signature-container">
            <div className="signature text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-300 animate-signature">
              HC
            </div>
            <div className="signature-name text-sm font-medium text-neutral-700 dark:text-gray-300 ml-2 hidden sm:block">
              Heer Chotaliya
            </div>
          </div>

          {/* Desktop Navigation - Compact */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-fast relative ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary-500 dark:text-primary-400'
                    : 'text-neutral-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 dark:bg-primary-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-gray-800 text-neutral-700 dark:text-gray-300 hover:bg-neutral-200 dark:hover:bg-gray-700 transition-colors duration-fast"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-fast"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-neutral-200 dark:border-gray-800">
          <div className="max-w-container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left py-2 px-3 rounded-lg transition-colors duration-fast ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-neutral-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;