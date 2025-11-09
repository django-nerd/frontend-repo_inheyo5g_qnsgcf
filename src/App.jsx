import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CodeWall from './components/CodeWall';
import Manifesto from './components/Manifesto';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white antialiased">
      <Hero />
      <Projects />
      <CodeWall />
      <Manifesto />
      <Contact />
      <footer className="bg-[#000000] py-10 text-center text-xs text-[#555555]">
        © {new Date().getFullYear()} Ardelyo — Monochrome, abstract, and proudly hand-coded.
      </footer>
    </div>
  );
}

export default App;
