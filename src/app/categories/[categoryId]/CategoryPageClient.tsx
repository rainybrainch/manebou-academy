'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/types';
import type { TopicCategory } from '@/types';
import { useMyCourses } from '@/hooks/useMyCourses';
import CategoryCardProgress from '@/components/CategoryCardProgress';

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

interface Props {
  tc: TopicCategory;
  courses: Category[];
}

export default function CategoryPageClient({ tc, courses }: Props) {
  const { isSelected, toggle, mounted } = useMyCourses();
  const tm = topicMeta[tc.id];
  const accent = tm?.color ?? '#5BC8E8';

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

        <div className="px-4 py-3 flex items-center justify-between" style={{ background: 'var(--mb-dark)' }}>
          <div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>カテゴリ</div>
            <div className="text-sm font-bold text-white" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>{tc.title}</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold" style={{ color: accent, fontFamily: "'Dela Gothic One', sans-serif" }}>{courses.length}コース</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{totalLessons}講義</div>
          </div>
        </div>
      </div>

      {/* マイコース表示（選択済みがある場合） */}
      {mounted && courses.some(c => isSelected(c.id)) && (
        <div className="mb-5 p-3 rounded-xl border-2" style={{ background: `${accent}08`, borderColor: accent }}>
          <div className="text-[10px] font-bold mb-2" style={{ color: accent, fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            ⭐ 学習中のコース
          </div>
          <div className="flex flex-wrap gap-1.5">
            {courses.filter(c => isSelected(c.id)).map(c => (
              <Link
                key={c.id}
                href={`/courses/${c.courses[0]?.id ?? ''}`}
                className="text-[10px] font-bold px-2.5 py-1 rounded-full border-2 transition-all hover:opacity-80"
                style={{ background: `${accent}18`, borderColor: accent, color: accent, fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* コース一覧 */}
      <div className="mb-3 flex items-center gap-2">
        <div className="w-1.5 h-4 rounded-full" style={{ background: accent }} />
        <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          COURSES
        </span>
        <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          学ぶコースを選んでね
        </span>
      </div>

      <div className="space-y-4">
        {courses.map(course => {
          const chapterCount = course.courses.length;
          const lessonCount = course.courses.reduce((a, c) => a + c.lessons.length, 0);
          const selected = mounted && isSelected(course.id);

          return (
            <div
              key={course.id}
              className="rounded-xl border-2 bg-white overflow-hidden"
              style={{
                borderColor: selected ? accent : 'var(--mb-dark)',
                boxShadow: selected ? `3px 3px 0 ${accent}` : '3px 3px 0 rgba(26,26,46,0.15)',
              }}
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
                  {selected && (
                    <div
                      className="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                      style={{ background: accent, color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      ⭐ 学習中
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
                  className="w-full flex items-center justify-center relative"
                  style={{ background: `${accent}12`, aspectRatio: '16/9' }}
                >
                  <span className="text-4xl">📖</span>
                  {selected && (
                    <div
                      className="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                      style={{ background: accent, color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      ⭐ 学習中
                    </div>
                  )}
                </div>
              )}

              {/* コース情報 */}
              <div className="p-3">
                {!course.image && (
                  <>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {course.level && (
                        <span
                          className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: `${LEVEL_COLOR[course.level] ?? accent}20`, color: LEVEL_COLOR[course.level] ?? accent, fontFamily: "'Zen Maru Gothic', sans-serif" }}
                        >
                          {course.level}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold mb-1" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                      {course.title}
                    </div>
                  </>
                )}
                <p className="text-xs mb-3 line-clamp-2" style={{ color: 'rgba(26,26,46,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {chapterCount}章 · {lessonCount}講義
                  </span>
                  <CategoryCardProgress category={course} />
                </div>

                {/* アクションボタン */}
                <div className="flex gap-2">
                  <Link
                    href={`/courses/${course.courses[0]?.id ?? ''}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-bold border-2 transition-all hover:opacity-80"
                    style={{
                      background: accent,
                      borderColor: accent,
                      color: 'var(--mb-dark)',
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                    }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    学習を始める
                  </Link>

                  <button
                    onClick={() => toggle(course.id)}
                    className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-[11px] font-bold border-2 transition-all hover:opacity-80"
                    style={{
                      background: selected ? `${accent}18` : 'transparent',
                      borderColor: selected ? accent : 'rgba(26,26,46,0.2)',
                      color: selected ? accent : 'rgba(26,26,46,0.4)',
                      fontFamily: "'Zen Maru Gothic', sans-serif",
                    }}
                  >
                    {selected ? '⭐' : '☆'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* コース一覧へ */}
      <Link
        href="/courses"
        className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 text-sm font-bold"
        style={{ borderColor: accent, color: accent, background: `${accent}10`, fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        ← コース一覧に戻る
      </Link>
    </div>
  );
}
