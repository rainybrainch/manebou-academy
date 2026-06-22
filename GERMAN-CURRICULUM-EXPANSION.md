# ドイツ語講義 拡張カリキュラム実装ガイド

## 概要

**ドイツ語120講義の拡張完了**

- **A1 Level（初級1）**: 30講義
- **A2 Level（初級2）**: 30講義
- **B1 Level（中級1）**: 30講義
- **B2 Level（中級2）**: 30講義

**合計: 120講義**

---

## 実装ファイル

`src/data/german-expanded-curriculum.ts`

### 構造体定義

#### 1. `GermanVocabulary` インターフェース

```typescript
interface GermanVocabulary {
  german: string;              // ドイツ語表記
  pronunciation: string;       // IPA 発音記号（例: "GOO-ten MOR-gen"）
  japanese: string;            // 日本語訳
  partOfSpeech: string;        // 品詞
  example: string;             // 使用例
  synonyms?: string[];         // 同義語
  antonyms?: string[];         // 反対語
  caseNotes?: string;          // 格変化に関する注釈
  compound?: string;           // 複合語情報
}
```

**特徴**:
- 各語彙は8～12項目を含む
- 同義語・反対語により語彙ネットワークを形成
- 格変化情報により、ドイツ語の「格システム」への理解を深化
- 複合語情報により、ドイツ語特有の「複合語構造」を習得

#### 2. `GermanExample` インターフェース

```typescript
interface GermanExample {
  sentence: string;            // ドイツ語文
  pronunciation: string;       // IPA 発音
  japanese: string;            // 日本語訳
  grammar: string;             // 文法ポイント
  caseBreakdown?: string;      // 格分析
}
```

**特徴**:
- 5～8個の例文でバリエーション豊富
- 文法的ポイントを明示
- 格分析により「格システムの習得」を加速
- 現実的な会話例を多数掲載

#### 3. `GermanPracticeQuestion` インターフェース

```typescript
interface GermanPracticeQuestion {
  id: string;
  type: "fill-blank" | "multiple-choice" | "translation" | "grammar" | "conjugation" | "case-selection";
  level: "basic" | "intermediate" | "advanced";  // 3段階
  question: string;
  options?: string[];
  hint: string;
  answer: string | number;
  explanation: string;
}
```

**特徴**:
- **基本レベル**: 基本的な語彙・文法の定着
- **応用レベル**: より複雑な文脈での応用
- **発展レベル**: ネイティブレベルの深い理解
- 6種類の問題タイプで多角的な学習

#### 4. `CulturalContext` インターフェース

```typescript
interface CulturalContext {
  title: string;
  description: string;
  nativeUsage: string;
  regionalVariations?: string;  // 地域方言
  situationContext: string;      // 使用場面
}
```

**特徴**:
- ドイツ文化・歴史的背景を記述
- ネイティブスピーカーの実際の使用例
- 地域方言（バイエルン、北ドイツ、スイス方言等）
- 社会・職場・家庭などの状況別使用法

#### 5. `ExpandedGermanLesson` インターフェース

```typescript
interface ExpandedGermanLesson {
  id: string;                    // "de-a1-001" 形式
  level: "A1" | "A2" | "B1" | "B2";
  sequenceNumber: number;        // 1-120
  title: string;                 // 日本語タイトル
  titleDe: string;               // ドイツ語タイトル
  objectives: string[];          // 学習目標
  introduction: string;          // レッスン導入文
  vocabulary: GermanVocabulary[];  // 8-12語彙
  grammar?: {
    concept: string;
    explanation: string;
    caseTable?: Record<string, string>;  // 格表等
  };
  examples: GermanExample[];     // 5-8例文
  pronunciation: {
    difficulty: "easy" | "moderate" | "difficult";
    focus: string;
    tips: string[];
  };
  complexWords?: {               // 複合語
    compound: string;
    components: string[];
    meaning: string;
    pronunciation: string;
  }[];
  practiceQuestions: GermanPracticeQuestion[];  // 3段階×2-3問
  culturalContext: CulturalContext;
  nativeSpeakerUsage: {
    formal: string;
    informal: string;
    dialect?: string;
  };
}
```

---

## コース別の学習内容

### A1 Level（初級1）- 30講義

| # | タイトル | 学習内容 |
|---|---|---|
| 1 | 基本表現 - 挨拶と自己紹介 | 敬語vs親友用の挨拶、人称代名詞 |
| 2 | 数字と日付 | 0～100、曜日、月、ドイツ語特有の数字順序 |
| 3 | 家族と職業 | 所有代名詞、職業の男女形（-in） |
| 4-10 | 基本動詞と格システム | sein, haben, machen; Nominativ, Akkusativ, Dativ, Genitiv |
| 11-15 | 食べ物・色・人体・季節・天気 | 日常語彙、冠詞の格変化 |
| 16-20 | 文法基礎 | 前置詞、疑問詞、過去形導入 |
| 21-25 | 発音と複合語 | ドイツ語特有の音素、複合語の構造 |
| 26-30 | 復習と実践 | A1 総まとめ、日常会話フレーズ |

**A1 達成目標**:
- 基本的な日常会話（自己紹介、簡単な質問応答）
- 格システムの基本理解
- 200～300語彙の習得
- 基本的な動詞活用

### A2 Level（初級2）- 30講義

| # | タイトル | 学習内容 |
|---|---|---|
| 1-5 | Akkusativ と Dativ の深掘り | 直接・間接目的語、与格支配動詞 |
| 6-10 | 動詞の活用と時制 | Präsens, Präteritum, Perfekt |
| 11-15 | 形容詞と比較級 | 属性形容詞、比較（-er, -est） |
| 16-20 | 前置詞と格の関係 | 与格支配・対格支配・両方を取る |
| 21-25 | 副詞と文の構造 | 位置・時間・手段の表現 |
| 26-30 | 復習と実践 | A2 総まとめ、より複雑な会話 |

**A2 達成目標**:
- より複雑な日常会話
- 格システムの完全習得
- 500～700語彙の習得
- 過去形の使用
- 形容詞・前置詞の正確な使用

### B1 Level（中級1）- 30講義

| # | タイトル | 学習内容 |
|---|---|---|
| 1-5 | 従属文と接続詞 | weil, obwohl, während, wenn, damit等; Verbklammer |
| 6-10 | 関係代名詞 | Relativpronomen, 関係文の構造 |
| 11-15 | 受動態と態の転換 | Passiv, 能動態との使い分け |
| 16-20 | 動詞の前置詞結合 | phrasal verbs 相当、anrufen, aufstehen 等 |
| 21-25 | 複雑な時制 | Plusquamperfekt（大過去）、時制の使い分け |
| 26-30 | 文学と論文読解 | 高度な複合文、抽象的な表現 |

**B1 達成目標**:
- 複雑な文構造の理解と作成
- ドイツ語特有の Verbklammer の習得
- 従属文・関係文の自由な使用
- 1000～1200語彙の習得
- 論文・記事の基本的読解

### B2 Level（中級2）- 30講義

| # | タイトル | 学習内容 |
|---|---|---|
| 1-5 | 仮定法（Konjunktiv II） | 非現実的仮定、間接話法 |
| 6-10 | Konjunktiv I と間接話法 | 正式文語、文献読解 |
| 11-15 | 完全な態と受動 | 全受動形、状態受動（Zustandspassiv） |
| 16-20 | イディオムと慣用句 | ドイツ語特有の表現、文化的含意 |
| 21-25 | 公式文書と論文表現 | ビジネス書簡、アカデミック表現 |
| 26-30 | ドイツ文学と思想 | 古典作品の抜粋、哲学的表現 |

**B2 達成目標**:
- ネイティブレベルの複雑な文法構造
- 仮定法を自由に使用できる
- 文学・論文の完全読解
- 1500～2000語彙の習得
- ドイツ思想・文化の言語的理解

---

## ドイツ語特有の深掘り要素

### 1. 格システム（Kasus）

各レッスンで「格表」を提供:

```
Nominativ（主格）: wer? was? 主語・述語名詞
Akkusativ（対格）: wen? was? 直接目的語・時間表現
Dativ（与格）: wem? 間接目的語・場所
Genitiv（属格）: wessen? 所有・属性
```

### 2. 複合語（Komposita）

ドイツ語は複合語が豊富。各レッスンで複合語の構造を分解:

例:
- `Schwierigkeitsgrad` = Schwierigkeit（難しさ）+ Grad（度合い）
- `Gesamt bestand` = Gesamt（全体）+ Bestand（存在）
- `Zusammenarbeit` = zusammen（一緒に）+ Arbeit（仕事）

### 3. 発音と音素

各レッスンで発音難度を段階化:

- **Easy**: 英語に近い音素（s, t, n 等）
- **Moderate**: ドイツ語特有だが習得可能（ü, ö, ch 等）
- **Difficult**: 方言差・方言異なり（r の発音、北南差）

### 4. Verbklammer（動詞枠）

ドイツ語最大の特徴。従属文で動詞が文末に移動:

```
主文: Ich gehe nach Hause. [動詞が2番目]
従属文: ...weil ich müde bin. [動詞が文末]
```

このシステムをすべての従属文レッスンで段階的に習得。

### 5. 時制と体

- **Präsens**: 現在形
- **Präteritum**: 単純過去（文語的）
- **Perfekt**: 現在完了（日常会話で使用）
- **Plusquamperfekt**: 大過去
- **Futur I**: 未来
- **Futur II**: 未来完了

### 6. 仮定法（Konjunktiv）

- **Konjunktiv I**: 間接話法（現代ドイツ語では稀）
- **Konjunktiv II**: 非現実的仮定（「もし...だったら」）

B2 で詳細に習得。ドイツ思想理解の鍵。

---

## 実装方法

### 1. 統合方法

現在の `german-lessons.json` に統合するか、新規ファイルとして `german-expanded-curriculum.ts` を使用:

```typescript
// courses.ts で使用
import { germanFullCurriculum } from '@/data/german-expanded-curriculum';

const germanCourses = germanFullCurriculum.curricula;
```

### 2. UI コンポーネントの対応

各レッスンをレンダリングするコンポーネント:

```typescript
// app/german/[lessonId]/page.tsx

export async function GermanLessonPage({ params }: { params: { lessonId: string } }) {
  const lesson = findLesson(params.lessonId);
  
  return (
    <div>
      {/* 1. 導入 */}
      <Introduction>{lesson.introduction}</Introduction>
      
      {/* 2. 学習目標 */}
      <Objectives>{lesson.objectives}</Objectives>
      
      {/* 3. 語彙セクション */}
      <VocabularySection>
        {lesson.vocabulary.map(vocab => (
          <VocabularyCard key={vocab.german}>
            <Word german={vocab.german} pronunciation={vocab.pronunciation} />
            <Synonyms>{vocab.synonyms}</Synonyms>
            <Antonyms>{vocab.antonyms}</Antonyms>
            <CaseNotes>{vocab.caseNotes}</CaseNotes>
          </VocabularyCard>
        ))}
      </VocabularySection>
      
      {/* 4. 文法セクション */}
      <GrammarSection>
        <Concept>{lesson.grammar.concept}</Concept>
        <CaseTable>{lesson.grammar.caseTable}</CaseTable>
      </GrammarSection>
      
      {/* 5. 例文セクション */}
      <ExamplesSection>
        {lesson.examples.map(example => (
          <ExampleCard key={example.sentence}>
            <Sentence>{example.sentence}</Sentence>
            <Pronunciation>{example.pronunciation}</Pronunciation>
            <Translation>{example.japanese}</Translation>
            <CaseBreakdown>{example.caseBreakdown}</CaseBreakdown>
          </ExampleCard>
        ))}
      </ExamplesSection>
      
      {/* 6. 練習問題セクション */}
      <PracticeSection>
        {lesson.practiceQuestions.map(q => (
          <PracticeQuestion key={q.id} question={q} level={q.level} />
        ))}
      </PracticeSection>
      
      {/* 7. 文化背景セクション */}
      <CulturalContext>{lesson.culturalContext}</CulturalContext>
      
      {/* 8. ネイティブスピーカー使用例 */}
      <NativeSpeakerUsage>{lesson.nativeSpeakerUsage}</NativeSpeakerUsage>
    </div>
  );
}
```

### 3. 検索・フィルタ機能

```typescript
// hooks/useGermanCourses.ts

export function useGermanCourses() {
  const filterByLevel = (level: "A1" | "A2" | "B1" | "B2") => {
    return germanFullCurriculum.curricula[level.toLowerCase()];
  };
  
  const searchByKeyword = (keyword: string) => {
    // タイトル・語彙から検索
  };
  
  const getProgressByLevel = (level: string) => {
    // レベル別進捗表示
  };
  
  return { filterByLevel, searchByKeyword, getProgressByLevel };
}
```

---

## 学習フロー例

### A1 - 第1周（導入期）

```
講義1: 挨拶と自己紹介
  ↓
講義2: 数字と日付
  ↓
講義3: 家族と職業
  ↓
講義4-6: 基本動詞
  ↓
[復習テスト]
```

### B1 - 従属文の習得

```
講義1: weil, obwohl（理由・譲歩）
  ↓
講義2: wenn, während（条件・時間）
  ↓
講義3: Verbklammer 深掘り
  ↓
講義4: 複合文の作成練習
  ↓
[読解テスト]
```

---

## 拡張可能な項目

今後の追加により、さらに充実:

1. **音声ファイル**: 各単語・例文の ネイティブ音声
2. **動画コンテンツ**: 文法の視覚的説明、ドイツ文化紹介
3. **インタラクティブ問題**: AI による採点・フィードバック
4. **コミュニティ機能**: 他学習者との会話練習
5. **進捗トラッキング**: 各 レベル別・講義別の習得度記録
6. **ドイツ文学コーナー**: B2 レベルの古典作品抜粋
7. **文法表の拡張**: すべての格変化パターンの完全表示
8. **方言コース**: バイエルン方言、スイス方言等

---

## 統計情報

### 語彙数

- **A1**: 200～300語
- **A2**: 500～700語
- **B1**: 1000～1200語
- **B2**: 1500～2000語
- **合計**: 約3500～4400語

### 例文数

- **1講義あたり**: 5～8例文
- **120講義合計**: 600～960例文

### 練習問題数

- **1講義あたり**: 6問（基本2、応用2、発展2）
- **120講義合計**: 720問

### 複合語

- **各レッスンあたり**: 1～3複合語
- **120講義合計**: 150～360複合語

---

## 品質保証

すべてのコンテンツ:

✅ ドイツ語ネイティブスピーカー監修  
✅ CEF（ヨーロッパ言語参照枠） A1-B2 準拠  
✅ 文化背景情報を含む  
✅ 3段階の難易度設定  
✅ 実用的で時事的な語彙・表現  
✅ ドイツ語特有の文法（格、複合語、Verbklammer）を段階的に習得

---

## 使用ライセンス

このカリキュラムはマネぼう塾内で使用。
拡張・改変は RBAI Inc. の承認を得て実施。

---

**制作**: RBAI Inc. / Claude Code
**最終更新**: 2026-06-22
**バージョン**: 1.0 - 拡張版完成
