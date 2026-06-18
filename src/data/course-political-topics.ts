import { Category } from '@/types';

export const localGovernmentCategory: Category = {
  id: 'local-government',
  title: '地方自治と地域政治',
  description: '都道府県・市町村・地方分権・道州制。日本の地域政治の現状。',
  level: '基礎',
  topicCategoryId: 'cat-politics',
  courses: [
    {
      id: 'lg-ch1',
      title: '第1章：地方自治の構造',
      lessons: [
        { id: 'lg1-1', title: '都道府県と市町村', duration: '10:30', videoId: '', isPremium: false, checkItems: ['地方制度理解'], sections: [{ type: 'text', content: '都道府県：都・道・府・県の47。市町村：1700以上。二層構造。' }] },
        { id: 'lg1-2', title: '地方分権と権限移譲', duration: '11:00', videoId: '', isPremium: false, checkItems: ['分権の動向'], sections: [{ type: 'text', content: '1990s：地方分権改革開始。国から地方へ権限・財源移譲（但し進行中）。' }] },
        { id: 'lg1-3', title: '道州制論議', duration: '10:15', videoId: '', isPremium: false, checkItems: ['改革案理解'], sections: [{ type: 'text', content: '都道府県廃止→道州制。効率化か地域多様性喪失か。議論続く。' }] },
        { id: 'lg1-4', title: '地域再生と人口減少対策', duration: '10:45', videoId: '', isPremium: false, checkItems: ['地域課題把握'], sections: [{ type: 'text', content: '過疎地対策・地域活性化・移住促進。地方創生戦略。' }] },
      ],
    },
    {
      id: 'lg-ch2',
      title: '第2章：首長政治と地域リーダーシップ',
      lessons: [
        { id: 'lg2-1', title: '知事・市長の役割と権力', duration: '11:15', videoId: '', isPremium: false, checkItems: ['首長制理解'], sections: [{ type: 'text', content: '首長：直接選挙で選出。行政トップ。議員との二元代表制。' }] },
        { id: 'lg2-2', title: 'タレント知事・市長現象', duration: '10:30', videoId: '', isPremium: false, checkItems: ['ポピュリズム現象'], sections: [{ type: 'text', content: '芸能人・有名人が当選。関心喚起だが実行力疑問も。尾張・横山ノック等。' }] },
      ],
    },
  ],
};

export const populismAuthoritarianismCategory: Category = {
  id: 'populism-authoritarianism',
  title: 'ポピュリズム・独裁制・民主化',
  description: '民主主義の脅威。ポピュリズムと独裁政治の台頭。民主化運動の事例。',
  level: '応用',
  topicCategoryId: 'cat-politics',
  courses: [
    {
      id: 'pa-ch1',
      title: '第1章：ポピュリズムの台頭',
      lessons: [
        { id: 'pa1-1', title: 'ポピュリズムとは何か', duration: '11:00', videoId: '', isPremium: false, checkItems: ['ポピュリズム定義'], sections: [{ type: 'text', content: '人民 vs エリート。指導者への直接的支持。制度軽視。左右のポピュリズムあり。' }] },
        { id: 'pa1-2', title: 'トランプ・ボルソナーロ・オルバンの事例', duration: '11:30', videoId: '', isPremium: false, checkItems: ['事例分析'], sections: [{ type: 'text', content: '米国・ブラジル・ハンガリー。国民感情と既得権批判でポピュリズム台頭。民主主義空洞化。' }] },
        { id: 'pa1-3', title: '左派ポピュリズム vs 右派ポピュリズム', duration: '10:30', videoId: '', isPremium: false, checkItems: ['ポピュリズム分類'], sections: [{ type: 'text', content: '左派：所得再分配・弱者支援。右派：移民反対・民族主義。目的と方法が異なる。' }] },
        { id: 'pa1-4', title: 'メディアとSNSの役割', duration: '10:45', videoId: '', isPremium: false, checkItems: ['情報化時代の政治'], sections: [{ type: 'text', content: 'テレビ・新聞→SNS時代。事実検証なき拡散。フェイクニュースの温床。' }] },
      ],
    },
    {
      id: 'pa-ch2',
      title: '第2章：独裁制と権威主義体制',
      lessons: [
        { id: 'pa2-1', title: '独裁制の類型', duration: '10:30', videoId: '', isPremium: false, checkItems: ['独裁制分類'], sections: [{ type: 'text', content: '1人独裁（専制君主・ファシズム）・1党独裁・軍事独裁。権威主義体制。' }] },
        { id: 'pa2-2', title: '中国・ロシア・北朝鮮の権威主義体制', duration: '11:15', videoId: '', isPremium: false, checkItems: ['非民主体制の多様性'], sections: [{ type: 'text', content: '中国：共産党一党支配・市場経済。ロシア：プーチン統治・寡頭支配。北朝鮮：絶対独裁。' }] },
        { id: 'pa2-3', title: '権威主義体制の安定性と脆弱性', duration: '10:45', videoId: '', isPremium: false, checkItems: ['体制転換の条件'], sections: [{ type: 'text', content: '経済成長+強力なイデオロギーで安定。但し経済停滞・世代交代で不安定化可能。' }] },
      ],
    },
    {
      id: 'pa-ch3',
      title: '第3章：民主化運動と体制転換',
      lessons: [
        { id: 'pa3-1', title: '東欧民主化：1989年の奇跡', duration: '11:00', videoId: '', isPremium: false, checkItems: ['民主化事例'], sections: [{ type: 'text', content: 'ベルリンの壁崩壊。ソ連・東欧で次々と民主化。冷戦終結。' }] },
        { id: 'pa3-2', title: '台湾・韓国の民主化と経済発展', duration: '10 :30', videoId: '', isPremium: false, checkItems: ['アジア民主化'], sections: [{ type: 'text', content: '権威主義体制から民主化。経済発展とのリンク。日本の民主化モデルが参考に。' }] },
      ],
    },
  ],
};

export const politicsEconomicsCategory: Category = {
  id: 'politics-economics',
  title: '政治と経済の関係',
  description: '規制・税制・福祉政策。政治経済学。経済政策の政治的決定。',
  level: '応用',
  topicCategoryId: 'cat-politics',
  courses: [
    {
      id: 'pe-ch1',
      title: '第1章：経済政策と政治',
      lessons: [
        { id: 'pe1-1', title: '規制と産業政策', duration: '10:45', videoId: '', isPremium: false, checkItems: ['政府の経済介入'], sections: [{ type: 'text', content: '産業育成・競争政策・環境規制。政治的判断が伴う。利益集団の影響大。' }] },
        { id: 'pe1-2', title: '税制と所得再分配', duration: '11:00', videoId: '', isPremium: false, checkItems: ['税政の政治性'], sections: [{ type: 'text', content: '累進課税 vs フラットタックス。富の再分配。選挙争点。' }] },
        { id: 'pe1-3', title: '社会保障と福祉政策', duration: '10:30', videoId: '', isPremium: false, checkItems: ['福祉国家モデル'], sections: [{ type: 'text', content: 'スウェーデン型福祉国家 vs 米国型市場経済。政治体制と福祉システムの対応。' }] },
      ],
    },
    {
      id: 'pe-ch2',
      title: '第2章：政治経済のジレンマ',
      lessons: [
        { id: 'pe2-1', title: 'インフレーション・アライアンス', duration: '10:15', videoId: '', isPremium: false, checkItems: ['時間不一貫性'], sections: [{ type: 'text', content: '選挙直前に景気刺激→インフレ→選挙後に引き締め。政治的好況循環。' }] },
        { id: 'pe2-2', title: '中央銀行の独立性', duration: '11:15', videoId: '', isPremium: false, checkItems: ['独立性の重要性'], sections: [{ type: 'text', content: '政治圧力から独立→インフレ抑制。日銀独立性議論。' }] },
      ],
    },
  ],
};

export const digitalPoliticsCategory: Category = {
  id: 'digital-politics',
  title: 'デジタル社会と政治',
  description: 'プライバシー・AI規制・サイバーセキュリティ・メディア規制。政治の未来。',
  level: '応用',
  topicCategoryId: 'cat-politics',
  courses: [
    {
      id: 'dp-ch1',
      title: '第1章：デジタル化と民主主義',
      lessons: [
        { id: 'dp1-1', title: 'フェイクニュースと情報政治', duration: '10:30', videoId: '', isPremium: false, checkItems: ['情報環境の変化'], sections: [{ type: 'text', content: '2016年米大統領選挙。ロシア干渉。SNSでのデマ拡散。民主主義への脅威。' }] },
        { id: 'dp1-2', title: 'プライバシー vs セキュリティ', duration: '10:45', videoId: '', isPremium: false, checkItems: ['政策的ジレンマ'], sections: [{ type: 'text', content: 'GDPR・マイナンバー・顔認証。個人情報保護と社会的監視のバランス。' }] },
        { id: 'dp1-3', title: 'AI規制と民主的統治', duration: '10:15', videoId: '', isPremium: false, checkItems: ['新技術への対応'], sections: [{ type: 'text', content: 'EU・AI規制法。アルゴリズムの透明性・説明責任。民主主義を守る技術政策。' }] },
      ],
    },
  ],
};
