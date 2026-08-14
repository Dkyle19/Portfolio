import React from 'react';
import { Cpu, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechLogo } from './TechLogos';

export default function Skills() {
  const { skills, coreWorkSkills } = portfolioData;

  // Flatten all skills into list
  const allSkillsList = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.databasesCloud,
    ...skills.toolsDesign
  ];

  // Split into two rows for the marquee
  const row1Skills = allSkillsList.slice(0, Math.ceil(allSkillsList.length / 2));
  const row2Skills = allSkillsList.slice(Math.ceil(allSkillsList.length / 2));

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Ambient background glows */}
      <div className="ambient-spotlight bg-cyan-500/10 w-[500px] h-[500px] -top-24 -left-24" />
      <div className="ambient-spotlight bg-purple-500/10 w-[500px] h-[500px] -bottom-24 -right-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-3"></div>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            Interactive logo carousel showcasing full-stack engineering tools, database architectures, cloud infrastructure, and modern frameworks.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. INFINITE LOGO MARQUEE CAROUSEL (Double Stream Flow) */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          
          {/* Row 1: Left to Right Marquee */}
          <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee-left flex gap-4">
              {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group cursor-default shadow-lg shadow-black/20 flex-shrink-0"
                >
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-cyan-400/40 transition-transform flex items-center justify-center">
                    <TechLogo name={skill.name} className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left Marquee */}
          <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee-right flex gap-4">
              {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group cursor-default shadow-lg shadow-black/20 flex-shrink-0"
                >
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-purple-400/40 transition-transform flex items-center justify-center">
                    <TechLogo name={skill.name} className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-slate-100 group-hover:text-purple-300 transition-colors whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Core Professional Work Competencies Badges */}
        <div className="mt-12 glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Engineering Competencies</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {coreWorkSkills.map((cSkill, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-200 bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:text-white transition-colors"
              >
                ✓ {cSkill}
              </span>
            ))}
          </div>
        </div>

        {/* CONTINUOUS LEARNING / NEXT TECH FOCUS */}
        <div className="mt-6 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>Continuous Learning & Leveling Up</span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full">Active Focus</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Expanding full-stack engineering proficiency in Next.js 15 App Router, TypeScript architectures, Docker containerization, and automated CI/CD deployment pipelines.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            {['Next.js 15', 'TypeScript', 'Docker', 'CI/CD Pipelines'].map((tag) => (
              <div key={tag} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-cyan-300 font-mono text-xs font-semibold">
                <TechLogo name={tag} className="w-4 h-4" />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}