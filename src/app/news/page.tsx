import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'アップデート情報 | マネぼうアカデミー',
  description: 'マネぼうアカデミーの新機能・改善・コンテンツ追加情報をお知らせします。',
};

const CIRCLED = ['①','②','③','④','⑤','⑥','⑦','⑧','⑨','⑩'];

function renderBody(text: string): React.ReactNode {
  const splitRegex = /(①|②|③|④|⑤|⑥|⑦|⑧|⑨|⑩)/;
  const parts = text.split(splitRegex);
  if (parts.length <= 1) {
    return <p className="text-xs leading-relaxed" style={{ color: 'rgba(26,26,46,0.6)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{text}</p>;
  }
  const intro = parts[0].trim();
  const items: { num: string; text: string }[] = [];
  for (let i = 1; i < parts.length; i += 2) {
    const num = parts[i];
    const t = (parts[i + 1] ?? '').trim();
    if (CIRCLED.includes(num)) items.push({ num, text: t });
  }
  return (
    <div className="space-y-1.5">
      {intro && <p className="text-xs leading-relaxed mb-1.5" style={{ color: 'rgba(26,26,46,0.6)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{intro}</p>}
      {items.map(({ num, text }) => (
        <div key={num} className="flex items-start gap-2 rounded-lg px-2.5 py-1.5" style={{ background: 'rgba(91,200,232,0.05)', border: '1px solid rgba(91,200,232,0.15)' }}>
          <span className="text-[10px] font-bold shrink-0 mt-0.5" style={{ color: 'var(--mb-sky)', fontFamily: "'Dela Gothic One', sans-serif", lineHeight: 1.2 }}>{num}</span>
          <p className="text-[11px] leading-relaxed flex-1" style={{ color: 'rgba(26,26,46,0.65)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>{text}</p>
        </div>
      ))}
    </div>
  );
}

const updates = [
  {
    date: '2026-06-16',
    tag: 'UX',
    tagColor: '#4CAF7D',
    title: 'カテゴリページに進捗バー追加・アイコン不整合を修正',
    body: '①「お金」「投資」などのカテゴリページのヘッダーに、そのカテゴリ全体の学習進捗バーを追加。何講義完了したか・完了率が一目でわかるようになった②コース別アイコンが複数の画面で異なる絵文字を使っていた不整合を修正（「税金コース」が📋と🧾で揺れていた等）。すべての画面で同じアイコンを表示するよう一元化した',
  },
  {
    date: '2026-06-16',
    tag: 'PERF',
    tagColor: '#5BC8E8',
    title: 'レンダリング最適化：不要な再計算を全コンポーネントで廃止',
    body: '①ドロワー開閉やヘルプ表示のたびに実績バッジ数・アバターアイコンが毎回再計算されていた問題を修正（LayoutShell）②コース一覧でジャンル絞り込み以外の操作（アコーディオン開閉等）のたびにフィルタリングが再実行されていた問題を修正（useMemo）③講義検索で文字入力のたびに「最近学習した講義リスト」が毎回再ソートされていた問題を修正④学習進捗はすべてuseProgressフックを通じて読み取るよう統一（localStorage直接読み取りを完全撤廃）⑤次の講義ページをバックグラウンドで事前取得するprefetch処理を追加',
  },
  {
    date: '2026-06-16',
    tag: 'PERF',
    tagColor: '#9B6DD6',
    title: 'コード最適化：重複処理を共通化・CSSアニメーション効率化',
    body: '①「次の講義URLを求める処理」が複数コンポーネントに重複していたため、共通ユーティリティ関数に統合（DailyGoalCard・StreakWarning・HeroCtaButton）②toast系コンポーネントや各種カードがレンダリングのたびに同じCSSキーフレームを<style>タグで再注入していた問題を修正。globals.cssに一元化することでDOM肥大化を防止',
  },
  {
    date: '2026-06-16',
    tag: 'FIX',
    tagColor: '#E8354A',
    title: 'リセット後に実績トーストが再発火しない問題を修正・ページタイトル統一',
    body: '①「学習データをリセット」後に再度実績を獲得してもトーストが表示されない不具合を修正。リセット時に既読実績フラグ（mb_seen_achievements）も同時にクリアするよう変更②各ページのブラウザタイトルを「マネぼうアカデミー」に統一（用語集・学習レポート・使用マニュアルが「Monebou Academy」表記のまま残っていた）③スタンプカードページの説明文（meta description）を追加',
  },
  {
    date: '2026-06-16',
    tag: 'FIX',
    tagColor: '#E8354A',
    title: '講義数カウントの誤りを修正',
    body: '「coming soon」の未公開講義を講義数カウントに含めていた不具合を全箇所で修正。ホーム・コース一覧・カテゴリページ・マイコース一覧・コース概要シートすべてで公開済み講義のみを「〇講義」として表示するよう統一。特に「完了数/全講義数」の表示では分母と分子のロジックが食い違っていたため、正しい進捗率が表示されるようになった',
  },
  {
    date: '2026-06-16',
    tag: 'FIX',
    tagColor: '#9B6DD6',
    title: '実績トースト修正・よくある質問をメニューに追加',
    body: '①実績解除トーストが内部リストを使用していたため「完全制覇」実績（全カテゴリ全講義完了）がトーストで通知されない不具合を修正。実績定義を一元管理のデータファイルから参照するよう変更②「よくある質問」ページをモバイルのメニューから直接開けるようにリンクを追加（以前はデスクトップサイドバーからのみアクセス可能だった）',
  },
  {
    date: '2026-06-16',
    tag: 'UX',
    tagColor: '#4CAF7D',
    title: '「学ぶ」ボタンが次の未完了講義へ直リンク',
    body: '①ホーム画面の「今日の目標」カードの「学ぶ →」ボタンが、コース一覧ではなく次に学ぶべき講義へ直接ジャンプするよう改善②前回見た講義が未完了なら続きから、そうでなければ最初の未完了講義へ自動で飛ぶ③「今日の目標」「ストリーク警告」「ホームの続きから学ぶ」の3か所がすべて同じロジックで統一された',
  },
  {
    date: '2026-06-16',
    tag: 'SPEED',
    tagColor: '#9B6DD6',
    title: 'ページ読み込み高速化・ナビゲーション改善',
    body: '①カテゴリページ・コース章ページ・講義ページをすべて静的生成（SSG）に変更。初回アクセスから高速に表示される②レポートページのカテゴリ別進捗で各章リンクが「途中まで学習済みのコース」の場合に最初の未完了レッスンへ直接リンクするよう改善③レポートの「メモ一覧」ラベルが表示されない不具合を修正④メニューに「用語集」「マニュアル」へのリンクを追加。タップしやすくなった',
  },
  {
    date: '2026-06-16',
    tag: 'FIX',
    tagColor: '#4CAF7D',
    title: '漫画レイアウト統一・不要ボタン削除・レポートページ修正',
    body: '①漫画（COMIC）の画像を2カラムグリッドから縦積み（全幅）レイアウトに変更。画面サイズにかかわらず各パネルが一定幅で表示される②機能していなかった「ワイドボタン」「フォーカスモード」ボタンをヘッダーから削除③ショートカット一覧・マニュアル・よくある質問ページからフォーカスモード関連の記述を削除④レポートページの読み込み方式を改善',
  },
  {
    date: '2026-06-16',
    tag: 'UPDATE',
    tagColor: '#F5C842',
    title: 'コース一覧をアプリ別に整理・マイコース機能を追加',
    body: '①コース一覧ページをカテゴリ（お金・投資・経済など）ごとのカード表示に変更。アイコンをタップするとそのカテゴリのコース一覧に遷移②カテゴリページで各コースに「⭐」ボタンを追加。タップして「マイコース」に登録するとホーム画面に学習中のコース一覧が表示される③ホームの「マイコース」セクションから直接「学ぶ」ボタンで学習を再開できる④重複していたトップへ戻るボタン（2つ表示）を修正',
  },
  {
    date: '2026-06-16',
    tag: 'FIX',
    tagColor: '#4CAF7D',
    title: '進捗ページの全20コースカラー対応・不要コミック機能を削除',
    body: '①学習レポートの「カテゴリ別進捗」バーが全20コースに正しいカラーで表示されるよう修正（以前は5コース以外がグレー）②講義ページ内の「今日の4コマ漫画」（comic.json連携機能）を削除。COMICスペースの漫画のみ表示する形にシンプル化③COМICが奇数パネルの場合に右側が黒く空白になる問題を修正',
  },
  {
    date: '2026-06-15',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: '講義ページのMOVIE・COMIC表示を改善',
    body: '①動画（MOVIE）を講義コンテンツの先頭に移動し、まず動画で学べる構成に②漫画（COMIC）を2カラムグリッド表示に変更し、縦スクロール量を約半分に削減③次回から20コース全ジャンルのアイコンが「次のレッスン」カードに正しく表示されるよう修正',
  },
  {
    date: '2026-06-15',
    tag: 'FIX',
    tagColor: '#E8354A',
    title: 'パンくず・最終講義ボタンのリンク修正',
    body: '①カテゴリページ（例：お金ジャンル）のパンくずに「コース一覧」リンクを追加し、ホーム › コース一覧 › カテゴリ名 の3段階表示に統一②コース最終講義を完了した際の「コース一覧へ戻る」ボタンが正しくコース一覧（/courses）に遷移するよう修正（以前は章ページへ遷移していた）',
  },
  {
    date: '2026-06-15',
    tag: 'FIX',
    tagColor: '#E8354A',
    title: '章をまたぐナビゲーションを修正・全体フロー完全対応',
    body: '①第1章の最終講義から第2章の最初の講義へ、スワイプ・矢印キー・次へボタンで自動移動できるように修正②全体フローモーダルで全章の完了チェックが正しく反映されるように修正③章完了モーダルが各章の最終講義で正しく発火するように修正④章ページのパンくずにカテゴリリンクを追加（コース一覧 → カテゴリ → 章名の順）',
  },
  {
    date: '2026-06-11',
    tag: 'UPDATE',
    tagColor: '#F5C842',
    title: 'コンテンツ超大拡充：ヒント377件・クイズ254問・名言259件',
    body: '①DailyTip 160→377件（グリーン投資・メンタルアカウンティング・ファクター投資・暴落対策・ロボアドバイザー・REIT・通貨分散・確定申告・ライフステージ別優先順位など大量追加）②DailyQuiz 107→254問③MoneyQuote 71→259件（S&P500・複利・ボーナス活用・資産の定期健診など多数）',
  },
  {
    date: '2026-06-11',
    tag: 'UPDATE',
    tagColor: '#9B6DD6',
    title: 'コンテンツ大拡充：クイズ107問・名言71件・ヒント160件・レベルバー追加',
    body: '①DailyQuiz 90→107問（緊急資金・インデックスvsアクティブ・分散3軸・ポートフォリオなど追加）②MoneyQuote 56→71件③DailyTip 145→160件④CourseCompleteModal 33種⑤LessonShell 43種⑥WelcomeBack：次レベルまでの進捗バーを追加⑦FAQ 36問（レベル称号説明など追加）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: '活動チャート改善：5講義以上の日をゴールド色で強調',
    body: '①WeeklyActivityChart：1日5講義以上（超集中学習）の日をゴールド🌩️色で表示②凡例に「5+🌩️」を追加してスーパーデー視覚化',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#F5C842',
    title: 'クイズ86→90問・名言52→56件：確定申告・年齢別配分など追加',
    body: '①DailyQuiz 86→90問（確定申告・アセットアロケーション・一括vsドルコスト追加）②MoneyQuote 52→56件（「投資開始のタイミング」「ポートフォリオと不安」など追加）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#9B6DD6',
    title: 'ヒント140→145件：日銀・REIT・再投資・ESG投資テーマ追加',
    body: '①DailyTip 140→145件②追加テーマ：日銀の役割・REIT・長期投資4理由・再投資vs受け取り・ESG投資',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: 'クイズ82→86問：日銀・REIT・長期投資の理由などを追加',
    body: '①日銀の役割と株価の関係②REIT（不動産投資信託）の仕組み③長期投資が短期より有利な4つの理由④為替ヘッジの解説（前サイクル）も含む',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#4CAF7D',
    title: 'HomeStats改善：最高ストリーク日数を表示',
    body: '①MY STATSの「連続学習」カードに「最高〇日」の補足表示を追加②現在のストリークが最高より低い場合のみ表示（過去の頑張りが見える）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#9B6DD6',
    title: 'ホームに「今日の名言」追加（52件ローテーション）',
    body: '①ホーム画面に「今日の名言」（MoneyQuote）ウィジェットを追加②バフェット・キヨサキ・RBAI格言など52件が日替わりで表示③FAQ NISA・投資セクション 4→6問に拡充（オルカンvsS&P500・株式投資vs投資信託）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#E8354A',
    title: 'FAQ拡充：NISA・投資セクション31問に（オルカン・株式投資解説追加）',
    body: '①FAQ「NISA・投資」セクションに2問追加（オルカンvsS&P500・株式投資vs投資信託）②FAQトータル6セクション31問に',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: 'UI改善：挨拶メッセージ強化・完了クォート拡充',
    body: '①WelcomeBack：休日・昼休み・2週間連続時の特別グリーティング追加②LessonShell：完了クォート 29→33種に拡充③CourseCompleteModal：完了メッセージ 21→25種に拡充',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#4CAF7D',
    title: 'コンテンツ再々拡充：クイズ82問・名言52件・ヒント140件',
    body: '①DailyQuiz 79→82問（4%ルール・配当利回り・為替ヘッジなど追加）②MoneyQuote 48→52件（節税・習慣・金融教育など追加）③DailyTip 135→140件（4%ルール・市場の長期観・金・老後資金など追加）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#9B6DD6',
    title: '実績26種類に拡充：「超集中学習」「3週間連続」追加',
    body: '①新実績「超集中学習（1日5講義以上）」🌩️ を追加②新実績「3週間連続（21日連続学習）」🌻 を追加し合計26種類に③WeeklyGoalCard：達成率80%以上・50%以上・目標超過時の励ましメッセージを強化④CourseCompleteModal：章完了メッセージを16→21種に拡充⑤LessonShell：完了メッセージを23→28種に拡充',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#F5C842',
    title: 'コンテンツ再拡充：クイズ76問・名言48件・ヒント135件',
    body: '①DailyQuiz 70→76問（ふるさと納税・長期積立分散・S&P500・暴落時の対応・キャッシュフローなど追加）②MoneyQuote 43→48件（「収入の10%自動貯蓄」「賢い人はお金のために働かない」など追加）③DailyTip 130→135件（PER・ドルコスト・ETF・バフェットの遺言などの実践テーマ追加）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: '実績24種類に拡充：「メモの達人」「いいね上手」新登場',
    body: '①新実績「メモの達人（10講義以上にメモ）」「いいね上手（10講義以上にいいね）」を追加し合計24種類に②manual・FAQ の実績数表示を22→24に更新③ShareProgress の tweet テキストの「バッジ」表記を「実績」に完全統一',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#E8354A',
    title: 'FAQ拡充：NISA・iDeCo専用セクション新設・全6セクション29問に',
    body: '①FAQ に「NISA・投資」セクションを新設（NISAvsiDeCo優先順・商品選び・最低積立金額の3問）②FAQ総数が6セクション29問に③DailyGoalCardのストリーク別メッセージを4段階に拡充（3日/7日/14日/30日）④バーチャート：2講義セルにも数字表示を統一',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#9B6DD6',
    title: 'コンテンツ大幅拡充：クイズ70問・ヒント123件・名言38件・完了文23種',
    body: '①DailyQuiz 64→70問（ポートフォリオ・リバランス・格安SIM・シャープレシオなど追加）②DailyTip 117→123件（保険・行動経済学テーマ追加）③MoneyQuote 31→38件（バフェット・キヨサキなど追加）④LessonShell完了メッセージ 18→23種⑤実績アイコン重複修正（「最初の一歩」→🌱・「集中学習」→🚀・「1ヶ月連続」→🔮）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#4CAF7D',
    title: 'マニュアル・FAQ強化：今週の目標機能・目標完了日の解説追加',
    body: '①マニュアルページに「今週の目標・週次サマリー」セクション新設（目標切替・7日間パーフェクト表示の説明）②FAQに「今週の目標の変え方」「目標完了日とは」の2問を追加③FAQ総数が24問に増加',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#E8354A',
    title: '実績22種類に拡充・新実績「伝説の30日」「週間パーフェクト」追加',
    body: '①新実績「伝説の30日（最高連続記録30日以上）」「週間パーフェクト（1週間毎日学習）」を追加し22種類に②WeeklyActivityChart：2講義セルにも数字を表示③ShareProgressの「獲得バッジ」表記を「獲得実績」に統一',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#F5C842',
    title: 'クイズ64問・ヒント117件・週間学習パーフェクト表示・週目標15講義追加',
    body: '①今日の一問を58→64問に増強（配当金・確定申告・全世界株・キャッシュレスなど6問追加）②今日のヒントを111→117件に増強③WeeklySummary：週7日完全達成時に特別メッセージ表示④週間目標カードの選択肢に「週15講義」を追加⑤学習レポートの累計学習時間表示を「X時間Y分」形式に改善',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: '実績20種類に拡充・100講義マイルストーン追加・HomeStats整合修正',
    body: '①新実績「100講義の奇跡（100講義完了）」を追加し、合計20種類に②マイルストーンカードのスロットに100講義を追加③HomeStatsの「達成バッジ」ラベルを「獲得実績」に統一④MoneyQuoteに格言7件追加（計31件）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#9B6DD6',
    title: '実績19種類に拡充・クイズ58問・ヒント111件・学習レポート整合修正',
    body: '①実績を17→19種類に拡充（「集中学習：1日3講義以上」「チェック魔：10講義のチェックリスト全完了」を追加）②今日の一問を52→58問に増強（NISA・株PER・複利・ドルコスト平均法などを追加）③今日のヒントを105→111件に増強④学習レポートの「バッジ数」を実績システムと統合し整合性を修正⑤マニュアル・FAQ・各ページの実績数カウントを19に更新',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#4CAF7D',
    title: 'コース推奨順STEP表示追加・BottomNavバッジ更新',
    body: '①ホーム画面とコース一覧のカテゴリカードに「STEP 1〜5」バッジを追加。初学者がどの順番で学ぶべきかを一目で把握できるように改善。②コース一覧のカテゴリヘッダーにもSTEPラベルを表示。',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#F5C842',
    title: 'マイルストーンカード刷新・サイドバー改善・クイズ&ヒント増強',
    body: '①マイルストーンカードを実績システムと連動させ「1/5/10/20/30/50/75講義」の節目ごとにマスが光る形式に刷新②PCサイドバーに「次の講義」プレビューリンクを追加③今日の一問を47→52問に拡充（GDP・デフレ・円安・少子化・社会保障の5問追加）④今日のヒントを98→105件に拡充（日本経済・社会保障・投票関連を追加）⑤FAQ「開設コースの種類と推奨順」エントリ追加・実績数を15→17に修正',
  },

  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: 'コース構造を全面整理・重複コンテンツ統合',
    body: '①「お金の基本をマスターしよう」を廃止し、固定費削減・生活防衛費の2講義をお金の基本コース第2章に統合（ch2が5→7講義に拡充）②「お金の基礎知識」から重複していた第1章（お金とは何か）・第3章（銀行とお金）を削除し「日本経済と社会のお金」（生活のお金・日本経済の今・政治とお金の3章構成）に改名。コースが互いに補完し合う体系的な配置を実現。',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#4CAF7D',
    title: '実績17種化・シェアバッジ精度改善・モーダル言葉追加',
    body: '①実績を15種→17種に拡充（「75講義突破🎯」「1ヶ月連続🌈」追加）②学習成果シェアのバッジ数を正確な実績獲得数に修正（以前は5講義ごとカウントの誤計算）③章完了モーダルの励ましメッセージを5種→10種に拡充④実績データを共有ファイル化（コードの重複排除）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#4CAF7D',
    title: 'クイズ46問化・ヒント98件化・FAQ実績セクション追加',
    body: '①今日の一問を36問→46問に拡充（ポートフォリオ・流動性リスク・高額療養費・贈与税・預金保険・DCなど追加）②今日のヒントを84件→98件に拡充（キャリア・収入アップ・消費の見直し・データ数字など追加）③FAQに「実績・メモ・シェア」カテゴリを新設（5問追加）④マニュアルに「いいね・メモ機能」「実績トロフィー」「学習成果をシェア」3セクション追加⑤50講義実績アイコンを🎖️→🥇に変更（重複解消）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: '章完了モーダル強化・ヒント84件化・バグ修正',
    body: '①章の最後の講義を完了すると「次の章へ進む」ボタンが章タイトル付きで表示されるように改善（以前はコース一覧にしか飛ばなかった）②今日のヒントを74件→84件に拡充（節税・暗号資産・株主優待・企業型DCなど追加）③実績バッジに「50講義の頂」「いいね魔」2種追加（計15実績）',
  },
  {
    date: '2026-06-10',
    tag: 'FIX',
    tagColor: '#E8354A',
    title: '完了取り消し時のデータ不整合バグ修正',
    body: '講義の完了を取り消した際、日別学習カウント・週間達成数・カレンダー表示に古いデータが残るバグを修正（lessonCompletionDates から完了日付を正しく削除）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#4CAF7D',
    title: '進捗データの精度を全面改善',
    body: '①BottomNav/DailyGoalCard/StreakCalendar/WeeklyActivityChart/WeeklySummaryの全コンポーネントで、ページ訪問日ではなく実際の講義完了日を元に進捗を計算するよう修正②学習カレンダーの「累計学習日数」も完了実績ベースに改善③ペース予測（学習レポート）の週平均が日数でなく実際の完了講義数を使うように修正④ホームのヒーローボタンが進捗に応じて「学習を始める」→「続きから学ぶ」→「もう一度見る」に切り替わるように',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: 'UI/UX 細部磨きアップデート',
    body: '①関連講義が未完了優先順に並び替わるように改善②コース一覧の「この章を始める」ボタンが進捗連動に（未着手/続きから/もう一度見る）③最近完了した講義を3件→5件表示に拡張し日付ソートを正確化④ニュースページの①②③箇条書きをカード形式で見やすく表示',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#F5C842',
    title: '進捗ページ強化・復習モード・目標日設定など大型改善',
    body: '①学習ペース予測カード追加（完了予定日・週平均講義数算出）②目標完了日設定カード（必要1日ペースを自動算出）③RandomLessonに「復習モード」追加（完了済み講義からランダム復習）④RecentLessonsに相対日付バッジ（今日/昨日/N日前）⑤WeeklySummaryをバーチャート化（講義数で高さが変化）⑥MilestoneCardにビジュアルバッジ行追加（🥉🥈🥇🏆）⑦StreakCalendarをGitHub形式intensity graphに改善（月ラベル・4段階）',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: '週間目標カード・クイズ25問化・実績拡充など',
    body: '①ホームに「今週の目標」カード追加（SVGリング・週3/5/7/10問の目標設定可・タップで変更）②クイズを15問→25問に増量③スマホ/Mac両対応キーボードショートカット表示④コース「第5章：長期投資家のマインドセット」2講義追加⑤実績バッジ14種に拡充⑥コース「次へ」ボタンに学習ナッジアイコン。',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#4CAF7D',
    title: '学習体験を細部まで磨く6項目アップデート',
    body: '①今日のクイズを小学生でもわかる内容に刷新（15問収録・「もう一問」ボタン追加）②完了済み講義を取り消せるように③検索パレットに↑↓キーナビゲーション対応④今日の目標カードに7日間活動グラフ追加⑤用語集にカテゴリフィルターピル追加⑥あいさつを「こんしは！」に変更。',
  },
  {
    date: '2026-06-10',
    tag: 'NEW',
    tagColor: '#F5C842',
    title: '超大型アップデート：学習体験を全面刷新',
    body: '90日間の草グラフ式学習カレンダー・実績トロフィーシステム（9種類）・講義完了後の自動次へカウントダウン・全講義検索コマンドパレット（/ キー）・コースページのレッスンドットマップ・初回訪問者向けオンボーディングガイド・毎日更新のお金ヒント・スクロールトップボタン・各講義末尾のポイントまとめカードなど多数追加。',
  },
  {
    date: '2026-06-10',
    tag: 'UPDATE',
    tagColor: '#4CAF7D',
    title: 'カテゴリカード：🏆完全制覇バッジ追加',
    body: 'ホームのカテゴリカードに「🏆 完全制覇！」（全完了時）と「📖 学習中」（学習中）のステータスバッジを追加。一目で進捗がわかるようになりました。',
  },
  {
    date: '2026-06-09',
    tag: 'NEW',
    tagColor: '#F5C842',
    title: '大型アップデート：学習体験を全面強化',
    body: '講義完了時にConfettiアニメーション・完了名言が表示されるように。目次クリックで該当セクションにジャンプ、スクロールリビール演出、Cキーで即完了など多数改善。コース一覧にカテゴリフィルター・検索ハイライト・章の自動展開を追加。学習レポートに最高記録・進捗シェアカードを追加。',
  },
  {
    date: '2026-06-09',
    tag: 'NEW',
    tagColor: '#4CAF7D',
    title: 'スワイプ・キーボード操作に対応',
    body: '講義ページでスワイプ（左右）やキーボードの矢印キーで前後の講義に移動できるようになりました。モバイルでも快適に学習できます。',
  },
  {
    date: '2026-06-09',
    tag: 'NEW',
    tagColor: '#4CAF7D',
    title: 'いいね・メモ機能を追加',
    body: '各講義に「いいね」ボタンとメモ欄を追加しました。気になった講義をマークしたり、学んだことをメモとして残せます。進捗レポートからいいね一覧も確認できます。',
  },
  {
    date: '2026-06-08',
    tag: 'NEW',
    tagColor: '#4CAF7D',
    title: '学習レポートページを強化',
    body: '連続学習カレンダー・累計学習時間・今日の格言など複数の機能を追加しました。進捗の可視化がより充実しました。',
  },
  {
    date: '2026-06-07',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: 'バッジシステム・マイルストーン追加',
    body: '5講義ごとにバッジが獲得できるようになりました。バッジ獲得時にはトースト通知が表示されます。',
  },
  {
    date: '2026-06-06',
    tag: 'UPDATE',
    tagColor: '#5BC8E8',
    title: 'PWA対応・モバイル最適化',
    body: 'スマートフォンのホーム画面に追加できるPWAに対応しました。iPhoneのノッチ対応・セーフエリア考慮など細部を改善しました。',
  },
  {
    date: '2026-06-05',
    tag: 'LAUNCH',
    tagColor: '#F5C842',
    title: 'Monebou Academy ベータ版公開',
    body: 'お金の基本から株式投資まで、全カテゴリのコンテンツを公開しました。ZAiゲームとの連動講義も随時追加予定です。',
  },
];

export default function NewsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div
        className="inline-block text-[10px] font-bold tracking-[4px] px-3 py-1 rounded mb-3"
        style={{ background: 'var(--mb-dark)', color: 'var(--mb-gold)', fontFamily: "'Zen Maru Gothic', sans-serif" }}
      >
        NEWS
      </div>
      <h1 className="text-2xl mb-2" style={{ fontFamily: "'Dela Gothic One', sans-serif", color: 'var(--mb-dark)' }}>
        お知らせ
      </h1>
      <p className="text-sm mb-8" style={{ color: 'rgba(26,26,46,0.5)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
        アップデート情報・新機能のご案内
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: 'rgba(26,26,46,0.1)' }} />

        <div className="space-y-6 pl-6">
          {updates.map((u, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div
                className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                style={{ background: u.tagColor, borderColor: 'white', boxShadow: `0 0 0 2px ${u.tagColor}40` }}
              />

              <div
                className="p-4 rounded-xl border-2"
                style={{ background: 'white', borderColor: 'rgba(26,26,46,0.1)', boxShadow: '2px 2px 0 rgba(26,26,46,0.06)' }}
              >
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${u.tagColor}18`, color: u.tagColor, fontFamily: "'Zen Maru Gothic', sans-serif" }}
                  >
                    {u.tag}
                  </span>
                  <span className="text-[10px]" style={{ color: 'rgba(26,26,46,0.35)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                    {u.date}
                  </span>
                </div>
                <h2 className="text-sm font-bold mb-1.5" style={{ color: 'var(--mb-dark)', fontFamily: "'Zen Maru Gothic', sans-serif" }}>
                  {u.title}
                </h2>
                {renderBody(u.body)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
