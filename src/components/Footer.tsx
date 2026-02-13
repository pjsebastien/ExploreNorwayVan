import Link from 'next/link';

const footerNavigation = {
  guides: [
    { name: 'Road trip Norvège en van', href: '/road-trip-norvege-van' },
    { name: 'Itinéraire 10 jours', href: '/itineraire-norvege-10-jours-van' },
    { name: 'Prix location van', href: '/prix-location-van-norvege' },
    { name: 'Dormir en van', href: '/dormir-en-van-norvege' },
  ],
  pratique: [
    { name: 'Camping sauvage', href: '/camping-sauvage-norvege-van' },
    { name: 'Location van Oslo', href: '/location-van-oslo' },
    { name: 'Location van Bergen', href: '/location-van-bergen' },
    { name: 'FAQ', href: '/faq-location-van-norvege' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-rock-900 text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-fjord-500 to-forest-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="font-display font-semibold text-xl">ExploreNorwayVan</span>
            </Link>
            <p className="text-rock-300 max-w-md leading-relaxed">
              Votre guide complet pour la location de van en Norvège. Découvrez les fjords,
              les routes panoramiques et la nature sauvage norvégienne en toute liberté.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Guides</h3>
            <ul className="space-y-3">
              {footerNavigation.guides.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-rock-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pratique */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Pratique</h3>
            <ul className="space-y-3">
              {footerNavigation.pratique.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-rock-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-rock-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-rock-400 text-sm">
              © {new Date().getFullYear()} ExploreNorwayVan.com - Tous droits réservés
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-rock-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-rock-400 hover:text-white transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
