import React from 'react';
import { ArrowRight, FileText, Sparkles, CheckCircle2, Terminal, Code2, Database, ShieldCheck, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const { personal, stats } = portfolioData;

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Glow Elements */}
      <div className="ambient-spotlight bg-cyan-500/20 w-[500px] h-[500px] -top-32 -left-32 animate-pulse-glow" />
      <div className="ambient-spotlight bg-purple-600/15 w-[600px] h-[600px] top-1/4 -right-40 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="ambient-spotlight bg-emerald-500/10 w-[450px] h-[450px] -bottom-20 left-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-medium text-slate-200 backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-cyan-300 font-semibold">Available for Opportunities</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">CS Graduate '25</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br className="hidden sm:block" />
                <span className="text-gradient">Daryl Kyle S. Bristol</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-cyan-400/90 font-mono">
                Full-Stack Developer
              </p>
            </div>

            {/* Tagline / Narrative */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Designing and engineering high-performance web systems, resilient cloud backends, and responsive mobile solutions. Passionate about transforming complex workflows into clean, intuitive digital products.
            </p>

            {/* Location & Quick Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Urdaneta City, Pangasinan, PH</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-white/5">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span>React • Laravel • .NET Core • Kotlin</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-view-cv-btn"
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume & CV</span>
              </button>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                <span>Get In Touch</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual & Interactive Avatar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500 group-hover:duration-200 animate-pulse-glow" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-slate-950/90 border border-white/10 p-6 backdrop-blur-2xl shadow-2xl flex flex-col items-center text-center">
                
                {/* Avatar with Circular Gradient Border */}
                <div className="relative w-44 h-44 mb-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 p-1 animate-float">
                    <div className="w-full h-full rounded-full bg-slate-950 p-1 overflow-hidden">
                      <img
                        src={personal.avatar}
                        alt={personal.name}
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Floating Badge: Degree */}
                  <div className="absolute -bottom-2 -right-2 bg-slate-900/90 border border-cyan-500/40 rounded-full px-2.5 py-1 text-[11px] font-bold text-cyan-300 shadow-md backdrop-blur-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>BSCS '25</span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {personal.name}
                </h3>
                <p className="text-xs text-cyan-400 font-mono mt-1">
                  Full-Stack Software Engineer
                </p>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                  PHINMA UPANG College Urdaneta • Graduating Class of 2025
                </p>

                {/* Quick Skills Mini-Badges */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-4 pt-4 border-t border-white/10 w-full">
                  {['React', 'Tailwind', 'Laravel', 'C# / .NET', 'AWS'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Metric Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl flex flex-col items-center text-center group hover:border-cyan-500/30 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-105 transition-transform">
                {item.value}
              </span>
              <span className="text-xs font-semibold text-slate-200 mt-1">
                {item.label}
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                {item.sublabel}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}