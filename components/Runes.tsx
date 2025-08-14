"use client";
import { useEffect, useRef } from 'react';

const glyphs = ['水', '火', '土', '風', '雷', '木', '金', '光', '影'];

export default function Runes() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const nodes: HTMLSpanElement[] = [];
    for (let i = 0; i < 28; i++) {
      const s = document.createElement('span');
      s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      s.className = 'rune';
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.animationDelay = `${Math.random() * 4}s`;
      s.style.fontSize = `${12 + Math.random() * 18}px`;
      s.style.filter = `drop-shadow(0 0 8px rgba(56,189,248,.6)) drop-shadow(0 0 12px rgba(236,72,153,.35))`;
      container.appendChild(s);
      nodes.push(s);
    }
    return () => { nodes.forEach(n => n.remove()); };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true" />;
}

