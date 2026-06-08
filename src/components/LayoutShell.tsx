'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    href: '/',
    label: 'ホーム',
    sub: 'HOME',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/courses',
    label: 'コース一覧',
    sub: 'COURSES',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: '/manual',
    label: '使用マニュアル',
    sub: 'MANUAL',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    href: '/progress',
    label: '学習レポート',
    sub: 'REPORT',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    href: '/questions',
    label: '質問管理',
    sub: 'Q&A',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: '/news',
    label: 'お知らせ',
    sub: 'NEWS',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen" style={{ background: 'var(--mb-cream)' }}>
      {/* Fixed top header — Monebou dark #1A1A2E with gold bottom border */}
      <header
        className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center px-4 gap-3"
        style={{ background: 'var(--mb-dark)', borderBottom: '3px solid var(--mb-gold)' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 flex-1">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'var(--mb-gold)' }}
          >
            <span className="text-[11px] font-black leading-none" style={{ color: 'var(--mb-dark)', fontFamily: "'Dela Gothic One', sans-serif" }}>M</span>
          </div>
          <Link
            href="/"
            className="hover:opacity-90 transition-opacity"
            style={{ color: 'var(--mb-sky)', fontFamily: "'Dela Gothic One', sans-serif", fontSize: '15px', letterSpacing: '0.05em' }}
          >
            Monebou Academy
          </Link>
        </div>

        {/* Menu button — hamburger + avatar pill */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-1.5 px-2.5 h-9 rounded-full border-2 hover:opacity-85 transition-opacity shrink-0"
          style={{ borderColor: 'var(--mb-gold)', background: 'rgba(245,200,66,0.15)' }}
          aria-label="メニューを開く"
        >
          {/* Hamburger lines */}
          <div className="flex flex-col gap-[4px]">
            <span className="block w-4 h-[2px] rounded-full" style={{ background: 'var(--mb-gold)' }} />
            <span className="block w-4 h-[2px] rounded-full" style={{ background: 'var(--mb-gold)' }} />
            <span className="block w-4 h-[2px] rounded-full" style={{ background: 'var(--mb-gold)' }} />
          </div>
          {/* Label */}
          <span className="text-[11px] font-bold" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
            メニュー
          </span>
          {/* Avatar circle */}
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
            style={{ background: 'var(--mb-gold)', color: 'var(--mb-dark)', fontFamily: "'Dela Gothic One', sans-serif" }}
          >
            P
          </div>
        </button>
      </header>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px]"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer — dark themed like HP */}
      <aside
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(20,20,40,0.98)',
          backdropFilter: 'blur(20px)',
          borderLeft: '3px solid var(--mb-gold)',
        }}
      >
        {/* Drawer close button */}
        <button
          onClick={() => setDrawerOpen(false)}
          className="absolute top-4 right-5 text-white text-2xl hover:opacity-70 transition-opacity"
          aria-label="閉じる"
        >
          ✕
        </button>

        {/* Drawer header */}
        <div className="pt-16 px-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-sky)', fontSize: '18px' }}>
            Monebou Academy
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', letterSpacing: '2px', marginTop: '4px' }}>
            お金の知識を積み立てよう
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-between px-8 py-[18px] transition-colors hover:bg-white/5"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  color: isActive ? 'var(--mb-gold)' : 'white',
                }}
              >
                <div className="flex items-center gap-4">
                  <span style={{ color: isActive ? 'var(--mb-gold)' : 'rgba(255,255,255,0.5)' }}>
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', marginTop: '1px' }}>
                      {item.sub}
                    </div>
                  </div>
                </div>
                <svg className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.25)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}

          <button
            className="flex items-center justify-between px-8 py-[18px] transition-colors hover:bg-white/5 w-full text-left"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
          >
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.35)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <div>
                <div className="text-sm font-medium">ログアウト</div>
                <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', marginTop: '1px' }}>LOGOUT</div>
              </div>
            </div>
            <svg className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.25)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </nav>
      </aside>

      <main className="pt-14">
        {children}
      </main>
    </div>
  );
}
