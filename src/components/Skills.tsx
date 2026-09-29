import React from 'react';
import { Terminal, Shield, Wrench, Code2, Network } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity Domains':
        return Shield;
      case 'Security Technologies & Tools':
        return Wrench;
      case 'Development & Scripting':
        return Code2;
      case 'Core Security Concepts':
        return Network;
      default:
        return Terminal;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-50/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Categorized Technical Skills
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            A concrete mapping of defensive competencies, security tools, engineering languages, and operational frameworks.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {PROFILE_DATA.skills.map((skillGroup) => {
            const Icon = getCategoryIcon(skillGroup.category);
            return (
              <div
                key={skillGroup.category}
                className="rounded-xl bg-white border border-slate-200 p-6 sm:p-7 hover:border-blue-300 hover:shadow-md transition-all shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:border-slate-300 hover:bg-slate-200/60 text-xs text-slate-800 font-medium transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
