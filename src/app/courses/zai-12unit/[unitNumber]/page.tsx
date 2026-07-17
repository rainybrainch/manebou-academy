'use client';

import { use, useState } from 'react';
import { zai12unitCategory } from '@/data/course-zai-12unit';
import type { ZaiUnit } from '@/types';
import UnitAcademyView from '@/components/unit/UnitAcademyView';
import TeacherGuideView from '@/components/unit/TeacherGuideView';
import WorksheetView from '@/components/unit/WorksheetView';
import QuizView from '@/components/unit/QuizView';

interface UnitPageProps {
  params: Promise<{
    unitNumber: string;
  }>;
}

export default function UnitPage({ params: rawParams }: UnitPageProps) {
  const params = use(rawParams);
  const unitNum = parseInt(params.unitNumber, 10);
  const unit = zai12unitCategory.units.find(u => u.unitNumber === unitNum);

  const [activeTab, setActiveTab] = useState<'academy' | 'guide' | 'work' | 'quiz'>('academy');
  const [showPrintable, setShowPrintable] = useState(false);

  if (!unit) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>UNIT が見つかりません</h1>
        <p>UNIT {unitNum} は存在しません。</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* ====== ヘッダー ====== */}
      <header style={{ marginBottom: '40px', borderBottom: '2px solid #e0e0e0', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h1>{unit.title}</h1>
          <button
            onClick={() => setShowPrintable(!showPrintable)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {showPrintable ? '画面表示に戻す' : '印刷用ページを開く'}
          </button>
        </div>
        <p style={{ color: '#666', fontSize: '16px', margin: '5px 0' }}>テーマ: {unit.theme}</p>
        <p style={{ color: '#999', fontSize: '14px', margin: '0' }}>
          想定時間: {unit.estimatedTime?.total} 分 | キーワード: {unit.keywords.join(' / ')}
        </p>
      </header>

      {/* ====== 学習目標 ====== */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h2 style={{ marginTop: 0 }}>今日のゴール</h2>
        <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#1976D2', margin: '10px 0' }}>
          {unit.goalStatement}
        </p>
        <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>学習目標</h3>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          {unit.learningGoals.map((goal, idx) => (
            <li key={idx} style={{ marginBottom: '8px' }}>
              {goal}
            </li>
          ))}
        </ul>
      </section>

      {/* ====== タブナビゲーション ====== */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '2px solid #e0e0e0' }}>
        {[
          { key: 'academy' as const, label: '子ども向けアカデミー' },
          { key: 'guide' as const, label: '先生用授業ガイド' },
          { key: 'work' as const, label: 'ワーク・宿題' },
          { key: 'quiz' as const, label: '確認クイズ' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: '12px 20px',
              backgroundColor: activeTab === tab.key ? '#1976D2' : 'transparent',
              color: activeTab === tab.key ? 'white' : '#666',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: activeTab === tab.key ? 'bold' : 'normal',
              borderRadius: '4px 4px 0 0',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ====== コンテンツ表示 ====== */}
      {showPrintable ? (
        <PrintableView unit={unit} />
      ) : (
        <>
          {activeTab === 'academy' && <UnitAcademyView unit={unit} />}
          {activeTab === 'guide' && <TeacherGuideView unit={unit} />}
          {activeTab === 'work' && <WorksheetView unit={unit} />}
          {activeTab === 'quiz' && <QuizView unit={unit} />}
        </>
      )}

      {/* ====== ナビゲーション ====== */}
      <footer style={{ marginTop: '60px', paddingTop: '20px', borderTop: '2px solid #e0e0e0', textAlign: 'center' }}>
        {unit.navigation?.prevUnit && (
          <a
            href={`/courses/zai-12unit/${unit.navigation.prevUnit?.split('-')[2]}`}
            style={{ marginRight: '20px', color: '#1976D2', textDecoration: 'none' }}
          >
            ← 前の UNIT
          </a>
        )}
        {unit.navigation?.nextUnit && (
          <a
            href={`/courses/zai-12unit/${parseInt(unit.navigation.nextUnit.split('-')[2], 10)}`}
            style={{ color: '#1976D2', textDecoration: 'none' }}
          >
            次の UNIT →
          </a>
        )}
      </footer>
    </div>
  );
}

// ========================================
// 印刷用ビュー
// ========================================

function PrintableView({ unit }: { unit: any }) {
  return (
    <div style={{ pageBreakAfter: 'always' }}>
      <h2 style={{ pageBreakBefore: 'always', marginTop: 0 }}>
        授業ワークシート - {unit.title}
      </h2>

      {/* 授業ワーク */}
      {unit.worksheet?.classroomWork && (
        <section style={{ marginBottom: '40px', pageBreakAfter: 'avoid' }}>
          <h3>{unit.worksheet.classroomWork.title}</h3>
          <p style={{ fontSize: '12px', color: '#666' }}>
            {unit.worksheet.classroomWork.instructions}
          </p>
          {unit.worksheet.classroomWork.questions.map((q: string, idx: number) => (
            <div key={idx} style={{ marginBottom: '20px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{idx + 1}. {q}</p>
              <div
                style={{
                  border: '1px solid #ccc',
                  minHeight: '80px',
                  padding: '10px',
                  backgroundColor: '#fafafa',
                }}
              />
            </div>
          ))}
        </section>
      )}

      {/* ゲーム記録シート */}
      {unit.worksheet?.gameRecording && (
        <section style={{ marginBottom: '40px', pageBreakAfter: 'avoid' }}>
          <h3>{unit.worksheet.gameRecording.title}</h3>
          <p style={{ fontSize: '12px', color: '#666' }}>
            {unit.worksheet.gameRecording.instructions}
          </p>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '10px',
            }}
          >
            <tbody>
              {unit.worksheet.gameRecording.recordingItems.map((item: string, idx: number) => (
                <tr key={idx}>
                  <td style={{ border: '1px solid #ccc', padding: '10px', width: '200px', fontWeight: 'bold' }}>
                    {item}
                  </td>
                  <td
                    style={{
                      border: '1px solid #ccc',
                      padding: '10px',
                      minHeight: '40px',
                      backgroundColor: '#fafafa',
                    }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* 振り返りシート */}
      {unit.worksheet?.reflection && (
        <section style={{ marginBottom: '40px', pageBreakAfter: 'avoid' }}>
          <h3>{unit.worksheet.reflection.title}</h3>
          <p style={{ fontSize: '12px', color: '#666' }}>
            {unit.worksheet.reflection.instructions}
          </p>
          {unit.worksheet.reflection.questions.map((q: string, idx: number) => (
            <div key={idx} style={{ marginBottom: '20px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{idx + 1}. {q}</p>
              <div
                style={{
                  border: '1px solid #ccc',
                  minHeight: '60px',
                  padding: '10px',
                  backgroundColor: '#fafafa',
                }}
              />
            </div>
          ))}
        </section>
      )}

      {/* 宿題 */}
      {unit.worksheet?.homework && (
        <section style={{ marginBottom: '40px', pageBreakAfter: 'avoid' }}>
          <h3>{unit.worksheet.homework.title}</h3>
          <p style={{ fontSize: '12px', color: '#666' }}>
            {unit.worksheet.homework.instructions}
          </p>
          {unit.worksheet.homework.tasks.map((task: string, idx: number) => (
            <div key={idx} style={{ marginBottom: '20px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{idx + 1}. {task}</p>
              <div
                style={{
                  border: '1px solid #ccc',
                  minHeight: '60px',
                  padding: '10px',
                  backgroundColor: '#fafafa',
                }}
              />
            </div>
          ))}
        </section>
      )}

      {/* 印刷スタイル */}
      <style>{`
        @media print {
          body {
            margin: 0;
            padding: 10mm;
          }
          h2, h3 {
            page-break-after: avoid;
          }
          section {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
