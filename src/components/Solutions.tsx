import React from 'react';
import { SOLUTION_CATEGORIES } from '../data';
import { 
  Lightbulb, ShieldAlert, Zap, Radio, Database, 
  Anchor, CheckCircle2, Award, ClipboardList, Info
} from 'lucide-react';

export default function Solutions() {
  const getIcon = (itemName: string) => {
    const name = itemName.toLowerCase();
    if (name.includes('lighting')) return <Lightbulb className="h-6 w-6 text-blue-900" />;
    if (name.includes('cable') || name.includes('cabling') || name.includes('materials')) return <Database className="h-6 w-6 text-blue-900" />;
    if (name.includes('power') || name.includes('transformer') || name.includes('charger') || name.includes('ups')) return <Zap className="h-6 w-6 text-blue-900" />;
    if (name.includes('surveillance') || name.includes('fire') || name.includes('detection') || name.includes('escape') || name.includes('suppression')) return <ShieldAlert className="h-6 w-6 text-blue-900" />;
    return <Anchor className="h-6 w-6 text-blue-900" />;
  };

  // Flatten all items for a unified display, keeping track of their parent category name for logical context
  const allProducts = SOLUTION_CATEGORIES.flatMap(category => 
    category.items.map(item => ({
      ...item,
      categoryName: category.title.split(': ')[1] || category.title,
      categoryCode: category.title.split(': ')[0]
    }))
  );

  return (
    <div className="animate-fade-in py-16 md:py-24 bg-slate-50 min-h-screen text-slate-900 animate-fade-in" id="solutions-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-left max-w-3xl space-y-4">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100/80 px-3.5 py-1.5 rounded-full">
            Product Portfolio — Elite Alliances
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Solutions & Products
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans mt-2">
            ASEC maintains sole or exclusive Asia/Singapore agency alliances to supply and support mission-critical equipment. All systems are fully certified for defense, marine, and aviation operations.
          </p>
        </div>

        {/* Singapore Navy accreditation status banner */}
        <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-sm shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center space-x-2 text-blue-905">
              <Award className="h-5 w-5 text-blue-900" />
              <span className="font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider text-blue-900">Accredited Navy & Defense Vendor</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Our operations explicitly support key vessels representing the Singapore Naval fleet. We execute custom mechanical configurations, localized technical adaptation, and compliance certifications directly onboard active military vessels.
            </p>
            <div className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider">
              REG: ASEC INDUSTRIES PTE LTD / ASEC ASIA PTE LTD
            </div>
          </div>
          <div className="shrink-0 flex flex-wrap gap-2 md:flex-col lg:flex-row items-start md:items-end lg:items-center">
            <div className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] font-mono px-3 py-1.5 rounded-sm font-bold uppercase transition-colors">
              Formidable-class FFS
            </div>
            <div className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] font-mono px-3 py-1.5 rounded-sm font-bold uppercase transition-colors">
              Endurance-Class LST
            </div>
          </div>
        </div>

        {/* Unified Cards Matrix */}
        <div className="space-y-8" id="solutions-list">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900">
              Technical Supply Systems & Exclusive Agencies
            </h2>
            <span className="font-mono text-xs text-slate-500 bg-slate-200/60 px-2.5 py-1 rounded-xs">
              {allProducts.length} Systems Listed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProducts.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-sm p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group hover:border-slate-300"
              >
                <div className="space-y-5">
                  {/* Card Category Tag and Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-900 font-bold uppercase tracking-widest bg-blue-50/70 px-2.5 py-1 rounded-xs">
                      {item.categoryName || "MARINE SYSTEM"}
                    </span>
                    <div className="p-2.5 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors">
                      {getIcon(item.name)}
                    </div>
                  </div>

                  {/* Main Title & Market Position */}
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-950 transition-colors">
                      {item.name}
                    </h3>
                    
                    {item.marketPosition && (
                      <div className="inline-flex items-center space-x-1.5 bg-sky-50 text-blue-900 text-[10px] font-sans px-2.5 py-0.5 rounded-sm font-bold uppercase tracking-wider">
                        <Award className="h-3.5 w-3.5 text-blue-800" />
                        <span>{item.marketPosition}</span>
                      </div>
                    )}
                  </div>

                  {/* Detailed descriptions */}
                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  )}

                  {/* Specific Key Technologies if any */}
                  {item.technology && (
                    <div className="bg-slate-50 rounded-sm p-4 border border-slate-200 space-y-2 group-hover:bg-blue-50/20 transition-colors">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Engineered Technology</h4>
                      <p className="text-xs text-slate-800 leading-relaxed font-sans">{item.technology}</p>
                    </div>
                  )}

                  {/* Key Products List */}
                  {item.keyProducts && item.keyProducts.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">Key Systems Supplied</h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {item.keyProducts.map((prod, pIdx) => (
                          <div key={pIdx} className="bg-slate-50 p-3 rounded-sm border border-slate-200/80 flex items-start space-x-2 text-xs text-slate-705 group-hover:bg-white transition-colors">
                            <span className="text-blue-900 shrink-0 font-bold select-none">✓</span>
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
                            <span className="text-blue-900 mt-1 shrink-0 font-bold">•</span>
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
                      <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-sm border border-slate-200 font-sans group-hover:bg-white transition-colors">
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
                    <div className="p-4 bg-slate-905 text-white bg-slate-950 rounded-sm space-y-2 border border-slate-800">
                      <h4 className="font-mono text-[9px] text-blue-400 tracking-wider uppercase font-bold">Winding & Safety Transformer Capabilities</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.capabilities[0]}</p>
                    </div>
                  )}
                </div>

                {/* Footer specs / Active Deployment of the product */}
                <div className="pt-6 border-t border-slate-100 space-y-3 mt-auto">
                  {/* Project Footprint, tracking */}
                  {item.projectFootprint && item.projectFootprint.length > 0 && (
                    <div className="bg-blue-50 border border-blue-100 rounded-sm p-3.5 space-y-2">
                      <div className="flex items-center space-x-2 text-blue-900 font-mono text-[9px] font-bold uppercase tracking-wider">
                        <ClipboardList className="h-4 w-4 shrink-0 text-blue-800" />
                        <span>Active Singapore Navy Footprint</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.projectFootprint.map((ship, sIdx) => (
                          <span key={sIdx} className="bg-white border border-blue-100 text-blue-900 font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm">
                            {ship}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Active Deployment lists for power and electronic modules */}
                  {item.activeDeployment && item.activeDeployment.length > 0 && (
                    <div className="bg-blue-50 border border-blue-100 rounded-sm p-3.5 space-y-2">
                      <div className="flex items-center space-x-2 text-blue-900 font-mono text-[9px] font-bold tracking-wider">
                        <Anchor className="h-4 w-4 shrink-0 text-blue-800" />
                        <span className="uppercase">Active Deployment Duty Onboard</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.activeDeployment.map((vessel, vIdx) => (
                          <span key={vIdx} className="bg-white border border-blue-105 text-blue-900 font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase">
                            {vessel}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project track record if mentioned */}
                  {item.trackRecord && (
                    <div className="flex items-start space-x-2 bg-slate-50 p-3 rounded-sm border border-slate-200/80 text-xs text-slate-700 font-sans">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold block font-mono text-[9px] uppercase text-slate-400 tracking-wider">Track Record Achievements</strong>
                        <span className="text-slate-600 font-sans text-xs">{item.trackRecord}</span>
                      </div>
                    </div>
                  )}

                  {/* Warning early warning note */}
                  {item.name.includes("Surveillance") && (
                    <div className="flex items-start space-x-2 p-3 bg-amber-50 rounded-sm border border-amber-200 text-amber-900 text-[10px] font-sans font-medium">
                      <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-700" />
                      <span>
                        <strong>Note:</strong> Video analytics software acts as an automated early-warning tracking asset in control rooms (not a replacement for the primary Fire Detection System).
                      </span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
