'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

export default function StreakWarning() {
  const { streakDays, completedCount, dailyLessonCounts, isCompleted, lastViewedLesson, mounted } = useProgress();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!mounted || streakDays < 2 || completedCount === 0) return;
    const hour = new Date().getHours();
    if (hour < 17) return; // only show after 5pm
    const today = new Date().toISOString().slice(0, 10);
    if (!dailyLessonCounts[today]) setShow(true);
  }, [mounted, streakDays, completedCount, dailyLessonCounts]);

  if (!show) return null;

  // Find next lesson to study (prefer last viewed incomplete, else first incomplete)
  let nextHref = '/courses';
  if (lastViewedLesson) {
    const [lvCourseId, lvLessonId] = lastViewedLesson.split('/');
    for (const cat of categories) {
      const course = cat.courses.find(c => c.id === lvCourseId);
      if (course) {
        const lesson = course.lessons.find(l => l.id === lvLessonId);
        if (lesson && !lesson.isComingSoon && !isCompleted(lvCourseId, lvLessonId)) {
          nextHref = `/courses/${lvCourseId}/lessons/${lvLessonId}`;
          break;
        }
      }
    }
  }
  if (nextHref === '/courses') {
    outer: for (const cat of categories) {
      for (const course of cat.courses) {
        for (const lesson of course.lessons) {
          if (!lesson.isComingSoon && !isCompleted(course.id, lesson.id)) {
            nextHref = `/courses/${course.id}/lessons/${lesson.id}`;
            break outer;
          }
        }
      }
    }
  }

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
        href={nextHref}
        className="shrink-0 px-3 py-1.5 rounded-lg border-2 text-[11px] font-bold"
        style={{ background: '#E8354A', borderColor: '#E8354A', color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        学ぶ →
      </Link>
    </div>
  );
}
