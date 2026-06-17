'use client';

import { useState } from 'react';

interface Props {
  title: string;
  text?: string;
}

export default function ShareButton({ title, text }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, text: text ?? title, url });
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 text-[11px] font-bold transition-all hover:opacity-80 active:scale-95"
      style={{
        borderColor: copied ? 'var(--mb-green)' : 'rgba(26,26,46,0.15)',
        color: copied ? 'var(--mb-green)' : 'rgba(26,26,46,0.5)',
        background: copied ? 'rgba(76,175,125,0.08)' : 'transparent',
        fontFamily: "'Zen Maru Gothic', sans-serif",
      }}
      title="この講義をシェア"
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          コピー完了
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          シェア
        </>
      )}
    </button>
  );
}
