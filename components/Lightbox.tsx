"use client";
import { useEffect, useCallback } from 'react';

export type LightboxImage = { src: string; alt?: string };

export default function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onKey]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <button className="lightbox__backdrop" aria-label="關閉" onClick={onClose} />
      <div className="lightbox__inner">
        <button className="lightbox__btn lightbox__btn--left" aria-label="上一張" onClick={onPrev}>‹</button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.src} alt={img.alt || ''} className="lightbox__img" onClick={onNext} />
        <button className="lightbox__btn lightbox__btn--right" aria-label="下一張" onClick={onNext}>›</button>
        <button className="lightbox__close" aria-label="關閉" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

