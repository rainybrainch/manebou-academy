import { Category } from '@/types';

export const englishAcademyCategory: Category = {
  id: 'english-academy',
  title: '英語アカデミー',
  description: '日常英会話から実務英語まで。ニュース×AI×漫画で楽しく学ぶ。全5章・25講義。',
  level: '入門',
  topicCategoryId: 'cat-english',
  image: '/images/genres/genre-english.png',
  courses: [
    // ═══════════════════════════════════════
    // 第1章：英語の基本音と発音
    // ═══════════════════════════════════════
    {
      id: 'eng-ch1',
      title: '第1章：英語の基本音と発音',
      lessons: [
        {
          id: 'eng-1-1',
          title: '英語の5つの基本母音をマスター',
          duration: '6:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            'a, e, i, o, u の発音の違いが分かる',
            '短母音と長母音の区別ができる',
            '単語を正しく発音できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'こんにちは！英語を学ぶ第一歩は「正しい発音」です。英語には日本語にない音がたくさんあります。この講義では、基本となる5つの母音をしっかり身につけましょう。',
            },
            {
              type: 'heading',
              level: 2,
              content: '5つの基本母音',
            },
            {
              type: 'text',
              content: '英語の母音には5つの基本音があります：\n\n1. **a** - cat, apple, hand（短母音）\n2. **e** - bed, pen, red（短母音）\n3. **i** - sit, big, lip（短母音）\n4. **o** - dog, box, hot（短母音）\n5. **u** - cup, bus, fun（短母音）',
            },
            {
              type: 'highlight-box',
              title: 'ポイント：日本語「あ・い・う・え・お」との違い',
              content: '日本語の「あ」と英語の「a」は違う音です。英語を話すときは「えいご」のように，まず正確な音を聞いて，そして自分でも発音してみることが大切です。',
            },
          ],
        },
        {
          id: 'eng-1-2',
          title: 'アルファベット26文字の正しい発音',
          duration: '7:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'A～Z を正しく発音できる',
            'アルファベットと単語の関連性が理解できる',
            'spelling を聞いて綴字できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'アルファベットの名前と、実際の単語での発音は違います。この講義で、26文字をすべてマスターしましょう。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'A～Z の発音と例',
            },
            {
              type: 'text',
              content: '- A [ei] - apple, ant, amazing\n- B [bi:] - ball, beautiful, before\n- C [si:] - cat, car, clever\n- D [di:] - dog, day, dream\n- E [i:] - egg, end, energy',
            },
          ],
        },
        {
          id: 'eng-1-3',
          title: 'リンキング（音のつながり）',
          duration: '5:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            'リンキングの基本ルールが分かる',
            '実際の会話で音のつながりを聞き取れる',
            'より自然な英語を話せるようになる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'ネイティブスピーカーは単語を一つずつ発音しません。音と音が「つながる」ことで、自然な英語になります。',
            },
          ],
        },
        {
          id: 'eng-1-4',
          title: 'イントネーション（音の高さ）',
          duration: '6:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            ' 疑問文のイントネーションが理解できる',
            '強調のイントネーション使い分けられる',
            'より自然な発音ができる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '同じ単語でも、音の高さを変えると意味が変わることがあります。イントネーションをマスターしましょう。',
            },
          ],
        },
        {
          id: 'eng-1-5',
          title: 'ストレス（アクセント）の位置',
          duration: '5:45',
          videoId: '',
          isPremium: false,
          checkItems: [
            '単語のストレスの位置が分かる',
            'ストレスを正しく発音できる',
            '聞き取り精度が上がる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '「バナナ」と「パナマ」は同じ音の繰り返しですが、ストレス（どこに力を入れるか）が違いますね。英語でも同じです。',
            },
          ],
        },
      ],
    },
    // ═══════════════════════════════════════
    // 第2章：日常会話の基本フレーズ
    // ═══════════════════════════════════════
    {
      id: 'eng-ch2',
      title: '第2章：日常会話の基本フレーズ',
      lessons: [
        {
          id: 'eng-2-1',
          title: 'Hello から始める挨拶と自己紹介',
          duration: '8:15',
          videoId: '',
          isPremium: false,
          checkItems: [
            '基本的な挨拶ができる',
            '簡単な自己紹介ができる',
            '相手の名前を聞ける',
          ],
          sections: [
            {
              type: 'info-box',
              content: '「Hello」は最も基本的な挨拶です。この講義で、自然な挨拶と自己紹介をマスターしましょう。',
            },
          ],
        },
        {
          id: 'eng-2-2',
          title: '「How are you?」への答え方',
          duration: '6:45',
          videoId: '',
          isPremium: false,
          checkItems: [
            '「How are you?」に自然に答えられる',
            '会話を続けるための返答ができる',
            '相手の状態を聞き出せる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '「I\'m fine, thank you」と答えるだけでは、会話は続きません。自然な返答方法を学びましょう。',
            },
          ],
        },
        {
          id: 'eng-2-3',
          title: '買い物での英語表現',
          duration: '7:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            '店員と会話ができる',
            '商品の説明を理解できる',
            'お金の会話ができる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '海外の店で買い物するときに必要な英語を学びます。',
            },
          ],
        },
        {
          id: 'eng-2-4',
          title: 'レストランでの注文',
          duration: '7:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'メニューが読める',
            '注文ができる',
            '食事の好みを伝えられる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'レストランで使える実用的な英語フレーズを習得します。',
            },
          ],
        },
        {
          id: 'eng-2-5',
          title: '道案内と方向の聞き方',
          duration: '6:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            'right, left, straight の使い分けができる',
            '道を聞ける',
            '目的地まで無事到着できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '海外で迷ったときに大切な「道を聞く英語」をマスターしましょう。',
            },
          ],
        },
      ],
    },
    // ═══════════════════════════════════════
    // 第3章：ビジネス英語の基本
    // ═══════════════════════════════════════
    {
      id: 'eng-ch3',
      title: '第3章：ビジネス英語の基本',
      lessons: [
        {
          id: 'eng-3-1',
          title: 'メールの書き方：件名と本文',
          duration: '8:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'ビジネスメールの構造が分かる',
            '敬語表現が使える',
            'professional なメール文が書ける',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'ビジネスメールは日本語でも英語でも、失礼のない構成が必要です。正しいメールの書き方を学びましょう。',
            },
            {
              type: 'highlight-box',
              title: 'ビジネスメールの基本構成',
              content: '1. 件名（Subject）\n2. 挨拶（Greeting）\n3. 本文（Body）\n4. 結び（Closing）\n5. 署名（Signature）',
            },
          ],
        },
        {
          id: 'eng-3-2',
          title: '電話会議での英語表現',
          duration: '7:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            '会議の開始・終了表現が分かる',
            '発言を促す表現が使える',
            '同意・反対の伝え方が分かる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'リモート会議が増えた今、Zoom や Teams での英語表現は必須スキルです。',
            },
          ],
        },
        {
          id: 'eng-3-3',
          title: 'プレゼンテーションの構成と表現',
          duration: '9:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'プレゼンの導入が自然にできる',
            'ポイントを効果的に説明できる',
            '質問に対応できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'グローバル企業では英語プレゼンが避けられません。論理的で説得力のあるプレゼンの極意を学びます。',
            },
          ],
        },
        {
          id: 'eng-3-4',
          title: '交渉・営業での英語',
          duration: '8:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            'offer と demand の違いが分かる',
            '交渉の流れを理解できる',
            '営業トークができる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'ビジネスの最前線で必要な交渉英語を習得します。',
            },
          ],
        },
        {
          id: 'eng-3-5',
          title: '会議議事録の作成',
          duration: '7:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'Minutes の構造が分かる',
            'Action items を正確に記録できる',
            '議事録に必要な英語表現が分かる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '会議後の議事録は、その会議が何だったかを正確に記すドキュメント。重要な表現を学びます。',
            },
          ],
        },
      ],
    },
    // ═══════════════════════════════════════
    // 第4章：ニュースで学ぶ時事英語
    // ═══════════════════════════════════════
    {
      id: 'eng-ch4',
      title: '第4章：ニュースで学ぶ時事英語',
      lessons: [
        {
          id: 'eng-4-1',
          title: 'BBC News で英語を学ぶコツ',
          duration: '6:45',
          videoId: '',
          isPremium: false,
          checkItems: [
            'ニュース英語の特徴が分かる',
            '難しい単語の推測ができる',
            '聞き取り精度が上がる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'BBC News は世界のニュースを英語で配信。発音も標準的で学習に最適です。',
            },
          ],
        },
        {
          id: 'eng-4-2',
          title: 'CNN・Fox News の違いと使い分け',
          duration: '7:15',
          videoId: '',
          isPremium: false,
          checkItems: [
            'ニュース放送各社の特徴が分かる',
            '視点の違いを理解できる',
            '情報収集の方法が分かる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'アメリカのニュース番組は放送局によって表現やトーンが異なります。比較学習で表現の幅を広げましょう。',
            },
          ],
        },
        {
          id: 'eng-4-3',
          title: '政治・経済ニュースの用語集',
          duration: '8:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            '経済用語が理解できる',
            '政治用語が理解できる',
            'ニュース記事が読めるようになる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '政治・経済ニュースには特有の単語と表現があります。必ずマスターしましょう。',
            },
          ],
        },
        {
          id: 'eng-4-4',
          title: '天気・スポーツニュースの英語',
          duration: '6:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            '天気予報が理解できる',
            'スポーツ用語が分かる',
            '日常的なニュースが聞き取れる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '日常的なニュース（天気・スポーツ）は聞き取りやすく、学習に最適です。',
            },
          ],
        },
        {
          id: 'eng-4-5',
          title: 'ニュース記事の読み比べ',
          duration: '7:45',
          videoId: '',
          isPremium: false,
          checkItems: [
            'ニュース記事が読める',
            '異なる視点が理解できる',
            'リーディング速度が上がる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '同じニュースを異なるメディアで読み比べることで、英語表現の多様性と思考の深度を学びます。',
            },
          ],
        },
      ],
    },
    // ═══════════════════════════════════════
    // 第5章：AI×漫画×英語の学習デザイン
    // ═══════════════════════════════════════
    {
      id: 'eng-ch5',
      title: '第5章：AI×漫画×英語の学習デザイン',
      lessons: [
        {
          id: 'eng-5-1',
          title: '英語漫画の読み方と学習効果',
          duration: '7:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            '視覚情報から文脈が推測できる',
            '会話文が自然に理解できる',
            'リーディング速度が上がる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '漫画のセリフは日常会話そのもの。視覚と組み合わせることで、より自然な英語が身につきます。',
            },
          ],
        },
        {
          id: 'eng-5-2',
          title: 'AI による英語音声生成と発音トレーニング',
          duration: '8:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            'AI生成音声と自分の発音の違いが分かる',
            '発音が改善される',
            'ネイティブに近い発音ができるようになる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'AI による音声生成技術で、ネイティブスピーカーの発音と比較練習ができます。',
            },
          ],
        },
        {
          id: 'eng-5-3',
          title: '漫画キャラの心情を英語で解読する',
          duration: '6:45',
          videoId: '',
          isPremium: false,
          checkItems: [
            'キャラクターの感情が理解できる',
            'セリフの背景にある文脈が分かる',
            'より深い読解ができるようになる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '漫画の「絵」「セリフ」「フキダシの形」から、キャラの心情を読み取ります。これは実生活の英会話でも役立つスキルです。',
            },
          ],
        },
        {
          id: 'eng-5-4',
          title: 'スラング・カジュアル表現は漫画で学ぶ',
          duration: '7:15',
          videoId: '',
          isPremium: false,
          checkItems: [
            'スラングが理解できる',
            'カジュアルな表現が使える',
            '実会話に対応できるようになる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '教科書にない「実際の会話」「スラング」「若者言葉」は漫画から学ぶのが最短です。',
            },
          ],
        },
        {
          id: 'eng-5-5',
          title: '1分問題集：漫画シーンの英作文',
          duration: '5:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            '英作文が素早くできる',
            'ライティング精度が上がる',
            'アウトプットが習慣化される',
          ],
          sections: [
            {
              type: 'info-box',
              content: '毎日1分、漫画シーンをもとに英作文練習。インプット→アウトプットの循環で、実践的な英語スキルが定着します。',
            },
          ],
        },
      ],
    },
