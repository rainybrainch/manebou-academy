import { Category } from '@/types';

export const koreanAcademyCategory: Category = {
  id: 'korean-academy',
  title: '韓国語アカデミー',
  description: '【入門〜初級】ハングルから日常会話まで。K-POPドラマ×AIで楽しく学ぶ。全5章・25講義。',
  level: '入門',
  topicCategoryId: 'cat-korean',
  image: '/images/genres/genre-korean.png',
  courses: [
    {
      id: 'kor-ch3',
      title: '第3章：よく使う日常表現',
      lessons: [
        {
          id: 'kor-3-7',
          title: 'Lesson 7: 食べ物の注文と感想',
          duration: '8:00',
          videoId: '',
          isPremium: true,
          checkItems: [
            '食べ物の名前が言える',
            'レストランで注文できる',
            '味の感想が表現できる',
            '辛さレベルを指定できる',
            '食べ物アレルギーを伝えられる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '韓国料理は世界的に人気。レストランでの会話と食べ物の名前を学びます。辛い料理が多いので、辛さレベルの指定方法は必須スキル。',
            },
            {
              type: 'heading',
              level: 2,
              content: '韓国料理と食べ物表現',
            },
            {
              type: 'text',
              content: '**基本的な食べ物**\n- 밥 (pap) - ご飯\n- 국 (guk) - スープ\n- 반찬 (banchan) - おかず\n- 떡 (tteok) - もち\n- 면 (myeon) - 麺\n\n**代表的な韓国料理**\n- 비빔밥 (bibimbap) - ビビンバ\n- 불고기 (bulgogi) - 韓国焼肉\n- 김치 (kimchi) - キムチ\n- 떡볶이 (tteokbokki) - 辛いもち\n- 삼겹살 (samgyeopsal) - 豚の三枚肉\n\n**レストランでの表現**\n- "뭘 드시겠어요?" - 何にしますか？\n- "비빔밥 한 그릇 주세요" - ビビンバ一杯ください\n- "맛있어요!" - 美味しいです！\n- "덜 맵게 해주세요" - 辛くしてください\n- "더 맵게 해주세요" - もっと辛くしてください',
            },
            {
              type: 'highlight-box',
              title: '辛さレベルの指定方法',
              content: '- 안 맵게 (an maep-ke) - 辛くなく\n- 약간 맵게 (yakkan maep-ke) - ちょっと辛く\n- 보통 맵게 (botong maep-ke) - 普通に辛く\n- 많이 맵게 (mani maep-ke) - 辛く',
            },
            {
              type: 'heading',
              level: 2,
              content: '実践例：レストラン会話',
            },
            {
              type: 'text',
              content: '**店員：**"어서오세요! 몇 분이세요?"\n**あなた：**"두 명이에요."\n\n**店員：**"뭘 드시겠어요?"\n**あなた：**"비빔밥이랑 불고기 부탁해요. 덜 맵게 해주세요."\n\n**店員：**"음료는 어떻게 하실래요?"\n**あなた：**"콜라 두 잔 주세요."\n\n**店員：**"알겠습니다. 잠깐만요."\n\n--- 食事後 ---\n\n**あなた：**"정말 맛있었어요! 계산해주세요."\n**店員：**"감사합니다. 35,000원이에요."',
            },
          ],
        },
        {
          id: 'kor-3-8',
          title: 'Lesson 8: 季節と天気の会話',
          duration: '7:30',
          videoId: '',
          isPremium: true,
          checkItems: [
            '季節が言える',
            '天気について話せる',
            '天気予報が理解できる',
            '季節による服装の会話ができる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '韓国の四季は日本と似ています。季節と天気の語彙を習得します。また、韓国ドラマで頻出の季節感のある会話も学びます。',
            },
            {
              type: 'heading',
              level: 2,
              content: '季節と天気の基本表現',
            },
            {
              type: 'text',
              content: '**季節**\n- 봄 (bom) - 春\n- 여름 (yeoreum) - 夏\n- 가을 (gaeul) - 秋\n- 겨울 (gyeowul) - 冬\n\n**天気**\n- 맑다 (malkda) - 晴れている\n- 흐리다 (huirida) - 曇っている\n- 비가 온다 (biga onda) - 雨が降る\n- 눈이 온다 (nuni onda) - 雪が降る\n- 바람이 불다 (barami bulda) - 風が吹く\n\n**天気の会話**\n- "날씨가 어때요?" - 天気どうですか？\n- "날씨가 좋아요" - 天気がいいです\n- "오늘 춥네요" - 今日は寒いですね\n- "우산을 가져가세요" - 傘を持って行ってください',
            },
            {
              type: 'heading',
              level: 2,
              content: '実践例：天気についての会話',
            },
            {
              type: 'text',
              content: '**A：**"날씨가 정말 좋네요!"\n**B：**"맞아요. 가을이라 날씨가 최고야."\n\n**A：**"내일도 맑을까요?"\n**B：**"내일은 흐릴 거 같아. 우산 챙겨."\n\n**A：**"겨울이 언제 시작해요?"\n**B：**"12월부터지. 눈도 많이 올 거야."\n\n**A：**"정말? 스키 타러 가고 싶어!"\n**B：**"좋은 생각이야! 같이 가자!"',
            },
          ],
        },
        {
          id: 'kor-3-9',
          title: 'Lesson 9: 感情と気分の表現',
          duration: '6:45',
          videoId: '',
          isPremium: true,
          checkItems: [
            '感情が表現できる',
            '気分について説明できる',
            '相手の気分を尋ねられる',
            'ドラマで頻出の感情表現が分かる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'ドラマで頻出の感情表現を学びます。より自然な会話と、キャラの心理表現が理解できるようになります。',
            },
            {
              type: 'heading',
              level: 2,
              content: '感情と気分の表現',
            },
            {
              type: 'text',
              content: '**肯定的な感情**\n- 기쁘다 (gippeuda) - 嬉しい\n- 행복하다 (haengbokhada) - 幸せだ\n- 신나다 (sinnada) - 楽しい、ワクワクしている\n- 반갑다 (bangapda) - 嬉しい（会えて）\n\n**否定的な感情**\n- 슬프다 (seulpeuda) - 悲しい\n- 화나다 (hwanada) - 怒っている\n- 속상하다 (soksanghada) - 落ち込んでいる\n- 외롭다 (oeropda) - 寂しい\n\n**ドラマで頻出**\n- "괜찮아요" (gwaenchanhayo) - 大丈夫です\n- "미안해요" (mianhayo) - ごめんなさい\n- "사랑해요" (saranghayo) - 愛しています\n- "헤어져야 해요" (heeojyeoya haeyo) - 別れなければいけません',
            },
            {
              type: 'heading',
              level: 2,
              content: '実践例：感情表現の会話',
            },
            {
              type: 'text',
              content: '**嬉しい場面**\n**A：**"드디어 만났어!"\n**B：**"정말! 너무 반가워. 오랜만이야!"\n**A：**"나도 너무 행복해!"\n\n**悲しい場面**\n**A：**"뭐야? 왜 그렇게 슬픈 표정이야?"\n**B：**"...나 지금 정말 외로워. 혼자라고 생각해."\n**A：**"괜찮아. 내가 옆에 있어."\n\n**怒った場面**\n**A：**"넌 나한테 뭐 했어?!"\n**B：**"미안해... 정말 미안해. 화내지 마..."\n**A：**"화났지! 어떻게 날 이렇게 속상하게 할 수 있어!"',
            },
          ],
        },
      ],
    },
    {
      id: 'kor-ch4',
      title: '第4章：ハングルと基本文法',
      lessons: [
        {
          id: 'kor-4-10',
          title: 'Lesson 10: パッチムの完全マスター',
          duration: '8:30',
          videoId: '',
          isPremium: true,
          checkItems: [
            'パッチムが正しく発音できる',
            'パッチムの規則が理解できる',
            '単語の発音が正確になる',
            '激音・濃音との違いが理解できる',
            '単語末の子音が正確に聞き取れる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'ハングルの「パッチム」は日本語にない概念。文字の下に付く子音で、発音を大きく変えます。ここで完全にマスターすれば、韓国語の聞き取り・発音精度が飛躍的に向上します。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'パッチムの19種類と発音規則',
            },
            {
              type: 'text',
              content: '**一重パッチム（単一子音）- 8種**\n- ㄱ (gak) - 각 (gak) / 박 (bak)\n- ㄴ (nan) - 손 (son) / 본 (bon)\n- ㄷ (dat) - 밭 (bat) / 있다 (itda)\n- ㄹ (ral) - 달 (dal) / 물 (mul)\n- ㅁ (mem) - 감 (gam) / 섬 (seom)\n- ㅂ (bep) - 밥 (bap) / 입 (ip)\n- ㅅ (sot) - 밭 (bat) / 있다 (itda)\n- ㅇ (ng) - 방 (bang) / 생각 (saenggak)\n\n**二重パッチム（複合子音）- 11種**\n- ㄲ (ssak) - 깎다 (kkaknda)\n- ㄳ (gaks) - 값 (gap-s)\n- ㄴ (nan) - 손가락 (songarak)\n- ㄵ (nj) - 앉다 (antta)\n- ㄶ (nh) - 많다 (manhta)\n- ㄺ (lgak) - 닭 (dak)\n- ㄻ (lgm) - 삶 (sam)\n- ㄼ (lbap) - 밝다 (balda)\n- ㄽ (lbs) - 닭 (dak)\n- ㄾ (lbh) - 맑다 (malkda)\n- ㅄ (bgs) - 값 (gap)',
            },
            {
              type: 'highlight-box',
              title: 'パッチムの発音変化ルール',
              content: '**ルール1：パッチム + 母音で始まる音節**\n- パッチムは次の音節の頭に移動\n- 값이 (gap-i) → 가비 (gabi)\n- 밥을 (bab-eul) → 바블 (ba-beul)\n\n**ルール2：パッチム + 子音で始まる音節**\n- パッチムと子音が合わさって新しい音に\n- 밥 먹다 (bap meokda) → 밥먹다 (bam-meokda)\n- 닭 같다 (dak gatda) → 닭같다 (dag-gatda)\n\n**ルール3：文末でのパッチム**\n- 音が変わらずそのまま（止音）\n- 밥 (bap) - 停止音で発音\n- 책 (chaek) - 停止音で発音\n\n**ルール4：パッチムの音韻変化（複合パッチム）**\n- ㄺ → ㄹ / ㄷ に変わることもある\n- 닭 (dak) のㄺは単純に ㄷ で発音',
            },
            {
              type: 'heading',
              level: 2,
              content: 'パッチム実践例',
            },
            {
              type: 'text',
              content: '**基本単語のパッチム発音**\n- 책 (chaek) - 本（ㄱパッチム）\n- 밥 (bap) - ご飯（ㅂパッチム）\n- 손 (son) - 手（ㄴパッチム）\n- 물 (mul) - 水（ㄹパッチム）\n- 감 (gam) - 柿（ㅁパッチム）\n- 닭 (dak) - 鶏（ㄺ複合パッチム）\n\n**文中でのパッチム変化**\n- 책이 있어요 (chaeg-i iss-eo-yo) - 本があります（ㄱは次の음절へ移動→ㄱ音）\n- 밥을 먹어요 (bab-eul meog-eo-yo) - ご飯を食べます（ㅂパッチム→ㅁ音に変化）',
            },
          ],
        },
        {
          id: 'kor-4-11',
          title: 'Lesson 11: 敬語と半敬語',
          duration: '9:00',
          videoId: '',
          isPremium: true,
          checkItems: [
            '敬語の基本形が分かる',
            'タメ口と敬語を区別できる',
            '状況に応じた敬語が使える',
            'ドラマでのキャラごとの言葉遣いが理解できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '韓国語の敬語は複雑ですが、ドラマを見ると実装場面がすぐに分かります。敬語レベルによってキャラの関係性や態度が変わるため、リスニング理解に重要です。',
            },
            {
              type: 'heading',
              level: 2,
              content: '韓国語の敬語レベル5段階',
            },
            {
              type: 'text',
              content: '**Level 1: -해라체 (하라체) - 命令体（最粗）**\n- 먹어라 (meokeoura) - 食べろ\n- 가! (ga!) - 行け！\n- 用途：目上が目下を怒る、兵隊の指令\n\n**Level 2: -어/아체 (타메ぐち) - タメ口**\n- 먹어 (meok-eo) - 食べる\n- 뭐해? (mwo-hae?) - 何してるの？\n- 用途：友人、同級生、兄弟姉妹\n\n**Level 3: -요 (존댓말-요) - 敬語**\n- 먹어요 (meok-eo-yo) - 食べます\n- 어떻게 지내요? (eotteohge jinaeyo?) - お元気ですか？\n- 用途：初対面、目上の人、ビジネス\n\n**Level 4: -습니다 (존댓말-습니다) - 最敬語**\n- 먹습니다 (meokseumnida) - 食べます（正式）\n- 하십니까? (ha-sim-ni-kka?) - されますか？（最敬語）\n- 用途：フォーマルなスピーチ、ニュース、公式文書\n\n**ボーナス: -네/ㄴ데 (半敬語)**\n- 좋네요! (joh-ne-yo!) - いいですね！\n- 자네가 맞네 (jane-ga matne) - 君が正しいんだな',
            },
            {
              type: 'highlight-box',
              title: 'ドラマで学ぶ敬語',
              content: '**シーン1：上司が部下に**\n- "일을 잘 했어요" - 仕事をよくしましたね（褒める・敬語）\n- "좋은 의견 감사합니다" - いい意見ありがとうございます（最敬語）\n\n**シーン2：友人同士**\n- "어제 뭐 했어?" - 昨日何してた？（タメ口）\n- "같이 밥 먹자!" - 一緒にご飯食べようよ！（親友同士）\n\n**シーン3：恋人同士の喧嘩**\n- "헤어져야 해요" - 別れなきゃいけません（敬語だけど決意を示す）\n- "...대로 할래" - ...通りにする（強い意志）\n- "넘고 싶지 않아..." - 越えたくない... （心の奥底）\n\n**シーン4：新しい関係を始める時**\n- "저랑 사귈래요?" - 付き合ってくれませんか？（敬語・丁寧な告白）\n- "오빠한테 빠졌어" - お兄さん(相手)に惚れちゃった（タメ口・素直）',
            },
            {
              type: 'heading',
              level: 2,
              content: '敬語の応用：文脈による使い分け',
            },
            {
              type: 'text',
              content: '**同じ「愛してる」でも**\n\n**1. 敬語で告白（初デート）**\n- "저도 좋아해요..." - 私もお好きです...（慎重・真摯）\n\n**2. タメ口で告白（長く付き合った後）**\n- "난 너를 정말 사랑해..." - 僕は君を本当に愛してる...（深い・親密）\n\n**3. 最敬語で公式宣言（結婚式など）**\n- "저는 그녀를 사랑합니다" - 私は彼女を愛しています（正式・宣言的）',
            },
          ],
        },
        {
          id: 'kor-4-12',
          title: 'Lesson 12: 過去形と未来形',
          duration: '8:15',
          videoId: '',
          isPremium: true,
          checkItems: [
            '過去形が作れる',
            '未来形が作れる',
            '時制による意味の違いが理解できる',
            'ドラマの時系列が追える',
          ],
          sections: [
            {
              type: 'info-box',
              content: '時制をマスターすると、ドラマのセリフがもっと理解しやすくなります。過去フラッシュバック、現在、未来予測の3つが韓国ドラマの鉄則。時制で時間軸を読み取る能力が大切です。',
            },
            {
              type: 'heading',
              level: 2,
              content: '韓国語の時制システム',
            },
            {
              type: 'text',
              content: '**過去形 -았/었**\n- 먹었어요 (meok-eoss-eo-yo) - 食べました\n- 갔어 (gass-eo) - 行ったよ（タメ口）\n- 했던 일 (haedeon il) - 以前やったこと\n\n**現在形 -어/아요**\n- 먹어요 (meok-eo-yo) - 食べます\n- 지금 뭐 하고 있어? (jigeum mwo hago iss-eo?) - 今何してる？\n\n**未来形 -을/ㄹ 거야 または -을/ㄹ 거예요**\n- 먹을 거야 (meok-eul geoya) - 食べるつもりだ（タメ口）\n- 내일 갈 거예요 (naeil gal geo-yeyo) - 明日行きます（敬語・確定未来）\n- 아마 비가 올 거야 (ama biga ol geoya) - 多分雨が降るだろう（推測未来）\n\n**回想時制 -던**\n- 어렸을 때 (eoryeoss-eul ttae) - 子どもの頃（思い出の時）\n- 하던 일 (hadeon il) - していた仕事（昔の習慣）\n\n**完了形 -아/어 버렸어**\n- 다 먹어 버렸어! (da meok-eo beoryeoss-eo!) - 全部食べちゃった！（後悔・驚き）',
            },
            {
              type: 'highlight-box',
              title: 'ドラマで学ぶ時制',
              content: '**回想シーン（フラッシュバック）**\n- "그때 난..." (geuttae nan...) - あの時私は...\n- "하던 그 일..." (hadeon geu il...) - していたあの仕事...\n- "처음 만났을 때..." (cheoeeum mannass-eul ttae...) - 初めて会った時...\n\n**現在・重要な決定**\n- "헤어져야 해" (heeojyeoya hae) - 別れなきゃいけない\n- "사랑해" (saranghae) - 愛してる\n- "지금 이 순간이..." (jigeum i sun-gan-i...) - 今この瞬間が...\n\n**未来への不安**\n- "어떻게 될 거야?" (eotteohke doel geoya?) - どうなっちゃうんだろう？\n- "만날 수 없을까?" (mannal su eobs-eulkka?) - 会えなくなっちゃうのかな？\n- "다시 안아줄 수 있을까?" (dasi an-a-jul su iss-eulkka?) - また抱いてくれるかな？\n\n**完了形での後悔**\n- "놓쳐버렸어..." (noh-chyeobeolyeoss-eo...) - 失ってしまった...（すごく後悔）',
            },
            {
              type: 'heading',
              level: 2,
              content: 'ドラマストーリーラインの時制パターン',
            },
            {
              type: 'text',
              content: '**典型的なK-ドラマ構成**\n\n【第1話：現在】\n- "만나다" (mannada) - 主人公たちが出会う\n- "좋아하기 시작하다" (joahahi shijak-hada) - 好きになり始める\n\n【中盤：過去を知る】\n- "었다" 過去形で秘密が明かされる\n- "했던 약속" (haedeon yakssok) - かつての約束\n\n【ラスト：未来への希望】\n- "-을 거야" 未来形で希望を語る\n- "계속 옆에 있을 거야" (gyesok yeop-e iss-eul geoya) - ずっとそばにいるよ',
            },
          ],
        },
      ],
    },
    {
      id: 'kor-ch5',
      title: '第5章：K-POPドラマから学ぶ',
      lessons: [
        {
          id: 'kor-5-13',
          title: 'Lesson 13: K-POPアイドルの発言を聞き取る',
          duration: '7:45',
          videoId: '',
          isPremium: true,
          checkItems: [
            'K-POPアイドルのインタビューが理解できる',
            '若者言葉が分かる',
            'リスニング速度が上がる',
            'アイドル特有の敬語が理解できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '最新のK-POPアイドルのインタビューから、生きた韓国語と業界スラングを学びます。Instagramやファン向けメッセージも理解できるようになります。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'K-POP業界用語と若者言葉',
            },
            {
              type: 'text',
              content: '**業界用語**\n- 데뷔 (debut) - デビュー\n- 뮤직비디오 (music video) - MV\n- 앨범 (album) - アルバム\n- 콘서트 (concert) - コンサート\n- 팬클럽 (fan club) - ファンクラブ\n- 차트 (chart) - チャート\n- 스타일링 (styling) - スタイリング\n\n**若者言葉・SNS用語**\n- 뭔가 (mwunga) - なんか（フィラー）\n- 솔직히 (soljikhи) - 正直に言うと\n- 저도 (jeodo) - 私も（謙虚な表現）\n- 감사합니다 (gamsahamnida) - ありがとうございます（アイドル標準敬語）\n- 응원해 주셔서 (eung-won-hae jusyeoseo) - 応援ありがとう（ファンへの感謝）\n\n**アイドル特有表現**\n- "열심히 하겠습니다" (yeolsimhi hagesseumnida) - 精一杯頑張ります（宣言）\n- "팬 여러분들" (paen yeoreobun-deul) - ファンの皆さん（敬語・感謝）\n- "앞으로도 응원 부탁드립니다" (apeuro do eung-won butakhdeureumnida) - 今後も応援よろしくお願いします',
            },
          ],
        },
        {
          id: 'kor-5-14',
          title: 'Lesson 14: ドラマのロマンティックシーン',
          duration: '8:00',
          videoId: '',
          isPremium: true,
          checkItems: [
            'ドラマの恋愛表現が分かる',
            '告白のセリフが理解できる',
            'ロマンティックな表現が使える',
            '感情の起伏を声トーンで読み取れる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '韓国ドラマの醍醐味・恋愛シーン。感動的なセリフと、その心理背景を学びます。同じセリフでも、敬語と タメ口では意味が全く違うことも重要。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'ドラマの定番ロマンティック表現',
            },
            {
              type: 'text',
              content: '**告白表現**\n- 사랑해요 (saranghae-yo) - 愛しています（敬語・初告白に最適）\n- 사랑해 (saranghae) - 愛してる（タメ口・深い関係で使う）\n- 난 너를 사랑해 (nan neoreul saranghae) - 僕は君を愛している（直接的）\n\n**謝罪と和解**\n- 미안해요 (mianhae-yo) - ごめんなさい\n- 미안해 (mianhae) - ごめん（より親密）\n- 다시 만나도 될까? (dasi mannado doelkka?) - また会える？（別れた相手へ）\n\n**約束と願い**\n- 기다릴게요 (gidaril-ge-yo) - 待っています（敬語）\n- 기다릴게 (gidaril-ge) - 待ってるよ（タメ口）\n- 같이 있고 싶어요 (gachi-issgo-sip-eo-yo) - 一緒にいたいです\n- 절대 떠나지 마 (jeoldae tteonaji ma) - 絶対離れないで（切実）\n\n**別れのセリフ**\n- 헤어져야 해요 (heeojyeoya hae-yo) - 別れなきゃいけません（決意）\n- 미안해... 난 가야 해 (mianhae... nan gaya hae) - ごめん... 僕は行かなきゃいけない',
            },
            {
              type: 'highlight-box',
              title: 'シーン別：心理背景を読む',
              content: '**雨のシーン：涙が止まらない告白**\n- "난 너... 너 없이는 살 수 없어..." - 僕は君なしでは生きられない...（極限の心情）\n\n**夜の屋上：決意のセリフ**\n- "이제부터 나 옆에만 있어" - これからは僕のそばにいてね（強い願い）\n\n**別れのシーン：涙で言葉が出ない**\n- (沈黙 + 涙) が最も強いロマンス表現',
            },
          ],
        },
        {
          id: 'kor-5-15',
          title: 'Lesson 15: 1分問題集：ドラマシーンの翻訳',
          duration: '5:30',
          videoId: '',
          isPremium: true,
          checkItems: [
            '短い会話が翻訳できる',
            'ドラマのセリフを日本語化できる',
            '理解が深まる',
            'ニュアンスの違いが分かる',
            'ドラマを字幕なしで理解できるようになる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '毎日1分、ドラマのシーンを翻訳。字幕なしでドラマが楽しめるようになります。短いセリフだからこそ、敬語・タメ口・スラングの微妙なニュアンスが学べる。',
            },
            {
              type: 'heading',
              level: 2,
              content: '1分問題集のサイクル',
            },
            {
              type: 'text',
              content: '**Step 1: ドラマシーンを見る（15秒）**\n- 字幕ありで、シーンと感情を理解\n- キャラクターの表情から心情を推測\n\n**Step 2: 字幕なしで聞き取り（20秒）**\n- 何度か聞き返してOK\n- 単語を聞き取ろうとするのではなく、全体のリズムを感じる\n\n**Step 3: 翻訳に挑戦（15秒）**\n- 字幕や辞書を使わずに意訳する\n- 完璧な翻訳ではなく、「どういう気持ちで言ってるのか」が重要\n\n**Step 4: 解答例と比較（10秒）**\n- 提供された翻訳を確認\n- 敬語選択・タメ口・スラングがなぜそう訳されたか理解\n\n**Step 5: AI フィードバック（5秒）**\n- 発音の正確さ\n- より自然な敬語表現の提案\n- 文化的背景の説明',
            },
            {
              type: 'highlight-box',
              title: '例題：ドラマシーン翻訳',
              content: '**【原文】**\nA: "너 왜 이래?"\nB: "난 모르겠어..."\n\n**【意訳案】**\nA: "お前どうしたんだよ？"（タメ口・親友同士）\nB: "わかんない..." （切実感）\n\n**【解説】**\n- "너 왜 이래?" は友人同士のタメ口\n- 「お前」という日本語は敵意ではなく、親密さの表現\n- "난 모르겠어" は「わかんない」ではなく「どうしたらいいかわかんない」という絶望感',
            },
          ],
        },
      ],
    },
  ],
};
