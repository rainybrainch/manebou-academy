import { Category } from '@/types';
import { moneyKnowledgeCategory } from './course-money-knowledge';
import { stockIntroCategory } from './course-stock-intro';
import { zaiCategory } from './course-zai';
import { moneyBasicsFullCategory } from './course-money-basics-full';
import { economicsCategory } from './course-economics';
import { politicsCategory } from './course-politics';
import { investmentAdvancedCategory } from './course-investment-advanced';
import { indexFundsCategory } from './course-index-funds';
import { moneyHouseholdCategory } from './course-money-household';
import { moneyTaxCategory } from './course-money-tax';
import { moneyInsuranceCategory } from './course-money-insurance';
import { moneyLifeplanCategory } from './course-money-lifeplan';
import { examPublicCategory } from './course-exam-public';
import { boardgameMonopolyCategory } from './course-boardgame-monopoly';
import { dividendStocksCategory } from './course-dividend-stocks';

const nisaBasicsCategory: Category = {
  id: 'nisa-basics',
  title: 'NISAで始める資産運用入門',
  description: '新NISA制度を活用した投資の基礎知識を分かりやすく解説します。',
  level: '入門',
  topicCategoryId: 'cat-investment',
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
            '非課税メリットの大きさを数字で理解した',
          ],
          sections: [
            { type: 'info-box', content: 'この講座では、2024年から始まった新NISA制度の基本的な仕組みとメリット・デメリットを学びます。' },
            { type: 'heading', level: 2, content: 'NISAの基本的な仕組み' },
            { type: 'text', content: 'NISA（ニーサ）とは「少額投資非課税制度」のことで、通常約20%かかる投資の利益への税金がゼロになる制度です。2024年から「新NISA」として大幅に拡充されました。' },
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
            { type: 'heading', level: 2, content: '非課税の効果はどれくらい？' },
            { type: 'text', content: '例えば100万円を投資して30万円の利益が出た場合、通常口座では約6万円（20%）が税金として引かれます。NISAなら30万円まるごと手元に残ります。長期になるほど差は大きくなります。' },
            {
              type: 'practice',
              question: '月3万円を年利5%で30年間NISAで積み立てた場合と、通常の課税口座で積み立てた場合の手取り差額はいくらになりますか？（複利計算・運用益に対して20%の税金が引かれる前提で考えてみましょう）',
              auxiliaryPrompt: 'NISAの非課税効果について、月3万円・年利5%・30年積立のケースで試算してください。積立元本・運用益・通常口座での税額・NISAの手取り優位額を計算してください。',
              answer: '元本：3万円×12ヶ月×30年＝1080万円。年利5%複利での運用後の資産は約2490万円。運用益は約1410万円。通常口座では運用益1410万円×20%≒282万円が税金で引かれる。NISAなら非課税なので2490万円を全額手取り。差額は約282万円。30年間コツコツ続けることでNISAと課税口座の差は数百万円規模になります。',
            },
            {
              type: 'glossary',
              terms: [
                { term: 'NISA（少額投資非課税制度）', definition: '投資の運用益・配当が非課税になる日本の制度。2024年から新NISAとして大幅拡充。年間360万円（つみたて120万+成長投資240万）・生涯1800万円まで非課税で運用できる。' },
                { term: '非課税期間', definition: '投資利益が税金から免除される期間。旧NISAは期間が限定されていたが、新NISAは無期限。長期保有するほど複利効果が非課税のまま積み上がる。' },
                { term: '源泉徴収', definition: '証券口座では投資利益から自動的に約20%（所得税15%+住民税5%）が差し引かれる仕組み。NISA口座では源泉徴収が発生しない。' },
              ],
            },
            { type: 'summary', content: 'NISAは長期・積立・分散投資に最適な制度です。早く始めるほど複利効果が高まります。', nextLesson: '次の講座では、NISAで買える商品の選び方を学びます。' },
          ],
        },
        {
          id: 'l2',
          title: 'NISAで買える商品の選び方',
          duration: '10:30',
          videoId: 'dQw4w9WgXcQ',
          isPremium: false,
          checkItems: [
            'つみたて投資枠と成長投資枠の違いを理解した',
            'インデックスファンドの特徴を把握できた',
            '商品選びの基準（コスト・分散）がわかった',
          ],
          sections: [
            { type: 'info-box', content: 'NISAには「つみたて投資枠」と「成長投資枠」の2種類があります。それぞれで買える商品が異なります。' },
            { type: 'heading', level: 2, content: '2つの投資枠の違い' },
            {
              type: 'highlight-box',
              title: 'つみたて投資枠 vs 成長投資枠',
              items: [
                'つみたて投資枠：年120万円・長期積立向けの投信のみ・低コスト',
                '成長投資枠：年240万円・株・ETF・幅広い投信が対象',
                '両方同時利用OK：合計年360万円まで',
              ],
            },
            { type: 'heading', level: 2, content: 'インデックスファンドがおすすめの理由' },
            { type: 'text', content: '初心者にはインデックスファンド（指数に連動する投資信託）がおすすめです。理由は3つ：①コストが低い（信託報酬0.1%以下も）②分散が自動でできる③長期実績が安定している。' },
            {
              type: 'practice',
              question: '「信託報酬0.1%のインデックスファンド」と「信託報酬1.5%のアクティブファンド」に同じ100万円を30年間投資した場合、費用の差額はいくらになるか計算してください。なぜコストが重要なのか説明してください。',
              auxiliaryPrompt: '投資信託の信託報酬（年率0.1%vs1.5%）を30年間・100万円投資で比較した場合の費用差と、長期投資においてコストが重要な理由を説明してください。',
              answer: '簡易計算：年率1.5%と0.1%の差は1.4%。100万円に30年間で複利的に影響する。100万円×(1.4%×30年)の単純計算でも42万円。複利効果を考慮すると実際の差は60万円以上になることもある。なぜコストが重要か：コストは「確実にかかるマイナス」。市場リターンは不確実だが信託報酬は毎年確実に引かれる。低コストファンドを選ぶだけで30年で数十万〜100万円以上の差になる。',
            },
            {
              type: 'glossary',
              terms: [
                { term: 'インデックスファンド', definition: '日経平均やS&P500などの指数に連動した投資信託。低コストで広範囲に分散投資できる。' },
                { term: '信託報酬', definition: '投資信託を保有し続ける間かかる費用。年率で表示され、低いほど有利。' },
                { term: 'アクティブファンド', definition: '市場平均を上回ることを目指して運用されるファンド。コストが高い傾向がある。' },
              ],
            },
            { type: 'summary', content: 'まず「つみたて投資枠」でコストの低いインデックスファンドを選ぶのが初心者の鉄則です。', nextLesson: '次の講座では、実際の口座開設と積立設定の手順を学びます。' },
          ],
        },
        {
          id: 'l3',
          title: 'NISA口座の開設と積立設定',
          duration: '9:00',
          videoId: 'dQw4w9WgXcQ',
          isPremium: false,
          checkItems: [
            '金融機関の選び方を理解した',
            '積立額・頻度の設定方法がわかった',
            '実際に始めるための手順を把握できた',
          ],
          sections: [
            { type: 'info-box', content: 'この講座では、NISA口座を実際に開設して積立をスタートするまでの具体的な手順を学びます。' },
            { type: 'heading', level: 2, content: '金融機関はどこがいい？' },
            { type: 'text', content: 'NISAはどの金融機関でも開設できますが、ネット証券（SBI証券・楽天証券など）が手数料無料・商品数が多く初心者に人気です。銀行のNISAは手数料が高い商品が多いため注意が必要です。' },
            {
              type: 'numbered-list',
              items: [
                '金融機関を選ぶ（ネット証券推奨）',
                '本人確認書類を用意してオンライン申込',
                '審査完了後にNISA口座を有効化',
                '積立する商品と金額・頻度を設定',
                '毎月自動で積立スタート！',
              ],
            },
            { type: 'heading', level: 2, content: 'いくらから始める？' },
            { type: 'text', content: '積立NISAは月100円から始められます。最初は少額でOK。大切なのは「始めること」と「継続すること」。生活費に無理なく続けられる金額を設定しましょう。収入の5〜10%が目安です。' },
            {
              type: 'practice',
              question: '月手取り25万円のAさんが「収入の10%をNISAに積立したい」と思っています。①月の積立額はいくらか②年間では生涯上限1800万円に何年かかるか③「銀行でNISA口座を開いた」場合のデメリットを3つ挙げてください',
              auxiliaryPrompt: 'NISA口座開設と積立計画について、月手取り25万円で収入10%を積立した場合の計算と、銀行vs証券会社でのNISA口座の違い（商品ラインナップ・コスト・利便性）を説明してください。',
              answer: '①月の積立：25万円×10%=2.5万円。②年間30万円積立の場合、1800万円÷30万円=60年。年間360万円の上限フルで積立なら5年で上限到達。③銀行NISAのデメリット：A.扱っている投資信託の本数が少ない（数十本程度）、B.信託報酬が高い商品しか置いていないことが多い（銀行は手数料の高い商品を推薦しやすい）、C.株や ETFを買えない（銀行は投資信託のみ）。',
            },
            {
              type: 'glossary',
              terms: [
                { term: 'ネット証券', definition: '店舗を持たずインターネット上で証券取引を行う証券会社。SBI証券・楽天証券・松井証券などが代表例。手数料が安く、商品ラインナップが豊富でNISAの活用に向いている。' },
                { term: 'ドルコスト平均法', definition: '一定額を定期的（毎月など）に投資する方法。価格が高い時は少なく・低い時は多く購入でき、平均取得単価を下げる効果がある。積立NISAで自動的に実践される仕組み。' },
                { term: '積立頻度', definition: '投資信託の積立タイミング。毎月1回が基本だが、SBI証券・楽天証券では毎日積立も可能。毎日積立は更にドルコスト平均法の効果が高まるとされる。' },
              ],
            },
            { type: 'summary', content: 'NISA口座は一度開設すれば、あとは積立設定だけ。手を動かして「始めること」が最大の一歩です。', nextLesson: '次章では、長期運用の考え方と出口戦略を学びます。' },
          ],
        },
      ],
    },
    {
      id: 'nisa-ch-open',
      title: '第2章：証券口座を開設しよう（大手2社）',
      lessons: [
        {
          id: 'open-intro',
          title: 'SBI証券と楽天証券：大手2社の特徴と選び方',
          duration: '8:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'SBI証券・楽天証券の基本的な特徴を理解した',
            '自分に合う証券会社の選び方がわかった',
            'NISA口座は1人1社しか開設できないことを把握した',
          ],
          sections: [
            { type: 'info-box', content: 'NISA口座は1人につき1社しか開設できません。まず2大ネット証券「SBI証券」と「楽天証券」の特徴を比較して、自分に合う方を選びましょう。' },
            { type: 'heading', level: 2, content: 'SBI証券と楽天証券の比較' },
            {
              type: 'highlight-box',
              title: 'SBI証券の特徴',
              items: [
                '国内最大規模のネット証券（口座数1,000万超）',
                '投資信託のラインナップが豊富（2,500本以上）',
                'Tポイント・Vポイントなど複数のポイント対応',
                '「SBI証券×三井住友カード」でクレカ積立ポイントが貯まる',
                'ツールが充実：PC向けHYPER SBI・スマホアプリなど',
              ],
            },
            {
              type: 'highlight-box',
              title: '楽天証券の特徴',
              items: [
                '楽天経済圏との連携が最強（楽天カード・楽天銀行・楽天ポイント）',
                'クレカ積立で楽天ポイントが貯まる（楽天カード利用者に特におすすめ）',
                '操作が直感的でシンプル・初心者に人気',
                '楽天銀行との連携でスイープ入金が便利',
                'iSPEEDアプリが使いやすい',
              ],
            },
            { type: 'heading', level: 2, content: 'どちらを選ぶべきか' },
            {
              type: 'numbered-list',
              items: [
                '楽天カード・楽天銀行をすでに使っている → 楽天証券',
                '三井住友カードを使っている・銘柄数を重視する → SBI証券',
                'どちらも使っていない → 操作のシンプルさで楽天、機能の充実さでSBI',
              ],
            },
            { type: 'text', content: 'どちらを選んでも投資信託のコスト（信託報酬）・NISAの非課税枠・積立機能はほぼ同等です。「ポイントをどのくらい活用できるか」が選ぶ最大のポイントです。' },
            {
              type: 'practice',
              question: '次のプロフィールのAさん〜Cさんに最適な証券会社を推奨し、理由を説明してください。A：楽天ゴールドカードを使い楽天市場でよく買い物する27歳女性B：三井住友カードゴールド（NL）を持ち、取引コストより機能を重視する35歳会社員C：クレジットカードはイオンカードのみの主婦（50代）',
              auxiliaryPrompt: 'SBI証券と楽天証券の選び方について、クレジットカードの種類・ポイント経済圏・年齢・利用目的に応じて、AさんBさんCさんにとってそれぞれどちらが向いているか推奨理由とともに説明してください。',
              answer: 'A（楽天ゴールドカード・楽天経済圏ユーザー）→楽天証券。楽天カードでクレカ積立0.75%ポイント還元＋楽天市場でSPU優遇が受けられる。楽天銀行マネーブリッジも相性抜群。B（三井住友カードゴールドNL・機能重視）→SBI証券。ゴールドカードなら積立1.0%ポイント還元（楽天より高還元）＋銘柄数・ツールの充実度がSBIが上。C（イオンカードのみの主婦）→どちらでも大差なし。機能・操作のシンプルさで楽天証券を推奨。操作が直感的で初心者向け。イオンカードはどちらのクレカ積立でも使えない点に注意（積立は現金引き落としを選択）。',
            },
            {
              type: 'glossary',
              terms: [
                { term: 'クレカ積立', definition: 'クレジットカードで投資信託の積立を行うサービス。毎月の積立額に応じたポイントが貯まる。SBI証券（三井住友カード）・楽天証券（楽天カード）が代表。月5〜10万円まで対応。' },
                { term: 'マネーブリッジ', definition: '楽天証券と楽天銀行を連携するサービス。楽天銀行の普通預金金利が年0.1%（通常の10倍）になり、証券口座の購入時に楽天銀行から自動入金される。' },
                { term: 'ポイント経済圏', definition: '特定のポイント（楽天ポイント・Vポイントなど）を中心に、カード・銀行・証券・EC・保険など複数サービスを連携し相互にポイントが貯まる仕組み。自分がよく使う経済圏の証券会社を選ぶと最もお得。' },
              ],
            },
            { type: 'summary', content: '迷ったら普段使いのポイントサービスに合わせて選ぶのが正解。開設後に変更もできますが手間がかかるので最初からよく考えて選びましょう。', nextLesson: '次はSBI証券での具体的な開設手順を学びます。' },
          ],
        },
        {
          id: 'open-sbi',
          title: 'SBI証券でNISA口座を開く手順',
          duration: '10:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            'SBI証券の口座開設の流れを理解した',
            'NISA口座の有効化手順を把握できた',
            '積立設定の基本的なやり方がわかった',
          ],
          sections: [
            { type: 'info-box', content: 'SBI証券のNISA口座開設は、オンラインで完結します。スマートフォンと本人確認書類（マイナンバーカードまたは運転免許証）を用意してください。' },
            { type: 'heading', level: 2, content: 'STEP 1：SBI証券の公式サイトから申し込む' },
            {
              type: 'numbered-list',
              items: [
                'SBI証券の公式サイト（sbi-sec.co.jp）にアクセス',
                '「口座開設（無料）」ボタンをタップ',
                'メールアドレスを登録し、届いたURLから申し込みページへ',
                '氏名・住所・生年月日・職業などの基本情報を入力',
                '「特定口座（源泉徴収あり）」を選択（確定申告が不要になる）',
                '「NISA口座を開設する」にチェックを入れる',
              ],
            },
            { type: 'heading', level: 2, content: 'STEP 2：本人確認（eKYC）' },
            {
              type: 'numbered-list',
              items: [
                'スマートフォンのカメラで本人確認書類を撮影',
                'マイナンバーカードの場合：表裏＋顔写真の3枚',
                '運転免許証の場合：表裏＋自撮り写真の3枚',
                '審査は通常1〜3営業日で完了',
              ],
            },
            { type: 'heading', level: 2, content: 'STEP 3：NISA口座の有効化' },
            { type: 'text', content: '審査完了メールが届いたらログインし、「口座管理」→「NISA口座」から有効化の手続きを行います。税務署への申請が完了するまで数日かかる場合があります。有効化が完了してはじめてNISAでの取引が可能になります。' },
            { type: 'heading', level: 2, content: 'STEP 4：積立設定をする' },
            {
              type: 'numbered-list',
              items: [
                '「投資信託」→「投信積立」→「積立注文」へ進む',
                '購入したいファンドを検索（「インデックスファンド」「全世界株式」などのキーワードで絞り込める）',
                '積立金額・頻度（毎月or毎日）を設定',
                '引き落とし方法を選択（証券口座・カード積立など）',
                '三井住友カードでクレカ積立を設定するとポイントが貯まる',
                '確認画面で内容を確認して「積立注文する」で完了',
              ],
            },
            {
              type: 'highlight-box',
              title: 'SBI証券のクレカ積立ポイント',
              items: [
                '三井住友カード（NL）：0.5%（月5万円まで）',
                '三井住友カードゴールド（NL）：1.0%',
                '三井住友カードプラチナ：2.0%',
                '月5万円積立×0.5%＝毎月250ポイント獲得',
              ],
            },
            {
              type: 'practice',
              question: 'SBI証券で月5万円のクレカ積立（三井住友カードNL使用・0.5%還元）を30年継続した場合、積立から得られるポイント累計はいくらになりますか？また、そのポイントを再投資した場合の総資産への影響も考えてみましょう。',
              auxiliaryPrompt: 'SBI証券のクレカ積立（三井住友カードNL・0.5%還元）を月5万円・30年で試算してください。ポイント累計額と再投資による資産への影響を計算してください。',
              answer: '月5万円×0.5%=250ポイント/月。年3,000ポイント×30年=90,000ポイント（約9万円相当）。これを年利5%で再投資すると複利効果でさらに増える。ポイントは少額に見えるが、積立の「コスト補填」として機能する。クレカ積立の本当の価値は「ポイントが貯まる分、実質的な投資コストが下がる」こと。月250ポイント=実質的な信託報酬0.5%の割引と考えることもできる。',
            },
            {
              type: 'glossary',
              terms: [
                { term: 'eKYC（電子本人確認）', definition: 'スマートフォンで身分証を撮影し、オンラインで本人確認する仕組み。SBI証券・楽天証券の口座開設はeKYCで最短翌日に完了できる。マイナンバーカード・運転免許証が対応。' },
                { term: '特定口座（源泉徴収あり）', definition: '証券会社が投資利益の税金計算・納税を代行してくれる口座タイプ。確定申告が原則不要で初心者に最適。NISA口座はそもそも非課税なので関係ないが、NISA枠超過分はこの口座で自動処理される。' },
                { term: 'SBIグループ', definition: 'SBI証券・住信SBIネット銀行・SBI損保・SBI生命保険などを傘下に持つ金融グループ。SBI証券口座開設後に住信SBIネット銀行と連携（SBIハイブリッド預金）するとさらに利便性が高まる。' },
              ],
            },
            { type: 'summary', content: 'SBI証券は機能が豊富で、三井住友カードとの組み合わせでポイントを稼ぎながら資産形成できます。設定したら基本的に放置でOKです。', nextLesson: '次は楽天証券での開設手順を学びます。' },
          ],
        },
        {
          id: 'open-rakuten',
          title: '楽天証券でNISA口座を開く手順',
          duration: '10:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            '楽天証券の口座開設の流れを理解した',
            '楽天銀行との連携（マネーブリッジ）の設定がわかった',
            '楽天カードでのクレカ積立の設定方法を把握できた',
          ],
          sections: [
            { type: 'info-box', content: '楽天証券は楽天カード・楽天銀行との連携が強力で、楽天経済圏ユーザーに特におすすめです。口座開設はスマートフォンで完結します。' },
            { type: 'heading', level: 2, content: 'STEP 1：楽天証券の公式サイトから申し込む' },
            {
              type: 'numbered-list',
              items: [
                '楽天証券の公式サイト（rakuten-sec.co.jp）にアクセス',
                '「口座開設（無料）」ボタンをタップ',
                '楽天会員の場合：楽天IDでログインするとデータ入力を省略できる',
                '氏名・住所・生年月日・職業などの基本情報を確認・入力',
                '「特定口座（源泉徴収あり）」を選択',
                '「NISA口座も一緒に開設する」にチェックを入れる',
              ],
            },
            { type: 'heading', level: 2, content: 'STEP 2：本人確認（eKYC）' },
            {
              type: 'numbered-list',
              items: [
                'スマートフォンのカメラで本人確認書類を撮影',
                'マイナンバーカードまたは運転免許証が利用可能',
                '「スマホで本人確認」を選ぶと最短翌営業日に開設完了',
                '審査完了メールが届いたらログインして口座を有効化',
              ],
            },
            { type: 'heading', level: 2, content: 'STEP 3：楽天銀行との連携（マネーブリッジ）設定' },
            { type: 'text', content: '楽天銀行口座を持っている場合は「マネーブリッジ」の設定を強くおすすめします。楽天銀行の普通預金金利が年0.1%（通常の10倍）になり、投資信託の買付時に楽天銀行から自動的に資金が移動します。' },
            {
              type: 'numbered-list',
              items: [
                '楽天証券にログイン→「口座管理」→「銀行サービス」',
                '「楽天銀行口座と連携する（マネーブリッジ）」をクリック',
                '楽天銀行のログイン情報で連携を承認',
                '連携完了後、楽天銀行の普通預金金利が0.1%に',
              ],
            },
            { type: 'heading', level: 2, content: 'STEP 4：楽天カードでクレカ積立設定' },
            {
              type: 'numbered-list',
              items: [
                '「投資信託」→「積立注文」へ進む',
                '購入したいファンドを検索（「インデックスファンド」「全世界株式」などのキーワードで絞り込める）',
                '積立金額を入力（月100円〜）',
                '引き落とし方法で「楽天カード」を選択',
                '楽天カードを連携していない場合は先にカードを登録',
                '内容確認後「積立注文する」で完了',
              ],
            },
            {
              type: 'highlight-box',
              title: '楽天カード積立ポイント',
              items: [
                '楽天カード（通常）：0.5%（月5万円まで）',
                '楽天ゴールドカード：0.75%',
                '楽天プレミアムカード：1.0%',
                '月5万円積立×0.5%＝毎月250ポイント獲得',
                '楽天ポイントで投資信託を購入することも可能',
              ],
            },
            { type: 'text', content: '楽天ポイントは1ポイント＝1円として投資信託の積立に使えます。日常のショッピングで貯めたポイントをそのまま投資に回せるのが楽天証券の最大の魅力です。' },
            {
              type: 'practice',
              question: '楽天ゴールドカード（積立0.75%還元）で月5万円・20年積立した場合の①ポイント累計②楽天銀行マネーブリッジの普通預金金利0.1%（通常0.001%比）で100万円を預けた場合の年間利息の差額を計算してください。小さな数字に見えますが積み重ねると……',
              auxiliaryPrompt: '楽天証券（楽天ゴールドカード積立0.75%）の20年間ポイント累計と、楽天銀行マネーブリッジの金利優遇（0.1%vs0.001%）で100万円預けた場合の年間利息差を計算してください。',
              answer: '①ポイント：5万円×0.75%=375ポイント/月。年4,500ポイント×20年=90,000ポイント（9万円相当）。これを再投資するとさらに増える。②金利差：通常0.001%→100万円×0.001%=10円/年。マネーブリッジ0.1%→100万円×0.1%=1,000円/年。差額990円/年。100万円預けるだけで年990円お得。「ポイントや金利の小さな差」が20〜30年では数万〜数十万円の差になる。これが「楽天経済圏を最適化する」価値。',
            },
            {
              type: 'glossary',
              terms: [
                { term: '楽天SPU（スーパーポイントアッププログラム）', definition: '楽天市場でのポイント倍率が楽天グループのサービス利用状況に応じて上がる仕組み。楽天証券でNISA積立月1回以上で倍率+1倍など。楽天証券を持つだけで楽天市場での買い物がお得になる連携効果。' },
                { term: '非拘束名簿式比例代表', definition: '誤挿入注意（glossary用）。ここでは：スイープ入金（楽天銀行連携）：楽天銀行から楽天証券への入金を自動化する仕組み。投資信託を購入する際に楽天銀行から自動的に必要な金額が移動する。ATMに行く手間が省ける。' },
                { term: '非課税口座移管', definition: 'NISA口座を別の金融機関に移す手続き。年1回のみ変更可能で、手続きには数ヶ月かかる。移管しても元の口座の保有株は自動的に新口座へは移動しない（売却→再購入が必要な場合も）。慎重に最初の証券会社を選ぶ理由。' },
              ],
            },
            { type: 'summary', content: '楽天証券は楽天経済圏との相性が抜群。楽天銀行のマネーブリッジ＋楽天カード積立で、金利優遇とポイントを同時に受け取れます。設定完了後は自動積立で運用スタートです。', nextLesson: '次章では複利の力と長期投資の考え方を学びます。' },
          ],
        },
      ],
    },
    {
      id: 'nisa-ch2',
      title: '第3章：長期運用と出口戦略',
      lessons: [
        {
          id: 'l4',
          title: '複利の力と長期投資の考え方',
          duration: '11:00',
          videoId: 'dQw4w9WgXcQ',
          isPremium: false,
          checkItems: [
            '複利の仕組みと威力を理解した',
            '投資期間が長いほど有利な理由がわかった',
            '途中で売らずに持ち続ける重要性を理解した',
          ],
          sections: [
            { type: 'info-box', content: 'アインシュタインが「人類最大の発明」と言ったとも伝えられる複利。長期投資の核心です。' },
            { type: 'heading', level: 2, content: '複利とは何か' },
            { type: 'text', content: '複利とは「利息にも利息がつく」仕組みです。100万円を年5%で運用すると、1年後は105万円。2年後は110.25万円。単利（毎年5万円）と比べ、時間が経つほど差が広がります。' },
            {
              type: 'highlight-box',
              title: '毎月3万円を30年積立（年利5%想定）',
              items: [
                '元本：1,080万円（30年×12ヶ月×3万円）',
                '運用益：約1,400万円',
                '合計：約2,480万円（元本の約2.3倍）',
              ],
            },
            { type: 'heading', level: 2, content: '暴落時こそ続けることが大切' },
            { type: 'text', content: '投資をしていると必ず暴落が来ます。でも長期投資では「売らないこと」が鉄則。過去の歴史を見ると、リーマンショックもコロナショックも、長期では必ず回復しています。暴落時は「安く買えるチャンス」と考えましょう。' },
            {
              type: 'practice',
              question: '「72の法則」を使って以下を計算してください。①年利3%で元本が2倍になるのに何年かかるか②年利6%の場合は何年か③100万円を「年利0.001%の普通預金」に預けた場合、2倍になるのに何年かかるか（現実の結論も含めて考えてください）',
              auxiliaryPrompt: '72の法則（元本が2倍になる年数≈72÷年利率）を使って、各金利での資産倍増年数を計算し、普通預金と投資の差が実感できる計算を行ってください。',
              answer: '①年利3%：72÷3=24年で2倍。②年利6%：72÷6=12年で2倍。③年利0.001%（普通預金）：72÷0.001=72,000年で2倍。現実：100万円の普通預金は年10円しか増えない（0.001%×100万円）。一方、年利5%の投資なら約14年で2倍。72の法則で「投資と貯金の差」を直感的に体感できる。',
            },
            {
              type: 'glossary',
              terms: [
                { term: '複利（Compound Interest）', definition: '元本だけでなく、すでに生じた利息にも利息がつく仕組み。「利息が利息を生む」連鎖反応で長期になるほど威力が指数関数的に増大する。単利（元本のみに利息）との差は期間が長いほど大きくなる。' },
                { term: '72の法則', definition: '元本が2倍になる年数をざっくり計算する公式：72÷年利率（%）。年利6%なら約12年で2倍。投資vs貯金の差を直感的に把握するのに便利な近似計算法。' },
                { term: 'ドローダウン（暴落）', definition: '資産価値が最高値から一時的に下落すること。リーマンショック（2008年）はS&P500が-55%、コロナショック（2020年）は-34%の急落。しかし長期では回復・超過が歴史的パターン。' },
              ],
            },
            { type: 'summary', content: '複利は時間を味方につける最強の武器。早く始め、長く続け、暴落でも売らない。これが長期投資の王道です。', nextLesson: '次の講座では、積み上げた資産をどう取り崩すかを学びます。' },
          ],
        },
        {
          id: 'l5',
          title: 'NISAの出口戦略：積み上げた資産をどう使うか',
          duration: '10:00',
          videoId: '',
          isPremium: false,
          checkItems: [
            '「取り崩し」と「一括売却」の違いを理解した',
            '4%ルールの考え方を把握できた',
            '生活費に合わせた取り崩し計画を立てられる',
          ],
          sections: [
            { type: 'info-box', content: '積み立てることに集中しがちですが、「どう使うか」の設計も同様に重要です。出口戦略を知ることで、老後の安心感が変わります。' },
            { type: 'heading', level: 2, content: '出口戦略とは何か' },
            { type: 'text', content: '出口戦略とは、積み上げた資産を生活費に変えていくプランのことです。大きく「定率取り崩し」と「定額取り崩し」の2種類があります。どちらが正解かは、生活費の安定性・寿命・市場環境によって異なります。' },
            {
              type: 'highlight-box',
              title: '2種類の取り崩し方法',
              items: [
                '定額取り崩し：毎月一定額（例：月20万円）を引き出す。計画しやすいが、相場が下落すると元本を多く削ることになる',
                '定率取り崩し：毎年残高の一定割合（例：4%）を引き出す。相場に連動して取り崩し額が変動するが、資産が尽きにくい',
              ],
            },
            { type: 'heading', level: 2, content: '「4%ルール」とは' },
            { type: 'text', content: '米国の研究（ベンゲンレポート）では、毎年資産の4%を取り崩しても、30年以上資産が維持された結果が出ています。これが「4%ルール」です。例えば3,000万円あれば、年120万円（月10万円）を取り崩しても資産が持続するという目安です。' },
            {
              type: 'glossary',
              terms: [
                { term: '4%ルール', definition: '毎年資産残高の4%を取り崩すと約30年資産が維持できるという米国の研究に基づく目安。あくまで参考値。' },
                { term: '定率取り崩し', definition: '毎年一定の割合（%）で資産を売却して生活費に充てる方法。資産が減るにつれ取り崩し額も減る。' },
                { term: '取り崩しリスク', definition: '積み立て時と逆で、下落相場で取り崩すと資産が大きく減る「配列のリスク」がある。' },
              ],
            },
            { type: 'heading', level: 2, content: 'NISAの非課税と出口の相性' },
            { type: 'text', content: 'NISA口座からの売却益は非課税です。つまり、取り崩す際も税負担がゼロ。毎年120万円を取り崩して仮に60万円が利益でも、通常なら約12万円かかる税金が丸ごと手元に残ります。これが出口においてもNISAが有利な理由です。' },
            { type: 'summary', content: '出口戦略は「4%ルール」を参考に、定率取り崩しで設計するのが基本。NISAの非課税は積立だけでなく取り崩し時にも大きく機能します。', nextLesson: '次の講座では、NISAとiDeCoの使い分けを学びます。' },
          ],
        },
        {
          id: 'l6',
          title: 'NISAとiDeCoの違いと賢い使い分け',
          duration: '11:30',
          videoId: '',
          isPremium: false,
          checkItems: [
            'NISAとiDeCoそれぞれの特徴を理解した',
            'どちらを優先すべき場面がわかった',
            '両方を組み合わせた資産形成プランを描ける',
          ],
          sections: [
            { type: 'info-box', content: 'NISAとiDeCo（個人型確定拠出年金）。どちらも税制優遇がある制度ですが、目的と仕組みが異なります。両方を正しく理解して使い分けることが、資産形成の最適解です。' },
            { type: 'heading', level: 2, content: 'iDeCoとは何か' },
            { type: 'text', content: 'iDeCo（イデコ）は老後のための私的年金制度です。毎月の掛金が「全額所得控除」になるため、所得税・住民税が軽減されます。例えば年収500万円の人が月2万円拠出すると、年間約4.8万円の節税効果があります。' },
            {
              type: 'highlight-box',
              title: 'NISAとiDeCoの比較',
              items: [
                '運用益の非課税：両方OK',
                '掛金の節税：iDeCoのみ（全額所得控除）',
                '引き出しの自由：NISAはいつでも可・iDeCoは原則60歳まで不可',
                '対象年齢：NISAは18歳以上・iDeCoは20〜65歳',
                '年間上限：NISAは360万円・iDeCoは職業による（会社員は年27.6万円まで等）',
              ],
            },
            { type: 'heading', level: 2, content: 'どちらを優先すべきか' },
            { type: 'text', content: '基本的な考え方は「iDeCoで節税しながら老後資金を積み立て、NISAで自由度の高い中長期資産を形成する」の併用です。ただし、20〜30代でお金が必要になる可能性がある人は、引き出せないiDeCoより先にNISAを最大活用するのが安全です。' },
            {
              type: 'glossary',
              terms: [
                { term: '所得控除', definition: '課税対象となる所得から一定額を差し引ける制度。控除額が大きいほど税負担が軽くなる。' },
                { term: 'マッチング拠出', definition: '会社員が企業型DCの掛金に加えて自分でも上乗せ拠出できる制度。節税効果がある。' },
              ],
            },
            {
              type: 'practice',
              question: '30歳・会社員・年収450万円のAさんが毎月5万円を老後と将来のために積み立てたい場合、NISAとiDeCoをどう配分するのが合理的でしょう？考えてみてください。',
              auxiliaryPrompt: '以下の条件でNISAとiDeCoの最適な配分を考えてください。\n・30歳・会社員・年収450万円\n・毎月5万円を積み立て予定\n・10〜15年後に住宅購入の可能性あり\n・iDeCoの上限は月2.3万円（会社員・企業型DCなし）',
              answer: '住宅購入の可能性があるため、iDeCoに縛りすぎるリスクがある。まずNISAを優先（月3〜4万）しつつ、節税効果が高いiDeCoを月1〜2万で併用するバランスが現実的。年収450万円でiDeCo月2万円なら年間約4.8万円の節税。NISAは途中解約もできるため、突発的な資金ニーズにも対応できる。',
            },
            { type: 'summary', content: 'NISAは柔軟性、iDeCoは節税力が強み。老後資金をiDeCoで節税しながら積み立て、その他の目標はNISAで対応する二刀流が最強です。', nextLesson: 'NISAコース完了！おめでとうございます。' },
          ],
        },
      ],
    },
  ],
};

export const categories: Category[] = [
  moneyBasicsFullCategory,
  moneyKnowledgeCategory,
  moneyHouseholdCategory,
  moneyTaxCategory,
  moneyInsuranceCategory,
  moneyLifeplanCategory,
  zaiCategory,
  stockIntroCategory,
  nisaBasicsCategory,
  investmentAdvancedCategory,
  indexFundsCategory,
  economicsCategory,
  politicsCategory,
  examPublicCategory,
  boardgameMonopolyCategory,
  dividendStocksCategory,
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