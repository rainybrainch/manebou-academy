import { Category } from '@/types';

export const investmentRiskManagementCategory: Category = {
  id: 'investment-risk-management',
  title: '投資リスク管理',
  description: 'ボラティリティ・相関係数・ポートフォリオ最適化。リスク理論を実務的に学び、損失を最小化する。',
  level: '応用',
  topicCategoryId: 'cat-investment',
  courses: [
    {
      id: 'risk-mgmt-ch1',
      title: '第1章：リスクの正体を知る',
      lessons: [
        {
          id: 'risk1-1',
          title: 'リスク ≠ 危険。ボラティリティを理解する',
          duration: '12:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'リスクの定義を正確に説明できる',
            'ボラティリティを計算できる',
            'リスク許容度を自己評価できる',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                '投資の世界でいう「リスク」とは「価格変動の大きさ」のこと。危険ではなく、ブレ幅。ブレ幅が大きいほど、利益も損失も大きくなる。',
            },
            {
              type: 'heading', level: 2, content: 'ボラティリティの計算' },
            {
              type: 'text',
              content:
                'ボラティリティ = 標準偏差で計算。日々の収益率がどれくらい平均値から離れているかの指標。\n\n例）\nA社：過去30日の平均リターン +0.5% / ボラティリティ 1.5%（日次）\nB社：過去30日の平均リターン +0.5% / ボラティリティ 0.8%（日次）\n\n同じリターンでも、A社の方が価格変動が激しい（リスクが大きい）。',
            },
            {
              type: 'heading', level: 2, content: 'リスク許容度の測定' },
            {
              type: 'text',
              content:
                '心理的許容度：損失を見ても眠れるレベルは？\n時間的余裕：何年で回復できるか。若いほど大きなリスクが取れる。\nファンダメンタル：生活保障は十分か。必要資金は別途確保。',
            },
          ],
        },
        {
          id: 'risk1-2',
          title: 'システマティックリスク vs アンシステマティックリスク',
          duration: '11:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            '2種類のリスクを区別できる',
            '分散できるリスクとできないリスクを説明できる',
          ],
          sections: [
            {
              type: 'highlight-box',
              title: '2つのリスク',
              items: [
                'システマティックリスク：市場全体に影響する（金利上昇・景気悪化等）。分散では削減不可。',
                'アンシステマティックリスク：特定企業に影響する（経営危機・新製品失敗等）。分散で削減可能。',
              ],
            },
            {
              type: 'text',
              content:
                'ポートフォリオ内で30銘柄以上持つと、アンシステマティックリスクは大部分が消去される。残るのはシステマティックリスクだけ。',
            },
          ],
        },
      ],
    },
    {
      id: 'risk-mgmt-ch2',
      title: '第2章：相関係数と分散効果',
      lessons: [
        {
          id: 'risk2-1',
          title: '相関係数の読み方と活用',
          duration: '11:15',
          videoId: '',
          isPremium: false,
          checkItems: [
            '相関係数を計算・解釈できる',
            '分散投資の効果を数値化できる',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                '相関係数は2つの資産がどれくらい一緒に動くかを示す指標。-1から+1の範囲。低いほど分散効果が高い。',
            },
            {
              type: 'heading', level: 2, content: '相関係数の解釈' },
            {
              type: 'text',
              content:
                '+1：完全に同じ動き。分散効果なし。\n0.5～0.8：ある程度連動。中程度の分散効果。\n0～0.5：弱い連動。良好な分散効果。\n0：相互に無関係。最高の分散効果。\n-0.5～0：逆相関。一方が上がれば一方が下がる。優れた分散効果。\n-1：完全な逆相関。理想的だが現実にはない。',
            },
            {
              type: 'practice',
              question:
                '日本株（ボラティリティ20%）と米国株（ボラティリティ18%）を50：50で組み合わせた場合、相関係数が+0.7のとき、ポートフォリオのボラティリティは？',
              auxiliaryPrompt:
                'ポートフォリオボラティリティの計算は複雑だが、相関係数が0（無相関）なら理論的には:\n√(0.5² × 20² + 0.5² × 18² + 2 × 0.5 × 0.5 × 20 × 18 × 0) ≒ 14.1%\n\n相関係数が+0.7の場合は約16%程度になる。単純平均19%より、分散効果で低下している。',
              answer:
                'ポートフォリオボラティリティは約16%。両資産の単純平均19%より低い。これが分散効果。相関係数が低いほど分散効果は大きくなる。',
            },
          ],
        },
        {
          id: 'risk2-2',
          title: '実践的な分散：資産クラス別の相関係数',
          duration: '10:45',
          videoId: '',
          isPremium: false,
          checkItems: [
            '各資産クラスの相関を把握した',
            '自分のポートフォリオの分散性を評価できる',
          ],
          sections: [
            {
              type: 'heading', level: 2, content: '代表的な相関係数（参考値）' },
            {
              type: 'text',
              content:
                '日本株 vs 米国株：相関 0.6（やや高い）\n日本株 vs 日本債券：相関 0.1（低い。良好な分散）\n日本株 vs 不動産：相関 0.4（中程度）\n米国株 vs 新興国株：相関 0.8（高い。分散効果小）\n株式 vs 債券：相関 0.2～0.3（分散効果あり）',
            },
          ],
        },
      ],
    },
    {
      id: 'risk-mgmt-ch3',
      title: '第3章：ポートフォリオ最適化',
      lessons: [
        {
          id: 'risk3-1',
          title: '効率的フロンティアとCAPM',
          duration: '12:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            '効率的フロンティアの概念を理解した',
            'シャープレシオで投資効率を判定できる',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                '効率的フロンティア：リスクの割に最高のリターンを得られるポートフォリオの集合。この上にあるポートフォリオが最適配分。',
            },
            {
              type: 'heading', level: 2, content: 'シャープレシオで効率性を測定' },
            {
              type: 'text',
              content:
                'シャープレシオ = (ポートフォリオリターン - 無リスク利子率) / ポートフォリオボラティリティ\n\n高いほど効率的。同じリスク下でリターンが大きい、またはリターンは同じでリスクが小さい。',
            },
          ],
        },
        {
          id: 'risk3-2',
          title: 'リバランスで最適性を維持',
          duration: '11:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'リバランスの必要性を理解した',
            'リバランス戦略を立案できる',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                'リバランス：時間とともに資産配分がズレる。定期的に元の配分に戻すことで、リスク管理を維持し、利益確定もできる。',
            },
            {
              type: 'heading', level: 2, content: 'リバランスの実行方法' },
            {
              type: 'text',
              content:
                '時間ベース：年1回（1月）など定期的に実行。単純。\n閾値ベース：配分が±5%変わったら実行。最適性維持。\nコスト考慮：手数料が大きい場合は低頻度に。',
            },
          ],
        },
      ],
    },
    {
      id: 'risk-mgmt-ch4',
      title: '第4章：損失管理と心理面のリスク',
      lessons: [
        {
          id: 'risk4-1',
          title: 'ストップロス・損失回避の罠',
          duration: '10:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            'ストップロス注文の効果を理解した',
            '心理的バイアスに対抗できる',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                'ストップロス：損失を限定するための自動売却注文。一定の損失に達したら自動的に売却される。',
            },
          ],
        },
      ],
    },
  ],
};
