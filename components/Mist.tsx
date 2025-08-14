"use client";
import { useEffect, useRef } from 'react';

export default function Mist() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    const animate = (t: number) => {
      const x = Math.sin(t / 5000) * 8;
      const y = Math.cos(t / 7000) * 10;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div className="absolute -inset-32 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_55%)]" />
    </div>
  );
}

