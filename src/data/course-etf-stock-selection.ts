import { Category } from '@/types';

export const etfStockSelectionCategory: Category = {
  id: 'etf-stock-selection',
  title: 'ETF・個別株の選定戦略',
  description: '銘柄分析・スクリーニング・ポートフォリオ構築。どの株・ETFを買うかの判断基準を、データと実例で学ぶ。',
  level: '応用',
  topicCategoryId: 'cat-investment',
  courses: [
    {
      id: 'etf-select-ch1',
      title: '第1章：ETFの基本と選び方',
      lessons: [
        {
          id: 'etf1-1',
          title: 'ETFとは「投資信託の進化形」',
          duration: '11:20',
          videoId: '',
          isPremium: false,
          checkItems: [
            'ETFの基本的な特徴を説明できる',
            '投資信託との違いを理解した',
            'ETFが個人投資家に有利な理由を説明できる',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                'ETF（上場投資信託）は株式市場で売買できる投資信託。低コスト・流動性・透明性で、個人投資家に最適な選択肢。',
            },
            { type: 'heading', level: 2, content: 'ETFの3つの特徴' },
            {
              type: 'highlight-box',
              title: 'ETF vs 一般的な投資信託',
              items: [
                '① 低コスト：手数料が0.03%～0.2%。投資信託は0.5～1%が一般的。',
                '② 24時間売買可能：証券取引所の営業時間内ならいつでも売却可。投資信託は1日1回の価格確定。',
                '③ 透明性：常にリアルタイムで保有銘柄と価格が公開される。',
              ],
            },
            { type: 'heading', level: 2, content: 'ETFの選び方：3つのポイント' },
            {
              type: 'text',
              content:
                '1. 指数選択：何に連動するか。日経225・S&P500・新興国など。\n2. コスト：年間手数料（経費率）が低いほど利益が大きくなる。\n3. 流動性：売却時にきちんと買い手がいるか。出来高が多いほど安心。',
            },
          ],
        },
        {
          id: 'etf1-2',
          title: '代表的なETFと選択基準',
          duration: '12:40',
          videoId: '',
          isPremium: false,
          checkItems: [
            '日本株ETFの種類と特徴を説明できる',
            '海外株ETFの役割を理解した',
            'ETF選定の判断基準を構築した',
          ],
          sections: [
            {
              type: 'heading', level: 2, content: '日本株ETFの代表例' },
            {
              type: 'text',
              content:
                '・日経225連動ETF：大型株で景気が良いときに強い。配当利回り低い。\n・TOPIX連動ETF：より幅広い銘柄を含む。安定性が高い。\n・高配当株ETF：配当利回り3～5%。インカムゲイン重視投資家向け。\n・MSCI Japan Index ETF：ESG重視の企業を選別。',
            },
            {
              type: 'heading', level: 2, content: '海外株ETFの代表例' },
            {
              type: 'text',
              content:
                '・S&P500連動：米国500社の大型株。世界経済の中心。成長性高い。\n・全米株式インデックス：米国全体。S&P500より小型株も含む。\n・新興国ETF：インド・中国・ブラジル。成長期待が高い。リスク大きい。',
            },
          ],
        },
      ],
    },
    {
      id: 'etf-select-ch2',
      title: '第2章：個別株の選定方法',
      lessons: [
        {
          id: 'etf2-1',
          title: 'スクリーニング：銘柄を絞り込む技術',
          duration: '13:15',
          videoId: '',
          isPremium: false,
          checkItems: [
            'PER・PBR・配当利回りを計算できる',
            'スクリーニングツールの使い方を習得した',
            '投資対象の銘柄を自分で探せるようになった',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                'スクリーニングは「条件に合う銘柄を自動で絞り込む」プロセス。3000社以上の上場企業から、自分の投資方針に合致する銘柄を見つける。',
            },
            { type: 'heading', level: 2, content: '基本的な指標' },
            {
              type: 'highlight-box',
              title: '5つの重要指標',
              items: [
                'PER（株価収益率）：低いほど割安。目安は15倍以下。',
                'PBR（株価純資産倍率）：1倍以下で割安。財務の安全性が高い。',
                '配当利回り：現在株価に対する配当の率。3～5%が目安。',
                '営業利益率：利益を生む力。業種平均より高いか確認。',
                '自己資本比率：財務の安定性。40%以上が良好。',
              ],
            },
            {
              type: 'practice',
              question:
                'A社の株価が1,000円、1株当たり利益（EPS）が50円のとき、PERはいくらか。またこれは割安か割高か判断せよ。',
              auxiliaryPrompt:
                'PER = 株価 ÷ EPS\n計算：1,000 ÷ 50 = 20倍\n\n判断：日本株の平均PERは15倍程度。20倍は平均より高く、割高といえる。ただしグロース企業なら妥当な場合もある。業種や成長期待で判断を変える必要がある。',
              answer:
                'PER = 1,000 ÷ 50 = 20倍。日本株平均の15倍より高いため割高と判断できるが、業種や成長率によって判断は変わる。安定企業なら20倍は高いが、成長期待が高い企業なら妥当な場合もある。',
            },
          ],
        },
        {
          id: 'etf2-2',
          title: 'ファンダメンタルズ分析：企業の強さを読む',
          duration: '12:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            '決算書の基本を読める',
            '企業の競争力を分析できる',
            '長期投資に適した銘柄を判定できる',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                'ファンダメンタルズ分析は企業そのものの価値を評価。決算書・業界動向・競争優位性を総合的に判断。',
            },
            { type: 'heading', level: 2, content: '決算書から読み取る3つのポイント' },
            {
              type: 'text',
              content:
                '1. 売上成長率：前年同期比で売上が伸びているか。持続的な成長が期待できるか。\n2. 利益率の推移：原価がコントロールされているか。営業利益率が安定・上昇しているか。\n3. キャッシュフロー：利益より現金収入が多いか。倒産リスク評価。',
            },
            {
              type: 'heading', level: 2, content: '競争優位性の評価' },
            {
              type: 'bullet-list',
              items: [
                'ブランド力：消費者から認識されているか。プレミアム価格で売れるか。',
                'テクノロジー：特許・技術差別化があるか。',
                'ネットワーク効果：ユーザー数が増えるほど価値が上がるモデルか（SNS・決済など）。',
                'コスト優位性：同業他社より効率的に製造できるか。',
              ],
            },
          ],
        },
        {
          id: 'etf2-3',
          title: 'テクニカル分析：チャートから売買タイミングを読む',
          duration: '11:45',
          videoId: '',
          isPremium: false,
          checkItems: [
            '主要なテクニカル指標を説明できる',
            'チャートパターンの基本を理解した',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                'テクニカル分析は過去の値動きから今後の価格を予測する手法。短期売買に有効だが、万能ではない。',
            },
            { type: 'heading', level: 2, content: '基本的な指標' },
            {
              type: 'text',
              content:
                '・移動平均線：過去N日間の平均値。価格トレンドを可視化。\n・RSI（相対力指数）：0～100で過熱感を測定。70以上で買われ過ぎ、30以下で売られ過ぎ。\n・MACD：2つの移動平均線の差。クロスで売買シグナル生成。',
            },
          ],
        },
      ],
    },
    {
      id: 'etf-select-ch3',
      title: '第3章：ポートフォリオ構築',
      lessons: [
        {
          id: 'etf3-1',
          title: 'アセットアロケーション：資産配分の最適化',
          duration: '12:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'リスク許容度に応じた配分を決められる',
            'リバランスの重要性を理解した',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                'アセットアロケーションは投資リターンの90%を決める。銘柄選びより重要という研究結果もある。',
            },
            { type: 'heading', level: 2, content: '年代別の推奨配分' },
            {
              type: 'text',
              content:
                '20代：株式100%（成長重視）\n30代：株式80% / 債券20%\n40代：株式60% / 債券40%\n50代：株式40% / 債券60%\n60代以降：株式20% / 債券80%（安全重視）',
            },
          ],
        },
        {
          id: 'etf3-2',
          title: 'リスク管理：分散と動的調整',
          duration: '10:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            '分散投資の効果を説明できる',
            'リバランスを実行できる',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                '「全卵を一つのかごに盛るな」。分散で期待リターンは変わらないが、ボラティリティは低下する。',
            },
          ],
        },
      ],
    },
  ],
};
