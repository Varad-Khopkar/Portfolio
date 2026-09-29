import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    "Magic Software Enterprises India Pvt. Ltd.": true,
    "adoSolve InfoTech Pvt. Ltd": true,
  });

  const toggleExpand = (company: string) => {
    setExpanded(prev => ({ ...prev, [company]: !prev[company] }));
  };

  return (
    <section id="experience" className="py-20 relative bg-slate-50/50 border-b border-slate-200/80 backdrop-blur-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>OPERATIONAL TIMELINE & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Professional Security Experience
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl font-sans">
            Hands-on exposure across enterprise security operations, endpoint threat management, firewall policy workflows, and vulnerability testing taken strictly from official experience records.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-8 space-y-12 text-left">
          
          {PROFILE_DATA.experience.map((exp) => {
            const isCurrent = exp.period.includes('Present');
            const isCompanyExpanded = expanded[exp.company] ?? true;
            const displayedBullets = isCompanyExpanded ? exp.bullets : exp.bullets.slice(0, 6);

            return (
              <div key={exp.company} className="relative group">
                
                {/* Timeline Node Icon */}
                <div 
                  className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all ${
                    isCurrent 
                      ? 'bg-white border-blue-600 text-blue-600 shadow-sm'
                      : 'bg-white border-slate-400 text-slate-400'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${isCurrent ? 'bg-blue-600' : 'bg-slate-400'}`} />
                </div>

                {/* Experience Card */}
                <div className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 hover:border-blue-300 hover:shadow-md transition-all shadow-sm">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-600 self-start sm:self-auto font-medium">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet points strictly from resume */}
                  <div className="pt-5 space-y-3">
                    {displayedBullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Toggle button if more than 6 bullets */}
                  {exp.bullets.length > 6 && (
                    <div className="pt-3">
                      <button
                        onClick={() => toggleExpand(exp.company)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {isCompanyExpanded ? (
                          <>
                            <span>Show fewer responsibilities</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>Show all {exp.bullets.length} responsibilities</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Technology Badges */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] text-slate-500 uppercase tracking-wide mr-1 font-semibold">
                      Tools & Stack:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
