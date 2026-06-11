'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LessonContent from './LessonContent';
import LessonScrollProgress from './LessonScrollProgress';
import RelatedLessons from './RelatedLessons';
import BackToTop from './BackToTop';
import { useCompletionSound } from '@/hooks/useCompletionSound';
import { useSwipe } from '@/hooks/useSwipe';
import RightPanel from './RightPanel';
import CourseOutline from './CourseOutline';
import ConfettiBurst from './ConfettiBurst';
import CourseCompleteModal from './CourseCompleteModal';
import { useProgress } from '@/hooks/useProgress';
import { useScrollMemory, clearScrollMemory } from '@/hooks/useScrollMemory';
import { categories } from '@/data/courses';
import type { Lesson, Course } from '@/types';

const COMPLETION_QUOTES = [
  'その一歩が、資産への道。',
  '知識は、最高の投資だ。',
  '学ぶことをやめた日が、成長の止まる日。',
  '複利は知識にも効く。',
  '今日の学びが、未来の選択肢を増やす。',
  '賢いお金の使い方は、まず学ぶことから。',
  'お見事！知識が積み上がっています。',
  '一歩一歩が、経済的自由への道。',
  '知識という貯金が、また増えた。',
  '毎日の小さな積み上げが、大きな差をつくる。',
  'インプットしたら、アウトプットして定着させよう。',
  'お金を動かす前に、知識を動かせ。',
  '続けることが、最大の才能だ。',
  '今日学んだことを、誰かに話してみよう。',
  '一つ知るたびに、世界が少し広がる。',
  'この知識が、いつかあなたを助ける日が来る。',
  '学ぶことに、遅すぎることはない。',
  '今日も前に進んだ。それだけで十分だ。',
  '知識の種を蒔いた。あとは時間が育てる。',
  '理解した瞬間が、最高の報酬だ。',
  'お金と友達になる第一歩を踏んだ。',
  '正しく知ることで、正しく動ける。',
  '昨日の自分より、ほんの少し賢くなった。',
  '稼ぐより、守ることを先に学べ。',
  'わかる人とわからない人の差は、学んだかどうかだけ。',
  '投資の前に、まず自分への投資。それが今日のこの一歩。',
  '知識は盗まれない。どこへ行っても使える。',
  '次の講義も待っている。いつでも戻ってこい。',
  '失敗は授業料。でも知識で失敗を減らせる。',
  'お金のことは誰も教えてくれない。だから自分で学ぶ人が強くなる。',
  'ゆっくりでいい。学んでいる時間は必ず報われる。',
  '今日の知識が、明日の判断を変える。',
  '学ぶことに恥はない。知らなかったことより、知ろうとしないことが問題だ。',
  '一章終えるたびに、お金と友達に近づいている。',
  'この積み上げが、必ずどこかで役に立つ。',
  '学んだことは、誰にも奪われない。',
  '理解した数だけ、選択肢が増える。',
  '知識は使うほど磨かれる。今日も一つ使ってみよう。',
  'すぐに役立たなくても、いつか必ずつながる。',
  '「なんとなく」から「ちゃんとわかる」に変わった瞬間だ。',
  '焦らなくていい。コツコツが、一番速い。',
];

interface AdjacentLesson {
  lesson: { id: string; title: string };
  chapterTitle: string;
}

interface LessonShellProps {
  lesson: Lesson;
  course: Course;
  courseId: string;
  categoryId: string;
  courseTitle: string;
  chapterTitle: string;
  prev: AdjacentLesson | null;
  next: AdjacentLesson | null;
}

export default function LessonShell({
  lesson,
  course,
  courseId,
  categoryId,
  courseTitle,
  chapterTitle,
  prev,
  next,
}: LessonShellProps) {
  const [checkOpen, setCheckOpen] = useState(false);
  const [outlineOpen, setOutlineOpen] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [completionQuote, setCompletionQuote] = useState('');
  const [autoNextCount, setAutoNextCount] = useState<number | null>(null);
  const [showCourseComplete, setShowCourseComplete] = useState(false);
  const { isCompleted, completeLesson, uncompleteLesson, viewLesson, mounted } = useProgress();
  const playSound = useCompletionSound();
  const router = useRouter();

  useEffect(() => {
    viewLesson(courseId, lesson.id);
  }, [courseId, lesson.id, viewLesson]);

  useEffect(() => {
    if (autoNextCount === null || autoNextCount <= 0) {
      if (autoNextCount === 0 && next) {
        router.push(`/courses/${courseId}/lessons/${next.lesson.id}`);
      }
      return;
    }
    const t = setTimeout(() => setAutoNextCount(c => (c !== null ? c - 1 : null)), 1000);
    return () => clearTimeout(t);
  }, [autoNextCount, next, courseId, router]);

  const completed = mounted && isCompleted(courseId, lesson.id);

  // Find next course in same category (for CourseCompleteModal)
  const nextCourseInCategory = (() => {
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return null;
    const idx = cat.courses.findIndex(c => c.id === courseId);
    return idx >= 0 && idx < cat.courses.length - 1 ? cat.courses[idx + 1] : null;
  })();

  // Restore and save scroll position for non-completed lessons
  useScrollMemory(courseId, lesson.id, mounted && !completed);

  useSwipe({
    onSwipeLeft: () => {
      if (next && isCompleted(courseId, lesson.id)) {
        router.push(`/courses/${courseId}/lessons/${next.lesson.id}`);
      }
    },
    onSwipeRight: () => {
      if (prev) router.push(`/courses/${courseId}/lessons/${prev.lesson.id}`);
    },
  });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' && next && isCompleted(courseId, lesson.id)) {
        router.push(`/courses/${courseId}/lessons/${next.lesson.id}`);
      }
      if (e.key === 'ArrowLeft' && prev) {
        router.push(`/courses/${courseId}/lessons/${prev.lesson.id}`);
      }
      if ((e.key === 'c' || e.key === 'C') && !e.metaKey && !e.ctrlKey && !completed) {
        handleComplete();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [courseId, lesson.id, next, prev, isCompleted, router, completed]);

  function fireConfetti() {
    setConfettiKey(k => k + 1);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }

  function handleComplete() {
    completeLesson(courseId, lesson.id);
    clearScrollMemory(courseId, lesson.id);
    playSound();
    try { navigator.vibrate?.([30, 20, 60]); } catch {}
    setCompletionQuote(COMPLETION_QUOTES[Math.floor(Math.random() * COMPLETION_QUOTES.length)]);
    setJustCompleted(true);
    fireConfetti();
    // Detect if this was the last lesson in the course
    const availableLessons = course.lessons.filter(l => !l.isComingSoon);
    const isLastLesson = !next && availableLessons[availableLessons.length - 1]?.id === lesson.id;
    if (isLastLesson) {
      setTimeout(() => { setJustCompleted(false); setShowCourseComplete(true); }, 2600);
    } else {
      setTimeout(() => setJustCompleted(false), 2500);
      if (next) setAutoNextCount(5);
    }
  }

  function handleCompleteAndNext() {
    completeLesson(courseId, lesson.id);
    playSound();
    try { navigator.vibrate?.([30, 20, 60]); } catch {}
    if (next) {
      router.push(`/courses/${courseId}/lessons/${next.lesson.id}`);
    }
  }

  return (
    <div className="min-h-screen">
      <LessonScrollProgress />
      <BackToTop />
      <ConfettiBurst key={confettiKey} trigger={showConfetti} />
      {showCourseComplete && (
        <CourseCompleteModal
          courseTitle={chapterTitle}
          categoryId={categoryId}
          nextCourseId={nextCourseInCategory?.id ?? null}
          nextCourseTitle={nextCourseInCategory?.title ?? null}
          onClose={() => setShowCourseComplete(false)}
        />
      )}

      {/* Completion celebration overlay */}
      {justCompleted && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none"
          style={{ animation: 'fadeInOut 2s ease forwards' }}
        >
          <div
            className="flex flex-col items-center gap-3 px-10 py-8 rounded-2xl border-2"
            style={{
              background: 'rgba(26,26,46,0.95)',
              borderColor: 'var(--mb-gold)',
              boxShadow: '0 0 40px rgba(245,200,66,0.3)',
            }}
          >
            <div className="text-5xl">🎉</div>
            <div style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-gold)', fontSize: '18px' }}>
              講義完了！
            </div>
            <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
              {lesson.title}
            </div>
            {completionQuote && (
              <div
                className="mt-1 text-center max-w-[220px] leading-relaxed"
                style={{ fontFamily: "'Zen Maru Gothic', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '10px' }}
              >
                {completionQuote}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInOut {
          0%   { opacity: 0; transform: scale(0.85); }
          15%  { opacity: 1; transform: scale(1.05); }
          25%  { opacity: 1; transform: scale(1); }
          75%  { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.95); }
        }
      `}</style>

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
        isCompleted={completed}
        lessonIndex={course.lessons.filter(l => !l.isComingSoon).findIndex(l => l.id === lesson.id)}
        lessonTotal={course.lessons.filter(l => !l.isComingSoon).length}
      />

      {/* Completion bar — fixed at bottom */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 px-4 pt-3 flex items-center gap-3"
        style={{
          background: 'var(--mb-dark)',
          borderTop: '2px solid var(--mb-gold)',
          paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        }}
      >
        {completed ? (
          <>
            <div className="flex items-center gap-2 shrink-0">
              <div
                className="flex items-center gap-1.5 py-2.5 px-3 rounded-xl border-2 text-xs font-bold"
                style={{ borderColor: '#4CAF7D', background: 'rgba(76,175,125,0.15)', color: '#4CAF7D', fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                完了済み
              </div>
              <button
                onClick={() => uncompleteLesson(courseId, lesson.id)}
                className="flex items-center gap-1 py-2 px-2.5 rounded-xl border text-[10px] font-bold transition-all hover:opacity-80"
                style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                title="完了を取り消す"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                取り消し
              </button>
            </div>
            {next ? (
              <div className="flex-1 flex items-center gap-2">
                <button
                  onClick={() => { setAutoNextCount(null); router.push(`/courses/${courseId}/lessons/${next.lesson.id}`); }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 text-sm font-bold transition-all hover:opacity-90 active:scale-95 relative overflow-hidden"
                  style={{
                    background: 'var(--mb-gold)',
                    borderColor: 'var(--mb-gold)',
                    color: 'var(--mb-dark)',
                    fontFamily: "'Zen Maru Gothic', sans-serif",
                  }}
                >
                  {autoNextCount !== null && (
                    <div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'rgba(26,26,46,0.12)',
                        width: `${(autoNextCount / 5) * 100}%`,
                        transition: 'width 1s linear',
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    次の講義へ
                    {autoNextCount !== null && autoNextCount > 0 && (
                      <span className="text-[11px] font-bold opacity-70">{autoNextCount}</span>
                    )}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
                {autoNextCount !== null && (
                  <button
                    onClick={() => setAutoNextCount(null)}
                    className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl border-2 text-xs font-bold"
                    style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)' }}
                    title="自動移動をキャンセル"
                  >
                    ✕
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={() => router.push(`/courses/${courseId}`)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 text-sm font-bold transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                }}
              >
                コース一覧へ戻る
              </button>
            )}
          </>
        ) : (
          <>
            <button
              onClick={handleComplete}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 text-sm font-bold transition-all hover:opacity-90 active:scale-95"
              style={{
                background: justCompleted ? '#4CAF7D' : 'rgba(255,255,255,0.08)',
                borderColor: justCompleted ? '#4CAF7D' : 'rgba(255,255,255,0.2)',
                color: 'white',
                fontFamily: "'Zen Maru Gothic', sans-serif",
              }}
            >
              {justCompleted ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  完了！
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  講義を完了にする
                </>
              )}
            </button>

            {next && (
              <button
                onClick={handleCompleteAndNext}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all hover:opacity-90 active:scale-95 shrink-0"
                style={{
                  background: 'var(--mb-gold)',
                  borderColor: 'var(--mb-gold)',
                  color: 'var(--mb-dark)',
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                }}
              >
                完了して次へ
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </>
        )}
      </div>

      {/* Related lessons */}
      <RelatedLessons categoryId={categoryId} courseId={courseId} lessonId={lesson.id} />

      {/* Bottom spacing for fixed bar */}
      <div className="h-16" />

      <RightPanel
        checkItems={lesson.checkItems}
        isOpen={checkOpen}
        onClose={() => setCheckOpen(false)}
      />
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
