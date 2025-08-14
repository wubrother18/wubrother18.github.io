"use client";
import { useState, useMemo } from 'react';
import Lightbox from '@/components/Lightbox';

const images = [
  { src: '/images/linggen-hero.png', alt: '靈根實驗室 截圖 1' },
  { src: '/images/linggen-ss1.png', alt: '靈根實驗室 截圖 2' },
  { src: '/images/linggen-ss2.png', alt: '靈根實驗室 截圖 3' },
  { src: '/images/linggen-ss3.png', alt: '靈根實驗室 截圖 4' },
  { src: '/images/linggen-ss4.png', alt: '靈根實驗室 截圖 5' },
];

export default function Screenshots() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const imgs = useMemo(() => images, []);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <button className="card p-3 tilt shimmer" onClick={() => { setIdx(0); setOpen(true); }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[0].src} alt={images[0].alt} className="w-full h-72 object-cover rounded-lg" />
      </button>
      <div className="grid grid-cols-2 gap-6">
        {images.slice(1).map((img, i) => (
          <button key={img.src} className="card p-3 tilt" onClick={() => { setIdx(i + 1); setOpen(true); }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} className="w-full h-40 object-cover rounded-lg" />
          </button>
        ))}
      </div>

      {open && (
        <Lightbox
          images={imgs}
          index={idx}
          onClose={() => setOpen(false)}
          onPrev={() => setIdx((prev) => (prev - 1 + images.length) % images.length)}
          onNext={() => setIdx((prev) => (prev + 1) % images.length)}
        />
      )}
    </div>
  );
}

