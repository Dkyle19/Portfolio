import React from 'react';
import { Cpu, Layout, Server, Database, Wrench, CheckCircle2, Sparkles, Code2, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      color: "from-cyan-500/20 to-blue-500/10",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/40",
      items: skills.frontend
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "from-purple-500/20 to-indigo-500/10",
      accent: "text-purple-400",
      border: "hover:border-purple-500/40",
      items: skills.backend
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/40",
      items: skills.databasesCloud
    },
    {
      title: "Tools & Developer Ecosystem",
      icon: Wrench,
      color: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-400",
      border: "hover:border-amber-500/40",
      items: skills.toolsDesign
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-3"></div>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            A comprehensive matrix of programming languages, modern frameworks, cloud architectures, and design tools applied across production systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className={`glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 ${cat.border} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} border border-white/10 ${cat.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">
                        {cat.items.length} Technologies Mastered
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills / Badges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl bg-slate-900/60 border transition-all duration-200 flex items-center justify-between group ${
                          skill.highlight
                            ? 'border-white/15 hover:border-cyan-500/40 bg-slate-900/90'
                            : 'border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex flex-col items-end">
                          <span className="text-[10px] font-mono text-cyan-300 font-medium">
                            {skill.level}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {skill.experience}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Continuous Learning / Next Tech Focus */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>Continuous Learning & Exploring Next</span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full">Active Focus</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Expanding full-stack engineering proficiency in Next.js 15 App Router, TypeScript architectures, Docker containerization, and automated CI/CD deployment pipelines.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            {['Next.js 15', 'TypeScript', 'Docker', 'CI/CD Pipelines'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-cyan-300 font-mono text-xs font-semibold">
                ⚡ {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}