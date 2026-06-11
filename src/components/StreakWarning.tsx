'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';

export default function StreakWarning() {
  const { streakDays, completedCount, mounted } = useProgress();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!mounted || streakDays < 2 || completedCount === 0) return;
    const hour = new Date().getHours();
    if (hour < 17) return; // only show after 5pm

    // Check if user completed any lesson today via lessonCompletionDates
    try {
      const raw = localStorage.getItem('mb_progress_v1');
      const store = raw ? JSON.parse(raw) : null;
      const today = new Date().toISOString().slice(0, 10);
      const dates: Record<string, string> = store?.lessonCompletionDates ?? {};
      const studiedToday = Object.values(dates).some(d => d === today);
      if (!studiedToday) setShow(true);
    } catch {
      setShow(true);
    }
  }, [mounted, streakDays, completedCount]);

  if (!show) return null;

  return (
    <div
      className="px-4 py-3 rounded-xl border-2 flex items-center gap-3"
      style={{
        background: 'rgba(232,53,74,0.06)',
        borderColor: 'rgba(232,53,74,0.3)',
        animation: 'pulse-border 2s infinite',
      }}
    >
      <style>{`@keyframes pulse-border{0%,100%{border-color:rgba(232,53,74,0.3)}50%{border-color:rgba(232,53,74,0.7)}}`}</style>
      <span className="text-2xl shrink-0">🔥</span>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-bold" style={{ color: '#E8354A', fontFamily: "'Dela Gothic One', sans-serif" }}>
          {streakDays}日連続が終わりそう！
        </div>
        <div className="text-[10px]" style={{ color: 'rgba(26,26,46,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          今日もう1講義でストリーク継続
        </div>
      </div>
      <Link
        href="/courses"
        className="shrink-0 px-3 py-1.5 rounded-lg border-2 text-[11px] font-bold"
        style={{ background: '#E8354A', borderColor: '#E8354A', color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        学ぶ
      </Link>
    </div>
  );
}
