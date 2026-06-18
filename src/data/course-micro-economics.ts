import { Category } from '@/types';

export const microEconomicsCategory: Category = {
  id: 'micro-economics',
  title: 'ミクロ経済学の基本',
  description: '需給曲線・価格メカニズム・市場構造。個別企業・産業レベルの経済を読み取る。',
  level: '基礎',
  topicCategoryId: 'cat-economics',
  courses: [
    {
      id: 'micro-ch1',
      title: '第1章：需要曲線と供給曲線',
      lessons: [
        { id: 'mi1-1', title: '需要の法則：価格と需要量の関係', duration: '10:30', videoId: '', isPremium: false, checkItems: ['需要の法則説明できる', '需要曲線読める'], sections: [{ type: 'text', content: '価格下がる→需要量増える。価格上がる→需要量減る。これが需要曲線。' }] },
        { id: 'mi1-2', title: '供給の法則と供給曲線', duration: '10:15', videoId: '', isPremium: false, checkItems: ['供給曲線理解'], sections: [{ type: 'text', content: '価格上がる→供給量増える（生産者は利益追求）。価格下がる→供給量減る。' }] },
        { id: 'mi1-3', title: '均衡点：市場が決める「適正価格」', duration: '11:00', videoId: '', isPremium: false, checkItems: ['均衡概念理解'], sections: [{ type: 'text', content: '需要曲線と供給曲線の交点が均衡点。この価格で需給が一致。' }] },
        { id: 'mi1-4', title: '価格統制と市場の歪み', duration: '10:45', videoId: '', isPremium: false, checkItems: ['価格統制の効果計算'], sections: [{ type: 'text', content: '上限価格設定：供給不足生成。下限価格設定：売れ残り生成。市場メカニズムの破壊。' }] },
      ],
    },
    {
      id: 'micro-ch2',
      title: '第2章：弾力性と価格変動',
      lessons: [
        { id: 'mi2-1', title: '需要の価格弾力性：価格感応度', duration: '11:15', videoId: '', isPremium: false, checkItems: ['弾力性計算できる'], sections: [{ type: 'text', content: '弾力性 = 需要量変化率 / 価格変化率。高いほど価格変動に敏感。' }] },
        { id: 'mi2-2', title: '必需品と奢侈品：弾力性の差', duration: '10:30', videoId: '', isPremium: false, checkItems: ['商品分類できる'], sections: [{ type: 'text', content: 'コメ（必需品）：低弾力性。宝飾品（奢侈品）：高弾力性。' }] },
        { id: 'mi2-3', title: '供給の価格弾力性', duration: '9:45', videoId: '', isPremium: false, checkItems: ['供給弾力性理解'], sections: [{ type: 'text', content: '農産物：低弾力性（生産期間固定）。工業製品：高弾力性（調整可能）。' }] },
      ],
    },
    {
      id: 'micro-ch3',
      title: '第3章：完全競争と市場構造',
      lessons: [
        { id: 'mi3-1', title: '完全競争市場とは', duration: '10:30', videoId: '', isPremium: false, checkItems: ['完全競争定義'], sections: [{ type: 'text', content: '多数の企業・参入障壁なし・同質商品・情報完全。理想的市場。' }] },
        { id: 'mi3-2', title: '独占・寡占・独占的競争', duration: '11:45', videoId: '', isPremium: false, checkItems: ['市場構造分類できる'], sections: [{ type: 'text', content: '独占：1社。寡占：数社（自動車・鉄鋼）。独占的競争：多数だが差別化（飲食店等）。' }] },
        { id: 'mi3-3', title: '企業の利潤最大化戦略', duration: '10:15', videoId: '', isPremium: false, checkItems: ['利潤最大化点計算'], sections: [{ type: 'text', content: '利潤最大化：限界収入 = 限界費用。この点で生産量を決定。' }] },
      ],
    },
    {
      id: 'micro-ch4',
      title: '第4章：消費者と生産者の余剰',
      lessons: [
        { id: 'mi4-1', title: '消費者余剰と生産者余剰', duration: '11:00', videoId: '', isPremium: false, checkItems: ['余剰概念理解'], sections: [{ type: 'text', content: '消費者余剰：消費者の満足度。生産者余剰：生産者の利益。' }] },
        { id: 'mi4-2', title: '死重損失：市場効率性', duration: '10:30', videoId: '', isPremium: false, checkItems: ['効率性評価できる'], sections: [{ type: 'text', content: '完全競争では全体余剰が最大。独占では死重損失（社会的損失）発生。' }] },
      ],
    },
  ],
};
