import React, { useEffect, useRef } from 'react';

const SNIPPETS = [
  {
    title: 'tinyLM — tokenizer',
    code: `class Tokenizer:\n    def __init__(self):\n        self.vocab = {"<pad>": 0, "<bos>": 1, "<eos>": 2}\n    def encode(self, text: str):\n        return [self.vocab.get(ch, 3) for ch in text]\n    def decode(self, ids):\n        inv = {v:k for k,v in self.vocab.items()}\n        return ''.join(inv.get(i, '?') for i in ids)`
  },
  {
    title: 'kursorin — controller',
    code: `import cv2\nimport numpy as np\n\nclass Controller:\n    def step(self, frame):\n        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)\n        blur = cv2.GaussianBlur(gray, (3,3), 0)\n        edges = cv2.Canny(blur, 50, 150)\n        return np.mean(edges)`
  },
  {
    title: 'ai_code_agent — prompt loop',
    code: `from dataclasses import dataclass\n\n@dataclass\nclass Step:\n    action: str\n    notes: str\n\nwhile True:\n    # think-act-observe loop\n    ...`
  }
];

function LineNumber({ n }) {
  return <span className="select-none pr-4 text-[#333333]">{String(n).padStart(2, '0')}</span>;
}

export default function CodeWall() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let y = 0;
    let raf;
    const animate = () => {
      y += 0.3; // slow waterfall
      el.style.backgroundPosition = `0px ${y}px`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative bg-[#000000] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 font-serif text-5xl text-white">Python Code Wall</h2>
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[24px] border border-[#111111] bg-[#0a0a0a] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.4)]"
          style={{
            backgroundImage: 'repeating-linear-gradient(180deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 2px, transparent 4px)',
            backgroundSize: '100% 16px',
          }}
        >
          <div className="grid gap-6 md:grid-cols-3">
            {SNIPPETS.map((s, idx) => (
              <div key={idx} className="relative rounded-[20px] border border-[#1a1a1a] bg-[#0f0f0f] p-4">
                <div className="mb-3 flex items-center justify-between text-xs text-[#777777]">
                  <span>{s.title}</span>
                  <span>py</span>
                </div>
                <pre className="max-h-72 overflow-auto text-[12px] leading-relaxed text-[#CCCCCC]">
                  {s.code.split('\n').map((line, i) => (
                    <code key={i} className="block"><LineNumber n={i + 1} />{line}</code>
                  ))}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
