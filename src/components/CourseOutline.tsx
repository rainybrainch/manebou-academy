'use client';

import Link from 'next/link';
import type { Course } from '@/types';

interface Props {
  course: Course;
  courseId: string;
  currentLessonId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CourseOutline({ course, courseId, currentLessonId, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  const totalLessons = course.lessons.length;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-30" onClick={onClose} aria-hidden="true" />

      {/* Floating panel */}
      <div
        className="fixed z-40 flex flex-col"
        style={{
          top: '3.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(88vw, 380px)',
          maxHeight: 'calc(100vh - 5rem)',
          background: 'var(--mb-cream)',
          border: '2px solid var(--mb-dark)',
          boxShadow: '5px 5px 0 var(--mb-gold)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          className="px-4 py-3 flex items-center justify-between shrink-0"
          style={{ background: 'var(--mb-dark)', borderBottom: '2px solid var(--mb-gold)' }}
        >
          <div className="flex items-center gap-2 min-w-0">
            <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--mb-gold)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
            </svg>
            <div className="min-w-0">
              <div
                className="text-sm font-bold text-white truncate"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {course.title}
              </div>
              <div className="text-[10px] tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                全体フロー · {totalLessons}講義
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-6 h-6 flex items-center justify-center text-white/50 hover:text-white transition-colors text-lg leading-none ml-2"
            aria-label="閉じる"
          >
            ✕
          </button>
        </div>

        {/* Lesson list */}
        <div className="flex-1 overflow-y-auto">
          {course.lessons.map((lesson, idx) => {
            const isCurrent = lesson.id === currentLessonId;

            return (
              <Link
                key={lesson.id}
                href={`/courses/${courseId}/lessons/${lesson.id}`}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 transition-colors"
                style={{
                  background: isCurrent ? 'rgba(245,200,66,0.15)' : 'transparent',
                  borderBottom: '1px solid rgba(26,26,46,0.06)',
                  borderLeft: isCurrent ? '3px solid var(--mb-gold)' : '3px solid transparent',
                }}
              >
                {/* Number */}
                <span
                  className="text-[11px] font-bold shrink-0 w-6 text-right"
                  style={{
                    color: isCurrent ? 'var(--mb-gold-dark, #D4A017)' : 'rgba(26,26,46,0.35)',
                    fontFamily: "'Dela Gothic One', sans-serif",
                  }}
                >
                  {idx + 1}
                </span>

                {/* Title */}
                <span
                  className="text-xs leading-relaxed flex-1"
                  style={{
                    color: isCurrent ? 'var(--mb-dark)' : 'rgba(26,26,46,0.7)',
                    fontWeight: isCurrent ? '700' : '500',
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                  }}
                >
                  {lesson.title}
                </span>

                {/* Badges */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  {lesson.isComingSoon && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: 'rgba(26,26,46,0.1)', color: 'rgba(26,26,46,0.4)' }}>
                      準備中
                    </span>
                  )}
                  {lesson.gameTags && lesson.gameTags.length > 0 && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: 'rgba(245,200,66,0.2)', color: '#D4A017' }}>
                      🎲 ZAi
                    </span>
                  )}
                  {isCurrent && (
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--mb-gold)' }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
