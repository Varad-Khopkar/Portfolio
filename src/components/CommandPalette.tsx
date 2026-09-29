import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Terminal, 
  FileDown, 
  Mail, 
  ArrowRight,
  Shield, 
  Layers, 
  Briefcase, 
  Award, 
  Users,
  Copy,
  Check
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { LinkedinIcon, GithubIcon } from './Icons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'External';
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigateTo = (hash: string) => {
    handleClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      handleClose();
    }, 1200);
  };

  const handleClose = React.useCallback(() => {
    setQuery('');
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  const commands: CommandItem[] = [
    {
      id: 'nav-projects',
      title: 'Go to Projects',
      category: 'Navigation',
      icon: Layers,
      action: () => navigateTo('#projects'),
    },
    {
      id: 'nav-experience',
      title: 'Go to Experience',
      category: 'Navigation',
      icon: Briefcase,
      action: () => navigateTo('#experience'),
    },
    {
      id: 'nav-stack',
      title: 'Go to Security Stack',
      category: 'Navigation',
      icon: Shield,
      action: () => navigateTo('#security-stack'),
    },
    {
      id: 'nav-education',
      title: 'Go to Education',
      category: 'Navigation',
      icon: Award,
      action: () => navigateTo('#education'),
    },
    {
      id: 'nav-about',
      title: 'Go to About',
      category: 'Navigation',
      icon: Terminal,
      action: () => navigateTo('#about'),
    },
    {
      id: 'nav-certs',
      title: 'Go to Certifications',
      category: 'Navigation',
      icon: Award,
      action: () => navigateTo('#certifications'),
    },
    {
      id: 'nav-leadership',
      title: 'Go to Leadership & Community',
      category: 'Navigation',
      icon: Users,
      action: () => navigateTo('#leadership'),
    },
    {
      id: 'nav-contact',
      title: 'Contact Varad',
      category: 'Navigation',
      icon: Mail,
      action: () => navigateTo('#contact'),
    },
    {
      id: 'act-resume',
      title: 'Download Resume',
      category: 'Actions',
      icon: FileDown,
      action: () => {
        window.open(PROFILE_DATA.socials.resumeUrl, '_blank');
        handleClose();
      },
    },
    {
      id: 'act-copy-email',
      title: copiedEmail ? 'Email Copied!' : `Copy Email (${PROFILE_DATA.socials.email})`,
      category: 'Actions',
      icon: copiedEmail ? Check : Copy,
      action: copyEmail,
    },
    {
      id: 'ext-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External',
      icon: LinkedinIcon,
      action: () => {
        window.open(PROFILE_DATA.socials.linkedin, '_blank');
        handleClose();
      },
    },
    {
      id: 'ext-github',
      title: 'Open GitHub Profile',
      category: 'External',
      icon: GithubIcon,
      action: () => {
        window.open(PROFILE_DATA.socials.github, '_blank');
        handleClose();
      },
    },
  ];

  const filtered = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          handleClose();
        } else {
          const evt = new CustomEvent('open-command-palette');
          window.dispatchEvent(evt);
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, handleClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-900/50 backdrop-blur-xs"
      onClick={handleClose}
    >
      <div 
        className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or section..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-slate-500 bg-white border border-slate-300 rounded shadow-2xs">
            ESC
          </kbd>
        </div>

        {/* Command list */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500 font-sans">
              No matching commands found.
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((cmd, idx) => {
                const Icon = cmd.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => cmd.action()}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
                      isSelected
                        ? 'bg-blue-50 text-blue-900 border-l-2 border-blue-600 font-medium'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-md ${isSelected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{cmd.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {cmd.category}
                      </span>
                      {isSelected && <ArrowRight className="w-3.5 h-3.5 text-blue-600" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-slate-200 bg-slate-50 text-[11px] font-mono text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>Use <kbd className="text-slate-700 font-medium">↑</kbd><kbd className="text-slate-700 font-medium">↓</kbd> to navigate</span>
            <span><kbd className="text-slate-700 font-medium">↵</kbd> to select</span>
          </div>
          <span className="text-blue-700 font-medium">Quick Navigator</span>
        </div>
      </div>
    </div>
  );
};
