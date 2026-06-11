'use client';

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import type { Course } from '@/types';

interface Props {
  course: Course;
  courseId: string;
  currentLessonId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CourseOutline({ course, courseId, currentLessonId, isOpen, onClose }: Props) {
  const { isCompleted, mounted } = useProgress();
  if (!isOpen) return null;

  const availableCount = course.lessons.filter(l => !l.isComingSoon).length;
  const completedCount = mounted
    ? course.lessons.filter(l => !l.isComingSoon && isCompleted(courseId, l.id)).length
    : 0;
  const pct = availableCount > 0 ? Math.round((completedCount / availableCount) * 100) : 0;

  return (
    <>
      <div className="fixed inset-0 z-30" onClick={onClose} aria-hidden="true" />

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
              <div className="text-sm font-bold text-white truncate" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {course.title}
              </div>
              <div className="text-[10px] tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {availableCount}講義
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

        {/* Progress bar */}
        {mounted && (
          <div className="px-4 py-2.5 shrink-0" style={{ background: 'rgba(26,26,46,0.04)', borderBottom: '1px solid rgba(26,26,46,0.08)' }}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                進捗
              </span>
              <span className="text-[10px] font-bold" style={{ color: '#4CAF7D', fontFamily: "'Dela Gothic One', sans-serif" }}>
                {completedCount} / {availableCount}
              </span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,46,0.1)' }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, background: '#4CAF7D' }}
              />
            </div>
          </div>
        )}

        {/* Jump to next */}
        {mounted && (() => {
          const nextIncomplete = course.lessons.find(l => !l.isComingSoon && !isCompleted(courseId, l.id));
          if (!nextIncomplete || nextIncomplete.id === currentLessonId) return null;
          return (
            <Link
              href={`/courses/${courseId}/lessons/${nextIncomplete.id}`}
              onClick={onClose}
              className="flex items-center justify-center gap-2 py-2.5 border-b text-xs font-bold transition-all hover:opacity-80"
              style={{ background: 'rgba(245,200,66,0.1)', borderColor: 'rgba(245,200,66,0.3)', color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              次の未完了講義へ
            </Link>
          );
        })()}

        {/* Lesson list */}
        <div className="flex-1 overflow-y-auto">
          {course.lessons.map((lesson, idx) => {
            const isCurrent = lesson.id === currentLessonId;
            const done = mounted && !lesson.isComingSoon && isCompleted(courseId, lesson.id);

            return (
              <Link
                key={lesson.id}
                href={`/courses/${courseId}/lessons/${lesson.id}`}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 transition-colors"
                style={{
                  background: isCurrent ? 'rgba(245,200,66,0.15)' : done ? 'rgba(76,175,125,0.04)' : 'transparent',
                  borderBottom: '1px solid rgba(26,26,46,0.06)',
                  borderLeft: isCurrent ? '3px solid var(--mb-gold)' : done ? '3px solid #4CAF7D' : '3px solid transparent',
                }}
              >
                {/* Number / check icon */}
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: done ? '#4CAF7D' : isCurrent ? 'var(--mb-gold)' : 'rgba(26,26,46,0.1)',
                  }}
                >
                  {done ? (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span
                      className="text-[9px] font-bold"
                      style={{
                        color: isCurrent ? 'var(--mb-dark)' : 'rgba(26,26,46,0.4)',
                        fontFamily: "'Dela Gothic One', sans-serif",
                      }}
                    >
                      {idx + 1}
                    </span>
                  )}
                </div>

                {/* Title */}
                <span
                  className="text-xs leading-relaxed flex-1"
                  style={{
                    color: done ? 'rgba(26,26,46,0.45)' : isCurrent ? 'var(--mb-dark)' : 'rgba(26,26,46,0.7)',
                    fontWeight: isCurrent ? '700' : '500',
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                    textDecoration: done ? 'line-through' : 'none',
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
                  {lesson.gameTags?.length ? (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: 'rgba(245,200,66,0.2)', color: '#D4A017' }}>
                      🎲
                    </span>
                  ) : null}
                  {isCurrent && (
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--mb-gold)' }} />
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
