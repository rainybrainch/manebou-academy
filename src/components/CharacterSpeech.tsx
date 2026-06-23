'use client';

import React from 'react';
import Image from 'next/image';
import { CharacterLine, JuniorCharacter } from '@/types';

// ── キャラクター設定 ──────────────────────────────────────
const CHARACTER_CONFIG: Record<JuniorCharacter, {
  name: string;
  nameReading: string;
  color: string;
  bgColor: string;
  borderColor: string;
  imagePath: string;
  side: 'left' | 'right';
}> = {
  all: {
    name: 'オール',
    nameReading: 'おーる',
    color: '#F5C842',
    bgColor: 'rgba(245,200,66,0.1)',
    borderColor: 'rgba(245,200,66,0.5)',
    imagePath: '/images/characters/all.webp',
    side: 'left',
  },
  gokucho: {
    name: '極超',
    nameReading: 'ごくちょう',
    color: '#E8354A',
    bgColor: 'rgba(232,53,74,0.08)',
    borderColor: 'rgba(232,53,74,0.4)',
    imagePath: '/images/characters/gokucho.webp',
    side: 'right',
  },
  en: {
    name: '円',
    nameReading: 'えん',
    color: '#5BC8E8',
    bgColor: 'rgba(91,200,232,0.1)',
    borderColor: 'rgba(91,200,232,0.5)',
    imagePath: '/images/characters/en.webp',
    side: 'left',
  },
  shizo: {
    name: '試造株式',
    nameReading: 'しぞうかぶしき',
    color: '#4CAF7D',
    bgColor: 'rgba(76,175,125,0.1)',
    borderColor: 'rgba(76,175,125,0.5)',
    imagePath: '/images/characters/shizo.webp',
    side: 'right',
  },
};

// ── ふりがな付きテキスト処理 ────────────────────────────────
function renderLine(text: string): React.ReactNode[] {
  const regex = /\{([^|{}]+)\|([^|{}]+)\}/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let idx = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    nodes.push(<ruby key={idx++}>{match[1]}<rt>{match[2]}</rt></ruby>);
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

// ── プレースホルダーアバター ────────────────────────────────
function AvatarPlaceholder({ character, size = 56 }: { character: JuniorCharacter; size?: number }) {
  const cfg = CHARACTER_CONFIG[character];
  const initials = cfg.name.slice(0, 1);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: cfg.color,
        border: `3px solid ${cfg.borderColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontSize: size * 0.38,
        fontFamily: "'Dela Gothic One', sans-serif",
        color: 'white',
        boxShadow: `0 3px 0 ${cfg.borderColor}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 画像が配置されたら Image コンポーネントに差し替え */}
      <span>{initials}</span>
    </div>
  );
}

// ── 吹き出し1行 ─────────────────────────────────────────────
function SpeechBubble({ line }: { line: CharacterLine }) {
  const cfg = CHARACTER_CONFIG[line.character];
  const isRight = cfg.side === 'right';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isRight ? 'row-reverse' : 'row',
        alignItems: 'flex-end',
        gap: 10,
        marginBottom: 16,
      }}
    >
      {/* アバター */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <AvatarPlaceholder character={line.character} size={52} />
        <span
          style={{
            fontSize: 9,
            fontWeight: 700,
            color: cfg.color,
            fontFamily: "'Zen Maru Gothic', sans-serif",
            whiteSpace: 'nowrap',
          }}
        >
          {cfg.name}
        </span>
      </div>

      {/* 吹き出し本体 */}
      <div style={{ position: 'relative', maxWidth: 'calc(100% - 80px)' }}>
        {/* 吹き出しの三角 */}
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            [isRight ? 'right' : 'left']: -8,
            width: 0,
            height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            [isRight ? 'borderLeft' : 'borderRight']: `10px solid ${cfg.color}`,
          }}
        />
        {/* 内側の三角（背景色） */}
        <div
          style={{
            position: 'absolute',
            bottom: 15,
            [isRight ? 'right' : 'left']: -6,
            width: 0,
            height: 0,
            borderTop: '7px solid transparent',
            borderBottom: '7px solid transparent',
            [isRight ? 'borderLeft' : 'borderRight']: `9px solid ${cfg.bgColor}`,
          }}
        />

        {/* テキストボックス */}
        <div
          style={{
            background: cfg.bgColor,
            border: `2px solid ${cfg.color}`,
            borderRadius: isRight ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
            padding: '10px 14px',
            boxShadow: `3px 3px 0 ${cfg.borderColor}`,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '0.88rem',
              lineHeight: 1.8,
              color: 'var(--mb-dark)',
              fontFamily: "'Zen Maru Gothic', sans-serif",
            }}
          >
            {renderLine(line.text)}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── メインコンポーネント ─────────────────────────────────────
export default function CharacterSpeech({ lines }: { lines: CharacterLine[] }) {
  return (
    <div
      style={{
        background: 'rgba(255,253,245,0.8)',
        border: '2px dashed rgba(26,26,46,0.12)',
        borderRadius: 16,
        padding: '16px 12px',
        marginBottom: '1.25rem',
      }}
    >
      {lines.map((line, i) => (
        <SpeechBubble key={i} line={line} />
      ))}
    </div>
  );
}
