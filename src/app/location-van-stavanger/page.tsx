export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';
import { isCityPublished } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Location van Stavanger : Preikestolen et fjords du sud',
  description: 'Louer un van à Stavanger pour randonner au Preikestolen, longer le Lysefjord et parcourir la côte sud de Norvège. Conseils, prix et itinéraires.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/location-van-stavanger/',
  },
  openGraph: {
    type: 'article',
    title: 'Location van Stavanger : Preikestolen et fjords du sud',
    description: 'Louer un van à Stavanger pour randonner au Preikestolen, longer le Lysefjord et parcourir la côte sud de Norvège.',
    url: 'https://www.explorenorwayvan.com/location-van-stavanger/',
    images: [{ url: '/images/og-image-norvege.jpg', width: 1200, height: 630, alt: 'Location van Stavanger Norvège' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Stavanger' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location van Stavanger : Preikestolen et fjords du sud',
  description: 'Louer un van à Stavanger pour randonner au Preikestolen, longer le Lysefjord et parcourir la côte sud de Norvège. Conseils, prix et itinéraires.',
  image: 'https://www.explorenorwayvan.com/images/van-point-vue.jpg',
  datePublished: '2026-04-04',
  dateModified: '2026-04-04',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan', url: 'https://www.explorenorwayvan.com' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan', logo: { '@type': 'ImageObject', url: 'https://www.explorenorwayvan.com/images/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.explorenorwayvan.com/location-van-stavanger/' },
};

export default function LocationStavangerPage() {
  if (!isCityPublished('location-van-stavanger')) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Location de van à Stavanger : entre fjords et falaises"
        subtitle="La ville du Preikestolen et du Lysefjord, point de départ idéal pour le sud-ouest norvégien."
        imageSrc="/images/van-point-vue.jpg"
        imageAlt="Point de vue sur les fjords depuis Stavanger en Norvège"
        badge="Fjords du sud-ouest"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} currentPath="/location-van-stavanger/" />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              <strong>Stavanger</strong> est la quatrième ville de Norvège et ancienne capitale européenne
              de la culture. Compacte et bien reliée par son aéroport international, elle attire les
              voyageurs grâce à la proximité du Preikestolen (Pulpit Rock), cette falaise de 604\u00a0m
              suspendue au-dessus du Lysefjord. La ville sert aussi de base à l&apos;industrie pétrolière
              norvégienne, ce qui explique ses infrastructures modernes et ses prix parfois élevés.
            </p>
            <p>
              Louer un van ici, c&apos;est pouvoir rejoindre le parking du Preikestolen en 40\u00a0minutes,
              puis enchaîner sur un road trip côtier vers Kristiansand ou remonter vers Bergen en
              longeant des fjords et en empruntant des ferries. Un bon choix pour ceux qui veulent
              combiner randonnée et conduite le long de la côte sud-ouest.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages / Inconvénients */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Louer à Stavanger : avantages et inconvénients
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-6 text-forest-700 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Avantages
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Preikestolen à 40\u00a0min</strong>
                    <p className="text-rock-600 text-sm">L&apos;une des randonnées les plus célèbres de Norvège, accessible en moins d&apos;une heure</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Lysefjord</strong>
                    <p className="text-rock-600 text-sm">Un fjord spectaculaire à deux pas de la ville, avec croisières et points de vue</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Aéroport international bien desservi</strong>
                    <p className="text-rock-600 text-sm">Vols directs depuis plusieurs villes européennes et liaisons fréquentes avec Oslo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Côte sud accessible</strong>
                    <p className="text-rock-600 text-sm">Route côtière vers Kristiansand, plages et phares du sud de la Norvège</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Climat plus doux que le nord</strong>
                    <p className="text-rock-600 text-sm">Influence maritime du Gulf Stream, hivers moins rigoureux</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-6 text-red-700 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Inconvénients
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Moins de choix de loueurs qu&apos;Oslo</strong>
                    <p className="text-rock-600 text-sm">Parc de véhicules plus limité, réservez tôt en été</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Route vers Bergen longue</strong>
                    <p className="text-rock-600 text-sm">Comptez 5h minimum avec au moins un ferry pour rejoindre Bergen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Prix élevés (ville pétrolière)</strong>
                    <p className="text-rock-600 text-sm">Hébergement, restaurants et services souvent plus chers que la moyenne</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Loin des grands fjords du nord-ouest</strong>
                    <p className="text-rock-600 text-sm">Geirangerfjord et Sognefjord restent à plusieurs heures de route</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comment trouver un van */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-6">
            Comment trouver un van à Stavanger
          </h2>
          <p className="text-center text-rock-700 max-w-3xl mx-auto mb-12">
            Pour trouver facilement un van au meilleur prix, nous vous conseillons d&apos;utiliser
            une plateforme de comparaison qui regroupe toutes les offres disponibles.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-fjord-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Comparez les offres</h3>
              <p className="text-rock-700">
                Accédez à des dizaines d&apos;offres de particuliers et professionnels en un seul endroit.
                Comparez les équipements, les avis et les tarifs.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Assurance incluse</h3>
              <p className="text-rock-700">
                Réservez en toute sérénité avec une assurance complète incluse. Assistance 24h/24
                et kilométrage souvent illimité.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-fjord-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Meilleurs prix</h3>
              <p className="text-rock-700">
                Bénéficiez des meilleurs tarifs grâce à la mise en concurrence des loueurs.
                Tarifs à partir de 85\u00a0€/jour selon la saison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Comparez les offres à Stavanger"
            description="Trouvez le meilleur tarif pour votre location de van au départ de Stavanger. Comparez les loueurs et réservez en ligne."
            buttonText="Voir les disponibilités"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Itinéraires depuis Stavanger */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Itinéraires au départ de Stavanger
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Stavanger → Preikestolen + Lysefjord
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 2-3 jours</li>
                <li>• Distance : ~80\u00a0km</li>
                <li>• Points forts : randonnée Preikestolen, croisière Lysefjord, Flørli</li>
              </ul>
              <p className="text-sm text-rock-600">
                Le classique au départ de Stavanger. Rando jusqu&apos;à la falaise le matin, croisière sur le fjord l&apos;après-midi.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Stavanger → Côte sud → Kristiansand
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 3-4 jours</li>
                <li>• Distance : ~350\u00a0km</li>
                <li>• Points forts : plages de sable, phares, villages blancs, Egersund</li>
              </ul>
              <p className="text-sm text-rock-600">
                La côte sud (Sørlandet) est la riviera norvégienne. Petites criques, eau turquoise en été et ambiance détendue.
              </p>
            </div>

            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Stavanger → Bergen via la côte
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 4-5 jours</li>
                <li>• Distance : ~200\u00a0km + ferries</li>
                <li>• Points forts : Haugesund, Hardangerfjord, traversées en ferry</li>
              </ul>
              <p className="text-sm text-rock-600">
                Un itinéraire qui mêle route côtière et traversées maritimes. Chaque ferry est une pause panoramique sur les fjords.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Stavanger → Kjeragbolten
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 2-3 jours</li>
                <li>• Distance : ~200\u00a0km</li>
                <li>• Points forts : randonnée Kjerag, Lysebotn, route aux 27\u00a0lacets</li>
              </ul>
              <p className="text-sm text-rock-600">
                La fameuse pierre coincée entre deux falaises, à 1\u00a0000\u00a0m d&apos;altitude. La descente vers Lysebotn par la route en lacets vaut le détour à elle seule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Conseils pratiques
          </h2>

          <div className="prose-custom max-w-4xl mx-auto">
            <h3>Randonnée du Preikestolen</h3>
            <p>
              Le sentier fait 8\u00a0km aller-retour et se parcourt en environ 4\u00a0heures. Le dénivelé
              est de 350\u00a0m. Partez tôt le matin (avant 8h en été) pour éviter la foule. Le sentier
              est bien balisé mais rocailleux par endroits. Prévoyez de bonnes chaussures de marche
              et de l&apos;eau en quantité suffisante.
            </p>

            <h3>Parking au Preikestolen Basecamp</h3>
            <p>
              Le parking officiel se trouve au Preikestolen Basecamp (anciennement Preikestolen
              Fjellstue). Comptez environ 300\u00a0NOK pour la journée. Un van peut s&apos;y garer sans
              problème, mais les places partent vite en haute saison. Le site dispose aussi de
              toilettes et d&apos;un café.
            </p>

            <h3>Ferries fréquents</h3>
            <p>
              La région de Stavanger est marquée par les fjords et les bras de mer. Plusieurs
              liaisons ferry fonctionnent toute l&apos;année entre les différentes rives. Pas besoin
              de réserver à l&apos;avance pour la plupart des traversées locales. Consultez le site
              kolumbus.no pour les horaires et tarifs.
            </p>

            <h3>Old Stavanger</h3>
            <p>
              Avant de prendre la route, accordez-vous une balade dans Old Stavanger (Gamle
              Stavanger). Ce quartier de 173\u00a0maisons en bois blanc date du XVIIIe siècle. C&apos;est
              l&apos;un des ensembles de maisons en bois les mieux conservés d&apos;Europe. Le musée du
              pétrole et le marché aux poissons méritent aussi un arrêt.
            </p>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="section-padding bg-rock-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-semibold mb-8">
            Voir aussi
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/location-van-oslo" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location van Oslo
            </Link>
            <Link href="/location-van-bergen" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location van Bergen
            </Link>
            <Link href="/location-van-tromso" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location van Tromsø
            </Link>
            <Link href="/itineraire-norvege-10-jours-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Itinéraire 10 jours
            </Link>
            <Link href="/prix-location-van-norvege" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Prix et budget
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
