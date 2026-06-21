import { Category } from '@/types';

export const englishAcademyCategory: Category = {
  id: 'english-academy',
  title: '英語アカデミー',
  description: '【入門〜初級】日常英会話から実務英語まで。ニュース×AI×漫画で楽しく学ぶ。全5章・25講義・完全サポート。発音→日常会話→ビジネス英語→時事ニュース→1分問題集で、360度全方位の英語スキルが定着する。マネぼう塾の最新教育メソッドで、1ヶ月で基礎完成。',
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
            'IPA（国際音声記号）が読める',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'こんにちは！英語を学ぶ第一歩は「正しい発音」です。英語には日本語にない音がたくさんあります。この講義では、基本となる5つの母音をしっかり身につけましょう。',
            },
            {
              type: 'heading',
              level: 2,
              content: '5つの基本母音と発音記号',
            },
            {
              type: 'text',
              content: '英語の短母音 5つ\n\n1. **[æ]** - a音\n   - cat /kæt/、apple /ˈæpəl/、hand /hænd/\n   - 口の形：広く開く、舌は前へ\n\n2. **[e]** - e音\n   - bed /bed/、pen /pen/、red /red/\n   - 口の形：やや開く、唇は中立\n\n3. **[ɪ]** - i音\n   - sit /sɪt/、big /bɪg/、lip /lɪp/\n   - 口の形：狭く、唇は中立\n\n4. **[ɑ:]** - o音\n   - dog /dɑ:g/、box /bɑ:ks/、hot /hɑ:t/\n   - 口の形：大きく開く、舌は奥へ\n\n5. **[ʌ]** - u音\n   - cup /kʌp/、bus /bʌs/、fun /fʌn/\n   - 口の形：少し開く、舌は中央',
            },
            {
              type: 'highlight-box',
              title: 'ポイント：日本語「あ・い・う・え・お」との違い',
              content: '日本語の「あ」と英語の「a [æ]」は違う音です。英語を話すときは、まず正確な音を「聞く」→「自分で発音してみる」→「録音して比較」の3ステップで習得します。',
            },
          ],
        },
        {
          id: 'eng-1-2',
          title: 'アルファベット26文字の正しい発音',
          duration: '7:00',
          videoId: '',
          isPremium: true,
          checkItems: [
            'A～Z を正しく発音できる',
            'アルファベットと単語の関連性が理解できる',
            'spelling を聞いて綴字できる',
            '文字の名前と音声の違いが区別できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'アルファベットの「文字の名前」と「単語での音声」は全く違います。この講義で、26文字をすべてマスターしましょう。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'A～Z の発音体系と記号',
            },
            {
              type: 'text',
              content: '**グループ1：[i:] で終わる文字**\n- B, C, D, E, F, G, P, T, V, Z [bi:, si:, di:, i:, ef, dʒi:, pi:, ti:, vi:, zed]\n\n**グループ2：[ɛ] で終わる文字**\n- A, H, J, K, R [ei, eitʃ, dʒei, kei, ɑ:r]\n\n**グループ3：その他**\n- I, O, Q, U, W, X, Y [ai, oʊ, kju:, ju:, dʌbəl ju:, eks, wai]\n\n**母音グループ（単独）**\n- A [ei], E [i:], I [ai], O [oʊ], U [ju:]',
            },
            {
              type: 'highlight-box',
              title: 'プレミアム：実践練習',
              content: 'このセクションでは：\n- 各文字の発音を繰り返し練習\n- ネイティブ音声との聞き比べ\n- Spelling dictation（聞き取り綴字）\n- 名前や単語の綴字クイズ',
            },
          ],
        },
        {
          id: 'eng-1-3',
          title: 'リンキング（音のつながり）',
          duration: '5:30',
          videoId: '',
          isPremium: true,
          checkItems: [
            'リンキングの基本ルールが分かる',
            '実際の会話で音のつながりを聞き取れる',
            'より自然な英語を話せるようになる',
            '連続音の3パターンが識別できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'ネイティブスピーカーは単語を一つずつ発音しません。音と音が「つながる」ことで、自然な英語になります。これが聞き取れないと、ネイティブ速度の会話についていけません。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'リンキングの3パターン',
            },
            {
              type: 'text',
              content: '**パターン1：子音 + 母音**\n- want + to = "wanna" /wɑnə/\n- got + a = "gotta" /ɡɑtə/\n- gotta go!\n\n**パターン2：同じ音が連続**\n- not + ten = "notten" (tが1つに)\n- does + she = "dushe" (sが延長)\n\n**パターン3：音の同化**\n- miss + you = "missyou"\n- did + you = "didya"',
            },
          ],
        },
        {
          id: 'eng-1-4',
          title: 'イントネーション（音の高さ）',
          duration: '6:00',
          videoId: '',
          isPremium: true,
          checkItems: [
            '疑問文のイントネーションが理解できる',
            '強調のイントネーション使い分けられる',
            'より自然な発音ができる',
            '感情がイントネーションで伝わることが理解できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '同じ単語でも、音の高さを変えると意味が変わることがあります。イントネーションはネイティブのような自然な英語を話すカギです。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'イントネーションの3つの基本パターン',
            },
            {
              type: 'text',
              content: '**1. 上昇イントネーション（↗️）**\n- 疑問文：You like coffee?\n- 不確実さ：I think it\'s around here?\n- 文末が上がる = 質問や不確実さを表現\n\n**2. 下降イントネーション（↘️）**\n- 肯定文：That\'s great.\n- 確定情報：The meeting is at 3 PM.\n- 文末が下がる = 確実さや終了を表現\n\n**3. 平坦イントネーション（→）**\n- リスト：I need apples, oranges, and bananas.\n- 中立：He said he would come.\n- 平坦 = 中立的な情報を表現',
            },
          ],
        },
        {
          id: 'eng-1-5',
          title: 'ストレス（アクセント）の位置',
          duration: '5:45',
          videoId: '',
          isPremium: true,
          checkItems: [
            '単語のストレスの位置が分かる',
            'ストレスを正しく発音できる',
            '聞き取り精度が上がる',
            'ストレスで意味が変わる単語が分かる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '「バナナ」と「パナマ」は同じ音の繰り返しですが、ストレス（どこに力を入れるか）が違いますね。英語でも同じです。ストレスがズレると、ネイティブに通じません。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'ストレスで意味が変わる単語',
            },
            {
              type: 'text',
              content: '**produce vs produce**\n- PRO-duce (PROduct) - 名詞：商品\n- pro-DUCE (produce) - 動詞：生産する\n\n**record vs record**\n- RE-cord (ReCording) - 名詞：記録\n- re-CORD (recording) - 動詞：記録する\n\n**read vs read**\n- READ (present) - 現在形：読む\n- red (past) - 過去形：読んだ（発音は「レッド」）\n\n**stress vs stress**\n- STRESS (noun) - 名詞：ストレス\n- stress (verb) - 動詞：強調する\n\n**ストレス位置のルール**\n- 一般的に、2音節単語：最初の音にストレス（PRE-sent）\n- 3音節以上：特定のパターンがある（im-POR-tant, dic-TION-ar-y）',
            },
            {
              type: 'highlight-box',
              title: 'ストレスの聞き分け練習',
              content: 'ネイティブスピーカーはストレスの位置で単語を判断しています。\n- 聞き取り不正確 → ストレスの位置が違う\n- 発音が通じない → ストレスを間違えている\n\n各単語を何度も聞いて、「力が入る音」を認識することが重要です。',
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
            '時間帯による挨拶の使い分けができる',
            'フォーマル vs カジュアルの区別ができる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '「Hello」は最も基本的な挨拶です。この講義で、自然な挨拶と自己紹介をマスターしましょう。',
            },
            {
              type: 'heading',
              level: 2,
              content: '基本的な挨拶フレーズ',
            },
            {
              type: 'text',
              content: '**時間帯による挨拶の使い分け**\n\n1. **朝（6:00～12:00）**\n   - Good morning! / おはよう\n   - 例：Good morning! How are you today?\n\n2. **昼（12:00～17:00）**\n   - Good afternoon! / こんにちは\n   - 例：Good afternoon! Nice to meet you.\n\n3. **夜（17:00～深夜）**\n   - Good evening! / こんばんは\n   - 例：Good evening! I\'m happy to see you.\n\n4. **就寝時**\n   - Good night! / おやすみなさい\n   - ※相手が寝るときに言う（別れの挨拶）\n\n5. **時間帯不問**\n   - Hello! / Hey! / Hi!\n   - カジュアルな場面で使える',
            },
            {
              type: 'highlight-box',
              title: 'フォーマル vs カジュアル',
              content: '**フォーマル**（初対面・ビジネス・目上の人）\n- Good morning. My name is John.\n- It\'s a pleasure to meet you.\n\n**カジュアル**（友人・家族）\n- Hey! What\'s up?\n- I\'m Tom. Nice to meet you!',
            },
          ],
        },
        {
          id: 'eng-2-2',
          title: '「How are you?」への答え方',
          duration: '6:45',
          videoId: '',
          isPremium: true,
          checkItems: [
            '「How are you?」に自然に答えられる',
            '会話を続けるための返答ができる',
            '相手の状態を聞き出せる',
            'フォーマル〜カジュアルの表現が区別できる',
            '自然な会話の流れが作れる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '「I\'m fine, thank you」と答えるだけでは、会話は続きません。自然な返答方法と、会話を広げるテクニックを学びましょう。',
            },
            {
              type: 'heading',
              level: 2,
              content: '「How are you?」への自然な答え方',
            },
            {
              type: 'text',
              content: '**フォーマルな返答**\n- I\'m doing well, thank you. How about yourself?\n- Very good, thank you for asking. And you?\n\n**カジュアルな返答**\n- I\'m good, thanks!\n- Pretty well, thanks for asking.\n- Not bad, you know.\n- Can\'t complain!\n\n**会話を広げる返答**\n- I\'m doing great! Just finished a project. How are you?\n- I\'ve been pretty busy lately, but I\'m hanging in there. What about you?\n- I\'m excited! We\'re going on vacation next week. How\'ve you been?',
            },
            {
              type: 'highlight-box',
              title: 'ポイント：逆質問が重要',
              content: '英語の会話では、相手に質問を返すことが会話を続けるカギです。\n"How are you?" → "I\'m good, thanks! How are you?" のように、必ず相手にも聞き返しましょう。',
            },
          ],
        },
        {
          id: 'eng-2-3',
          title: '買い物での英語表現',
          duration: '7:30',
          videoId: '',
          isPremium: true,
          checkItems: [
            '店員と会話ができる',
            '商品の説明を理解できる',
            'お金の会話ができる',
            'セールや割引を理解できる',
            '商品説明文が読める',
          ],
          sections: [
            {
              type: 'info-box',
              content: '海外の店で買い物するときに必要な英語を学びます。実践的な会話パターンで、スーパー・百貨店・オンラインショップで対応できる力を養います。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'ショッピング会話の実例',
            },
            {
              type: 'text',
              content: '**シーン1：商品を探す**\n- Customer: \"Where can I find the sweaters?\"\n- Staff: \"They\'re in the menswear section, second floor.\"\n\n**シーン2：サイズ・色確認**\n- \"Do you have this in blue?\" / \"What sizes are available?\"\n- \"We have XS, S, M, L, and XL.\"\n\n**シーン3：試着**\n- \"Where is the fitting room?\" / \"May I try this on?\"\n\n**シーン4：会計**\n- \"How much is this?\" / \"Do you have a discount code?\"\n- \"That\'ll be $45.99 total.\"',
            },
            {
              type: 'highlight-box',
              title: 'プレミアム：ロールプレイとクイズ',
              content: '- 実際の店員とのロールプレイ動画\n- セール・割引フレーズの詳細解説\n- 商品説明文の読解問題\n- カスタマーレビューの理解練習',
            },
          ],
        },
        {
          id: 'eng-2-4',
          title: 'レストランでの注文',
          duration: '7:00',
          videoId: '',
          isPremium: true,
          checkItems: [
            'メニューが読める',
            '注文ができる',
            '食事の好みを伝えられる',
            'アレルギー・デイエットを説明できる',
            'ウェイターとのトラブル時に対応できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'レストランで使える実用的な英語フレーズを習得します。海外旅行や英語圏での生活で必須のスキル。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'レストラン会話の流れ',
            },
            {
              type: 'text',
              content: '**ステップ1：到着**\n- "Table for two, please." - 2人です\n- "Do you have a reservation?" - ご予約はありますか？\n- "We have a 7 o\'clock reservation under the name Smith." - 7時にスミスの名義で予約があります\n\n**ステップ2：メニュー確認**\n- "Can I see the menu?" - メニューをください\n- "What do you recommend?" - おすすめは何ですか？\n- "What\'s in this dish?" - このディッシュには何が入っていますか？\n\n**ステップ3：注文**\n- "I\'ll have the salmon with a side of vegetables." - サーモンと野菜添えをください\n- "Medium rare, please." - ミディアムレアでお願いします\n- "Can I get that without the sauce?" - ソースなしでもらえますか？\n\n**ステップ4：食事中＆食後**\n- "How is your meal?" - 食事はいかがですか？\n- "It\'s delicious!" - 美味しいです！\n- "The check, please." - お勘定をお願いします',
            },
            {
              type: 'highlight-box',
              title: 'アレルギー・食事制限の伝え方',
              content: '- I\'m allergic to peanuts. - ピーナッツアレルギーがあります\n- I\'m vegetarian. - ベジタリアンです\n- I don\'t eat gluten. - グルテンは食べません\n- Can you make it without dairy? - 乳製品なしでお願いできますか？\n- Is this dish spicy? - このディッシュは辛いですか？',
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
            'メール件名のルールが分かる',
            'フォーマットエラーをなくせる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'ビジネスメールは日本語でも英語でも、失礼のない構成が必要です。正しいメールの書き方を学びましょう。',
            },
            {
              type: 'highlight-box',
              title: 'ビジネスメールの5つの構成要素',
              content: '1. **件名（Subject Line）** - 明確で簡潔\n2. **挨拶（Greeting）** - Dear Mr./Ms.\n3. **本文（Body）** - 3つの段落（導入・本論・結論）\n4. **結び（Closing）** - Best regards, Sincerely,\n5. **署名（Signature）** - フルネーム＋役職',
            },
            {
              type: 'heading',
              level: 2,
              content: 'ビジネスメール実例',
            },
            {
              type: 'text',
              content: '**Subject: Meeting Request - Project Alpha Next Steps**\n\nDear Mr. Anderson,\n\nI hope this email finds you well. I am writing to propose a meeting to discuss the next phase of Project Alpha.\n\nWould you be available on Thursday, June 23rd at 2:00 PM EST? I believe we have several important items to cover, including timeline and deliverables.\n\nPlease let me know if this time works for you, or feel free to suggest an alternative.\n\nBest regards,\nTanaka Yoshiko\nProject Manager\nRB Academy Inc.',
            },
          ],
        },
        {
          id: 'eng-3-2',
          title: '電話会議での英語表現',
          duration: '7:30',
          videoId: '',
          isPremium: true,
          checkItems: [
            '会議の開始・終了表現が分かる',
            '発言を促す表現が使える',
            '同意・反対の伝え方が分かる',
            'Zoom/Teams 特有の表現が分かる',
            '会議を円滑に進められる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'リモート会議が増えた今、Zoom や Teams での英語表現は必須スキルです。技術的な問題への対応や、効率的な会議進行ができるようになります。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'リモート会議の基本表現',
            },
            {
              type: 'text',
              content: '**会議開始時**\n- "I think we\'re all here. Let\'s get started."\n- "Can everyone see and hear me okay?"\n- "Let\'s do a quick roll call. Who\'s joining us today?"\n\n**発言の促促し**\n- "John, what\'s your take on this?"\n- "Does anyone have thoughts on this proposal?"\n- "Let\'s hear from the Asia team."\n\n**同意・反対**\n- I agree with that.\n- I don\'t quite see it that way.\n- That makes sense to me.\n- I have a concern about...\n\n**技術的な問題対応**\n- "Can you repeat that? Your audio cut out."\n- "I think you\'re on mute."\n- "Let\'s move to the next slide."',
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
            'BBC のウェブサイトを活用できる',
            'ニュース記事を精読できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'BBC News は世界のニュースを英語で配信。発音も標準的で学習に最適です。イギリス英語を学べるボーナスも。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'BBC で学ぶメリット',
            },
            {
              type: 'text',
              content: '1. **発音が標準的**（Received Pronunciation - RP）\n   - 明確で聞き取りやすい\n   - 国際的に理解しやすい\n\n2. **語彙が豊か**\n   - アメリカ英語とは異なる単語使い\n   - より高度な表現が学べる\n\n3. **ニュースの信頼性**\n   - 正確な情報で学習できる\n   - 背景知識がつく\n\n4. **Web 版とアプリ**\n   - www.bbc.com/news\n   - BBC Learning English（専用チャンネル）\n   - 字幕・スクリプト完備',
            },
            {
              type: 'highlight-box',
              title: '学習方法：段階別アプローチ',
              content: '**初級**：BBC Learning English の短編（3-5分）で基本表現\n**中級**：BBC News の30秒ニュース（字幕付き）で日常語彙\n**上級**：BBC News の長編報道（字幕なし）でネイティブ速度',
            },
          ],
        },
        {
          id: 'eng-4-2',
          title: 'CNN・Fox News の違いと使い分け',
          duration: '7:15',
          videoId: '',
          isPremium: true,
          checkItems: [
            'ニュース放送各社の特徴が分かる',
            '視点の違いを理解できる',
            '情報収集の方法が分かる',
            '放送局の政治的立場が理解できる',
            'バイアスを認識できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'アメリカのニュース番組は放送局によって表現やトーンが異なります。比較学習で表現の幅を広げ、メディアリテラシーも身につけましょう。',
            },
            {
              type: 'heading',
              level: 2,
              content: '主要ニュース放送局の特徴',
            },
            {
              type: 'text',
              content: '**CNN (Cable News Network)**\n- 政治的立場：中立（やや左寄り）\n- 特徴：24時間ニュース、国際的視点\n- 言語レベル：中〜上級\n- 人気番組：Anderson Cooper 360°\n\n**Fox News**\n- 政治的立場：保守的（右寄り）\n- 特徴：アメリカ国内ニュース重視、論評的\n- 言語レベル：初〜中級\n- 人気番組：Hannity\n\n**NBC News / MSNBC**\n- 政治的立場：リベラル（左寄り）\n- 特徴：調査報道に力を入れる\n- 言語レベル：中級\n- 人気番組：Meet the Press',
            },
            {
              type: 'highlight-box',
              title: 'プレミアム：バイアスを理解する',
              content: 'ニュースを学習教材として使う際は、複数の放送局を比較することが重要です。同じ事件でもCNNとFox Newsで異なる視点から報道されます。これは「複数視点から情報を集める」というスキルを養います。',
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
          isPremium: true,
          checkItems: [
            '視覚情報から文脈が推測できる',
            '会話文が自然に理解できる',
            'リーディング速度が上がる',
            'スラングと標準英語を区別できる',
            'キャラクターの人格から言葉選びが理解できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '漫画のセリフは日常会話そのもの。視覚と組み合わせることで、より自然な英語が身につきます。教科書にない「生きた英語」が豊富です。',
            },
            {
              type: 'heading',
              level: 2,
              content: '漫画で学ぶメリット',
            },
            {
              type: 'text',
              content: '1. **コンテキストが明確**\n   - 絵からキャラの感情が分かる\n   - 状況が視覚的に理解できる\n   - 単語の意味が推測しやすい\n\n2. **自然な会話表現**\n   - スラングが豊富\n   - 短縮形（gonna, wanna）がよく出る\n   - 実際の日常会話を学べる\n\n3. **キャラクター学習**\n   - キャラによって言葉遣いが異なる\n   - 年代・職業による表現の違いが学べる\n   - 同じ感情でも表現方法は複数ある',
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
            '文法エラーを自分で見つけられる',
            'ネイティブチェックで改善できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '毎日1分、漫画シーンをもとに英作文練習。インプット→アウトプットの循環で、実践的な英語スキルが定着します。',
            },
            {
              type: 'heading',
              level: 2,
              content: '1分問題集のサイクル',
            },
            {
              type: 'text',
              content: '**Step 1: 漫画シーンを見る（15秒）**\n- 絵とセリフから状況を把握\n- 主人公の感情を推測\n\n**Step 2: 英作文に挑戦（30秒）**\n- 漫画のセリフを英語で言い換える\n- または、次のセリフを予想する\n\n**Step 3: 解答例と比較（10秒）**\n- 提供された解答例を確認\n- 自分の作文との違いを分析\n\n**Step 4: AI フィードバック（5秒）**\n- 文法エラーのチェック\n- より自然な表現の提案',
            },
            {
              type: 'highlight-box',
              title: 'なぜ漫画で学ぶのか',
              content: '**利点1：コンテキストが明確**\n- 絵から状況がすぐに分かる\n- 推測力が養われる\n\n**利点2：会話が自然**\n- スラング・カジュアル表現が豊富\n- リアルな英語を学べる\n\n**利点3：毎日続けやすい**\n- 短編（1分）だから習慣化しやすい\n- ゲーム感覚で楽しめる',
            },
          ],
        },
      ],
    },
