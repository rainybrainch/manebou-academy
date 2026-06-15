'use client';

import Link from 'next/link';
import Image from 'next/image';
import { topicCategories } from '@/data/structure';
import type { Category } from '@/types';

// カテゴリIDとアプリアイコン画像のマッピング
const appIconMap: Record<string, string> = {
  'cat-money':       '/images/apps/cat-money.png',
  'cat-investment':  '/images/apps/cat-investment.png',
  'cat-economics':   '/images/apps/cat-economics.png',
  'cat-politics':    '/images/apps/cat-politics.png',
  'cat-zai':         '/images/apps/cat-game.png',
  'cat-boardgame':   '/images/apps/cat-game.png',
  'cat-exam-public': '/images/apps/cat-exam.png',
};

const topicMeta: Record<string, { icon: string; color: string; shortName: string }> = {
  'cat-money':       { icon: '💴', color: '#5BC8E8', shortName: 'お金' },
  'cat-investment':  { icon: '📈', color: '#4CAF7D', shortName: '投資' },
  'cat-economics':   { icon: '🌐', color: '#9B6DD6', shortName: '経済' },
  'cat-politics':    { icon: '🏛', color: '#9B6DD6', shortName: '政治' },
  'cat-zai':         { icon: '🎲', color: '#F5C842', shortName: 'ZAi' },
  'cat-boardgame':   { icon: '🎯', color: '#F5C842', shortName: 'ゲーム' },
  'cat-exam-public': { icon: '📝', color: '#E8354A', shortName: '受験' },
};

interface Props {
  categories: Category[];
}

export default function HomeCourseGrid({ categories }: Props) {
  // 全カテゴリを表示（画像がないものは絵文字フォールバック）
  const allTopics = topicCategories;

  return (
    <>
      <style>{`
        @keyframes appPop {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        .app-icon:active { transform: scale(0.92); }
      `}</style>

      {/* アプリアイコングリッド */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-5">
        {allTopics.map((tc, i) => {
          const tm = topicMeta[tc.id];
          const iconSrc = appIconMap[tc.id];
          const hasContent = categories.some(c => c.topicCategoryId === tc.id);

          const inner = (
            <>
              {/* アイコン本体 */}
              <div
                className="w-full rounded-2xl overflow-hidden border-2 shadow-sm relative"
                style={{
                  aspectRatio: '1/1',
                  borderColor: hasContent ? 'rgba(26,26,46,0.08)' : 'rgba(26,26,46,0.04)',
                  background: `${tm?.color ?? '#ccc'}22`,
                  boxShadow: hasContent ? `0 2px 8px ${tm?.color ?? '#ccc'}30` : 'none',
                  opacity: hasContent ? 1 : 0.45,
                }}
              >
                {iconSrc ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={iconSrc}
                      alt={tc.title}
                      fill
                      sizes="(max-width: 640px) 25vw, 120px"
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-2xl"
                    style={{ background: `linear-gradient(135deg, ${tm?.color ?? '#ccc'}40, ${tm?.color ?? '#ccc'}18)` }}
                  >
                    {tm?.icon ?? '📚'}
                  </div>
                )}
                {/* 準備中バッジ */}
                {!hasContent && (
                  <div
                    className="absolute bottom-1 left-0 right-0 flex justify-center"
                  >
                    <span
                      className="text-[7px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(0,0,0,0.55)',
                        color: 'rgba(255,255,255,0.85)',
                        fontFamily: "'Zen Maru Gothic', sans-serif",
                      }}
                    >
                      準備中
                    </span>
                  </div>
                )}
              </div>

              {/* アプリ名 */}
              <span
                className="text-[10px] font-bold text-center leading-tight"
                style={{
                  color: hasContent ? 'var(--mb-dark)' : 'rgba(26,26,46,0.4)',
                  fontFamily: "'Zen Maru Gothic', sans-serif",
                }}
              >
                {tm?.shortName ?? tc.title}
              </span>
            </>
          );

          return hasContent ? (
            <Link
              key={tc.id}
              href={`/categories/${tc.id}`}
              className="app-icon flex flex-col items-center gap-1.5 transition-transform"
              style={{ animation: `appPop 0.3s ease both`, animationDelay: `${i * 50}ms` }}
            >
              {inner}
            </Link>
          ) : (
            <div
              key={tc.id}
              className="flex flex-col items-center gap-1.5 cursor-default"
              style={{ animation: `appPop 0.3s ease both`, animationDelay: `${i * 50}ms` }}
            >
              {inner}
            </div>
          );
        })}
      </div>
    </>
  );
}
