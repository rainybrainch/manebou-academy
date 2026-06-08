import Link from 'next/link';
import { categories } from '@/data/courses';

const categoryMeta: Record<string, { icon: string; color: string; shadow: string }> = {
  'money-knowledge': { icon: '💴', color: '#5BC8E8', shadow: '#5BC8E8' },
  'zai-course':      { icon: '🎲', color: '#F5C842', shadow: '#F5C842' },
  'stock-intro':     { icon: '📈', color: '#4CAF7D', shadow: '#4CAF7D' },
  'money-basics':    { icon: '💰', color: '#9B6DD6', shadow: '#9B6DD6' },
  'nisa-basics':     { icon: '🏦', color: '#E8354A', shadow: '#E8354A' },
};

export default function CoursesPage() {
  const totalCourses = categories.reduce((a, cat) => a + cat.courses.length, 0);
  const totalLessons = categories.reduce(
    (a, cat) => a + cat.courses.reduce((b, c) => b + c.lessons.length, 0),
    0
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div
          className="inline-block text-[10px] font-bold tracking-[4px] px-3 py-1 rounded mb-3"
          style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          COURSES
        </div>
        <h1
          className="text-2xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}
        >
          コース一覧
        </h1>
        <p className="text-sm mt-1" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          全{categories.length}カテゴリ · {totalCourses}コース · {totalLessons}講義
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-10">
        {categories.map((category) => {
          const meta = categoryMeta[category.id];
          return (
            <div key={category.id}>
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-lg border-2 shrink-0"
                  style={{ borderColor: 'var(--mb-dark)', background: meta?.color ?? '#ccc' }}
                >
                  {meta?.icon ?? '📚'}
                </div>
                <div className="flex-1 min-w-0">
                  <h2
                    className="text-base font-bold leading-tight"
                    style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {category.title}
                  </h2>
                  <p className="text-[11px] mt-0.5 line-clamp-1" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {category.description}
                  </p>
                </div>
                <div className="flex-1 h-[2px] rounded-full mx-2 shrink-0 w-4" style={{ background: `${meta?.color ?? '#ccc'}40` }} />
                <span
                  className="text-xs font-bold shrink-0"
                  style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {category.courses.length}コース
                </span>
              </div>

              {/* Course grid — 3 columns */}
              <div className="grid grid-cols-3 gap-3">
                {category.courses.map((course, idx) => {
                  const firstLessonId = course.lessons[0]?.id;
                  const lessonCount = course.lessons.length;

                  return (
                    <Link
                      key={course.id}
                      href={firstLessonId ? `/courses/${course.id}/lessons/${firstLessonId}` : '#'}
                      className="flex flex-col rounded-xl overflow-hidden border-2 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      style={{
                        borderColor: 'var(--mb-dark)',
                        boxShadow: `3px 3px 0 ${meta?.shadow ?? '#ccc'}`,
                        background: 'white',
                      }}
                    >
                      {/* Top bar */}
                      <div
                        className="h-1.5 w-full"
                        style={{ background: meta?.color ?? '#ccc' }}
                      />

                      {/* Card body */}
                      <div className="p-3 flex flex-col flex-1">
                        {/* Chapter number badge */}
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className="w-6 h-6 rounded flex items-center justify-center text-[11px] font-bold"
                            style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}
                          >
                            {idx + 1}
                          </div>
                          <span
                            className="text-[10px] font-bold"
                            style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                          >
                            {lessonCount}講義
                          </span>
                        </div>

                        {/* Course title */}
                        <div
                          className="text-xs font-bold leading-snug flex-1 mb-2 line-clamp-3"
                          style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                        >
                          {course.title}
                        </div>

                        {/* Start button */}
                        <div
                          className="text-center text-[11px] font-bold py-1.5 rounded-lg border-2 mt-auto"
                          style={{
                            background: 'var(--mb-gold)',
                            borderColor: 'var(--mb-dark)',
                            color: 'var(--mb-dark)',
                            fontFamily: "'Zen Maru Gothic', sans-serif",
                          }}
                        >
                          進む
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}