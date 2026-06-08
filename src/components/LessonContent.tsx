'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Lesson, LessonSection } from '@/types';

interface LessonContentProps {
  lesson: Lesson;
  courseId: string;
  courseTitle: string;
  chapterTitle: string;
  prev: { lesson: { id: string; title: string }; chapterTitle: string } | null;
  next: { lesson: { id: string; title: string }; chapterTitle: string } | null;
  checkOpen?: boolean;
  onToggleCheck?: () => void;
  outlineOpen?: boolean;
  onToggleOutline?: () => void;
  /** @deprecated use checkOpen */
  panelOpen?: boolean;
  /** @deprecated use onToggleCheck */
  onTogglePanel?: () => void;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-500">コピー済み</span>
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          コピー
        </>
      )}
    </button>
  );
}

function PracticeSection({ section }: { section: Extract<LessonSection, { type: 'practice' }> }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="my-8 border border-gray-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
        <h3 className="font-bold text-gray-800">練習問題：理解度を確認しよう！</h3>
      </div>

      {/* Question */}
      <div className="p-5 space-y-5">
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">問題文</h4>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{section.question}</p>
        </div>

        {/* Auxiliary Prompt */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between bg-gray-50 px-4 py-2 border-b border-gray-200">
            <span className="text-xs font-semibold text-gray-600">補助プロンプト</span>
            <CopyButton text={section.auxiliaryPrompt} />
          </div>
          <div className="p-4 bg-white">
            <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line font-mono">
              {section.auxiliaryPrompt}
            </p>
          </div>
        </div>

        {/* Answer */}
        <div>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            解答/解答例を見る
          </button>
          {showAnswer && (
            <div className="mt-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-gray-700 leading-relaxed">{section.answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionRenderer({ section }: { section: LessonSection }) {
  switch (section.type) {
    case 'text':
      return <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>;

    case 'heading':
      return section.level === 2 ? (
        <h2 className="text-lg font-bold text-gray-900 mt-8 mb-3 pb-2 border-b-2 border-blue-600 inline-block">
          {section.content}
        </h2>
      ) : (
        <h3 className="text-base font-semibold text-gray-800 mt-6 mb-2">{section.content}</h3>
      );

    case 'bullet-list':
      return (
        <ul className="mb-4 space-y-1">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );

    case 'numbered-list':
      return (
        <ol className="mb-4 space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <span className="shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );

    case 'highlight-box':
      return (
        <div className="my-5 border border-blue-200 rounded-lg overflow-hidden">
          <div className="bg-blue-50 px-4 py-2.5 border-b border-blue-200 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-semibold text-blue-800">{section.title}</span>
            <div className="ml-auto border-t border-dashed border-blue-300 flex-1" />
          </div>
          <div className="p-4 bg-white">
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case 'info-box':
      return (
        <div className="my-5 bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-gray-700 leading-relaxed">{section.content}</p>
        </div>
      );

    case 'practice':
      return <PracticeSection section={section} />;

    case 'glossary':
      return (
        <div className="my-6">
          <h3 className="text-base font-semibold text-gray-800 mb-3">用語説明</h3>
          <dl className="space-y-3">
            {section.terms.map((t, i) => (
              <div key={i}>
                <dt className="text-sm font-semibold text-gray-800">{t.term}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed mt-0.5">{t.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case 'summary':
      return (
        <div className="my-6 bg-gray-50 border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-gray-800 mb-2">まとめと次のステップ</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">{section.content}</p>
          <p className="text-sm text-blue-700 leading-relaxed">{section.nextLesson}</p>
        </div>
      );

    default:
      return null;
  }
}

export default function LessonContent({
  lesson,
  courseId,
  courseTitle,
  chapterTitle,
  prev,
  next,
  checkOpen,
  onToggleCheck,
  outlineOpen,
  onToggleOutline,
}: LessonContentProps) {
  return (
    <div className="flex-1 min-w-0">
      {/* Sub-header nav */}
      <div
        className="px-3 py-2 flex items-center gap-2 sticky top-14 z-10"
        style={{ background: 'white', borderBottom: '2px solid var(--mb-dark)' }}
      >
        {/* 全体フロー button */}
        <button
          onClick={onToggleOutline}
          className="shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border-2 hover:-translate-y-px"
          style={{
            background: outlineOpen ? 'var(--mb-dark)' : 'var(--mb-cream)',
            borderColor: 'var(--mb-dark)',
            color: outlineOpen ? 'var(--mb-gold)' : 'var(--mb-dark)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
            boxShadow: outlineOpen ? 'none' : '2px 2px 0 var(--mb-dark)',
          }}
          title="全体フローを見る"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
          </svg>
          全体フロー
        </button>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-gray-400 flex-1 min-w-0 text-xs overflow-hidden">
          <Link href={`/courses/${courseId}`} className="hover:text-gray-600 truncate text-[11px]">{courseTitle}</Link>
          <span className="shrink-0 text-gray-300">/</span>
          <span className="font-medium truncate text-[11px]" style={{ color: 'var(--mb-dark)' }}>{lesson.title}</span>
        </nav>

        {/* Prev/Next */}
        <div className="flex gap-1 shrink-0">
          {prev ? (
            <Link
              href={`/courses/${courseId}/lessons/${prev.lesson.id}`}
              className="w-7 h-7 flex items-center justify-center rounded-lg border-2 transition-all hover:-translate-y-px"
              style={{ borderColor: 'var(--mb-dark)', background: 'var(--mb-cream)', boxShadow: '2px 2px 0 var(--mb-dark)' }}
              title={prev.lesson.title}
            >
              <svg className="w-3.5 h-3.5" style={{ color: 'var(--mb-dark)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          ) : (
            <div className="w-7 h-7 flex items-center justify-center rounded-lg border-2" style={{ borderColor: 'rgba(26,26,46,0.15)', color: 'rgba(26,26,46,0.2)' }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          )}
          {next ? (
            <Link
              href={`/courses/${courseId}/lessons/${next.lesson.id}`}
              className="w-7 h-7 flex items-center justify-center rounded-lg border-2 transition-all hover:-translate-y-px"
              style={{ background: 'var(--mb-dark)', borderColor: 'var(--mb-dark)', boxShadow: '2px 2px 0 var(--mb-gold)' }}
              title={next.lesson.title}
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div className="w-7 h-7 flex items-center justify-center rounded-lg border-2" style={{ borderColor: 'rgba(26,26,46,0.15)', color: 'rgba(26,26,46,0.2)' }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>

        {/* チェック button */}
        <button
          onClick={onToggleCheck}
          className="shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border-2 hover:-translate-y-px"
          style={{
            background: checkOpen ? 'var(--mb-gold)' : 'var(--mb-cream)',
            borderColor: 'var(--mb-dark)',
            color: 'var(--mb-dark)',
            fontFamily: "'Zen Maru Gothic', sans-serif",
            boxShadow: checkOpen ? 'none' : '2px 2px 0 var(--mb-gold)',
          }}
          title="セルフチェック"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          チェック
        </button>
      </div>

      {/* Main content — full width, no right panel slot */}
      <div className="flex">
        <div className="flex-1 min-w-0 p-6 max-w-4xl mx-auto">
          {/* Lesson meta row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{chapterTitle}</span>
              {lesson.isPremium && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">プレミアム</span>
              )}
              {lesson.duration && lesson.duration !== '—' && (
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {lesson.duration}
                </span>
              )}
            </div>
          </div>

          {/* Premium badge */}
          {lesson.isPremium && (
            <div className="mb-3 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 text-sm text-red-700">
              ※ この講座動画はスキルプラスの講義を利用しています
            </div>
          )}

          {/* Coming soon */}
          {lesson.isComingSoon && (
            <div className="mb-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-500">
              ⏳ このレッスンは現在準備中です。ZAiゲームのルールブックをもとにコンテンツを作成中です。
            </div>
          )}

          {/* ZAi game tags */}
          {lesson.gameTags && lesson.gameTags.length > 0 && (
            <div className="mb-5 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-orange-800">🎲 ZAiゲームで体験できる</span>
              </div>
              <div className="space-y-2">
                {lesson.gameTags.map((tag, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-medium shrink-0 mt-0.5">
                      {tag.mechanic}
                    </span>
                    <span className="text-xs text-orange-700 leading-relaxed">{tag.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video player */}
          <div className="mb-6 rounded-xl overflow-hidden bg-black aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Chapter label */}
          <div className="text-xs text-gray-500 mb-1">{chapterTitle}</div>

          {/* Lesson title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-6">{lesson.title}</h1>

          {/* Content sections */}
          <div>
            {lesson.sections.map((section, i) => (
              <SectionRenderer key={i} section={section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
