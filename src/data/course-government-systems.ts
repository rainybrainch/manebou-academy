import { Category } from '@/types';

export const governmentSystemsCategory: Category = {
  id: 'government-systems',
  title: '各国の政治体制',
  description: '大統領制・議院内閣制・一院制・二院制。世界の民主主義の多様性。',
  level: '基礎',
  topicCategoryId: 'cat-politics',
  courses: [
    {
      id: 'gs-ch1',
      title: '第1章：行政権の形態',
      lessons: [
        { id: 'gs1-1', title: '大統領制（米国モデル）', duration: '11:30', videoId: '', isPremium: false, checkItems: ['大統領制の特徴'], sections: [{ type: 'text', content: '大統領が行政と立法を兼ねない。権力分立・チェック・アンドバランス。米国・韓国・フィリピン。' }] },
        { id: 'gs1-2', title: '議院内閣制（日本・イギリスモデル）', duration: '11:15', videoId: '', isPremium: false, checkItems: ['議院内閣制の特徴'], sections: [{ type: 'text', content: '議会から内閣総理大臣を選出。行政は議会の信任が必要。日本・イギリス・ドイツ・カナダ。' }] },
        { id: 'gs1-3', title: '両制度の比較', duration: '10:45', videoId: '', isPremium: false, checkItems: ['制度比較できる'], sections: [{ type: 'text', content: '大統領制：明確・安定的。但し行政と立法の対立も。議院内閣制：柔軟・協調的。但し政局不安定の可能性。' }] },
        { id: 'gs1-4', title: '準大統領制と半大統領制', duration: '10:30', videoId: '', isPremium: false, checkItems: ['混合制理解'], sections: [{ type: 'text', content: 'フランス：大統領と首相の二重権力。ロシア：大統領が強い半大統領制。' }] },
      ],
    },
    {
      id: 'gs-ch2',
      title: '第2章：議会制度',
      lessons: [
        { id: 'gs2-1', title: '二院制と一院制', duration: '11:00', videoId: '', isPremium: false, checkItems: ['院制の違い'], sections: [{ type: 'text', content: '二院制：上院・下院。多様な意見反映・慎重な意思決定。一院制：効率的・シンプル。' }] },
        { id: 'gs2-2', title: '小選挙区制 vs 比例代表制', duration: '11:15', videoId: '', isPremium: false, checkItems: ['選挙制度比較'], sections: [{ type: 'text', content: '小選挙区：二大政党制・明確。比例代表：多党化・多元的。各国で工夫。' }] },
        { id: 'gs2-3', title: '政治体制と安定性', duration: '10:30', videoId: '', isPremium: false, checkItems: ['制度と安定の関係'], sections: [{ type: 'text', content: '民主主義は制度だけでなく、国民の信頼・政治文化に依存。' }] },
      ],
    },
    {
      id: 'gs-ch3',
      title: '第3章：世界の民主主義の多様性',
      lessons: [
        { id: 'gs3-1', title: '自由民主主義と制限民主主義', duration: '10:45', videoId: '', isPremium: false, checkItems: ['民主主義の多様性'], sections: [{ type: 'text', content: '自由民主主義：表現・言論・結社の自由。制限民主主義：形式的民主主義だが権利制限。' }] },
        { id: 'gs3-2', title: 'イリベラル民主主義の台頭', duration: '11:00', videoId: '', isPremium: false, checkItems: ['新しい脅威理解'], sections: [{ type: 'text', content: 'ハンガリー・ポーランド・フィリピン。選挙は行うが基本的自由が制限される。' }] },
      ],
    },
  ],
};
