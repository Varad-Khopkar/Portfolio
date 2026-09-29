import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  FileDown, 
  Mail, 
  Server, 
  Radio, 
  Lock, 
  Laptop, 
  MailCheck, 
  Database, 
  Activity,
  CheckCircle2,
  Check
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { LinkedinIcon, GithubIcon } from './Icons';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeSignal, setActiveSignal] = useState<string>('ENDPOINT');

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const signals = [
    { id: 'ENDPOINT', label: 'ENDPOINT', tech: 'CrowdStrike Falcon / Automox', icon: Laptop, color: 'text-blue-600', activeBg: 'bg-blue-50/80 border-blue-500' },
    { id: 'NETWORK', label: 'NETWORK', tech: 'FortiGate NGFW / Rules', icon: Server, color: 'text-indigo-600', activeBg: 'bg-indigo-50/80 border-indigo-500' },
    { id: 'EMAIL', label: 'EMAIL', tech: 'Cisco ESA / SPF / DMARC', icon: MailCheck, color: 'text-sky-600', activeBg: 'bg-sky-50/80 border-sky-500' },
    { id: 'DLP', label: 'DLP', tech: 'Netskope / Data Loss Prevention', icon: Database, color: 'text-teal-600', activeBg: 'bg-teal-50/80 border-teal-500' },
    { id: 'IDENTITY', label: 'IDENTITY', tech: 'Enterprise Access / IAM Controls', icon: Lock, color: 'text-amber-600', activeBg: 'bg-amber-50/80 border-amber-500' },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white/40 border-b border-slate-200/80 overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="tracking-wide uppercase font-semibold text-[11px]">{PROFILE_DATA.statusBadge}</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.18]">
              {PROFILE_DATA.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {PROFILE_DATA.supportingText}
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_DATA.socials.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-750 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs text-slate-800"
              >
                <FileDown className="w-4 h-4 text-blue-600" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 pl-1 sm:pl-2">
                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-xs"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={PROFILE_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-xs"
                  aria-label="GitHub"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 text-xs font-mono transition-colors shadow-xs"
                  title="Click to copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-sans font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline font-sans font-medium">Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Credibility bullet summary */}
            <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-600 border-t border-slate-200">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                CrowdStrike Falcon
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                FortiGate & FortiManager
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Cisco IronPort ESA
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Netskope DLP
              </span>
            </div>

          </div>

          {/* Right Column: Security Operations / Infrastructure Conceptual Schematic Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Card: Security Infrastructure Schematic */}
              <div className="relative rounded-xl bg-white border border-slate-200 shadow-md p-5 sm:p-6 space-y-5">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold tracking-tight text-slate-800">
                      Security Architecture Framework
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-medium">
                    Conceptual Model
                  </span>
                </div>

                {/* Conceptual Nodes Grid */}
                <div className="space-y-2.5">
                  <div className="text-xs font-medium text-slate-500 flex items-center justify-between">
                    <span>Enterprise Defense Surfaces</span>
                    <span className="text-emerald-700 font-semibold">Active & Monitored</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {signals.map((sig) => {
                      const Icon = sig.icon;
                      const isSelected = activeSignal === sig.id;
                      return (
                        <div
                          key={sig.id}
                          onClick={() => setActiveSignal(sig.id)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${
                            isSelected 
                              ? `${sig.activeBg} shadow-xs` 
                              : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-semibold tracking-tight text-slate-900">
                              {sig.label}
                            </span>
                            <Icon className={`w-3.5 h-3.5 ${sig.color}`} />
                          </div>
                          <p className="text-[11px] text-slate-600 truncate">
                            {sig.tech}
                          </p>
                        </div>
                      );
                    })}

                    {/* Central Correlator Node */}
                    <div className="sm:col-span-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-slate-800 font-medium">Defense-in-Depth Posture</span>
                      </div>
                      <span className="text-[11px] text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-medium">
                        Synchronized Controls
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enterprise Security Highlights Card */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-xs text-left text-slate-700 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-slate-500 text-[11px]">
                    <div className="flex items-center gap-1.5 font-medium text-slate-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>Security Engineering Focus</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
                      Production Verified
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <div className="text-[11px] text-slate-500 font-medium">Primary Focus</div>
                      <div className="font-semibold text-slate-900 mt-0.5">Enterprise Defense</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <div className="text-[11px] text-slate-500 font-medium">Core Toolchains</div>
                      <div className="font-semibold text-slate-900 mt-0.5">EDR • NGFW • DLP</div>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Enterprise security engineering & defensive workflows representation</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
