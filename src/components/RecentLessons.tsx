'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

function relativeDate(dateStr: string): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(dateStr + 'T00:00:00');
  const diff = Math.round((today.getTime() - d.getTime()) / 86400000);
  if (diff === 0) return '今日';
  if (diff === 1) return '昨日';
  if (diff <= 6) return `${diff}日前`;
  return `${Math.floor(diff / 7)}週前`;
}

const allLessons = categories.flatMap(cat =>
  cat.courses.flatMap(course =>
    course.lessons
      .filter(l => !l.isComingSoon)
      .map(l => ({ courseId: course.id, courseTitle: course.title, lesson: l }))
  )
);

export default function RecentLessons() {
  const { completedLessonKeys, lessonCompletionDates, completedCount, mounted } = useProgress();

  const recentItems = useMemo(() => {
    if (!mounted || completedCount === 0) return [];
    return [...completedLessonKeys]
      .sort((a, b) => {
        const da = lessonCompletionDates[a] ?? '0000-00-00';
        const db = lessonCompletionDates[b] ?? '0000-00-00';
        return db.localeCompare(da);
      })
      .slice(0, 5)
      .map(key => {
        const [cId, lId] = key.split('/');
        const found = allLessons.find(l => l.courseId === cId && l.lesson.id === lId);
        return found ? { ...found, key, dateStr: lessonCompletionDates[key] ?? null } : null;
      })
      .filter(Boolean) as (typeof allLessons[0] & { key: string; dateStr: string | null })[];
  }, [mounted, completedCount, completedLessonKeys, lessonCompletionDates]);

  if (!mounted || completedCount === 0) return null;
  if (recentItems.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-4 rounded-full" style={{ background: '#4CAF7D' }} />
        <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          RECENTLY COMPLETED
        </span>
      </div>
      <div className="space-y-2">
        {recentItems.map(({ courseId, lesson, courseTitle, key, dateStr }) => (
          <Link
            key={key}
            href={`/courses/${courseId}/lessons/${lesson.id}`}
            className="flex items-center gap-3 p-3 rounded-xl border-2 transition-all hover:-translate-y-px"
            style={{ background: 'white', borderColor: 'rgba(26,26,46,0.12)', boxShadow: '2px 2px 0 rgba(76,175,125,0.2)' }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
              style={{ background: '#4CAF7D' }}
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold truncate" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {lesson.title}
              </div>
              <div className="text-[10px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {courseTitle}
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-end gap-0.5">
              {dateStr && (
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    background: dateStr === new Date().toISOString().slice(0, 10)
                      ? 'rgba(76,175,125,0.12)'
                      : 'rgba(26,26,46,0.05)',
                    color: dateStr === new Date().toISOString().slice(0, 10)
                      ? '#4CAF7D'
                      : 'rgba(26,26,46,0.35)',
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                  }}
                >
                  {relativeDate(dateStr)}
                </span>
              )}
              <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.3)' }}>復習 →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
