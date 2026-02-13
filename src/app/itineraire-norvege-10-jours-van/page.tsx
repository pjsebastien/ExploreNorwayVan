import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Itinéraire Norvège 10 Jours en Van : Circuit Complet',
  description: 'Itinéraire détaillé de 10 jours en Norvège en van aménagé. Jour par jour : distances, points d\'intérêt, spots pour dormir et conseils pratiques.',
  alternates: {
    canonical: 'https://explorenorwayvan.com/itineraire-norvege-10-jours-van',
  },
  openGraph: {
    title: 'Itinéraire Norvège 10 Jours en Van : Circuit Complet',
    description: 'Circuit de 10 jours en Norvège en van : jour par jour, distances et conseils.',
    url: 'https://explorenorwayvan.com/itineraire-norvege-10-jours-van',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Itinéraire 10 Jours' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Itinéraire Norvège 10 Jours en Van : Circuit Complet',
  description: 'Itinéraire détaillé de 10 jours en Norvège en van aménagé.',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan' },
};

const itinerary = [
  {
    day: 1,
    title: 'Oslo - Drammen',
    distance: '45 km',
    duration: '1h',
    description: 'Récupération du van à Oslo et première étape tranquille. Explorez la capitale norvégienne le matin si vous avez le temps : parc Vigeland, opéra, quartier Aker Brygge.',
    highlights: ['Récupération du van', 'Visite d\'Oslo (optionnel)', 'Premiers achats de provisions'],
    overnight: 'Aire de camping à Drammen ou environs',
  },
  {
    day: 2,
    title: 'Drammen - Hardangervidda - Eidfjord',
    distance: '280 km',
    duration: '4h30',
    description: 'Traversée du plateau de Hardangervidda, le plus grand parc national de Norvège. Paysages lunaires à perte de vue, possibilité de voir des rennes sauvages.',
    highlights: ['Plateau du Hardangervidda', 'Cascade Vøringsfossen (182m)', 'Descente vers Eidfjord'],
    overnight: 'Camping sauvage au bord du Hardangerfjord',
  },
  {
    day: 3,
    title: 'Eidfjord - Voss - Bergen',
    distance: '150 km',
    duration: '3h',
    description: 'Route panoramique vers Bergen en longeant le Hardangerfjord. Arrêt à Voss, capitale norvégienne des sports extrêmes. Arrivée à Bergen en fin d\'après-midi.',
    highlights: ['Hardangerfjord', 'Voss et ses activités outdoor', 'Quartier Bryggen (UNESCO)'],
    overnight: 'Camping ou aire près de Bergen',
  },
  {
    day: 4,
    title: 'Bergen - Sognefjord - Flåm',
    distance: '170 km',
    duration: '3h + ferry',
    description: 'Direction le roi des fjords : le Sognefjord. Ferry pittoresque et route vers Flåm, au fond du Aurlandsfjord.',
    highlights: ['Ferry sur le Sognefjord', 'Village de Flåm', 'Train de Flåm (optionnel, à réserver)'],
    overnight: 'Camping à Flåm ou camping sauvage Aurland',
  },
  {
    day: 5,
    title: 'Flåm - Geiranger',
    distance: '220 km',
    duration: '5h + ferries',
    description: 'Journée de route spectaculaire avec plusieurs ferries. Traversée du Nærøyfjord (UNESCO) puis route vers le légendaire Geirangerfjord.',
    highlights: ['Nærøyfjord en ferry', 'Route de montagne Gaularfjellet', 'Arrivée au Geirangerfjord'],
    overnight: 'Camping ou spot avec vue sur Geirangerfjord',
  },
  {
    day: 6,
    title: 'Geiranger - Trollstigen - Åndalsnes',
    distance: '110 km',
    duration: '3h',
    description: 'La journée la plus spectaculaire du voyage. Route des Aigles (Ørnesvingen) puis descente de la mythique Trollstigen.',
    highlights: ['Point de vue Ørnesvingen', 'Trollstigen (Route des Trolls)', 'Åndalsnes au pied du Romsdalshorn'],
    overnight: 'Camping sauvage vallée de Romsdalen',
  },
  {
    day: 7,
    title: 'Åndalsnes - Route de l\'Atlantique - Kristiansund',
    distance: '180 km',
    duration: '3h30',
    description: 'Direction la côte ouest pour emprunter la célèbre Route de l\'Atlantique (Atlanterhavsveien), élue plus belle route du monde.',
    highlights: ['Trollveggen (plus haute paroi d\'Europe)', 'Route de l\'Atlantique', 'Storseisundet Bridge'],
    overnight: 'Aire ou camping près d\'Averøy',
  },
  {
    day: 8,
    title: 'Kristiansund - Trondheim',
    distance: '200 km',
    duration: '3h',
    description: 'Route côtière vers Trondheim, troisième ville de Norvège. Journée plus tranquille pour recharger les batteries.',
    highlights: ['Ville historique de Trondheim', 'Cathédrale Nidarosdomen', 'Quartier Bakklandet'],
    overnight: 'Camping ou aire aux alentours de Trondheim',
  },
  {
    day: 9,
    title: 'Trondheim - Røros',
    distance: '160 km',
    duration: '2h30',
    description: 'Cap vers l\'intérieur des terres et la ville minière de Røros, classée UNESCO. Architecture en bois préservée depuis le 17e siècle.',
    highlights: ['Røros (UNESCO)', 'Anciennes mines de cuivre', 'Architecture traditionnelle'],
    overnight: 'Camping ou spot nature près de Røros',
  },
  {
    day: 10,
    title: 'Røros - Oslo',
    distance: '380 km',
    duration: '5h',
    description: 'Retour vers Oslo par la route intérieure à travers les forêts et vallées. Restitution du van en fin de journée.',
    highlights: ['Paysages de l\'intérieur norvégien', 'Vallée de Gudbrandsdalen', 'Retour du van à Oslo'],
    overnight: 'Fin du voyage',
  },
];

export default function ItinerairePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="10 jours pour découvrir la Norvège en van"
        subtitle="Circuit complet d'Oslo à Trondheim : fjords, Trollstigen et Route de l'Atlantique."
        imageSrc="/images/voyage-van-montagnes.jpg"
        imageAlt="Route panoramique norvégienne serpentant entre les montagnes"
        badge="~1 900 km de découvertes"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Résumé */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-fjord-50 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-fjord-600 mb-2">10</p>
              <p className="text-rock-600">jours</p>
            </div>
            <div className="bg-forest-50 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-forest-600 mb-2">~1 900</p>
              <p className="text-rock-600">kilomètres</p>
            </div>
            <div className="bg-fjord-50 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-fjord-600 mb-2">5+</p>
              <p className="text-rock-600">ferries</p>
            </div>
            <div className="bg-forest-50 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-forest-600 mb-2">3</p>
              <p className="text-rock-600">fjords majeurs</p>
            </div>
          </div>

          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              Cet <strong>itinéraire de 10 jours en Norvège en van</strong> vous emmène à la découverte des
              plus beaux paysages du pays : fjords spectaculaires, <Link href="/road-trip-norvege-van" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">routes panoramiques légendaires</Link> et villages
              authentiques. Au départ d&apos;<Link href="/location-van-oslo" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">Oslo</Link>, vous traverserez le Hardangerfjord, le Sognefjord et le
              Geirangerfjord, avant d&apos;emprunter la mythique Trollstigen et la Route de l&apos;Atlantique.
            </p>
            <p>
              Ce circuit est idéal pour une première découverte de la Norvège. Il concentre les incontournables
              tout en laissant du temps pour profiter de chaque étape grâce au <Link href="/camping-sauvage-norvege-van" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">camping sauvage</Link>. Les distances journalières restent
              raisonnables (3-5h de route) pour vous permettre de faire des arrêts et de savourer les paysages.
              Pour estimer votre budget, consultez notre page sur les <Link href="/prix-location-van-norvege" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">prix de location</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Itinéraire jour par jour */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Itinéraire jour par jour
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {itinerary.map((day, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-fjord-600 to-fjord-700 text-white p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <span className="text-fjord-200 text-sm font-medium">Jour {day.day}</span>
                      <h3 className="text-xl font-display font-semibold mt-1">{day.title}</h3>
                    </div>
                    <div className="flex gap-4 mt-3 md:mt-0">
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        {day.distance}
                      </span>
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        ~{day.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-rock-700 mb-4">{day.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-rock-800 mb-2">Points d&apos;intérêt :</h4>
                    <ul className="flex flex-wrap gap-2">
                      {day.highlights.map((highlight, i) => (
                        <li key={i} className="bg-forest-50 text-forest-700 text-sm px-3 py-1 rounded-full">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-rock-600">
                    <svg className="w-5 h-5 mr-2 text-fjord-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span className="text-sm"><strong>Nuit :</strong> {day.overnight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AffiliateCTA
            title="Réservez votre van pour cet itinéraire"
            description="Comparez les offres de location de van au départ d'Oslo et trouvez le véhicule idéal pour ce circuit de 10 jours."
            buttonText="Voir les offres Oslo"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Conseils */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Conseils pour cet itinéraire
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4">Meilleure période</h3>
              <p className="text-rock-600 mb-4">
                Ce circuit est idéal de <strong>mi-mai à mi-septembre</strong>. La Trollstigen
                et certaines routes de montagne sont fermées en hiver. Juin-juillet offrent les
                plus longues journées (soleil de minuit dans le nord).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4">Ferries</h3>
              <p className="text-rock-600 mb-4">
                Prévoyez un <strong>budget ferry de 200-300€</strong> pour l&apos;ensemble du circuit.
                Les traversées sont fréquentes, mais en haute saison, arrivez à l&apos;avance
                aux embarcadères les plus populaires.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4">Variante possible</h3>
              <p className="text-rock-600 mb-4">
                Si vous avez 14 jours, prolongez vers les <strong>îles Lofoten</strong> au-delà
                de Trondheim. Comptez 2-3 jours supplémentaires minimum pour cette extension
                spectaculaire.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4">Sens du circuit</h3>
              <p className="text-rock-600 mb-4">
                Ce circuit peut se faire dans les deux sens. En partant de <strong>Bergen</strong>,
                vous inversez simplement l&apos;ordre des étapes. L&apos;avantage d&apos;Oslo : plus de
                choix de vols et de loueurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="section-padding bg-rock-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-semibold mb-8">
            Complétez votre préparation
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/prix-location-van-norvege" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Prix et budget
            </Link>
            <Link href="/camping-sauvage-norvege-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Camping sauvage
            </Link>
            <Link href="/location-van-oslo" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location van Oslo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
