import React from 'react';
import { GraduationCap, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-white/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Education
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl font-sans">
            Academic credentials and formal computer science engineering background with specialization in cybersecurity.
          </p>
        </div>

        {/* Education Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {PROFILE_DATA.education.map((edu, idx) => (
            <div
              key={edu.institution}
              className={`rounded-2xl border p-6 sm:p-7 shadow-xs flex flex-col justify-between transition-all ${
                idx === 0 
                  ? 'bg-white border-blue-200 hover:border-blue-400 hover:shadow-md ring-1 ring-blue-100'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-slate-600 font-medium text-xs">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] text-slate-600 font-medium">
                    <Calendar className="w-3 h-3 text-blue-600" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100 font-sans">
                    {edu.description}
                  </p>
                )}
              </div>

              {idx === 0 && (
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Specialization: Cyber Security</span>
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 border border-blue-200 font-semibold">
                    CURRENT DEGREE
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
