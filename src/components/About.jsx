import React from 'react';
import { User, Award, GraduationCap, Building2, Code2, Cpu, CheckCircle, Sparkles, Layers, ShieldCheck, Database, Layout } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Layout,
      title: "Frontend Engineering",
      description: "Building responsive, accessible, and high-performance React and Tailwind CSS client interfaces backed by modern component architectures.",
      color: "from-cyan-500/20 to-blue-500/10",
      borderColor: "group-hover:border-cyan-500/40",
      iconColor: "text-cyan-400"
    },
    {
      icon: Cpu,
      title: "Robust Full-Stack Backends",
      description: "Architecting secure RESTful APIs, data validation layers, and role-based access systems using C# / .NET Core, Laravel (PHP), and Kotlin.",
      color: "from-purple-500/20 to-indigo-500/10",
      borderColor: "group-hover:border-purple-500/40",
      iconColor: "text-purple-400"
    },
    {
      icon: Database,
      title: "Relational Schemas & Cloud Storage",
      description: "Designing optimized SQL structures in PostgreSQL and MariaDB, paired with AWS S3 asset pipelines and Firebase real-time sync.",
      color: "from-emerald-500/20 to-teal-500/10",
      borderColor: "group-hover:border-emerald-500/40",
      iconColor: "text-emerald-400"
    },
    {
      icon: ShieldCheck,
      title: "Production Discipline & Agile Delivery",
      description: "Experienced in git workflows, team sprint collaboration, code reviews, and building maintainable real-world software.",
      color: "from-amber-500/20 to-orange-500/10",
      borderColor: "group-hover:border-amber-500/40",
      iconColor: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-3"></div>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            A versatile software developer committed to delivering modern digital systems with clean code and exceptional user design.
          </p>
        </div>

        {/* Narrative & Quick Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Text */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" />
              <span>Full-Stack Software Engineer</span>
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a Bachelor of Science in Computer Science graduate ('25) from PHINMA UPANG College Urdaneta with <strong className="text-cyan-300 font-semibold">7 months of professional experience</strong> as a Full-Stack Developer at <strong className="text-white font-semibold">Urdaneta City University (UCU) MIS</strong>. Throughout my career and academic engagements, I have focused on building reliable administrative portals, scalable backend architectures, and human-centered user interfaces.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In addition to developing university-wide enrollment, billing, and student record modules, I completed an enterprise internship at <strong className="text-white font-semibold">Cura Property Management Corp.</strong> and engineered two major capstone systems: <strong className="text-cyan-300 font-semibold">Leo PropertEase</strong> (Property Leasing Platform) and <strong className="text-purple-300 font-semibold">Barangay eConn</strong> (Emergency Dispatch Mobile System).
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Responsive Design First</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Clean Architecture & REST APIs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Optimized SQL Databases</span>
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Key Details
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Location</span>
                  <span className="font-medium text-white text-right">Pangasinan, Philippines</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Education</span>
                  <span className="font-medium text-white text-right">BS Computer Science ('25)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Institution</span>
                  <span className="font-medium text-cyan-300 text-right">PHINMA UPang</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Primary Focus</span>
                  <span className="font-medium text-white text-right">Full-Stack Development</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Status</span>
                  <span className="font-semibold text-emerald-400 text-right flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Ready for Hire
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`glass-panel p-6 rounded-2xl border border-white/10 group transition-all duration-300 hover:-translate-y-1 ${pillar.borderColor} flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 border border-white/10`}>
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}