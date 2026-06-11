import type { Category } from '@/types';

const s = { type: 'info-box' as const, content: '準備中のコンテンツです。' };
const end = (next: string) => ({ type: 'summary' as const, content: '準備中です。', nextLesson: next });
const lesson = (id: string, title: string, next: string) => ({
  id, title, duration: '8:00', videoId: '', isPremium: false, isComingSoon: true,
  checkItems: [], sections: [s, end(next)],
});

export const moneyTaxCategory: Category = {
  id: 'money-tax',
  title: '税金の基本',
  description: '所得税・消費税・住民税のしくみから節税まで。知らないと損する税の知識を体系的に学びます。',
  level: '基礎',
  topicCategoryId: 'cat-money',
  image: '/images/courses/money-tax.png',
  courses: [
    {
      id: 'tax-ch1',
      title: '第1章：税金の種類と仕組み',
      image: '/images/chapters/tax-ch1.png',
      lessons: [
        lesson('tax-1-1', '直接税と間接税——税金の2つの種類', '所得税の仕組み'),
        lesson('tax-1-2', '所得税の仕組み（累進課税とは）', '住民税の仕組み'),
        lesson('tax-1-3', '住民税の仕組みと計算方法', '給与明細の読み方'),
      ],
    },
    {
      id: 'tax-ch2',
      title: '第2章：給与と税金',
      image: '/images/chapters/tax-ch2.png',
      lessons: [
        lesson('tax-2-1', '給与明細の読み方（手取りの計算）', '年末調整とは'),
        lesson('tax-2-2', '年末調整とは何か', '社会保険料との違い'),
        lesson('tax-2-3', '社会保険料との違い（税 vs 保険料）', '消費税の仕組み'),
      ],
    },
    {
      id: 'tax-ch3',
      title: '第3章：消費税と生活',
      image: '/images/chapters/tax-ch3.png',
      lessons: [
        lesson('tax-3-1', '消費税の仕組みと歴史', '軽減税率制度'),
        lesson('tax-3-2', '軽減税率制度（8%と10%の違い）', 'インボイス制度の基本'),
        lesson('tax-3-3', 'インボイス制度の基本（フリーランス・副業向け）', '医療費控除'),
      ],
    },
    {
      id: 'tax-ch4',
      title: '第4章：節税の基本',
      image: '/images/chapters/tax-ch4.png',
      lessons: [
        lesson('tax-4-1', '医療費控除の仕組みと申請方法', 'ふるさと納税'),
        lesson('tax-4-2', 'ふるさと納税の仕組みとお得な使い方', '確定申告が必要なケース'),
        lesson('tax-4-3', '確定申告が必要なケースを知る', ''),
      ],
    },
  ],
};
