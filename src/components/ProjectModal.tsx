import React from 'react';
import { X, AlertCircle, CheckCircle2, ArrowRight, Layers, Workflow, Lock } from 'lucide-react';
import type { ProjectItem } from '../data/profile';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl my-8 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-left"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wide font-semibold">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500">
                // {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {project.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7 max-h-[75vh] overflow-y-auto">
          
          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-bold">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Problem Statement</span>
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {project.detail.problem}
            </p>
          </div>

          {/* Approach & Design */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-bold">
              <Workflow className="w-4 h-4 text-blue-600" />
              <span>Engineering Approach</span>
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.detail.approach}
            </p>
          </div>

          {/* Architecture Visual Diagram */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-bold">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>System Architecture Flow</span>
            </h4>
            
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-center">
                {project.detail.architecture.split('->').map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="p-3 rounded-lg bg-white border border-slate-200 flex-1 flex items-center justify-center text-xs font-mono shadow-xs font-medium text-slate-800">
                      <span>{step.trim()}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="text-blue-600 flex items-center justify-center transform rotate-90 md:rotate-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Security Considerations */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-bold">
              <Lock className="w-4 h-4 text-indigo-600" />
              <span>Security & Control Considerations</span>
            </h4>
            <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-950 leading-relaxed font-mono">
              {project.detail.securityConsiderations}
            </div>
          </div>

          {/* Verified Outcome */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Verified Engineering Outcome</span>
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {project.detail.outcome}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500">
            SEC_PROJ // {project.id}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 text-xs font-medium transition-colors shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-xs"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
