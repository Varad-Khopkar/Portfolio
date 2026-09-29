import React, { useState } from 'react';
import { 
  Layers, 
  ArrowUpRight, 
  ShieldAlert, 
  CheckCircle2, 
  Bug,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import type { ProjectItem } from '../data/profile';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const vulnaBoard = PROFILE_DATA.projects[0];

  return (
    <section id="projects" className="py-20 relative bg-white/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>SECURITY ENGINEERING & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Projects & Vulnerability Research
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl font-sans">
            Technical platforms and security research workbenches taken directly from official project and vulnerability research records.
          </p>
        </div>

        {/* 2-Column Grid: Featured Project (VulnaBoard) + Bugcrowd Penetration Testing & Research */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-stretch">
          
          {/* LEFT: VulnaBoard - Detailed Primary Card */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold tracking-wide uppercase">
                    {vulnaBoard.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {vulnaBoard.status}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center justify-between">
                    <span>{vulnaBoard.name}</span>
                    <button
                      onClick={() => setSelectedProject(vulnaBoard)}
                      className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                      title="Inspect Architecture & Design"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-sans">
                    {vulnaBoard.description}
                  </p>
                </div>

                {/* Conceptual Interactive Visual Demonstration (CVE Table) */}
                <div className="pt-1">
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-3.5 font-mono text-[11px] text-slate-700 space-y-2">
                    <div className="flex items-center justify-between text-slate-500 pb-1.5 border-b border-slate-200">
                      <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>NVD API Automated CVE Ingestion & Prioritization</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">CVSS v3.1</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
                        <span className="text-slate-900 font-medium">CVE-2024-21413</span>
                        <span className="px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200 font-bold">9.8 CRITICAL</span>
                        <span className="text-slate-500 hidden sm:inline">Score ≥ 9.0 Trigger</span>
                        <span className="text-emerald-700 font-medium">PRIORITIZED</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
                        <span className="text-slate-900 font-medium">CVE-2024-3400</span>
                        <span className="px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200 font-bold">10.0 CRITICAL</span>
                        <span className="text-slate-500 hidden sm:inline">Remote Code Exec</span>
                        <span className="text-emerald-700 font-medium">FLAGGED</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bullets directly from resume */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide block">
                    Key Engineering Implementations:
                  </span>
                  {vulnaBoard.bullets.slice(1, 4).map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {vulnaBoard.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer CTAs */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(vulnaBoard)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <span>Inspect Full System Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {vulnaBoard.githubUrl && (
                  <a
                    href={vulnaBoard.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-xs"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

            </div>
          </div>

          {/* RIGHT: Bugcrowd Penetration Testing & Vulnerability Research */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold tracking-wide uppercase">
                    Offensive Security & Bug Bounty
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Dec 2023 – Present
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center justify-between">
                    <span>Bugcrowd Security Research</span>
                    <Bug className="w-5 h-5 text-emerald-600" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-sans">
                    Active engagement in independent vulnerability research, crowdsourced security programs, and continuous exploration across offensive and defensive domains.
                  </p>
                </div>

                {/* Research Focus Box */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-700 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Methodology & Assessment Scope</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">2+ YEARS</span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-600 font-sans">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                      <span>Web application and API vulnerability assessment adhering to OWASP standards.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                      <span>Identifying, validating, and triaging high-severity bugs with reproducible proof-of-concepts.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                      <span>Strict adherence to coordinated vulnerability disclosure and platform guidelines.</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide block mb-2">
                    Research Toolchain:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Bugcrowd", "Burp Suite", "OWASP Top 10", "Nmap", "Wireshark", "Kali Linux", "Python"].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Continuous Offensive Testing
                </span>
                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  <span>Verified Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
