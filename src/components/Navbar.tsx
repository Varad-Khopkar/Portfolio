import React, { useState, useEffect } from 'react';
import { Shield, FileDown, Menu, X, Command, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Security Stack', href: '#security-stack' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:border-blue-300 transition-colors">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <span className="font-semibold text-slate-900 tracking-tight text-base sm:text-lg block leading-tight">
                {PROFILE_DATA.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                <span className="text-blue-600 font-medium">Cybersecurity Engineer</span>
                <span className="text-slate-300">|</span>
                <span>Enterprise Defense</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors text-xs xl:text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-slate-600 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-md transition-colors"
              title="Open Command Palette (Ctrl+K or Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-white text-slate-500 border border-slate-300 rounded shadow-xs">
                Ctrl K
              </kbd>
            </button>

            {/* Resume Button */}
            <a
              href={PROFILE_DATA.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md shadow-sm transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-md"
              aria-label="Open Command Palette"
            >
              <Command className="w-4 h-4 text-slate-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors font-medium text-left"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={PROFILE_DATA.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-md shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Complete Resume</span>
            </a>
            <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
              <span>Quick Commands</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="text-blue-600 font-medium flex items-center gap-1"
              >
                <span>Launch Palette</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
