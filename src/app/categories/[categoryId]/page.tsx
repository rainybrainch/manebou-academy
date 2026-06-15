import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/courses';
import { getTopicCategoryById } from '@/data/structure';
import CategoryCardProgress from '@/components/CategoryCardProgress';

interface Props {
  params: Promise<{ categoryId: string }>;
}

const topicMeta: Record<string, { icon: string; color: string; tagline: string }> = {
  'cat-money':      { icon: '💴', color: '#5BC8E8', tagline: 'お金を学ぼうマネぼう！' },
  'cat-investment': { icon: '📈', color: '#4CAF7D', tagline: '投資を学ぼうマネぼう！' },
  'cat-economics':  { icon: '🌐', color: '#9B6DD6', tagline: '経済を学ぼうマネぼう！' },
  'cat-politics':   { icon: '🏛', color: '#9B6DD6', tagline: '政治を学ぼうマネぼう！' },
  'cat-zai':        { icon: '🎲', color: '#F5C842', tagline: 'ZAiで学ぼうマネぼう！' },
  'cat-boardgame':  { icon: '🎯', color: '#F5C842', tagline: 'ゲームで学ぼうマネぼう！' },
  'cat-exam-public':{ icon: '📝', color: '#E8354A', tagline: '受験対策マネぼう！' },
};

const LEVEL_COLOR: Record<string, string> = {
  '入門': '#4CAF7D',
  '基礎': '#5BC8E8',
  '応用': '#F5C842',
  '上級': '#E8354A',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;
  const tc = getTopicCategoryById(categoryId);
  if (!tc) return {};
  return {
    title: `${tc.title} | マネぼうアカデミー`,
    description: tc.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;
  const tc = getTopicCategoryById(categoryId);
  if (!tc) notFound();

  const tm = topicMeta[categoryId];
  const accent = tm?.color ?? '#5BC8E8';

  const courses = categories.filter(c => c.topicCategoryId === categoryId);
  if (courses.length === 0) notFound();

  const totalLessons = courses.reduce((a, c) => a + c.courses.reduce((b, ch) => b + ch.lessons.length, 0), 0);

  return (
    <div className="max-w-xl mx-auto px-4 py-6">

      {/* パンくず */}
      <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>›</span>
        <Link href="/courses" className="hover:underline">コース一覧</Link>
        <span>›</span>
        <span style={{ color: accent }}>{tc.title}</span>
      </div>

      {/* カテゴリヘッダー */}
      <div
        className="rounded-2xl overflow-hidden mb-6 border-2"
        style={{ borderColor: accent, boxShadow: `4px 4px 0 ${accent}` }}
      >
        {tc.image ? (
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image src={tc.image} alt={tc.title} fill className="object-cover" quality={85} priority />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(26,26,46,0.75))' }} />
            <div className="absolute bottom-3 left-4 right-4">
              <div className="text-lg font-bold text-white" style={{ fontFamily: "'Dela Gothic One', sans-serif" }}>
                {tm?.tagline}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="w-full flex flex-col items-center justify-center py-8 gap-2"
            style={{ background: `${accent}18`, aspectRatio: '16/9' }}
          >
            <span className="text-5xl">{tm?.icon ?? '📚'}</span>
            <span className="text-lg font-bold" style={{ color: accent, fontFamily: "'Dela Gothic One', sans-serif" }}>
              {tm?.tagline}
            </span>
          </div>
        )}

        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{ background: 'var(--mb-dark)' }}
        >
          <div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              カテゴリ
            </div>
            <div className="text-sm font-bold text-white" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {tc.title}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold" style={{ color: accent, fontFamily: "'Dela Gothic One', sans-serif" }}>
              {courses.length}コース
            </div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {totalLessons}講義
            </div>
          </div>
        </div>
      </div>

      {/* コース一覧 */}
      <div className="mb-3 flex items-center gap-2">
        <div className="w-1.5 h-4 rounded-full" style={{ background: accent }} />
        <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          COURSES
        </span>
      </div>

      <div className="space-y-4">
        {courses.map(course => {
          const chapterCount = course.courses.length;
          const lessonCount = course.courses.reduce((a, c) => a + c.lessons.length, 0);

          return (
            <Link
              key={course.id}
              href={`/courses/${course.courses[0]?.id ?? ''}`}
              className="flex flex-col rounded-xl border-2 bg-white overflow-hidden transition-all hover:-translate-y-0.5 active:translate-y-0"
              style={{ borderColor: 'var(--mb-dark)', boxShadow: `3px 3px 0 ${accent}` }}
            >
              {/* コース画像 16:9 */}
              {course.image ? (
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 576px"
                    className="object-cover"
                    quality={80}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(26,26,46,0.65))' }} />
                  {course.level && (
                    <div
                      className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: LEVEL_COLOR[course.level] ?? accent, color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {course.level}
                    </div>
                  )}
                  <div className="absolute bottom-2 left-3 right-3">
                    <span className="text-sm font-bold text-white" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                      {course.title}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="w-full flex items-center justify-center"
                  style={{ background: `${accent}12`, aspectRatio: '16/9' }}
                >
                  <span className="text-4xl">📖</span>
                </div>
              )}

              {/* コース情報 */}
              <div className="p-3">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  {!course.image && course.level && (
                    <span
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${LEVEL_COLOR[course.level] ?? accent}20`, color: LEVEL_COLOR[course.level] ?? accent, fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {course.level}
                    </span>
                  )}
                </div>
                {!course.image && (
                  <div className="text-sm font-bold mb-1" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {course.title}
                  </div>
                )}
                <p className="text-xs mb-2 line-clamp-2" style={{ color: 'rgba(26,26,46,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {chapterCount}章 · {lessonCount}講義
                  </span>
                  <CategoryCardProgress category={course} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* コース一覧へ */}
      <Link
        href="/courses"
        className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 text-sm font-bold"
        style={{ borderColor: accent, color: accent, background: `${accent}10`, fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        すべてのコースを見る →
      </Link>
    </div>
  );
}
