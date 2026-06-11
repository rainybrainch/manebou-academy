'use client';

import { useEffect, useRef, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';

export default function BadgeToast() {
  const { completedCount, mounted } = useProgress();
  const prev = useRef<number | null>(null);
  const [show, setShow] = useState(false);
  const [badgeNum, setBadgeNum] = useState(0);

  useEffect(() => {
    if (!mounted) return;
    if (prev.current === null) {
      prev.current = completedCount;
      return;
    }
    const oldBadges = Math.floor(prev.current / 5);
    const newBadges = Math.floor(completedCount / 5);
    if (newBadges > oldBadges) {
      setBadgeNum(newBadges);
      setShow(true);
      const t = setTimeout(() => setShow(false), 3500);
      prev.current = completedCount;
      return () => clearTimeout(t);
    }
    prev.current = completedCount;
  }, [completedCount, mounted]);

  if (!show) return null;

  return (
    <div
      className="fixed top-20 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-3 px-5 py-3.5 rounded-2xl border-2"
      style={{
        background: 'var(--mb-dark)',
        borderColor: 'var(--mb-gold)',
        boxShadow: '0 0 30px rgba(245,200,66,0.4)',
        animation: 'slideDown 0.35s ease',
        whiteSpace: 'nowrap',
      }}
    >
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
      <span className="text-2xl">🏅</span>
      <div>
        <div style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-gold)', fontSize: '13px' }}>
          マイルストーン達成！
        </div>
        <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}>
          累計{badgeNum * 5}講義突破！
        </div>
      </div>
    </div>
  );
}
