import React from 'react';
import { ArrowUp, Code2, Mail, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-950/80 backdrop-blur-2xl border-t border-cyan-500/20 py-12 text-slate-400 overflow-hidden">
      
      {/* Top Cyber Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 via-indigo-500/50 to-transparent pointer-events-none" />

      {/* Footer Subtle Matching Background Texture Cover */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url('/assets/backgrounds/header-footer-cover.png')` }}
      />

      {/* Ambient Spotlight Glows */}
      <div className="ambient-spotlight bg-cyan-500/10 w-[350px] h-[350px] -bottom-20 -left-20 pointer-events-none" />
      <div className="ambient-spotlight bg-purple-600/10 w-[350px] h-[350px] -bottom-20 -right-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] flex items-center justify-center shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Computer Science Graduate ('25) • Full-Stack Developer based in Pangasinan, Philippines.
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all duration-200 shadow-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all duration-200 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all duration-200 shadow-sm"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold transition-all duration-200 ml-2 shadow-sm hover:shadow-cyan-500/20"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Daryl Kyle Santos Bristol. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Built with React, Tailwind CSS & Vite</span>
          </p>
        </div>

      </div>
    </footer>
  );
}