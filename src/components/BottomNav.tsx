'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';

const LATEST_NEWS_DATE = '2026-06-16';
const NEWS_SEEN_KEY = 'mb_news_seen';

const items = [
  {
    href: '/',
    label: 'ホーム',
    icon: (active: boolean) => (
      <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/courses',
    label: 'コース',
    icon: (active: boolean) => (
      <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: '/progress',
    label: 'レポート',
    icon: (active: boolean) => (
      <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    href: '/news',
    label: 'ニュース',
    icon: (active: boolean) => (
      <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

// メニューに入れるリンク
const menuLinks = [
  {
    href: '/stamp',
    label: 'スタンプ',
    icon: '⭐',
  },
  {
    href: '/glossary',
    label: '用語集',
    icon: '📖',
  },
  {
    href: '/questions',
    label: 'よくある質問',
    icon: '❓',
  },
  {
    href: '/manual',
    label: 'マニュアル',
    icon: '📋',
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { streakDays, dailyLessonCounts, completedCount, mounted } = useProgress();
  const [hasNewNews, setHasNewNews] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(NEWS_SEEN_KEY);
    setHasNewNews(!seen || seen < LATEST_NEWS_DATE);
  }, []);

  useEffect(() => {
    if (pathname === '/news') {
      localStorage.setItem(NEWS_SEEN_KEY, LATEST_NEWS_DATE);
      setHasNewNews(false);
    }
    setMenuOpen(false);
  }, [pathname]);

  const todayStudied = mounted && (dailyLessonCounts[new Date().toISOString().slice(0, 10)] ?? 0) > 0;
  const showStudyNudge = mounted && completedCount > 0 && !todayStudied;

  if (pathname.includes('/lessons/')) return null;

  return (
    <>
      {/* メニューオーバーレイ */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* メニューポップアップ */}
      {menuOpen && (
        <div
          className="fixed bottom-14 right-0 z-40 mr-1 mb-1 rounded-xl border-2 overflow-hidden"
          style={{
            background: 'var(--mb-dark)',
            borderColor: 'rgba(245,200,66,0.4)',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.4)',
            minWidth: '140px',
          }}
        >
          {menuLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 transition-opacity hover:opacity-70"
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Zen Maru Gothic', sans-serif", fontSize: '13px', fontWeight: 'bold' }}
            >
              <span className="text-base">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex items-stretch"
        style={{
          background: 'var(--mb-dark)',
          borderTop: '2px solid var(--mb-gold)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          minHeight: '56px',
        }}
      >
        {items.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          const showStreak = item.href === '/progress' && mounted && streakDays >= 2;
          const showNewsBadge = item.href === '/news' && hasNewNews;
          const showCourseNudge = item.href === '/courses' && showStudyNudge;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 relative flex flex-col items-center justify-center gap-0.5 transition-opacity hover:opacity-80"
              style={{ color: isActive ? 'var(--mb-gold)' : 'rgba(255,255,255,0.35)' }}
            >
              <div className="relative">
                {item.icon(isActive)}
                {showNewsBadge && (
                  <div
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
                    style={{ background: '#E8354A', borderColor: 'var(--mb-dark)' }}
                  />
                )}
                {showCourseNudge && (
                  <div
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
                    style={{ background: 'var(--mb-sky)', borderColor: 'var(--mb-dark)', animation: 'pulse 2s infinite' }}
                  />
                )}
                {showStreak && (
                  <div
                    className="absolute -top-1 -right-1.5 min-w-[14px] h-[14px] rounded-full flex items-center justify-center text-[8px] font-bold px-0.5"
                    style={{ background: isActive ? 'var(--mb-gold)' : '#E8354A', color: 'white', fontFamily: "'Dela Gothic One', sans-serif" }}
                  >
                    {streakDays}
                  </div>
                )}
              </div>
              <span className="text-[9px] font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                {item.label}
              </span>
              {isActive && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: 'var(--mb-gold)' }}
                />
              )}
            </Link>
          );
        })}

        {/* メニューボタン */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="flex-1 relative flex flex-col items-center justify-center gap-0.5 transition-opacity hover:opacity-80"
          style={{ color: menuOpen ? 'var(--mb-gold)' : 'rgba(255,255,255,0.35)' }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-[9px] font-bold" style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            メニュー
          </span>
          {menuOpen && (
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
              style={{ background: 'var(--mb-gold)' }}
            />
          )}
        </button>
      </nav>
    </>
  );
}
