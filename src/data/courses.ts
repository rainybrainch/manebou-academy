import { Category } from '@/types';
import { kidsMoneyCategory } from './course-kids-money';

export const categories: Category[] = [
  kidsMoneyCategory,
];

export function getCourse(courseId: string) {
  for (const category of categories) {
    const course = category.courses.find(c => c.id === courseId);
    if (course) return { course, category };
  }
  return undefined;
}

export function getLesson(courseId: string, lessonId: string) {
  const result = getCourse(courseId);
  if (!result) return undefined;
  const { course, category } = result;
  const lesson = course.lessons.find(l => l.id === lessonId);
  if (!lesson) return undefined;
  return { lesson, course, category };
}

export function getAdjacentLessons(courseId: string, lessonId: string) {
  const result = getCourse(courseId);
  if (!result) return { prev: null, next: null };
  const { category, course } = result;

  // Get current lesson
  const currentLesson = course.lessons.find(l => l.id === lessonId);
  if (!currentLesson) return { prev: null, next: null };

  // If this is a ZAi-linked lesson, prioritize navigation within zai-linked-hub
  if (currentLesson.gameTags && currentLesson.gameTags.length > 0) {
    const zaiLinkedCategory = categories.find(c => c.id === 'zai-linked-hub');
    if (zaiLinkedCategory) {
      // Flatten all lessons in all chapters of zai-linked-hub
      const zaiFlat: { lesson: (typeof zaiLinkedCategory.courses)[0]['lessons'][0]; chapterTitle: string; courseId: string }[] = [];
      for (const chapter of zaiLinkedCategory.courses) {
        for (const lesson of chapter.lessons) {
          zaiFlat.push({ lesson, chapterTitle: chapter.title, courseId: chapter.id });
        }
      }

      // Find current lesson's index in zai-linked-hub
      const zaiIdx = zaiFlat.findIndex(f => f.lesson.id === lessonId);
      if (zaiIdx >= 0) {
        // Return prev/next within zai-linked-hub
        return {
          prev: zaiIdx > 0 ? { lesson: zaiFlat[zaiIdx - 1].lesson, chapterTitle: zaiFlat[zaiIdx - 1].chapterTitle, courseId: zaiFlat[zaiIdx - 1].courseId } : null,
          next: zaiIdx < zaiFlat.length - 1 ? { lesson: zaiFlat[zaiIdx + 1].lesson, chapterTitle: zaiFlat[zaiIdx + 1].chapterTitle, courseId: zaiFlat[zaiIdx + 1].courseId } : null,
        };
      }
    }
  }

  // Standard navigation within the same category
  const flat: { lesson: (typeof category.courses)[0]['lessons'][0]; chapterTitle: string; courseId: string }[] = [];
  for (const ch of category.courses) {
    for (const l of ch.lessons) {
      flat.push({ lesson: l, chapterTitle: ch.title, courseId: ch.id });
    }
  }

  const idx = flat.findIndex(f => f.courseId === courseId && f.lesson.id === lessonId);
  return {
    prev: idx > 0 ? { lesson: flat[idx - 1].lesson, chapterTitle: flat[idx - 1].chapterTitle, courseId: flat[idx - 1].courseId } : null,
    next: idx < flat.length - 1 ? { lesson: flat[idx + 1].lesson, chapterTitle: flat[idx + 1].chapterTitle, courseId: flat[idx + 1].courseId } : null,
  };
}