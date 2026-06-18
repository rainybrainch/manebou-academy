'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import type { Category } from '@/types';

interface Props {
  category: Category;
  meta: { shadow: string; icon: string; label: string; color: string };
  onClose: () => void;
}

export default function CourseOverviewSheet({ category, meta, onClose }: Props) {
  const { isCompleted, mounted } = useProgress();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(category.courses[0]?.id ?? null);

  const totalLessons = category.courses.reduce((a, c) => a + c.lessons.filter(l => !l.isComingSoon).length, 0);
  const completedCount = mounted
    ? category.courses.reduce(
        (a, c) => a + c.lessons.filter(l => !l.isComingSoon && isCompleted(c.id, l.id)).length,
        0
      )
    : 0;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        style={{
          background: 'var(--mb-cream)',
          maxHeight: '88vh',
          boxShadow: '0 -4px 32px rgba(26,26,46,0.25)',
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full" style={{ background: 'rgba(26,26,46,0.15)' }} />
        </div>

        {/* Course header */}
        <div
          className="mx-4 mt-2 mb-3 rounded-2xl p-4 flex items-center gap-3 shrink-0"
          style={{ background: 'var(--mb-dark)', border: `2px solid ${meta.color}` }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
            style={{ background: `${meta.color}25` }}
          >
            {meta.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: `${meta.color}25`, color: meta.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {meta.label}
              </span>
            </div>
            <div
              className="text-sm font-bold leading-snug"
              style={{ color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {category.title}
            </div>
          </div>
          <div className="text-right shrink-0">
            <div style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif", fontSize: '18px', lineHeight: 1 }}>
              {category.courses.length}章
            </div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {totalLessons}講義
            </div>
            {mounted && completedCount > 0 && (
              <div style={{ color: 'var(--mb-green)', fontSize: '9px', fontFamily: "'Zen Maru Gothic', sans-serif", marginTop: '2px' }}>
                {completedCount}/{totalLessons} 完了
              </div>
            )}
          </div>
        </div>

        {/* Chapter filter tabs */}
        <div className="px-4 pb-3 shrink-0 overflow-x-auto scrollbar-hide flex gap-2">
          <button
            onClick={() => setSelectedCourseId(null)}
            className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all whitespace-nowrap shrink-0"
            style={{
              borderColor: selectedCourseId === null ? meta.color : 'rgba(26,26,46,0.1)',
              color: selectedCourseId === null ? meta.color : 'rgba(26,26,46,0.5)',
              background: selectedCourseId === null ? `${meta.color}12` : 'white',
              fontFamily: "'Zen Maru Gothic', sans-serif",
            }}
          >
            すべて
          </button>
          {category.courses.map((course, idx) => (
            <button
              key={course.id}
              onClick={() => setSelectedCourseId(course.id)}
              className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all whitespace-nowrap shrink-0"
              style={{
                borderColor: selectedCourseId === course.id ? meta.color : 'rgba(26,26,46,0.1)',
                color: selectedCourseId === course.id ? meta.color : 'rgba(26,26,46,0.5)',
                background: selectedCourseId === course.id ? `${meta.color}12` : 'white',
                fontFamily: "'Zen Maru Gothic', sans-serif",
              }}
            >
              第{idx + 1}章
            </button>
          ))}
        </div>

        {/* Chapter list */}
        <div className="overflow-y-auto flex-1 px-4 pb-16" style={{ minHeight: 0 }}>
          {/* Timeline line */}
          <div className="relative">
            <div
              className="absolute left-[19px] top-2 bottom-2 w-0.5"
              style={{ background: 'rgba(26,26,46,0.08)' }}
            />
            <div className="space-y-3">
              {category.courses
                .filter(course => selectedCourseId === null || course.id === selectedCourseId)
                .map((course) => {
                const courseIdx = category.courses.findIndex(c => c.id === course.id);
                const lessonCount = course.lessons.filter(l => !l.isComingSoon).length;
                const doneCount = mounted
                  ? course.lessons.filter(l => !l.isComingSoon && isCompleted(course.id, l.id)).length
                  : 0;
                const allDone = mounted && doneCount === lessonCount && lessonCount > 0;
                const hasZai = course.lessons.some(l => l.gameTags && l.gameTags.length > 0);
                const firstLesson = course.lessons.find(l => !l.isComingSoon);

                const isExpanded = expandedCourseId === course.id;

                return (
                  <div key={course.id}>
                    {/* Chapter toggle button */}
                    <button
                      onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                      className="flex items-center gap-3 w-full rounded-xl border-2 bg-white pl-2 pr-4 py-3 transition-all hover:-translate-y-0.5 active:translate-y-0 text-left"
                      style={{
                        borderColor: allDone ? 'var(--mb-green)' : 'rgba(26,26,46,0.1)',
                        boxShadow: allDone ? '2px 2px 0 rgba(76,175,125,0.25)' : '2px 2px 0 rgba(26,26,46,0.06)',
                      }}
                    >
                      {/* Chapter number circle */}
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10"
                        style={{
                          background: allDone ? 'var(--mb-green)' : 'var(--mb-dark)',
                          color: allDone ? 'white' : meta.color,
                          fontFamily: "'Dela Gothic One', sans-serif",
                          fontSize: '13px',
                        }}
                      >
                        {allDone ? '✓' : courseIdx + 1}
                      </div>

                      {/* Course icon */}
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                        style={{ background: `${meta.color}15` }}
                      >
                        📖
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div
                          className="text-xs font-bold leading-snug mb-0.5"
                          style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                        >
                          {course.title}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-[10px]"
                            style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                          >
                            {lessonCount}講義
                            {mounted && doneCount > 0 && doneCount < lessonCount && (
                              <span style={{ color: 'var(--mb-green)' }}> · {doneCount}完了</span>
                            )}
                          </span>
                          {hasZai && (
                            <span
                              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5"
                              style={{ background: 'rgba(245,200,66,0.15)', color: '#B8920A', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                            >
                              🎲 ZAi連動
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Chevron */}
                      <svg
                        className="w-4 h-4 shrink-0 transition-transform"
                        style={{
                          color: 'rgba(26,26,46,0.25)',
                          transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)',
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Expanded lessons */}
                    {isExpanded && (
                      <div className="mt-2 space-y-1 ml-4">
                        {course.lessons
                          .filter(l => !l.isComingSoon)
                          .map((lesson, lIdx) => (
                            <Link
                              key={lesson.id}
                              href={`/courses/${course.id}/lessons/${lesson.id}`}
                              onClick={onClose}
                              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors text-left text-[11px]"
                              style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
                            >
                              <span style={{ color: 'rgba(26,26,46,0.3)', fontWeight: 'bold', minWidth: '20px' }}>
                                {lIdx + 1}.
                              </span>
                              <span style={{ color: isCompleted(course.id, lesson.id) ? 'rgba(76,175,125,0.6)' : 'var(--mb-dark)' }}>
                                {lesson.title}
                              </span>
                              {isCompleted(course.id, lesson.id) && (
                                <span style={{ color: 'var(--mb-green)', marginLeft: 'auto' }}>✓</span>
                              )}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fixed Footer CTA */}
        <div className="px-4 py-3 shrink-0 bg-gradient-to-t from-white via-white border-t" style={{ borderColor: 'rgba(26,26,46,0.08)' }}>
          <Link
            href="/courses"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 text-sm font-bold transition-all hover:-translate-y-0.5"
            style={{
              borderColor: meta.color,
              color: meta.color,
              background: `${meta.color}10`,
              fontFamily: "'Zen Maru Gothic', sans-serif",
            }}
          >
            コース一覧で全て見る →
          </Link>
        </div>
      </div>
    </>
  );
}
