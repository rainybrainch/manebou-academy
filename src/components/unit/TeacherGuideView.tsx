'use client';

import { ZaiUnit } from '@/types';

export default function TeacherGuideView({ unit }: { unit: ZaiUnit }) {
  const guide = unit.teacherGuide;

  if (!guide) {
    return <div>先生用ガイドはまだ準備中です。</div>;
  }

  return (
    <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#333' }}>
      {/* ====== 授業概要 ====== */}
      <section style={{ marginBottom: '30px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ marginTop: 0 }}>授業概要</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', width: '150px', backgroundColor: '#e0e0e0' }}>
                授業の目的
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{guide.purpose}</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', backgroundColor: '#e0e0e0' }}>
                想定時間
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{guide.estimatedTime} 分</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '10px', fontWeight: 'bold', backgroundColor: '#e0e0e0' }}>
                準備物
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <ul style={{ margin: '0', paddingLeft: '20px' }}>
                  {guide.materialsNeeded.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ====== 導入（5分） ====== */}
      {guide.introduction && (
        <section style={{ marginBottom: '30px', backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#1976D2' }}>導入・今日の問い（{guide.introduction.duration_minutes}分）</h2>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '15px' }}>{guide.introduction.notes}</p>

          <h3 style={{ color: '#1976D2' }}>先生が聞く質問</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {guide.introduction.questions.map((q, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                <strong>{q}</strong>
              </li>
            ))}
          </ul>

          {guide.introduction.expectedResponses && (
            <>
              <h3 style={{ color: '#1976D2' }}>予想される子どもの反応</h3>
              <ul style={{ paddingLeft: '20px', backgroundColor: 'white', padding: '15px', borderRadius: '4px' }}>
                {guide.introduction.expectedResponses.map((r, idx) => (
                  <li key={idx} style={{ marginBottom: '6px', fontSize: '14px' }}>
                    「{r}」
                  </li>
                ))}
              </ul>
            </>
          )}

          {guide.introduction.teachingPoints && (
            <>
              <h3 style={{ color: '#1976D2' }}>教える際のポイント</h3>
              <ul style={{ paddingLeft: '20px', backgroundColor: '#fff8e1', padding: '15px', borderRadius: '4px' }}>
                {guide.introduction.teachingPoints.map((p, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>
                    {p}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}

      {/* ====== ゲーム準備（5分） ====== */}
      {guide.setupSession && (
        <section style={{ marginBottom: '30px', backgroundColor: '#fff3e0', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#e65100' }}>
            {guide.setupSession.title || 'ゲーム準備'}（{guide.setupSession.duration_minutes}分）
          </h2>
          {guide.setupSession.notes && (
            <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '15px' }}>{guide.setupSession.notes}</p>
          )}
          <ul style={{ paddingLeft: '20px' }}>
            {guide.setupSession.content.map((c, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                {c}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ====== ゲーム体験（30分） ====== */}
      {guide.gameSession && (
        <section style={{ marginBottom: '30px', backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#388e3c' }}>ZAiボードゲーム体験（{guide.gameSession.duration_minutes}分）</h2>

          {guide.gameSession.setup && guide.gameSession.setup.length > 0 && (
            <>
              <h3 style={{ color: '#388e3c' }}>セットアップ</h3>
              <ul style={{ paddingLeft: '20px' }}>
                {guide.gameSession.setup.map((s, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>
                    {s}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h3 style={{ color: '#388e3c' }}>進行フロー</h3>
          <ol style={{ paddingLeft: '20px' }}>
            {guide.gameSession.flow.map((f, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                {f}
              </li>
            ))}
          </ol>

          <h3 style={{ color: '#388e3c' }}>先生が聞く問い（何度も繰り返す）</h3>
          <ul style={{ paddingLeft: '20px', backgroundColor: 'white', padding: '15px', borderRadius: '4px' }}>
            {guide.gameSession.questions_to_ask.map((q, idx) => (
              <li key={idx} style={{ marginBottom: '8px', fontSize: '14px' }}>
                「<strong>{q}</strong>」
              </li>
            ))}
          </ul>

          <h3 style={{ color: '#388e3c' }}>ゲームを止めるポイント</h3>
          <ul style={{ paddingLeft: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '4px' }}>
            {guide.gameSession.stoppingPoints.map((p, idx) => (
              <li key={idx} style={{ marginBottom: '8px', fontSize: '14px' }}>
                {p}
              </li>
            ))}
          </ul>

          <h3 style={{ color: '#388e3c' }}>重要なノート</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {guide.gameSession.notes.map((n, idx) => (
              <li key={idx} style={{ marginBottom: '8px', backgroundColor: '#fff9c4', padding: '10px', borderRadius: '4px' }}>
                ✓ {n}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ====== ゲーム振り返り（10分） ====== */}
      {guide.reflection && (
        <section style={{ marginBottom: '30px', backgroundColor: '#fce4ec', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#c2185b' }}>ゲームの振り返り（{guide.reflection.duration_minutes}分）</h2>

          <h3 style={{ color: '#c2185b' }}>進め方の構造</h3>
          <ol style={{ paddingLeft: '20px' }}>
            {guide.reflection.structure.map((s, idx) => (
              <li key={idx} style={{ marginBottom: '10px' }}>
                {s}
              </li>
            ))}
          </ol>

          <h3 style={{ color: '#c2185b' }}>子どもに投げかける質問</h3>
          <ul style={{ paddingLeft: '20px', backgroundColor: 'white', padding: '15px', borderRadius: '4px' }}>
            {guide.reflection.sharingPrompts.map((p, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                「<strong>{p}</strong>」
              </li>
            ))}
          </ul>

          <h3 style={{ color: '#c2185b' }}>注意点</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {guide.reflection.notes.map((n, idx) => (
              <li key={idx} style={{ marginBottom: '8px', backgroundColor: '#f3e5f5', padding: '10px', borderRadius: '4px' }}>
                {n}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ====== 図解・解説・ワーク（7分） ====== */}
      {guide.academySession && (
        <section style={{ marginBottom: '30px', backgroundColor: '#f3e5f5', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#7b1fa2' }}>図解・解説・ワーク（{guide.academySession.duration_minutes}分）</h2>
          <p style={{ marginBottom: '15px' }}>
            <strong>フォーカス:</strong> {guide.academySession.focus}
          </p>
          <p style={{ marginBottom: '15px' }}>
            <strong>タイミング:</strong> {guide.academySession.timing}
          </p>

          <h3 style={{ color: '#7b1fa2' }}>解説内容</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {guide.academySession.content.map((c, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                {c}
              </li>
            ))}
          </ul>

          <p style={{ backgroundColor: 'white', padding: '15px', borderRadius: '4px', fontStyle: 'italic' }}>
            <strong>ノート:</strong> {guide.academySession.notes}
          </p>
        </section>
      )}

      {/* ====== まとめ・家庭への問い（3分） ====== */}
      {guide.summarySession && (
        <section style={{ marginBottom: '30px', backgroundColor: '#c8e6c9', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#2e7d32' }}>
            {guide.summarySession.title || 'まとめ'}（{guide.summarySession.duration_minutes}分）
          </h2>
          {guide.summarySession.notes && (
            <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '15px' }}>{guide.summarySession.notes}</p>
          )}
          <ul style={{ paddingLeft: '20px' }}>
            {guide.summarySession.content.map((c, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                {c}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ====== よくある子どもの反応と対応 ====== */}
      {guide.commonResponses && guide.commonResponses.length > 0 && (
        <section style={{ marginBottom: '30px', backgroundColor: '#ede7f6', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#512da8' }}>よくある子どもの反応と対応</h2>
          {guide.commonResponses.map((resp, idx) => (
            <div key={idx} style={{ marginBottom: '15px', backgroundColor: 'white', padding: '15px', borderRadius: '4px' }}>
              <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: '#512da8' }}>
                📌 子ども: {resp.scenario}
              </p>
              <p style={{ margin: 0, color: '#333', paddingLeft: '20px' }}>
                👨‍🏫 先生: {resp.response}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* ====== 次の UNIT ====== */}
      {guide.nextUnit && (
        <section style={{ backgroundColor: '#e0f2f1', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0, color: '#00695c' }}>次の授業への導線</h2>
          <p style={{ fontSize: '16px', margin: '10px 0' }}>
            <strong>次: {guide.nextUnit}</strong>
          </p>
          <p style={{ color: '#555' }}>{guide.nextUnitPreview}</p>
        </section>
      )}
    </div>
  );
}
