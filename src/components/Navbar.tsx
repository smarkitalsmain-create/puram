import React, { useState } from 'react';
import ElephantLogo from './ElephantLogo';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Philosophy' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Journal' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-charcoal/80 backdrop-blur-xl border-b border-brand-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center cursor-pointer group text-left"
        >
          <ElephantLogo size={48} mode="full" variant="orange" className="group-hover:scale-[1.03]" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-xs tracking-widest uppercase cursor-pointer transition-all duration-300 relative py-2 ${
                  isActive ? 'text-brand-orange-light font-medium' : 'text-brand-white/70 hover:text-brand-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-orange-light trunk-curve-bottom animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Consultation CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-consult-btn"
            onClick={() => handleNavClick('consultation')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
              activeTab === 'consultation'
                ? 'bg-brand-orange text-brand-white border-brand-orange'
                : 'bg-transparent text-brand-white border-brand-orange-light/40 hover:border-brand-orange-light hover:bg-brand-orange/10'
            }`}
          >
            <Calendar size={13} />
            Start Planning
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-white hover:text-brand-orange-light p-2 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-charcoal/95 border-b border-brand-white/5 animate-fade-in py-6 px-6 flex flex-col gap-5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-display text-base tracking-wider uppercase py-2 border-b border-brand-white/5 ${
                  isActive ? 'text-brand-orange-light font-semibold' : 'text-brand-white/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            id="mobile-nav-consult-btn"
            onClick={() => handleNavClick('consultation')}
            className="w-full flex items-center justify-center gap-2 py-3 bg-brand-orange hover:bg-brand-orange-dark text-brand-white font-sans text-xs font-semibold uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
          >
            <Calendar size={14} />
            Start Planning
          </button>
        </div>
      )}
    </nav>
  );
}
