'use client';

import { ZaiUnit } from '@/types';

export default function UnitAcademyView({ unit }: { unit: ZaiUnit }) {
  const ac = unit.academicContent;

  return (
    <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
      {/* 導入 */}
      {ac?.introduction && (
        <section style={{ marginBottom: '30px', backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#1976D2' }}>導入</h2>
          <p style={{ fontSize: '16px', margin: '0' }}>{ac.introduction.content}</p>
        </section>
      )}

      {/* キーワード解説 */}
      {ac?.keywords_explanation && ac.keywords_explanation.length > 0 && (
        <section style={{ marginBottom: '30px' }}>
          <h2>今日のキーワード</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {ac.keywords_explanation.map((kw, idx) => (
              <div key={idx} style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#1976D2', fontSize: '16px' }}>{kw.term}</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{kw.explanation}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 現実社会との繋がり */}
      {ac?.realWorldConnection && (
        <section style={{ marginBottom: '30px', backgroundColor: '#fff3e0', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#f57c00' }}>現実社会とのつながり</h2>
          <h3>{ac.realWorldConnection.title}</h3>
          {ac.realWorldConnection.examples && ac.realWorldConnection.examples.length > 0 && (
            <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
              {ac.realWorldConnection.examples.map((ex, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>
                  {ex}
                </li>
              ))}
            </ul>
          )}
          {ac.realWorldConnection.explanation && (
            <p style={{ marginTop: '15px', backgroundColor: 'white', padding: '15px', borderRadius: '4px' }}>
              {ac.realWorldConnection.explanation}
            </p>
          )}
        </section>
      )}

      {/* まとめ */}
      {ac?.summary && (
        <section style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#388e3c' }}>今日のまとめ</h2>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            {ac.summary.points.map((point, idx) => (
              <li key={idx} style={{ marginBottom: '8px', fontSize: '15px' }}>
                {point}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
