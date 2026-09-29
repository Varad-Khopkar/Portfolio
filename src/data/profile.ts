export interface SocialLinks {
  linkedin: string;
  credly: string;
  github: string;
  email: string;
  resumeUrl: string;
  phone?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  badge?: string;
  bullets: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  surface: 'endpoint' | 'network' | 'email' | 'cloud' | 'data' | 'application';
  description: string;
  technologies: string[];
  status: string;
  githubUrl?: string;
  demoUrl?: string;
  bullets: string[];
  detail: {
    problem: string;
    approach: string;
    architecture: string;
    securityConsiderations: string;
    outcome: string;
  };
  mockVisualType: 'vuln-table';
}

export interface SecurityStackDomain {
  domain: string;
  surfaceKey: 'endpoint' | 'network' | 'email' | 'cloud' | 'data' | 'detection' | 'testing';
  description: string;
  technologies: {
    name: string;
    type: 'enterprise' | 'standard' | 'concept';
    highlight?: boolean;
  }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: 'CERTIFIED';
  badgeCode?: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
}

export interface LeadershipItem {
  organization: string;
  role: string;
  description: string;
  metric?: {
    value: string;
    label: string;
  };
  highlights: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  supportingText: string;
  statusBadge: string;
  location: string;
  socials: SocialLinks;
  quickStats: {
    value: string;
    label: string;
    description: string;
  }[];
  about: {
    title: string;
    paragraphs: string[];
    areasOfInterest: string[];
    topSkills: string[];
    languages: { name: string; proficiency: string }[];
    honors: string[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  securityStack: SecurityStackDomain[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  leadership: LeadershipItem[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export const PROFILE_DATA: ProfileData = {
  name: "Varad Vijay Khopkar",
  title: "Cybersecurity Engineer & Researcher",
  headline: "Cybersecurity Engineer specializing in Detection Engineering, Endpoint Security, Enterprise Security Infrastructure, and Cloud Security.",
  supportingText: "Currently working with enterprise security technologies including CrowdStrike Falcon, FortiGate, FortiManager, FortiAnalyzer, Automox, Cisco Email Security Appliance (ESA), Cisco Security Management Appliance (SMA), Netskope CASB, and Data Loss Prevention (DLP) solutions.",
  statusBadge: "CYBERSECURITY ENGINEER • ENTERPRISE DEFENSE",
  location: "Pune Division, Maharashtra, India",
  
  socials: {
    linkedin: "https://www.linkedin.com/in/varadkhopkar/",
    credly: "https://www.credly.com/users/varadkhopkar",
    github: "https://github.com/Varad-Khopkar",
    email: "varadkhopkar@gmail.com",
    resumeUrl: "/VaradKhopkar_Resume.pdf",
    phone: "+91 7666 023 759",
  },

  quickStats: [
    {
      value: "Detection Tuning",
      label: "Detection Engineering",
      description: "CrowdStrike regex development, IOA/IOC exclusions & telemetry correlation"
    },
    {
      value: "Enterprise EDR",
      label: "CrowdStrike Falcon",
      description: "Sensor deployment, prevention policies & incident containment"
    },
    {
      value: "Multi-Vector",
      label: "Defense-in-Depth",
      description: "Fortinet NGFW, Cisco ESA/SMA, network telemetry & email defense"
    },
    {
      value: "CASB & DLP",
      label: "Cloud & Data Security",
      description: "Netskope policy enforcement, SaaS governance & data exfiltration protection"
    }
  ],

  about: {
    title: "Cybersecurity Engineer & Researcher",
    paragraphs: [
      "Cybersecurity Engineer specializing in Detection Engineering, Endpoint Security, Enterprise Security Infrastructure, and Cloud Security. Currently working with enterprise security technologies including CrowdStrike Falcon, FortiGate, FortiManager, FortiAnalyzer, Automox, Cisco Email Security Appliance (ESA), Cisco Security Management Appliance (SMA), Netskope CASB, and Data Loss Prevention (DLP) solutions. My work focuses on security control implementation, infrastructure hardening, vulnerability remediation, cloud security governance, and enterprise security operations.",
      "I build and optimize security controls that improve visibility, reduce attack surface, strengthen detection capabilities, and enhance organizational cyber resilience. My experience includes endpoint protection engineering, email security administration, CASB governance, DLP implementation, security control validation, and security infrastructure management.",
      "My background in Detection Engineering and Threat Hunting includes CrowdStrike regex development, command-line analysis, process behavior evaluation, parent-child process analysis, endpoint telemetry investigation, and detection tuning to improve threat identification accuracy while reducing false positives. I have contributed to vulnerability remediation programs, endpoint compliance initiatives, patch management operations, cloud security governance, and enterprise email security controls to strengthen defenses against phishing, malware, business email compromise (BEC), and other email-borne threats.",
      "Additionally, I designed and developed Digital Operational Resilience Act (DORA)-aligned cybersecurity awareness and compliance training programs for EU-based employees using WOCS.ai, translating regulatory requirements into practical, role-based security awareness initiatives. Beyond my professional responsibilities, I actively engage in vulnerability research, Bugcrowd, security projects, and continuous learning across offensive and defensive security domains."
    ],
    areasOfInterest: [
      "Security Engineering",
      "Detection Engineering",
      "Threat Hunting",
      "Incident Response",
      "Endpoint Security",
      "Cloud Security",
      "Security Automation",
      "Cyber Defense"
    ],
    topSkills: [
      "Security Research",
      "Data Loss Prevention (DLP)",
      "Cyber Threat Hunting (CTH)",
      "Enterprise Security Infrastructure",
      "DORA Compliance & Training (WOCS.ai)",
      "Vulnerability Remediation & Patching"
    ],
    languages: [
      { name: "Marathi", proficiency: "Native or Bilingual" },
      { name: "English", proficiency: "Professional Working" },
      { name: "Hindi", proficiency: "Professional Working" }
    ],
    honors: [
      "Leadership & Service Award"
    ]
  },

  experience: [
    {
      company: "Magic Software Enterprises",
      role: "Intern - Global Cyber Security Team (Cyber Security Engineer Intern)",
      period: "October 2025 – Present (1 year)",
      location: "Pune/Pimpri-Chinchwad Area",
      badge: "Enterprise Security Environment",
      bullets: [
        "Administered CrowdStrike Falcon across enterprise endpoints, supporting sensor deployment, configuration, host management, and upgrades across servers and workstations.",
        "Investigated and triaged endpoint alerts using CrowdStrike EDR telemetry, analysing process behaviour, command-line execution, context, IOAs, and endpoint activity to identify suspicious or malicious behaviour.",
        "Performed detection engineering and tuning in CrowdStrike, analysing detection behaviour and implementing regex-based IOA/IOC exclusions to improve detection fidelity and reduce false positives.",
        "Configured and optimized CrowdStrike prevention/security policies, validating behaviour and adjusting endpoint protection based on investigation findings and operational requirements.",
        "Conducted endpoint incident response and threat hunting, including root cause analysis, containment, remediation, and validation of affected systems.",
        "Administered and optimized Cisco Secure Email (ESA/SMA) and Microsoft 365 Security, investigating phishing, malware, spam, and BEC through email analysis and SPF, DKIM, and DMARC validation.",
        "Powered identity and access security with authentication, access and security-policy management, using Microsoft Entra ID and Microsoft 365 security controls.",
        "Managed Netskope CASB and DLP controls, enforcing policies, monitoring user activity, supporting secure SaaS access, and reducing data-exfiltration risks.",
        "Configured and managed FortiGate, FortiManager, and FortiAnalyzer to enforce network security policies, improve visibility, and investigate network threats including password spraying.",
        "Correlated endpoint, email, cloud, and network telemetry to identify attack patterns, support threat investigations, and strengthen detection coverage.",
        "Managed vulnerability remediation and OS-specific patching using Automox, while handling cybersecurity incidents/service requests through Jira Service Management (JSM) using ITIL-aligned processes.",
        "Developed security documentation, investigation reports, operational updates, and DORA-aligned cybersecurity awareness/compliance training for EU employees using WOCS.ai."
      ],
      technologies: [
        "CrowdStrike Falcon",
        "FortiGate",
        "FortiManager",
        "FortiAnalyzer",
        "Cisco ESA / SMA",
        "Netskope CASB",
        "Automox",
        "Microsoft Entra ID",
        "Microsoft 365 Security",
        "DLP",
        "WOCS.ai (DORA)",
        "Jira Service Management"
      ]
    },
    {
      company: "Threatactix",
      role: "Threat Intelligence Analyst",
      period: "August 2025 – October 2025 (3 months)",
      location: "India",
      badge: "Threat Intelligence",
      bullets: [
        "Conducted threat intelligence research and adversary monitoring across the active cyber threat landscape.",
        "Tracked threat actor campaigns, indicators of compromise (IOCs), and analyzed emerging tactics, techniques, and procedures (TTPs)."
      ],
      technologies: [
        "Threat Intelligence",
        "IOC Analysis",
        "TTP Tracking",
        "Threat Landscapes",
        "ThreatFox",
        "AlienVault OTX"
      ]
    },
    {
      company: "AdoSolve InfoTech Pvt. Ltd.",
      role: "Cyber Security Analyst & Jr. Penetration Tester",
      period: "June 2024 – March 2025 (9 months)",
      location: "Pune Camp, Maharashtra, India",
      badge: "Security Operations & Testing",
      bullets: [
        "Monitored and analyzed security logs, network traffic, and endpoint activity to identify anomalies and support threat detection and incident response operations.",
        "Conducted vulnerability assessments, CVE analysis, and risk impact evaluations to support remediation prioritization and organizational risk reduction.",
        "Investigated security alerts, validated true positives, reduced false positives, and escalated confirmed incidents through structured incident handling workflows.",
        "Encouraged the use of endpoint, network, and log telemetry in investigations to understand what is happening and detect unusual activity to aid in security incident investigations.",
        "Supported IOCs, threat intelligence, and threat-hunting capabilities during security investigations to detect potentially malicious activity and increase visibility.",
        "Helped with endpoint deployment, security monitoring, detection analysis, and validation of endpoint protection controls for the operational roll-out of CrowdStrike Falcon.",
        "Developed and maintained security documentation, standard operating procedures (SOPs), and incident response playbooks to improve operational consistency and knowledge sharing.",
        "Utilized MITRE ATT&CK concepts, detection logic, alert optimization, and security-event analysis to assist with day-to-day security operations."
      ],
      technologies: [
        "CrowdStrike Falcon",
        "MITRE ATT&CK",
        "Vulnerability Assessment",
        "CVE Analysis",
        "Wireshark",
        "Nmap",
        "Burp Suite",
        "Incident Playbooks"
      ]
    },
    {
      company: "Bugcrowd",
      role: "Penetration Tester",
      period: "December 2023 – Present (2+ years)",
      location: "India",
      badge: "Offensive Security",
      bullets: [
        "Actively engage in vulnerability research and bug bounty programs across diverse targets on Bugcrowd.",
        "Discovered and responsibly reported security vulnerabilities across web applications, APIs, and attack surfaces adhering to responsible disclosure standards."
      ],
      technologies: [
        "Vulnerability Research",
        "Burp Suite",
        "OWASP Top 10",
        "Web Application Security",
        "API Testing"
      ]
    },
    {
      company: "Fortinet",
      role: "Network Security Associate",
      period: "January 2024 – March 2024 (3 months)",
      location: "Pune, Maharashtra, India",
      badge: "Network Security",
      bullets: [
        "Trained on Fortinet enterprise network security ecosystems, firewall architecture, and policy enforcement.",
        "Analyzed network traffic patterns, security rule definitions, and foundational network defense controls."
      ],
      technologies: [
        "FortiGate",
        "Network Security",
        "Firewall Policies",
        "Traffic Analysis"
      ]
    },
    {
      company: "Bharatrath",
      role: "Junior Web Developer (Intern for SAAS Development)",
      period: "May 2023 – August 2023 (4 months)",
      location: "India",
      bullets: [
        "Intern for SAAS Development, assisting with web applications, front-end interfaces, and feature delivery."
      ],
      technologies: [
        "SaaS Development",
        "Python",
        "JavaScript",
        "Web Development"
      ]
    },
    {
      company: "Disha Computer Institute - India",
      role: "Faculty Lecturer",
      period: "June 2022 – May 2023 (1 year)",
      location: "Pune, Maharashtra, India",
      bullets: [
        "Part Time Web Designing & Development Lecturer Faculty, teaching and mentoring students in programming and web technologies."
      ],
      technologies: [
        "Web Designing",
        "Development Fundamentals",
        "Technical Instruction"
      ]
    }
  ],

  education: [
    {
      institution: "Ajeenkya D Y Patil University",
      degree: "Bachelor's Of Technology, Computer Science Engineering (Specialisation in Cyber Security)",
      period: "August 2022 – August 2026",
      location: "Pune, Maharashtra, India",
      description: "Graduate Engineer program with core specialization in Cybersecurity, covering enterprise defense, network security, penetration testing, cryptography, and security operations."
    },
    {
      institution: "Savitribai Phule Pune University",
      degree: "Higher Secondary (SYJC Science, PCB)",
      period: "June 2019 – April 2020",
      location: "Pune, Maharashtra, India"
    },
    {
      institution: "Mumbai University Mumbai",
      degree: "First Year Junior College (FYJC Science, PCMB)",
      period: "June 2018 – April 2019",
      location: "Mumbai, Maharashtra, India"
    },
    {
      institution: "Shivajirao S Jondhale College of Engineering",
      degree: "Secondary School Certificate (SSC)",
      period: "June 2008 – April 2018",
      location: "Vishnu Nagar Dombivli (West) Dist Thane, Maharashtra, India"
    }
  ],

  securityStack: [
    {
      domain: "Endpoint Security",
      surfaceKey: "endpoint",
      description: "Host protection, endpoint EDR telemetry, prevention policy hardening, host isolation, and Automox patch management.",
      technologies: [
        { name: "CrowdStrike Falcon", type: "enterprise", highlight: true },
        { name: "Automox", type: "enterprise", highlight: true },
        { name: "Microsoft Defender for Endpoint", type: "enterprise" },
        { name: "EDR Prevention Policies", type: "enterprise" },
        { name: "IOA / IOC Exclusions & Tuning", type: "standard", highlight: true }
      ]
    },
    {
      domain: "Network Security",
      surfaceKey: "network",
      description: "Perimeter defense, traffic inspection, firewall orchestration, and network threat investigation.",
      technologies: [
        { name: "FortiGate", type: "enterprise", highlight: true },
        { name: "FortiManager", type: "enterprise", highlight: true },
        { name: "FortiAnalyzer", type: "enterprise", highlight: true },
        { name: "Wireshark", type: "standard" },
        { name: "Nmap", type: "standard" },
        { name: "VPN & NAT", type: "standard" }
      ]
    },
    {
      domain: "Email Security",
      surfaceKey: "email",
      description: "Inbound/outbound email hygiene, anti-phishing, BEC defense, quarantine workflows, and domain authentication.",
      technologies: [
        { name: "Cisco Secure Email (ESA)", type: "enterprise", highlight: true },
        { name: "Cisco SMA", type: "enterprise", highlight: true },
        { name: "Cisco IronPort", type: "enterprise" },
        { name: "Microsoft 365 Security", type: "enterprise" },
        { name: "SPF", type: "standard" },
        { name: "DKIM", type: "standard" },
        { name: "DMARC", type: "standard" }
      ]
    },
    {
      domain: "Cloud & Data Security",
      surfaceKey: "cloud",
      description: "Data loss prevention (DLP), CASB policies, secure SaaS access, and cloud security governance.",
      technologies: [
        { name: "Netskope CASB", type: "enterprise", highlight: true },
        { name: "Data Loss Prevention (DLP)", type: "enterprise", highlight: true },
        { name: "Microsoft Entra ID (Azure AD)", type: "enterprise" },
        { name: "Conditional Access & MFA", type: "standard" },
        { name: "WOCS.ai (DORA Compliance)", type: "enterprise" }
      ]
    },
    {
      domain: "Vulnerability & Patch Management",
      surfaceKey: "endpoint",
      description: "Continuous vulnerability tracking, CVE/CVSS analysis, remediation prioritization, and OS-specific patching.",
      technologies: [
        { name: "Automox", type: "enterprise", highlight: true },
        { name: "CVE Analysis", type: "standard", highlight: true },
        { name: "CVSS v3 Prioritization", type: "standard" },
        { name: "Vulnerability Assessment", type: "concept" },
        { name: "Jira Service Management (ITIL)", type: "standard" }
      ]
    },
    {
      domain: "Threat Intelligence & Querying",
      surfaceKey: "detection",
      description: "Threat hunting, telemetry correlation, adversary tracking, and log querying.",
      technologies: [
        { name: "MITRE ATT&CK", type: "standard", highlight: true },
        { name: "KQL (Working Knowledge)", type: "standard", highlight: true },
        { name: "SPL / SIEM Concepts", type: "concept" },
        { name: "VirusTotal", type: "standard" },
        { name: "AlienVault OTX", type: "standard" },
        { name: "ThreatFox", type: "standard" },
        { name: "Shodan & Maltego", type: "standard" }
      ]
    },
    {
      domain: "Security Testing & Automation",
      surfaceKey: "testing",
      description: "Offensive security testing, vulnerability research, and security scripting.",
      technologies: [
        { name: "Bugcrowd", type: "enterprise", highlight: true },
        { name: "Burp Suite", type: "standard", highlight: true },
        { name: "OWASP ZAP", type: "standard" },
        { name: "Kali Linux", type: "standard" },
        { name: "Python", type: "standard", highlight: true },
        { name: "Flask & REST APIs", type: "standard" },
        { name: "Bash & PowerShell", type: "standard" }
      ]
    }
  ],

  projects: [
    {
      id: "vulnaboard",
      name: "VulnaBoard | Vulnerability Intelligence Platform",
      category: "Vulnerability Management & Intelligence",
      surface: "endpoint",
      description: "Developed a Python/Flask-based vulnerability intelligence platform to automate the collection, processing, analysis, prioritization, and visualization of CVE data from the National Vulnerability Database (NVD).",
      technologies: ["Python", "Flask", "SQLite", "Pandas", "NVD API", "HTML/CSS"],
      status: "Completed Platform",
      githubUrl: "https://github.com/Varad-Khopkar/VulnaBoard",
      bullets: [
        "Developed a Python/Flask-based vulnerability intelligence platform to automate the collection, processing, analysis, prioritization, and visualization of CVE data from the National Vulnerability Database (NVD).",
        "Engineered an automated vulnerability-data ingestion pipeline to retrieve NVD feeds, normalize vulnerability data, maintain historical records, and support continuous vulnerability monitoring and analysis.",
        "Implemented CVSS-based vulnerability prioritization, automatically identifying and tracking high-risk vulnerabilities with severity scores of 9.0 and above.",
        "Designed an interactive dashboard to visualize vulnerability trends, severity metrics, historical CVE data, and vulnerability details, improving visibility into emerging security risks and remediation priorities.",
        "Built the platform with a modular architecture supporting future integration with threat intelligence feeds, asset inventories, and enterprise vulnerability-management workflows."
      ],
      detail: {
        problem: "Enterprise security teams frequently face fragmented vulnerability feeds across disparate sources, making prioritization and remediation tracking inefficient without automated collection and normalization.",
        approach: "Engineered an automated vulnerability data ingestion pipeline retrieving NVD feeds, calculating CVSS severity priorities, and generating an interactive monitoring dashboard.",
        architecture: "NVD API Feed Ingestion -> Data Normalization (Pandas/SQLite) -> CVSS Prioritization Engine (>= 9.0 Critical Tracking) -> Python/Flask Web Interface.",
        securityConsiderations: "Sanitization of CVE query parameters, hardened API endpoints, defensive error handling against malformed JSON feeds, and structured database storage.",
        outcome: "Streamlined vulnerability visibility, automated critical CVE identification, and created an extensible platform for enterprise security workflows."
      },
      mockVisualType: "vuln-table"
    }
  ],

  certifications: [
    {
      name: "Fortinet Certified Cybersecurity Associate (FCCA)",
      issuer: "Fortinet Training Institute",
      status: "CERTIFIED",
      badgeCode: "FCCA • Mar 2024",
      description: "Validates foundational knowledge of the cybersecurity threat landscape, cybersecurity concepts, and fundamental defensive infrastructure."
    },
    {
      name: "Fortinet Certified Fundamentals in Cybersecurity (FCF)",
      issuer: "Fortinet Training Institute",
      status: "CERTIFIED",
      badgeCode: "FCF • Feb 2024",
      description: "Validates core understanding of foundational security concepts, networking principles, and threat identification."
    },
    {
      name: "Ethical Hacking Essentials (EHE)",
      issuer: "EC-Council",
      status: "CERTIFIED",
      badgeCode: "EHE • Feb 2024",
      description: "Covers fundamental information security concepts, threat intelligence, vulnerability assessment, and ethical hacking methodologies."
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Foundations Associate",
      issuer: "Oracle",
      status: "CERTIFIED",
      badgeCode: "OCI • 2025",
      description: "Validates foundational knowledge of Oracle Cloud Infrastructure services, cloud security architecture, identity, and governance."
    },
    {
      name: "Google Cloud Computing Foundations: Networking",
      issuer: "Google Cloud",
      status: "CERTIFIED",
      badgeCode: "Google Cloud",
      description: "Validates core competencies in cloud networking architectures, VPCs, network security, and infrastructure routing."
    },
    {
      name: "Google Cloud Computing Foundations: Infrastructure in Google Cloud",
      issuer: "Google Cloud",
      status: "CERTIFIED",
      badgeCode: "Google Cloud",
      description: "Validates understanding of Google Cloud infrastructure components, compute resources, storage, and cloud operational controls."
    },
    {
      name: "Advent of Cyber 2025 – Certificate of Completion",
      issuer: "TryHackMe",
      status: "CERTIFIED",
      badgeCode: "TryHackMe",
      description: "Certificate of completion demonstrating practical hands-on exercises in defensive and offensive cybersecurity challenges."
    },
    {
      name: "Level 3: GenAI",
      issuer: "Google Cloud / Skill Badge",
      status: "CERTIFIED",
      badgeCode: "GenAI",
      description: "Specialized skill badge verifying foundational understanding and practical application of generative AI workflows."
    }
  ],

  leadership: [
    {
      organization: "ADYPU's - Student Progression & Corporate Relations Office",
      role: "Student Placement Head (October 2025 – Present)",
      description: "Lead campus recruitment initiatives by coordinating with the Students Progression & Corporate Relations (SP&CR) Office at ADYPU for over 200+ placement drives, helping students through placement readiness, and managing end-to-end placement operations to ensure successful career outcomes.",
      metric: {
        value: "200+",
        label: "Campus placement drives coordinated with SP&CR Office"
      },
      highlights: [
        "Lead campus recruitment initiatives by coordinating with the Students Progression & Corporate Relations (SP&CR) Office at ADYPU.",
        "Helped students through placement readiness and structured technical preparation.",
        "Managing end-to-end placement operations to ensure successful career outcomes."
      ]
    },
    {
      organization: "Cyber Alchemists - SOE - Ajeenkya DY Patil University",
      role: "Founding President (February 2024 – April 2026)",
      description: "I had the opportunity to help start Cyber Alchemists with a simple goal: create a space where students interested in cybersecurity could learn together, practice together, and grow together. What began as a small group slowly turned into a community because everyone contributed their effort, ideas, and time.",
      highlights: [
        "Setting up the basic structure and direction for the club.",
        "Organizing hands-on sessions, workshops, and awareness activities.",
        "Encouraging members to explore areas like VAPT, SOC fundamentals, and threat analysis.",
        "Building a dependable core team and supporting their leadership.",
        "Coordinating with faculty and other student bodies to run events smoothly."
      ]
    },
    {
      organization: "Rotaract Club of Ajeenkya DY Patil Group",
      role: "Chartering Secretary / Founding Secretary (2024 – 2026)",
      description: "Co-founded and scaled a university-level organization, leading community service, professional development, and leadership initiatives.",
      highlights: [
        "Maintained official executive records, meeting agendas, and stakeholder communications.",
        "Directed social, technical, and youth empowerment initiatives.",
        "Collaborated across cross-functional teams to execute initiatives on schedule."
      ]
    },
    {
      organization: "HashTech 2023-24",
      role: "General Secretary",
      description: "Directed operations and cross-functional coordination for a large-scale university technical and cultural event involving multiple teams and stakeholders.",
      highlights: [
        "Managed cross-functional coordination across technical, logistics, and event teams.",
        "Ensured smooth operational workflows and high participant engagement.",
        "Accountable for event deliverables, scheduling, and risk mitigation."
      ]
    }
  ],

  skills: [
    {
      category: "Security Operations & Incident Response",
      items: [
        "Security Monitoring",
        "Alert Triage",
        "Incident Response",
        "Incident Investigation",
        "Threat Detection",
        "Threat Hunting (CTH)",
        "IOC Analysis",
        "Threat Intelligence",
        "Root Cause Analysis",
        "Incident Containment & Remediation",
        "Security Event Analysis",
        "Incident Documentation",
        "Security Reporting"
      ]
    },
    {
      category: "Security Engineering & Detection",
      items: [
        "Detection Engineering",
        "Detection Logic",
        "Detection Tuning",
        "CrowdStrike Regex Development",
        "Process Behavior Evaluation",
        "Security Control Validation",
        "Security Control Optimization",
        "Security Policy Enforcement",
        "Endpoint Security",
        "Network Security",
        "Cloud Security",
        "Email Security",
        "Data Loss Prevention (DLP)"
      ]
    },
    {
      category: "Security Platforms & Tools",
      items: [
        "CrowdStrike Falcon",
        "FortiGate",
        "FortiManager",
        "FortiAnalyzer",
        "Automox",
        "Cisco Secure Email (ESA)",
        "Cisco SMA",
        "Cisco IronPort",
        "Netskope CASB",
        "Microsoft Defender for Endpoint",
        "Microsoft 365 Security",
        "Microsoft Entra ID (Azure AD)"
      ]
    },
    {
      category: "Identity & Cloud Security",
      items: [
        "Microsoft Entra ID (Azure AD)",
        "Microsoft 365 Security",
        "MFA",
        "Conditional Access",
        "Cloud Security Governance",
        "Netskope CASB",
        "Oracle Cloud Infrastructure (OCI)",
        "Google Cloud Networking & Infrastructure"
      ]
    },
    {
      category: "Network & Infrastructure Security",
      items: [
        "Network Traffic Analysis",
        "Firewall Policy Management",
        "VPN",
        "NAT",
        "Network Segmentation",
        "Windows",
        "Linux",
        "TCP/IP",
        "DNS"
      ]
    },
    {
      category: "Security Monitoring & Querying",
      items: [
        "SIEM Concepts",
        "KQL (Working Knowledge)",
        "SPL / SIEM Query Concepts",
        "SOAR Concepts",
        "Security Event Correlation"
      ]
    },
    {
      category: "Threat Intelligence & Security Tools",
      items: [
        "VirusTotal",
        "AlienVault OTX",
        "ThreatFox",
        "URLScan.io",
        "Shodan",
        "Maltego",
        "Wireshark",
        "Nmap",
        "Burp Suite",
        "OWASP ZAP",
        "Kali Linux"
      ]
    },
    {
      category: "Vulnerability, Risk & Compliance",
      items: [
        "Vulnerability Management",
        "Vulnerability Assessment",
        "Vulnerability Intelligence",
        "CVE Analysis",
        "CVSS-Based Prioritization",
        "Risk Assessment",
        "Risk Impact Evaluation",
        "Patch Management",
        "Secure Configuration",
        "Security Compliance",
        "Security Governance",
        "Control Testing",
        "DORA Compliance (WOCS.ai)",
        "ITIL / JSM Workflows"
      ]
    },
    {
      category: "Programming & Automation",
      items: [
        "Python",
        "Bash",
        "PowerShell (Basic)",
        "Flask",
        "REST APIs",
        "Pandas",
        "Git",
        "GitHub",
        "Security Automation"
      ]
    },
    {
      category: "Frameworks & Methodologies",
      items: [
        "MITRE ATT&CK",
        "Cyber Kill Chain",
        "Incident Response Lifecycle",
        "CVE Analysis",
        "Risk Assessment",
        "Secure Configuration",
        "Patch Management"
      ]
    }
  ]
};
