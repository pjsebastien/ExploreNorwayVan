'use client';

import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Afficher après un petit délai pour l'animation d'entrée
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-gradient-to-r from-fjord-600 to-fjord-700 rounded-2xl shadow-2xl p-4 max-w-sm animate-fade-in">
          {/* Bouton fermer */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-rock-500 hover:text-rock-700 transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm">Trouvez votre van idéal</p>
                <p className="text-fjord-200 text-xs">Comparez les meilleures offres</p>
              </div>
            </div>
            <a
              href="#"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="flex items-center justify-center w-full px-4 py-2.5 bg-white text-fjord-700 font-semibold rounded-lg hover:bg-fjord-50 transition-all duration-200 text-sm"
            >
              Voir les offres
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-fjord-600 to-fjord-700 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 animate-fade-in"
          aria-label="Voir les offres de location"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>
      )}
    </div>
  );
}
