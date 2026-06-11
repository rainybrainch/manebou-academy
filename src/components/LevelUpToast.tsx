'use client';

import { useEffect, useRef, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';

const LEVELS = [
  { threshold: 5,   title: '学習者',      icon: '📖', color: '#5BC8E8' },
  { threshold: 10,  title: '努力家',      icon: '💪', color: '#4CAF7D' },
  { threshold: 20,  title: '猛者',        icon: '⚡', color: '#F5C842' },
  { threshold: 30,  title: '達人',        icon: '🔥', color: '#E8354A' },
  { threshold: 50,  title: '伝説',        icon: '👑', color: '#F5C842' },
  { threshold: 75,  title: '超人',        icon: '🏆', color: '#F5C842' },
  { threshold: 100, title: '100講義の神', icon: '💯', color: '#F5C842' },
];

export default function LevelUpToast() {
  const { completedCount, mounted } = useProgress();
  const prev = useRef<number | null>(null);
  const [toast, setToast] = useState<{ title: string; icon: string; color: string } | null>(null);

  useEffect(() => {
    if (!mounted) return;
    if (prev.current === null) {
      prev.current = completedCount;
      return;
    }
    const oldCount = prev.current;
    const newCount = completedCount;
    prev.current = newCount;

    const triggered = LEVELS.find(l => oldCount < l.threshold && newCount >= l.threshold);
    if (triggered) {
      setToast({ title: triggered.title, icon: triggered.icon, color: triggered.color });
      const t = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(t);
    }
  }, [completedCount, mounted]);

  if (!toast) return null;

  return (
    <div
      className="fixed top-20 left-1/2 -translate-x-1/2 z-[91] flex items-center gap-3 px-5 py-3.5 rounded-2xl border-2"
      style={{
        background: 'var(--mb-dark)',
        borderColor: toast.color,
        boxShadow: `0 0 30px ${toast.color}60`,
        animation: 'levelSlide 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        whiteSpace: 'nowrap',
      }}
    >
      <style>{`
        @keyframes levelSlide {
          from { opacity: 0; transform: translate(-50%, -24px) scale(0.85); }
          to   { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `}</style>
      <span className="text-2xl">{toast.icon}</span>
      <div>
        <div style={{ fontFamily: "'Dela Gothic One', sans-serif", color: toast.color, fontSize: '13px' }}>
          レベルアップ！
        </div>
        <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: '11px' }}>
          {toast.icon} {toast.title} に昇格しました
        </div>
      </div>
    </div>
  );
}
