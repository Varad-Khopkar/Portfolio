import React from 'react';
import { 
  Shield, 
  ArrowUp, 
  Mail, 
  FileDown, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  Award,
  Layers,
  CheckCircle2,
  GraduationCap,
  Command
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { LinkedinIcon, GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

  const navLinks = [
    { name: 'About Profile', href: '#about' },
    { name: 'Professional Experience', href: '#experience' },
    { name: 'Security Stack & Tools', href: '#security-stack' },
    { name: 'Academic Foundation', href: '#education' },
    { name: 'Projects & Research', href: '#projects' },
    { name: 'Verified Certifications', href: '#certifications' },
    { name: 'Leadership & Community', href: '#leadership' },
    { name: 'Contact & Inquiries', href: '#contact' },
  ];

  const credentials = [
    { name: 'Fortinet Associate (FCCA)', code: 'Mar 2024' },
    { name: 'Fortinet Fundamentals (FCF)', code: 'Feb 2024' },
    { name: 'Ethical Hacking Essentials (EHE)', code: 'Feb 2024' },
    { name: 'Oracle Cloud 2025 Associate', code: 'OCI 2025' },
    { name: 'Google Cloud Foundations', code: 'Networking' },
    { name: 'Advent of Cyber 2025', code: 'TryHackMe' },
    { name: 'Leadership & Service Award', code: 'Honors' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 text-left pt-16 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid with balanced vertical distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200">
          
          {/* Column 1: Brand, Summary & Academic Box (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg block leading-tight">
                    {PROFILE_DATA.name}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {PROFILE_DATA.title}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pr-2">
                Cybersecurity Engineer specializing in Detection Engineering, Endpoint Security (CrowdStrike Falcon), Network Defense (Fortinet NGFW), Email Hygiene (Cisco ESA), and Cloud Data Protection (Netskope CASB/DLP).
              </p>

              <div className="space-y-1.5 text-xs text-slate-500 font-sans">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>{PROFILE_DATA.location}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Enterprise Defensive Security Engineering</span>
                </div>
              </div>
            </div>

            {/* Utilized Lower Section: Academic Specialization Card */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 font-sans">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Ajeenkya DY Patil University</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  2022–2026
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                B.Tech in Computer Science &bull; Specialization in Cyber Security
              </p>
              <p className="text-[11px] text-slate-500">
                Focus on enterprise defense, threat hunting, and infrastructure protection.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links & Quick Action Box (Span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider pb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Navigation</span>
              </div>
              <ul className="space-y-2 text-xs font-sans">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-1.5 hover:translate-x-0.5 duration-150"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utilized Lower Section: Quick Palette Launcher */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 font-sans">
              <div className="text-[11px] font-semibold text-slate-700 flex items-center justify-between">
                <span>Quick Navigator</span>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-white text-slate-500 border border-slate-300 rounded shadow-xs font-mono">
                  Ctrl K
                </kbd>
              </div>
              <button
                onClick={openPalette}
                className="w-full inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors shadow-2xs"
              >
                <Command className="w-3 h-3 text-blue-600" />
                <span>Open Command Palette</span>
              </button>
            </div>
          </div>

          {/* Column 3: Verified Credentials & Badges (Replaced Red-Crossed Toolchains) (Span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider pb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Verified Credentials</span>
              </div>
              <ul className="space-y-2 text-xs font-sans">
                {credentials.map((item) => (
                  <li key={item.name}>
                    <a
                      href="#certifications"
                      className="text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-between group"
                    >
                      <span className="flex items-center gap-1.5 group-hover:text-blue-600 transition-colors">
                        <span className="w-1 h-1 rounded-full bg-amber-500" />
                        <span>{item.name}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-600">
                        {item.code}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utilized Lower Section: Credly Transcript Card */}
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
              <div>
                <div className="font-bold text-[11px]">Official Credly Profile</div>
                <div className="text-[10px] text-amber-700">Digital badges & certifications</div>
              </div>
              <a
                href={PROFILE_DATA.socials.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white text-amber-800 border border-amber-200 text-[10px] font-bold hover:bg-amber-100 transition-colors shadow-2xs"
              >
                <span>View</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 4: Verified Profiles & Direct Contact (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider pb-1">
              Connect
            </div>
            
            <div className="space-y-2 text-xs font-sans">
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 text-slate-700 transition-all font-medium"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={PROFILE_DATA.socials.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-amber-50 hover:text-amber-800 border border-slate-200 text-slate-700 transition-all font-medium"
              >
                <span className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Credly</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 text-slate-700 transition-all font-medium"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={`mailto:${PROFILE_DATA.socials.email}`}
                className="flex items-center gap-2 p-2 rounded-lg text-slate-600 hover:text-blue-600 transition-colors"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">{PROFILE_DATA.socials.email}</span>
              </a>

              {PROFILE_DATA.socials.phone && (
                <div className="flex items-center gap-2 p-2 text-slate-500">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PROFILE_DATA.socials.phone}</span>
                </div>
              )}

              <a
                href={PROFILE_DATA.socials.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs shadow-xs transition-colors mt-1"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar: Copyright, Verification & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>&copy; 2026 {PROFILE_DATA.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">&bull;</span>
            <span className="text-slate-600">Enterprise Cybersecurity Engineering</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-500 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>100% Verified Profile</span>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors shadow-2xs font-sans text-xs"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
