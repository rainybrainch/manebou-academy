'use client';

import { useEffect, useRef, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';
import { categories } from '@/data/courses';

const SEEN_KEY = 'mb_seen_achievements';

interface Achievement {
  id: string;
  icon: string;
  title: string;
  check: (completedCount: number, streakDays: number, bestStreak: number, keys: string[]) => boolean;
}

const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_step',        icon: '🌱',  title: '最初の一歩',      check: (c) => c >= 1 },
  { id: 'five_lessons',      icon: '⭐',  title: '5講義クリア',     check: (c) => c >= 5 },
  { id: 'ten_lessons',       icon: '🌟',  title: '10講義クリア',    check: (c) => c >= 10 },
  { id: 'twenty_lessons',    icon: '💎',  title: '20講義クリア',    check: (c) => c >= 20 },
  { id: 'thirty_lessons',    icon: '🎖️', title: '30講義の壁',      check: (c) => c >= 30 },
  { id: 'fifty_lessons',     icon: '🥇',  title: '50講義の頂',      check: (c) => c >= 50 },
  { id: 'seventy_five_lessons', icon: '🎯', title: '75講義突破',    check: (c) => c >= 75 },
  { id: 'hundred_lessons',   icon: '💯',  title: '100講義の奇跡',   check: (c) => c >= 100 },
  { id: 'three_streak',      icon: '🔥',  title: '3日連続学習',     check: (_, s) => s >= 3 },
  { id: 'seven_streak',      icon: '⚡',  title: '1週間連続',       check: (_, s) => s >= 7 },
  { id: 'fourteen_streak',   icon: '🌙',  title: '2週間連続',       check: (_, s) => s >= 14 },
  { id: 'twenty_one_streak', icon: '🌻',  title: '3週間連続',       check: (_, s) => s >= 21 },
  { id: 'thirty_streak',     icon: '🔮',  title: '1ヶ月連続',       check: (_, s) => s >= 30 },
  { id: 'best_streak_7',     icon: '🏅',  title: '伝説の学習者',    check: (_, _s, b) => b >= 7 },
  { id: 'best_streak_30',    icon: '🌈',  title: '伝説の30日',      check: (_, _s, b) => b >= 30 },
  { id: 'chapter_clear',     icon: '📗',  title: '章マスター',      check: (_, _s, _b, keys) =>
    categories.some(cat => cat.courses.some(course => {
      const av = course.lessons.filter(l => !l.isComingSoon);
      return av.length > 0 && av.every(l => keys.includes(`${course.id}/${l.id}`));
    }))
  },
  { id: 'category_clear',    icon: '🏆',  title: 'カテゴリ制覇',    check: (_, _s, _b, keys) =>
    categories.some(cat => {
      const av = cat.courses.flatMap(c => c.lessons.filter(l => !l.isComingSoon).map(l => `${c.id}/${l.id}`));
      return av.length > 0 && av.every(k => keys.includes(k));
    })
  },
  { id: 'note_taker',        icon: '📝',  title: 'メモ魔',          check: () => {
    try { return Object.keys(localStorage).filter(k => k.startsWith('mb_note_') && localStorage.getItem(k)).length >= 5; }
    catch { return false; }
  }},
  { id: 'note_taker_10',     icon: '📓',  title: 'メモの達人',      check: () => {
    try { return Object.keys(localStorage).filter(k => k.startsWith('mb_note_') && localStorage.getItem(k)).length >= 10; }
    catch { return false; }
  }},
  { id: 'like_lover',        icon: '❤️',  title: 'いいね魔',        check: () => {
    try { return Object.keys(localStorage).filter(k => k.startsWith('mb_like_') && localStorage.getItem(k) === '1').length >= 5; }
    catch { return false; }
  }},
  { id: 'like_lover_10',     icon: '💖',  title: 'いいね上手',      check: () => {
    try { return Object.keys(localStorage).filter(k => k.startsWith('mb_like_') && localStorage.getItem(k) === '1').length >= 10; }
    catch { return false; }
  }},
  { id: 'speed_day',         icon: '🚀',  title: '集中学習',        check: () => {
    try {
      const raw = localStorage.getItem('mb_progress_v1');
      const store = raw ? JSON.parse(raw) : null;
      const counts: Record<string, number> = store?.dailyLessonCounts ?? {};
      return Object.values(counts).some((n: number) => n >= 3);
    } catch { return false; }
  }},
  { id: 'super_speed',       icon: '🌩️', title: '超集中学習',      check: () => {
    try {
      const raw = localStorage.getItem('mb_progress_v1');
      const store = raw ? JSON.parse(raw) : null;
      const counts: Record<string, number> = store?.dailyLessonCounts ?? {};
      return Object.values(counts).some((n: number) => n >= 5);
    } catch { return false; }
  }},
  { id: 'check_complete',    icon: '✅',  title: 'チェック魔',      check: () => {
    try {
      const count = Object.keys(localStorage).filter(k => {
        if (!k.startsWith('mb_checks_')) return false;
        const val = localStorage.getItem(k);
        if (!val) return false;
        const arr: boolean[] = JSON.parse(val);
        return arr.length > 0 && arr.every(Boolean);
      }).length;
      return count >= 10;
    } catch { return false; }
  }},
  { id: 'weekly_perfect',    icon: '🗓️', title: '週間パーフェクト', check: (_, s) => s >= 7 },
];

interface ToastItem { id: string; icon: string; title: string }

export default function AchievementToast() {
  const { completedCount, streakDays, bestStreak, mounted } = useProgress();
  const [queue, setQueue] = useState<ToastItem[]>([]);
  const [visible, setVisible] = useState<ToastItem | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const checkedRef = useRef(false);

  useEffect(() => {
    if (!mounted || checkedRef.current) return;
    checkedRef.current = true;

    const completedKeys: string[] = (() => {
      try {
        const raw = localStorage.getItem('mb_progress_v1');
        return raw ? JSON.parse(raw).completedLessons ?? [] : [];
      } catch { return []; }
    })();

    const seen: string[] = (() => {
      try { return JSON.parse(localStorage.getItem(SEEN_KEY) ?? '[]'); }
      catch { return []; }
    })();

    const newlyEarned = ACHIEVEMENTS.filter(
      a => !seen.includes(a.id) && a.check(completedCount, streakDays, bestStreak, completedKeys)
    );

    if (newlyEarned.length === 0) return;

    const updated = [...seen, ...newlyEarned.map(a => a.id)];
    try { localStorage.setItem(SEEN_KEY, JSON.stringify(updated)); } catch {}

    setQueue(newlyEarned.map(a => ({ id: a.id, icon: a.icon, title: a.title })));
  }, [mounted, completedCount, streakDays, bestStreak]);

  useEffect(() => {
    if (visible || queue.length === 0) return;
    const [next, ...rest] = queue;
    setQueue(rest);
    setVisible(next);
    timerRef.current = setTimeout(() => setVisible(null), 3500);
  }, [visible, queue]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-20 right-4 z-[80] flex items-center gap-3 px-4 py-3 rounded-xl border-2"
      style={{
        background: 'var(--mb-dark)',
        borderColor: 'var(--mb-gold)',
        boxShadow: '3px 3px 0 var(--mb-gold)',
        animation: 'slideInRight 0.35s ease',
        maxWidth: '240px',
      }}
    >
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      <span className="text-2xl shrink-0">{visible.icon}</span>
      <div className="min-w-0">
        <div className="text-[9px] font-bold tracking-widest mb-0.5" style={{ color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          実績解除！
        </div>
        <div className="text-xs font-bold truncate" style={{ color: 'white', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
          {visible.title}
        </div>
      </div>
      <button
        onClick={() => { setVisible(null); if (timerRef.current) clearTimeout(timerRef.current); }}
        className="shrink-0 text-[10px] ml-1"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        ✕
      </button>
    </div>
  );
}
