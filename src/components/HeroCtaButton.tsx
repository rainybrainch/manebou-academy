'use client';

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

export default function HeroCtaButton() {
  const { isCompleted, lastViewedLesson, completedCount, mounted } = useProgress();

  let href = '/courses';
  let label = '学習を始める';
  let icon = (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  );

  if (mounted && completedCount > 0) {
    // Try to resume last viewed incomplete lesson
    if (lastViewedLesson) {
      const [lvCourseId, lvLessonId] = lastViewedLesson.split('/');
      for (const cat of categories) {
        const course = cat.courses.find(c => c.id === lvCourseId);
        if (course) {
          const lesson = course.lessons.find(l => l.id === lvLessonId);
          if (lesson && !lesson.isComingSoon && !isCompleted(lvCourseId, lvLessonId)) {
            href = `/courses/${lvCourseId}/lessons/${lvLessonId}`;
            label = '続きから学ぶ';
            break;
          }
        }
      }
    }

    // If no resume target, find first incomplete
    if (label === '学習を始める') {
      outer: for (const cat of categories) {
        for (const course of cat.courses) {
          for (const lesson of course.lessons) {
            if (!lesson.isComingSoon && !isCompleted(course.id, lesson.id)) {
              href = `/courses/${course.id}/lessons/${lesson.id}`;
              label = '続きから学ぶ';
              break outer;
            }
          }
        }
      }
    }

    // All done
    if (label === '学習を始める') {
      href = '/courses';
      label = 'もう一度見る';
      icon = (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    }
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 rounded-lg border-2 font-bold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
      style={{
        background: 'var(--mb-gold)',
        borderColor: 'var(--mb-gold)',
        color: 'var(--mb-dark)',
        fontFamily: "'Dela Gothic One', sans-serif",
        letterSpacing: '0.03em',
        boxShadow: '3px 3px 0 rgba(255,255,255,0.15)',
      }}
    >
      {icon}
      {label}
    </Link>
  );
}
