import type { Category } from '@/types';

const s = { type: 'info-box' as const, content: '準備中のコンテンツです。' };
const end = (next: string) => ({ type: 'summary' as const, content: '準備中です。', nextLesson: next });
const lesson = (id: string, title: string, next: string) => ({
  id, title, duration: '8:00', videoId: '', isPremium: false, isComingSoon: true,
  checkItems: [], sections: [s, end(next)],
});

export const moneyLifeplanCategory: Category = {
  id: 'money-lifeplan',
  title: 'ライフプランニング入門',
  description: '結婚・住宅・子育て・老後…人生のお金はいつ・いくら必要か。ライフイベントから逆算してお金を準備する方法を学びます。',
  level: '入門',
  topicCategoryId: 'cat-money',
  image: '/images/courses/money-lifeplan.png',
  courses: [
    {
      id: 'lifeplan-ch1',
      title: '第1章：人生とお金のタイムライン',
      image: '/images/chapters/lifeplan-ch1.png',
      lessons: [
        lesson('lp-1-1', '20代・30代・40代・50代・老後のお金の流れ', 'ライフイベントの費用目安'),
        lesson('lp-1-2', 'ライフイベントにかかる費用の目安を知る', 'お金の不安を整理する'),
        lesson('lp-1-3', 'お金の不安を整理する（何が一番怖い？）', '結婚にかかる費用'),
      ],
    },
    {
      id: 'lifeplan-ch2',
      title: '第2章：結婚・住宅・子育てのお金',
      image: '/images/chapters/lifeplan-ch2.png',
      lessons: [
        lesson('lp-2-1', '結婚にかかる費用と準備の仕方', '住宅購入vs賃貸'),
        lesson('lp-2-2', '住宅購入 vs 賃貸——どちらが得か', '子育て・教育費の準備'),
        lesson('lp-2-3', '子育て・教育費の準備（学費はいくら必要か）', '老後のお金の試算'),
      ],
    },
    {
      id: 'lifeplan-ch3',
      title: '第3章：老後のお金を準備する',
      image: '/images/chapters/lifeplan-ch3.png',
      lessons: [
        lesson('lp-3-1', '老後に必要な金額を試算する', '公的年金だけで足りる？'),
        lesson('lp-3-2', '公的年金だけで足りる？「老後2000万円問題」を考える', '老後資金の積み立て方'),
        lesson('lp-3-3', '老後資金の積み立て方（NISA・iDeCo活用）', ''),
      ],
    },
  ],
};
