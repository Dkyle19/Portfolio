import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl shadow-black/60 py-3.5'
          : 'bg-gradient-to-b from-[#07090e]/80 via-[#07090e]/40 to-transparent backdrop-blur-md py-5 border-b border-white/5'
      }`}
    >
      {/* Top Cyber Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 via-indigo-500/50 to-transparent pointer-events-none" />

      {/* Header Subtle Matching Background Texture Cover */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url('/assets/backgrounds/header-footer-cover.png')` }}
      />

      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Daryl Bristol
              </span>
              <span className="text-xs font-mono text-cyan-400/80 -mt-1 tracking-wider">
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-cyan-500/20 backdrop-blur-md shadow-inner shadow-cyan-500/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="navbar-resume-btn"
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300 shadow-sm hover:shadow-cyan-500/20"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>

            <a
              id="navbar-hire-btn"
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg transition-all duration-300 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              id="mobile-resume-quick-btn"
              onClick={onOpenResumeModal}
              className="p-2 text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-xs flex items-center gap-1 font-medium"
            >
              <FileText className="w-4 h-4" />
              <span>CV</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 pt-3 pb-6 animate-modal">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-lg"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume & CV</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-md shadow-cyan-500/25"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}