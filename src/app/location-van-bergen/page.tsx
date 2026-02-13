import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Location Van Bergen : La Porte des Fjords',
  description: 'Location de van à Bergen : découvrez les loueurs, les tarifs et pourquoi Bergen est le point de départ idéal pour explorer les fjords norvégiens.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/location-van-bergen',
  },
  openGraph: {
    title: 'Location Van Bergen : La Porte des Fjords',
    description: 'Louez un van à Bergen et plongez immédiatement au cœur des fjords.',
    url: 'https://www.explorenorwayvan.com/location-van-bergen',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Bergen' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location Van Bergen : La Porte des Fjords',
  description: 'Tout savoir pour louer un van à Bergen.',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan' },
};

export default function LocationBergenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Location de van à Bergen : la porte des fjords"
        subtitle="La 'porte des fjords' vous offre un accès immédiat aux plus beaux paysages de Norvège."
        imageSrc="/images/aventure-van-fjords.jpg"
        imageAlt="Quartier historique de Bryggen à Bergen avec ses maisons colorées"
        badge="Porte des Fjords"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              <strong>Bergen</strong>, deuxième ville de Norvège, est surnommée la &quot;porte des fjords&quot;
              et pour cause : elle est nichée au fond d&apos;un fjord, entourée de sept montagnes, et offre
              un accès direct aux paysages les plus spectaculaires du pays. Louer un van à Bergen vous
              permet d&apos;être immédiatement au cœur de l&apos;action, sans les longues heures de route
              nécessaires depuis Oslo.
            </p>
            <p>
              La ville elle-même est un bijou : son quartier historique de Bryggen, classé UNESCO,
              ses maisons en bois colorées et son marché aux poissons en font une étape incontournable.
              Prenez le temps de la découvrir avant de partir à l&apos;aventure dans les fjords environnants.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages / Inconvénients */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Louer à Bergen : avantages et inconvénients
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
                    <strong>Accès immédiat aux fjords</strong>
                    <p className="text-rock-600 text-sm">Hardangerfjord et Sognefjord à moins de 2h de route</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Ville magnifique à explorer</strong>
                    <p className="text-rock-600 text-sm">Bryggen (UNESCO), funiculaire Fløibanen, marché aux poissons</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Connexion ferry vers les Lofoten</strong>
                    <p className="text-rock-600 text-sm">Hurtigruten et ferries côtiers vers le nord</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Ambiance côtière authentique</strong>
                    <p className="text-rock-600 text-sm">Villages de pêcheurs, fruits de mer frais</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong>Moins de touristes qu&apos;Oslo</strong>
                    <p className="text-rock-600 text-sm">Atmosphère plus détendue et authentique</p>
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
                    <strong>Moins de choix de loueurs</strong>
                    <p className="text-rock-600 text-sm">Offre plus limitée qu&apos;à Oslo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Vols moins nombreux</strong>
                    <p className="text-rock-600 text-sm">Moins de liaisons internationales directes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Météo très pluvieuse</strong>
                    <p className="text-rock-600 text-sm">Bergen est l&apos;une des villes les plus pluvieuses d&apos;Europe</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <div>
                    <strong>Frais de one-way élevés</strong>
                    <p className="text-rock-600 text-sm">Supplément important pour rendre le van ailleurs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comment louer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-6">
            Comment louer un van à Bergen
          </h2>
          <p className="text-center text-rock-700 max-w-3xl mx-auto mb-12">
            Utilisez une plateforme de comparaison pour trouver le van idéal parmi toutes
            les offres disponibles à Bergen.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card p-6">
              <div className="w-12 h-12 bg-fjord-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Large choix</h3>
              <p className="text-rock-700">
                Accédez à toutes les offres disponibles : vans compacts, fourgons aménagés
                ou camping-cars familiaux.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Trajet aller simple</h3>
              <p className="text-rock-700">
                Possibilité de rendre le van dans une autre ville pour optimiser
                votre itinéraire (Bergen → Oslo par exemple).
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-fjord-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Réservation simple</h3>
              <p className="text-rock-700">
                Réservez en quelques clics avec paiement sécurisé et confirmation
                instantanée de votre location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            variant="secondary"
            title="Trouvez votre van à Bergen"
            description="Comparez les offres de location de van au départ de Bergen et réservez votre aventure dans les fjords."
            buttonText="Voir les disponibilités"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Itinéraires depuis Bergen */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Itinéraires au départ de Bergen
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Bergen → Hardangerfjord → Bergen
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 3-5 jours</li>
                <li>• Distance : ~300 km</li>
                <li>• Points forts : Vøringsfossen, Trolltunga, vergers en fleurs</li>
              </ul>
              <p className="text-sm text-rock-600">
                Boucle parfaite pour un court séjour, avec le célèbre Trolltunga si vous êtes sportif.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Bergen → Sognefjord → Geiranger
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 5-7 jours</li>
                <li>• Distance : ~400 km</li>
                <li>• Points forts : Flåm, Nærøyfjord (UNESCO), Geirangerfjord</li>
              </ul>
              <p className="text-sm text-rock-600">
                Le meilleur des fjords norvégiens concentré en une semaine.
              </p>
            </div>

            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Bergen → Stavanger (côte sud)
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 4-5 jours</li>
                <li>• Distance : ~200 km</li>
                <li>• Points forts : Preikestolen, Lysefjord, Kjeragbolten</li>
              </ul>
              <p className="text-sm text-rock-600">
                Idéal pour les randonneurs avec les sites les plus iconiques de Norvège.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Bergen → Oslo (one-way)
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>• Durée : 5-7 jours</li>
                <li>• Distance : ~500 km</li>
                <li>• Points forts : Traversée des fjords, Hardangervidda</li>
              </ul>
              <p className="text-sm text-rock-600">
                Pratique si vous arrivez à Bergen et repartez d&apos;Oslo (ou inversement).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Découvrir Bergen */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Que voir à Bergen avant de partir
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-fjord-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-display font-semibold mb-2">Bryggen</h3>
              <p className="text-rock-600 text-sm">Quartier hanséatique classé UNESCO, maisons en bois colorées</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold mb-2">Fløibanen</h3>
              <p className="text-rock-600 text-sm">Funiculaire avec vue panoramique sur la ville et les fjords</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-fjord-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold mb-2">Fisketorget</h3>
              <p className="text-rock-600 text-sm">Marché aux poissons historique, fruits de mer frais</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-display font-semibold mb-2">KODE</h3>
              <p className="text-rock-600 text-sm">Musées d&apos;art avec collections d&apos;Edvard Munch</p>
            </div>
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
            <Link href="/road-trip-norvege-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Routes panoramiques
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
