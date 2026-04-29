'use client';

import { useState, useEffect, useRef } from 'react';

export default function InstallBanner() {
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const deferredPrompt = useRef<any>(null);

  useEffect(() => {
    // Skip if already in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone) {
      return;
    }

    // Check if dismissed within 7 days
    const dismissed = localStorage.getItem('install-banner-dismissed');
    if (dismissed && Date.now() - Number(dismissed) < 7 * 24 * 60 * 60 * 1000) {
      return;
    }

    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(ios);

    if (ios) {
      setShow(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e;
      setShow(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt.current) {
      deferredPrompt.current.prompt();
      await deferredPrompt.current.userChoice;
      deferredPrompt.current = null;
    }
    dismiss();
  };

  const dismiss = () => {
    localStorage.setItem('install-banner-dismissed', String(Date.now()));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-2xl mx-auto">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-2xl flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white">ホーム画面に追加</p>
          <p className="text-xs text-slate-400 mt-1">
            {isIOS
              ? '共有ボタン（□↑）→「ホーム画面に追加」でアプリとして使えます'
              : 'ホーム画面に追加してアプリとして使えます'}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {!isIOS && (
            <button
              onClick={handleInstall}
              className="px-3 py-1.5 text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors"
            >
              追加
            </button>
          )}
          <button
            onClick={dismiss}
            className="p-1 text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="閉じる"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
