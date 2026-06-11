'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CourseOverviewSheet from '@/components/CourseOverviewSheet';
import CategoryCardProgress from '@/components/CategoryCardProgress';
import type { Category } from '@/types';

const categoryMeta: Record<string, { shadow: string; icon: string; label: string; color: string }> = {
  'money-basics-full': { shadow: '#5BC8E8', icon: '💴', label: 'お金の基本', color: '#5BC8E8' },
  'money-knowledge':   { shadow: '#9B6DD6', icon: '🌐', label: '日本経済',   color: '#9B6DD6' },
  'zai-course':        { shadow: '#F5C842', icon: '🎲', label: 'ZAiゲーム',  color: '#F5C842' },
  'stock-intro':       { shadow: '#4CAF7D', icon: '📈', label: '株式投資',   color: '#4CAF7D' },
  'nisa-basics':       { shadow: '#E8354A', icon: '🏦', label: 'NISA',       color: '#E8354A' },
};

interface Props {
  categories: Category[];
}

export default function HomeCourseGrid({ categories }: Props) {
  const [selected, setSelected] = useState<Category | null>(null);
  const selectedMeta = selected ? categoryMeta[selected.id] : null;

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((cat, i) => {
          const meta = categoryMeta[cat.id];
          const lessonCount = cat.courses.reduce((a, c) => a + c.lessons.length, 0);

          return (
            <button
              key={cat.id}
              onClick={() => setSelected(cat)}
              className="flex flex-col rounded-xl border-2 bg-white transition-all hover:-translate-y-0.5 active:translate-y-0 overflow-hidden text-left"
              style={{
                borderColor: 'var(--mb-dark)',
                boxShadow: `3px 3px 0 ${meta?.shadow ?? '#ccc'}`,
                animation: `fadeUp 0.4s ease both`,
                animationDelay: `${i * 60}ms`,
              }}
            >
              {cat.image ? (
                <div className="relative w-full h-20">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 200px"
                    className="object-cover"
                    quality={75}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(26,26,46,0.5))' }}
                  />
                  <div
                    className="absolute top-1.5 right-1.5 text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: meta?.color ?? '#ccc', color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {meta?.label}
                  </div>
                </div>
              ) : (
                <div
                  className="w-full h-16 flex items-center justify-center text-3xl"
                  style={{ background: `${meta?.color ?? '#ccc'}18` }}
                >
                  {meta?.icon ?? '📖'}
                </div>
              )}

              <div className="p-3 flex flex-col flex-1">
                {!cat.image && (
                  <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                    <div
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${meta?.color ?? '#ccc'}20`, color: meta?.color ?? '#888', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                    >
                      {meta?.label}
                    </div>
                  </div>
                )}
                <div
                  className="text-xs font-bold leading-snug flex-1 line-clamp-2 mb-2"
                  style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {cat.title}
                </div>
                <div
                  className="text-[10px] font-bold"
                  style={{ color: 'rgba(26,26,46,0.4)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
                >
                  {cat.courses.length}章 · {lessonCount}講義
                </div>
              </div>
              <CategoryCardProgress category={cat} />
            </button>
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
