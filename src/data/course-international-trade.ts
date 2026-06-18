import { Category } from '@/types';

export const internationalTradeCategory: Category = {
  id: 'international-trade',
  title: '世界経済と国際貿易',
  description: '比較優位論・自由貿易と保護主義・為替・国際収支。グローバル経済の構造。',
  level: '応用',
  topicCategoryId: 'cat-economics',
  courses: [
    {
      id: 'trade-ch1',
      title: '第1章：貿易の原理',
      lessons: [
        { id: 'it1-1', title: 'リカードの比較優位論', duration: '12:00', videoId: '', isPremium: false, checkItems: ['比較優位概念理解'], sections: [{ type: 'text', content: '両国がそれぞれ比較優位のある商品に特化→総産出量増加→両国が得する。' }] },
        { id: 'it1-2', title: '絶対優位と比較優位の違い', duration: '11:15', videoId: '', isPremium: false, checkItems: ['2つの優位区別できる'], sections: [{ type: 'text', content: '絶対優位：すべてで優れている。比較優位：相対的に効率的。比較優位で貿易が成立。' }] },
        { id: 'it1-3', title: '相互依存と分業の利益', duration: '10:30', videoId: '', isPremium: false, checkItems: ['分業の利益計算'], sections: [{ type: 'text', content: '各国が専門分野に特化→効率的→消費者負担減。グローバル化の基礎。' }] },
      ],
    },
    {
      id: 'trade-ch2',
      title: '第2章：自由貿易 vs 保護主義',
      lessons: [
        { id: 'it2-1', title: '自由貿易のメリット', duration: '11:00', videoId: '', isPremium: false, checkItems: ['自由貿易の効果分析'], sections: [{ type: 'text', content: '消費者利益↑・産業効率↑・イノベーション促進。WTO原則。' }] },
        { id: 'it2-2', title: '保護主義の手段と効果', duration: '11:45', videoId: '', isPremium: false, checkItems: ['保護主義の功罪'], sections: [{ type: 'text', content: '関税・非関税障壁・ダンピング規制。幼稚産業保護・失業対策になるが、報復関税・消費者負担増。' }] },
        { id: 'it2-3', title: 'トランプのアメリカ・ファースト政策', duration: '10:30', videoId: '', isPremium: false, checkItems: ['保護主義の実例分析'], sections: [{ type: 'text', content: '2018年：米国の対中関税・対EU関税。報復タリフ招致・グローバル経済に悪影響。' }] },
        { id: 'it2-4', title: 'グローバル・サプライチェーン', duration: '11:15', videoId: '', isPremium: false, checkItems: ['サプライチェーン理解'], sections: [{ type: 'text', content: '部品製造→組立→販売が複数国跨ぎ。保護主義で寸断→産業全体が損失。' }] },
      ],
    },
    {
      id: 'trade-ch3',
      title: '第3章：為替と国際収支',
      lessons: [
        { id: 'it3-1', title: '為替相場の決定メカニズム', duration: '11:30', videoId: '', isPremium: false, checkItems: ['需給で為替が決まる'], sections: [{ type: 'text', content: 'ドル需要>ドル供給→ドル高。その逆。購買力平価説・金利差説等で説明。' }] },
        { id: 'it3-2', title: '経常収支と資本収支', duration: '10:45', videoId: '', isPremium: false, checkItems: ['国際収支構造理解'], sections: [{ type: 'text', content: '経常収支：貿易・所得収支。資本収支：投資。合計はゼロ（マクロ恒等式）。' }] },
        { id: 'it3-3', title: '日本の経常黒字と円高圧力', duration: '10:15', videoId: '', isPremium: false, checkItems: ['日本の貿易構造理解'], sections: [{ type: 'text', content: '日本：経常黒字→ドル供給>ドル需要→円高。円高は輸出企業圧力。' }] },
      ],
    },
    {
      id: 'trade-ch4',
      title: '第4章：多国間協定と地域統合',
      lessons: [
        { id: 'it4-1', title: 'WTO・EPA・FTA', duration: '11:00', videoId: '', isPremium: false, checkItems: ['国際協定の形態区別'], sections: [{ type: 'text', content: 'WTO：最恵国待遇・透明性。EPA：より深い統合。FTA：二国間協定。' }] },
        { id: 'it4-2', title: 'EU・TPP・RCEP', duration: '10:30', videoId: '', isPremium: false, checkItems: ['主要協定の内容'], sections: [{ type: 'text', content: 'EU：関税同盟・市場統一。TPP：21国参加・高水準ルール。RCEP：アジア太平洋統合。' }] },
      ],
    },
  ],
};
