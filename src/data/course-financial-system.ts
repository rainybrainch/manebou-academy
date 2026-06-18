import { Category } from '@/types';

export const financialSystemCategory: Category = {
  id: 'financial-system',
  title: '金融システムと中央銀行',
  description: '銀行システム・通貨供給・金融政策の仕組み。お金の流れを支配する制度を学ぶ。',
  level: '基礎',
  topicCategoryId: 'cat-economics',
  courses: [
    {
      id: 'finance-ch1',
      title: '第1章：銀行システムの基本',
      lessons: [
        { id: 'fs1-1', title: '銀行の本質：信用創造機関', duration: '11:30', videoId: '', isPremium: false, checkItems: ['銀行の役割説明できる'], sections: [{ type: 'text', content: '銀行：預金受入→融資。この過程で通貨供給量が増加。信用創造機能。' }] },
        { id: 'fs1-2', title: '中央銀行 vs 民間銀行', duration: '10:45', videoId: '', isPremium: false, checkItems: ['銀行階層理解'], sections: [{ type: 'text', content: '中央銀行（日銀）：通貨発行・金融政策。民間銀行：融資・決済。' }] },
        { id: 'fs1-3', title: 'ベースマネーとマネーサプライ', duration: '11:00', videoId: '', isPremium: false, checkItems: ['通貨供給量の層構造理解'], sections: [{ type: 'text', content: 'ベースマネー：中央銀行発行。マネーサプライ：ベース × 乗数。' }] },
      ],
    },
    {
      id: 'finance-ch2',
      title: '第2章：中央銀行の役割と政策手段',
      lessons: [
        { id: 'fs2-1', title: '中央銀行の3つの役割', duration: '10:30', videoId: '', isPremium: false, checkItems: ['中央銀行の目的列挙'], sections: [{ type: 'text', content: '1.物価安定 2.金融安定 3.決済システム整備。日銀の使命。' }] },
        { id: 'fs2-2', title: '政策金利とその波及', duration: '11:15', videoId: '', isPremium: false, checkItems: ['金利波及メカニズム理解'], sections: [{ type: 'text', content: '政策金利上昇→銀行間金利上昇→企業・個人融資金利上昇→投資減→需要減。' }] },
        { id: 'fs2-3', title: '公開市場操作（OMO）', duration: '10:30', videoId: '', isPremium: false, checkItems: ['OMO説明できる'], sections: [{ type: 'text', content: '中央銀行が国債売買。買い増し→通貨供給量増加→緩和。売却→引き締め。' }] },
        { id: 'fs2-4', title: '準備預金率の操作', duration: '9:45', videoId: '', isPremium: false, checkItems: ['準備率政策理解'], sections: [{ type: 'text', content: '準備率引き下げ→銀行が融資できる額増加→通貨供給増。' }] },
      ],
    },
    {
      id: 'finance-ch3',
      title: '第3章：金融危機と中央銀行の対応',
      lessons: [
        { id: 'fs3-1', title: '銀行危機と取付騒ぎ', duration: '10:15', videoId: '', isPremium: false, checkItems: ['銀行危機のメカニズム理解'], sections: [{ type: 'text', content: '銀行が債務不履行の噂→預金者が一斉に引出→銀行倒産。流動性危機。' }] },
        { id: 'fs3-2', title: 'リーマン・ショックと政策対応', duration: '11:00', videoId: '', isPremium: false, checkItems: ['金融危機の実例理解'], sections: [{ type: 'text', content: '2008年：リーマン・ブラザーズ破綻。中央銀行の無制限流動性供給で対応。' }] },
      ],
    },
  ],
};
