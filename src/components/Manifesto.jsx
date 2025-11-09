import React from 'react';

export default function Manifesto() {
  return (
    <section className="relative bg-[#000000] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-[#111111] bg-[#0a0a0a] p-10">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl" />
          <h2 className="mb-8 font-serif text-5xl text-white">Vibe Coder Manifesto</h2>
          <div className="relative">
            <svg viewBox="0 0 600 200" className="w-full">
              <defs>
                <path id="wave" d="M10,100 C110,50 190,150 290,100 C390,50 470,150 590,100" />
              </defs>
              <text className="fill-[#CCCCCC] text-[20px]">
                <textPath href="#wave" startOffset="0%">
                  I am a vibe coder, but I learn coding. AI is my pair programmer, Python is my voice.
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
