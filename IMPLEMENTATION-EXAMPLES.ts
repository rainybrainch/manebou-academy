/**
 * ドイツ語拡張カリキュラム実装例
 * courses.ts での統合方法とコンポーネント実装例
 */

import { germanFullCurriculum } from '@/data/german-expanded-curriculum';

// ============================================================================
// 1. Courses.ts への統合例
// ============================================================================

/**
 * 全レッスンをコース形式で取得
 */
export function getGermanLessonsByLevel(level: 'A1' | 'A2' | 'B1' | 'B2') {
  const levelMap = {
    'A1': 'a1',
    'A2': 'a2',
    'B1': 'b1',
    'B2': 'b2'
  };

  return germanFullCurriculum.curricula[levelMap[level]];
}

/**
 * 全120レッスンを統一フォーマットで返す
 */
export function getAllGermanLessons() {
  const allLessons = [
    ...germanFullCurriculum.curricula.a1,
    ...germanFullCurriculum.curricula.a2,
    ...germanFullCurriculum.curricula.b1,
    ...germanFullCurriculum.curricula.b2
  ];

  return allLessons.sort((a, b) => a.sequenceNumber - b.sequenceNumber);
}

/**
 * ID から特定レッスンを検索
 */
export function getGermanLessonById(id: string) {
  const allLessons = getAllGermanLessons();
  return allLessons.find(lesson => lesson.id === id);
}

/**
 * キーワードでレッスンを検索
 */
export function searchGermanLessons(keyword: string) {
  const allLessons = getAllGermanLessons();
  const lowerKeyword = keyword.toLowerCase();

  return allLessons.filter(lesson =>
    lesson.title.toLowerCase().includes(lowerKeyword) ||
    lesson.titleDe.toLowerCase().includes(lowerKeyword) ||
    lesson.vocabulary.some(v =>
      v.german.toLowerCase().includes(lowerKeyword) ||
      v.japanese.toLowerCase().includes(lowerKeyword)
    )
  );
}

// ============================================================================
// 2. React コンポーネント実装例
// ============================================================================

/**
 * 語彙表示コンポーネント
 */
export function VocabularyItem({
  vocab
}: {
  vocab: {
    german: string;
    pronunciation: string;
    japanese: string;
    partOfSpeech: string;
    example: string;
    synonyms?: string[];
    antonyms?: string[];
    caseNotes?: string;
  };
}) {
  return (
    <div className="vocabulary-item border rounded p-4 mb-3">
      {/* メイン単語 */}
      <div className="main-word mb-3">
        <h4 className="text-xl font-bold text-blue-600">{vocab.german}</h4>
        <p className="text-gray-600 italic">{vocab.pronunciation}</p>
        <p className="text-lg text-gray-800">{vocab.japanese}</p>
      </div>

      {/* 品詞と例文 */}
      <div className="metadata mb-2">
        <span className="inline-block bg-gray-200 px-2 py-1 rounded mr-2">
          {vocab.partOfSpeech}
        </span>
      </div>

      {/* 使用例 */}
      <div className="example mb-3">
        <p className="text-sm text-gray-700">
          <strong>例:</strong> {vocab.example}
        </p>
      </div>

      {/* 同義語・反対語 */}
      {vocab.synonyms && vocab.synonyms.length > 0 && (
        <div className="synonyms mb-2">
          <p className="text-sm">
            <strong>同義語:</strong> {vocab.synonyms.join(', ')}
          </p>
        </div>
      )}

      {vocab.antonyms && vocab.antonyms.length > 0 && (
        <div className="antonyms mb-2">
          <p className="text-sm">
            <strong>反対語:</strong> {vocab.antonyms.join(', ')}
          </p>
        </div>
      )}

      {/* 格変化情報 */}
      {vocab.caseNotes && (
        <div className="case-notes bg-blue-50 p-2 rounded text-sm">
          <p><strong>格変化:</strong> {vocab.caseNotes}</p>
        </div>
      )}
    </div>
  );
}

/**
 * 例文表示コンポーネント
 */
export function ExampleSentence({
  example
}: {
  example: {
    sentence: string;
    pronunciation: string;
    japanese: string;
    grammar: string;
    caseBreakdown?: string;
  };
}) {
  return (
    <div className="example-sentence border-l-4 border-green-500 bg-green-50 p-4 mb-3">
      {/* ドイツ語文 */}
      <p className="text-lg font-semibold text-green-800 mb-1">
        {example.sentence}
      </p>

      {/* 発音 */}
      <p className="text-sm text-gray-600 italic mb-2">
        発音: {example.pronunciation}
      </p>

      {/* 日本語訳 */}
      <p className="text-gray-700 mb-2">
        日本語: {example.japanese}
      </p>

      {/* 文法ポイント */}
      <div className="grammar-note bg-yellow-50 p-2 rounded text-sm mb-2">
        <strong>文法:</strong> {example.grammar}
      </div>

      {/* 格分析 */}
      {example.caseBreakdown && (
        <div className="case-breakdown bg-blue-50 p-2 rounded text-sm">
          <strong>格分析:</strong> {example.caseBreakdown}
        </div>
      )}
    </div>
  );
}

/**
 * 練習問題表示コンポーネント
 */
export function PracticeQuestion({
  question,
  onAnswer
}: {
  question: {
    id: string;
    type: string;
    level: string;
    question: string;
    options?: string[];
    hint: string;
    answer: string | number;
    explanation: string;
  };
  onAnswer: (isCorrect: boolean, explanation: string) => void;
}) {
  const [userAnswer, setUserAnswer] = React.useState<string | number | null>(null);
  const [showExplanation, setShowExplanation] = React.useState(false);

  const handleSubmit = () => {
    const isCorrect = userAnswer === question.answer;
    onAnswer(isCorrect, question.explanation);
    setShowExplanation(true);
  };

  return (
    <div className="practice-question border rounded p-4 mb-4 bg-purple-50">
      {/* 難易度バッジ */}
      <div className="mb-2">
        <span className={`px-2 py-1 rounded text-sm font-semibold ${
          question.level === 'basic' ? 'bg-green-200' :
          question.level === 'intermediate' ? 'bg-yellow-200' :
          'bg-red-200'
        }`}>
          {question.level === 'basic' ? '基本' :
           question.level === 'intermediate' ? '応用' : '発展'}
        </span>
      </div>

      {/* 問題 */}
      <p className="text-lg font-semibold mb-3">{question.question}</p>

      {/* 選択肢（多肢選択の場合） */}
      {question.options && (
        <div className="options mb-4">
          {question.options.map((option, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name={question.id}
                value={index}
                onChange={(e) => setUserAnswer(Number(e.target.value))}
                checked={userAnswer === index}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {/* テキスト入力（穴埋め・翻訳の場合） */}
      {!question.options && (
        <input
          type="text"
          value={userAnswer as string || ''}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="答えを入力してください"
          className="w-full p-2 border rounded mb-4"
        />
      )}

      {/* ヒント */}
      <div className="hint bg-yellow-100 p-2 rounded text-sm mb-3">
        💡 ヒント: {question.hint}
      </div>

      {/* 回答ボタン */}
      <button
        onClick={handleSubmit}
        disabled={userAnswer === null}
        className="bg-purple-600 text-white px-4 py-2 rounded font-semibold disabled:bg-gray-400"
      >
        回答する
      </button>

      {/* 解説 */}
      {showExplanation && (
        <div className={`mt-4 p-3 rounded ${
          userAnswer === question.answer
            ? 'bg-green-100 border-l-4 border-green-500'
            : 'bg-red-100 border-l-4 border-red-500'
        }`}>
          <p className="font-semibold mb-1">
            {userAnswer === question.answer ? '✅ 正解!' : '❌ 不正解'}
          </p>
          <p className="text-sm">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}

/**
 * 格表示コンポーネント
 */
export function CaseTable({
  caseData
}: {
  caseData?: Record<string, string>;
}) {
  if (!caseData) return null;

  return (
    <div className="case-table mb-4 overflow-x-auto">
      <table className="w-full border-collapse border">
        <thead className="bg-blue-200">
          <tr>
            <th className="border p-2 text-left">格</th>
            <th className="border p-2 text-left">説明・変化</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(caseData).map(([caseName, caseInfo]) => (
            <tr key={caseName} className="hover:bg-gray-50">
              <td className="border p-2 font-semibold">{caseName}</td>
              <td className="border p-2 text-sm">{caseInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * 文化背景表示コンポーネント
 */
export function CulturalContext({
  context
}: {
  context: {
    title: string;
    description: string;
    nativeUsage: string;
    regionalVariations?: string;
    situationContext: string;
  };
}) {
  return (
    <div className="cultural-context bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
      <h3 className="text-lg font-bold text-indigo-900 mb-2">
        🌍 {context.title}
      </h3>

      <div className="mb-3">
        <p className="text-sm text-gray-700 mb-2">
          <strong>背景:</strong> {context.description}
        </p>
      </div>

      <div className="mb-3">
        <p className="text-sm text-gray-700 mb-1">
          <strong>ネイティブスピーカー:</strong>
        </p>
        <p className="text-sm italic text-gray-600 bg-white p-2 rounded">
          "{context.nativeUsage}"
        </p>
      </div>

      {context.regionalVariations && (
        <div className="mb-3">
          <p className="text-sm text-gray-700 mb-1">
            <strong>地域方言:</strong>
          </p>
          <p className="text-sm text-gray-600 bg-white p-2 rounded">
            {context.regionalVariations}
          </p>
        </div>
      )}

      <div>
        <p className="text-sm text-gray-700 mb-1">
          <strong>使用場面:</strong>
        </p>
        <p className="text-sm text-gray-600">
          {context.situationContext}
        </p>
      </div>
    </div>
  );
}

/**
 * レッスン全体表示コンポーネント
 */
export function GermanLesson({
  lesson
}: {
  lesson: any;
}) {
  const [completedQuestions, setCompletedQuestions] = React.useState<Set<string>>(new Set());
  const [correctAnswers, setCorrectAnswers] = React.useState(0);

  const handleAnswer = (questionId: string, isCorrect: boolean) => {
    if (!completedQuestions.has(questionId) && isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    setCompletedQuestions(prev => new Set([...prev, questionId]));
  };

  const progressPercentage = (correctAnswers / lesson.practiceQuestions.length) * 100;

  return (
    <div className="german-lesson max-w-4xl mx-auto p-4">
      {/* ヘッダー */}
      <header className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-3xl font-bold">{lesson.title}</h1>
            <h2 className="text-xl text-gray-600 italic">{lesson.titleDe}</h2>
          </div>
          <span className={`px-4 py-2 rounded font-bold text-white ${
            lesson.level === 'A1' ? 'bg-green-500' :
            lesson.level === 'A2' ? 'bg-green-600' :
            lesson.level === 'B1' ? 'bg-blue-600' :
            'bg-blue-800'
          }`}>
            {lesson.level}
          </span>
        </div>
      </header>

      {/* 学習目標 */}
      <section className="mb-6 bg-gray-50 p-4 rounded">
        <h3 className="text-lg font-bold mb-3">📚 学習目標</h3>
        <ul className="list-disc list-inside space-y-1">
          {lesson.objectives.map((obj: string, idx: number) => (
            <li key={idx} className="text-gray-700">{obj}</li>
          ))}
        </ul>
      </section>

      {/* 導入 */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">📖 レッスン導入</h3>
        <p className="text-gray-700 leading-relaxed">{lesson.introduction}</p>
      </section>

      {/* 語彙セクション */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-3">📝 語彙</h3>
        <div className="space-y-3">
          {lesson.vocabulary.map((vocab: any, idx: number) => (
            <VocabularyItem key={idx} vocab={vocab} />
          ))}
        </div>
      </section>

      {/* 文法セクション */}
      {lesson.grammar && (
        <section className="mb-6">
          <h3 className="text-lg font-bold mb-3">🔧 文法</h3>
          <h4 className="text-md font-semibold mb-2">{lesson.grammar.concept}</h4>
          <p className="text-gray-700 mb-4">{lesson.grammar.explanation}</p>
          {lesson.grammar.caseTable && (
            <CaseTable caseData={lesson.grammar.caseTable} />
          )}
        </section>
      )}

      {/* 例文セクション */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-3">💬 例文</h3>
        <div className="space-y-3">
          {lesson.examples.map((example: any, idx: number) => (
            <ExampleSentence key={idx} example={example} />
          ))}
        </div>
      </section>

      {/* 発音ガイド */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-3">🎤 発音ガイド</h3>
        <div className="bg-orange-50 p-4 rounded">
          <p className="text-sm mb-2">
            <strong>難易度:</strong> {
              lesson.pronunciation.difficulty === 'easy' ? '易' :
              lesson.pronunciation.difficulty === 'moderate' ? '中' : '難'
            }
          </p>
          <p className="text-sm mb-3">
            <strong>焦点:</strong> {lesson.pronunciation.focus}
          </p>
          <div className="bg-white p-2 rounded">
            <ul className="list-disc list-inside space-y-1">
              {lesson.pronunciation.tips.map((tip: string, idx: number) => (
                <li key={idx} className="text-sm text-gray-700">{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 複合語 */}
      {lesson.complexWords && lesson.complexWords.length > 0 && (
        <section className="mb-6">
          <h3 className="text-lg font-bold mb-3">🔗 複合語</h3>
          <div className="space-y-3">
            {lesson.complexWords.map((word: any, idx: number) => (
              <div key={idx} className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                <p className="font-bold text-purple-800">{word.compound}</p>
                <p className="text-sm text-gray-600">
                  構成: {word.components.join(' + ')}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  意味: {word.meaning}
                </p>
                <p className="text-sm text-gray-500 italic">
                  発音: {word.pronunciation}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 練習問題セクション */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-3">✏️ 練習問題</h3>

        {/* 進捗バー */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-semibold">進捗: {correctAnswers}/{lesson.practiceQuestions.length}</span>
            <span className="text-sm text-gray-600">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* 問題一覧 */}
        <div className="space-y-4">
          {lesson.practiceQuestions.map((question: any) => (
            <PracticeQuestion
              key={question.id}
              question={question}
              onAnswer={(isCorrect, explanation) => {
                handleAnswer(question.id, isCorrect);
              }}
            />
          ))}
        </div>
      </section>

      {/* 文化背景セクション */}
      <section className="mb-6">
        <CulturalContext context={lesson.culturalContext} />
      </section>

      {/* ネイティブスピーカー使用例 */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-3">🗣️ ネイティブスピーカーの表現</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
            <p className="text-sm font-semibold text-blue-900 mb-1">フォーマル</p>
            <p className="text-sm italic text-gray-700">"{lesson.nativeSpeakerUsage.formal}"</p>
          </div>
          <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
            <p className="text-sm font-semibold text-green-900 mb-1">インフォーマル</p>
            <p className="text-sm italic text-gray-700">"{lesson.nativeSpeakerUsage.informal}"</p>
          </div>
          {lesson.nativeSpeakerUsage.dialect && (
            <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500 md:col-span-2">
              <p className="text-sm font-semibold text-purple-900 mb-1">方言</p>
              <p className="text-sm italic text-gray-700">"{lesson.nativeSpeakerUsage.dialect}"</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// 3. ユーティリティ関数
// ============================================================================

/**
 * レベル別学習進捗を計算
 */
export function calculateLevelProgress(level: 'A1' | 'A2' | 'B1' | 'B2', completedLessons: string[]) {
  const lessons = getGermanLessonsByLevel(level);
  const completed = completedLessons.filter(id => lessons.some(l => l.id === id)).length;
  return {
    total: lessons.length,
    completed,
    percentage: (completed / lessons.length) * 100
  };
}

/**
 * ユーザーが解くべき次のレッスンを取得
 */
export function getNextLesson(completedLessons: string[]) {
  const allLessons = getAllGermanLessons();
  return allLessons.find(lesson => !completedLessons.includes(lesson.id));
}

/**
 * 推奨レッスンを取得（学習パターン分析）
 */
export function getRecommendedLessons(completedLessons: string[], userLevel: 'A1' | 'A2' | 'B1' | 'B2') {
  const lessons = getGermanLessonsByLevel(userLevel);
  return lessons.filter(lesson => !completedLessons.includes(lesson.id)).slice(0, 3);
}

export default {
  getGermanLessonsByLevel,
  getAllGermanLessons,
  getGermanLessonById,
  searchGermanLessons,
  calculateLevelProgress,
  getNextLesson,
  getRecommendedLessons,
  // Components
  VocabularyItem,
  ExampleSentence,
  PracticeQuestion,
  CaseTable,
  CulturalContext,
  GermanLesson
};
