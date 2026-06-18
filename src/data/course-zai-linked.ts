import type { Category } from '@/types';

export const zaiLinkedCategory: Category = {
  id: 'zai-linked-hub',
  title: 'ZAi連携講義ハブ',
  description: 'お金・投資・経済コースの中から、ZAiボードゲームと連動した講義をピックアップ。ゲームと座学を並行して学べます。',
  level: '入門',
  topicCategoryId: 'cat-play',
  courses: [
    {
      id: 'zai-hub-ch1',
      title: '第1章：ZAiの仕組みを理解する',
      lessons: [
        {
          id: 'zai-hub-1-1',
          title: '株式投資の基本——買う・持つ・売る',
          duration: '8:30',
          videoId: '',
          isPremium: false,
          gameTags: [{ source: 'ZAi', mechanic: '銘柄を買う', description: 'ZAiでカブト自動車などの株を買う体験' }],
          checkItems: [],
          sections: [
            { type: 'info-box', content: 'ZAiゲームで実際に株を買う体験を通じて、株式投資の流れを理解します。' },
          ],
        },
        {
          id: 'zai-hub-1-2',
          title: '業種分類と投資戦略——3つのセクター',
          duration: '10:45',
          videoId: '',
          isPremium: false,
          gameTags: [{ source: 'ZAi', mechanic: '3業種（変動・普通・安定）', description: 'ゲームの業種分類が現実のセクター分類に対応' }],
          checkItems: [],
          sections: [
            { type: 'info-box', content: 'ZAiの3業種（変動・普通・安定）の特性と、リアルな株式市場の業種分類を学びます。' },
          ],
        },
        {
          id: 'zai-hub-1-3',
          title: 'ポートフォリオ構築の基本——分散投資',
          duration: '9:15',
          videoId: '',
          isPremium: false,
          gameTags: [{ source: 'ZAi', mechanic: '複数業種への分散', description: 'ゲームで1業種集中より分散が安定することを体感' }],
          checkItems: [],
          sections: [
            { type: 'info-box', content: 'ZAiゲームで分散投資の重要性を体感しながら、実践的なポートフォリオの作り方を学びます。' },
          ],
        },
      ],
    },
  ],
};
