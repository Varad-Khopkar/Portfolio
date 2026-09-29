import { PROFILE_DATA } from '../data/profile';

export type SearchCategory = 
  | 'Experience'
  | 'Security Stack'
  | 'Projects'
  | 'Certifications'
  | 'Leadership'
  | 'Education'
  | 'Skills'
  | 'About'
  | 'Quick Stats'
  | 'Surfaces'
  | 'Navigation'
  | 'Actions';

export interface SearchIndexItem {
  id: string;
  title: string;
  subtitle: string;
  category: SearchCategory;
  snippet: string;
  sectionHash: string;
  searchableText: string;
  keywords: string[];
  actionType?: 'navigate' | 'resume' | 'email' | 'external';
  externalUrl?: string;
}

/**
 * Builds an exhaustive, full-site index containing every single word, phrase,
 * bullet point, technology, metric, and detail across the entire portfolio.
 */
export function buildSearchIndex(): SearchIndexItem[] {
  const items: SearchIndexItem[] = [];

  // ==========================================
  // 1. PRIMARY NAVIGATION ANCHORS
  // ==========================================
  const navSections: { id: string; title: string; subtitle: string; hash: string; keywords: string[] }[] = [
    { id: 'nav-overview', title: 'Hero & Security Posture', subtitle: 'Enterprise Defense Architecture Overview', hash: '#hero', keywords: ['top', 'home', 'intro', 'status', 'overview', 'hero'] },
    { id: 'nav-experience', title: 'Professional Experience', subtitle: 'Enterprise Security Operations & Detection Roles', hash: '#experience', keywords: ['jobs', 'career', 'work', 'roles', 'internship', 'magic software', 'adosolve'] },
    { id: 'nav-stack', title: 'Enterprise Security Stack', subtitle: '7 Defense Domains & Production Toolchains', hash: '#security-stack', keywords: ['tools', 'technologies', 'edr', 'ngfw', 'casb', 'dlp', 'cisco', 'fortinet', 'crowdstrike'] },
    { id: 'nav-surfaces', title: 'Security Surface Explorer', subtitle: 'Interactive Defense-in-Depth Control Matrix', hash: '#security-surfaces', keywords: ['matrix', 'surface', 'endpoint', 'network', 'email', 'cloud', 'data', 'dlp'] },
    { id: 'nav-projects', title: 'Security Projects & Research', subtitle: 'VulnaBoard & CVE Ingestion Pipeline', hash: '#projects', keywords: ['vulnaboard', 'cve', 'nvd', 'flask', 'sqlite', 'pandas', 'cvss', 'bugcrowd'] },
    { id: 'nav-certifications', title: 'Verified Certifications', subtitle: 'Fortinet FCCA/FCF, EC-Council EHE, Oracle OCI 2025', hash: '#certifications', keywords: ['credly', 'badges', 'fcca', 'fcf', 'ehe', 'oracle', 'google cloud', 'tryhackme'] },
    { id: 'nav-leadership', title: 'Leadership & Community', subtitle: 'Cyber Alchemists & Student Placement Head (200+ Drives)', hash: '#leadership', keywords: ['cyber alchemists', 'placement head', '200+', 'rotaract', 'hashtech', 'mentorship'] },
    { id: 'nav-skills', title: 'Technical Skills & Matrix', subtitle: 'Comprehensive Security Controls & Toolchain Inventory', hash: '#skills', keywords: ['skills', 'python', 'bash', 'regex', 'kql', 'wireshark', 'nmap', 'burp suite', 'metasploit'] },
    { id: 'nav-education', title: 'Academic Education', subtitle: 'B.Tech in Cyber Security • ADYPU Pune', hash: '#education', keywords: ['ajeenkya', 'dy patil', 'university', 'b.tech', 'diploma', 'sppu', 'mumbai'] },
    { id: 'nav-about', title: 'About Varad Vijay Khopkar', subtitle: 'Cybersecurity Engineer & Researcher Profile', hash: '#about', keywords: ['bio', 'profile', 'dora', 'wocs', 'background', 'marathi', 'english', 'hindi'] },
    { id: 'nav-contact', title: 'Contact & Secure Communication', subtitle: 'Direct Outreach & Professional Inquiries', hash: '#contact', keywords: ['email', 'message', 'reach out', 'hire', 'phone'] },
  ];

  navSections.forEach(nav => {
    items.push({
      id: nav.id,
      title: nav.title,
      subtitle: nav.subtitle,
      category: 'Navigation',
      snippet: `Jump directly to ${nav.title} section on the page.`,
      sectionHash: nav.hash,
      searchableText: `${nav.title} ${nav.subtitle} ${nav.keywords.join(' ')} navigation section`.toLowerCase(),
      keywords: nav.keywords,
      actionType: 'navigate',
    });
  });

  // ==========================================
  // 2. QUICK ACTIONS & EXTERNAL LINKS
  // ==========================================
  items.push(
    {
      id: 'act-resume',
      title: 'Download Official Resume (PDF)',
      subtitle: 'Verified Cybersecurity Engineer Resume',
      category: 'Actions',
      snippet: 'Direct link to Varad Khopkar\'s official PDF resume formatted with enterprise security experience.',
      sectionHash: '#hero',
      searchableText: 'download resume pdf cv varad khopkar credentials curriculum vitae official'.toLowerCase(),
      keywords: ['resume', 'cv', 'pdf', 'download'],
      actionType: 'resume',
      externalUrl: PROFILE_DATA.socials.resumeUrl,
    },
    {
      id: 'act-copy-email',
      title: `Copy Email: ${PROFILE_DATA.socials.email}`,
      subtitle: 'Quick Clipboard Action',
      category: 'Actions',
      snippet: `One-click copy to clipboard: ${PROFILE_DATA.socials.email} (${PROFILE_DATA.socials.phone || '+91 7666 023 759'}).`,
      sectionHash: '#contact',
      searchableText: `email copy clipboard varadkhopkar@gmail.com ${PROFILE_DATA.socials.phone || ''} contact`.toLowerCase(),
      keywords: ['email', 'copy', 'mail', 'clipboard', 'varadkhopkar@gmail.com'],
      actionType: 'email',
    },
    {
      id: 'ext-linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/varadkhopkar',
      category: 'Actions',
      snippet: 'View full professional career profile, recommendations, and network on LinkedIn.',
      sectionHash: '#contact',
      searchableText: 'linkedin profile social connect networking varadkhopkar'.toLowerCase(),
      keywords: ['linkedin', 'profile', 'social', 'network'],
      actionType: 'external',
      externalUrl: PROFILE_DATA.socials.linkedin,
    },
    {
      id: 'ext-github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/Varad-Khopkar',
      category: 'Actions',
      snippet: 'Browse open-source security code, detection scripts, and vulnerability tooling on GitHub.',
      sectionHash: '#projects',
      searchableText: 'github repositories source code open source projects python varad-khopkar'.toLowerCase(),
      keywords: ['github', 'git', 'repo', 'code'],
      actionType: 'external',
      externalUrl: PROFILE_DATA.socials.github,
    },
    {
      id: 'ext-credly',
      title: 'View Credly Transcript',
      subtitle: 'credly.com/users/varadkhopkar',
      category: 'Actions',
      snippet: 'Cryptographically verified certification transcript on Credly (Fortinet, EC-Council, Oracle).',
      sectionHash: '#certifications',
      searchableText: 'credly transcript digital badges verified certs fortinet fcca fcf ehe oracle'.toLowerCase(),
      keywords: ['credly', 'transcript', 'verified', 'badges'],
      actionType: 'external',
      externalUrl: PROFILE_DATA.socials.credly,
    }
  );

  // ==========================================
  // 3. QUICK STATS (HERO)
  // ==========================================
  PROFILE_DATA.quickStats.forEach((stat, idx) => {
    items.push({
      id: `stat-${idx}`,
      title: `${stat.label}: ${stat.value}`,
      subtitle: 'Core Enterprise Defense Metric',
      category: 'Quick Stats',
      snippet: stat.description,
      sectionHash: '#hero',
      searchableText: `${stat.label} ${stat.value} ${stat.description} quick stats hero metric`.toLowerCase(),
      keywords: [stat.label, stat.value],
      actionType: 'navigate',
    });
  });

  // ==========================================
  // 4. ABOUT & PROFESSIONAL BIO
  // ==========================================
  PROFILE_DATA.about.paragraphs.forEach((p, idx) => {
    items.push({
      id: `about-p-${idx}`,
      title: `About Varad - Focus Area ${idx + 1}`,
      subtitle: 'Professional Bio & Engineering Context',
      category: 'About',
      snippet: p,
      sectionHash: '#about',
      searchableText: `about varad khopkar bio paragraph ${p}`.toLowerCase(),
      keywords: ['about', 'bio', 'summary', 'background'],
      actionType: 'navigate',
    });
  });

  items.push(
    {
      id: 'about-languages',
      title: 'Languages: ' + PROFILE_DATA.about.languages.map(l => l.name).join(', '),
      subtitle: 'Multilingual Communication Fluency',
      category: 'About',
      snippet: PROFILE_DATA.about.languages.map(l => `${l.name} (${l.proficiency})`).join(' • '),
      sectionHash: '#about',
      searchableText: `languages ${PROFILE_DATA.about.languages.map(l => `${l.name} ${l.proficiency}`).join(' ')}`.toLowerCase(),
      keywords: ['languages', 'marathi', 'english', 'hindi', 'fluent', 'bilingual'],
      actionType: 'navigate',
    },
    {
      id: 'about-interests',
      title: 'Areas of Interest: ' + PROFILE_DATA.about.areasOfInterest.slice(0, 4).join(', ') + '...',
      subtitle: 'Specialized Cybersecurity Domains',
      category: 'About',
      snippet: PROFILE_DATA.about.areasOfInterest.join(' • '),
      sectionHash: '#about',
      searchableText: `areas of interest ${PROFILE_DATA.about.areasOfInterest.join(' ')}`.toLowerCase(),
      keywords: ['interests', ...PROFILE_DATA.about.areasOfInterest],
      actionType: 'navigate',
    },
    {
      id: 'about-top-skills',
      title: 'Core Specializations: ' + PROFILE_DATA.about.topSkills.slice(0, 3).join(', ') + '...',
      subtitle: 'Primary Engineering Focus Areas',
      category: 'About',
      snippet: PROFILE_DATA.about.topSkills.join(' • '),
      sectionHash: '#about',
      searchableText: `top skills specializations ${PROFILE_DATA.about.topSkills.join(' ')}`.toLowerCase(),
      keywords: ['top skills', ...PROFILE_DATA.about.topSkills],
      actionType: 'navigate',
    },
    {
      id: 'about-honors',
      title: 'Honors & Distinctions: ' + PROFILE_DATA.about.honors.join(', '),
      subtitle: 'Awards & Formal Recognition',
      category: 'About',
      snippet: PROFILE_DATA.about.honors.join(' • '),
      sectionHash: '#about',
      searchableText: `honors awards recognition ${PROFILE_DATA.about.honors.join(' ')}`.toLowerCase(),
      keywords: ['honors', 'awards', 'leadership and service award'],
      actionType: 'navigate',
    }
  );

  // ==========================================
  // 5. EXPERIENCE (COMPANIES, ROLES & EVERY BULLET)
  // ==========================================
  PROFILE_DATA.experience.forEach((exp, expIdx) => {
    // Role summary item
    items.push({
      id: `exp-${expIdx}-main`,
      title: `${exp.role} • ${exp.company}`,
      subtitle: `${exp.period} | ${exp.location || 'Pune'}`,
      category: 'Experience',
      snippet: `${exp.badge ? exp.badge + ' — ' : ''}Technologies: ${exp.technologies.join(', ')}`,
      sectionHash: '#experience',
      searchableText: `${exp.company} ${exp.role} ${exp.period} ${exp.location || ''} ${exp.badge || ''} ${exp.technologies.join(' ')} experience work career`.toLowerCase(),
      keywords: [exp.company, exp.role, ...exp.technologies],
      actionType: 'navigate',
    });

    // Every single individual bullet point indexed for full-text search!
    exp.bullets.forEach((bullet, bIdx) => {
      // Create a succinct title summarizing the bullet or using company + topic
      items.push({
        id: `exp-${expIdx}-bullet-${bIdx}`,
        title: `${exp.company}: ${bullet.slice(0, 50)}...`,
        subtitle: `${exp.role} (${exp.period})`,
        category: 'Experience',
        snippet: bullet,
        sectionHash: '#experience',
        searchableText: `${exp.company} ${exp.role} ${bullet} ${exp.technologies.join(' ')}`.toLowerCase(),
        keywords: [exp.company, exp.role],
        actionType: 'navigate',
      });
    });
  });

  // ==========================================
  // 6. SECURITY STACK (DOMAINS & TECHNOLOGIES)
  // ==========================================
  PROFILE_DATA.securityStack.forEach((sec, sIdx) => {
    // Domain overview
    items.push({
      id: `sec-domain-${sIdx}`,
      title: `Security Domain: ${sec.domain}`,
      subtitle: 'Enterprise Architecture Surface',
      category: 'Security Stack',
      snippet: `${sec.description} • Technologies: ${sec.technologies.map(t => t.name).join(', ')}`,
      sectionHash: '#security-stack',
      searchableText: `${sec.domain} ${sec.description} ${sec.technologies.map(t => t.name).join(' ')} security stack toolchain`.toLowerCase(),
      keywords: [sec.domain, ...sec.technologies.map(t => t.name)],
      actionType: 'navigate',
    });

    // Individual tools in domain
    sec.technologies.forEach((tech, tIdx) => {
      items.push({
        id: `sec-${sIdx}-tech-${tIdx}`,
        title: `${tech.name}`,
        subtitle: `${sec.domain} • ${tech.type === 'enterprise' ? 'Enterprise Core Tool' : 'Security Toolchain'}`,
        category: 'Security Stack',
        snippet: `Enterprise ${sec.domain} technology: ${sec.description}`,
        sectionHash: '#security-stack',
        searchableText: `${tech.name} ${sec.domain} ${tech.type} ${sec.description}`.toLowerCase(),
        keywords: [tech.name, sec.domain],
        actionType: 'navigate',
      });
    });
  });

  // ==========================================
  // 7. PROJECTS (DESCRIPTIONS, ARCHITECTURE & DETAILS)
  // ==========================================
  PROFILE_DATA.projects.forEach((proj, pIdx) => {
    // Main project card
    items.push({
      id: `proj-${pIdx}-main`,
      title: `${proj.name}: ${proj.description}`,
      subtitle: `${proj.category} • ${proj.status}`,
      category: 'Projects',
      snippet: `Stack: ${proj.technologies.join(', ')} • ${proj.bullets.join('; ')}`,
      sectionHash: '#projects',
      searchableText: `${proj.name} ${proj.category} ${proj.description} ${proj.technologies.join(' ')} ${proj.bullets.join(' ')}`.toLowerCase(),
      keywords: [proj.name, ...proj.technologies],
      actionType: 'navigate',
    });

    // Individual detailed breakdown sections:
    const details = [
      { label: 'Problem Statement', text: proj.detail.problem },
      { label: 'Technical Approach', text: proj.detail.approach },
      { label: 'Architecture & Pipeline', text: proj.detail.architecture },
      { label: 'Security Considerations', text: proj.detail.securityConsiderations },
      { label: 'Impact & Outcome', text: proj.detail.outcome },
    ];

    details.forEach((det, dIdx) => {
      items.push({
        id: `proj-${pIdx}-det-${dIdx}`,
        title: `${proj.name} - ${det.label}`,
        subtitle: `${proj.category} Deep Dive`,
        category: 'Projects',
        snippet: det.text,
        sectionHash: '#projects',
        searchableText: `${proj.name} ${det.label} ${det.text} ${proj.technologies.join(' ')}`.toLowerCase(),
        keywords: [proj.name, det.label],
        actionType: 'navigate',
      });
    });

    // Every project bullet individually
    proj.bullets.forEach((bullet, bIdx) => {
      items.push({
        id: `proj-${pIdx}-bullet-${bIdx}`,
        title: `${proj.name} Feature: ${bullet.slice(0, 50)}...`,
        subtitle: `${proj.category} Specification`,
        category: 'Projects',
        snippet: bullet,
        sectionHash: '#projects',
        searchableText: `${proj.name} ${bullet} ${proj.technologies.join(' ')}`.toLowerCase(),
        keywords: [proj.name],
        actionType: 'navigate',
      });
    });
  });

  // ==========================================
  // 8. CERTIFICATIONS
  // ==========================================
  PROFILE_DATA.certifications.forEach((cert, cIdx) => {
    items.push({
      id: `cert-${cIdx}`,
      title: `${cert.name}`,
      subtitle: `Issued by ${cert.issuer} • ${cert.status}`,
      category: 'Certifications',
      snippet: `${cert.badgeCode ? 'Badge Code: ' + cert.badgeCode + ' • ' : ''}${cert.description}`,
      sectionHash: '#certifications',
      searchableText: `${cert.name} ${cert.issuer} ${cert.badgeCode || ''} ${cert.status} ${cert.description} certification credly badge credential`.toLowerCase(),
      keywords: [cert.name, cert.issuer, cert.badgeCode || '', 'certification'],
      actionType: 'navigate',
    });
  });

  // ==========================================
  // 9. EDUCATION
  // ==========================================
  PROFILE_DATA.education.forEach((edu, eIdx) => {
    items.push({
      id: `edu-${eIdx}`,
      title: `${edu.degree}`,
      subtitle: `${edu.institution} • ${edu.period}`,
      category: 'Education',
      snippet: `${edu.location}${edu.description ? ' • ' + edu.description : ''}`,
      sectionHash: '#education',
      searchableText: `${edu.degree} ${edu.institution} ${edu.period} ${edu.location} ${edu.description || ''} education degree university college`.toLowerCase(),
      keywords: [edu.degree, edu.institution, 'education'],
      actionType: 'navigate',
    });
  });

  // ==========================================
  // 10. LEADERSHIP & COMMUNITY
  // ==========================================
  PROFILE_DATA.leadership.forEach((lead, lIdx) => {
    // Main leadership item
    items.push({
      id: `lead-${lIdx}-main`,
      title: `${lead.role} • ${lead.organization}`,
      subtitle: lead.metric ? `${lead.metric.value} ${lead.metric.label}` : 'Leadership & Community',
      category: 'Leadership',
      snippet: lead.description,
      sectionHash: '#leadership',
      searchableText: `${lead.role} ${lead.organization} ${lead.description} ${lead.metric ? lead.metric.value + ' ' + lead.metric.label : ''} leadership community student placement 200+ drives`.toLowerCase(),
      keywords: [lead.role, lead.organization, 'leadership', '200+'],
      actionType: 'navigate',
    });

    // Individual leadership highlights
    lead.highlights.forEach((hl, hIdx) => {
      items.push({
        id: `lead-${lIdx}-hl-${hIdx}`,
        title: `${lead.organization}: ${hl.slice(0, 50)}...`,
        subtitle: `${lead.role}`,
        category: 'Leadership',
        snippet: hl,
        sectionHash: '#leadership',
        searchableText: `${lead.organization} ${lead.role} ${hl}`.toLowerCase(),
        keywords: [lead.organization, lead.role],
        actionType: 'navigate',
      });
    });
  });

  // ==========================================
  // 11. SKILLS & COMPETENCY GROUPS
  // ==========================================
  PROFILE_DATA.skills.forEach((skillGroup, gIdx) => {
    // Category overview
    items.push({
      id: `skillgroup-${gIdx}`,
      title: `Skill Group: ${skillGroup.category}`,
      subtitle: 'Technical Competency Domain',
      category: 'Skills',
      snippet: `Skills: ${skillGroup.items.join(', ')}`,
      sectionHash: '#skills',
      searchableText: `${skillGroup.category} ${skillGroup.items.join(' ')} skills competency tools`.toLowerCase(),
      keywords: [skillGroup.category, ...skillGroup.items],
      actionType: 'navigate',
    });

    // Individual skills
    skillGroup.items.forEach((skillItem, sIdx) => {
      items.push({
        id: `skill-${gIdx}-${sIdx}`,
        title: skillItem,
        subtitle: `Competency under ${skillGroup.category}`,
        category: 'Skills',
        snippet: `Verified technical capability in ${skillItem} within the ${skillGroup.category} discipline.`,
        sectionHash: '#skills',
        searchableText: `${skillItem} ${skillGroup.category} skill capability`.toLowerCase(),
        keywords: [skillItem, skillGroup.category],
        actionType: 'navigate',
      });
    });
  });

  // ==========================================
  // 12. INTERACTIVE DEFENSE SURFACES
  // ==========================================
  const surfaceItems: { name: string; tagline: string; enterpriseTech: string[]; controls: string[]; scope: string }[] = [
    {
      name: 'Endpoint Security Surface',
      tagline: 'Host protection, agent hygiene, IOC containment and automated vulnerability remediation.',
      enterpriseTech: ['CrowdStrike Falcon', 'Automox', 'Microsoft Defender for Endpoint'],
      controls: ['EDR Prevention Policies', 'Host Isolation', 'IOC/IOA Tuning', 'Automated Patch Cycles'],
      scope: 'Workstation and server telemetry monitoring, proactive behavioral prevention, continuous asset visibility.'
    },
    {
      name: 'Network Security Surface',
      tagline: 'Perimeter filtration, stateful firewall policies, traffic inspection and protocol analysis.',
      enterpriseTech: ['FortiGate', 'FortiManager', 'FortiAnalyzer', 'Wireshark', 'Nmap'],
      controls: ['Stateful Firewall Filtering', 'Centralized Policy Deployment', 'Port & Protocol Enumeration', 'Packet Analysis'],
      scope: 'Edge firewall policy administration, traffic inspection, ingress/egress filtering, and network diagnostic telemetry.'
    },
    {
      name: 'Email Security Surface',
      tagline: 'Gateway hygiene, malicious attachment neutralization, domain authentication and phishing defense.',
      enterpriseTech: ['Cisco Secure Email (ESA)', 'Cisco SMA', 'SPF / DKIM / DMARC', 'Microsoft 365 Security'],
      controls: ['Inbound/Outbound Hygiene', 'Quarantine Administration', 'Anti-Spam & Anti-Phishing', 'Domain Authentication Enforcement'],
      scope: 'Inspection of message headers, sender reputation scoring, secure email gateway routing, and anti-spoofing policy checks.'
    },
    {
      name: 'Cloud Security & Governance Surface',
      tagline: 'CASB enforcement, cloud configuration audits, access control and identity governance.',
      enterpriseTech: ['Netskope CASB', 'Oracle Cloud Infrastructure (OCI)', 'Google Cloud Platform (GCP)'],
      controls: ['SaaS Activity Auditing', 'Shadow IT Detection', 'IAM Policy Enforcement', 'Cloud Security Posture'],
      scope: 'Monitoring multi-cloud environments, enforcing CASB inspection over SaaS apps, and auditing cloud access configurations.'
    },
    {
      name: 'Data Security & DLP Surface',
      tagline: 'Sensitive data discovery, exfiltration blocking, policy definitions and compliance governance.',
      enterpriseTech: ['Netskope DLP', 'Data Classification Standards', 'Policy Enforcers'],
      controls: ['Regex & Pattern Matching', 'PII / Financial Data Rules', 'Egress Transfer Blocking', 'Incident Alerting'],
      scope: 'Detecting and preventing unauthorized exfiltration of proprietary or compliance-governed information across web and endpoints.'
    }
  ];

  surfaceItems.forEach((surf, sIdx) => {
    items.push({
      id: `surf-${sIdx}`,
      title: surf.name,
      subtitle: 'Interactive Defense Matrix',
      category: 'Surfaces',
      snippet: `${surf.tagline} • Tech: ${surf.enterpriseTech.join(', ')} • Controls: ${surf.controls.join(', ')} • Scope: ${surf.scope}`,
      sectionHash: '#security-surfaces',
      searchableText: `${surf.name} ${surf.tagline} ${surf.enterpriseTech.join(' ')} ${surf.controls.join(' ')} ${surf.scope}`.toLowerCase(),
      keywords: [surf.name, ...surf.enterpriseTech, ...surf.controls],
      actionType: 'navigate',
    });
  });

  return items;
}

/**
 * Executes high-performance search across all indexed items.
 * Supports exact phrase matching, token/word intersection matching, and relevancy ranking.
 */
export function searchFullIndex(query: string, index: SearchIndexItem[]): SearchIndexItem[] {
  const q = query.trim().toLowerCase();
  if (!q) {
    // When no query is entered, return primary navigation and actions
    return index.filter(item => item.category === 'Navigation' || item.category === 'Actions');
  }

  // Tokenize query words
  const terms = q.split(/\s+/).filter(Boolean);

  interface ScoredItem {
    item: SearchIndexItem;
    score: number;
  }

  const scored: ScoredItem[] = [];

  for (const item of index) {
    const titleLower = item.title.toLowerCase();
    const subtitleLower = item.subtitle.toLowerCase();
    const snippetLower = item.snippet.toLowerCase();
    const text = item.searchableText;

    let score = 0;

    // 1. Exact phrase matches (highest priority)
    if (titleLower === q) {
      score += 1000;
    } else if (titleLower.startsWith(q)) {
      score += 600;
    } else if (titleLower.includes(q)) {
      score += 400;
    }

    if (subtitleLower.includes(q)) {
      score += 250;
    }

    if (snippetLower.includes(q)) {
      score += 200;
    }

    if (text.includes(q)) {
      score += 150;
    }

    // 2. Token-level matching: check if all query terms appear in the searchable text
    const allTermsPresent = terms.every(term => text.includes(term));
    if (allTermsPresent) {
      score += 100;
      // Bonus if terms appear in title
      terms.forEach(term => {
        if (titleLower.includes(term)) score += 40;
        if (subtitleLower.includes(term)) score += 20;
        if (snippetLower.includes(term)) score += 15;
      });
    } else {
      // Partial match: count matching terms if query has multiple words
      if (terms.length > 1) {
        let matchedCount = 0;
        terms.forEach(term => {
          if (text.includes(term)) {
            matchedCount++;
            score += 20;
          }
        });
        // If less than half terms match, skip
        if (matchedCount < Math.ceil(terms.length * 0.6)) {
          score = 0;
        }
      }
    }

    if (score > 0) {
      scored.push({ item, score });
    }
  }

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  // Return top items (capped at 40 to keep UI responsive)
  return scored.slice(0, 40).map(s => s.item);
}
