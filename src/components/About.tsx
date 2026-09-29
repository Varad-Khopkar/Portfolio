import React from 'react';
import { 
  Binary, 
  Target, 
  ShieldCheck, 
  Languages, 
  Award,
  ArrowUpRight
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-white/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Binary className="w-3.5 h-3.5" />
            <span>EXECUTIVE PROFILE & SUMMARY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            About Varad
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl font-sans">
            Cybersecurity engineer profile and verified professional background taken directly from official records.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Column: Official Summary Paragraphs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base shadow-sm">
              {PROFILE_DATA.about.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "text-slate-900 font-medium" : "text-slate-600 font-sans"}>
                  {p}
                </p>
              ))}

              <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200 font-medium">
                  Domain: Enterprise Security Engineering
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                  Location: Pune, Maharashtra, India
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                  B.Tech CSE (Cyber Security)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Areas of Interest & Verified Core Focus */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Areas of Interest Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans">
                    Areas of Interest
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400">CORE DOMAINS</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {PROFILE_DATA.about.areasOfInterest.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-xs text-slate-800 font-medium transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Top Skills Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans">
                    Specializations & Competencies
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400">PROFILE FOCUS</span>
              </div>
              <div className="space-y-2 pt-1">
                {PROFILE_DATA.about.topSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium"
                  >
                    <span>{skill}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Honors Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4">
              {/* Languages */}
              <div>
                <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-100 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <Languages className="w-4 h-4 text-indigo-600" />
                  <span>Languages</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {PROFILE_DATA.about.languages.map((lang) => (
                    <div key={lang.name} className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-center">
                      <div className="text-xs font-bold text-slate-900">{lang.name}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5 truncate">{lang.proficiency}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Honors */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Honors & Awards</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                  <span className="font-semibold">{PROFILE_DATA.about.honors[0]}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-amber-800 border border-amber-200 font-bold">
                    AWARDED
                  </span>
                </div>
              </div>

              {/* Credly badge link */}
              <div className="pt-1 flex items-center justify-between text-xs text-slate-500">
                <span>Verified Badges & Transcript</span>
                <a
                  href={PROFILE_DATA.socials.credly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <span>Credly Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
