import { Category } from '@/types';

export const partyPoliticsCategory: Category = {
  id: 'party-politics',
  title: '政党政治と政策立案',
  description: '政党組織・マニフェスト・政策決定の仕組み。政治化の具体像。',
  level: '基礎',
  topicCategoryId: 'cat-politics',
  courses: [
    {
      id: 'pp-ch1',
      title: '第1章：政党の役割と組織',
      lessons: [
        { id: 'pp1-1', title: '政党とは何か', duration: '10:30', videoId: '', isPremium: false, checkItems: ['政党の定義'], sections: [{ type: 'text', content: '共通の理念を持つ人々の集団。権力獲得を目指す。民主主義の担い手。' }] },
        { id: 'pp1-2', title: '保守と革新・左と右', duration: '11:00', videoId: '', isPremium: false, checkItems: ['政治イデオロギー'], sections: [{ type: 'text', content: '左：社会主義・平等重視。右：資本主義・秩序重視。保守：現状維持。革新：変革志向。' }] },
        { id: 'pp1-3', title: '日本の政党システム', duration: '10:45', videoId: '', isPremium: false, checkItems: ['日本政治史の理解'], sections: [{ type: 'text', content: '自民党（1955～）：保守政党。野党：社会党・共産党・民主党等。2020s：再編進む。' }] },
        { id: 'pp1-4', title: '多党制と二大政党制', duration: '10:15', videoId: '', isPremium: false, checkItems: ['政党制の分類'], sections: [{ type: 'text', content: '二大政党制：米国・イギリス。多党制：日本・イタリア・フランス。連立政権の形成。' }] },
      ],
    },
    {
      id: 'pp-ch2',
      title: '第2章：政策立案プロセス',
      lessons: [
        { id: 'pp2-1', title: 'アジェンダセッティングと政策形成', duration: '11:15', videoId: '', isPremium: false, checkItems: ['政治過程の理解'], sections: [{ type: 'text', content: '問題認識→アジェンダ化→政策案作成→議論→決定。各段階で政治的現実主義が必要。' }] },
        { id: 'pp2-2', title: '利益集団とロビイング', duration: '10:30', videoId: '', isPremium: false, checkItems: ['圧力団体の影響'], sections: [{ type: 'text', content: '農協・労組・業界団体。政治家に働きかけ（ロビイング）。民主主義と秘密裏交渉のジレンマ。' }] },
        { id: 'pp2-3', title: 'シンクタンク・研究所の役割', duration: '10:00', videoId: '', isPremium: false, checkItems: ['政策研究の重要性'], sections: [{ type: 'text', content: '政策提言・研究・提言。官民学連携で政策品質向上。' }] },
      ],
    },
  ],
};

export const internationalPoliticsCategory: Category = {
  id: 'international-politics',
  title: '国際政治・外交・国連',
  description: 'リアリズム・リベラリズム・国際法・外交戦略・国連と多国間主義。',
  level: '応用',
  topicCategoryId: 'cat-politics',
  courses: [
    {
      id: 'ip-ch1',
      title: '第1章：国際政治理論',
      lessons: [
        { id: 'ip1-1', title: 'リアリズム：国益と権力',  duration: '11:30', videoId: '', isPremium: false, checkItems: ['リアリズム理解'], sections: [{ type: 'text', content: '国家は国益追求。国際無政府状態で勢力均衡。戦争の可能性。' }] },
        { id: 'ip1-2', title: 'リベラリズムと制度主義', duration: '11:00', videoId: '', isPremium: false, checkItems: ['制度の平和機能'], sections: [{ type: 'text', content: '国際制度・相互依存・民主主義平和。協調の可能性。' }] },
        { id: 'ip1-3', title: 'コンストラクティヴィズム', duration: '10:30', videoId: '', isPremium: false, checkItems: ['社会的構成要素'], sections: [{ type: 'text', content: '国益は客観的ではなく、社会的に構成される。アイデンティティ・利益・脅威認識が重要。' }] },
      ],
    },
    {
      id: 'ip-ch2',
      title: '第2章：外交と戦略',
      lessons: [
        { id: 'ip2-1', title: '外交交渉と利益調整', duration: '11:15', videoId: '', isPremium: false, checkItems: ['外交術の理解'], sections: [{ type: 'text', content: '二国間・多国間交渉。譲歩と取引。言語・文化・儀式の役割。' }] },
        { id: 'ip2-2', title: '同盟と勢力均衡', duration: '10:45', videoId: '', isPremium: false, checkItems: ['地政学的戦略'], sections: [{ type: 'text', content: '同盟：共通の敵に対する協力。NATO・日米同盟。勢力均衡：大国間の競争。' }] },
        { id: 'ip2-3', title: '日本外交の現状', duration: '10:30', videoId: '', isPremium: false, checkItems: ['日本の戦略的地位'], sections: [{ type: 'text', content: 'インド太平洋戦略・米国同盟・中国との関係・核兵器非保有国の立場。' }] },
      ],
    },
    {
      id: 'ip-ch3',
      title: '第3章：国連と多国間主義',
      lessons: [
        { id: 'ip3-1', title: '国際連合の役割と限界', duration: '11:00', videoId: '', isPremium: false, checkItems: ['国連の機能'], sections: [{ type: 'text', content: '国際安全保障・人権・開発支援。安保理の拒否権が足かせ。' }] },
        { id: 'ip3-2', title: '人権と国家主権のジレンマ', duration: '10:15', videoId: '', isPremium: false, checkItems: ['人道的介入の問題'], sections: [{ type: 'text', content: 'R2P（保護する責任）。主権侵害か人権保護か。シリア・ミャンマー問題。' }] },
      ],
    },
  ],
};

export const constitutionLawCategory: Category = {
  id: 'constitution-law',
  title: '憲法と法治国家',
  description: '基本的人権・民主主義・三権分立・立憲主義。民主主義の法的基礎。',
  level: '基礎',
  topicCategoryId: 'cat-politics',
  courses: [
    {
      id: 'cl-ch1',
      title: '第1章：憲法の役割',
      lessons: [
        { id: 'cl1-1', title: '憲法とは何か', duration: '11:00', videoId: '', isPremium: false, checkItems: ['憲法の定義'], sections: [{ type: 'text', content: '国家権力を制限する法。最高法規。改正に高いハードル。' }] },
        { id: 'cl1-2', title: '成文憲法と不文憲法', duration: '10:30', videoId: '', isPremium: false, checkItems: ['憲法の形態'], sections: [{ type: 'text', content: '日本・米国・フランス：成文憲法。イギリス：不文憲法（慣例・判例・法律の総体）。' }] },
        { id: 'cl1-3', title: '立憲主義の原理', duration: '10:45', videoId: '', isPremium: false, checkItems: ['立憲主義理解'], sections: [{ type: 'text', content: '権力制限。民主主義とは異なる。「民主主義＝良い」ではなく、立憲的制限が必要。' }] },
        { id: 'cl1-4', title: '日本国憲法の特徴', duration: '11:15', videoId: '', isPremium: false, checkItems: ['日本憲法の特殊性'], sections: [{ type: 'text', content: '1947年施行。GHQ草案。平和主義・基本的人権・国民主権。改正論議続く。' }] },
      ],
    },
    {
      id: 'cl-ch2',
      title: '第2章：基本的人権',
      lessons: [
        { id: 'cl2-1', title: '自由権と社会権', duration: '11:30', videoId: '', isPremium: false, checkItems: ['人権の分類'], sections: [{ type: 'text', content: '自由権：言論・結社・表現（負の権利）。社会権：教育・医療・労働（正の権利）。' }] },
        { id: 'cl2-2', title: '平等権と差別禁止', duration: '10:30', videoId: '', isPremium: false, checkItems: ['平等概念'], sections: [{ type: 'text', content: '法の下の平等。性別・人種・身分による差別禁止。積極的差別是正政策の是非。' }] },
        { id: 'cl2-3', title: '人権の制約と限界', duration: '10:15', videoId: '', isPremium: false, checkItems: ['人権制限の正当性'], sections: [{ type: 'text', content: '人権は絶対ではない。公共の福祉による制限。表現の自由vs名誉毀損。' }] },
      ],
    },
    {
      id: 'cl-ch3',
      title: '第3章：三権分立と司法',
      lessons: [
        { id: 'cl3-1', title: '三権分立の原理', duration: '11:00', videoId: '', isPremium: false, checkItems: ['権力分立の効果'], sections: [{ type: 'text', content: '立法・行政・司法の独立。抑制と均衡。権力濫用防止。' }] },
        { id: 'cl3-2', title: '日本の司法制度と裁判員制度', duration: '10:45', videoId: '', isPremium: false, checkItems: ['司法民主化'], sections: [{ type: 'text', content: '2009年から裁判員制度開始。国民参加で司法透明化・民主化。' }] },
      ],
    },
  ],
};
