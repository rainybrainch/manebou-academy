'use client';

import { useState } from 'react';
import LessonContent from './LessonContent';
import RightPanel from './RightPanel';
import CourseOutline from './CourseOutline';
import type { Lesson, Course } from '@/types';

interface AdjacentLesson {
  lesson: { id: string; title: string };
  chapterTitle: string;
}

interface LessonShellProps {
  lesson: Lesson;
  course: Course;
  courseId: string;
  courseTitle: string;
  chapterTitle: string;
  prev: AdjacentLesson | null;
  next: AdjacentLesson | null;
}

export default function LessonShell({
  lesson,
  course,
  courseId,
  courseTitle,
  chapterTitle,
  prev,
  next,
}: LessonShellProps) {
  const [checkOpen, setCheckOpen] = useState(false);
  const [outlineOpen, setOutlineOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <LessonContent
        lesson={lesson}
        courseId={courseId}
        courseTitle={courseTitle}
        chapterTitle={chapterTitle}
        prev={prev}
        next={next}
        checkOpen={checkOpen}
        onToggleCheck={() => setCheckOpen(!checkOpen)}
        outlineOpen={outlineOpen}
        onToggleOutline={() => setOutlineOpen(!outlineOpen)}
      />

      {/* Floating checklist popup */}
      <RightPanel
        checkItems={lesson.checkItems}
        isOpen={checkOpen}
        onClose={() => setCheckOpen(false)}
      />

      {/* Floating course outline popup */}
      <CourseOutline
        course={course}
        courseId={courseId}
        currentLessonId={lesson.id}
        isOpen={outlineOpen}
        onClose={() => setOutlineOpen(false)}
      />
    </div>
  );
}
