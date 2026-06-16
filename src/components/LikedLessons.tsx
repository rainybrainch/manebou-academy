'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { categories } from '@/data/courses';

export default function LikedLessons() {
  const [liked, setLiked] = useState<{ courseId: string; lessonId: string; courseTitle: string; lessonTitle: string }[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const results: typeof liked = [];
    categories.forEach(cat =>
      cat.courses.forEach(course =>
        course.lessons.forEach(lesson => {
          if (localStorage.getItem(`mb_like_${course.id}_${lesson.id}`) === '1') {
            results.push({ courseId: course.id, lessonId: lesson.id, courseTitle: course.title, lessonTitle: lesson.title });
          }
        })
      )
    );
    setLiked(results);
    setMounted(true);
  }, []);

  const handleUnlike = (courseId: string, lessonId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.removeItem(`mb_like_${courseId}_${lessonId}`);
    setLiked(prev => prev.filter(l => !(l.courseId === courseId && l.lessonId === lessonId)));
  };

  if (!mounted || liked.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'var(--mb-dark)' }}>
        <span>❤️</span> いいねした講義
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(232,53,74,0.1)', color: '#E8354A' }}>
          {liked.length}件
        </span>
      </h2>
      <div className="space-y-2">
        {liked.map(({ courseId, lessonId, courseTitle, lessonTitle }) => (
          <div
            key={`${courseId}/${lessonId}`}
            className="flex items-center gap-3 p-3 rounded-xl border-2 transition-all hover:-translate-y-px"
            style={{ background: 'white', borderColor: 'rgba(232,53,74,0.2)', boxShadow: '2px 2px 0 rgba(232,53,74,0.15)' }}
          >
            <Link href={`/courses/${courseId}/lessons/${lessonId}`} className="flex items-center gap-3 flex-1 min-w-0">
              <span className="text-lg shrink-0">❤️</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold truncate" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {lessonTitle}
                </div>
                <div className="text-[10px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {courseTitle}
                </div>
              </div>
              <svg className="w-4 h-4 shrink-0" style={{ color: 'rgba(26,26,46,0.25)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <button
              onClick={(e) => handleUnlike(courseId, lessonId, e)}
              className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-[11px] transition-all hover:scale-110 active:scale-95"
              style={{ background: 'rgba(232,53,74,0.08)', color: '#E8354A' }}
              title="いいねを解除"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
