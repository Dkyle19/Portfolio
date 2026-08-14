import React, { useState, useEffect } from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle2, User, Briefcase, GraduationCap, Award, Sparkles, FolderDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('summary');
  const { personal, experience, education, skills, projects, certifications } = portfolioData;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-modal"
      onClick={onClose}
    >
      <div
        id="resume-modal-card"
        className="relative w-full max-w-4xl bg-slate-950/95 border border-white/15 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Curriculum Vitae & Resume Hub
              </h3>
              <p className="text-xs text-slate-400">
                {personal.name} • {personal.role}
              </p>
            </div>
          </div>

          <button
            id="close-resume-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="px-6 pt-4 pb-2 border-b border-white/5 bg-slate-900/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              id="resume-tab-summary-btn"
              onClick={() => setActiveTab('summary')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeTab === 'summary'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Interactive Summary
            </button>
            <button
              id="resume-tab-download-btn"
              onClick={() => setActiveTab('download')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeTab === 'download'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              Download PDF Files
            </button>
          </div>

          {/* Quick PDF Triggers */}
          <div className="flex items-center gap-2">
            <a
              id="download-cv-quick-btn"
              href={personal.cvPath}
              download="Daryl_Kyle_Bristol_CV.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Full CV</span>
            </a>
            <a
              id="download-resume-quick-btn"
              href={personal.resumePath}
              download="Daryl_Kyle_Bristol_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Resume</span>
            </a>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {activeTab === 'summary' ? (
            <div className="space-y-6">
              
              {/* Executive Summary */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Professional Profile
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {personal.bio}
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
                  <span>📍 {personal.location}</span>
                  <span>📧 {personal.email}</span>
                  <span>📞 {personal.phone}</span>
                </div>
              </div>

              {/* Work Experience */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Work Experience
                </h4>
                <div className="space-y-3">
                  {experience.map((exp) => (
                    <div key={exp.id} className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                      <div className="flex flex-wrap justify-between items-center gap-1 mb-1">
                        <span className="font-bold text-white text-sm">{exp.role}</span>
                        <span className="text-xs font-mono text-cyan-300">{exp.period}</span>
                      </div>
                      <p className="text-xs font-medium text-slate-300 mb-2">{exp.company} • {exp.location}</p>
                      <ul className="space-y-1 text-xs text-slate-400 list-disc list-inside">
                        {exp.achievements.slice(0, 2).map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Projects */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Software Projects
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projects.map((proj) => (
                    <div key={proj.id} className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col justify-between">
                      <div>
                        <span className="font-bold text-white text-sm">{proj.title}</span>
                        <p className="text-xs text-cyan-300 font-mono mt-0.5">{proj.type}</p>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2">{proj.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-white/5">
                        {proj.techStack.slice(0, 3).map((t) => (
                          <span key={t} className="px-2 py-0.5 text-[10px] font-mono bg-white/5 text-slate-300 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </h4>
                  {education.map((edu, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 text-xs">
                      <p className="font-bold text-white">{edu.degree}</p>
                      <p className="text-slate-400 mt-0.5">{edu.institution} ({edu.period})</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Certifications
                  </h4>
                  {certifications.slice(0, 2).map((cert, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 text-xs">
                      <p className="font-bold text-white">{cert.title}</p>
                      <p className="text-slate-400 mt-0.5">{cert.issuer} • {cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* Download Tab */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
              
              {/* Full CV Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between items-center text-center space-y-4 hover:border-cyan-500/40 transition-colors">
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <FileText className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Full Curriculum Vitae (CV)</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Comprehensive multi-page academic & professional dossier detailing all coursework, thesis platforms, and employment history.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-3 text-xs font-mono text-cyan-300">
                    <span>PDF Format</span>
                    <span>•</span>
                    <span>Full Detail</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full pt-2">
                  <a
                    id="download-cv-full-card-btn"
                    href={personal.cvPath}
                    download="Daryl_Kyle_Bristol_CV.pdf"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/25"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV.pdf</span>
                  </a>
                  <a
                    href={personal.cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Browser Tab</span>
                  </a>
                </div>
              </div>

              {/* 1-Page Resume Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between items-center text-center space-y-4 hover:border-purple-500/40 transition-colors">
                <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <FolderDown className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Targeted 1-Page Resume</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Streamlined summary tailored for recruiter screening, highlighting core tech stack, recent roles, and contact channels.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-3 text-xs font-mono text-purple-300">
                    <span>PDF Format</span>
                    <span>•</span>
                    <span>Concise 1-Page</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full pt-2">
                  <a
                    id="download-resume-full-card-btn"
                    href={personal.resumePath}
                    download="Daryl_Kyle_Bristol_Resume.pdf"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 transition-all shadow-md shadow-purple-500/25"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume.pdf</span>
                  </a>
                  <a
                    href={personal.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Browser Tab</span>
                  </a>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-slate-900/80 backdrop-blur-md flex items-center justify-between text-xs text-slate-400">
          <span>Ready for hiring inquiries & technical interviews</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}