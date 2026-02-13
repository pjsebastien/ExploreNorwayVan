'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip', href: '/road-trip-norvege-van' },
  { name: 'Itinéraire 10 jours', href: '/itineraire-norvege-10-jours-van' },
  { name: 'Prix', href: '/prix-location-van-norvege' },
  { name: 'Dormir en van', href: '/dormir-en-van-norvege' },
  { name: 'Camping sauvage', href: '/camping-sauvage-norvege-van' },
  { name: 'FAQ', href: '/faq-location-van-norvege' },
];

const cities = [
  { name: 'Oslo', href: '/location-van-oslo' },
  { name: 'Bergen', href: '/location-van-bergen' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container-custom" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/favicon-location-van-norvege.png"
              alt="ExploreNorwayVan Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-display font-semibold text-lg text-rock-900">
              ExploreNorwayVan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-rock-600 hover:text-fjord-600 rounded-lg hover:bg-fjord-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown Villes */}
            <div className="relative">
              <button
                onClick={() => setCitiesOpen(!citiesOpen)}
                className="px-3 py-2 text-sm font-medium text-rock-600 hover:text-fjord-600 rounded-lg hover:bg-fjord-50 transition-colors flex items-center"
              >
                Villes
                <svg className={`ml-1 w-4 h-4 transition-transform ${citiesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {citiesOpen && (
                <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg py-2 border border-rock-100">
                  {cities.map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="block px-4 py-2 text-sm text-rock-600 hover:text-fjord-600 hover:bg-fjord-50"
                      onClick={() => setCitiesOpen(false)}
                    >
                      Location van {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.slice(4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-rock-600 hover:text-fjord-600 rounded-lg hover:bg-fjord-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/#loueurs" className="btn-primary text-sm">
              Trouver un van
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-rock-600 hover:text-fjord-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-rock-100">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-rock-600 hover:text-fjord-600 hover:bg-fjord-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-rock-100 mt-2">
                <p className="px-4 py-2 text-sm font-semibold text-rock-400 uppercase tracking-wide">Villes</p>
                {cities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="block px-4 py-2 text-base font-medium text-rock-600 hover:text-fjord-600 hover:bg-fjord-50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Location van {city.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/#loueurs"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Trouver un van
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
