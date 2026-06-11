'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CourseOverviewSheet from '@/components/CourseOverviewSheet';
import CategoryCardProgress from '@/components/CategoryCardProgress';
import { topicCategories } from '@/data/structure';
import type { Category } from '@/types';

const categoryMeta: Record<string, { shadow: string; icon: string; label: string; color: string }> = {
  'money-basics-full': { shadow: '#5BC8E8', icon: '💴', label: 'お金の基本', color: '#5BC8E8' },
  'money-knowledge':   { shadow: '#9B6DD6', icon: '🌐', label: '日本経済',   color: '#9B6DD6' },
  'zai-course':        { shadow: '#F5C842', icon: '🎲', label: 'ZAiゲーム',  color: '#F5C842' },
  'stock-intro':       { shadow: '#4CAF7D', icon: '📈', label: '株式投資',   color: '#4CAF7D' },
  'nisa-basics':       { shadow: '#E8354A', icon: '🏦', label: 'NISA',       color: '#E8354A' },
};

const topicMeta: Record<string, { icon: string; color: string; tagline: string }> = {
  'cat-money':      { icon: '💴', color: '#5BC8E8', tagline: 'お金を学ぼうマネぼう！' },
  'cat-investment': { icon: '📈', color: '#4CAF7D', tagline: '投資を学ぼうマネぼう！' },
  'cat-economics':  { icon: '🌐', color: '#9B6DD6', tagline: '経済を学ぼうマネぼう！' },
  'cat-politics':   { icon: '🏛', color: '#9B6DD6', tagline: '政治を学ぼうマネぼう！' },
  'cat-zai':        { icon: '🎲', color: '#F5C842', tagline: 'ZAiで学ぼうマネぼう！' },
  'cat-boardgame':  { icon: '🎯', color: '#F5C842', tagline: 'ゲームで学ぼうマネぼう！' },
  'cat-exam-public':{ icon: '📝', color: '#E8354A', tagline: '受験対策マネぼう！' },
};

interface Props {
  categories: Category[];
}

export default function HomeCourseGrid({ categories }: Props) {
  const [selected, setSelected] = useState<Category | null>(null);
  const selectedMeta = selected ? categoryMeta[selected.id] : null;

  // カテゴリに属するコース数を集計
  const courseCountByTopic: Record<string, number> = {};
  const lessonCountByTopic: Record<string, number> = {};
  for (const cat of categories) {
    const tid = cat.topicCategoryId ?? '';
    if (!tid) continue;
    courseCountByTopic[tid] = (courseCountByTopic[tid] ?? 0) + 1;
    lessonCountByTopic[tid] = (lessonCountByTopic[tid] ?? 0) +
      cat.courses.reduce((a, c) => a + c.lessons.length, 0);
  }

  // 実際にコースが存在するカテゴリのみ表示
  const activeTopics = topicCategories.filter(tc => courseCountByTopic[tc.id] > 0);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* カテゴリカードグリッド */}
      <div className="grid grid-cols-2 gap-3">
        {activeTopics.map((tc, i) => {
          const tm = topicMeta[tc.id];
          const courseCount = courseCountByTopic[tc.id] ?? 0;
          const lessonCount = lessonCountByTopic[tc.id] ?? 0;

          return (
            <Link
              key={tc.id}
              href={`/categories/${tc.id}`}
              className="flex flex-col rounded-xl border-2 bg-white transition-all hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              style={{
                borderColor: 'var(--mb-dark)',
                boxShadow: `3px 3px 0 ${tm?.color ?? '#ccc'}`,
                animation: `fadeUp 0.4s ease both`,
                animationDelay: `${i * 60}ms`,
              }}
            >
              {/* 画像エリア */}
              {tc.image ? (
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={tc.image}
                    alt={tc.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 200px"
                    className="object-cover"
                    quality={75}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(26,26,46,0.55))' }} />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[9px] font-bold text-white" style={{ fontFamily: "'Zen Maru Gothic', sans-serif", textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                      {tm?.tagline}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="w-full flex flex-col items-center justify-center gap-1"
                  style={{ background: `${tm?.color ?? '#ccc'}18`, aspectRatio: '16/9' }}
                >
                  <span className="text-2xl">{tm?.icon ?? '📚'}</span>
                  <span className="text-[9px] font-bold px-2 text-center leading-tight" style={{ color: tm?.color ?? '#888', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {tm?.tagline}
                  </span>
                </div>
              )}

              {/* テキストエリア */}
              <div className="p-3 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div
                    className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${tm?.color ?? '#ccc'}20`, color: tm?.color ?? '#888', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {tc.title}
                  </div>
                </div>
                <div
                  className="text-xs font-bold leading-snug flex-1 line-clamp-2 mb-2"
                  style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {tc.description.replace('マネぼう！', '')}
                </div>
                <div className="text-[10px] font-bold" style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {courseCount}コース · {lessonCount}講義
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {selected && selectedMeta && (
        <CourseOverviewSheet
          category={selected}
          meta={selectedMeta}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
