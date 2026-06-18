import { Category } from '@/types';

export const macroEconomicsCategory: Category = {
  id: 'macro-economics',
  title: 'マクロ経済学の基本',
  description: 'GDP・インフレーション・失業・金利。国全体の経済を読み取る基礎知識。',
  level: '基礎',
  topicCategoryId: 'cat-economics',
  courses: [
    {
      id: 'macro-ch1',
      title: '第1章：GDPと経済規模',
      lessons: [
        { id: 'm1-1', title: 'GDPとは「国の産出量の合計」', duration: '11:00', videoId: '', isPremium: false, checkItems: ['GDP定義', 'G名目GDP・実質GDP区別できる'], sections: [{ type: 'info-box', content: 'GDP = 名目GDP・実質GDP、2つの見方がある。' }] },
        { id: 'm1-2', title: 'GDP成長率と景気循環', duration: '10:30', videoId: '', isPremium: false, checkItems: ['成長率を計算できる', '景気局面を読める'], sections: [{ type: 'text', content: 'GDP成長率が＋なら拡大局面・-なら縮小局面。2四半期連続-でリセッション。' }] },
        { id: 'm1-3', title: '日本のGDPと世界経済での位置', duration: '9:45', videoId: '', isPremium: false, checkItems: ['日本のGDP規模を把握', '世界順位理解'], sections: [{ type: 'text', content: '日本GDP：約500兆円。世界3位（米国・中国の次）。一人当たりGDPは4位程度。' }] },
      ],
    },
    {
      id: 'macro-ch2',
      title: '第2章：インフレーションとデフレーション',
      lessons: [
        { id: 'm2-1', title: 'インフレとは「通貨の価値低下」', duration: '10:15', videoId: '', isPremium: false, checkItems: ['インフレ定義', '家計への影響計算'], sections: [{ type: 'text', content: 'インフレ率2%：100円の商品が来年102円に。実質購買力が2%低下。' }] },
        { id: 'm2-2', title: '良いインフレ・悪いインフレ', duration: '10:45', videoId: '', isPremium: false, checkItems: ['インフレの二面性理解'], sections: [{ type: 'text', content: '温度的インフレ（年2-3%）：経済成長の鐘。悪性インフレ（年20%以上）：経済混乱。' }] },
        { id: 'm2-3', title: 'デフレ（デフレーション）の恐怖', duration: '11:00', videoId: '', isPremium: false, checkItems: ['デフレ悪性循環理解'], sections: [{ type: 'text', content: '物価下がる→買い控え→企業収益減→給与減→ます買い控え。負のスパイラル。' }] },
        { id: 'm2-4', title: '中央銀行のインフレ対策', duration: '10:30', videoId: '', isPremium: false, checkItems: ['金融政策が価格に与える影響'], sections: [{ type: 'text', content: '金利上げ：お金の価値上昇→インフレ抑制。金利下げ：お金の価値低下→デフレ対策。' }] },
      ],
    },
    {
      id: 'macro-ch3',
      title: '第3章：失業率と雇用',
      lessons: [
        { id: 'm3-1', title: '失業率の定義と計測方法', duration: '9:30', videoId: '', isPremium: false, checkItems: ['失業率計算できる'], sections: [{ type: 'text', content: '失業率 = 失業者数 / 労働力人口。日本2～3%は低失業率。' }] },
        { id: 'm3-2', title: 'フィリップス曲線：失業率とインフレの関係', duration: '10:45', videoId: '', isPremium: false, checkItems: ['失業とインフレのトレードオフ理解'], sections: [{ type: 'text', content: '失業率低い→労働需要高い→賃上げ→インフレ。その逆も。' }] },
      ],
    },
    {
      id: 'macro-ch4',
      title: '第4章：金利と金融政策',
      lessons: [
        { id: 'm4-1', title: '金利の役割と中央銀行', duration: '11:15', videoId: '', isPremium: false, checkItems: ['金利の経済的意味理解'], sections: [{ type: 'text', content: '金利：お金の時間価値。中央銀行がコントロール。' }] },
        { id: 'm4-2', title: 'マイナス金利政策の効果と副作用', duration: '10:30', videoId: '', isPremium: false, checkItems: ['非伝統的金融政策理解'], sections: [{ type: 'text', content: 'マイナス金利：銀行にペナルティ。お金を流動化させるが、預金者は損失。' }] },
        { id: 'm4-3', title: '量的緩和（QE）と金融緩和', duration: '10:00', videoId: '', isPremium: false, checkItems: ['非伝統的金融政策理解'], sections: [{ type: 'text', content: '量的緩和：中央銀行が大量に国債を購入。市場にお金供給。デフレ脱却手段。' }] },
      ],
    },
  ],
};
