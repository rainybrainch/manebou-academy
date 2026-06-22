import { Category } from "@/types";

export const arabicAcademyCategory: Category = {
  id: "arabic-academy",
  title: "アラビア語アカデミー",
  description: "【入門〜初級】アラビア文字・標準アラビア語・方言まで。中東×アフリカ×イスラム文化を通じて学ぶ。全5章・120講義・完全サポート。発音→文法→日常会話→地域方言→宗教用語で、アラビア語を360度全方位で習得。マネぼう塾の最新教育メソッドで、アラビア語の扉を開く。",
  level: "入門",
  topicCategoryId: "cat-arabic",
  image: "/images/genres/genre-arabic.png",
  courses: [
    {
      id: "ara-ch1",
      title: "第1章：アラビア文字と発音の完全ガイド",
      lessons: [
        { id: "ara-1-1", title: "アラビア文字の起源と特徴", duration: "12:00", videoId: "", isPremium: false, checkItems: ["アラビア文字の起源と進化が理解できる", "右から左へ書く理由が分かる", "文字の位置による形が変わる仕組みが理解できる", "他のアルファベットとの違いが説明できる"], sections: [{ type: "info-box", content: "アラビア語を学ぶ第一歩は文字と音です。アラビア文字は単独・語頭・語中・語末で形が変わります。" }] },
        { id: "ara-1-2", title: "28のアラビア文字を習得する方法", duration: "14:30", videoId: "", isPremium: false, checkItems: ["28文字全て読める", "28文字全て書ける", "4つの形が理解できる", "実単語で文字を識別できる"], sections: [{ type: "info-box", content: "28文字を効率的にグループ化して習得します。" }] },
        { id: "ara-1-3", title: "アラビア語の発音システム：28音の解説", duration: "16:00", videoId: "", isPremium: false, checkItems: ["28音全て発音できる", "咽頭音が区別できる", "咽頭化音が発音できる", "ハムザが理解できる", "声調が区別できる"], sections: [{ type: "info-box", content: "アラビア語には日本語にない咽頭音が複数存在します。解剖学的アプローチで習得します。" }] },
        { id: "ara-1-4", title: "発音記号（ダイアクリティクス）：6つのマーク完全ガイド", duration: "10:00", videoId: "", isPremium: false, checkItems: ["ファッタ・キスラ・ダンマが区別できる", "スクーン・タンウィーンが理解できる", "シャッダが発音できる", "実単語で記号が使い分けられる"], sections: [{ type: "info-box", content: "アラビア語は文字と記号の組み合わせです。6つの基本記号を習得します。" }] },
        { id: "ara-1-5", title: "咽頭化の秘密：音が変わる仕組み", duration: "11:00", videoId: "", isPremium: false, checkItems: ["咽頭化音が発音できる", "普通の音と区別できる", "同化現象が理解できる", "周囲の母音変化が分かる"], sections: [{ type: "info-box", content: "咽頭化はアラビア語独有の音韻特性です。周囲の音まで影響を受けます。" }] },
        { id: "ara-1-6", title: "5つの長母音をマスター：音の伸ばし方", duration: "8:30", videoId: "", isPremium: false, checkItems: ["aaが発音できる", "iiが発音できる", "uuが発音できる", "ayが発音できる", "awが発音できる", "短母音と長母音を聞き分けられる"], sections: [{ type: "info-box", content: "短母音と長母音は意味を大きく変えます。正確な区別が重要です。" }] },
        { id: "ara-1-7", title: "子音クラスター（連続音）の発音法", duration: "9:00", videoId: "", isPremium: false, checkItems: ["リズムが理解できる", "複合子音が発音できる", "ハムザの役割が理解できる", "シャッダが発音できる"], sections: [{ type: "info-box", content: "子音-母音-子音のパターンが基本です。これを理解すると単語が明確になります。" }] },
        { id: "ara-1-8", title: "ハムザ（喉頭閉鎖音）の謎を解く", duration: "10:00", videoId: "", isPremium: false, checkItems: ["3つの役割が理解できる", "発音ができる", "弱化・消失ルールが分かる", "文字上の置き方が理解できる"], sections: [{ type: "info-box", content: "ハムザは喉頭閉鎖音で、声を止める音です。明示的に記号で書きます。" }] },
        { id: "ara-1-9", title: "4音弁別練習：咽頭音と喉頭音", duration: "12:00", videoId: "", isPremium: false, checkItems: ["4音を聞き分けられる", "正確に発音できる", "実単語が発音できる", "ネイティブと同等の精度"], sections: [{ type: "info-box", content: "4つの喉音は異なる位置・方法で生成されます。集中的な練習で習得します。" }] },
        { id: "ara-1-10", title: "文法に関わる発音：定冠詞アルの変化", duration: "8:30", videoId: "", isPremium: false, checkItems: ["定冠詞の基本形が理解できる", "太陽文字での同化が発音できる", "月文字での発音が理解できる", "音声変化が説明できる"], sections: [{ type: "info-box", content: "定冠詞は後ろの文字によって発音が変わります。これを同化と呼びます。" }] },
        { id: "ara-1-11", title: "正確な発音を目指す：音声解剖学アプローチ", duration: "13:00", videoId: "", isPremium: false, checkItems: ["舌・唇・口腔の動きが理解できる", "IPAが読める", "発音を分析できる", "調整ができる"], sections: [{ type: "info-box", content: "音がどこで生成されるかを理解することで、習得がスピードアップします。" }] },
        { id: "ara-1-12", title: "実践録音：正確性の自己診断テスト", duration: "10:00", videoId: "", isPremium: false, checkItems: ["50個の単語を正確に発音できる", "複雑な文を発音できる", "ネイティブとの比較ができる", "流暢に話せる"], sections: [{ type: "info-box", content: "学習成果の確認には実践が不可欠です。50個の精選単語を使用します。" }] }
      ]
    },
    {
      id: "ara-ch2",
      title: "第2章：基礎文法と標準アラビア語",
      lessons: [
        { id: "ara-2-1", title: "名詞と格（3格制：主格・属格・目的格）", duration: "12:00", videoId: "", isPremium: false, checkItems: ["主格・属格・目的格の役割が理解できる", "定冠詞付き名詞の格変化が区別できる", "複数形での格変化が理解できる", "実例文で格が適用できる"], sections: [{ type: "info-box", content: "アラビア語は古典的な3格言語です。名詞自体が格を変えることで文法関係を表現します。" }] },
        { id: "ara-2-2", title: "動詞体系：完了形・未完了形・命令形", duration: "14:00", videoId: "", isPremium: false, checkItems: ["完了形の活用が理解できる", "未完了形の活用が理解できる", "命令形の活用が理解できる", "時制が使い分けられる"], sections: [{ type: "info-box", content: "アラビア語は時制ではなく体で時間を表現します。完了形は過去、未完了形は現在・未来を表します。" }] },
        { id: "ara-2-3", title: "形容詞と名詞の同意", duration: "11:00", videoId: "", isPremium: false, checkItems: ["ジェンダーに同意する", "数に同意する", "格に同意する", "複合形容詞が機能する"], sections: [{ type: "info-box", content: "アラビア語では形容詞は名詞に完全に同意する必要があります。" }] },
        { id: "ara-2-4", title: "代名詞の全パターン", duration: "12:30", videoId: "", isPremium: false, checkItems: ["独立代名詞が使える", "接続代名詞が理解できる", "所有代名詞が形成できる", "相対代名詞が使える"], sections: [{ type: "info-box", content: "アラビア語の代名詞は文法的役割によって形が大きく変わります。" }] },
        { id: "ara-2-5", title: "前置詞と格", duration: "10:00", videoId: "", isPremium: false, checkItems: ["12の前置詞が使える", "後の格が正しく使える", "定冠詞との組み合わせが理解できる", "多義性が分かる"], sections: [{ type: "info-box", content: "アラビア語の前置詞は必ず後ろの名詞を属格にします。" }] },
        { id: "ara-2-6", title: "文法上の性（ジェンダー）", duration: "9:00", videoId: "", isPremium: false, checkItems: ["男性名詞と女性名詞が区別できる", "文法的役割が理解できる", "語尾パターンが覚えられる", "動詞活用との関係が分かる"], sections: [{ type: "info-box", content: "アラビア語では全ての名詞が文法的ジェンダーを持ちます。" }] },
        { id: "ara-2-7", title: "複数形の2つの体系", duration: "13:00", videoId: "", isPremium: false, checkItems: ["健全複数が形成できる", "破損複数のパターンが理解できる", "語幹変化が予測できる", "格変化が使える"], sections: [{ type: "info-box", content: "アラビア語の複数形は健全複数と破損複数の2つを持ちます。" }] },
        { id: "ara-2-8", title: "相対節と関係代名詞", duration: "10:30", videoId: "", isPremium: false, checkItems: ["相対節の構造が理解できる", "関係代名詞が使える", "先行詞との一致が分かる", "複合相対節が構築できる"], sections: [{ type: "info-box", content: "アラビア語の相対節は定冠詞のある名詞に限定的に後続します。" }] },
        { id: "ara-2-9", title: "条件文と仮定法", duration: "11:00", videoId: "", isPremium: false, checkItems: ["現実的条件が分かる", "反事実条件が分かる", "動詞形が理解できる", "複合条件文が構築できる"], sections: [{ type: "info-box", content: "アラビア語には現実的条件と反事実条件を区別する機能があります。" }] },
        { id: "ara-2-10", title: "標準アラビア語と地域方言の違い", duration: "8:00", videoId: "", isPremium: false, checkItems: ["MSAと方言の違いが理解できる", "言語階層が分かる", "使い分けが理解できる"], sections: [{ type: "info-box", content: "アラビア語は言語階層現象を持つ言語です。標準語は公式・学術・文学で、方言は日常会話です。" }] }
      ]
    },
    {
      id: "ara-ch3",
      title: "第3章：日常会話と標準アラビア語",
      lessons: [
        { id: "ara-3-1", title: "挨拶と自己紹介", duration: "12:00", videoId: "", isPremium: false, checkItems: ["15の挨拶が使える", "自己紹介が3分でできる", "ビジネス・カジュアルを使い分けられる", "聞き返し表現が使える"], sections: [{ type: "info-box", content: "アラビア語の挨拶は時間帯・相手・親密度で大きく変わります。" }] },
        { id: "ara-3-2", title: "レストラン・カフェでの注文", duration: "10:30", videoId: "", isPremium: true, checkItems: ["食べ物名が言える", "注文できる", "味の感想が言える", "アレルギーが伝えられる"], sections: [{ type: "info-box", content: "アラビア圏の食文化は地域で大きく異なります。" }] },
        { id: "ara-3-3", title: "ショッピング：値段交渉", duration: "9:00", videoId: "", isPremium: true, checkItems: ["数字と価格が言える", "バザール会話ができる", "値段交渉が理解できる", "品質について聞ける"], sections: [{ type: "info-box", content: "アラビア圏のバザールは社交・交渉・文化交流の場です。" }] },
        { id: "ara-3-4", title: "ホテル・宿泊施設でのチェックイン", duration: "8:30", videoId: "", isPremium: true, checkItems: ["スタッフとの会話ができる", "予約条件が説明できる", "手続きができる", "トラブル報告ができる"], sections: [{ type: "info-box", content: "ホテルでの会話は旅行の最初の実践会話です。" }] },
        { id: "ara-3-5", title: "交通・移動", duration: "10:00", videoId: "", isPremium: true, checkItems: ["方向指示ができる", "行き先が伝えられる", "切符が買える", "ルート確認ができる"], sections: [{ type: "info-box", content: "公共交通との交流が増えます。" }] },
        { id: "ara-3-6", title: "医療・健康", duration: "11:00", videoId: "", isPremium: true, checkItems: ["体の部位が言える", "症状が説明できる", "アレルギーが伝えられる", "医者の指示が理解できる"], sections: [{ type: "info-box", content: "医療用語を知ることは安全性確保に重要です。" }] },
        { id: "ara-3-7", title: "天気・季節・時間", duration: "8:00", videoId: "", isPremium: true, checkItems: ["天気が理解できる", "季節が説明できる", "時間が完璧", "計算ができる"], sections: [{ type: "info-box", content: "日常会話で最も頻繁な話題です。" }] },
        { id: "ara-3-8", title: "趣味・興味", duration: "10:00", videoId: "", isPremium: true, checkItems: ["趣味が説明できる", "スポーツが話せる", "文学・映画が議論できる", "好き嫌いが自由に表現できる"], sections: [{ type: "info-box", content: "相手の興味について深く話し合う力が必要です。" }] },
        { id: "ara-3-9", title: "感情・意見表現", duration: "9:30", videoId: "", isPremium: true, checkItems: ["好き嫌いが複数レベルで表現できる", "同意が丁寧に表現できる", "意見がはっきり言える", "感情が細かく表現できる"], sections: [{ type: "info-box", content: "文化的差異と敬意の配分が重要です。" }] },
        { id: "ara-3-10", title: "ビジネス会話", duration: "11:00", videoId: "", isPremium: true, checkItems: ["会社・職業が説明できる", "メールの基本が書ける", "会議表現が使える", "契約が話せる"], sections: [{ type: "info-box", content: "ビジネスアラビア語は標準語が多用されます。" }] }
      ]
    },
    {
      id: "ara-ch4",
      title: "第4章：地域方言と文化的背景",
      lessons: [
        { id: "ara-4-1", title: "アラビア方言地図", duration: "14:00", videoId: "", isPremium: true, checkItems: ["地域分布が理解できる", "どこでどの方言が話されているか分かる", "標準語との関係が理解できる", "主要方言の違いが説明できる"], sections: [{ type: "info-box", content: "北アフリカから中東にかけて広大な地域で各地域ごとに方言が発展しました。" }] },
        { id: "ara-4-2", title: "エジプト方言", duration: "12:00", videoId: "", isPremium: true, checkItems: ["基本が理解できる", "標準語との違いが分かる", "映画・ドラマが理解できる", "エジプト人と会話ができる"], sections: [{ type: "info-box", content: "エジプト方言は映画・音楽・テレビドラマの普及により、最も広く理解される方言です。" }] },
        { id: "ara-4-3", title: "レバント方言", duration: "11:00", videoId: "", isPremium: true, checkItems: ["基本が理解できる", "シリア・レバノン・パレスチナ人の話が分かる", "文学作品が読める", "歌が理解できる"], sections: [{ type: "info-box", content: "レバント方言は文学の伝統を持つより文学的な方言です。" }] },
        { id: "ara-4-4", title: "イラク方言", duration: "11:30", videoId: "", isPremium: true, checkItems: ["特徴が理解できる", "ペルシア語の影響が分かる", "文化背景が理解できる"], sections: [{ type: "info-box", content: "イラク方言はメソポタミア文明とペルシア影響で最も複雑と言えます。" }] },
        { id: "ara-4-5", title: "モロッコ方言", duration: "12:00", videoId: "", isPremium: true, checkItems: ["基本が理解できる", "ベルベル語の影響が分かる", "フランス語借用語が理解できる", "日常会話が分かる"], sections: [{ type: "info-box", content: "モロッコ方言はベルベル人の遺産とフランス統治の影響が混在しています。" }] },
        { id: "ara-4-6", title: "ベドウィン方言", duration: "10:00", videoId: "", isPremium: true, checkItems: ["生活・文化が理解できる", "音韻特性が分かる", "詩の伝統が理解できる"], sections: [{ type: "info-box", content: "ベドウィン方言は古典アラビア語の特性を多く保持しています。" }] },
        { id: "ara-4-7", title: "アンダルスアラビア語", duration: "9:00", videoId: "", isPremium: true, checkItems: ["スペイン・ポルトガルの歴史が理解できる", "中世の文化が分かる", "拡散・衰退が理解できる"], sections: [{ type: "info-box", content: "8-15世紀、イベリア半島はアラビア文明の中心地でした。" }] },
        { id: "ara-4-8", title: "イスラム文明・文化の背景", duration: "13:00", videoId: "", isPremium: true, checkItems: ["基本が理解できる", "歴史が理解できる", "拡大の経路が分かる", "重要人物が分かる"], sections: [{ type: "info-box", content: "アラビア語を深く理解するにはイスラム文明の背景が不可欠です。" }] },
        { id: "ara-4-9", title: "クルアーン（イスラム聖典）と古典アラビア語", duration: "14:00", videoId: "", isPremium: true, checkItems: ["構成が理解できる", "言語特徴が分かる", "一部が読める", "解釈の伝統が理解できる"], sections: [{ type: "info-box", content: "クルアーンは言語学・文学・宗教の観点から最重要テキストです。" }] },
        { id: "ara-4-10", title: "アラビア音楽・詩・文学の伝統", duration: "12:00", videoId: "", isPremium: true, checkItems: ["詩の伝統が理解できる", "音楽の形式が分かる", "文学の時代分類ができる", "現代作家が分かる"], sections: [{ type: "info-box", content: "アラビア詩は7世紀前までさかのぼる伝統があります。" }] }
      ]
    },
    {
      id: "ara-ch5",
      title: "第5章：宗教用語と高度な表現",
      lessons: [
        { id: "ara-5-1", title: "イスラム教の基本宗教用語50選", duration: "12:00", videoId: "", isPremium: true, checkItems: ["50の用語が理解できる", "礼拝関連が使える", "イスラム法関連が分かる", "神学的議論ができる"], sections: [{ type: "info-box", content: "イスラム教とアラビア語は不可分です。宗教用語なくして深い理解はできません。" }] },
        { id: "ara-5-2", title: "礼拝時間・イスラム暦・宗教行事", duration: "10:00", videoId: "", isPremium: true, checkItems: ["礼拝時間が全て言える", "イスラム暦が理解できる", "宗教祭日が分かる", "年間行事が説明できる"], sections: [{ type: "info-box", content: "イスラム教は時間観念・暦が特異です。イスラム暦の理解は生活に必須です。" }] },
        { id: "ara-5-3", title: "イスラム法（シャリーア）の基本", duration: "12:00", videoId: "", isPremium: true, checkItems: ["4つの情報源が理解できる", "イジュマーが分かる", "キヤースが理解できる", "法学派が説明できる"], sections: [{ type: "info-box", content: "シャリーアはイスラム法・道徳・生活の指針です。" }] },
        { id: "ara-5-4", title: "イスラム思想史：派閥の違い", duration: "11:00", videoId: "", isPremium: true, checkItems: ["スンニ派とシーア派の違いが理解できる", "主要分派が説明できる", "政治的分裂が理解できる", "リーダーシップ観の違いが分かる"], sections: [{ type: "info-box", content: "イスラム教は預言者死後すぐにリーダーシップをめぐって分裂しました。" }] },
        { id: "ara-5-5", title: "イスラム神学と論理学の発展", duration: "10:00", videoId: "", isPremium: true, checkItems: ["主要学派が理解できる", "派閥の違いが分かる", "論理学の伝統が理解できる", "哲学者が説明できる"], sections: [{ type: "info-box", content: "イスラム文明は翻訳運動を通じてギリシャ哲学を吸収し、独自の神学を発展させました。" }] }
      ]
    }
  ]
};
