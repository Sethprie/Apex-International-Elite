'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'values', label: 'Values' },
    { id: 'map', label: 'Global Presence' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo/logo.png"
                alt="Apex International Elite"
                className={`h-10 w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-8' : 'h-10'
                }`}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#b29559' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#a68349';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#b29559';
                }}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors duration-200 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <img
                  src="/logo/logo.png"
                  alt="Apex International Elite"
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-6 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#b29559' }}
                >
                  Get Started
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
