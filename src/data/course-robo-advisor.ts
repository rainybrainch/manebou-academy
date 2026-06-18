import { Category } from '@/types';

export const roboAdvisorCategory: Category = {
  id: 'robo-advisor',
  title: 'ロボアドバイザー・AI投資',
  description: '自動投資プラットフォーム（ウェルスナビ・楽ラップ等）とAI銘柄選定。手間をかけない投資の実現。',
  level: '基礎',
  topicCategoryId: 'cat-investment',
  courses: [
    {
      id: 'robo-ch1',
      title: '第1章：ロボアドバイザーの仕組み',
      lessons: [
        {
          id: 'robo1-1',
          title: 'ロボアドバイザーとは「自動ポートフォリオ管理」',
          duration: '11:20',
          videoId: '',
          isPremium: false,
          checkItems: [
            'ロボアドバイザーの基本的な仕組みを理解した',
            '手動運用との違いを説明できる',
            '費用構造を理解した',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                'ロボアドバイザー：AI・アルゴリズムが自動でポートフォリオを構築・管理・リバランスする。人間の感情が排除される。',
            },
            {
              type: 'highlight-box',
              title: 'ロボアドバイザーの特徴',
              items: [
                '自動構築：リスク許容度を入力すると、最適ポートフォリオを提案',
                '自動リバランス：市場変動に応じて自動で調整',
                '自動税最適化：米国のロボアドは節税も自動',
                '低い手数料：年0.5～1%程度（ファンドの信託報酬は別）',
              ],
            },
            {
              type: 'heading', level: 2, content: '手動運用 vs ロボアドバイザー' },
            {
              type: 'text',
              content:
                '手動：リターン期待値が高いが、手間が大きい・感情的判断のリスク\nロボアド：リターンは平均的だが、心理的負担が小さい・時間効率が高い\n\n結論：投資経験が少ない、時間がない人にはロボアド推奨。',
            },
          ],
        },
        {
          id: 'robo1-2',
          title: '主要ロボアドバイザーの比較',
          duration: '10:45',
          videoId: '',
          isPremium: false,
          checkItems: [
            '代表的なロボアドを比較できる',
            '自分に合ったサービスを選べる',
          ],
          sections: [
            {
              type: 'text',
              content:
                'ウェルスナビ：国内最大級。手数料0.75%。マザーズ上場企業。\n楽ラップ：楽天証券系。楽天ポイント還元あり。手数料体系が複雑。\nSBI証券系（SBIラップ）：SBI証券ユーザーなら便利。\n国際投資家向け：Betterment（米国）、Personal Capital（米国）',
            },
          ],
        },
      ],
    },
    {
      id: 'robo-ch2',
      title: '第2章：AI銘柄選定ツール',
      lessons: [
        {
          id: 'robo2-1',
          title: 'AI銘柄スクリーニング・推奨ツール',
          duration: '11:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'AI銘柄選定の仕組みを理解した',
            '過学習のリスクを認識した',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                'AI銘柄スクリーニング：過去のパターンから「これから上昇する銘柄」を予測。ただし精度は常に問われている。',
            },
            {
              type: 'text',
              content:
                'AI推奨の銘柄が本当に上昇するかは、バックテストでは高パフォーマンスでも、リアルタイムでは変わることが多い。過学習に注意。',
            },
          ],
        },
      ],
    },
    {
      id: 'robo-ch3',
      title: '第3章：自動投資の活用と注意点',
      lessons: [
        {
          id: 'robo3-1',
          title: '自動投資を始める前のチェックリスト',
          duration: '9:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            '自動投資に適した人・適さない人を判定できる',
            '注意点を理解した',
          ],
          sections: [
            {
              type: 'highlight-box',
              title: 'ロボアド向き・不向き',
              items: [
                '向き：投資初心者・時間がない・心理的負担を減らしたい',
                '不向き：高リターンを狙いたい・銘柄選定が趣味・市場をウォッチしたい',
              ],
            },
          ],
        },
      ],
    },
  ],
};
