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
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideScaleIn {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .course-modal-backdrop {
          animation: fadeIn 0.25s ease-out;
        }
        .course-modal-sheet {
          animation: slideScaleIn 0.3s cubic-bezier(0.32, 0.72, 0.44, 1);
        }
        .lesson-item {
          animation: fadeIn 0.2s ease-out backwards;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="course-modal-backdrop fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal (centered, not bottom sheet) */}
      <div
        className="course-modal-sheet fixed inset-4 z-50 rounded-2xl overflow-hidden flex flex-col mx-auto"
        role="dialog"
        aria-modal="true"
        style={{
          background: 'var(--mb-cream)',
          maxWidth: '600px',
          maxHeight: '80vh',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 8px 48px rgba(26,26,46,0.25)',
        }}
      >
        {/* Close button */}
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        </div>

        {/* Course header */}
        <div
          className="px-4 py-4 flex items-center gap-3 shrink-0"
          style={{ background: 'var(--mb-dark)', borderBottom: `2px solid ${meta.color}` }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
            style={{ background: `${meta.color}25` }}
          >
            {meta.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div style={{ color: meta.color, fontSize: '10px', fontFamily: "'Zen Maru Gothic', sans-serif", marginBottom: '2px' }}>
              {meta.label}
            </div>
            <div
              className="text-sm font-bold leading-snug"
              style={{ color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {category.title}
            </div>
          </div>
          <div className="text-right shrink-0">
            <div style={{ color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif", fontSize: '16px', lineHeight: 1 }}>
              {category.courses.length}章
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '9px', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {totalLessons}講義
            </div>
          </div>
        </div>

        {/* Chapter list */}
        <div className="overflow-y-auto flex-1 px-4 py-4" style={{ minHeight: 0 }}>
          <div className="relative">
            <div
              className="absolute left-[18px] top-0 bottom-0 w-0.5"
              style={{ background: 'rgba(26,26,46,0.08)' }}
            />
            <div className="space-y-2">
              {category.courses.map((course, courseIdx) => {
                const lessonCount = course.lessons.filter(l => !l.isComingSoon).length;
                const doneCount = mounted
                  ? course.lessons.filter(l => !l.isComingSoon && isCompleted(course.id, l.id)).length
                  : 0;
                const allDone = mounted && doneCount === lessonCount && lessonCount > 0;
                const isExpanded = expandedCourseId === course.id;

                return (
                  <div key={course.id}>
                    {/* Chapter toggle button */}
                    <button
                      onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                      className="flex items-center gap-2 w-full rounded-lg border bg-white pl-2 pr-3 py-2.5 transition-all hover:border-current text-left text-sm"
                      style={{
                        borderColor: allDone ? 'var(--mb-green)' : 'rgba(26,26,46,0.1)',
                        boxShadow: allDone ? 'inset 0 0 0 1px rgba(76,175,125,0.2)' : 'none',
                      }}
                    >
                      {/* Chapter number circle */}
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 z-10"
                        style={{
                          background: allDone ? 'var(--mb-green)' : 'var(--mb-dark)',
                          color: allDone ? 'white' : meta.color,
                          fontFamily: "'Dela Gothic One', sans-serif",
                        }}
                      >
                        {allDone ? '✓' : courseIdx + 1}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div
                          className="text-xs font-bold leading-tight"
                          style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                        >
                          {course.title}
                        </div>
                        <div
                          className="text-[9px]"
                          style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                        >
                          {lessonCount}講義
                          {mounted && doneCount > 0 && doneCount < lessonCount && (
                            <span style={{ color: 'var(--mb-green)' }}> · {doneCount}完了</span>
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
                      <div className="mt-1 space-y-0.5 ml-3 pl-2 border-l" style={{ borderColor: `${meta.color}25` }}>
                        {course.lessons
                          .filter(l => !l.isComingSoon)
                          .map((lesson, lIdx) => (
                            <Link
                              key={lesson.id}
                              href={`/courses/${course.id}/lessons/${lesson.id}`}
                              onClick={onClose}
                              className="lesson-item flex items-center gap-2 p-1.5 rounded-md hover:bg-gray-100 transition-colors text-left text-xs group"
                              style={{
                                fontFamily: "'Zen Maru Gothic', sans-serif",
                                animationDelay: `${lIdx * 30}ms`,
                              }}
                            >
                              <span style={{ color: 'rgba(26,26,46,0.3)', fontWeight: 'bold', minWidth: '18px', flexShrink: 0 }}>
                                {lIdx + 1}.
                              </span>
                              <span style={{ color: isCompleted(course.id, lesson.id) ? 'rgba(76,175,125,0.6)' : 'var(--mb-dark)', minWidth: 0, flex: 1 }}>
                                {lesson.title}
                              </span>
                              {isCompleted(course.id, lesson.id) && (
                                <span style={{ color: 'var(--mb-green)', flexShrink: 0, fontSize: '11px' }}>✓</span>
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
      </div>
    </>
  );
}
