'use client';

import { useProgress } from '@/hooks/useProgress';

const LEVELS = [
  { min: 0,   max: 4,   title: '見習い',       color: '#9B6DD6', icon: '🌱' },
  { min: 5,   max: 9,   title: '学習者',       color: '#5BC8E8', icon: '📖' },
  { min: 10,  max: 19,  title: '努力家',       color: '#4CAF7D', icon: '💪' },
  { min: 20,  max: 29,  title: '猛者',         color: '#F5C842', icon: '⚡' },
  { min: 30,  max: 49,  title: '達人',         color: '#E8354A', icon: '🔥' },
  { min: 50,  max: 74,  title: '伝説',         color: '#F5C842', icon: '👑' },
  { min: 75,  max: 99,  title: '超人',         color: '#F5C842', icon: '🏆' },
  { min: 100, max: Infinity, title: '100講義の神', color: '#F5C842', icon: '💯' },
];

function getLevel(count: number) {
  return LEVELS.find(l => count >= l.min && count <= l.max) ?? LEVELS[0];
}

function getNextLevel(count: number) {
  const idx = LEVELS.findIndex(l => count >= l.min && count <= l.max);
  return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
}

export default function WelcomeBack() {
  const { completedCount, streakDays, mounted } = useProgress();

  if (!mounted || completedCount === 0) return null;

  const hour = new Date().getHours();
  const dayOfWeek = new Date().getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const greetingBase =
    hour < 5  ? '深夜も学ぶ、その姿勢がすごい。' :
    hour < 10 ? (isWeekend ? '休日の朝から！最高の使い方だ。' : '朝から勉強、最高のスタートだ！') :
    hour < 12 ? 'こんしは！今日も一緒に頑張ろう。' :
    hour < 14 ? 'お昼休みも学ぶ、それが差をつくる。' :
    hour < 17 ? 'こんしは！続けてるね、えらい！' :
    hour < 21 ? 'こんばんは！今日も学習してる、すごい！' :
                '夜遅くまで、ありがとう。';
  const greeting = streakDays >= 14 ? `${streakDays}日連続！本物の習慣になってきた。` : greetingBase;

  const streakMsg =
    streakDays >= 30 ? `驚異の${streakDays}日連続！` :
    streakDays >= 14 ? `${streakDays}日連続、すごい！` :
    streakDays >= 7  ? `${streakDays}日連続中！` :
    streakDays >= 3  ? `${streakDays}日連続中` :
    streakDays >= 2  ? `${streakDays}日連続` :
    null;

  const level = getLevel(completedCount);
  const next = getNextLevel(completedCount);

  const levelProgress = next
    ? Math.min(100, Math.round(((completedCount - level.min) / (next.min - level.min)) * 100))
    : 100;

  return (
    <div
      className="px-4 py-3 rounded-xl border-2"
      style={{
        background: `${level.color}08`,
        borderColor: `${level.color}35`,
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl shrink-0">
          {streakDays >= 7 ? '🔥' : streakDays >= 3 ? '⚡' : level.icon}
        </span>
        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-bold"
            style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            {greeting}
          </p>
          <p
            className="text-[10px] mt-0.5"
            style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
          >
            累計{completedCount}講義完了
            {streakMsg && ` · ${streakMsg}`}
          </p>
        </div>
        <div
          className="shrink-0 text-[10px] font-bold px-2 py-1 rounded-full"
          style={{ background: `${level.color}20`, color: level.color, fontFamily: "'Zen Maru Gothic', sans-serif", border: `1px solid ${level.color}40` }}
        >
          {level.icon} {level.title}
        </div>
      </div>
      {next && (
        <div className="mt-2.5">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[9px]" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
              次: {next.icon} {next.title}
            </span>
            <span className="text-[9px] font-bold" style={{ color: level.color, fontFamily: "'Dela Gothic One', sans-serif" }}>
              あと{next.min - completedCount}
            </span>
          </div>
          <div className="w-full rounded-full overflow-hidden" style={{ height: '4px', background: `${level.color}18` }}>
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${levelProgress}%`, background: level.color }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
