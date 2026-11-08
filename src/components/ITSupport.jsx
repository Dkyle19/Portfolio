import React from 'react';
import { Headset, Wrench, Monitor, Printer, Wifi, MessageSquare, Search, CheckCircle2, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Troubleshooting',
    description: 'Finding the cause of hardware and software problems and getting people back to work quickly.',
    color: 'text-cyan-400',
    box: 'bg-cyan-500/10 border-cyan-500/30',
    hover: 'hover:border-cyan-500/40',
  },
  {
    icon: Monitor,
    title: 'Computer Setup & Maintenance',
    description: 'Setting up and maintaining computers, plus installing and configuring the applications users need.',
    color: 'text-purple-400',
    box: 'bg-purple-500/10 border-purple-500/30',
    hover: 'hover:border-purple-500/40',
  },
  {
    icon: Printer,
    title: 'Printers',
    description: 'Setting up printers and fixing the common issues that stop them from printing.',
    color: 'text-emerald-400',
    box: 'bg-emerald-500/10 border-emerald-500/30',
    hover: 'hover:border-emerald-500/40',
  },
  {
    icon: Wifi,
    title: 'Network Connections',
    description: 'Setting up and checking network connections so devices stay online.',
    color: 'text-sky-400',
    box: 'bg-sky-500/10 border-sky-500/30',
    hover: 'hover:border-sky-500/40',
  },
  {
    icon: Wrench,
    title: 'Day-to-Day Upkeep',
    description: 'Keeping everyday systems running smoothly so small problems do not turn into big ones.',
    color: 'text-amber-400',
    box: 'bg-amber-500/10 border-amber-500/30',
    hover: 'hover:border-amber-500/40',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Explaining problems and solutions in plain language that non-technical users can follow.',
    color: 'text-pink-400',
    box: 'bg-pink-500/10 border-pink-500/30',
    hover: 'hover:border-pink-500/40',
  },
];

const steps = [
  { label: 'Listen', text: 'Understand what the user is seeing and what they need.' },
  { label: 'Diagnose', text: 'Narrow down the cause step by step.' },
  { label: 'Fix', text: 'Apply the solution and confirm it works.' },
  { label: 'Explain', text: 'Tell the user what happened and how to avoid it.' },
];

export default function ITSupport() {
  return (
    <section id="it-support" className="py-24 relative overflow-hidden">
      <div className="ambient-spotlight bg-emerald-500/10 w-[500px] h-[500px] -top-24 -right-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            <Headset className="w-3.5 h-3.5" />
            <span>Part-Time • 7 Months</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            IT <span className="text-gradient">Support</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full mt-3"></div>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-4">
            Alongside development, I help users troubleshoot hardware and software issues and keep their day-to-day systems running smoothly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description, color, box, hover }) => (
            <div
              key={title}
              className={`glass-panel p-6 rounded-2xl border border-white/10 ${hover} hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`inline-flex p-3 rounded-xl border ${box} ${color} mb-4`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* How I handle a request */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 mt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">How I Handle a Support Request</h3>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <li key={step.label} className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-white text-sm">{step.label}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70 ml-auto" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
