import React from 'react';

const PROJECTS = [
  { name: 'kursorin', lang: 'Python', desc: 'Cursor control experiments with CV/AI.', stars: 42 },
  { name: 'tinyLM', lang: 'Python', desc: 'Minimal language model playground.', stars: 87 },
  { name: 'TOPintar', lang: 'Python', desc: 'Interactive learning utilities.', stars: 33 },
  { name: 'sistem-piket', lang: 'Python', desc: 'Scheduling and duty system.', stars: 21 },
  { name: 'FISIKACODING', lang: 'Python', desc: 'Physics + code learning notes.', stars: 18 },
  { name: 'ai_code_agent', lang: 'Python', desc: 'AI-driven coding assistant.', stars: 65 },
];

function Card({ project }) {
  return (
    <div
      className="group relative h-[200px] w-[300px] rounded-[24px] border border-[#111111] bg-[#0a0a0a] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:-rotate-1 hover:scale-[1.02] active:scale-95"
      style={{ willChange: 'transform' }}
      role="article"
      aria-label={`${project.name} project`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#333333] bg-[#0f0f0f] px-3 py-1 text-[11px] font-medium text-[#CCCCCC]">
            <span className="h-2 w-2 rounded-full bg-[#777777]" /> {project.lang}
          </span>
          <span className="ml-auto text-[11px] text-[#777777]">★ {project.stars}</span>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-white">{project.name}</h3>
          <p className="mt-1 text-xs text-[#777777]">{project.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative bg-[#000000] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 font-serif text-5xl text-white">Selected Projects</h2>
        {/* Scatter layout */}
        <div className="relative grid grid-cols-12 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className={
                // Broken grid: different spans per index
                i % 6 === 0 ? 'col-span-4 translate-y-6' :
                i % 6 === 1 ? 'col-span-3 -translate-y-2' :
                i % 6 === 2 ? 'col-span-5 translate-y-10' :
                i % 6 === 3 ? 'col-span-4 -translate-y-4' :
                i % 6 === 4 ? 'col-span-3 translate-y-8' : 'col-span-5 -translate-y-6'
              }
            >
              <Card project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
