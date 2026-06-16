'use client';

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { ACHIEVEMENTS } from '@/data/achievements';

const LESSON_MILESTONES = [1, 5, 10, 20, 30, 50, 75, 100];

export default function MilestoneCard() {
  const { completedCount, streakDays, bestStreak, completedLessonKeys, mounted } = useProgress();
  if (!mounted) return null;

  const earnedCount = ACHIEVEMENTS.filter(a =>
    a.check(completedCount, streakDays, bestStreak, completedLessonKeys)
  ).length;

  // Find next lecture-count milestone
  const nextMilestone = LESSON_MILESTONES.find(m => m > completedCount);
  const prevMilestone = [...LESSON_MILESTONES].reverse().find(m => m <= completedCount) ?? 0;
  const remaining = nextMilestone !== undefined ? nextMilestone - completedCount : 0;
  const rangeSize = nextMilestone !== undefined ? nextMilestone - prevMilestone : 1;
  const pct = nextMilestone !== undefined
    ? Math.round(((completedCount - prevMilestone) / rangeSize) * 100)
    : 100;

  // Milestone label
  const nextAch = ACHIEVEMENTS.find(a => {
    if (!a.progress) return false;
    const p = a.progress(completedCount, streakDays, bestStreak, completedLessonKeys);
    return p !== null && p.current < p.total;
  });

  let icon = '🎯';
  let headline = '';
  let sub = '';

  if (completedCount === 0) {
    icon = '🚀';
    headline = '最初の一歩を踏み出そう！';
    sub = '1講義完了すると学習記録が始まります';
  } else if (remaining === 1 && nextMilestone) {
    icon = '⚡';
    headline = `あと1講義で節目達成！`;
    sub = `${completedCount} → ${nextMilestone} 講義突破`;
  } else if (streakDays >= 7) {
    icon = '🔥';
    headline = `${streakDays}日連続学習中！`;
    sub = nextMilestone ? `あと${remaining}講義で次の節目` : '全マイルストーン制覇！';
  } else if (streakDays >= 3) {
    icon = '💪';
    headline = `${streakDays}日連続！`;
    sub = nextMilestone ? `あと${remaining}講義で${nextMilestone}講義達成` : 'このペースで続けよう';
  } else if (nextMilestone) {
    icon = '🎯';
    headline = `あと${remaining}講義で${nextMilestone}講義達成！`;
    sub = `現在 ${completedCount} 講義 / 実績 ${earnedCount}個獲得`;
  } else {
    icon = '👑';
    headline = '全マイルストーン制覇！';
    sub = `${completedCount}講義完了・実績${earnedCount}個獲得`;
  }

  // Mini milestone slots
  const slots = LESSON_MILESTONES.slice(0, 8).map(m => ({
    label: m >= 10 ? `${m}` : `${m}`,
    reached: completedCount >= m,
    next: m === nextMilestone,
  }));

  return (
    <Link
      href="/progress"
      className="block rounded-xl border-2 overflow-hidden transition-all hover:-translate-y-0.5 active:translate-y-0"
      style={{
        background: 'white',
        borderColor: 'var(--mb-dark)',
        boxShadow: '3px 3px 0 var(--mb-green, #4CAF7D)',
      }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl shrink-0 border-2"
          style={{ background: 'rgba(76,175,125,0.1)', borderColor: 'rgba(76,175,125,0.3)' }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="text-xs font-bold leading-snug"
            style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {headline}
          </div>
          <div
            className="text-[10px] mt-0.5"
            style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {sub}
          </div>
        </div>
        {earnedCount > 0 && (
          <div
            className="shrink-0 text-[11px] font-bold px-2 py-1 rounded-lg"
            style={{ background: 'rgba(76,175,125,0.12)', color: '#4CAF7D', fontFamily: "'Dela Gothic One', sans-serif" }}
          >
            🏅×{earnedCount}
          </div>
        )}
      </div>

      {/* Mini progress bar */}
      {completedCount > 0 && nextMilestone && (
        <div className="px-4">
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,46,0.08)' }}>
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, background: '#4CAF7D' }}
            />
          </div>
        </div>
      )}

      {/* Milestone slot row */}
      <div className="flex items-center gap-1 px-4 py-3">
        {slots.map(({ label, reached, next }) => (
          <div
            key={label}
            className="flex-1 flex flex-col items-center gap-0.5"
          >
            <div
              className="w-full aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold border-2 transition-all"
              style={{
                background: reached ? 'rgba(76,175,125,0.12)' : next ? 'rgba(245,200,66,0.08)' : 'rgba(26,26,46,0.04)',
                borderColor: reached ? 'rgba(76,175,125,0.4)' : next ? 'rgba(245,200,66,0.4)' : 'rgba(26,26,46,0.1)',
                color: reached ? '#4CAF7D' : next ? '#B8920A' : 'rgba(26,26,46,0.2)',
                fontFamily: "'Dela Gothic One', sans-serif",
              }}
            >
              {reached ? '✓' : label}
            </div>
            <span
              className="text-[7px]"
              style={{
                color: reached ? '#4CAF7D' : next ? '#B8920A' : 'rgba(26,26,46,0.2)',
                fontFamily: "'Dela Gothic One', sans-serif",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </Link>
  );
}
