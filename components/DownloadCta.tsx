"use client";
import { useEffect, useState } from 'react';

const GP_APP = 'https://play.google.com/store/apps/details?id=com.wu.ling_gen.ling_gen';

export default function DownloadCta() {
  const [showNudge, setShowNudge] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledRatio = window.scrollY / Math.max(1, (document.body.scrollHeight - window.innerHeight));
      if (scrolledRatio > 0.18) setShowNudge(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const timer = setTimeout(() => setShowNudge(true), 2200);
    return () => { window.removeEventListener('scroll', onScroll); clearTimeout(timer); };
  }, []);

  return (
    <>
      {/* Floating Action Button */}
      <a
        href={GP_APP}
        target="_blank"
        rel="noreferrer"
        aria-label="前往 Google Play 下載靈根實驗室"
        className="fab"
      >
        <span className="fab-ring" aria-hidden="true" />
        <span className="fab-core inline-flex items-center gap-1">
          {/* icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>立即修仙</span>
        </span>
      </a>

      {/* Bottom Nudge */}
      {showNudge && (
        <div className="download-nudge" role="dialog" aria-live="polite">
          <div className="nudge-inner">
            <div className="nudge-dot" />
            <p className="nudge-text">測你的修仙體質，立即下載！</p>
            <a href={GP_APP} target="_blank" rel="noreferrer" className="nudge-cta">下載</a>
            <button className="nudge-close" aria-label="關閉" onClick={() => setShowNudge(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}

