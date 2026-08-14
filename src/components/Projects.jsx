import React, { useState } from 'react';
import { Eye, FolderCode } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ['All', 'Android Apps', 'Enterprise Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => {
        if (selectedCategory === 'Android Apps') return p.type.toLowerCase().includes('mobile') || p.type.toLowerCase().includes('android') || p.techStack.includes('Android');
        if (selectedCategory === 'Enterprise Systems') return p.category.toLowerCase().includes('enterprise') || p.category.toLowerCase().includes('internship') || p.techStack.includes('AWS') || p.techStack.includes('Airtable');
        return true;
      });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient spotlight */}
      <div className="ambient-spotlight bg-cyan-500/10 w-[600px] h-[600px] -top-20 -right-20" />
      <div className="ambient-spotlight bg-purple-500/10 w-[500px] h-[500px] bottom-10 -left-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            <FolderCode className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-3"></div>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            Production-grade systems, capstone thesis platforms, and commercial web applications showcasing full-stack proficiency, database modeling, and modern UI architectures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Thumbnail Container with Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-slate-950/85 border border-cyan-500/40 rounded-full backdrop-blur-md shadow-md">
                    {project.badge}
                  </span>
                </div>

                {/* Quick Screenshot Indicator Overlay */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Gallery</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1.5">
                    <span>{project.type}</span>
                    <span>{project.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-cyan-400/90 font-medium mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-4 pt-3 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-1 text-[11px] font-mono bg-cyan-500/10 text-cyan-300 rounded-md">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2">
                    <button
                      id={`view-details-${project.id}-btn`}
                      onClick={() => setActiveProjectModal(project)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800/80 hover:bg-cyan-600 border border-white/10 hover:border-cyan-400 transition-all duration-300 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details & Screenshots</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal Dialog */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </section>
  );
}