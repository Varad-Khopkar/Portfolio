import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Certifications: React.FC = () => {
  const certifiedItems = PROFILE_DATA.certifications.filter(c => c.status === 'CERTIFIED');

  return (
    <section id="certifications" className="py-20 relative bg-slate-50/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Certifications
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            Formal vendor credentials validating foundational cybersecurity concepts, enterprise defense architecture, and ethical hacking methodologies.
          </p>
        </div>

        {/* 3-Column Grid for Certified Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {certifiedItems.map((cert) => (
            <div
              key={cert.name}
              className="rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all p-6 sm:p-7 shadow-xs flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{cert.status}</span>
                  </span>

                  {cert.badgeCode && (
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-xs">
                      {cert.badgeCode}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {cert.name}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1.5 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Issuer: {cert.issuer}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100 font-sans">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

