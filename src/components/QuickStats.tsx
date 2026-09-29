import React from 'react';
import { Crosshair, Shield, Network, Database } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const QuickStats: React.FC = () => {
  const statIcons = [Crosshair, Shield, Network, Database];

  return (
    <section className="relative z-20 -mt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROFILE_DATA.quickStats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className="group relative rounded-xl bg-white border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all text-left shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl sm:text-2xl font-bold font-sans text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-mono font-semibold text-slate-800 uppercase tracking-wide mb-1">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-500 leading-normal">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
