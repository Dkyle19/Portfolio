import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-3"></div>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            Hands-on professional engineering experience across university information systems and commercial property management platforms.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Top Row: Role, Company & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 font-medium text-sm mt-1">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Key Achievements Bullet Points */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                  Key Responsibilities & Deliverables
                </h4>
                {exp.achievements.map((item, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Used Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
                <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  Stack:
                </span>
                {exp.techUsed.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}