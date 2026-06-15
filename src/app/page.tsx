import Link from 'next/link';
import { categories } from '@/data/courses';
import HomeStats from '@/components/HomeStats';
import NextLessonCard from '@/components/NextLessonCard';
import MilestoneCard from '@/components/MilestoneCard';
import WelcomeBack from '@/components/WelcomeBack';
import DailyGoalCard from '@/components/DailyGoalCard';
import RecentLessons from '@/components/RecentLessons';
import StreakWarning from '@/components/StreakWarning';
import AllCoursesComplete from '@/components/AllCoursesComplete';
import RandomLesson from '@/components/RandomLesson';
import FirstVisitGuide from '@/components/FirstVisitGuide';
import DailyTip from '@/components/DailyTip';
import DailyQuiz from '@/components/DailyQuiz';
import WeeklyGoalCard from '@/components/WeeklyGoalCard';
import HeroCtaButton from '@/components/HeroCtaButton';
import MoneyQuote from '@/components/MoneyQuote';
import HomeCourseGrid from '@/components/HomeCourseGrid';

export default function HomePage() {
  const totalLessons = categories.reduce(
    (a, cat) => a + cat.courses.reduce((b, c) => b + c.lessons.length, 0), 0
  );
  return (
    <div className="max-w-xl mx-auto px-4 py-6 space-y-7">

      {/* ── Hero ── */}
      <div
        className="rounded-2xl p-5 relative overflow-hidden"
        style={{
          background: 'var(--mb-dark)',
          border: '2px solid var(--mb-dark)',
          boxShadow: '5px 5px 0 var(--mb-gold)',
        }}
      >
        {/* Background accent blob */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
          style={{ background: 'var(--mb-gold)' }}
        />
        <div
          className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-10"
          style={{ background: 'var(--mb-sky)' }}
        />

        <div className="relative">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <div
              className="inline-block text-[9px] font-bold tracking-[3px] px-2.5 py-1 rounded"
              style={{ background: 'rgba(245,200,66,0.15)', color: 'var(--mb-gold)', border: '1px solid rgba(245,200,66,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              MONEBOU ACADEMY
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-full" style={{ background: 'rgba(76,175,125,0.15)', border: '1px solid rgba(76,175,125,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#4CAF7D', animation: 'pulse 2s infinite' }} />
              <span className="text-[9px] font-bold" style={{ color: '#4CAF7D', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {totalLessons}講義 公開中
              </span>
            </div>
          </div>
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
          <h1
            className="text-2xl leading-tight mb-2"
            style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'white' }}
          >
            ゲームで遊んだら、<br />
            <span style={{ color: 'var(--mb-gold)' }}>経済がわかった。</span>
          </h1>
          <p
            className="text-xs leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            お金の基本から資産形成まで。全{categories.length}カテゴリ・{totalLessons}講義を楽しく学ぼう。
          </p>

          <HeroCtaButton />
        </div>
      </div>

      {/* ── カテゴリグリッド ── */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 rounded-full" style={{ background: '#4CAF7D' }} />
            <h2 className="text-sm font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              COURSES
            </h2>
          </div>
          <Link
            href="/courses"
            className="text-xs font-bold hover:underline"
            style={{ color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            すべて見る →
          </Link>
        </div>

        <HomeCourseGrid categories={categories} />
      </div>

      {/* ── 全講義制覇 ── */}
      <AllCoursesComplete />

      {/* ── ストリーク警告 ── */}
      <StreakWarning />

      {/* ── ウェルカムバック ── */}
      <WelcomeBack />

      {/* ── 今日の目標 ── */}
      <DailyGoalCard />

      {/* ── 今週の目標 ── */}
      <WeeklyGoalCard />

      {/* ── Stats ── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-gold)' }} />
          <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            MY STATS
          </span>
        </div>
        <HomeStats />
      </div>

      {/* ── マイルストーン ── */}
      <MilestoneCard />

      {/* ── 次のレッスン ── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-4 rounded-full" style={{ background: 'var(--mb-sky)' }} />
          <span className="text-xs font-bold tracking-[2px]" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            NEXT LESSON
          </span>
        </div>
        <NextLessonCard />
      </div>

      {/* ── 今日の名言 ── */}
      <MoneyQuote />

      {/* ── 今日の復習クイズ ── */}
      <DailyQuiz />

      {/* ── 今日のヒント ── */}
      <DailyTip />

      {/* ── ランダム講義 ── */}
      <RandomLesson />

      {/* ── 最近完了した講義 ── */}
      <RecentLessons />

      {/* ── はじめての方へ（トグル） ── */}
      <FirstVisitGuide />

    </div>
  );
}
