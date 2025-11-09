import React from 'react';

const Blob = ({ className = '', style = {} }) => (
  <svg
    viewBox="0 0 600 600"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <g transform="translate(300,300)">
      <path
        d="M120,-160C166,-142,214,-115,232,-76C250,-37,238,14,214,60C190,106,154,147,113,185C72,224,36,260,-7,273C-50,286,-99,275,-139,249C-179,223,-211,183,-232,136C-253,90,-263,36,-256,-14C-249,-63,-224,-107,-188,-132C-152,-157,-105,-162,-62,-172C-20,-183,18,-200,58,-204C97,-207,138,-198,120,-160Z"
        fill="#111111"
        opacity="0.15"
      />
    </g>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#000000] text-white">
      {/* Background giant text */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <h1
          className="select-none text-[20vw] font-serif tracking-tight opacity-[0.05] rotate-[4deg]"
          style={{ lineHeight: 0.8 }}
        >
          ARDELYO
        </h1>
      </div>

      {/* Floating blobs */}
      <Blob className="absolute -left-20 top-10 w-80" />
      <Blob className="absolute right-10 -bottom-24 w-96 rotate-6" />
      <Blob className="absolute left-1/2 top-1/3 w-72 -translate-x-1/2 -rotate-3" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20">
        {/* Avatar */}
        <div className="absolute right-8 top-8 h-52 w-52 rounded-full border border-[#333333] shadow-[0_10px_40px_rgba(255,255,255,0.05)] overflow-hidden">
          <div className="h-full w-full bg-gradient-to-br from-[#222222] to-[#111111]" />
        </div>

        {/* Headline */}
        <div className="max-w-3xl">
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-white rotate-[-3deg]">
            A 16-year-old Python developer building the future with AI
          </h2>
          <p className="mt-6 max-w-xl text-sm text-[#777777] rounded-2xl bg-[#0a0a0a]/60 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            Ardellio Satria Anindito • Bandung, Indonesia • Vibe Coder
          </p>
        </div>

        {/* Subtle scroll indicator as blob */}
        <div className="pointer-events-none absolute left-10 bottom-10 flex items-center gap-3">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
          >
            <path
              d="M50 10 C65 10, 85 25, 85 40 C85 60, 60 80, 50 90 C40 80, 15 60, 15 40 C15 25, 35 10, 50 10 Z"
              fill="#111111"
              stroke="#333333"
              strokeWidth="1"
            />
            <circle cx="50" cy="45" r="6" fill="#CCCCCC" />
            <rect x="47" y="55" width="6" height="18" rx="3" fill="#777777">
              <animate attributeName="y" values="55;62;55" dur="2s" repeatCount="indefinite" />
            </rect>
          </svg>
          <span className="text-[#777777] text-xs">Scroll</span>
        </div>
      </div>
    </section>
  );
}
