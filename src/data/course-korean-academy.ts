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
          isPremium: false,
          checkItems: [
            '食べ物の名前が言える',
            'レストランで注文できる',
            '味の感想が表現できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '韓国料理は世界的に人気。レストランでの会話と食べ物の名前を学びます。',
            },
            {
              type: 'heading',
              level: 2,
              content: '韓国料理と食べ物表現',
            },
            {
              type: 'text',
              content: '**基本的な食べ物**\n- 밥 (pap) - ご飯\n- 국 (guk) - スープ\n- 반찬 (banchan) - おかず\n- 떡 (tteok) - もち\n- 면 (myeon) - 麺\n\n**レストランでの表現**\n- "뭘 드시겠어요?" - 何にしますか？\n- "비빔밥 한 그릇 주세요" - ビビンバ一杯ください\n- "맛있어요!" - 美味しいです！',
            },
          ],
        },
        {
          id: 'kor-3-8',
          title: 'Lesson 8: 季節と天気の会話',
          duration: '7:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            '季節が言える',
            '天気について話せる',
            '天気予報が理解できる',
          ],
          sections: [
            {
              type: 'info-box',
              content: '韓国の四季は日本と似ています。季節と天気の語彙を習得します。',
            },
          ],
        },
        {
          id: 'kor-3-9',
          title: 'Lesson 9: 感情と気分の表現',
          duration: '6:45',
          videoId: '',
          isPremium: false,
          checkItems: [
            '感情が表現できる',
            '気分について説明できる',
            '相手の気分を尋ねられる',
          ],
          sections: [
            {
              type: 'info-box',
              content: 'ドラマで頻出の感情表現を学びます。より自然な会話に。',
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
          ],
          sections: [
            {
              type: 'info-box',
              content: 'ハングルの「パッチム」は日本語にない概念。ここで完全にマスターします。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'パッチムの19種類',
            },
            {
              type: 'text',
              content: '**一重パッチム（単一子音）**\n- ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ\n- 각 (gak) - 各\n- 손 (son) - 手\n\n**二重パッチム（複合子音）**\n- ㄲ, ㄳ, ㄴ, ㄵ, ㄶ, ㄺ, ㄻ, ㄼ, ㄽ, ㄾ, ㄿ, ㅀ, ㅁ, ㅄ\n- 값 (gap) - 値段\n- 닭 (dak) - 鶏',
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
          ],
          sections: [
            {
              type: 'info-box',
              content: '韓国語の敬語は複雑です。ドラマで頻出の3つのレベルを学びます。',
            },
            {
              type: 'heading',
              level: 2,
              content: '韓国語の敬語レベル',
            },
            {
              type: 'text',
              content: '**ー요/ー습니다 (敬語)**\n- 먹어요 (meok-eo-yo) - 食べます（敬語）\n- 하십니까? (ha-sim-ni-kka?) - されますか？（最敬語）\n\n**ー어/ー아 (タメ口）**\n- 먹어 (meok-eo) - 食べる\n- 뭐해? (mwo-hae?) - 何してるの？\n\n**ー네 (半敬語）**\n- 좋네요! (joh-ne-yo!) - いいですね！',
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
          ],
          sections: [
            {
              type: 'info-box',
              content: '時制をマスターすると、ドラマのセリフがもっと理解しやすくなります。',
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
          ],
          sections: [
            {
              type: 'info-box',
              content: '最新のK-POPアイドルのインタビューから、生きた韓国語を学びます。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'K-POP業界用語',
            },
            {
              type: 'text',
              content: '- 데뷔 (debut) - デビュー\n- 뮤직비디오 (music video) - MV\n- 앨범 (album) - アルバム\n- 콘서트 (concert) - コンサート\n- 팬클럽 (fan club) - ファンクラブ',
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
          ],
          sections: [
            {
              type: 'info-box',
              content: '韓国ドラマの醍醐味・恋愛シーン。感動的なセリフを学びます。',
            },
            {
              type: 'heading',
              level: 2,
              content: 'ドラマの定番ロマンティック表現',
            },
            {
              type: 'text',
              content: '- 사랑해요 (saranghae-yo) - 愛しています\n- 미안해요 (mianhae-yo) - ごめんなさい\n- 기다릴게요 (gidaril-ge-yo) - 待っています\n- 같이 있고 싶어요 (gachi-issgo-sip-eo-yo) - 一緒にいたいです',
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
          ],
          sections: [
            {
              type: 'info-box',
              content: '毎日1分、ドラマのシーンを翻訳。実践的な韓国語スキルが定着します。',
            },
          ],
        },
      ],
    },
  ],
};
