import React from 'react';

export default function Contact() {
  return (
    <section className="relative bg-[#000000] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-8 font-serif text-5xl text-white">Contact</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-[28px] border border-[#111111] bg-[#0a0a0a] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-full border border-[#222222] bg-[#0f0f0f] px-5 py-3 text-sm text-[#CCCCCC] placeholder-[#555555] outline-none focus:border-[#333333] focus:ring-0"
            />
            <input
              type="email"
              placeholder="Email"
              defaultValue="ardellio@example.com"
              className="w-full rounded-full border border-[#222222] bg-[#0f0f0f] px-5 py-3 text-sm text-[#CCCCCC] placeholder-[#555555] outline-none focus:border-[#333333] focus:ring-0"
            />
          </div>
          <textarea
            placeholder="Your message"
            rows={5}
            className="mb-4 w-full rounded-3xl border border-[#222222] bg-[#0f0f0f] px-5 py-4 text-sm text-[#CCCCCC] placeholder-[#555555] outline-none focus:border-[#333333] focus:ring-0"
          />
          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-sm">
              <a href="https://github.com/" className="rounded-full border border-[#222222] px-4 py-2 text-[#CCCCCC] hover:bg-white/5 transition">GitHub</a>
              <a href="https://linkedin.com/" className="rounded-full border border-[#222222] px-4 py-2 text-[#CCCCCC] hover:bg-white/5 transition">LinkedIn</a>
              <a href="https://instagram.com/" className="rounded-full border border-[#222222] px-4 py-2 text-[#CCCCCC] hover:bg-white/5 transition">Instagram</a>
            </div>
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-[#000000] transition active:scale-95"
            >
              Send
            </button>
          </div>
        </form>

        {/* Background subtle morphing blobs */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <svg className="absolute left-10 top-10 h-40 w-40 opacity-20" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#111111" />
                <stop offset="100%" stopColor="#333333" />
              </linearGradient>
            </defs>
            <path fill="url(#g)">
              <animate attributeName="d" dur="8s" repeatCount="indefinite"
                values="M50,5 C70,10,90,30,95,50 C90,70,70,90,50,95 C30,90,10,70,5,50 C10,30,30,10,50,5 Z; M50,8 C68,12,88,28,92,50 C88,72,70,88,50,92 C30,88,12,72,8,50 C12,28,30,12,50,8 Z; M50,5 C70,10,90,30,95,50 C90,70,70,90,50,95 C30,90,10,70,5,50 C10,30,30,10,50,5 Z" />
            </path>
          </svg>
        </div>
      </div>
    </section>
  );
}
