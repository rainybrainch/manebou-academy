import { Category } from '@/types';

export const industryStructureCategory: Category = {
  id: 'industry-structure',
  title: '産業構造と経済セクター',
  description: '第1次・第2次・第3次産業。産業転換とシフト。日本経済の産業構造の変化。',
  level: '基礎',
  topicCategoryId: 'cat-economics',
  courses: [
    {
      id: 'ind-ch1',
      title: '第1章：三大産業分類',
      lessons: [
        { id: 'is1-1', title: '第1次産業：農業・漁業・鉱業', duration: '10:15', videoId: '', isPremium: false, checkItems: ['第1次産業の特性理解'], sections: [{ type: 'text', content: '自然資源の採取。発展途上国で大きな割合。先進国では小さい（日本2%程度）。' }] },
        { id: 'is1-2', title: '第2次産業：製造業・建設業', duration: '11:00', videoId: '', isPremium: false, checkItems: ['製造業の重要性理解'], sections: [{ type: 'text', content: 'モノづくり。経済成長の主役。工業化で豊かに。日本：20%程度。' }] },
        { id: 'is1-3', title: '第3次産業：サービス業・流通・金融', duration: '11:30', videoId: '', isPremium: false, checkItems: ['サービス業の多様性理解'], sections: [{ type: 'text', content: 'サービス提供。先進国で圧倒的大多数（日本70%以上）。金融・IT・医療等。' }] },
        { id: 'is1-4', title: '第4次産業：情報・知識産業', duration: '10:30', videoId: '', isPremium: false, checkItems: ['デジタル産業の台頭'], sections: [{ type: 'text', content: 'AI・IT・データ。今後さらに重要化。労働力不要で高付加価値。' }] },
      ],
    },
    {
      id: 'ind-ch2',
      title: '第2章：産業構造の転換',
      lessons: [
        { id: 'is2-1', title: 'ペティ=クラーク法則', duration: '10:45', videoId: '', isPremium: false, checkItems: ['産業シフト法則理解'], sections: [{ type: 'text', content: '経済発展→第1次→第2次→第3次へシフト。先進国で顕著。' }] },
        { id: 'is2-2', title: '日本の産業構造：戦後から現在', duration: '11:15', videoId: '', isPremium: false, checkItems: ['日本の産業転換歴'], sections: [{ type: 'text', content: '1950s：農業主体→1970s：製造業全盛→2000s：サービス業化。' }] },
        { id: 'is2-3', title: 'デジタル化と産業の消滅・創造', duration: '11:00', videoId: '', isPremium: false, checkItems: ['デジタル破壊理解'], sections: [{ type: 'text', content: 'タクシー業→ライドシェア。小売→e-commerce。産業の再構成が加速。' }] },
      ],
    },
    {
      id: 'ind-ch3',
      title: '第3章：産業別経済分析',
      lessons: [
        { id: 'is3-1', title: '自動車産業：日本の基幹産業', duration: '10:30', videoId: '', isPremium: false, checkItems: ['自動車産業の構造'], sections: [{ type: 'text', content: '日本GDP：8%程度。電動化・自動運転で変革期。' }] },
        { id: 'is3-2', title: '半導体・電子機器産業', duration: '10:45', videoId: '', isPremium: false, checkItems: ['ハイテク産業の動向'], sections: [{ type: 'text', content: 'AI・5G時代。先端技術の戦場。台湾・韓国に競争圧力。' }] },
        { id: 'is3-3', title: '医療・介護産業：成長産業', duration: '10:15', videoId: '', isPremium: false, checkItems: ['超高齢社会の産業'], sections: [{ type: 'text', content: '高齢化→医療・介護需要↑。安定的成長が期待される産業。' }] },
      ],
    },
  ],
};
