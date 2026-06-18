import { Category } from '@/types';

export const reitRealEstateCategory: Category = {
  id: 'reit-real-estate',
  title: 'REITと不動産投資',
  description: '実物不動産とREIT（投資信託型不動産）の違い。株式とは異なる値動き・収入の仕組みを学ぶ。',
  level: '基礎',
  topicCategoryId: 'cat-investment',
  courses: [
    {
      id: 'reit-ch1',
      title: '第1章：REITの基本',
      lessons: [
        {
          id: 'reit1-1',
          title: 'REIT（不動産投資信託）とは',
          duration: '11:45',
          videoId: '',
          isPremium: false,
          checkItems: [
            'REITの仕組みを説明できる',
            'REITが株式と異なる理由を説明できる',
            '日本REITの種類を把握した',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                'REIT：複数の不動産を組み合わせた投信。賃貸料収入が投資家に分配される。不動産は高額だが、REITなら少額で投資可能。',
            },
            {
              type: 'highlight-box',
              title: 'REITの特徴',
              items: [
                '配当利回り高い：年3～5%が一般的。株式の2倍以上。',
                '流動性：不動産と異なり、いつでも売却可能。',
                '分散効果：複数不動産に分散投資できる。',
                '入居者・修繕管理：プロが行う。投資家は不労所得のみ。',
                '配当原則100%分配：利益の90%以上を分配する仕組み。',
              ],
            },
            {
              type: 'heading', level: 2, content: '日本のREIT市場' },
            {
              type: 'text',
              content:
                'J-REIT：60銘柄以上が東証に上場。\n物件種：オフィス・住宅・商業施設・ホテル・物流施設等。\n投資単価：数十万～数百万円で取得可能（不動産なら数千万）。',
            },
          ],
        },
        {
          id: 'reit1-2',
          title: 'REITの投資指標と選び方',
          duration: '10:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            'REITの配当利回りを計算できる',
            'NAV倍率で割安割高を判定できる',
          ],
          sections: [
            {
              type: 'heading', level: 2, content: '重要指標' },
            {
              type: 'text',
              content:
                '配当利回り = 年間分配金 / 現在株価。高いほど収入性が高い。\nNAV倍率 = 株価 / 1口当たりNAV。1倍以下で割安。\n借入比率 = 借入金 / 総資産。低いほど安全（ただし高いと利益が大きい）。',
            },
          ],
        },
      ],
    },
    {
      id: 'reit-ch2',
      title: '第2章：実物不動産投資',
      lessons: [
        {
          id: 'reit2-1',
          title: 'ワンルーム投資・マンション投資の基本',
          duration: '12:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            '不動産投資の初期コストを理解した',
            'キャッシュフローの計算ができる',
          ],
          sections: [
            {
              type: 'info-box',
              content:
                '実物不動産投資：数千万円の借入で物件を購入。賃貸料が月々入ってくる。REITより手間がかかるが、レバレッジ効果がある。',
            },
            {
              type: 'text',
              content:
                '例）1,000万円のワンルーム購入。月額8万円の賃貸料。\n年間収入 = 96万円。利回り = 9.6%。\n修繕積立金・管理費・税金を差し引くと実利益は5～6%程度。',
            },
          ],
        },
        {
          id: 'reit2-2',
          title: 'REIT vs 実物不動産：どちらを選ぶか',
          duration: '10:15',
          videoId: '',
          isPremium: false,
          checkItems: [
            'REITと実物不動産の特性を比較できる',
            '自分のスタイルに合わせて判断できる',
          ],
          sections: [
            {
              type: 'heading', level: 2, content: '比較表' },
            {
              type: 'text',
              content:
                'REIT利点：少額・流動性高い・分散・管理負担なし\nREIT欠点：配当利回り低い・値下がりリスク・借入不可\n\n実物利点：レバレッジ効果・節税・ローン返済で資産形成\n実物欠点：高額・管理負担・流動性低い・修繕のリスク',
            },
          ],
        },
      ],
    },
  ],
};
