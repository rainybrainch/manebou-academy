import { Category } from '@/types';
import { moneyKnowledgeCategory } from './course-money-knowledge';
import { stockIntroCategory } from './course-stock-intro';
import { zaiCategory } from './course-zai';

const moneyBasicsCategory: Category = {
  id: 'money-basics',
  title: 'お金の基本をマスターしよう',
  description: '家計管理・貯金・節約の基礎から実践まで学べるカテゴリです。',
  courses: [
    {
      id: 'basics-ch1',
      title: '第1章：家計管理の基礎',
      lessons: [
        {
          id: 'l1',
          title: '家計管理とは何か',
          duration: '8:32',
          videoId: 'dQw4w9WgXcQ',
          isPremium: false,
          checkItems: [
            '家計管理の定義と重要性を理解した',
            '収入・支出の分類方法を把握できた',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'この講座では、家計管理の基本的な概念と重要性について学びます。お金の流れを把握し、将来のための資産形成を目指しましょう。',
            },
            {
              type: 'heading',
              level: 2,
              content: '家計管理の定義と重要性',
            },
            {
              type: 'text',
              content: 'みなさん、毎月の収支を把握していますか？実は、多くの人がお金の流れを「なんとなく」で管理しています。家計管理とは、収入と支出を正確に把握し、計画的にお金を使うことです。',
            },
            {
              type: 'text',
              content: '家計管理を行うことで、無駄な支出を減らし、貯蓄を増やすことができます。また、将来の目標（マイホーム・老後資金など）に向けた計画も立てやすくなります。',
            },
            {
              type: 'highlight-box',
              title: '家計管理の3つのメリット',
              items: [
                '支出の無駄が見える化できる',
                '貯蓄目標を達成しやすくなる',
                '将来への不安が減る',
              ],
            },
            {
              type: 'heading',
              level: 2,
              content: '収入・支出の分類方法',
            },
            {
              type: 'text',
              content: '家計管理の第一歩は、収入と支出を正しく分類することです。収入は「給与」「副業」「投資」などに分かれ、支出は「固定費」「変動費」「特別支出」に分類できます。',
            },
            {
              type: 'numbered-list',
              items: [
                '固定費：家賃・保険・通信費など毎月一定の支出',
                '変動費：食費・交際費・娯楽費など月によって変わる支出',
                '特別支出：旅行・家電購入など不定期の大きな支出',
              ],
            },
            {
              type: 'practice',
              question: 'あなたは先月の支出を振り返り、固定費・変動費・特別支出に分類することになりました。\n具体的な例を挙げながら、それぞれの分類方法を200字程度で説明してください。\n説明には以下の要素を含めてください：\n・固定費の例\n・変動費の例\n・特別支出の例',
              auxiliaryPrompt: 'あなたは家計管理の専門家です。以下の条件で、収支の分類方法を説明してください。\n\n条件：\n1. 固定費の具体例を3つ挙げる\n2. 変動費の具体例を3つ挙げる\n3. 特別支出の具体例を2つ挙げる\n4. 全体を200字程度にまとめる\n5. 初心者にも分かりやすい言葉を使う\n\nフォーマット：\n・固定費（毎月一定）\n・変動費（月によって変動）\n・特別支出（不定期）\n\nできるだけ具体的な金額例も加えてください。',
              answer: '固定費には家賃（80,000円）、スマホ代（8,000円）、保険料（15,000円）などが挙げられます。これらは毎月ほぼ同じ金額が引き落とされます。変動費には食費（40,000円前後）、交際費、娯楽費などがあり、生活スタイルによって大きく変わります。特別支出には年1回の旅行や家電の買い替えなど、まとまった金額が必要な費用が該当します。',
            },
            {
              type: 'glossary',
              terms: [
                { term: '固定費', definition: '毎月ほぼ一定額が発生する支出。家賃・保険料・ローン返済など。' },
                { term: '変動費', definition: '月によって金額が変わる支出。食費・光熱費・交際費など。' },
                { term: 'キャッシュフロー', definition: '一定期間のお金の流れ（入り・出）のこと。' },
              ],
            },
            {
              type: 'summary',
              content: 'この講座では、家計管理の基本概念と収支の分類方法について学びました。まず自分の支出を固定費・変動費・特別支出に分けて把握することが、家計改善の第一歩です。',
              nextLesson: '次の講座では、実際に家計簿をつける方法と便利なアプリの活用法を学びます。',
            },
          ],
        },
        {
          id: 'l2',
          title: '家計簿のつけ方と続けるコツ',
          duration: '11:20',
          videoId: 'dQw4w9WgXcQ',
          isPremium: false,
          checkItems: [
            '家計簿の記録方法を理解した',
            '継続するためのコツを把握できた',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'この講座では、家計簿の具体的なつけ方と、長続きさせるためのコツを学びます。',
            },
            {
              type: 'heading',
              level: 2,
              content: '家計簿を続けるための3つのルール',
            },
            {
              type: 'numbered-list',
              items: [
                '完璧を求めない：多少の誤差は気にしない',
                '記録のタイミングを決める：レシートをその日のうちに入力',
                'シンプルに始める：最初は大きなカテゴリだけでOK',
              ],
            },
            {
              type: 'summary',
              content: '家計簿は「続けること」が最も重要です。完璧な記録より、おおまかな把握を優先しましょう。',
              nextLesson: '次の講座では、貯蓄目標の設定方法について学びます。',
            },
          ],
        },
      ],
    },
    {
      id: 'basics-ch2',
      title: '第2章：貯蓄の仕組みを作る',
      lessons: [
        {
          id: 'l3',
          title: '先取り貯蓄の始め方',
          duration: '9:45',
          videoId: 'dQw4w9WgXcQ',
          isPremium: true,
          checkItems: [
            '先取り貯蓄の仕組みを理解した',
            '自分に合った貯蓄額を設定できた',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'この講座はスキルプラスの講座を利用しています。先取り貯蓄の具体的な方法を学びましょう。',
            },
            {
              type: 'heading',
              level: 2,
              content: '先取り貯蓄とは',
            },
            {
              type: 'text',
              content: '先取り貯蓄とは、給与が入ったらすぐに貯蓄用口座に移す方法です。「余ったら貯める」ではなく「先に貯める」ことで、確実に貯蓄が増えます。',
            },
            {
              type: 'summary',
              content: '先取り貯蓄は最も効果的な貯蓄方法の一つです。まず収入の10%から始めてみましょう。',
              nextLesson: '次の講座では、投資の基礎について学びます。',
            },
          ],
        },
      ],
    },
  ],
};

const nisaBasicsCategory: Category = {
  id: 'nisa-basics',
  title: 'NISAで始める資産運用入門',
  description: '新NISA制度を活用した投資の基礎知識を分かりやすく解説します。',
  courses: [
    {
      id: 'nisa-ch1',
      title: '第1章：NISAの基本',
      lessons: [
        {
          id: 'l1',
          title: 'NISAとは何か？メリット・デメリット',
          duration: '12:10',
          videoId: 'dQw4w9WgXcQ',
          isPremium: false,
          checkItems: [
            'NISAの基本的な仕組みを理解した',
            '旧NISAと新NISAの違いを把握できた',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'この講座では、2024年から始まった新NISA制度の基本的な仕組みとメリット・デメリットを学びます。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'NISAの基本的な仕組み',
            },
            {
              type: 'text',
              content: 'NISA（ニーサ）とは「少額投資非課税制度」のことで、通常約20%かかる投資の利益への税金がゼロになる制度です。2024年から「新NISA」として大幅に拡充されました。',
            },
            {
              type: 'highlight-box',
              title: '新NISAの主なポイント',
              items: [
                '年間投資枠：つみたて投資枠120万円＋成長投資枠240万円',
                '生涯投資枠：最大1,800万円',
                '非課税期間：無期限',
                '売却後の枠：翌年に復活',
              ],
            },
            {
              type: 'summary',
              content: 'NISAは長期・積立・分散投資に最適な制度です。早く始めるほど複利効果が高まります。',
              nextLesson: '次の講座では、NISAで買える商品の選び方を学びます。',
            },
          ],
        },
      ],
    },
  ],
};

export const categories: Category[] = [
  moneyKnowledgeCategory,
  zaiCategory,
  stockIntroCategory,
  moneyBasicsCategory,
  nisaBasicsCategory,
];

export function getCourse(courseId: string) {
  for (const category of categories) {
    const course = category.courses.find(c => c.id === courseId);
    if (course) return { course, category };
  }
  return undefined;
}

export function getLesson(courseId: string, lessonId: string) {
  const result = getCourse(courseId);
  if (!result) return undefined;
  const { course, category } = result;
  const lesson = course.lessons.find(l => l.id === lessonId);
  if (!lesson) return undefined;
  return { lesson, course, category };
}

export function getAdjacentLessons(courseId: string, lessonId: string) {
  const result = getCourse(courseId);
  if (!result) return { prev: null, next: null };
  const { course } = result;
  const lessons = course.lessons;
  const idx = lessons.findIndex(l => l.id === lessonId);
  return {
    prev: idx > 0 ? { lesson: lessons[idx - 1], chapterTitle: course.title } : null,
    next: idx < lessons.length - 1 ? { lesson: lessons[idx + 1], chapterTitle: course.title } : null,
  };
}