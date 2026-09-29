import React from 'react';
import { FileDown, FileText } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { LinkedinIcon } from './Icons';

export const ResumeCTA: React.FC = () => {
  return (
    <section className="py-16 relative bg-white/40 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-xl text-left">
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono text-blue-400 font-medium">
                <FileText className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Want the detailed version?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                View my complete resume for a comprehensive breakdown of my enterprise security internship exposure, hands-on tool configurations, defensive projects, and academic background.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a
                href={PROFILE_DATA.socials.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>View LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
