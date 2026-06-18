import { Category } from '@/types';

export const economicCrisesCategory: Category = {
  id: 'economic-crises',
  title: '経済危機・バブル・デフレ',
  description: '歴史から学ぶ経済変動。バブル・バースト・デフレ・スタグフレーション。',
  level: '応用',
  topicCategoryId: 'cat-economics',
  courses: [
    {
      id: 'crisis-ch1',
      title: '第1章：バブル経済の仕組み',
      lessons: [
        { id: 'cr1-1', title: 'バブルの定義と発生メカニズム', duration: '11:30', videoId: '', isPremium: false, checkItems: ['バブル形成理解'], sections: [{ type: 'text', content: 'バブル：投機で資産価格が実質価値を大幅に上回る状態。信用拡大・低金利で発生。' }] },
        { id: 'cr1-2', title: '日本のバブル期（1980s）', duration: '12:00', videoId: '', isPremium: false, checkItems: ['バブル期の日本理解'], sections: [{ type: 'text', content: '1980s：地価・株価急騰。銀行が無分別に融資。1990年代の長期低迷招く。' }] },
        { id: 'cr1-3', title: 'ITバブルとドットコム企業', duration: '11:15', videoId: '', isPremium: false, checkItems: ['ITバブル分析'], sections: [{ type: 'text', content: '1990s後半：インターネット企業に過度な期待。2000年崩壊。多くが上場廃止。' }] },
        { id: 'cr1-4', title: 'サブプライムバブルと2008年危機', duration: '12:30', videoId: '', isPremium: false, checkItems: ['金融危機メカニズム'], sections: [{ type: 'text', content: '低所得者向けローン→証券化→世界中に拡散→2008年リーマン破綻→世界恐慌。' }] },
      ],
    },
    {
      id: 'crisis-ch2',
      title: '第2章：デフレーション',
      lessons: [
        { id: 'cr2-1', title: '日本の「失われた30年」', duration: '11:00', videoId: '', isPremium: false, checkItems: ['失われた20年の原因'], sections: [{ type: 'text', content: '1990年バブル崩壊→デフレ→需要低迷→給与低下→ます需要低迷。負のスパイラル。' }] },
        { id: 'cr2-2', title: 'デフレの悪循環', duration: '10:45', videoId: '', isPremium: false, checkItems: ['デフレ悪循環説明'], sections: [{ type: 'text', content: 'インフレ率低下→実質金利上昇→投資減→失業増→給与減→需要減→ます物価下げ。' }] },
        { id: 'cr2-3', title: 'アベノミクスのインフレ政策', duration: '11:30', videoId: '', isPremium: false, checkItems: ['非伝統的金融政策理解'], sections: [{ type: 'text', content: '2013年：異次元緩和スタート。インフレ目標2%。企業収益回復したが目標未達。' }] },
      ],
    },
    {
      id: 'crisis-ch3',
      title: '第3章：通貨危機と外債危機',
      lessons: [
        { id: 'cr3-1', title: 'アジア通貨危機（1997-98）', duration: '10:30', videoId: '', isPremium: false, checkItems: ['アジア危機分析'], sections: [{ type: 'text', content: 'タイのバーツ下落→東南アジア全域へ波及。外貨枯渇→IMF管理。' }] },
        { id: 'cr3-2', title: 'ラテンアメリカ外債危機', duration: '10:15', videoId: '', isPremium: false, checkItems: ['外債危機理解'], sections: [{ type: 'text', content: '1980s：海外から過度に借入→返済不可→債務危機。構造調整政策も混乱。' }] },
      ],
    },
  ],
};
