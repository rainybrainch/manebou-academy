import type { Category } from '@/types';

const s = { type: 'info-box' as const, content: '準備中のコンテンツです。' };
const end = (next: string) => ({ type: 'summary' as const, content: '準備中です。', nextLesson: next });
const lesson = (id: string, title: string, next: string) => ({
  id, title, duration: '8:00', videoId: '', isPremium: false, isComingSoon: true,
  checkItems: [], sections: [s, end(next)],
});

export const moneyInsuranceCategory: Category = {
  id: 'money-insurance',
  title: '保険の基本',
  description: '民間保険（生命・医療・損害）の仕組みと選び方。本当に必要な保険だけを賢く選ぶ目を養います。',
  level: '基礎',
  topicCategoryId: 'cat-money',
  image: '/images/courses/money-insurance.png',
  courses: [
    {
      id: 'insurance-ch1',
      title: '第1章：保険の役割と仕組み',
      image: '/images/chapters/insurance-ch1.png',
      lessons: [
        lesson('ins-1-1', 'なぜ保険が必要か（リスクの分散）', '保険料の仕組み'),
        lesson('ins-1-2', '保険料の仕組み（純保険料と付加保険料）', '公的保険と民間保険の違い'),
        lesson('ins-1-3', '公的保険と民間保険の違いを整理する', '死亡保険の種類'),
      ],
    },
    {
      id: 'insurance-ch2',
      title: '第2章：生命保険・医療保険',
      image: '/images/chapters/insurance-ch2.png',
      lessons: [
        lesson('ins-2-1', '死亡保険の種類（終身・定期・収入保障）', '医療保険・がん保険'),
        lesson('ins-2-2', '医療保険・がん保険の選び方', '生命保険の必要額の考え方'),
        lesson('ins-2-3', '生命保険の必要額の考え方', '損害保険の種類'),
      ],
    },
    {
      id: 'insurance-ch3',
      title: '第3章：損害保険と保険の見直し',
      image: '/images/chapters/insurance-ch3.png',
      lessons: [
        lesson('ins-3-1', '自動車保険・火災保険の基本', '地震保険'),
        lesson('ins-3-2', '地震保険（なぜ必要か）', '必要な保険・不要な保険の見極め方'),
        lesson('ins-3-3', '必要な保険・不要な保険の見極め方', ''),
      ],
    },
  ],
};
