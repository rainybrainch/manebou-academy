'use client';

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';
import { Skeleton, SkeletonStyle } from './Skeleton';

const categoryMeta: Record<string, { icon: string; color: string }> = {
  'money-basics-full': { icon: '💴', color: '#5BC8E8' },
  'money-knowledge':   { icon: '🌐', color: '#9B6DD6' },
  'zai-course':        { icon: '🎲', color: '#F5C842' },
  'stock-intro':       { icon: '📈', color: '#4CAF7D' },
  'nisa-basics':       { icon: '🏦', color: '#E8354A' },
};

export default function NextLessonCard() {
  const { isCompleted, lastViewedLesson, mounted } = useProgress();

  // Resolve target: prefer "resume" (last viewed if not completed), else first incomplete
  let targetCourseId = '';
  let targetCourseTitle = '';
  let targetLesson = categories[0]?.courses[0]?.lessons[0];
  let targetCategoryId = categories[0]?.id ?? '';
  let isResume = false;

  if (mounted && lastViewedLesson) {
    // Try to resume last viewed
    const [lvCourseId, lvLessonId] = lastViewedLesson.split('/');
    for (const cat of categories) {
      const course = cat.courses.find(c => c.id === lvCourseId);
      if (course) {
        const lesson = course.lessons.find(l => l.id === lvLessonId);
        if (lesson && !lesson.isComingSoon && !isCompleted(lvCourseId, lvLessonId)) {
          targetCourseId = lvCourseId;
          targetCourseTitle = course.title;
          targetLesson = lesson;
          targetCategoryId = cat.id;
          isResume = true;
          break;
        }
      }
    }
  }

  if (!isResume) {
    // Fall through to first incomplete
    outer: for (const cat of categories) {
      for (const course of cat.courses) {
        for (const lesson of course.lessons) {
          if (!lesson.isComingSoon && (!mounted || !isCompleted(course.id, lesson.id))) {
            targetCourseId = course.id;
            targetCourseTitle = course.title;
            targetLesson = lesson;
            targetCategoryId = cat.id;
            break outer;
          }
        }
      }
    }
  }

  // Course-level progress
  let courseDone = 0;
  let courseTotal = 0;
  if (targetCourseId && mounted) {
    for (const cat of categories) {
      const course = cat.courses.find(c => c.id === targetCourseId);
      if (course) {
        const available = course.lessons.filter(l => !l.isComingSoon);
        courseTotal = available.length;
        courseDone = available.filter(l => isCompleted(targetCourseId, l.id)).length;
        break;
      }
    }
  }

  const meta = categoryMeta[targetCategoryId];
  const href = targetLesson ? `/courses/${targetCourseId}/lessons/${targetLesson.id}` : '/courses';
  const coursePct = courseTotal > 0 ? Math.round((courseDone / courseTotal) * 100) : 0;

  if (!mounted) {
    return (
      <>
        <SkeletonStyle />
        <div className="rounded-xl border-2 overflow-hidden" style={{ borderColor: 'rgba(26,26,46,0.1)' }}>
          <div className="p-4 space-y-3" style={{ background: 'rgba(26,26,46,0.04)' }}>
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-2 w-full" />
          </div>
        </div>
      </>
    );
  }

  return (
    <Link
      href={href}
      className="flex flex-col rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
      style={{
        background: 'var(--mb-dark)',
        borderColor: 'var(--mb-dark)',
        boxShadow: '4px 4px 0 var(--mb-gold)',
      }}
    >
      {/* Course progress bar */}
      {mounted && courseTotal > 0 && (
        <div className="h-1" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            className="h-full transition-all duration-700"
            style={{ width: `${coursePct}%`, background: meta?.color ?? 'var(--mb-gold)' }}
          />
        </div>
      )}

      <div className="flex items-center gap-4 p-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl border-2"
          style={{ background: 'rgba(245,200,66,0.1)', borderColor: 'rgba(245,200,66,0.3)' }}
        >
          {meta?.icon ?? '📖'}
        </div>

        <div className="flex-1 min-w-0">
          {/* Badge: resume or next */}
          <div className="flex items-center gap-1.5 mb-1">
            {isResume ? (
              <span
                className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: 'rgba(245,200,66,0.2)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                ▶ 続きから
              </span>
            ) : (
              <span
                className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: 'rgba(91,200,232,0.15)', color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                NEXT
              </span>
            )}
            {mounted && courseTotal > 0 && courseDone > 0 && (
              <span
                className="text-[8px]"
                style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Dela Gothic One', sans-serif" }}
              >
                {courseDone}/{courseTotal}
              </span>
            )}
          </div>

          {/* Chapter title */}
          {targetCourseTitle && (
            <div className="text-[10px] truncate mb-0.5" style={{ color: meta?.color ?? 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {targetCourseTitle}
            </div>
          )}

          {/* Lesson title */}
          <div className="text-sm font-bold leading-snug line-clamp-2" style={{ color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {targetLesson?.title ?? '最初の講義を始めよう'}
          </div>

          {targetLesson?.duration && (
            <div className="text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {targetLesson.duration}
            </div>
          )}
        </div>

        <div
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center border-2"
          style={{ background: 'var(--mb-gold)', borderColor: 'var(--mb-gold)' }}
        >
          <svg className="w-4 h-4" style={{ color: 'var(--mb-dark)' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}
