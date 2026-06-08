import Link from 'next/link';
import { categories } from '@/data/courses';

const categoryColors: Record<string, { shadow: string; icon: string; label: string }> = {
  'money-knowledge': { shadow: '#5BC8E8', icon: '💴', label: 'お金の知識' },
  'zai-course':      { shadow: '#F5C842', icon: '🎲', label: 'ZAiゲーム' },
  'stock-intro':     { shadow: '#4CAF7D', icon: '📈', label: '株式投資' },
  'money-basics':    { shadow: '#9B6DD6', icon: '💰', label: 'お金の基礎' },
  'nisa-basics':     { shadow: '#E8354A', icon: '🏦', label: 'NISA' },
};

export default function HomePage() {
  const totalLessons = categories.reduce(
    (a, cat) => a + cat.courses.reduce((b, c) => b + c.lessons.length, 0),
    0
  );
  const totalCourses = categories.reduce((a, cat) => a + cat.courses.length, 0);
  const firstCourse = categories[0]?.courses[0];
  const firstLesson = firstCourse
    ? `/courses/${firstCourse.id}/lessons/${firstCourse.lessons[0]?.id}`
    : '/courses';

  return (
    <div className="max-w-xl mx-auto px-4 py-6">

      {/* Page label + title */}
      <div className="mb-5">
        <div
          className="inline-block text-[10px] font-bold tracking-[4px] px-3 py-1 rounded mb-3"
          style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)' }}
        >
          LEARNING REPORT
        </div>
        <h1
          className="text-2xl"
          style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}
        >
          学習レポート
        </h1>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: '達成バッジ', sub: 'BADGES', value: '0', color: '#5BC8E8' },
          { label: '積み立て講義', sub: 'LESSONS', value: '0', color: '#4CAF7D' },
          { label: '連続学習', sub: 'STREAK', value: '1日', color: '#F5C842' },
        ].map((stat) => (
          <div
            key={stat.sub}
            className="bg-white rounded-xl p-4 text-center border-2 transition-transform hover:-translate-y-0.5"
            style={{ borderColor: 'var(--mb-dark)', boxShadow: `4px 4px 0 ${stat.color}` }}
          >
            <div
              className="text-[10px] font-bold tracking-[3px] mb-2"
              style={{ color: stat.color, fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {stat.sub}
            </div>
            <div
              className="text-2xl font-bold"
              style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}
            >
              {stat.value}
            </div>
            <div
              className="text-xs mt-1"
              style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Manebou message card */}
      <div
        className="rounded-xl p-4 mb-4"
        style={{
          background: 'rgba(26,26,46,0.92)',
          backdropFilter: 'blur(12px)',
          borderTop: '4px solid var(--mb-gold)',
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-xl border-2"
            style={{ background: 'rgba(245,200,66,0.15)', borderColor: 'var(--mb-gold)' }}
          >
            🎓
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] tracking-[3px] mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
              マネぼうくんより
            </div>
            <div className="text-sm font-bold mb-3" style={{ color: 'white' }}>
              あなたの成長を全力でサポートします！
            </div>
            <div className="flex gap-2 flex-wrap">
              {[
                { text: `📚 ${categories.length}カテゴリ`, color: 'var(--mb-sky)' },
                { text: `🎓 ${totalLessons}講義`, color: 'var(--mb-gold)' },
                { text: `📑 ${totalCourses}コース`, color: 'var(--mb-green)' },
              ].map((badge) => (
                <span
                  key={badge.text}
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full border"
                  style={{ color: badge.color, borderColor: badge.color, background: 'rgba(255,255,255,0.05)' }}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Share button */}
      <button
        className="w-full py-3 rounded-xl text-sm font-bold mb-6 flex items-center justify-center gap-2 border-2 transition-all hover:-translate-y-0.5"
        style={{
          background: 'white',
          borderColor: 'var(--mb-dark)',
          color: 'var(--mb-dark)',
          boxShadow: '3px 3px 0 var(--mb-dark)',
        }}
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        成長をシェアしよう！
      </button>

      {/* Category list */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div
            className="text-base"
            style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}
          >
            カテゴリ一覧
          </div>
          <Link
            href="/courses"
            className="text-xs font-bold hover:underline"
            style={{ color: 'var(--mb-wave)' }}
          >
            すべて見る →
          </Link>
        </div>

        <div className="space-y-2">
          {categories.map((category) => {
            const meta = categoryColors[category.id];
            const lessonCount = category.courses.reduce((a, c) => a + c.lessons.length, 0);
            const firstCourseInCat = category.courses[0];
            const href = firstCourseInCat?.lessons[0]
              ? `/courses/${firstCourseInCat.id}/lessons/${firstCourseInCat.lessons[0].id}`
              : '/courses';
            return (
              <Link
                key={category.id}
                href={href}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border-2 transition-all hover:-translate-y-0.5 hover:bg-[#FFFDF5]"
                style={{
                  borderColor: 'var(--mb-dark)',
                  boxShadow: `3px 3px 0 ${meta?.shadow ?? '#ccc'}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-2xl border-2"
                  style={{ borderColor: 'var(--mb-dark)', background: 'var(--mb-cream)' }}
                >
                  {meta?.icon ?? '📖'}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[11px] font-bold tracking-[1px] mb-0.5"
                    style={{ color: meta?.shadow ?? '#888', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {meta?.label ?? ''}
                  </div>
                  <div
                    className="text-sm font-bold truncate"
                    style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {category.title}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: 'rgba(26,26,46,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {category.courses.length}コース · {lessonCount}講義
                  </div>
                </div>
                <div
                  className="shrink-0 px-4 py-1.5 rounded-lg text-xs font-bold border-2 transition-colors"
                  style={{
                    background: 'var(--mb-dark)',
                    borderColor: 'var(--mb-dark)',
                    color: 'var(--mb-gold)',
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                  }}
                >
                  進む
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Next action CTA */}
      <div
        className="rounded-xl p-4"
        style={{
          background: 'rgba(26,26,46,0.04)',
          border: '2px solid var(--mb-dark)',
          boxShadow: '4px 4px 0 var(--mb-gold)',
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'var(--mb-dark)' }}
          >
            <svg className="w-5 h-5" style={{ color: 'var(--mb-gold)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div
              className="text-[10px] tracking-[3px] font-bold"
              style={{ color: 'rgba(26,26,46,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              NEXT GOAL
            </div>
            <div
              className="text-sm font-bold"
              style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              最初のレッスンを完了しよう
            </div>
          </div>
        </div>
        <Link
          href={firstLesson}
          className="block w-full py-3 rounded-xl text-sm font-bold text-center transition-all hover:-translate-y-0.5 border-2"
          style={{
            background: 'var(--mb-gold)',
            borderColor: 'var(--mb-dark)',
            color: 'var(--mb-dark)',
            fontFamily: "'Dela Gothic One', sans-serif",
            letterSpacing: '0.05em',
            boxShadow: '3px 3px 0 var(--mb-dark)',
          }}
        >
          アクションを進める！
        </Link>
      </div>
    </div>
  );
}