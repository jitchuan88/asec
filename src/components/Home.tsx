import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, CAPABILITIES, WHY_CHOOSE_ITEMS, BRAND_PARTNERS } from '../data';
import { ActiveTab } from '../types';
import { Shield, ChevronRight, ChevronLeft, ArrowRight, Award } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="animate-fade-in text-slate-950" id="home-page">
      
      {/* 1. HIGH-IMPACT ROTATING BANNER HERO SECTION */}
      <section className="relative h-[560px] md:h-[620px] bg-slate-950 overflow-hidden border-b border-slate-200" id="hero-carousel">
        
        {/* Carousel slides */}
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              {/* Background gradient layout */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
              <img
                src={slide.bgImage}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
              />

              {/* Slide Content */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col md:flex-row md:items-center">
                  
                  {/* Left Column content */}
                  <div className="w-full md:w-3/5 text-left space-y-6">
                    
                    {/* Visual marker label */}
                    <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-900 border border-blue-200 px-3 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-widest">
                      <span className="h-2 w-2 rounded-full bg-blue-900 animate-pulse"></span>
                      <span>{slide.topic} — Est. 1981</span>
                    </div>

                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                      Engineering <span className="text-blue-400">Excellence.</span><br />
                      Trusted Distribution.
                    </h1>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-sans">
                      A single-source provider of critical engineering solutions, delivering complete lifecycle support and premium material integration for defense and commercial sectors.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        onClick={() => setActiveTab('solutions')}
                        className="px-8 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-sm shadow-lg shadow-blue-900/20 transition-all group cursor-pointer"
                        id="hero-cta-solutions"
                      >
                        <span className="flex items-center gap-2">
                          Explore Our Solutions
                          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform animate-pulse" />
                        </span>
                      </button>

                      <button
                        onClick={() => setActiveTab('contact')}
                        className="px-8 py-3.5 border-2 border-slate-300 text-white hover:text-blue-400 hover:border-blue-400 font-bold text-sm rounded-sm transition-all bg-transparent cursor-pointer"
                        id="hero-cta-contact"
                      >
                        Contact an Expert
                      </button>
                    </div>

                  </div>

                  {/* Right Column Abstract Graphic Element */}
                  <div className="hidden md:block w-2/5 pl-12">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 text-white space-y-3 shadow-2xl">
                      <div className="text-xs font-bold tracking-widest text-blue-400 uppercase">Defense & Maritime Sector</div>
                      <p className="text-sm font-semibold italic text-slate-100">"Trusted by the Singapore Navy"</p>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">Executing turnkey implementations for elite defense organizations for over 40 years with absolute precision.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

        {/* Playback Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/20 hover:bg-white/30 text-white border border-white/10 transition-all cursor-pointer rounded-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <div className="flex items-center space-x-2">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-blue-400' : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 bg-white/20 hover:bg-white/30 text-white border border-white/10 transition-all cursor-pointer rounded-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

      </section>


      {/* 2. CORE CAPABILITIES PILLARS */}
      <section className="py-16 bg-white border-y border-slate-200" id="capabilities-overview">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-bold text-blue-900 uppercase tracking-widest">Our Capabilities</h2>
            <p className="font-display text-4xl font-extrabold text-slate-900 leading-tight">Five Primary Engineering Pillars</p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.id}
                id={`capability-card-${cap.id}`}
                className="group cursor-default border border-slate-100 p-6 bg-slate-50/50 hover:bg-white hover:border-slate-300 rounded-sm hover:shadow-xs transition-all duration-200"
              >
                <h3 className="text-xs font-bold text-blue-900 uppercase tracking-tighter mb-2">
                  {cap.title.split(' & ').join(' & \n')}
                </h3>
                <p className="text-xs text-slate-500 leading-snug group-hover:text-slate-900">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setActiveTab('services')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-widest text-blue-900 hover:text-blue-800 transition-colors uppercase cursor-pointer"
            >
              <span>Explore Detailed Engineering Services</span>
              <span>→</span>
            </button>
          </div>

        </div>
      </section>


      {/* 3. WHY CHOOSE ASEC? */}
      <section className="py-20 bg-slate-50" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left intro text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Heritage of Quality
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Elite Defense & Maritime Organizations Choose ASEC
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                As an accredited and strategic partner, we operate under meticulous compliance standards to secure maritime hardware readiness. Our deep alliances with key original equipment manufacturers ensure authentic technical execution.
              </p>
              
              <div className="p-4 bg-white rounded-sm border border-slate-200 border-l-4 border-l-blue-900">
                <p className="text-xs text-slate-700 italic">
                  "Decades of experience executing turnkey implementations for elite defense organizations including the Singapore Navy."
                </p>
              </div>
            </div>

            {/* Right pillars list */}
            <div className="lg:col-span-7 space-y-4">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  id={`why-choose-item-${item.id}`}
                  className="bg-white border border-slate-200 rounded-sm p-6 hover:border-blue-900 transition-all duration-200 flex items-start space-x-4"
                >
                  <div className="bg-blue-100 text-blue-900 font-bold text-xs px-3 py-1 rounded-sm uppercase tracking-wider shrink-0 font-sans">
                    {item.badge}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* 4. STRATEGIC BRAND PARTNERS (LOGO RIBBON) */}
      <section className="bg-slate-100 flex flex-col items-center overflow-hidden border-b border-slate-200 py-6" id="brand-ticker-section">
        <p className="text-center text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4 font-sans">
          Strategic Agency & Manufacturer Alliances (Gray Ribbon)
        </p>

        {/* Scrolling tape container loop */}
        <div className="relative w-full overflow-hidden bg-white/20 py-3 border-y border-slate-200/50">
          <div className="logo-ribbon-track">
            {/* Duplicating array 3 times to make seamless looping space */}
            {[...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-[250px] px-6 text-center select-none shrink-0"
              >
                <div className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-opacity font-bold text-[11px] tracking-widest text-slate-600 uppercase font-sans">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
