import type { Category } from '@/types';

export const zaiLinkedCategory: Category = {
  id: 'zai-linked-hub',
  title: 'ZAi連携講義ハブ',
  description: 'お金・投資・経済コースの中から、ZAiボードゲームと連動した講義をピックアップ。ゲームと座学を並行して学べます。進捗はそれぞれの元のコースに自動反映されます。',
  level: '入門',
  topicCategoryId: 'cat-play',
  courses: [
    // 注意：このファイルのレッスンは、元のコースと同じcourseId・lessonIdを持つため、
    // 進捗が自動的に連動します。
    // 例：hh-2-1（先取り貯蓄）を完了すると、元の course-money-household.ts でも完了になります
    {
      id: 'zai-core-ch1',
      title: '第1章：ZAiの仕組みを理解する',
      lessons: [
        {
          id: 'zai-core-1-1',
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
          id: 'zai-core-1-2',
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
      ],
    },
    {
      id: 'household-ch2',
      title: '第2章：お金管理で体験するZAi',
      lessons: [
        {
          id: 'hh-2-1',
          title: '先取り貯蓄で1億円を目指す',
          duration: '10:00',
          videoId: '',
          isPremium: false,
          gameTags: [{ source: 'ZAi', mechanic: '手取りの30%を投資に回す', description: 'ZAiゲームで手取り月給の30%を9銘柄に分散投資。先取り貯蓄の効果を実際に体感できます。' }],
          checkItems: ['先取り貯蓄の仕組みと効果を説明できる', '自動振替の設定方法を理解した'],
          sections: [
            { type: 'info-box', content: '家計管理の「先取り貯蓄」という最強の習慣。ZAiゲームで実際に手取りの30%を投資に回して、長期資産形成を体験します。' },
            { type: 'heading', level: 2, content: '先取り貯蓄とは' },
            { type: 'text', content: '「月末に残ったお金を貯蓄しよう」では貯まりません。給料が入ったら最初に貯蓄分を別口座に移し、「残りで生活する」方式です。ZAiゲームでも同じ——毎ラウンド「手取りの30%を投資」と決めて実行することが、最終的に1億円に到達する鍵です。' },
          ],
        },
        {
          id: 'lp-1-1',
          title: '人生全体のお金を俯瞰する',
          duration: '10:00',
          videoId: '',
          isPremium: false,
          gameTags: [{ source: 'ZAi', mechanic: '1億円を目指す長期投資', description: 'ZAiゲームで9銘柄に分散投資して1億円達成を目指す。人生全体で「複利の力」を使った資産形成を実験できます。' }],
          checkItems: ['20代〜老後まで各年代のお金の特徴を説明できる', '人生のお金の「収入の山」と「支出の山」の時期を理解した'],
          sections: [
            { type: 'info-box', content: 'ライフプランニングの視点で見ると、人生全体のお金の流れには山と谷があります。ZAiゲームの「1億円到達」という目標は、人生全体の資産形成戦略を実験できる舞台です。' },
            { type: 'heading', level: 2, content: '人生のお金の流れ' },
            { type: 'text', content: '20代に投資習慣を作ることが、50代・老後の豊かさを決めます。ZAiゲームで「早期開始の複利効果」を体感してください。40年の継続運用 vs 30年の運用では、複利だけで1,500万円近くの差が生まれることを数字で確認できます。' },
          ],
        },
      ],
    },
  ],
};
