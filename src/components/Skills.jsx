import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Wrench, Sparkles, ChevronLeft, ChevronRight, Layers, Flame } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechLogo } from './TechLogos';

export default function Skills() {
  const { skills, coreWorkSkills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Flatten all skills into list
  const allSkillsList = [
    ...skills.frontend.map(s => ({ ...s, category: 'Frontend', catColor: 'cyan' })),
    ...skills.backend.map(s => ({ ...s, category: 'Backend', catColor: 'purple' })),
    ...skills.databasesCloud.map(s => ({ ...s, category: 'Databases & Cloud', catColor: 'emerald' })),
    ...skills.toolsDesign.map(s => ({ ...s, category: 'Tools & DevOps', catColor: 'amber' }))
  ];

  // Split into two rows for the marquee
  const row1Skills = allSkillsList.slice(0, Math.ceil(allSkillsList.length / 2));
  const row2Skills = allSkillsList.slice(Math.ceil(allSkillsList.length / 2));

  // Category Tabs
  const categoryTabs = [
    { id: 'all', label: 'All Technologies', count: allSkillsList.length, icon: Layers },
    { id: 'frontend', label: 'Frontend', count: skills.frontend.length, icon: Layout },
    { id: 'backend', label: 'Backend & APIs', count: skills.backend.length, icon: Server },
    { id: 'databasesCloud', label: 'Databases & Cloud', count: skills.databasesCloud.length, icon: Database },
    { id: 'toolsDesign', label: 'Tools & DevOps', count: skills.toolsDesign.length, icon: Wrench },
  ];

  // Filtered skills for grid view
  const currentCategorySkills = activeCategory === 'all'
    ? allSkillsList
    : (skills[activeCategory] || []).map(s => ({
        ...s,
        category: categoryTabs.find(t => t.id === activeCategory)?.label || '',
        catColor: activeCategory === 'frontend' ? 'cyan' : activeCategory === 'backend' ? 'purple' : activeCategory === 'databasesCloud' ? 'emerald' : 'amber'
      }));

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? Math.max(0, currentCategorySkills.length - 4) : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev >= currentCategorySkills.length - 4 ? 0 : prev + 1));
  };

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
            Interactive logo carousel showcasing full-stack engineering proficiency, database architectures, cloud tools, and modern frameworks.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. INFINITE LOGO MARQUEE CAROUSEL (Double Stream Flow) */}
        {/* ========================================================================= */}
        <div className="mb-14 space-y-4">
          
          {/* Row 1: Left to Right Marquee */}
          <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee-left flex gap-4">
              {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group cursor-default shadow-lg shadow-black/20 flex-shrink-0"
                >
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-cyan-400/40 transition-transform flex items-center justify-center">
                    <TechLogo name={skill.name} className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          PRO
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <span className="text-cyan-400 font-semibold">{skill.level}</span>
                      <span>•</span>
                      <span>{skill.experience}</span>
                    </div>
                  </div>
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
                  className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group cursor-default shadow-lg shadow-black/20 flex-shrink-0"
                >
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-purple-400/40 transition-transform flex items-center justify-center">
                    <TechLogo name={skill.name} className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          CORE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <span className="text-purple-400 font-semibold">{skill.level}</span>
                      <span>•</span>
                      <span>{skill.experience}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. INTERACTIVE CATEGORY CAROUSEL & LOGO MATRIX */}
        {/* ========================================================================= */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
          
          {/* Category Filter Pills & Carousel Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            
            {/* Category Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categoryTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveCategory(tab.id);
                      setCarouselIndex(0);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 border border-cyan-400/30'
                        : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span>{tab.label}</span>
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isActive ? 'bg-black/30 text-cyan-200' : 'bg-white/5 text-slate-400'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Count Indicator */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/5">
              <Flame className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Hover cards to pause marquee</span>
            </div>

          </div>

          {/* Interactive Skills Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentCategorySkills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex items-center gap-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30"
              >
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 group-hover:scale-105 transition-all flex items-center justify-center flex-shrink-0">
                  <TechLogo name={skill.name} className="w-8 h-8" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {skill.name}
                    </h4>
                    {skill.highlight && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] font-mono font-semibold text-cyan-400">
                      {skill.level}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-[11px] text-slate-400">
                      {skill.experience}
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500 group-hover:from-cyan-400 group-hover:to-indigo-400"
                      style={{
                        width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : skill.level === 'Proficient' ? '75%' : '65%'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Professional Work Competencies Badges */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Core Engineering Competencies</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {coreWorkSkills.map((cSkill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-medium text-slate-200 bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:text-white transition-colors"
                >
                  ✓ {cSkill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. CONTINUOUS LEARNING / NEXT TECH FOCUS */}
        {/* ========================================================================= */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
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