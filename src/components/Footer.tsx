import React from 'react';
import { ActiveTab } from '../types';
import { Mail, Phone, Clock, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 font-sans" id="site-footer">
      
      {/* Decorative Ribbon Header */}
      <div className="bg-slate-100 py-6 border-b border-slate-200 text-center px-4">
        <h3 className="font-display text-xs tracking-widest text-slate-800 uppercase font-extrabold">
          Partnering for the Future of Engineering                 
        </h3>
        <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase tracking-wider font-bold">ASEC ASIA PTE LTD — ESTD 1981</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: About ASEC */}
          <div className="space-y-4">
            <h4 className="font-display text-xs tracking-widest text-blue-900 uppercase font-extrabold border-b border-slate-200 pb-2">
              ABOUT ASEC
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              ASEC is a single-source provider of critical engineering and distribution solutions established in 1981. We bridge world-class defense-grade manufacturers with local regional operational readiness.
            </p>
            <button
              onClick={() => setActiveTab('about')}
              className="text-xs text-blue-900 hover:text-blue-800 font-bold font-mono mt-1 inline-flex items-center space-x-1 cursor-pointer uppercase tracking-wider"
            >
              <span>Learn our heritage</span>
              <span className="text-[10px]">→</span>
            </button>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className="font-display text-xs tracking-widest text-blue-900 uppercase font-extrabold border-b border-slate-200 pb-2">
              SOLUTIONS
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 font-sans">
              <li className="flex items-center space-x-2">
                <span className="text-blue-900">•</span>
                <button onClick={() => setActiveTab('solutions')} className="hover:text-blue-900 cursor-pointer text-left font-sans">Naval Lighting Systems</button>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-900">•</span>
                <button onClick={() => setActiveTab('solutions')} className="hover:text-blue-900 cursor-pointer text-left font-sans">Defense Standard Cables</button>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-900">•</span>
                <button onClick={() => setActiveTab('solutions')} className="hover:text-blue-900 cursor-pointer text-left font-sans">Mission-Critical Power</button>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-950">•</span>
                <button onClick={() => setActiveTab('solutions')} className="hover:text-blue-900 cursor-pointer text-left text-xs text-slate-400 uppercase font-bold tracking-wider">View Product Portfolio</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Support */}
          <div className="space-y-4">
            <h4 className="font-display text-xs tracking-widest text-blue-900 uppercase font-extrabold border-b border-slate-200 pb-2">
              CONTACT SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 font-sans">
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-blue-900 shrink-0" />
                <span className="font-mono">Tel: (65) 6383 4368</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-blue-900 shrink-0" />
                <span className="break-all font-mono">customerservice@asec.com.sg</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="h-4 w-4 text-blue-900 shrink-0" />
                <span className="font-sans">Hours: Mon-Fri | 9am-6pm</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Metadata Banner */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            <div className="text-[10px] text-slate-400 font-mono space-y-1">
              <div>
                © ASEC Industries Pte Ltd / ASEC Asia Pte Ltd. All Rights Reserved. | <a href="https://www.asec.com.sg" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">www.asec.com.sg</a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-1 mt-1">
                <MapPin className="h-3 w-3 text-slate-400 shrink-0" />
                <span>HQ: 35 Tannery Road #09-06, Ruby Industrial Complex, Singapore 347740</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">
              <ShieldCheck className="h-4 w-4 text-blue-900" />
              <span>Singapore Navy Integrated Vendor</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
