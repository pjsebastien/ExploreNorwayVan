'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
    setIsLoaded(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const refuseAll = () => {
    localStorage.setItem('cookie-consent', 'refused');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isLoaded || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3">
      <div className="max-w-3xl mx-auto">
        <div className="bg-rock-900/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-rock-200 text-sm text-center sm:text-left">
            Ce site utilise des cookies pour améliorer votre expérience.{' '}
            <Link href="/politique-confidentialite" className="text-fjord-400 hover:underline">
              En savoir plus
            </Link>
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={refuseAll}
              className="px-4 py-2 text-rock-300 hover:text-white text-sm font-medium transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 bg-fjord-600 hover:bg-fjord-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
