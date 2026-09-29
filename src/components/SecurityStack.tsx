import React from 'react';
import { 
  Shield, 
  Laptop, 
  Network, 
  Mail, 
  Cloud, 
  Bug, 
  Radio, 
  Code2
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const SecurityStack: React.FC = () => {
  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'Endpoint Security':
        return Laptop;
      case 'Network Security':
        return Network;
      case 'Email Security':
        return Mail;
      case 'Cloud & Data Security':
        return Cloud;
      case 'Vulnerability & Patch Management':
        return Bug;
      case 'SIEM & Detection':
        return Radio;
      case 'Security Testing':
        return Code2;
      default:
        return Shield;
    }
  };

  return (
    <section id="security-stack" className="py-20 relative bg-white/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>TECHNOLOGY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Security Stack & Toolchains
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            Structured defensive ecosystem organized across core enterprise security domains, management consoles, and engineering frameworks.
          </p>
        </div>

        {/* Security Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {PROFILE_DATA.securityStack.map((domainItem) => {
            const Icon = getDomainIcon(domainItem.domain);
            return (
              <div
                key={domainItem.domain}
                className="group rounded-xl bg-white border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Domain Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 font-sans">
                        {domainItem.domain}
                      </h3>
                    </div>
                  </div>

                  {/* Domain Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {domainItem.description}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 uppercase tracking-wide mb-2 font-semibold">
                    Technologies & Protocols
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domainItem.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors ${
                          tech.highlight
                            ? 'bg-blue-50 text-blue-800 border border-blue-200 font-semibold'
                            : tech.type === 'enterprise'
                            ? 'bg-slate-100 text-slate-800 border border-slate-200 font-medium'
                            : 'bg-slate-50 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {tech.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        )}
                        <span>{tech.name}</span>
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
