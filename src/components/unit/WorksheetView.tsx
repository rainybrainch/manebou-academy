'use client';

import { ZaiUnit } from '@/types';
import { useState } from 'react';

export default function WorksheetView({ unit }: { unit: ZaiUnit }) {
  const ws = unit.worksheet;
  const [activeSheet, setActiveSheet] = useState<'work' | 'game' | 'reflection' | 'homework'>('work');

  if (!ws) {
    return <div>ワークシートはまだ準備中です。</div>;
  }

  return (
    <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#333' }}>
      {/* ====== シート選択タブ ====== */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '2px solid #e0e0e0' }}>
        {ws.classroomWork && (
          <button
            onClick={() => setActiveSheet('work')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeSheet === 'work' ? '#4CAF50' : 'transparent',
              color: activeSheet === 'work' ? 'white' : '#666',
              border: 'none',
              cursor: 'pointer',
              fontWeight: activeSheet === 'work' ? 'bold' : 'normal',
              borderRadius: '4px',
            }}
          >
            授業ワーク
          </button>
        )}
        {ws.gameRecording && (
          <button
            onClick={() => setActiveSheet('game')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeSheet === 'game' ? '#4CAF50' : 'transparent',
              color: activeSheet === 'game' ? 'white' : '#666',
              border: 'none',
              cursor: 'pointer',
              fontWeight: activeSheet === 'game' ? 'bold' : 'normal',
              borderRadius: '4px',
            }}
          >
            ゲーム記録
          </button>
        )}
        {ws.reflection && (
          <button
            onClick={() => setActiveSheet('reflection')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeSheet === 'reflection' ? '#4CAF50' : 'transparent',
              color: activeSheet === 'reflection' ? 'white' : '#666',
              border: 'none',
              cursor: 'pointer',
              fontWeight: activeSheet === 'reflection' ? 'bold' : 'normal',
              borderRadius: '4px',
            }}
          >
            振り返り
          </button>
        )}
        {ws.homework && (
          <button
            onClick={() => setActiveSheet('homework')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeSheet === 'homework' ? '#4CAF50' : 'transparent',
              color: activeSheet === 'homework' ? 'white' : '#666',
              border: 'none',
              cursor: 'pointer',
              fontWeight: activeSheet === 'homework' ? 'bold' : 'normal',
              borderRadius: '4px',
            }}
          >
            宿題
          </button>
        )}
      </div>

      {/* ====== 授業ワーク ====== */}
      {activeSheet === 'work' && ws.classroomWork && (
        <section style={{ backgroundColor: '#f1f8e9', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#558b2f' }}>{ws.classroomWork.title}</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
            {ws.classroomWork.instructions}
          </p>
          <p style={{ color: '#999', fontSize: '13px', marginBottom: '20px' }}>
            所要時間: 約 {ws.classroomWork.duration_minutes} 分
          </p>

          {ws.classroomWork.questions.map((q, idx) => (
            <div key={idx} style={{ marginBottom: '30px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px', color: '#558b2f' }}>
                {idx + 1}. {q}
              </p>
              <div
                style={{
                  border: '2px solid #aed581',
                  minHeight: '100px',
                  padding: '15px',
                  backgroundColor: '#fafafa',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                }}
              >
                {/* 記入欄 */}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ====== ゲーム記録シート ====== */}
      {activeSheet === 'game' && ws.gameRecording && (
        <section style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#1565c0' }}>{ws.gameRecording.title}</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
            {ws.gameRecording.instructions}
          </p>
          <p style={{ color: '#999', fontSize: '13px', marginBottom: '20px' }}>
            所要時間: ゲーム中に記入
          </p>

          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '10px',
              backgroundColor: 'white',
            }}
          >
            <tbody>
              {ws.gameRecording.recordingItems.map((item, idx) => (
                <tr key={idx}>
                  <td
                    style={{
                      border: '2px solid #90caf9',
                      padding: '12px',
                      fontWeight: 'bold',
                      width: '200px',
                      backgroundColor: '#e3f2fd',
                    }}
                  >
                    {item}
                  </td>
                  <td
                    style={{
                      border: '2px solid #90caf9',
                      padding: '12px',
                      minHeight: '50px',
                      backgroundColor: '#fafafa',
                    }}
                  >
                    {/* 記入欄 */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* ====== 振り返りシート ====== */}
      {activeSheet === 'reflection' && ws.reflection && (
        <section style={{ backgroundColor: '#fce4ec', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#ad1457' }}>{ws.reflection.title}</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
            {ws.reflection.instructions}
          </p>
          <p style={{ color: '#999', fontSize: '13px', marginBottom: '20px' }}>
            所要時間: 約 {ws.reflection.duration_minutes} 分
          </p>

          {ws.reflection.questions.map((q, idx) => (
            <div key={idx} style={{ marginBottom: '25px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px', color: '#ad1457' }}>
                {idx + 1}. {q}
              </p>
              <div
                style={{
                  border: '2px solid #f48fb1',
                  minHeight: '80px',
                  padding: '15px',
                  backgroundColor: '#fafafa',
                  borderRadius: '4px',
                }}
              >
                {/* 記入欄 */}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ====== 宿題 ====== */}
      {activeSheet === 'homework' && ws.homework && (
        <section style={{ backgroundColor: '#fff3e0', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#e65100' }}>{ws.homework.title}</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
            {ws.homework.instructions}
          </p>
          <p style={{ color: '#999', fontSize: '13px', marginBottom: '10px' }}>
            所要時間: 約 1 日（家庭学習）
          </p>
          {ws.homework.notes && (
            <p style={{ color: '#f57c00', fontSize: '13px', marginBottom: '20px', fontStyle: 'italic' }}>
              📝 {ws.homework.notes}
            </p>
          )}

          {ws.homework.tasks.map((task, idx) => (
            <div key={idx} style={{ marginBottom: '25px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px', color: '#e65100' }}>
                {idx + 1}. {task}
              </p>
              <div
                style={{
                  border: '2px solid #ffb74d',
                  minHeight: '80px',
                  padding: '15px',
                  backgroundColor: '#fafafa',
                  borderRadius: '4px',
                }}
              >
                {/* 記入欄 */}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ====== 印刷ボタン ====== */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <button
          onClick={() => window.print()}
          style={{
            padding: '12px 24px',
            backgroundColor: '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          🖨️ このシートを印刷
        </button>
      </div>
    </div>
  );
}
