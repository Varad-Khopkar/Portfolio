import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Search, 
  X,
  ArrowRight,
  Briefcase,
  Shield, 
  Layers, 
  Award, 
  GraduationCap,
  Users,
  Cpu,
  FileText,
  Activity,
  Compass,
  FileDown, 
  Copy,
  Check,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { LinkedinIcon, GithubIcon } from './Icons';
import { 
  buildSearchIndex, 
  searchFullIndex, 
  type SearchIndexItem, 
  type SearchCategory 
} from '../utils/searchIndex';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

// Icon and color mapping per category
const CATEGORY_CONFIG: Record<SearchCategory, { 
  icon: React.ComponentType<{ className?: string }>; 
  badgeClass: string;
  iconBg: string;
  iconColor: string;
}> = {
  Navigation: { 
    icon: Compass, 
    badgeClass: 'bg-slate-100 text-slate-700 border-slate-200', 
    iconBg: 'bg-slate-100', 
    iconColor: 'text-slate-600' 
  },
  Actions: { 
    icon: FileDown, 
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200', 
    iconBg: 'bg-purple-100', 
    iconColor: 'text-purple-600' 
  },
  Experience: { 
    icon: Briefcase, 
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200', 
    iconBg: 'bg-blue-100', 
    iconColor: 'text-blue-600' 
  },
  'Security Stack': { 
    icon: Shield, 
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200', 
    iconBg: 'bg-indigo-100', 
    iconColor: 'text-indigo-600' 
  },
  Projects: { 
    icon: Layers, 
    badgeClass: 'bg-violet-50 text-violet-700 border-violet-200', 
    iconBg: 'bg-violet-100', 
    iconColor: 'text-violet-600' 
  },
  Certifications: { 
    icon: Award, 
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200', 
    iconBg: 'bg-amber-100', 
    iconColor: 'text-amber-700' 
  },
  Leadership: { 
    icon: Users, 
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200', 
    iconBg: 'bg-emerald-100', 
    iconColor: 'text-emerald-600' 
  },
  Education: { 
    icon: GraduationCap, 
    badgeClass: 'bg-sky-50 text-sky-700 border-sky-200', 
    iconBg: 'bg-sky-100', 
    iconColor: 'text-sky-600' 
  },
  Skills: { 
    icon: Cpu, 
    badgeClass: 'bg-teal-50 text-teal-700 border-teal-200', 
    iconBg: 'bg-teal-100', 
    iconColor: 'text-teal-600' 
  },
  About: { 
    icon: FileText, 
    badgeClass: 'bg-slate-100 text-slate-700 border-slate-200', 
    iconBg: 'bg-slate-100', 
    iconColor: 'text-slate-600' 
  },
  'Quick Stats': { 
    icon: Activity, 
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200', 
    iconBg: 'bg-rose-100', 
    iconColor: 'text-rose-600' 
  },
  Surfaces: { 
    icon: Laptop, 
    badgeClass: 'bg-cyan-50 text-cyan-700 border-cyan-200', 
    iconBg: 'bg-cyan-100', 
    iconColor: 'text-cyan-600' 
  },
};

/**
 * Highlights matching words or phrases within text in a clean, non-disruptive way.
 */
function HighlightText({ text, query }: { text: string; query: string }) {
  const trimmed = query.trim();
  if (!trimmed || !text) return <span>{text}</span>;

  // Split query into terms
  const terms = trimmed.split(/\s+/).filter(Boolean);
  if (terms.length === 0) return <span>{text}</span>;

  // Build regex matching any of the terms
  const escapedTerms = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi');

  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) => {
        const isMatch = terms.some(t => t.toLowerCase() === part.toLowerCase());
        return isMatch ? (
          <mark key={i} className="bg-blue-100/90 text-blue-900 font-semibold px-0.5 rounded">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
}

/**
 * Extracts a contextual snippet window around the first match if the text is very long.
 */
function getExcerpt(text: string, query: string, maxLen = 140): string {
  if (!text || text.length <= maxLen) return text;
  const q = query.trim().toLowerCase();
  if (!q) return text.slice(0, maxLen) + '...';

  const terms = q.split(/\s+/).filter(Boolean);
  let firstIdx = -1;
  for (const term of terms) {
    const idx = text.toLowerCase().indexOf(term);
    if (idx !== -1 && (firstIdx === -1 || idx < firstIdx)) {
      firstIdx = idx;
    }
  }

  if (firstIdx === -1) {
    return text.slice(0, maxLen) + '...';
  }

  const start = Math.max(0, firstIdx - 35);
  const end = Math.min(text.length, start + maxLen);
  let excerpt = text.slice(start, end);
  if (start > 0) excerpt = '...' + excerpt;
  if (end < text.length) excerpt = excerpt + '...';
  return excerpt;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Build full site index once
  const searchIndex = useMemo(() => buildSearchIndex(), []);

  // Filter items in real time
  const results = useMemo(() => searchFullIndex(query, searchIndex), [query, searchIndex]);

  const handleClose = useCallback(() => {
    setQuery('');
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  const navigateTo = useCallback((hash: string) => {
    handleClose();
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  }, [handleClose]);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      handleClose();
    }, 1200);
  }, [handleClose]);

  // Execute selected search item action
  const executeItem = useCallback((item: SearchIndexItem) => {
    if (item.actionType === 'resume') {
      window.open(item.externalUrl || PROFILE_DATA.socials.resumeUrl, '_blank');
      handleClose();
    } else if (item.actionType === 'email') {
      copyEmail();
    } else if (item.actionType === 'external' && item.externalUrl) {
      window.open(item.externalUrl, '_blank');
      handleClose();
    } else {
      navigateTo(item.sectionHash);
    }
  }, [copyEmail, handleClose, navigateTo]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          handleClose();
        } else {
          window.dispatchEvent(new CustomEvent('open-command-palette'));
        }
        return;
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (results.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (results.length || 1)) % (results.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          executeItem(results[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, handleClose, executeItem]);

  // Scroll active item into view
  useEffect(() => {
    if (!resultsContainerRef.current) return;
    const activeEl = resultsContainerRef.current.querySelector(`[data-index="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
      onClick={handleClose}
    >
      <div 
        className="w-full max-w-2xl bg-white border border-slate-200/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/80">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search any keyword, tool, role, or phrase (e.g. CrowdStrike, Regex, FortiGate, DORA, 200+)..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none font-sans"
          />
          {query ? (
            <button 
              onClick={() => {
                setQuery('');
                setSelectedIndex(0);
                inputRef.current?.focus();
              }}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors mr-2"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-slate-500 bg-white border border-slate-300 rounded shadow-2xs">
            ESC
          </kbd>
        </div>

        {/* Results Metadata Bar */}
        <div className="px-4 py-1.5 bg-slate-100/70 border-b border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>
            {query.trim() 
              ? `Found ${results.length} match${results.length === 1 ? '' : 'es'} for "${query.trim()}"`
              : 'Quick Navigation & Actions (Type to search entire site UI)'}
          </span>
          <span className="hidden sm:inline text-slate-400">
            {results.length > 0 ? `${selectedIndex + 1} of ${results.length}` : '0 results'}
          </span>
        </div>

        {/* Results List */}
        <div 
          ref={resultsContainerRef}
          className="flex-1 overflow-y-auto p-2 divide-y divide-slate-100"
        >
          {results.length === 0 ? (
            <div className="py-12 px-4 text-center font-sans">
              <p className="text-sm font-semibold text-slate-700">No matching content found for "{query}"</p>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Try searching for specific security tools (CrowdStrike, FortiGate, Automox, Netskope), concepts (regex, detection, DLP), or company names (Magic Software, AdoSolve).
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item, idx) => {
                const config = CATEGORY_CONFIG[item.category] || CATEGORY_CONFIG.Navigation;
                let IconComponent = config.icon;

                // Specialized icon overrides for social/external items
                if (item.id === 'ext-linkedin') IconComponent = LinkedinIcon;
                else if (item.id === 'ext-github') IconComponent = GithubIcon;
                else if (item.id === 'act-copy-email') IconComponent = copiedEmail ? Check : Copy;
                else if (item.id === 'ext-credly') IconComponent = ExternalLink;

                const isSelected = idx === selectedIndex;
                const excerpt = getExcerpt(item.snippet, query, 150);

                return (
                  <button
                    key={item.id}
                    data-index={idx}
                    onClick={() => executeItem(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-blue-50/90 text-blue-950 border border-blue-300/80 shadow-xs'
                        : 'text-slate-800 hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    {/* Category Icon Badge */}
                    <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${isSelected ? 'bg-blue-600 text-white' : `${config.iconBg} ${config.iconColor}`}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Content Details */}
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm leading-tight text-slate-900">
                          <HighlightText text={item.title} query={query} />
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border uppercase tracking-wider ${config.badgeClass}`}>
                          {item.category}
                        </span>
                      </div>

                      {item.subtitle && (
                        <div className="text-xs text-slate-500 font-medium mt-0.5 truncate">
                          <HighlightText text={item.subtitle} query={query} />
                        </div>
                      )}

                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        <HighlightText text={excerpt} query={query} />
                      </p>
                    </div>

                    {/* Navigation / Selection Action Indicator */}
                    <div className="shrink-0 self-center pl-2">
                      {isSelected ? (
                        <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-100/60 px-2 py-1 rounded-md">
                          <span>Open</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <span className="text-[11px] font-mono text-slate-400">
                          {item.sectionHash ? item.sectionHash : 'action'}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-slate-200 bg-slate-50 text-[11px] font-mono text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>Use <kbd className="text-slate-700 font-medium">↑</kbd><kbd className="text-slate-700 font-medium">↓</kbd> to navigate</span>
            <span><kbd className="text-slate-700 font-medium">↵</kbd> to select</span>
            <span><kbd className="text-slate-700 font-medium">ESC</kbd> to exit</span>
          </div>
          <span className="text-blue-700 font-medium">Full UI Search & Navigator</span>
        </div>
      </div>
    </div>
  );
};
