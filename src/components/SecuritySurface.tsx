import React, { useState } from 'react';
import { 
  Laptop, 
  Server, 
  MailCheck, 
  Cloud, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  Shield,
  Activity
} from 'lucide-react';

interface SurfaceData {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  enterpriseTech: string[];
  controls: string[];
  operationalScope: string;
  linkedProjects: string[];
  experienceContext: string;
}

export const SecuritySurface: React.FC = () => {
  const [selectedSurface, setSelectedSurface] = useState<string>('endpoint');

  const surfaces: Record<string, SurfaceData> = {
    endpoint: {
      id: 'endpoint',
      name: 'Endpoint Security',
      icon: Laptop,
      tagline: 'Host protection, agent hygiene, IOC containment and automated vulnerability remediation.',
      enterpriseTech: ['CrowdStrike Falcon', 'Automox', 'Microsoft Defender for Endpoint'],
      controls: ['EDR Prevention Policies', 'Host Isolation', 'IOC/IOA Tuning', 'Automated Patch Cycles'],
      operationalScope: 'Workstation and server telemetry monitoring, proactive behavioral prevention, continuous asset visibility.',
      linkedProjects: ['VulnaBoard (Vulnerability Intelligence Platform)'],
      experienceContext: 'Hands-on at Magic Software Enterprises with Falcon host policies, scan management, and Automox patch orchestration.'
    },
    network: {
      id: 'network',
      name: 'Network Security',
      icon: Server,
      tagline: 'Perimeter filtration, stateful firewall policies, traffic inspection and protocol analysis.',
      enterpriseTech: ['FortiGate', 'FortiManager', 'FortiAnalyzer', 'Wireshark', 'Nmap'],
      controls: ['Stateful Firewall Filtering', 'Centralized Policy Deployment', 'Port & Protocol Enumeration', 'Packet Analysis'],
      operationalScope: 'Edge firewall policy administration, traffic inspection, ingress/egress filtering, and network diagnostic telemetry.',
      linkedProjects: ['FortiGate Security Policies & Telemetry'],
      experienceContext: 'Hands-on with FortiGate & FortiManager administration workflows and network security associate training.'
    },
    email: {
      id: 'email',
      name: 'Email Security',
      icon: MailCheck,
      tagline: 'Gateway hygiene, malicious attachment neutralization, domain authentication and phishing defense.',
      enterpriseTech: ['Cisco Secure Email (ESA)', 'Cisco SMA', 'SPF / DKIM / DMARC', 'Microsoft 365 Security'],
      controls: ['Inbound/Outbound Hygiene', 'Quarantine Administration', 'Anti-Spam & Anti-Phishing', 'Domain Authentication Enforcement'],
      operationalScope: 'Inspection of message headers, sender reputation scoring, secure email gateway routing, and anti-spoofing policy checks.',
      linkedProjects: ['Cisco Secure Email (ESA/SMA) Controls'],
      experienceContext: 'Email security operations utilizing Cisco ESA and SMA appliances within enterprise environment.'
    },
    cloud: {
      id: 'cloud',
      name: 'Cloud Security',
      icon: Cloud,
      tagline: 'Cloud access governance, inline web filtration, sanction enforcement and SaaS exposure reduction.',
      enterpriseTech: ['Netskope CASB', 'Microsoft Entra ID', 'WOCS.ai (DORA)'],
      controls: ['Inline Traffic Inspection', 'Cloud Application Risk Assessment', 'Activity Control Policies', 'Zero Trust Posture Alignment'],
      operationalScope: 'Securing cloud-bound user activities, enforcing corporate acceptable-use policies, and mitigating shadow IT risks.',
      linkedProjects: ['Netskope CASB & Policy Enforcement'],
      experienceContext: 'Configuration and policy implementation inside Netskope for cloud security workflows at Magic Software.'
    },
    data: {
      id: 'data',
      name: 'Data Security (DLP)',
      icon: Database,
      tagline: 'Sensitive data discovery, content classification, unauthorized transfer interception and compliance.',
      enterpriseTech: ['Netskope DLP', 'Data Classification Standards', 'Policy Enforcers'],
      controls: ['Regex & Pattern Matching', 'PII / Financial Data Rules', 'Egress Transfer Blocking', 'Incident Alerting'],
      operationalScope: 'Detecting and preventing unauthorized exfiltration of proprietary or compliance-governed information across web and endpoints.',
      linkedProjects: ['Netskope DLP Policy & Exfiltration Prevention'],
      experienceContext: 'Enterprise DLP policy enforcement and data loss prevention configuration with Netskope.'
    }
  };

  const active = surfaces[selectedSurface];
  const ActiveIcon = active.icon;

  return (
    <section className="py-16 md:py-20 relative bg-slate-50/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>DEFENSE-IN-DEPTH MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Interactive Security Surface Explorer
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Select an enterprise defense surface to examine associated toolchains, architectural controls, and practical implementation context.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-medium self-start md:self-end">
            Tap a domain to inspect
          </span>
        </div>

        {/* Surface Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-8">
          {Object.values(surfaces).map((surface) => {
            const Icon = surface.icon;
            const isSelected = selectedSurface === surface.id;
            return (
              <button
                key={surface.id}
                onClick={() => setSelectedSurface(surface.id)}
                className={`flex items-center gap-2.5 p-3.5 rounded-xl border transition-all text-left ${
                  isSelected
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wide">
                    {surface.name.split(' ')[0]}
                  </div>
                  <div className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                    {surface.name.split(' ')[1] || 'Domain'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Surface Details Card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Scope & Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                    <span>{active.name}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                      ACTIVE SURFACE
                    </span>
                  </h3>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">
                    {active.tagline}
                  </p>
                </div>
              </div>

              {/* Enterprise Technologies */}
              <div>
                <span className="text-xs uppercase text-slate-500 tracking-wider block mb-2.5 font-semibold">
                  Enterprise Technologies & Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {active.enterpriseTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-800 font-medium flex items-center gap-1.5"
                    >
                      <Shield className="w-3.5 h-3.5 text-blue-600" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Defensive Controls Enforced */}
              <div>
                <span className="text-xs uppercase text-slate-500 tracking-wider block mb-2.5 font-semibold">
                  Defensive Controls & Workflows
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.controls.map((control) => (
                    <div
                      key={control}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{control}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Scope */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700 leading-relaxed font-sans">
                <span className="font-semibold text-slate-900 block mb-1">
                  Operational Objective:
                </span>
                {active.operationalScope}
              </div>
            </div>

            {/* Right Column: Practical Context & Associated Artifacts */}
            <div className="lg:col-span-5 space-y-4">
              {/* Hands-on Environment Experience */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-2">
                  <span className="uppercase text-blue-700 font-semibold tracking-wide">HANDS-ON CONTEXT</span>
                  <span className="text-slate-400 font-medium">ENTERPRISE</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {active.experienceContext}
                </p>
              </div>

              {/* Associated Portfolio Projects */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-2">
                  <span className="uppercase text-slate-700 font-semibold tracking-wide">LINKED PROJECTS & WORKFLOWS</span>
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="space-y-2">
                  {active.linkedProjects.map((proj) => (
                    <div
                      key={proj}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800"
                    >
                      <span className="font-medium text-slate-800">{proj}</span>
                      <a
                        href="#projects"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 text-[11px]"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry Status notice */}
              <div className="text-[11px] text-slate-400 flex items-center justify-end gap-1.5 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Cross-domain defensive engineering surface model</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
