'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { Skeleton, SkeletonStyle } from './Skeleton';
import { ACHIEVEMENTS } from '@/data/achievements';

function useCountUp(target: number, duration = 600): number {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (target === 0) { setValue(0); return; }
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current !== null) cancelAnimationFrame(raf.current); };
  }, [target, duration]);

  return value;
}

export default function HomeStats() {
  const { completedCount, streakDays, bestStreak, completedLessonKeys, mounted } = useProgress();

  const earnedCount = useMemo(
    () => mounted ? ACHIEVEMENTS.filter(a => a.check(completedCount, streakDays, bestStreak, completedLessonKeys)).length : 0,
    [mounted, completedCount, streakDays, bestStreak, completedLessonKeys]
  );

  const animatedLessons = useCountUp(mounted ? completedCount : 0, 700);
  const animatedStreak = useCountUp(mounted ? streakDays : 0, 500);
  const animatedBadges = useCountUp(earnedCount, 400);

  const stats = [
    {
      label: '獲得実績',
      sub: 'ACHIEVEMENTS',
      value: mounted ? String(animatedBadges) : '0',
      color: '#5BC8E8',
      icon: '🏅',
      extra: null as string | null,
    },
    {
      label: '積み立て講義',
      sub: 'LESSONS',
      value: mounted ? String(animatedLessons) : '0',
      color: '#4CAF7D',
      icon: '📚',
      extra: null as string | null,
    },
    {
      label: '連続学習',
      sub: 'STREAK',
      value: mounted ? `${animatedStreak}日` : '0日',
      color: '#F5C842',
      icon: streakDays >= 3 ? '🔥' : '✨',
      extra: mounted && bestStreak > streakDays ? `最高${bestStreak}日` : null,
    },
  ];

  if (!mounted) {
    return (
      <>
        <SkeletonStyle />
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-xl border-2 p-3" style={{ borderColor: 'rgba(26,26,46,0.1)' }}>
              <Skeleton className="w-7 h-7 rounded-full mx-auto mb-2" />
              <Skeleton className="h-6 w-10 mx-auto mb-1" />
              <Skeleton className="h-2.5 w-14 mx-auto" />
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.sub}
          className="bg-white rounded-xl p-3 text-center border-2"
          style={{ borderColor: 'var(--mb-dark)', boxShadow: `3px 3px 0 ${stat.color}` }}
        >
          <div className="text-lg mb-1">{stat.icon}</div>
          <div
            className="text-xl font-bold leading-none"
            style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}
          >
            {stat.value}
          </div>
          <div
            className="text-[10px] mt-1 font-bold"
            style={{ color: stat.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {stat.sub}
          </div>
          {stat.extra && (
            <div
              className="text-[9px] mt-0.5"
              style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {stat.extra}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
