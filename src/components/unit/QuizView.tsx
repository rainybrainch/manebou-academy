'use client';

import { ZaiUnit } from '@/types';
import { useState } from 'react';

export default function QuizView({ unit }: { unit: ZaiUnit }) {
  const quiz = unit.quiz;
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  if (!quiz) {
    return <div>確認クイズはまだ準備中です。</div>;
  }

  const handleAnswerChange = (questionId: string, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex.toString(),
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach(q => {
      const selectedIndex = parseInt(answers[q.id], 10);
      if (q.options[selectedIndex]?.isCorrect) {
        correct++;
      }
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  const score = submitted ? calculateScore() : 0;

  return (
    <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#333' }}>
      <h2>{quiz.title}</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        このクイズで、UNIT{unit.unitNumber} で学んだ内容を確認しましょう。
      </p>

      {/* ====== クイズ問題 ====== */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        {quiz.questions.map((question, qIdx) => {
          const selectedAnswer = answers[question.id];
          const selectedIndex = selectedAnswer ? parseInt(selectedAnswer, 10) : -1;
          const isAnswered = selectedIndex >= 0;
          const isCorrect = isAnswered && question.options[selectedIndex]?.isCorrect;

          return (
            <div
              key={question.id}
              style={{
                marginBottom: '30px',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                borderLeft: submitted && isCorrect ? '4px solid #4CAF50' : submitted && !isCorrect ? '4px solid #f44336' : '4px solid #2196F3',
              }}
            >
              <h3 style={{ marginTop: 0, color: '#1976D2' }}>
                問題 {qIdx + 1}: {question.question}
              </h3>

              {/* ====== 選択肢 ====== */}
              <div style={{ marginTop: '15px' }}>
                {question.options.map((option, oIdx) => (
                  <label
                    key={oIdx}
                    style={{
                      display: 'block',
                      marginBottom: '10px',
                      padding: '10px',
                      backgroundColor:
                        submitted && oIdx === selectedIndex
                          ? isCorrect
                            ? '#e8f5e9'
                            : '#ffebee'
                          : '#fafafa',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      border: selectedIndex === oIdx ? '2px solid #2196F3' : '1px solid #ddd',
                    }}
                  >
                    <input
                      type="radio"
                      name={`q${question.id}`}
                      value={oIdx}
                      checked={selectedIndex === oIdx}
                      onChange={() => {
                        if (!submitted) handleAnswerChange(question.id, oIdx);
                      }}
                      disabled={submitted}
                      style={{ marginRight: '10px' }}
                    />
                    <span style={{ fontSize: '15px' }}>
                      {option.text}
                      {submitted && oIdx === selectedIndex && (
                        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                          {isCorrect ? '✅ 正解' : '❌ 不正解'}
                        </span>
                      )}
                      {submitted && option.isCorrect && oIdx !== selectedIndex && (
                        <span style={{ marginLeft: '10px', fontSize: '13px', color: '#4CAF50' }}>
                          (正解)
                        </span>
                      )}
                    </span>
                  </label>
                ))}
              </div>

              {/* ====== 解説（提出後のみ表示） ====== */}
              {submitted && (
                <div
                  style={{
                    marginTop: '15px',
                    padding: '15px',
                    backgroundColor: isCorrect ? '#e8f5e9' : '#fff3e0',
                    borderRadius: '4px',
                    borderLeft: isCorrect ? '4px solid #4CAF50' : '4px solid #ff9800',
                  }}
                >
                  <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: isCorrect ? '#2e7d32' : '#e65100' }}>
                    {isCorrect ? '✅ 正解です！' : '📖 確認しましょう'}
                  </p>
                  <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ====== 提出ボタン・スコア表示 ====== */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < quiz.questions.length}
            style={{
              padding: '12px 30px',
              backgroundColor: Object.keys(answers).length === quiz.questions.length ? '#2196F3' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: Object.keys(answers).length === quiz.questions.length ? 'pointer' : 'not-allowed',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            回答を提出する
          </button>
        ) : (
          <div style={{ backgroundColor: '#e3f2fd', padding: '30px', borderRadius: '8px' }}>
            <h2 style={{ margin: '0 0 20px 0', color: '#1565c0' }}>結果</h2>
            <p style={{ fontSize: '32px', fontWeight: 'bold', color: score >= 80 ? '#4CAF50' : score >= 60 ? '#ff9800' : '#f44336', margin: '10px 0' }}>
              {score}%
            </p>
            <p style={{ color: '#666', margin: '10px 0' }}>
              {quiz.questions.length} 問中{' '}
              {Object.keys(answers).filter(
                qId => quiz.questions.find(q => q.id === qId)?.options[parseInt(answers[qId], 10)]?.isCorrect
              ).length}{' '}
              問 正解
            </p>
            {score === 100 && (
              <p style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '16px' }}>
                🎉 完璧です！すべて理解できていますね！
              </p>
            )}
            {score >= 80 && score < 100 && (
              <p style={{ color: '#ff9800', fontWeight: 'bold', fontSize: '16px' }}>
                👏 よくできました！もう一度確認していない部分を読んでみましょう。
              </p>
            )}
            {score < 80 && (
              <p style={{ color: '#f44336', fontWeight: 'bold', fontSize: '16px' }}>
                📚 もう一度アカデミーのページを読んでから、再度チャレンジしてみましょう。
              </p>
            )}

            <button
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
              }}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              もう一度挑戦する
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
