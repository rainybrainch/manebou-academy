import { notFound } from 'next/navigation';
import { getLesson, getAdjacentLessons } from '@/data/courses';
import LessonShell from '@/components/LessonShell';

interface Props {
  params: Promise<{ courseId: string; lessonId: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { courseId, lessonId } = await params;
  const result = getLesson(courseId, lessonId);
  if (!result) notFound();

  const { lesson, course, category } = result;
  const { prev, next } = getAdjacentLessons(courseId, lessonId);

  return (
    <LessonShell
      lesson={lesson}
      course={course}
      courseId={courseId}
      courseTitle={category.title}
      chapterTitle={course.title}
      prev={prev}
      next={next}
    />
  );
}
