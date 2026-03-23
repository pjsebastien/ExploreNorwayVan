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
  title: 'Location van Tromsø : aurores boréales et grand nord',
  description: 'Louer un van à Tromsø pour chasser les aurores boréales, longer les fjords du nord et vivre l\u2019Arctique en liberté. Prix, itinéraires et conseils.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/location-van-tromso/',
  },
  openGraph: {
    type: 'article',
    title: 'Location van Tromsø : aurores boréales et grand nord',
    description: 'Louer un van à Tromsø pour chasser les aurores boréales, longer les fjords du nord et vivre l\u2019Arctique en liberté.',
    url: 'https://www.explorenorwayvan.com/location-van-tromso/',
    images: [{ url: '/images/og-image-norvege.jpg', width: 1200, height: 630, alt: 'Location van Tromsø Norvège' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Tromsø' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location van Tromsø : aurores boréales et grand nord',
  description: 'Louer un van à Tromsø pour chasser les aurores boréales, longer les fjords du nord et vivre l\u2019Arctique en liberté. Prix, itinéraires et conseils.',
  image: 'https://www.explorenorwayvan.com/images/aventure-van-fjords.jpg',
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan', url: 'https://www.explorenorwayvan.com' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan', logo: { '@type': 'ImageObject', url: 'https://www.explorenorwayvan.com/images/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.explorenorwayvan.com/location-van-tromso/' },
};

export default function LocationTromsoPage() {
  if (!isCityPublished('location-van-tromso')) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Location de van à Tromsø : cap sur l'Arctique"
        subtitle="La porte d'entrée du Grand Nord, entre aurores boréales, fjords sauvages et soleil de minuit."
        imageSrc="/images/aventure-van-fjords.jpg"
        imageAlt="Fjord du nord de la Norvège près de Tromsø"
        badge="Nord de la Norvège"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} currentPath="/location-van-tromso/" />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              <strong>Tromsø</strong> se trouve à plus de 300\u00a0km au nord du cercle polaire arctique. Surnommée
              «\u00a0Paris du Nord\u00a0», cette ville universitaire concentre une vie culturelle étonnante pour
              sa latitude\u00a0: musées, restaurants de poisson frais, brasseries artisanales et une cathédrale
              arctique reconnaissable entre toutes.
            </p>
            <p>
              Depuis Tromsø, les routes filent vers les Lofoten, le Cap Nord et les Alpes de Lyngen.
              Plusieurs compagnies aériennes relient la ville à Oslo en moins de deux heures, et quelques
              vols directs arrivent de capitales européennes comme Londres ou Stockholm. Un van récupéré
              ici place le voyageur au c\u0153ur de paysages arctiques dès la première heure de conduite.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages / Inconvénients */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Louer à Tromsø : avantages et inconvénients
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
                    <strong>Porte d&apos;entrée de l&apos;Arctique</strong>
                    <p className="text-rock-600 text-sm">Accès immédiat aux paysages du Grand Nord dès la sortie de la ville</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Aurores boréales (sept-mars)</strong>
                    <p className="text-rock-600 text-sm">L&apos;un des meilleurs spots au monde pour observer les aurores depuis votre van</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Soleil de minuit (mai-juil)</strong>
                    <p className="text-rock-600 text-sm">24h de lumière pour rouler et randonner sans contrainte horaire</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Alpes de Lyngen à 1h</strong>
                    <p className="text-rock-600 text-sm">Sommets enneigés, fjords étroits et sentiers de randonnée grandioses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Nature sauvage peu fréquentée</strong>
                    <p className="text-rock-600 text-sm">Bien moins de touristes que dans les fjords du sud-ouest</p>
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
                    <strong>Vols plus chers</strong>
                    <p className="text-rock-600 text-sm">Les billets d&apos;avion vers Tromsø coûtent souvent plus que vers Oslo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Moins de loueurs qu&apos;Oslo</strong>
                    <p className="text-rock-600 text-sm">Choix de véhicules plus restreint, surtout en haute saison</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Routes enneigées en hiver</strong>
                    <p className="text-rock-600 text-sm">Pneus hiver obligatoires et cols parfois fermés de novembre à avril</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Distances longues vers le sud</strong>
                    <p className="text-rock-600 text-sm">Plus de 1\u00a0800\u00a0km pour rejoindre Oslo par la route</p>
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
            Comment trouver un van à Tromsø
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
                Tarifs à partir de 90\u00a0€/jour selon la saison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Comparez les offres à Tromsø"
            description="Trouvez le meilleur tarif pour votre location de van au départ de Tromsø. Comparez les loueurs et réservez en ligne."
            buttonText="Voir les disponibilités"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Itinéraires depuis Tromsø */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Itinéraires au départ de Tromsø
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Tromsø → Lofoten
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 3-5 jours</li>
                <li>• Distance : ~400\u00a0km</li>
                <li>• Points forts : paysages arctiques, villages de pêcheurs, plages de sable blanc</li>
              </ul>
              <p className="text-sm text-rock-600">
                Un trajet spectaculaire le long de la côte, avec des arrêts sur les îles Vesterålen avant de rejoindre les Lofoten.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Tromsø → Cap Nord
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 4-6 jours</li>
                <li>• Distance : ~700\u00a0km</li>
                <li>• Points forts : Hammerfest, Nordkapp, toundra du Finnmark</li>
              </ul>
              <p className="text-sm text-rock-600">
                La route vers le point le plus septentrional d&apos;Europe continentale. Paysages de toundra, rennes en bord de route et lumière polaire.
              </p>
            </div>

            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Tromsø → Alpes de Lyngen
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 1-2 jours</li>
                <li>• Distance : ~100\u00a0km</li>
                <li>• Points forts : fjords étroits, sommets enneigés, randonnées alpines</li>
              </ul>
              <p className="text-sm text-rock-600">
                Une escapade courte mais intense. Les Alpes de Lyngen ressemblent à la Patagonie norvégienne, avec des glaciers qui plongent dans les fjords.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Tromsø → Senja
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 2-3 jours</li>
                <li>• Distance : ~200\u00a0km</li>
                <li>• Points forts : routes côtières, plages isolées, Bergsbotn et Husøy</li>
              </ul>
              <p className="text-sm text-rock-600">
                L&apos;île de Senja est souvent comparée aux Lofoten, mais avec une fraction des visiteurs. Routes sinueuses et points de vue à couper le souffle.
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
            <h3>Récupérer votre van à Tromsø</h3>
            <p>
              Les loueurs sont généralement situés près de l&apos;aéroport de Langnes ou en périphérie
              de la ville. L&apos;aéroport se trouve à seulement 5\u00a0km du centre, ce qui rend la prise
              en charge rapide. Comptez environ une heure pour l&apos;état des lieux et la signature
              du contrat.
            </p>

            <h3>Quitter Tromsø</h3>
            <p>
              La ville est compacte et le trafic rarement un problème. Prenez la E6 vers le sud
              pour les Lofoten et Senja, ou vers le nord pour le Cap Nord. La E8 conduit aux Alpes
              de Lyngen en longeant un fjord magnifique. Rouler de nuit en été est tout à fait
              possible grâce au soleil de minuit.
            </p>

            <h3>Pneus hiver et conditions routières</h3>
            <p>
              D&apos;octobre à avril, les pneus hiver sont obligatoires en Norvège. Vérifiez ce point
              avec votre loueur avant de partir. Certaines routes de montagne ferment pendant
              l&apos;hiver, notamment le col entre Tromsø et les Alpes de Lyngen. Consultez le site
              vegvesen.no pour l&apos;état des routes en temps réel.
            </p>

            <h3>Courses et ravitaillement</h3>
            <p>
              Tromsø dispose de plusieurs supermarchés Rema\u00a01000, Kiwi et Coop. Faites le plein
              de provisions avant de quitter la ville, car les villages suivants sont petits et les
              magasins rares. Le centre-ville compte aussi de bons restaurants de poisson si vous
              souhaitez vous accorder un repas avant la route.
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
            <Link href="/location-van-stavanger" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location van Stavanger
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
