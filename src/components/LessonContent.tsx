'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Lesson, LessonSection } from '@/types';
import ShareButton from './ShareButton';
import { useFontSize } from '@/hooks/useFontSize';
import LessonNotes from './LessonNotes';
import LessonLike from './LessonLike';
import LessonTimer from './LessonTimer';
import RevealSection from './RevealSection';
import LessonTOC from './LessonTOC';

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
  isCompleted?: boolean;
  lessonIndex?: number;
  lessonTotal?: number;
}

function CheckItemsCard({ items, courseId, lessonId }: { items: string[]; courseId: string; lessonId: string }) {
  const storageKey = `mb_checks_${courseId}_${lessonId}`;
  const [checked, setChecked] = useState<boolean[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      setChecked(saved ? JSON.parse(saved) : new Array(items.length).fill(false));
    } catch {
      setChecked(new Array(items.length).fill(false));
    }
    setMounted(true);
  }, [storageKey, items.length]);

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = [...prev];
      next[i] = !next[i];
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const doneCount = mounted ? checked.filter(Boolean).length : 0;
  const allDone = mounted && doneCount === items.length;

  return (
    <div
      className="mt-8 rounded-2xl border-2 overflow-hidden"
      style={{ borderColor: allDone ? '#4CAF7D' : 'var(--mb-dark)', boxShadow: `4px 4px 0 ${allDone ? '#4CAF7D' : 'var(--mb-gold)'}`, transition: 'border-color 0.3s, box-shadow 0.3s' }}
    >
      <div className="flex items-center justify-between px-4 py-3" style={{ background: allDone ? '#4CAF7D' : 'var(--mb-dark)', transition: 'background 0.3s' }}>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0" style={{ color: allDone ? 'white' : 'var(--mb-gold)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-bold" style={{ color: allDone ? 'white' : 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {allDone ? '理解度チェック完了！' : 'このレッスンのポイント'}
          </span>
        </div>
        {mounted && (
          <span className="text-[11px] font-bold" style={{ color: allDone ? 'white' : 'rgba(245,200,66,0.7)', fontFamily: "'Dela Gothic One', sans-serif" }}>
            {doneCount}/{items.length}
          </span>
        )}
      </div>
      <div className="p-4 bg-white space-y-2">
        {items.map((item, i) => {
          const isChecked = mounted && checked[i];
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="w-full flex items-start gap-2.5 text-left transition-all duration-200 rounded-lg px-2 py-1.5 hover:bg-gray-50 active:scale-[0.99]"
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200"
                style={{
                  background: isChecked ? '#4CAF7D' : 'rgba(76,175,125,0.1)',
                  border: `1.5px solid ${isChecked ? '#4CAF7D' : 'rgba(76,175,125,0.5)'}`,
                }}
              >
                {isChecked ? (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-[9px] font-bold" style={{ color: '#4CAF7D', fontFamily: "'Dela Gothic One', sans-serif" }}>{i + 1}</span>
                )}
              </div>
              <p
                className="text-sm leading-relaxed transition-all duration-200"
                style={{
                  color: isChecked ? 'rgba(26,26,46,0.35)' : 'var(--mb-dark)',
                  textDecoration: isChecked ? 'line-through' : 'none',
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                }}
              >
                {item}
              </p>
            </button>
          );
        })}
      </div>
      {allDone && (
        <div className="px-4 pb-3 text-center" style={{ background: 'rgba(76,175,125,0.05)' }}>
          <span className="text-xs" style={{ color: '#4CAF7D', fontFamily: "'Zen Maru Gothic', sans-serif", fontWeight: 700 }}>
            🎉 全項目を理解しました！
          </span>
        </div>
      )}
    </div>
  );
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

const CIRCLED = ['①','②','③','④','⑤','⑥','⑦','⑧','⑨','⑩'];

function renderAnswerText(answer: string): React.ReactNode {
  const fontStyle: React.CSSProperties = { fontFamily: "'Zen Maru Gothic', sans-serif", color: 'rgba(26,26,46,0.82)' };
  // Try to split on circled numbers anywhere in the text
  const splitRegex = /(①|②|③|④|⑤|⑥|⑦|⑧|⑨|⑩)/;
  const parts = answer.split(splitRegex);
  if (parts.length <= 1) {
    // No circled numbers — just render with whitespace-pre-wrap
    return <p className="text-sm leading-[1.9] whitespace-pre-wrap" style={fontStyle}>{answer}</p>;
  }
  const intro = parts[0].trim();
  const items: { num: string; text: string }[] = [];
  for (let i = 1; i < parts.length; i += 2) {
    const num = parts[i];
    const text = (parts[i + 1] ?? '').trim();
    if (CIRCLED.includes(num)) items.push({ num, text });
  }
  return (
    <div className="space-y-3">
      {intro && (
        <p className="text-sm leading-[1.9] whitespace-pre-wrap" style={fontStyle}>{intro}</p>
      )}
      <div className="space-y-2">
        {items.map(({ num, text }) => (
          <div key={num} className="flex items-start gap-2.5 rounded-lg p-3" style={{ background: 'rgba(76,175,125,0.07)', border: '1px solid rgba(76,175,125,0.2)' }}>
            <span className="text-sm font-bold shrink-0 mt-0.5" style={{ color: '#4CAF7D', fontFamily: "'Dela Gothic One', sans-serif", lineHeight: 1 }}>{num}</span>
            <p className="text-sm leading-[1.8] whitespace-pre-wrap flex-1" style={fontStyle}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PracticeSection({ section }: { section: Extract<LessonSection, { type: 'practice' }> }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="my-8 rounded-xl overflow-hidden border-2" style={{ borderColor: 'var(--mb-dark)', boxShadow: '4px 4px 0 var(--mb-sky)' }}>
      {/* Header */}
      <div className="px-5 py-3 flex items-center gap-2" style={{ background: 'var(--mb-dark)' }}>
        <span className="text-base">✏️</span>
        <h3 className="font-bold text-sm" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          練習問題：理解度チェック
        </h3>
      </div>

      <div className="p-5 space-y-4 bg-white">
        {/* Question */}
        <div className="rounded-lg p-4" style={{ background: 'rgba(91,200,232,0.06)', border: '1px solid rgba(91,200,232,0.3)' }}>
          <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'rgba(26,26,46,0.85)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            {section.question}
          </p>
        </div>

        {/* Auxiliary Prompt */}
        <div className="rounded-lg overflow-hidden border" style={{ borderColor: 'rgba(26,26,46,0.12)' }}>
          <div className="flex items-center justify-between px-4 py-2" style={{ background: 'rgba(26,26,46,0.04)', borderBottom: '1px solid rgba(26,26,46,0.08)' }}>
            <span className="text-xs font-bold" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              💬 AIへの補助プロンプト
            </span>
            <CopyButton text={section.auxiliaryPrompt} />
          </div>
          <div className="p-4">
            <p className="text-xs leading-relaxed whitespace-pre-line font-mono" style={{ color: 'rgba(26,26,46,0.55)' }}>
              {section.auxiliaryPrompt}
            </p>
          </div>
        </div>

        {/* Answer toggle */}
        <div>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="w-full py-2.5 rounded-xl border-2 text-sm font-bold transition-all hover:opacity-90"
            style={{
              background: showAnswer ? 'rgba(76,175,125,0.1)' : 'var(--mb-dark)',
              borderColor: showAnswer ? '#4CAF7D' : 'var(--mb-dark)',
              color: showAnswer ? '#4CAF7D' : 'white',
              fontFamily: "'Zen Maru Gothic', sans-serif",
            }}
          >
            {showAnswer ? '▲ 解答を閉じる' : '✅ 解答例を見る'}
          </button>
          {showAnswer && (
            <div className="mt-3 rounded-xl border-2 overflow-hidden" style={{ borderColor: '#4CAF7D' }}>
              <div className="px-4 py-2 flex items-center gap-2" style={{ background: '#4CAF7D' }}>
                <span className="text-xs font-bold" style={{ color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}>✅ 解答例</span>
              </div>
              <div className="p-4" style={{ background: 'rgba(76,175,125,0.03)' }}>
                {renderAnswerText(section.answer)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function renderBold(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ fontWeight: 700, color: 'var(--mb-dark)' }}>{part}</strong>
      : part
  );
}

// Renders paragraph text with whitespace-pre-wrap + ①②③ item parsing + bold support
function renderParagraph(text: string): React.ReactNode {
  const fontStyle: React.CSSProperties = { fontFamily: "'Zen Maru Gothic', sans-serif", color: 'rgba(26,26,46,0.8)' };
  const splitRegex = /(①|②|③|④|⑤|⑥|⑦|⑧|⑨|⑩)/;
  const parts = text.split(splitRegex);
  if (parts.length <= 1) {
    return (
      <p style={{ ...fontStyle, lineHeight: '1.9', marginBottom: '1rem', fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
        {renderBold(text)}
      </p>
    );
  }
  const intro = parts[0].trim();
  const items: { num: string; text: string }[] = [];
  for (let i = 1; i < parts.length; i += 2) {
    const num = parts[i];
    const t = (parts[i + 1] ?? '').trim();
    if (CIRCLED.includes(num)) items.push({ num, text: t });
  }
  return (
    <div style={{ marginBottom: '1rem' }} className="space-y-2">
      {intro && (
        <p style={{ ...fontStyle, lineHeight: '1.9', fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>{renderBold(intro)}</p>
      )}
      <div className="space-y-1.5">
        {items.map(({ num, text }) => (
          <div key={num} className="flex items-start gap-2.5 rounded-lg px-3 py-2.5"
            style={{ background: 'rgba(91,200,232,0.06)', border: '1px solid rgba(91,200,232,0.2)' }}>
            <span className="text-sm font-bold shrink-0 mt-0.5" style={{ color: 'var(--mb-sky)', fontFamily: "'Dela Gothic One', sans-serif", lineHeight: 1 }}>{num}</span>
            <p className="text-sm flex-1" style={{ ...fontStyle, lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>{renderBold(text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionRenderer({ section }: { section: LessonSection }) {
  switch (section.type) {
    case 'text':
      return renderParagraph(section.content);

    case 'heading': {
      const slug = section.content.replace(/\s+/g, '-').replace(/[^\w　-鿿-]/g, '');
      return section.level === 2 ? (
        <h2
          id={slug}
          style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--mb-dark)', marginTop: '2rem', marginBottom: '0.75rem', paddingBottom: '0.4rem', borderBottom: '2px solid var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif", scrollMarginTop: '72px' }}
        >
          {section.content}
        </h2>
      ) : (
        <h3
          id={slug}
          style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--mb-dark)', marginTop: '1.5rem', marginBottom: '0.5rem', fontFamily: "'Zen Maru Gothic', sans-serif", scrollMarginTop: '72px' }}
        >
          {section.content}
        </h3>
      );
    }

    case 'bullet-list':
      return (
        <ul style={{ marginBottom: '1rem' }} className="space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(26,26,46,0.8)', fontSize: '0.875rem', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              <span
                className="shrink-0 flex items-center justify-center mt-[3px]"
                style={{ color: 'var(--mb-sky)' }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </span>
              {renderBold(item)}
            </li>
          ))}
        </ul>
      );

    case 'numbered-list':
      return (
        <ol style={{ marginBottom: '1rem' }} className="space-y-2.5">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(26,26,46,0.8)', fontSize: '0.875rem', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              <span
                className="shrink-0 w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center mt-0.5"
                style={{
                  background: 'var(--mb-dark)',
                  color: 'var(--mb-gold)',
                  fontFamily: "'Dela Gothic One', sans-serif",
                  boxShadow: '1px 1px 0 var(--mb-gold)',
                }}
              >
                {i + 1}
              </span>
              {renderBold(item)}
            </li>
          ))}
        </ol>
      );

    case 'highlight-box':
      return (
        <div className="my-5 rounded-xl overflow-hidden border-2" style={{ borderColor: 'var(--mb-dark)', boxShadow: '3px 3px 0 var(--mb-gold)' }}>
          <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: 'var(--mb-dark)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--mb-gold)' }} />
            <span className="text-sm font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{section.title}</span>
          </div>
          <div className="p-4 bg-white">
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(26,26,46,0.8)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--mb-gold)' }} />
                  {renderBold(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case 'info-box':
      return (
        <div
          className="my-5 rounded-xl overflow-hidden border-2"
          style={{ borderColor: 'var(--mb-sky)', boxShadow: '3px 3px 0 rgba(91,200,232,0.25)' }}
        >
          <div className="flex items-center gap-2 px-4 py-2" style={{ background: 'var(--mb-sky)' }}>
            <svg className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--mb-dark)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-bold tracking-[2px]" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              INTRO
            </span>
          </div>
          <div className="p-4" style={{ background: 'rgba(91,200,232,0.06)' }}>
            {renderParagraph(section.content)}
          </div>
        </div>
      );

    case 'practice':
      return <PracticeSection section={section} />;

    case 'glossary':
      return (
        <div className="my-6">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="text-[9px] font-bold px-2.5 py-1 rounded-full tracking-[2px]"
              style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              GLOSSARY
            </div>
            <div className="h-px flex-1" style={{ background: 'rgba(26,26,46,0.1)' }} />
            <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>用語集</span>
          </div>
          <div className="space-y-2">
            {section.terms.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border-2 overflow-hidden"
                style={{ borderColor: 'rgba(26,26,46,0.1)', background: 'white' }}
              >
                <div
                  className="px-4 py-2 flex items-center gap-2"
                  style={{ background: 'rgba(26,26,46,0.03)', borderBottom: '1px solid rgba(26,26,46,0.06)' }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                    style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Dela Gothic One', sans-serif" }}
                  >
                    {i + 1}
                  </span>
                  <dt className="text-sm font-bold" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {t.term}
                  </dt>
                </div>
                <dd className="px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap" style={{ color: 'rgba(26,26,46,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {renderBold(t.definition)}
                </dd>
              </div>
            ))}
          </div>
        </div>
      );

    case 'summary':
      return (
        <div className="my-6 rounded-xl border-2 overflow-hidden" style={{ borderColor: 'var(--mb-dark)', boxShadow: '4px 4px 0 var(--mb-green, #4CAF7D)' }}>
          <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: 'var(--mb-dark)' }}>
            <svg className="w-4 h-4" style={{ color: 'var(--mb-gold)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-sm font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>まとめ</span>
          </div>
          <div className="p-4 bg-white">
            <div style={{ marginBottom: '0.75rem' }}>{renderParagraph(section.content)}</div>
            <div className="flex items-start gap-2 pt-2 border-t" style={{ borderColor: 'rgba(26,26,46,0.08)' }}>
              <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'var(--mb-sky)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{section.nextLesson}</p>
            </div>
          </div>
        </div>
      );

    case 'image':
      return (
        <figure className="my-6">
          <div
            className="rounded-xl overflow-hidden border-2"
            style={{ borderColor: 'rgba(26,26,46,0.12)', boxShadow: '3px 3px 0 rgba(26,26,46,0.08)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={section.src}
              alt={section.alt}
              className="w-full block"
              style={{ maxHeight: '360px', objectFit: 'contain', background: 'rgba(26,26,46,0.03)' }}
            />
          </div>
          {section.caption && (
            <figcaption
              className="text-[11px] text-center mt-2 leading-relaxed"
              style={{ color: 'rgba(26,26,46,0.45)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
            >
              {section.caption}
            </figcaption>
          )}
        </figure>
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
  isCompleted,
  lessonIndex,
  lessonTotal,
}: LessonContentProps) {
  const { cycle: cycleFont, cssSize, labelSize } = useFontSize();

  // Estimate reading time from section text
  const wordCount = lesson.sections.reduce((acc, s) => {
    const text = 'content' in s ? (s as {content: string}).content
      : 'items' in s ? (s as {items: string[]}).items.join(' ')
      : '';
    return acc + (text.length / 3); // ~3 chars per word in Japanese
  }, 0);
  const readMinutes = Math.max(1, Math.round(wordCount / 200));
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

        {/* Breadcrumb — course link only, lesson title truncated */}
        <nav className="flex items-center gap-1 flex-1 min-w-0 overflow-hidden">
          <Link
            href={`/courses/${courseId}`}
            className="shrink-0 text-[10px] font-bold hover:opacity-70 transition-opacity hidden sm:block"
            style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            ←コース
          </Link>
          <span className="hidden sm:block text-[10px]" style={{ color: 'rgba(26,26,46,0.2)' }}>/</span>
          <span
            className="text-[11px] font-medium truncate"
            style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {lesson.title}
          </span>
        </nav>

        {/* Lesson position indicator */}
        {lessonIndex !== undefined && lessonTotal !== undefined && lessonTotal > 1 && (
          <div
            className="shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(26,26,46,0.06)', color: 'rgba(26,26,46,0.4)', fontFamily: "'Dela Gothic One', sans-serif" }}
          >
            {lessonIndex + 1}<span style={{ color: 'rgba(26,26,46,0.2)' }}>/{lessonTotal}</span>
          </div>
        )}

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

        {/* Font size toggle */}
        <button
          onClick={cycleFont}
          className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg border-2 transition-all hover:-translate-y-px"
          style={{ background: 'var(--mb-cream)', borderColor: 'rgba(26,26,46,0.2)', color: 'var(--mb-dark)' }}
          title="文字サイズ変更"
        >
          <span style={{ fontFamily: "'Dela Gothic One', sans-serif", fontSize: labelSize, lineHeight: 1 }}>A</span>
        </button>

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

      {/* Main content — two-column on xl+ */}
      <div className="xl:flex xl:max-w-[1360px] xl:mx-auto">
        <div className="flex-1 min-w-0 p-6 max-w-4xl mx-auto xl:mx-0 xl:max-w-none" style={{ fontSize: cssSize }}>
          {/* Lesson meta row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold"
                style={{ background: 'rgba(91,200,232,0.12)', color: 'var(--mb-sky)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >{chapterTitle}</span>
              {lesson.isPremium && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">プレミアム</span>
              )}
              {lesson.duration && lesson.duration !== '—' && (
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {lesson.duration}
                </span>
              )}
              <span className="text-[11px] flex items-center gap-1" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                📖 約{readMinutes}分で読める
              </span>
            </div>
            <div className="flex items-center gap-2">
              <LessonTimer />
              <LessonLike courseId={courseId} lessonId={lesson.id} />
              <ShareButton title={lesson.title} text={`${lesson.title} — Monebou Academy`} />
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
            <div
              className="mb-5 rounded-xl border-2 overflow-hidden"
              style={{ borderColor: 'var(--mb-gold)', boxShadow: '3px 3px 0 rgba(245,200,66,0.3)' }}
            >
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'var(--mb-dark)' }}>
                <span className="text-sm font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>🎲 ZAiゲームで体験できる</span>
              </div>
              <div className="p-4 bg-white space-y-2">
                {lesson.gameTags.map((tag, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded shrink-0 mt-0.5"
                      style={{ background: 'rgba(245,200,66,0.15)', color: 'var(--mb-gold-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {tag.mechanic}
                    </span>
                    <span className="text-xs leading-relaxed" style={{ color: 'rgba(26,26,46,0.7)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{tag.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video player */}
          {lesson.videoId ? (
            <div className="mb-6 rounded-xl overflow-hidden bg-black aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${lesson.videoId}`}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <div
              className="mb-6 rounded-xl overflow-hidden aspect-video flex flex-col items-center justify-center gap-3 border-2"
              style={{ background: 'var(--mb-dark)', borderColor: 'rgba(245,200,66,0.3)' }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center border-2"
                style={{ background: 'rgba(245,200,66,0.1)', borderColor: 'rgba(245,200,66,0.4)' }}
              >
                <svg className="w-6 h-6 ml-0.5" style={{ color: 'var(--mb-gold)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-sm font-bold" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                動画は近日公開予定
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                テキスト教材で先に学習できます
              </p>
            </div>
          )}

          {/* Lesson title */}
          <div className="flex items-start gap-3 mb-6">
            <h1
              className="text-xl flex-1 leading-snug"
              style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}
            >{lesson.title}</h1>
            {isCompleted && (
              <span
                className="shrink-0 mt-1 flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full border"
                style={{ background: 'rgba(76,175,125,0.1)', borderColor: '#4CAF7D', color: '#4CAF7D', fontFamily: "'Zen Maru Gothic', sans-serif" }}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                完了済み
              </span>
            )}
          </div>

          {/* Table of Contents — inline on mobile, hidden on xl (shown in sidebar) */}
          <div className="xl:hidden">
            <LessonTOC sections={lesson.sections} />
          </div>

          {/* Content sections */}
          <div>
            {lesson.sections.map((section, i) => (
              <RevealSection key={i} delay={Math.min(i * 40, 200)}>
                <SectionRenderer section={section} />
              </RevealSection>
            ))}
          </div>

          {/* Lesson key points summary (interactive checklist) */}
          {lesson.checkItems && lesson.checkItems.length > 0 && (
            <CheckItemsCard items={lesson.checkItems} courseId={courseId} lessonId={lesson.id} />
          )}

          <LessonNotes courseId={courseId} lessonId={lesson.id} />
        </div>

        {/* PC Sidebar — sticky TOC + lesson info, only on xl+ */}
        <div
          className="hidden xl:flex xl:flex-col xl:w-72 xl:shrink-0 sticky top-14 overflow-y-auto p-5 border-l"
          style={{
            height: 'calc(100vh - 3.5rem)',
            borderColor: 'rgba(26,26,46,0.1)',
            background: 'rgba(255,253,245,0.85)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Lesson position + title */}
          <div className="mb-5 pb-4 border-b" style={{ borderColor: 'rgba(26,26,46,0.08)' }}>
            {lessonIndex !== undefined && lessonTotal !== undefined && (
              <div className="text-[10px] font-bold tracking-[2px] mb-1" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {lessonIndex + 1} / {lessonTotal}講義
              </div>
            )}
            <div className="text-sm font-bold leading-snug" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {lesson.title}
            </div>
            <div className="text-[10px] mt-1" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              {chapterTitle}
            </div>
          </div>

          {/* TOC always-open */}
          {lesson.sections.some(s => s.type === 'heading' && s.level === 2) && (
            <div className="mb-5">
              <div className="text-[10px] font-bold tracking-[3px] mb-2.5" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                目次
              </div>
              <LessonTOC sections={lesson.sections} alwaysOpen />
            </div>
          )}

          {/* Check items mini list */}
          {lesson.checkItems && lesson.checkItems.length > 0 && (
            <div className="mb-5">
              <div className="text-[10px] font-bold tracking-[3px] mb-2.5" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                学習チェック
              </div>
              <div className="space-y-1.5">
                {lesson.checkItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span
                      className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold mt-0.5"
                      style={{ background: 'rgba(76,175,125,0.12)', color: '#4CAF7D', fontFamily: "'Dela Gothic One', sans-serif" }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[11px] leading-relaxed" style={{ color: 'rgba(26,26,46,0.6)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next lesson preview */}
          {next && (
            <div className="mt-auto pt-4 border-t" style={{ borderColor: 'rgba(26,26,46,0.08)' }}>
              <div className="text-[10px] font-bold tracking-[3px] mb-2" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                次の講義
              </div>
              <a
                href={`/courses/${courseId}/${next.lesson.id}`}
                className="flex items-center gap-2 p-2.5 rounded-lg transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(91,200,232,0.08)', border: '1px solid rgba(91,200,232,0.2)', textDecoration: 'none' }}
              >
                <span className="text-sm">→</span>
                <span className="text-[11px] leading-snug flex-1" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif", fontWeight: 600 }}>
                  {next.lesson.title}
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
