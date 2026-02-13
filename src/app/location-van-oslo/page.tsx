import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Location Van Oslo : Loueurs, Prix et Conseils',
  description: 'Location de van à Oslo : découvrez les meilleurs loueurs, les tarifs, les conseils pratiques et les itinéraires au départ de la capitale norvégienne.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/location-van-oslo',
  },
  openGraph: {
    title: 'Location Van Oslo : Loueurs, Prix et Conseils',
    description: 'Tout savoir pour louer un van à Oslo : loueurs, tarifs et itinéraires.',
    url: 'https://www.explorenorwayvan.com/location-van-oslo',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Oslo' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Oslo : Loueurs, Prix et Conseils',
  description: 'Tout savoir pour louer un van à Oslo.',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan' },
};

export default function LocationOsloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Location de van à Oslo : partez à l'aventure"
        subtitle="La capitale norvégienne offre le plus grand choix de vans et les meilleures connexions."
        imageSrc="/images/van-paysage-spectaculaire.jpg"
        imageAlt="Vue panoramique d'Oslo avec l'opéra et le fjord"
        badge="Capitale de la Norvège"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              <strong>Oslo</strong> est le point de départ le plus populaire pour une location de van en
              Norvège. Capitale du pays et principal hub aérien international, elle offre le plus grand
              choix de loueurs et les meilleures connexions avec le reste de l&apos;Europe. Que vous arriviez
              de France, de Belgique ou de Suisse, vous trouverez facilement des vols directs vers Oslo.
            </p>
            <p>
              Louer un van à Oslo vous permet d&apos;accéder rapidement aux régions les plus spectaculaires
              de Norvège : le plateau du Hardangervidda, les fjords de l&apos;Ouest, la côte sud ou même
              les îles Lofoten pour les plus aventureux. La ville elle-même mérite un jour de visite
              avant de prendre la route.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages / Inconvénients */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Louer à Oslo : avantages et inconvénients
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
                    <strong>Large choix de loueurs</strong>
                    <p className="text-rock-600 text-sm">Plus de 10 agences de location de vans et camping-cars</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Vols internationaux nombreux</strong>
                    <p className="text-rock-600 text-sm">Liaisons directes depuis la plupart des capitales européennes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Prix souvent plus compétitifs</strong>
                    <p className="text-rock-600 text-sm">La concurrence entre loueurs tire les prix vers le bas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Accès aux routes E6 et E16</strong>
                    <p className="text-rock-600 text-sm">Connexion rapide vers toutes les régions du pays</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Possibilité de boucle</strong>
                    <p className="text-rock-600 text-sm">Retour facile au point de départ, évite les frais one-way</p>
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
                    <strong>Distance jusqu&apos;aux fjords</strong>
                    <p className="text-rock-600 text-sm">4-5h de route pour atteindre les grands fjords de l&apos;Ouest</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Trafic urbain</strong>
                    <p className="text-rock-600 text-sm">Circulation dense aux heures de pointe pour sortir de la ville</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Péages à la sortie</strong>
                    <p className="text-rock-600 text-sm">Plusieurs péages automatiques autour d&apos;Oslo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Temps perdu en transit</strong>
                    <p className="text-rock-600 text-sm">Une demi-journée minimum pour rejoindre les paysages spectaculaires</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi louer à Oslo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-6">
            Comment trouver un van à Oslo
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
                Tarifs à partir de 80€/jour selon la saison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Comparez les offres à Oslo"
            description="Trouvez le meilleur tarif pour votre location de van au départ d'Oslo. Comparez les loueurs et réservez en ligne."
            buttonText="Voir les disponibilités"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Itinéraires depuis Oslo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Itinéraires populaires au départ d&apos;Oslo
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Oslo → Bergen (via fjords)
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 5-7 jours minimum</li>
                <li>• Distance : ~500 km</li>
                <li>• Points forts : Hardangervidda, Hardangerfjord, Sognefjord</li>
              </ul>
              <p className="text-sm text-rock-600">
                Le classique pour découvrir les fjords avec possibilité de retour en one-way.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Boucle Oslo → Trollstigen → Oslo
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 8-10 jours</li>
                <li>• Distance : ~1 500 km</li>
                <li>• Points forts : Geirangerfjord, Trollstigen, Route de l&apos;Atlantique</li>
              </ul>
              <p className="text-sm text-rock-600">
                Circuit complet incluant les routes panoramiques les plus célèbres.
              </p>
            </div>

            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Oslo → Sud de la Norvège
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 5-7 jours</li>
                <li>• Distance : ~600 km</li>
                <li>• Points forts : Kristiansand, côte sud, Stavanger, Preikestolen</li>
              </ul>
              <p className="text-sm text-rock-600">
                Idéal pour ceux qui cherchent un climat plus doux et des plages.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Oslo → Lofoten (grande aventure)
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 14-21 jours</li>
                <li>• Distance : ~2 500 km aller</li>
                <li>• Points forts : Trondheim, Lofoten, cercle polaire</li>
              </ul>
              <p className="text-sm text-rock-600">
                L&apos;aventure ultime pour les voyageurs disposant de plus de temps.
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
            <h3>Récupérer votre van à Oslo</h3>
            <p>
              La plupart des loueurs sont situés en périphérie d&apos;Oslo, souvent près de l&apos;aéroport
              de Gardermoen ou dans les zones industrielles. Certains proposent un service de navette
              depuis l&apos;aéroport ou le centre-ville. Prévoyez 1-2 heures pour les formalités de prise
              en charge (état des lieux, explications du véhicule, signature du contrat).
            </p>

            <h3>Quitter Oslo efficacement</h3>
            <p>
              Évitez de quitter Oslo aux heures de pointe (7h-9h et 16h-18h). La circulation peut être
              dense sur les axes principaux. Si possible, passez votre première nuit dans la région
              d&apos;Oslo et partez tôt le lendemain matin. La route E16 vers l&apos;ouest et la E6 vers
              le nord sont les axes principaux pour rejoindre les fjords.
            </p>

            <h3>Derniers achats avant le départ</h3>
            <p>
              Profitez d&apos;Oslo pour faire vos courses dans les supermarchés bien achalandés (Rema 1000,
              Kiwi, Meny). Les prix seront similaires dans le reste du pays, mais le choix est plus
              large en ville. N&apos;oubliez pas d&apos;acheter un adaptateur de gaz si votre van fonctionne
              au gaz butane/propane.
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
            <Link href="/location-van-bergen" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location van Bergen
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
