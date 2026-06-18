import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Menu, X } from 'lucide-react';
import asecLogo from '../assets/images/asec_logo_1781785562511.jpg';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Engineering Services' },
    { id: 'solutions', label: 'Solutions & Products' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          
          {/* Logo Brand Title */}
          <div 
            onClick={() => { setActiveTab('home'); setIsOpen(false); }}
            className="flex items-center space-x-3.5 cursor-pointer group"
            id="header-brand-logo"
          >
            <div className="relative p-0.5 bg-white rounded-full border border-slate-200 shadow-xs group-hover:border-slate-300 transition-colors shrink-0">
              <img 
                src={asecLogo} 
                alt="ASEC Logo" 
                referrerPolicy="no-referrer"
                className="w-11 h-11 md:w-14 md:h-14 rounded-full object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="font-display font-bold text-2xl md:text-3xl tracking-tight text-blue-900">ASEC</span>
              </div>
              <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-sans font-semibold">Engineering & Distribution</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`py-5 md:py-7 text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-blue-900 border-b-2 border-blue-900 font-bold'
                      : 'text-slate-600 hover:text-blue-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Contact CTA in Header */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-2.5 border border-slate-300 text-slate-700 font-bold text-xs rounded-sm hover:border-blue-900 hover:text-blue-900 transition-all cursor-pointer font-sans tracking-wide"
              id="header-cta"
            >
              Contact an Expert
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-900 hover:bg-slate-100 focus:outline-none"
              aria-expanded={isOpen}
              id="mobile-menu-btn"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200" id="mobile-nav">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-50 text-blue-900 font-bold border-l-4 border-blue-900'
                      : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 pb-2 border-t border-slate-100 px-4">
              <button
                onClick={() => {
                  setActiveTab('contact');
                  setIsOpen(false);
                }}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white text-center py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all"
              >
                Contact an Expert
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
