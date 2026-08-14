import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, CheckCircle2, Layers, Tag, Shield, Calendar, UserCheck, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const screenshots = project.screenshots || [];
  const currentImage = screenshots[activeImageIndex] || { url: project.thumbnail, caption: project.title };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-modal"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        id="project-modal-card"
        className="relative w-full max-w-5xl bg-slate-950/95 border border-white/15 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                  {project.badge || project.category}
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-1">{project.subtitle}</p>
            </div>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 border border-white/5 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-7">
          
          {/* Screenshot Showcase & Carousel */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 font-mono">
                <ImageIcon className="w-4 h-4" />
                <span>SYSTEM SCREENSHOTS & UI GALLERY</span>
              </div>
              {screenshots.length > 0 && (
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-white/10">
                  {activeImageIndex + 1} / {screenshots.length}
                </span>
              )}
            </div>

            {/* Main Carousel Display */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10 group shadow-inner">
              <img
                src={currentImage.url}
                alt={currentImage.caption || project.title}
                className="w-full h-full object-contain bg-slate-950"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = project.thumbnail;
                }}
              />

              {/* Navigation Arrows */}
              {screenshots.length > 1 && (
                <>
                  <button
                    id="carousel-prev-btn"
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 hover:bg-cyan-500 text-white border border-white/15 hover:border-cyan-400 transition-all duration-200 shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    id="carousel-next-btn"
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 hover:bg-cyan-500 text-white border border-white/15 hover:border-cyan-400 transition-all duration-200 shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image Caption Overlay */}
              {currentImage.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-8 text-xs sm:text-sm text-slate-200 backdrop-blur-[2px]">
                  <p className="font-medium">{currentImage.caption}</p>
                </div>
              )}
            </div>

            {/* Thumbnail Navigation Strip */}
            {screenshots.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                {screenshots.map((img, idx) => (
                  <button
                    key={idx}
                    id={`thumbnail-${idx}`}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative flex-shrink-0 w-20 sm:w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      activeImageIndex === idx
                        ? 'border-cyan-400 ring-2 ring-cyan-400/30 scale-105 opacity-100'
                        : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Meta Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/60 p-4 rounded-xl border border-white/10 text-xs">
            <div>
              <span className="text-slate-400 flex items-center gap-1.5 mb-1">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                Role
              </span>
              <span className="font-semibold text-slate-100">{project.role}</span>
            </div>

            <div>
              <span className="text-slate-400 flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                Timeline
              </span>
              <span className="font-semibold text-slate-100">{project.period}</span>
            </div>

            <div>
              <span className="text-slate-400 flex items-center gap-1.5 mb-1">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                Type
              </span>
              <span className="font-semibold text-slate-100">{project.type}</span>
            </div>

            <div>
              <span className="text-slate-400 flex items-center gap-1.5 mb-1">
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                Category
              </span>
              <span className="font-semibold text-slate-100">{project.category}</span>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              System Overview & Architecture
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Feature Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Key Engineered Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-white/5 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* External Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors shadow-md shadow-cyan-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}