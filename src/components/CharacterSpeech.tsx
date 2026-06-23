'use client';

import React from 'react';
import Image from 'next/image';
import { CharacterLine, JuniorCharacter } from '@/types';

// ── キャラクター設定 ──────────────────────────────────────────
// all    = おーる局長（フクロウ）先生・ゲームマスター役
// enda   = えんだ（カエル）　　投資初心者・質問役
// tamezo = ためぞう（ゾウ）　　貯金大好き・保守派
// kawshi = かうっしー（ウシ）　買い物大好き・衝動買い派
const CHARACTER_CONFIG: Record<JuniorCharacter, {
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
  imagePath: string;
  side: 'left' | 'right';
}> = {
  all: {
    name: 'おーる局長',
    color: '#5B9BD5',
    bgColor: 'rgba(91,155,213,0.1)',
    borderColor: 'rgba(91,155,213,0.5)',
    imagePath: '/images/characters/all.png',
    side: 'left',
  },
  enda: {
    name: 'えんだ',
    color: '#70B86E',
    bgColor: 'rgba(112,184,110,0.1)',
    borderColor: 'rgba(112,184,110,0.5)',
    imagePath: '/images/characters/enda.png',
    side: 'right',
  },
  tamezo: {
    name: 'ためぞう',
    color: '#9B9B9B',
    bgColor: 'rgba(155,155,155,0.1)',
    borderColor: 'rgba(155,155,155,0.5)',
    imagePath: '/images/characters/tamezo.png',
    side: 'left',
  },
  kawshi: {
    name: 'かうっしー',
    color: '#E8914A',
    bgColor: 'rgba(232,145,74,0.1)',
    borderColor: 'rgba(232,145,74,0.4)',
    imagePath: '/images/characters/kawshi.png',
    side: 'right',
  },
};

// ── ふりがな付きテキスト処理 ──────────────────────────────────
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

// ── キャラクターアバター ──────────────────────────────────────
function CharacterAvatar({ character }: { character: JuniorCharacter }) {
  const cfg = CHARACTER_CONFIG[character];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, flexShrink: 0 }}>
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          border: `3px solid ${cfg.color}`,
          background: cfg.bgColor,
          overflow: 'hidden',
          boxShadow: `0 3px 0 ${cfg.borderColor}`,
          position: 'relative',
        }}
      >
        <Image
          src={cfg.imagePath}
          alt={cfg.name}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          sizes="72px"
        />
      </div>
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: cfg.color,
          fontFamily: "'Zen Maru Gothic', sans-serif",
          whiteSpace: 'nowrap',
        }}
      >
        {cfg.name}
      </span>
    </div>
  );
}

// ── 吹き出し1行 ───────────────────────────────────────────────
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
        marginBottom: 14,
      }}
    >
      <CharacterAvatar character={line.character} />

      {/* 吹き出し本体 */}
      <div style={{ position: 'relative', maxWidth: 'calc(100% - 92px)' }}>
        {/* 三角（外枠） */}
        <div
          style={{
            position: 'absolute',
            bottom: 16,
            [isRight ? 'right' : 'left']: -9,
            width: 0,
            height: 0,
            borderTop: '9px solid transparent',
            borderBottom: '9px solid transparent',
            [isRight ? 'borderLeft' : 'borderRight']: `11px solid ${cfg.color}`,
          }}
        />
        {/* 三角（内側） */}
        <div
          style={{
            position: 'absolute',
            bottom: 17,
            [isRight ? 'right' : 'left']: -6,
            width: 0,
            height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            [isRight ? 'borderLeft' : 'borderRight']: `10px solid ${cfg.bgColor}`,
          }}
        />

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
              lineHeight: 1.85,
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

// ── メインコンポーネント ──────────────────────────────────────
export default function CharacterSpeech({ lines }: { lines: CharacterLine[] }) {
  return (
    <div
      style={{
        background: 'rgba(255,253,245,0.85)',
        border: '2px dashed rgba(26,26,46,0.12)',
        borderRadius: 18,
        padding: '16px 12px 8px',
        marginBottom: '1.25rem',
      }}
    >
      {lines.map((line, i) => (
        <SpeechBubble key={i} line={line} />
      ))}
    </div>
  );
}
