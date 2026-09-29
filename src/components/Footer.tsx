import React from 'react';
import { Shield, ArrowUp, Mail, FileDown } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { LinkedinIcon, GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white border-t border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Brand & Title */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <span className="font-bold text-slate-900 text-base">
                {PROFILE_DATA.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-500">
              {PROFILE_DATA.title} &bull; Enterprise Defensive Security Focus
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-medium"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-medium"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${PROFILE_DATA.socials.email}`}
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={PROFILE_DATA.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-medium"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors self-end md:self-auto shadow-xs"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
          <div>
            &copy; 2026 {PROFILE_DATA.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Cybersecurity Engineering Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
