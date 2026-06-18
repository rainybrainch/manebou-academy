import { Category } from '@/types';

export const developmentEconomicsCategory: Category = {
  id: 'development-economics',
  title: '開発経済学',
  description: '発展途上国の経済成長。貧困削減・援助・構造転換。',
  level: '応用',
  topicCategoryId: 'cat-economics',
  courses: [
    {
      id: 'dev-ch1',
      title: '第1章：発展途上国の特性',
      lessons: [
        { id: 'dev1-1', title: '先進国と発展途上国の格差', duration: '11:00', videoId: '', isPremium: false, checkItems: ['開発格差理解'], sections: [{ type: 'text', content: '一人当たりGDP：先進国$50000～、発展途上国$2000程度。100倍の格差。' }] },
        { id: 'dev1-2', title: '低開発の罠：悪循環', duration: '10:45', videoId: '', isPremium: false, checkItems: ['貧困罠メカニズム'], sections: [{ type: 'text', content: '低所得→低貯蓄→投資不足→生産性低→低所得。または教育不足→技能低→賃金低。' }] },
        { id: 'dev1-3', title: '人口爆発と教育', duration: '10:30', videoId: '', isPremium: false, checkItems: ['人口と開発の関係'], sections: [{ type: 'text', content: '発展途上国：出生率高い→人口増加。若年人口多い。教育投資で人的資本形成が急務。' }] },
      ],
    },
    {
      id: 'dev-ch2',
      title: '第2章：経済成長戦略',
      lessons: [
        { id: 'dev2-1', title: 'インポート・サブスティテューション vs 輸出指向型', duration: '11:15', videoId: '', isPremium: false, checkItems: ['発展戦略比較'], sections: [{ type: 'text', content: 'IS：国内産業保護。EO：輸出力強化。東アジア奇跡はEO採用で成功（台湾・韓国・シンガポール）。' }] },
        { id: 'dev2-2', title: 'FDI（外国直接投資）と技術移転', duration: '10:30', videoId: '', isPremium: false, checkItems: ['FDIのメリット・デメリット'], sections: [{ type: 'text', content: 'メリット：資本・技術・雇用創出。デメリット：搾取・利潤流出・環境負荷。' }] },
        { id: 'dev2-3', title: 'マイクロファイナンス：貧困救済手段', duration: '10:15', videoId: '', isPremium: false, checkItems: ['マイクロ融資理解'], sections: [{ type: 'text', content: '小額融資で起業支援。グラミン銀行モデル。貧困削減に有効だが限界も。' }] },
      ],
    },
    {
      id: 'dev-ch3',
      title: '第3章：国際援助と持続可能な開発',
      lessons: [
        { id: 'dev3-1', title: 'ODA（政府開発援助）の役割', duration: '10:45', videoId: '', isPremium: false, checkItems: ['ODAの意義'], sections: [{ type: 'text', content: '先進国から発展途上国への援助。日本：世界最大クラス（2兆円/年程度）。' }] },
        { id: 'dev3-2', title: 'SDGs（持続可能な開発目標）', duration: '11:00', videoId: '', isPremium: false, checkItems: ['SDGs理解'], sections: [{ type: 'text', content: '2030年までの17目標。貧困削減・教育・環境。世界共通目標。' }] },
      ],
    },
  ],
};

export const behavioralEconomicsCategory: Category = {
  id: 'behavioral-economics',
  title: '行動経済学',
  description: '人間の非合理的決定。バイアス・ヒューリスティック・ナッジ理論。',
  level: '応用',
  topicCategoryId: 'cat-economics',
  courses: [
    {
      id: 'behav-ch1',
      title: '第1章：認知バイアス',
      lessons: [
        { id: 'beh1-1', title: '確認バイアスと後知恵バイアス', duration: '10:30', videoId: '', isPremium: false, checkItems: ['バイアス認識'], sections: [{ type: 'text', content: '確認バイアス：自分の信念に都合よい情報を探す。後知恵：起きた後で「予測できた」と思い込む。' }] },
        { id: 'beh1-2', title: 'アンカリング効果', duration: '10:15', videoId: '', isPremium: false, checkItems: ['価格交渉への応用'], sections: [{ type: 'text', content: '最初の数字に引きずられる。営業が高い価格をアンカーに使うのはこのため。' }] },
        { id: 'beh1-3', title: 'アベイラビリティ・ヒューリスティック', duration: '10:00', videoId: '', isPremium: false, checkItems: ['メディア効果の理解'], sections: [{ type: 'text', content: '思いつきやすい情報を過大評価。テロより交通事故が多いが、テロが怖く思える。' }] },
        { id: 'beh1-4', title: 'ナッジ理論：選択設計で行動を導く', duration: '11:00', videoId: '', isPremium: false, checkItems: ['ナッジの実装'], sections: [{ type: 'text', content: '年金の自動加入・器の選択。小さな工夫で社会的に望ましい決定に導く。' }] },
      ],
    },
    {
      id: 'behav-ch2',
      title: '第2章：意思決定と不合理性',
      lessons: [
        { id: 'beh2-1', title: 'プロスペクト理論：利益と損失の非対称性', duration: '11:15', videoId: '', isPremium: false, checkItems: ['リスク選択の理解'], sections: [{ type: 'text', content: '同じ金額でも、損失は利益より大きく感じられる。損失回避的行動。' }] },
        { id: 'beh2-2', title: '現在バイアス：未来を過小評価', duration: '10:30', videoId: '', isPremium: false, checkItems: ['時間選好の理解'], sections: [{ type: 'text', content: '今100円 vs 1年後110円。多くの人は「今」を選ぶ。タバコ・ギャンブル・浪費の原因。' }] },
      ],
    },
  ],
};
