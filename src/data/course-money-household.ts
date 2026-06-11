import type { Category } from '@/types';

const s = { type: 'info-box' as const, content: '準備中のコンテンツです。' };
const end = (next: string) => ({ type: 'summary' as const, content: '準備中です。', nextLesson: next });
const lesson = (id: string, title: string, next: string) => ({
  id, title, duration: '8:00', videoId: '', isPremium: false, isComingSoon: true,
  checkItems: [], sections: [s, end(next)],
});

export const moneyHouseholdCategory: Category = {
  id: 'money-household',
  title: '家計管理の基本',
  description: '収入・支出の把握から先取り貯蓄まで。毎月のお金の流れをコントロールする実践的な方法を学びます。',
  level: '入門',
  topicCategoryId: 'cat-money',
  image: '/images/courses/money-household.png',
  courses: [
    {
      id: 'household-ch1',
      title: '第1章：収入と支出を把握する',
      image: '/images/chapters/household-ch1.png',
      lessons: [
        lesson('hh-1-1', '収入の種類を整理する（手取りとは）', '固定費と変動費の分け方'),
        lesson('hh-1-2', '固定費と変動費の分け方', '家計を見える化する'),
        lesson('hh-1-3', '家計を見える化する（家計簿・アプリ活用）', '先取り貯蓄の仕組み'),
      ],
    },
    {
      id: 'household-ch2',
      title: '第2章：貯蓄の習慣をつくる',
      image: '/images/chapters/household-ch2.png',
      lessons: [
        lesson('hh-2-1', '先取り貯蓄の仕組みと効果', '緊急資金の準備'),
        lesson('hh-2-2', '緊急資金を準備する（生活費3〜6ヶ月分）', '目標別の積立計画'),
        lesson('hh-2-3', '目標別の積立計画を立てる', '支出を減らすコツ'),
      ],
    },
    {
      id: 'household-ch3',
      title: '第3章：家計改善の実践',
      image: '/images/chapters/household-ch3.png',
      lessons: [
        lesson('hh-3-1', '支出を減らすコツ（固定費の見直し）', '収入を増やす考え方'),
        lesson('hh-3-2', '収入を増やす考え方（副業・スキルアップ）', '月次振り返りのサイクル'),
        lesson('hh-3-3', '月次振り返りのサイクルをつくる', ''),
      ],
    },
  ],
};
