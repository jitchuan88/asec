import React, { useState } from 'react';
import { SOLUTION_CATEGORIES } from '../data';
import { 
  Lightbulb, ShieldAlert, Zap, Radio, Database, 
  Anchor, CheckCircle2, Award, ClipboardList, Info
} from 'lucide-react';

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState(SOLUTION_CATEGORIES[0].id);

  const activeCategory = SOLUTION_CATEGORIES.find(cat => cat.id === selectedCategory) || SOLUTION_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'marine-lighting':
        return <Lightbulb className="h-4 w-4" />;
      case 'defense-cables':
        return <Database className="h-4 w-4" />;
      case 'mission-power':
        return <Zap className="h-4 w-4" />;
      case 'safety-surveillance':
        return <ShieldAlert className="h-4 w-4" />;
      case 'specialized-electronics':
        return <Radio className="h-4 w-4" />;
      default:
        return <Anchor className="h-4 w-4" />;
    }
  };

  return (
    <div className="animate-fade-in py-16 bg-white min-h-screen text-slate-900" id="solutions-page">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="text-left max-w-3xl space-y-4">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
            Product Portfolio — Elite Alliances
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Solutions & Products
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans mt-2">
            ASEC maintains sole or exclusive Asia/Singapore agency alliances to supply and support mission-critical equipment.
          </p>
        </div>

        {/* Dynamic Interactive Layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Side Tabs / Mobile top buttons */}
          <div className="lg:col-span-4 space-y-4" id="solutions-sidebar">
            <span className="hidden lg:block text-[10px] font-mono font-bold uppercase text-slate-400 tracking-widest pl-1">
              Explore Core Divisions
            </span>
            
            {/* Desktop lateral list or mobile horizontal tap list */}
            <div className="flex flex-row overflow-x-auto lg:overflow-x-visible lg:flex-col gap-2 pb-3 lg:pb-0 scrollbar-none">
              {SOLUTION_CATEGORIES.map((cat) => {
                const isSelected = cat.id === selectedCategory;
                return (
                  <button
                    key={cat.id}
                    id={`btn-solution-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center space-x-3 shrink-0 lg:shrink px-4 py-3 border rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-950 border-slate-950 text-white shadow-xs font-bold'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    <span className={isSelected ? 'text-blue-400' : 'text-slate-400'}>
                      {getCategoryIcon(cat.id)}
                    </span>
                    <span className="truncate max-w-[200px] lg:max-w-none">
                      {cat.title.split(': ')[1] || cat.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Singapore Navy accreditation status card */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-sm space-y-4 hidden lg:block">
              <div className="flex items-center space-x-2 text-blue-900">
                <Award className="h-4 w-4" />
                <span className="font-sans font-extrabold text-[11px] uppercase tracking-wider">Accredited Vendor</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Our operations explicitly support key vessels representing the Singapore Naval fleet, executing custom mechanical configurations and compliance certifications directly onboard.
              </p>
              <div className="text-[9px] text-slate-400 font-mono uppercase font-bold tracking-tighter">
                REG: ASEC INDUSTRIES PTE LTD / ASEC ASIA PTE LTD
              </div>
            </div>
          </div>

          {/* Active Detail Pane */}
          <div className="lg:col-span-8 bg-white border border-slate-200 p-6 sm:p-10 rounded-sm space-y-8" id="solutions-detail-pane">
            
            {/* Category header */}
            <div className="border-b border-slate-200 pb-6 space-y-2">
              <span className="font-mono text-xs text-blue-900 font-bold uppercase tracking-widest">{activeCategory.title.split(': ')[0]}</span>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                {activeCategory.title.split(': ')[1] || activeCategory.title}
              </h2>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            {/* Items inside category */}
            <div className="space-y-10">
              {activeCategory.items.map((item, index) => (
                <div 
                  key={index}
                  className="space-y-5 border-b border-dashed border-slate-200 last:border-0 pb-8 last:pb-0"
                >
                  {/* Item Headline */}
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 flex items-center space-x-2.5">
                      <span className="h-2 w-2 bg-blue-900 rounded-full"></span>
                      <span>{item.name}</span>
                    </h3>
                    
                    {/* Market Position Badge */}
                    {item.marketPosition && (
                      <div className="mt-1.5 inline-flex items-center space-x-1.5 bg-blue-100 text-blue-900 text-[10px] font-sans px-2.5 py-0.5 rounded-sm font-bold uppercase tracking-wider">
                        <Award className="h-3.5 w-3.5" />
                        <span>{item.marketPosition}</span>
                      </div>
                    )}
                  </div>

                  {/* General Description */}
                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  )}

                  {/* Specific Key Technologies if any */}
                  {item.technology && (
                    <div className="bg-slate-50 rounded-sm p-4 border border-slate-200 space-y-2">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Engineered Technology</h4>
                      <p className="text-xs text-slate-800 leading-relaxed font-sans">{item.technology}</p>
                    </div>
                  )}

                  {/* Key Products List */}
                  {item.keyProducts && item.keyProducts.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Key Systems Supplied</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {item.keyProducts.map((prod, pIdx) => (
                          <div key={pIdx} className="bg-slate-50 p-3 rounded-sm border border-slate-200 flex items-start space-x-2 text-xs text-slate-700">
                            <span className="text-blue-900 shrink-0 select-none">✓</span>
                            <span>{prod}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features List */}
                  {item.keyFeatures && item.keyFeatures.length > 0 && (
                    <div className="space-y-2.5">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Strategic Range & Key Highlights</h4>
                      <ul className="space-y-2">
                        {item.keyFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-3 text-xs text-slate-600 leading-relaxed font-sans">
                            <span className="text-blue-900 mt-1 shrink-0">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Applications */}
                  {item.keyApplications && item.keyApplications.length > 0 && (
                    <div className="space-y-1.5">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Applications</h4>
                      <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-sm border border-slate-200 font-sans">
                        {item.keyApplications.join(', ')}
                      </p>
                    </div>
                  )}

                  {/* General Characteristics for Cables */}
                  {item.keyCharacteristics && item.keyCharacteristics.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Technical Characteristics</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.keyCharacteristics.map((char, cIdx) => (
                          <span key={cIdx} className="bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[9px] px-2.5 py-1 rounded-sm uppercase tracking-wide font-bold">
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Transformer capabilities */}
                  {item.capabilities && item.capabilities.length > 0 && (
                    <div className="p-4 bg-slate-950 text-white rounded-sm space-y-2 border border-slate-800">
                      <h4 className="font-mono text-[9px] text-blue-400 tracking-wider uppercase font-bold">Winding & Safety Transformer Capabilities</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.capabilities[0]}</p>
                    </div>
                  )}

                  {/* Project Footprint, tracking */}
                  {item.projectFootprint && item.projectFootprint.length > 0 && (
                    <div className="bg-blue-100 border border-blue-200 rounded-sm p-4 space-y-2">
                      <div className="flex items-center space-x-2 text-blue-900 font-mono text-[9px] font-bold uppercase tracking-wider">
                        <ClipboardList className="h-4 w-4 shrink-0" />
                        <span>Active Singapore Navy Footprint</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.projectFootprint.map((ship, sIdx) => (
                          <span key={sIdx} className="bg-white border border-blue-200 text-blue-900 font-mono text-[9px] font-bold px-2.5 py-1 rounded-sm">
                            {ship}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Active Deployment lists for power and electronic modules */}
                  {item.activeDeployment && item.activeDeployment.length > 0 && (
                    <div className="bg-blue-105 border border-blue-250 rounded-sm p-4 space-y-2">
                      <div className="flex items-center space-x-2 text-blue-900 font-mono text-[9px] font-bold tracking-wider">
                        <Anchor className="h-4 w-4 shrink-0" />
                        <span className="uppercase">Active Deployment Duty Onboard</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.activeDeployment.map((vessel, vIdx) => (
                          <span key={vIdx} className="bg-white border border-blue-200 text-blue-900 font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase">
                            {vessel}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project track record if mentioned */}
                  {item.trackRecord && (
                    <div className="flex items-start space-x-2 bg-slate-50 p-3.5 rounded-sm border border-slate-200 text-xs text-slate-700 font-sans">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold block font-mono text-[9px] uppercase text-slate-400 tracking-wider">Track Record Achievements</strong>
                        <span>{item.trackRecord}</span>
                      </div>
                    </div>
                  )}

                  {/* Bosch Video early warning warning note */}
                  {item.name.includes("Surveillance") && (
                    <div className="flex items-start space-x-2 p-3 bg-amber-50 rounded-sm border border-amber-200 text-amber-900 text-[10px] font-sans font-light">
                      <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-700" />
                      <span>
                        <strong>Note:</strong> Video analytics software acts as an automated early-warning tracking asset in control rooms (not a replacement for the primary Fire Detection System).
                      </span>
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
