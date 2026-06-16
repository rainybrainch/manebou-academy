'use client';

import Link from 'next/link';
import { useMyCourses } from '@/hooks/useMyCourses';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

const courseMeta: Record<string, { icon: string; color: string }> = {
  'money-basics-full':     { icon: '💴', color: '#5BC8E8' },
  'money-knowledge':       { icon: '🌐', color: '#9B6DD6' },
  'money-household':       { icon: '🏠', color: '#5BC8E8' },
  'money-tax':             { icon: '📋', color: '#5BC8E8' },
  'money-insurance':       { icon: '🛡️', color: '#5BC8E8' },
  'money-lifeplan':        { icon: '🗺️', color: '#9B6DD6' },
  'furusato-tax':          { icon: '🎁', color: '#4CAF7D' },
  'freelance-money':       { icon: '💼', color: '#5BC8E8' },
  'zai-course':            { icon: '🎲', color: '#F5C842' },
  'boardgame-monopoly':    { icon: '🎯', color: '#F5C842' },
  'stock-intro':           { icon: '📈', color: '#4CAF7D' },
  'nisa-basics':           { icon: '🏦', color: '#E8354A' },
  'investment-advanced':   { icon: '🏗️', color: '#4CAF7D' },
  'index-funds':           { icon: '📊', color: '#4CAF7D' },
  'dividend-stocks':       { icon: '💰', color: '#4CAF7D' },
  'crypto-basics':         { icon: '₿',  color: '#F5A623' },
  'economics':             { icon: '🌐', color: '#9B6DD6' },
  'fx-forex':              { icon: '💱', color: '#9B6DD6' },
  'politics':              { icon: '🏛️', color: '#9B6DD6' },
  'exam-public':           { icon: '📝', color: '#E8354A' },
};

export default function MyCoursesList() {
  const { myCourses, remove, mounted } = useMyCourses();
  const { isCompleted } = useProgress();

  if (!mounted || myCourses.length === 0) return null;

  const selectedCourses = myCourses
    .map(id => categories.find(c => c.id === id))
    .filter(Boolean) as typeof categories;

  if (selectedCourses.length === 0) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-gold)' }} />
          <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            マイコース
          </span>
        </div>
        <Link
          href="/courses"
          className="text-xs font-bold hover:underline"
          style={{ color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          変更する →
        </Link>
      </div>

      <div className="space-y-2">
        {selectedCourses.map(course => {
          const meta = courseMeta[course.id];
          const firstChapter = course.courses[0];
          const href = firstChapter ? `/courses/${firstChapter.id}` : `/courses`;
          const lessonCount = course.courses.reduce((a, c) => a + c.lessons.length, 0);

          const allLessons = course.courses.flatMap(ch =>
              ch.lessons.filter(l => !l.isComingSoon).map(l => ({ courseId: ch.id, lessonId: l.id }))
            );
            const done = mounted ? allLessons.filter(({ courseId, lessonId }) => isCompleted(courseId, lessonId)).length : 0;
            const pct = lessonCount > 0 ? Math.round((done / lessonCount) * 100) : 0;
            const accent = meta?.color ?? 'var(--mb-gold)';

          return (
            <div
              key={course.id}
              className="rounded-xl border-2 bg-white overflow-hidden"
              style={{ borderColor: 'var(--mb-dark)', boxShadow: `2px 2px 0 ${accent}` }}
            >
              <div className="flex items-center gap-3">
                {/* Color accent */}
                <div
                  className="w-1.5 self-stretch shrink-0"
                  style={{ background: accent }}
                />

                {/* Icon */}
                <div className="text-xl shrink-0 py-3">
                  {meta?.icon ?? '📚'}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 py-3">
                  <div
                    className="text-xs font-bold truncate"
                    style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {course.title}
                  </div>
                  <div className="text-[10px] mt-0.5" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {done > 0 ? `${done}/${lessonCount}講義完了` : `${course.courses.length}章 · ${lessonCount}講義`}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 pr-2 shrink-0">
                  <Link
                    href={href}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all hover:opacity-80"
                    style={{ background: accent, color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {done > 0 ? '続き' : '学ぶ'}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <button
                    onClick={() => remove(course.id)}
                    className="w-6 h-6 flex items-center justify-center rounded-full transition-all hover:opacity-60"
                    style={{ color: 'rgba(26,26,46,0.3)' }}
                    title="マイコースから削除"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 進捗バー */}
              {mounted && done > 0 && (
                <div className="px-3 pb-2.5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="h-1.5 flex-1 rounded-full overflow-hidden mr-2" style={{ background: `${accent}20` }}>
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: accent }} />
                    </div>
                    <span className="text-[9px] font-bold shrink-0" style={{ color: accent, fontFamily: "'Dela Gothic One', sans-serif" }}>
                      {pct}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
