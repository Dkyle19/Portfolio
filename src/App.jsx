import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden font-sans">
      
      {/* ========================================================================= */}
      {/* 🌌 FIXED FULL-STACK ARCHITECTURE GLOBAL BACKGROUND (Persistent While Scrolling) */}
      {/* ========================================================================= */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none mix-blend-screen z-0 transition-opacity duration-700"
        style={{ backgroundImage: `url('/assets/backgrounds/bg-option-1-mesh.png')` }}
      />
      
      {/* Global Ambient Glow Overlays & Subtle Grid Accent */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.18),rgba(255,255,255,0))] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_50%,rgba(139,92,246,0.12),rgba(255,255,255,0))] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_80%,rgba(16,185,129,0.10),rgba(255,255,255,0))] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[#07090e]/50 pointer-events-none z-0 backdrop-blur-[1px]" />

      {/* Relative container for content layers */}
      <div className="relative z-10">
        {/* Sticky Navigation Bar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Global Interactive Resume & CV Hub Modal */}
      {isResumeModalOpen && (
        <ResumeModal onClose={() => setIsResumeModalOpen(false)} />
      )}
    </div>
  );
}