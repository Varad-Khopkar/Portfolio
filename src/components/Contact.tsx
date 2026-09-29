import React, { useState } from 'react';
import { Mail, Send, Copy, Check, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { LinkedinIcon, GithubIcon } from './Icons';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errs.name = 'Please enter your name.';
    if (!email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!message.trim() || message.length < 10) {
      errs.message = 'Please include a message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Security Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${PROFILE_DATA.socials.email}?subject=${subject}&body=${body}`;

    setSubmittedStatus('Prepared email draft in your default client! You can also reach out directly via LinkedIn.');
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/40 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT INQUIRIES & RECRUITMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Let's talk security.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            I'm open to cybersecurity engineering opportunities, security projects and conversations around defensive security, enterprise security and security engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left items-start">
          
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="rounded-xl bg-white border border-slate-200 p-6 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-mono text-blue-600 hover:text-blue-800 font-semibold"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PROFILE_DATA.socials.email}`}
                className="text-base sm:text-lg font-mono font-semibold text-slate-900 hover:text-blue-600 transition-colors block truncate"
              >
                {PROFILE_DATA.socials.email}
              </a>
              <p className="text-xs text-slate-500">
                Preferred for interview scheduling, technical inquiries, and project discussions.
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400">CONNECT</span>
                  <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">LinkedIn</div>
                  <div className="text-[11px] text-slate-500 font-mono">Professional Profile</div>
                </div>
              </a>

              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400">CODE</span>
                  <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">GitHub</div>
                  <div className="text-[11px] text-slate-500 font-mono">Repositories & Labs</div>
                </div>
              </a>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs font-mono text-emerald-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse flex-shrink-0" />
              <span>Available for engineering roles across India & remote.</span>
            </div>

          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in the details below to dispatch an inquiry directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Inquire about an open cybersecurity engineering role, technical collaboration, or defensive project..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors ${
                      errors.message ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Draft Message Dispatch</span>
                </button>

                {submittedStatus && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{submittedStatus}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
