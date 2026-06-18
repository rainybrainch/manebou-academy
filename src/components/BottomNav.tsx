'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';

const LATEST_NEWS_DATE = '2026-06-18';
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
];


export default function BottomNav() {
  const pathname = usePathname();
  const { streakDays, dailyLessonCounts, completedCount, mounted } = useProgress();
  const [hasNewNews, setHasNewNews] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(NEWS_SEEN_KEY);
    setHasNewNews(!seen || seen < LATEST_NEWS_DATE);
  }, []);

  useEffect(() => {
    if (pathname === '/news') {
      localStorage.setItem(NEWS_SEEN_KEY, LATEST_NEWS_DATE);
      setHasNewNews(false);
    }
  }, [pathname]);

  const todayStudied = mounted && (() => {
    const n = new Date();
    const k = `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`;
    return (dailyLessonCounts[k] ?? 0) > 0;
  })();
  const showStudyNudge = mounted && completedCount > 0 && !todayStudied;

  if (pathname.includes('/lessons/')) return null;

  return (
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
                {showCourseNudge && (
                  <div
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
                    style={{ background: 'var(--mb-sky)', borderColor: 'var(--mb-dark)', animation: 'pulse 2s infinite' }}
                  />
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
      </nav>
  );
}
