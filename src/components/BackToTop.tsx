'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-4 z-50 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:opacity-80 active:scale-95"
      style={{
        bottom: 'calc(72px + env(safe-area-inset-bottom))',
        background: 'var(--mb-dark)',
        borderColor: 'var(--mb-gold)',
        boxShadow: '2px 2px 0 var(--mb-gold)',
        color: 'var(--mb-gold)',
      }}
      title="トップへ戻る"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
