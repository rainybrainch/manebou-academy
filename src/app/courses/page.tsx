import { categories } from '@/data/courses';
import CoursesClient from './CoursesClient';

export default function CoursesPage() {
  const totalCourses = categories.reduce((a, cat) => a + cat.courses.length, 0);
  const totalLessons = categories.reduce(
    (a, cat) => a + cat.courses.reduce((b, c) => b + c.lessons.length, 0),
    0
  );
  return <CoursesClient categories={categories} totalCourses={totalCourses} totalLessons={totalLessons} />;
}
