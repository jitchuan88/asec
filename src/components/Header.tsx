import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Menu, X, ChevronDown } from 'lucide-react';
import asecLogo from '../assets/images/asec_logo_1781785562511.jpg';
import { SOLUTION_CATEGORIES } from '../data';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function Header({ activeTab, setActiveTab, selectedCategory, setSelectedCategory }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverCategory, setHoverCategory] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

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
            <div className="relative shrink-0 flex items-center justify-center">
              <img 
                src={asecLogo} 
                className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full border border-slate-200 shadow-xs group-hover:scale-105 transition-all" 
                alt="ASEC Logo" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="font-display font-black text-2xl md:text-3xl tracking-tight text-[#190B24]">ASEC</span>
              </div>
              <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-sans font-semibold">Engineering & Distribution</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              
              if (item.id === 'solutions') {
                return (
                  <div
                    key={item.id}
                    className="relative py-5 md:py-7 flex items-center h-full"
                    onMouseEnter={() => setHoverCategory(true)}
                    onMouseLeave={() => setHoverCategory(false)}
                  >
                    <button
                      id={`nav-${item.id}`}
                      onClick={() => {
                        setActiveTab('solutions');
                        setSelectedCategory('all');
                      }}
                      className={`text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center space-x-1 pb-1 ${
                        isActive
                          ? 'text-[#190B24] font-extrabold border-b-2 border-[#190B24]'
                          : 'text-slate-600 hover:text-[#190B24]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hoverCategory ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Desktop Dropdown Menu */}
                    {hoverCategory && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-[80%] mt-2 w-80 bg-white border border-slate-200 rounded-md shadow-xl py-2 z-50 animate-fade-in">
                        <button
                          onClick={() => {
                            setActiveTab('solutions');
                            setSelectedCategory('all');
                            setHoverCategory(false);
                          }}
                          className={`w-full text-left px-5 py-2.5 hover:bg-slate-50 transition-colors flex flex-col group border-b border-slate-100 ${
                            activeTab === 'solutions' && selectedCategory === 'all' ? 'bg-slate-50' : ''
                          }`}
                        >
                          <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">Directory</span>
                          <span className={`text-xs font-semibold ${activeTab === 'solutions' && selectedCategory === 'all' ? 'text-blue-900 font-extrabold' : 'text-slate-700'}`}>All Solutions & Products</span>
                        </button>
                        {SOLUTION_CATEGORIES.map((cat) => {
                          const displayTitle = cat.title;
                          const isCatActive = activeTab === 'solutions' && selectedCategory === cat.id;

                          return (
                            <button
                              key={cat.id}
                              onClick={() => {
                                setActiveTab('solutions');
                                setSelectedCategory(cat.id);
                                setHoverCategory(false);
                              }}
                              className={`w-full text-left px-5 py-2.5 hover:bg-slate-50 transition-colors flex flex-col group ${
                                isCatActive ? 'bg-blue-50/50 border-l-2 border-[#190B24] font-bold' : ''
                              }`}
                            >
                              <span className={`text-xs font-semibold ${isCatActive ? 'text-[#190B24] font-extrabold' : 'text-slate-700 group-hover:text-[#190B24]'}`}>
                                {displayTitle}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                  }}
                  className={`py-5 md:py-7 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#190B24] border-b-2 border-[#190B24] font-extrabold'
                      : 'text-slate-600 hover:text-[#190B24]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-[#190B24] hover:bg-slate-105 focus:outline-none"
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
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg" id="mobile-nav">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              
              if (item.id === 'solutions') {
                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => {
                        setMobileSolutionsOpen(!mobileSolutionsOpen);
                      }}
                      className={`flex justify-between items-center w-full text-left px-4 py-3 rounded-md text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-[#190B24]/5 text-[#190B24] font-extrabold border-l-4 border-[#190B24]'
                          : 'text-slate-600 hover:text-[#190B24] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {mobileSolutionsOpen && (
                      <div className="pl-6 pr-4 py-1.5 space-y-1.5 bg-slate-50 border-l-2 border-slate-200 rounded-r-md">
                        <button
                          onClick={() => {
                            setActiveTab('solutions');
                            setSelectedCategory('all');
                            setIsOpen(false);
                          }}
                          className={`block w-full text-left px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                            activeTab === 'solutions' && selectedCategory === 'all'
                              ? 'text-blue-900 bg-blue-50/70 font-extrabold'
                              : 'text-slate-600 hover:text-[#190B24] hover:bg-slate-100'
                          }`}
                        >
                          All Solutions & Products
                        </button>
                        {SOLUTION_CATEGORIES.map((cat) => {
                          const isCatActive = activeTab === 'solutions' && selectedCategory === cat.id;
                          const cleanTitle = cat.title;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => {
                                setActiveTab('solutions');
                                setSelectedCategory(cat.id);
                                setIsOpen(false);
                              }}
                              className={`block w-full text-left px-3 py-2 rounded-md text-xs font-semibold transition-colors ${
                                isCatActive
                                  ? 'text-[#190B24] bg-[#190B24]/5 font-extrabold'
                                  : 'text-slate-600 hover:text-[#190B24] hover:bg-slate-100'
                              }`}
                            >
                              {cleanTitle}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-[#190B24]/5 text-[#190B24] font-extrabold border-l-4 border-[#190B24]'
                      : 'text-slate-600 hover:text-[#190B24] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
