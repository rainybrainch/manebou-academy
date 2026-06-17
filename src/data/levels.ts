export interface Level {
  min: number;
  max: number;
  title: string;
  color: string;
  icon: string;
}

export const LEVELS: Level[] = [
  { min: 0,   max: 4,         title: '見習い',       color: 'var(--mb-purple)', icon: '🌱' },
  { min: 5,   max: 9,         title: '学習者',       color: 'var(--mb-sky)',    icon: '📖' },
  { min: 10,  max: 19,        title: '努力家',       color: 'var(--mb-green)',  icon: '💪' },
  { min: 20,  max: 29,        title: '猛者',         color: 'var(--mb-gold)',   icon: '⚡' },
  { min: 30,  max: 39,        title: '達人',         color: 'var(--mb-red)',    icon: '🔥' },
  { min: 40,  max: 49,        title: '修羅',         color: 'var(--mb-purple)', icon: '💎' },
  { min: 50,  max: 74,        title: '伝説',         color: 'var(--mb-gold)',   icon: '👑' },
  { min: 75,  max: 99,        title: '超人',         color: 'var(--mb-gold)',   icon: '🏆' },
  { min: 100, max: Infinity,  title: '100講義の神',   color: 'var(--mb-gold)',   icon: '💯' },
];

export function getLevel(count: number): Level {
  return LEVELS.find(l => count >= l.min && count <= l.max) ?? LEVELS[0];
}

export function getNextLevel(count: number): Level | null {
  const idx = LEVELS.findIndex(l => count >= l.min && count <= l.max);
  return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
}
