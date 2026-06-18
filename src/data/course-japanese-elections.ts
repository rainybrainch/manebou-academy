import { Category } from '@/types';

export const japaneseElectionsCategory: Category = {
  id: 'japanese-elections',
  title: '日本の選挙制度・投票の仕組み',
  description: '小選挙区制・比例代表・一票の格差。日本民主主義の根幹。',
  level: '基礎',
  topicCategoryId: 'cat-politics',
  courses: [
    {
      id: 'je-ch1',
      title: '第1章：衆議院選挙の仕組み',
      lessons: [
        { id: 'je1-1', title: '小選挙区制の特徴', duration: '11:00', videoId: '', isPremium: false, checkItems: ['小選挙区理解'], sections: [{ type: 'text', content: '1区域から1人選出。得票数が多い順に当選。明確な勝敗がつく。' }] },
        { id: 'je1-2', title: '比例代表制との組み合わせ', duration: '10:45', videoId: '', isPremium: false, checkItems: ['比例代表理解'], sections: [{ type: 'text', content: '衆議院：小選挙区+比例代表混合制（300+200=500議席）。得票率に応じた議席配分。' }] },
        { id: 'je1-3', title: '一票の格差問題', duration: '11:15', videoId: '', isPremium: false, checkItems: ['一票の格差の問題'], sections: [{ type: 'text', content: '人口減少した地方では1票の価値が高い（東京の3倍以上）。格差是正と地方代表のジレンマ。' }] },
        { id: 'je1-4', title: 'ゲリマンダリングと区割り', duration: '10:30', videoId: '', isPremium: false, checkItems: ['不正な区割り理解'], sections: [{ type: 'text', content: 'ゲリマンダリング：与党に有利な区割り。10年ごとの区割り改定が政争に。' }] },
      ],
    },
    {
      id: 'je-ch2',
      title: '第2章：参議院選挙',
      lessons: [
        { id: 'je2-1', title: '参議院の独自性と選挙制度', duration: '10:30', videoId: '', isPremium: false, checkItems: ['二院制の意義'], sections: [{ type: 'text', content: '参院：全国区+地方区。衆院のチェック機構。参院選は衆院ほど政局を左右しない。' }] },
        { id: 'je2-2', title: '衆参同日選挙と政治的インパクト', duration: '10:15', videoId: '', isPremium: false, checkItems: ['同日選の効果'], sections: [{ type: 'text', content: '首相が衆院解散→衆参同時選挙。投票率上昇。2019年参院選・2022年参院選。' }] },
        { id: 'je2-3', title: '選挙年齢と投票率', duration: '10:00', videoId: '', isPremium: false, checkItems: ['投票参加と民主主義'], sections: [{ type: 'text', content: '2016年から18歳投票権開始。投票率は依然低い（50%程度）。若年層動員が課題。' }] },
      ],
    },
    {
      id: 'je-ch3',
      title: '第3章：選挙キャンペーンと有権者行動',
      lessons: [
        { id: 'je3-1', title: 'マニフェストと公約', duration: '10:45', videoId: '', isPremium: false, checkItems: ['政治公約の重要性'], sections: [{ type: 'text', content: 'マニフェスト：政党の選挙公約。有権者が評価・比較の対象。実現率が問われる。' }] },
        { id: 'je3-2', title: 'メディアと世論形成', duration: '11:00', videoId: '', isPremium: false, checkItems: ['メディアリテラシー'], sections: [{ type: 'text', content: 'テレビ・新聞・ネット。情報源によって有権者判断が変わる。フェイクニュース対策が課題。' }] },
      ],
    },
  ],
};
