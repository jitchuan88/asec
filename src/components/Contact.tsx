import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send, HelpCircle, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'turnkey-engineering',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: 'turnkey-engineering',
      message: ''
    });
  };

  return (
    <div className="animate-fade-in py-16 bg-white min-h-screen text-slate-900" id="contact-page">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="text-left max-w-3xl space-y-4">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
            Inquiry Gateway — Secure Route
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Connect With Our Technical Team
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Discuss military material procurement, sole agent distribution agreements, custom winding/transformers, or complex naval integration projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Contact Coordinates block */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Local Card */}
            <div className="bg-slate-950 text-white p-8 border border-slate-800 rounded-sm space-y-6 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 opacity-5 font-display text-[120px] font-bold font-mono">
                SG
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[9px] text-blue-400 font-bold uppercase tracking-widest">Headquarters Location</span>
                <h3 className="font-display text-xl font-bold text-white">ASEC ASIA PTE LTD</h3>
                <p className="font-mono text-[9px] text-slate-400 uppercase font-semibold">ASEC INDUSTRIES PTE LTD</p>
              </div>

              <div className="flex items-start space-x-3.5 text-sm text-slate-300">
                <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-1 leading-relaxed font-sans text-xs">
                  <p>35 Tannery Road #09-06</p>
                  <p>Ruby Industrial Complex</p>
                  <p className="font-mono text-white font-bold">Singapore 347740</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex justify-between items-center text-[9px] text-slate-400 font-mono uppercase tracking-wider font-bold">
                <span>Republic of Singapore</span>
                <span className="text-blue-400">Singapore HQ Desk</span>
              </div>
            </div>

            {/* Contacts & Email Coordinates Card */}
            <div className="bg-slate-50 p-8 border border-slate-200 rounded-sm space-y-6">
              <h3 className="font-display text-base font-bold text-slate-900 border-b border-slate-200 pb-2 uppercase tracking-wide">
                Direct Corporate Intakes
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="bg-blue-100 text-blue-900 p-2.5 rounded-sm border border-blue-200 shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase text-slate-400 font-bold tracking-wider">Dedicated Response Team</h4>
                    <p className="text-sm font-semibold text-slate-900 font-mono">customerservice@asec.com.sg</p>
                  </div>
                </div>

                {/* Direct Lines */}
                <div className="flex items-start space-x-3.5">
                  <div className="bg-blue-100 text-blue-900 p-2.5 rounded-sm border border-blue-200 shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase text-slate-400 font-bold tracking-wider">Direct Phone Lines</h4>
                    <p className="text-sm font-semibold font-mono text-slate-900 mt-0.5">(65) 6383 4368</p>
                    <p className="text-xs font-mono text-slate-500">(65) 8133 4320</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="bg-blue-100 text-blue-900 p-2.5 rounded-sm border border-blue-200 shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] uppercase text-slate-400 font-bold tracking-wider">Operational Availability</h4>
                    <p className="text-xs text-slate-700 font-semibold mt-1 font-sans">Monday through Friday: 9:00 AM – 6:00 PM</p>
                    <p className="text-[10px] text-red-500 font-bold font-mono uppercase mt-0.5">Saturdays, Sundays, & Holidays: Closed</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right panel: Inquiry Gateway form */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-slate-50 p-6 sm:p-10 border border-slate-200 rounded-sm">
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">
                      Submit Technical Inquiry
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      Fill out our secure router form. Our response team aims to address your request within 24 operational hours.
                    </p>
                  </div>

                  {/* Dual columns Name/Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono uppercase text-slate-400 font-bold tracking-wider block">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-900 font-sans"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono uppercase text-slate-400 font-bold tracking-wider block">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Defense Systems Ltd"
                        className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-900 font-sans"
                      />
                    </div>
                  </div>

                  {/* Dual columns Email/Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono uppercase text-slate-400 font-bold tracking-wider block">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@domain.com"
                        className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-900 font-sans"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono uppercase text-slate-400 font-bold tracking-wider block">Contact Phone Number</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(65) XXXX XXXX"
                        className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-900 font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono uppercase text-slate-400 font-bold tracking-wider block">Subject Category</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-900 font-sans"
                    >
                      <option value="turnkey-engineering">Turnkey Engineering Support</option>
                      <option value="obsolescence">Obsolescence Retrofitting & Spares</option>
                      <option value="marine-lighting">Naval/Aerospace lighting (Oxley)</option>
                      <option value="defense-cables">Defense Cabling & Enamel Copper</option>
                      <option value="critical-power">Naval Uninterruptible Power (Eaton / Custom Transformers)</option>
                      <option value="safety-surveillance">Fire/Surveillance (DEF / Bosch / Marinelec)</option>
                      <option value="other-logistics">Specialized Electronics / WaterBladder Systems</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono uppercase text-slate-400 font-bold tracking-wider block">Message / Requirements Detail *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the mechanical/electrical specifications, required parts, or program timeline..."
                      className="w-full bg-white border border-slate-200 rounded-sm px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-900 font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs tracking-wider uppercase py-3.5 px-4 rounded-sm flex items-center justify-center space-x-2 transition-all cursor-pointer"
                    id="submit-inquiry-btn"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Gateway Inquiry</span>
                  </button>

                </form>
              ) : (
                <div className="space-y-6 text-center py-10 animate-fade-in" id="contact-success-state">
                  <div className="mx-auto h-16 w-16 bg-blue-105 text-blue-900 rounded-full flex items-center justify-center shadow-inner">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-slate-900">Inquiry Securely Transmitted</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                      Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{formData.company || 'your organization'}</strong> has been routed to our Singapore defense customer service gateway.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 p-5 rounded-sm max-w-sm mx-auto text-left space-y-1.5 shadow-xs font-mono text-[11px] text-slate-700">
                    <p><strong>Route Code:</strong> ASEC-SG-INQ-{Math.floor(1000 + Math.random() * 9000)}</p>
                    <p><strong>Intake Mailbox:</strong> customerservice@asec.com.sg</p>
                    <p><strong>Status:</strong> READY FOR DISPATCH</p>
                  </div>

                  <div>
                    <button
                      onClick={resetForm}
                      className="text-xs text-blue-900 hover:text-blue-800 font-mono underline font-bold uppercase tracking-wider"
                    >
                      Submit another technical request
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
