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
  ],
};
