import React from 'react';
import { Users, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Leadership: React.FC = () => {
  const cyberAlchemists = PROFILE_DATA.leadership.find(l => l.organization.includes('Cyber Alchemists')) || PROFILE_DATA.leadership[1];
  const placementHead = PROFILE_DATA.leadership.find(l => l.role.includes('Placement Head')) || PROFILE_DATA.leadership[0];
  const rotaract = PROFILE_DATA.leadership.find(l => l.organization.includes('Rotaract')) || PROFILE_DATA.leadership[2];
  const hashTech = PROFILE_DATA.leadership.find(l => l.organization.includes('HashTech')) || PROFILE_DATA.leadership[3];

  return (
    <section id="leadership" className="py-20 relative bg-white/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>ORGANIZATIONAL & TEAM LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Leadership Beyond the SOC
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl font-sans">
            Demonstrated ownership, high-stakes stakeholder coordination, technical community building, and operational accountability.
          </p>
        </div>

        {/* Bento Grid Layout matching requested UI outline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch text-left">
          
          {/* LEFT SIDE: Cyber Alchemists Club (Tall Full-Height Card) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                
                {/* Header & Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                    {cyberAlchemists.role}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3 text-indigo-600" />
                    <span>Flagship Community</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {cyberAlchemists.organization}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-sans">
                    {cyberAlchemists.description}
                  </p>
                </div>

                {/* Highlights List - Exact from LinkedIn */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-xs font-semibold text-slate-800 tracking-wide block">
                    During my term, I focused on:
                  </span>
                  <div className="space-y-2">
                    {cyberAlchemists.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Authentic Reflection from LinkedIn Profile */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 italic font-sans leading-relaxed">
                  “None of this was a solo effort—the club grew because people believed in the idea and worked hard to make it real. I’m grateful I got to guide Cyber Alchemists in its early stage and help shape a culture that the next leaders can continue to build on.”
                </div>

              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-500">FOUNDING PRESIDENT</span>
                <span className="text-slate-400 font-medium">CYBER COMMUNITY</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Top (Student Placement Head) + Bottom Row (Rotaract & HashTech) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* TOP: Student Placement Head (Wide Horizontal Card) */}
            <div className="rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all p-6 sm:p-7 shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Placement Head Content */}
                <div className="md:col-span-8 space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 inline-block mb-2">
                      {placementHead.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {placementHead.organization}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {placementHead.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {placementHead.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placement Metric Box */}
                {placementHead.metric && (
                  <div className="md:col-span-4 flex flex-col justify-center">
                    <div className="p-4 sm:p-5 rounded-xl bg-blue-50/70 border border-blue-200 text-center space-y-1">
                      <div className="text-3xl font-extrabold text-blue-700 font-sans">
                        {placementHead.metric.value}
                      </div>
                      <div className="text-xs text-slate-600 font-medium leading-snug">
                        {placementHead.metric.label}
                      </div>
                      <div className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full bg-blue-100/70 text-blue-800 text-[11px] font-semibold">
                        <Award className="w-3.5 h-3.5 text-blue-600" />
                        <span>Leadership Metric</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-500">EXECUTIVE PLACEMENT LEAD</span>
                <span className="text-slate-400 font-medium">CORPORATE RECRUITMENT</span>
              </div>
            </div>

            {/* BOTTOM ROW: Rotaract Chartering Secretary & HashTech side-by-side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              
              {/* Rotaract Chartering Secretary (Co-Founder) */}
              <div className="rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all p-6 flex flex-col justify-between shadow-xs">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 inline-block mb-1.5">
                      Chartering Secretary (Co-Founder)
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {rotaract.organization}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {rotaract.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {rotaract.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-500">CO-FOUNDER</span>
                  <span className="text-slate-400 font-medium">COMMUNITY SERVICE</span>
                </div>
              </div>

              {/* HashTech General Secretary */}
              <div className="rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all p-6 flex flex-col justify-between shadow-xs">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 inline-block mb-1.5">
                      {hashTech.role}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {hashTech.organization}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {hashTech.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {hashTech.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-500">OPERATIONS LEAD</span>
                  <span className="text-slate-400 font-medium">TECHNICAL FESTIVAL</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

