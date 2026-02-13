'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
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
    // Ici vous pouvez initialiser Google Analytics ou autres scripts
  };

  const refuseAll = () => {
    localStorage.setItem('cookie-consent', 'refused');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  // Ne rien afficher pendant le chargement pour éviter le flash
  if (!isLoaded || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-2xl border border-rock-200 p-6 md:p-8 max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-fjord-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-rock-900 mb-2">
                Nous respectons votre vie privée
              </h3>
              <p className="text-rock-600 text-sm md:text-base">
                Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser
                le trafic du site. Vous pouvez choisir d&apos;accepter tous les cookies, uniquement
                les cookies essentiels, ou les refuser tous.
              </p>
            </div>
          </div>

          {/* Détails des cookies */}
          <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
            <div className="bg-rock-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="font-semibold text-rock-800">Essentiels</span>
              </div>
              <p className="text-rock-600 text-xs">
                Nécessaires au fonctionnement du site (préférences cookies)
              </p>
            </div>
            <div className="bg-rock-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-fjord-500 rounded-full"></span>
                <span className="font-semibold text-rock-800">Analytiques</span>
              </div>
              <p className="text-rock-600 text-xs">
                Mesure d&apos;audience pour améliorer le contenu
              </p>
            </div>
            <div className="bg-rock-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-forest-500 rounded-full"></span>
                <span className="font-semibold text-rock-800">Partenaires</span>
              </div>
              <p className="text-rock-600 text-xs">
                Suivi des liens d&apos;affiliation (Yescapa)
              </p>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptAll}
              className="btn-primary flex-1 sm:flex-none"
            >
              Tout accepter
            </button>
            <button
              onClick={acceptEssential}
              className="btn-outline flex-1 sm:flex-none"
            >
              Essentiels uniquement
            </button>
            <button
              onClick={refuseAll}
              className="px-6 py-3 text-rock-600 hover:text-rock-800 font-medium transition-colors flex-1 sm:flex-none"
            >
              Tout refuser
            </button>
          </div>

          {/* Lien politique */}
          <p className="text-xs text-rock-500 mt-4 text-center">
            En savoir plus dans notre{' '}
            <Link href="/politique-confidentialite" className="text-fjord-600 hover:underline">
              politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
