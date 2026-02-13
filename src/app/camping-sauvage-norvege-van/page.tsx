import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Camping Sauvage en Norvège en Van : Règles et Conseils',
  description: 'Camping sauvage en Norvège en van : Allemannsretten, règles à respecter, meilleurs spots et conseils pratiques pour camper en liberté.',
  alternates: {
    canonical: 'https://explorenorwayvan.com/camping-sauvage-norvege-van',
  },
  openGraph: {
    title: 'Camping Sauvage en Norvège en Van : Règles et Conseils',
    description: 'Camping sauvage en Norvège : Allemannsretten, règles et meilleurs spots.',
    url: 'https://explorenorwayvan.com/camping-sauvage-norvege-van',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Camping Sauvage Norvège' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Camping Sauvage en Norvège en Van : Règles et Conseils',
  description: 'Tout savoir sur le camping sauvage en Norvège en van aménagé.',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan' },
};

export default function CampingSauvagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Camper librement en Norvège : vos droits"
        subtitle="L'Allemannsretten vous permet de dormir presque partout. Voici comment en profiter."
        imageSrc="/images/van-paysage-spectaculaire.jpg"
        imageAlt="Van garé face à un paysage naturel spectaculaire en Norvège"
        badge="Allemannsretten"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              Le <strong>camping sauvage en Norvège</strong> est une pratique légale et encouragée grâce à
              l&apos;<strong>Allemannsretten</strong>, le &quot;droit de tout un chacun&quot;. Ce principe ancestral,
              inscrit dans la loi norvégienne, garantit à chacun le droit d&apos;accéder librement à la nature,
              d&apos;y camper et d&apos;en profiter, à condition de respecter quelques règles simples.
            </p>
            <p>
              Pour les voyageurs en <Link href="/" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">van aménagé</Link>, c&apos;est une opportunité extraordinaire de vivre des expériences
              uniques : se réveiller face à un fjord lors de votre <Link href="/road-trip-norvege-van" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">road trip</Link>, passer la nuit au pied d&apos;une cascade, ou s&apos;endormir
              sous le spectacle des aurores boréales. Voici tout ce qu&apos;il faut savoir
              pour profiter de cette liberté en toute légalité et dans le respect de l&apos;environnement. Pour d&apos;autres
              options d&apos;hébergement, consultez notre article sur <Link href="/dormir-en-van-norvege" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">où dormir en van en Norvège</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Allemannsretten */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                L&apos;Allemannsretten : le droit d&apos;accès à la nature
              </h2>
              <div className="prose-custom">
                <p>
                  L&apos;Allemannsretten (litteralement &quot;le droit de tous&quot;) est un droit coutumier
                  norvégien codifié dans la loi sur les loisirs en plein air (Friluftsloven) de 1957.
                  Il garantit à toute personne le droit de :
                </p>
                <ul>
                  <li>Traverser librement les terres non cultivées</li>
                  <li>Camper dans la nature pour une courte durée</li>
                  <li>Cueillir des baies, champignons et fleurs sauvages</li>
                  <li>Pêcher en mer et dans les fjords</li>
                  <li>Se baigner dans les lacs et rivières</li>
                </ul>
                <p>
                  Ce droit s&apos;applique à tous, Norvégiens comme étrangers. Il fait partie intégrante
                  de la culture norvégienne et du concept de <em>friluftsliv</em> (vie en plein air),
                  qui valorise le contact avec la nature comme source de bien-être.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/camping-van-nature.jpg"
                alt="Paysage norvégien illustrant le droit d'accès à la nature"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Règles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Les règles à respecter
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 border-l-4 border-forest-500">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Distance des habitations</h3>
              <p className="text-rock-600">
                Maintenez une distance d&apos;au moins <strong>150 mètres</strong> de toute habitation
                ou chalet occupé. Cette règle garantit le respect de la vie privée des résidents.
              </p>
            </div>

            <div className="card p-8 border-l-4 border-fjord-500">
              <div className="w-12 h-12 bg-fjord-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Durée de séjour</h3>
              <p className="text-rock-600">
                Ne restez pas plus de <strong>2 nuits consécutives</strong> au même endroit, sauf
                en montagne ou dans les zones très isolées où la tolérance est plus grande.
              </p>
            </div>

            <div className="card p-8 border-l-4 border-forest-500">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Terrains interdits</h3>
              <p className="text-rock-600">
                Le camping est interdit sur les <strong>terrains cultivés</strong>, les jardins privés,
                les propriétés clôturées et certaines réserves naturelles protégées.
              </p>
            </div>

            <div className="card p-8 border-l-4 border-fjord-500">
              <div className="w-12 h-12 bg-fjord-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Zéro déchet</h3>
              <p className="text-rock-600">
                Emportez <strong>tous vos déchets</strong> sans exception. Ne laissez aucune trace
                de votre passage. Utilisez des sacs poubelle et triez si possible.
              </p>
            </div>

            <div className="card p-8 border-l-4 border-forest-500">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Feux de camp</h3>
              <p className="text-rock-600">
                Les feux sont <strong>interdits du 15 avril au 15 septembre</strong> pour prévenir
                les incendies de forêt. Utilisez un réchaud pour cuisiner.
              </p>
            </div>

            <div className="card p-8 border-l-4 border-fjord-500">
              <div className="w-12 h-12 bg-fjord-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Discrétion</h3>
              <p className="text-rock-600">
                Soyez <strong>discrets</strong> : pas de musique forte, évitez les groupes
                bruyants. Arrivez tard, partez tôt, et respectez la tranquillité des lieux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités van */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Spécificités pour les vans et camping-cars
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-700">
                Ce que dit la loi pour les véhicules motorisés
              </h3>
              <div className="prose-custom">
                <p>
                  L&apos;Allemannsretten s&apos;applique principalement aux <strong>piétons et campeurs à pied</strong>.
                  Pour les véhicules motorisés comme les vans et camping-cars, la situation est plus nuancée :
                </p>
                <ul>
                  <li>Le stationnement nocturne est toléré sur les aires de repos et parkings publics</li>
                  <li>Les routes privées et chemins forestiers sont généralement interdits aux véhicules</li>
                  <li>Certaines communes ont des réglementations locales restrictives</li>
                  <li>Les zones touristiques populaires peuvent interdire le stationnement nocturne</li>
                </ul>
                <p>
                  En pratique, la Norvège reste très tolérante envers les vanlifers respectueux. La clé
                  est de ne pas s&apos;installer de manière permanente, de ne laisser aucune trace et de
                  respecter les éventuelles interdictions locales signalées par des panneaux.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-forest-50 rounded-xl p-6">
                <h4 className="font-display font-semibold text-lg mb-4 text-forest-800">
                  ✓ Où vous pouvez stationner
                </h4>
                <ul className="space-y-2 text-rock-700">
                  <li>• Aires de repos le long des routes</li>
                  <li>• Parkings de départ de randonnée</li>
                  <li>• Zones de stationnement non réglementées</li>
                  <li>• En pleine nature loin des habitations</li>
                  <li>• Avec l&apos;accord du propriétaire sur terrain privé</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h4 className="font-display font-semibold text-lg mb-4 text-red-800">
                  ✗ Où éviter de stationner
                </h4>
                <ul className="space-y-2 text-rock-700">
                  <li>• Parkings avec panneau d&apos;interdiction</li>
                  <li>• Centres-villes et zones urbaines</li>
                  <li>• Sites touristiques très fréquentés</li>
                  <li>• Propriétés privées clôturées</li>
                  <li>• Zones de protection de la nature</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Respect environnement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-6">
            Respect de l&apos;environnement
          </h2>
          <p className="text-center text-rock-600 max-w-3xl mx-auto mb-12">
            L&apos;Allemannsretten est un privilège basé sur la confiance. Pour le préserver,
            chaque voyageur doit adopter des comportements responsables.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-forest-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-2">Gestion des eaux usées</h3>
                <p className="text-rock-600">
                  Ne vidangez jamais vos eaux grises ou noires dans la nature. Utilisez les
                  stations de vidange présentes dans les campings et aires de services.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-forest-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-2">Toilettes</h3>
                <p className="text-rock-600">
                  Utilisez les toilettes de votre van ou des WC portables. Si vous devez
                  aller dans la nature, éloignez-vous de 50m des cours d&apos;eau et enterrez vos déjections.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-forest-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-2">Produits biodégradables</h3>
                <p className="text-rock-600">
                  Utilisez des savons et produits d&apos;entretien biodégradables. Ne faites
                  jamais votre vaisselle directement dans les lacs ou rivières.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-forest-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-2">Faune sauvage</h3>
                <p className="text-rock-600">
                  Ne nourrissez pas les animaux sauvages et gardez vos distances.
                  Les rennes, élans et autres animaux peuvent être dangereux s&apos;ils se sentent menacés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            variant="secondary"
            title="Prêt pour l'aventure en camping sauvage ?"
            description="Trouvez le van idéal pour explorer la Norvège en toute liberté et profiter des meilleurs spots de camping sauvage."
            buttonText="Comparer les vans"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Liens internes */}
      <section className="section-padding bg-rock-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-semibold mb-8">
            Poursuivez votre préparation
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dormir-en-van-norvege" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Où dormir en van
            </Link>
            <Link href="/road-trip-norvege-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Routes panoramiques
            </Link>
            <Link href="/faq-location-van-norvege" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
