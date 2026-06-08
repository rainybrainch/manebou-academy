import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourse } from '@/data/courses';

interface Props {
  params: Promise<{ courseId: string }>;
}

export default async function CoursePage({ params }: Props) {
  const { courseId } = await params;
  const result = getCourse(courseId);
  if (!result) notFound();

  const { course, category } = result;
  const firstLessonId = course.lessons[0]?.id;

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-xs mb-4 flex items-center gap-1.5" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/courses" className="hover:underline">コース一覧</Link>
        <span>/</span>
        <span style={{ color: 'var(--mb-dark)' }}>{category.title}</span>
        <span>/</span>
        <span style={{ color: 'var(--mb-dark)' }}>{course.title}</span>
      </nav>

      {/* Course header */}
      <div
        className="rounded-xl p-4 mb-5 border-2"
        style={{ background: 'var(--mb-dark)', borderColor: 'var(--mb-dark)', boxShadow: '4px 4px 0 var(--mb-gold)' }}
      >
        <div className="text-[10px] tracking-[3px] mb-1" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {category.title}
        </div>
        <h1 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {course.title}
        </h1>
        {course.description && (
          <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {course.description}
          </p>
        )}
        <div className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {course.lessons.length}講義
        </div>
        {firstLessonId && (
          <Link
            href={`/courses/${courseId}/lessons/${firstLessonId}`}
            className="inline-block px-5 py-2.5 rounded-xl text-sm font-bold border-2 transition-all hover:-translate-y-0.5"
            style={{
              background: 'var(--mb-gold)',
              borderColor: 'var(--mb-gold)',
              color: 'var(--mb-dark)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
              boxShadow: '2px 2px 0 rgba(255,255,255,0.2)',
            }}
          >
            最初のレッスンを始める &#x2192;
          </Link>
        )}
      </div>

      {/* Lesson list */}
      <div
        className="rounded-xl overflow-hidden border-2"
        style={{ borderColor: 'var(--mb-dark)', background: 'white', boxShadow: '3px 3px 0 var(--mb-gold)' }}
      >
        <div className="px-4 py-3 border-b-2" style={{ background: 'rgba(26,26,46,0.04)', borderColor: 'rgba(26,26,46,0.1)' }}>
          <h2 className="text-sm font-bold" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            講義一覧
          </h2>
        </div>
        <div>
          {course.lessons.map((lesson, idx) => (
            <Link
              key={lesson.id}
              href={`/courses/${courseId}/lessons/${lesson.id}`}
              className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[#FFFDF5] group border-b"
              style={{ borderColor: 'rgba(26,26,46,0.08)' }}
            >
              <div
                className="w-7 h-7 rounded flex items-center justify-center shrink-0 text-[11px] font-bold"
                style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}
              >
                {idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium truncate" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {lesson.title}
                  </span>
                  {lesson.isPremium && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded font-bold shrink-0" style={{ background: 'rgba(245,200,66,0.2)', color: '#D4A017' }}>
                      プレミアム
                    </span>
                  )}
                  {lesson.isComingSoon && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded font-bold shrink-0" style={{ background: 'rgba(26,26,46,0.08)', color: 'rgba(26,26,46,0.4)' }}>
                      準備中
                    </span>
                  )}
                  {lesson.gameTags && lesson.gameTags.length > 0 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded font-bold shrink-0" style={{ background: 'rgba(245,200,66,0.15)', color: '#D4A017' }}>
                      ZAi
                    </span>
                  )}
                </div>
                <span className="text-xs" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{lesson.duration}</span>
              </div>
              <svg className="w-4 h-4 transition-colors" style={{ color: 'rgba(26,26,46,0.25)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}