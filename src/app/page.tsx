import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AffiliateCTA from '@/components/AffiliateCTA';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Location van Norvège : Louer un van aménagé pour les fjords',
  description: 'Location van Norvège : découvrez comment louer un van aménagé pour explorer les fjords. Prix, itinéraires, conseils pratiques et meilleurs loueurs.',
  alternates: {
    canonical: 'https://explorenorwayvan.com',
  },
  openGraph: {
    title: 'Location van Norvège : Louer un van aménagé pour les fjords',
    description: 'Location van Norvège : découvrez comment louer un van aménagé pour explorer les fjords. Prix, itinéraires, conseils pratiques et meilleurs loueurs.',
    url: 'https://explorenorwayvan.com',
  },
};

const tocItems = [
  { id: 'pourquoi-van-norvege', title: 'Pourquoi choisir un van en Norvège', level: 2 },
  { id: 'budget-prix', title: 'Budget et prix moyens', level: 2 },
  { id: 'ou-louer', title: 'Où louer un van en Norvège', level: 2 },
  { id: 'reglementation', title: 'Réglementation et conduite', level: 2 },
  { id: 'camping-sauvage', title: 'Camping sauvage et règles', level: 2 },
  { id: 'itineraires', title: 'Itinéraires populaires', level: 2 },
  { id: 'faq', title: 'Questions fréquentes', level: 2 },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location van Norvège : Louer un van aménagé pour les fjords',
  description: 'Tout savoir sur la location de van en Norvège. Découvrez les prix, itinéraires et conseils pour explorer les fjords en van aménagé.',
  author: {
    '@type': 'Organization',
    name: 'ExploreNorwayVan',
    url: 'https://explorenorwayvan.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ExploreNorwayVan',
    logo: {
      '@type': 'ImageObject',
      url: 'https://explorenorwayvan.com/images/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://explorenorwayvan.com',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rock-50 to-fjord-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-rock-900">
                Louer un Van Aménagé en Norvège
              </h1>
              <p className="text-lg md:text-xl text-rock-600 mb-8 leading-relaxed">
                Explorez les fjords spectaculaires, les routes panoramiques et la nature sauvage norvégienne
                en toute liberté à bord de votre van aménagé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="#loueurs" className="btn-primary text-lg px-8 py-4">
                  Trouver un van
                </Link>
                <Link href="#pourquoi-van-norvege" className="btn-outline text-lg px-8 py-4">
                  En savoir plus
                </Link>
              </div>
              {/* Statistiques */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-rock-200">
                <div>
                  <p className="text-3xl font-bold text-fjord-600">18</p>
                  <p className="text-sm text-rock-500">Routes panoramiques</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-forest-600">1000+</p>
                  <p className="text-sm text-rock-500">Fjords à explorer</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-fjord-600">100%</p>
                  <p className="text-sm text-rock-500">Camping sauvage légal</p>
                </div>
              </div>
            </div>

            {/* Grille d'images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/van-face-fjords.jpg"
                    alt="Van aménagé face aux fjords en Norvège"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/route-sinueuse-van.jpg"
                    alt="Route sinueuse en Norvège avec un van aménagé"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/paysage-fjord-van.jpg"
                    alt="Paysage de fjord norvégien avec un van aménagé"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/camping-van-nature.jpg"
                    alt="Camping en van au cœur de la nature norvégienne"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose-custom">
              <p className="text-lg text-rock-700 leading-relaxed mb-6">
                La <strong>location de van en Norvège</strong> représente sans doute la meilleure façon d&apos;explorer
                ce pays aux paysages grandioses. Entre fjords majestueux, montagnes enneigées et routes côtières
                spectaculaires, la Norvège offre un terrain de jeu exceptionnel pour les amateurs de road trip.
                Louer un van aménagé vous permet de vivre une expérience unique, en totale autonomie, au plus proche
                de cette nature préservée qui fait la renommée du pays.
              </p>
              <p className="text-lg text-rock-700 leading-relaxed mb-6">
                Que vous souhaitiez parcourir la mythique <Link href="/road-trip-norvege-van" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">route des Trolls</Link>, longer les fjords de l&apos;Ouest ou
                découvrir les îles Lofoten, un <strong>van aménagé en Norvège</strong> vous offre la flexibilité
                nécessaire pour profiter pleinement de chaque instant. Nous vous accompagnons dans
                toutes les étapes de votre projet : du choix du loueur aux <Link href="/itineraire-norvege-10-jours-van" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">meilleurs itinéraires</Link>, en passant par
                les règles de <Link href="/camping-sauvage-norvege-van" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">camping sauvage</Link> et les conseils pratiques pour un voyage réussi en van.
              </p>
              <p className="text-rock-700">
                La Norvège fait partie des destinations les plus prisées pour le van life en Europe, et pour
                cause : son droit d&apos;accès à la nature (Allemannsretten) permet de <Link href="/dormir-en-van-norvege" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">dormir presque partout</Link>{' '}
                gratuitement, ses infrastructures sont excellentes, et ses paysages comptent parmi les plus
                beaux du monde. Préparez-vous à vivre une aventure inoubliable.
              </p>
            </div>
            <aside className="lg:col-span-1">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir un van */}
      <section id="pourquoi-van-norvege" className="section-padding bg-rock-50 section-accent">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Pourquoi choisir un van pour explorer la Norvège
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="card p-8">
              <div className="w-14 h-14 bg-fjord-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Liberté totale</h3>
              <p className="text-rock-700">
                Avec un van, vous êtes maître de votre itinéraire. Pas de réservation d&apos;hôtel contraignante,
                pas d&apos;horaires imposés. Vous pouvez vous arrêter où bon vous semble, changer de programme
                selon la météo et prolonger votre séjour dans les endroits qui vous touchent.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Budget maîtrisé</h3>
              <p className="text-rock-700">
                La Norvège est réputée chère, mais le van permet de réduire considérablement les coûts.
                En dormant dans votre véhicule et en cuisinant vos repas, vous économisez sur l&apos;hébergement
                et la restauration, les deux postes de dépenses les plus importants.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-14 h-14 bg-fjord-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Immersion nature</h3>
              <p className="text-rock-700">
                Se réveiller face à un fjord, prendre son café devant une cascade, s&apos;endormir sous les
                aurores boréales... Le van vous permet de vivre au rythme de la nature norvégienne et de
                profiter de moments privilégiés loin des circuits touristiques classiques.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Camping sauvage légal</h3>
              <p className="text-rock-700">
                Grâce au droit d&apos;accès à la nature (Allemannsretten), la Norvège autorise le camping sauvage
                presque partout. Une opportunité unique de poser votre van dans des endroits de rêve,
                gratuitement et en toute légalité.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-14 h-14 bg-fjord-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Flexibilité météo</h3>
              <p className="text-rock-700">
                La météo norvégienne est changeante. Avec un van, vous pouvez adapter votre parcours en temps
                réel : fuir la pluie vers le sud, profiter d&apos;une éclaircie pour une randonnée, ou simplement
                attendre au chaud que le ciel se dégage.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Voyage en famille</h3>
              <p className="text-rock-700">
                Le van est idéal pour voyager en famille ou entre amis. Les enfants adorent cette aventure
                nomade, et vous gardez tout votre confort à portée de main : cuisine, couchages, rangements
                pour les équipements outdoor.
              </p>
            </div>
          </div>

          <div className="prose-custom max-w-4xl mx-auto">
            <p>
              La <strong>location d&apos;un van en Norvège</strong> s&apos;adresse à tous les profils de voyageurs :
              couples en quête de romantisme, familles avec enfants, groupes d&apos;amis aventuriers ou voyageurs
              solo en recherche d&apos;introspection. Le van permet de voyager à son rythme, sans compromis,
              tout en gardant un niveau de confort appréciable. C&apos;est la promesse d&apos;un voyage authentique,
              au plus près des merveilles naturelles norvégiennes.
            </p>
          </div>
        </div>
      </section>

      {/* Budget et prix */}
      <section id="budget-prix" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-6">
            Budget et prix moyens pour louer un van en Norvège
          </h2>
          <p className="text-center text-rock-600 max-w-3xl mx-auto mb-12">
            Le coût d&apos;une location de van varie selon la saison, le type de véhicule et la durée.
            Voici une estimation des prix pour vous aider à préparer votre budget.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-6 text-fjord-800">Saison basse (oct-avril)</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-fjord-100">
                  <span className="text-rock-700">Van compact (2 pers.)</span>
                  <span className="font-semibold text-fjord-700">70-100€/jour</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-fjord-100">
                  <span className="text-rock-700">Van aménagé standard (2-3 pers.)</span>
                  <span className="font-semibold text-fjord-700">90-130€/jour</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-fjord-100">
                  <span className="text-rock-700">Van grand confort (4 pers.)</span>
                  <span className="font-semibold text-fjord-700">120-170€/jour</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-rock-700">Camping-car intégral</span>
                  <span className="font-semibold text-fjord-700">150-220€/jour</span>
                </li>
              </ul>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-6 text-forest-800">Saison haute (mai-sept)</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-forest-100">
                  <span className="text-rock-700">Van compact (2 pers.)</span>
                  <span className="font-semibold text-forest-700">100-150€/jour</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-forest-100">
                  <span className="text-rock-700">Van aménagé standard (2-3 pers.)</span>
                  <span className="font-semibold text-forest-700">140-200€/jour</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-forest-100">
                  <span className="text-rock-700">Van grand confort (4 pers.)</span>
                  <span className="font-semibold text-forest-700">180-280€/jour</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-rock-700">Camping-car intégral</span>
                  <span className="font-semibold text-forest-700">250-350€/jour</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose-custom max-w-4xl mx-auto mb-12">
            <p>
              Ces tarifs incluent généralement le kilométrage illimité, l&apos;assurance de base et
              l&apos;équipement standard (literie, cuisine, vaisselle). En saison haute, les prix peuvent
              augmenter de 40 à 60% par rapport à la basse saison. Pour obtenir les meilleurs tarifs,
              nous vous conseillons de réserver plusieurs mois à l&apos;avance, surtout si vous visez
              les mois de juin, juillet ou août.
            </p>
            <p>
              Au-delà de la location, prévoyez un budget pour le carburant (environ 1,80€/L), les péages
              (certaines routes sont payantes), les ferries (indispensables pour traverser les fjords) et
              l&apos;alimentation. Pour un voyage de 10 jours en van, comptez un budget total de 1500 à 3000€
              selon votre style de voyage.
            </p>
          </div>

          <div className="text-center">
            <Link href="/prix-location-van-norvege" className="btn-secondary">
              Voir le détail des prix
            </Link>
          </div>
        </div>
      </section>

      {/* Où louer */}
      <section id="ou-louer" className="section-padding bg-rock-50 section-accent">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-6">
            Où louer un van en Norvège
          </h2>
          <p className="text-center text-rock-600 max-w-3xl mx-auto mb-12">
            Les principales villes de départ pour une location de van sont Oslo et Bergen.
            Chacune offre ses avantages selon votre itinéraire prévu.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/van-point-vue.jpg"
                  alt="Van stationné près d'un lac de montagne en Norvège"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-4">Location van Oslo</h3>
                <p className="text-rock-600 mb-4">
                  Capitale et principal aéroport international, Oslo est le point de départ le plus accessible.
                  Idéal pour explorer le sud de la Norvège, les fjords de l&apos;est et rejoindre Bergen par
                  les routes panoramiques.
                </p>
                <ul className="text-rock-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Large choix de loueurs
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vols internationaux nombreux
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Accès facile aux routes E6 et E16
                  </li>
                </ul>
                <Link href="/location-van-oslo" className="btn-outline">
                  En savoir plus sur Oslo
                </Link>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/van-route-cotiere.jpg"
                  alt="Van aménagé sur une route côtière en Norvège"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-4">Location van Bergen</h3>
                <p className="text-rock-600 mb-4">
                  Surnommée la &quot;porte des fjords&quot;, Bergen est le point de départ idéal pour explorer
                  les fjords de l&apos;Ouest. Vous êtes immédiatement au cœur des paysages les plus
                  spectaculaires de Norvège.
                </p>
                <ul className="text-rock-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Accès direct aux fjords
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Proximité des Lofoten (ferry)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ville charmante à explorer
                  </li>
                </ul>
                <Link href="/location-van-bergen" className="btn-outline">
                  En savoir plus sur Bergen
                </Link>
              </div>
            </div>
          </div>

          <div id="loueurs" className="prose-custom max-w-4xl mx-auto">
            <h3>Trouver un loueur de van en Norvège</h3>
            <p>
              Plusieurs options s&apos;offrent à vous pour <Link href="/location-van-oslo" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">louer un van à Oslo</Link> ou
              à <Link href="/location-van-bergen" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">Bergen</Link>. Les plateformes de comparaison comme Yescapa
              vous permettent de comparer facilement les offres de particuliers et de professionnels. Vous y
              trouverez un large choix de vans aménagés, du fourgon compact au camping-car familial, avec
              des assurances incluses et la possibilité de faire des trajets aller simple entre différentes villes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Affiliate */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AffiliateCTA
            title="Comparez les offres de location de van"
            description="Trouvez le van idéal pour votre aventure norvégienne. Comparez les prix, les équipements et les avis des voyageurs pour faire le meilleur choix."
            buttonText="Voir les offres disponibles"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Réglementation */}
      <section id="reglementation" className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Réglementation et conduite en Norvège
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="prose-custom">
              <h3>Permis et documents nécessaires</h3>
              <p>
                Pour conduire un van en Norvège, votre permis de conduire français ou européen suffit.
                Si votre permis est délivré hors UE, un permis international peut être requis.
                Munissez-vous également de votre carte d&apos;identité ou passeport, du certificat
                d&apos;immatriculation du véhicule et de l&apos;attestation d&apos;assurance fournie par le loueur.
              </p>

              <h3>Règles de conduite spécifiques</h3>
              <p>
                La conduite en Norvège est agréable mais demande vigilance. Les limitations de vitesse
                sont strictes : 50 km/h en ville, 80 km/h hors agglomération et 90-100 km/h sur les
                voies rapides. Les radars sont nombreux et les amendes très élevées. Les feux de croisement
                sont obligatoires 24h/24, même en plein jour.
              </p>

              <h3>Tunnels et routes de montagne</h3>
              <p>
                La Norvège compte des centaines de tunnels, dont certains parmi les plus longs du monde.
                Gardez vos feux allumés et respectez les limitations de vitesse. En hiver, certaines routes
                de montagne sont fermées ou nécessitent des chaînes. Renseignez-vous sur les conditions
                via le site officiel <em>vegvesen.no</em>.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-display font-semibold text-lg mb-4 flex items-center">
                  <span className="w-10 h-10 bg-fjord-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Bon à savoir
                </h4>
                <ul className="space-y-3 text-rock-600">
                  <li>• Alcoolémie max : 0,2 g/L (tolérance quasi nulle)</li>
                  <li>• Ceinture obligatoire à l&apos;avant et à l&apos;arrière</li>
                  <li>• Téléphone au volant strictement interdit</li>
                  <li>• Priorité aux piétons sur les passages</li>
                  <li>• Pneus hiver obligatoires de nov. à avril</li>
                </ul>
              </div>

              <div className="bg-forest-50 rounded-2xl p-6">
                <h4 className="font-display font-semibold text-lg mb-4 text-forest-800">
                  Péages et AutoPASS
                </h4>
                <p className="text-rock-600 mb-4">
                  De nombreuses routes norvégiennes sont soumises à péage (bompenger). La plupart
                  des loueurs équipent leurs véhicules d&apos;un badge AutoPASS ou d&apos;un système de
                  facturation automatique. Vérifiez ce point lors de la réservation pour éviter
                  les mauvaises surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camping sauvage */}
      <section id="camping-sauvage" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/camping-van-nature.jpg"
                alt="Camping en van au cœur de la nature norvégienne"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="prose-custom">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                Camping sauvage et Allemannsretten
              </h2>
              <p>
                La Norvège est l&apos;un des rares pays d&apos;Europe où le <strong>camping sauvage</strong>
                est non seulement autorisé mais encouragé, grâce au droit d&apos;accès à la nature
                (Allemannsretten). Ce droit ancestral vous permet de camper presque partout dans la nature,
                à condition de respecter quelques règles simples.
              </p>

              <h3>Règles à respecter</h3>
              <ul>
                <li>Se tenir à minimum 150 mètres des habitations</li>
                <li>Ne pas rester plus de 2 nuits au même endroit</li>
                <li>Ne laisser aucune trace de son passage</li>
                <li>Respecter les propriétés privées clôturées</li>
                <li>Éviter les terrains cultivés</li>
              </ul>

              <p>
                Avec un van, vous pouvez vous garer sur les aires de repos, les parkings de randonnée
                ou au bord des routes de campagne. Certaines communes ont toutefois restreint le
                stationnement nocturne des camping-cars sur leur territoire, notamment dans les zones
                très touristiques. Renseignez-vous localement et privilégiez les aires officielles
                en cas de doute.
              </p>

              <Link href="/camping-sauvage-norvege-van" className="btn-primary inline-block">
                Tout sur le camping sauvage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Itinéraires */}
      <section id="itineraires" className="section-padding bg-rock-50 section-accent">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-6">
            Itinéraires populaires en van
          </h2>
          <p className="text-center text-rock-600 max-w-3xl mx-auto mb-12">
            Découvrez les routes les plus spectaculaires de Norvège, parfaitement adaptées
            à un road trip en van aménagé.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Link href="/road-trip-norvege-van" className="card group">
              <div className="relative h-56">
                <Image
                  src="/images/route-sinueuse-van.jpg"
                  alt="Route sinueuse en Norvège avec un van aménagé"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rock-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display font-semibold text-xl">Road Trip Norvège</h3>
                  <p className="text-white/80 text-sm">Routes panoramiques et fjords</p>
                </div>
              </div>
            </Link>

            <Link href="/itineraire-norvege-10-jours-van" className="card group">
              <div className="relative h-56">
                <Image
                  src="/images/aventure-van-fjords.jpg"
                  alt="Aventure en van au milieu des fjords"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rock-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display font-semibold text-xl">Itinéraire 10 jours</h3>
                  <p className="text-white/80 text-sm">Circuit complet jour par jour</p>
                </div>
              </div>
            </Link>

            <Link href="/dormir-en-van-norvege" className="card group">
              <div className="relative h-56">
                <Image
                  src="/images/paysage-fjord-van.jpg"
                  alt="Coucher de soleil sur un van au bord d'un fjord"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rock-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display font-semibold text-xl">Dormir en van</h3>
                  <p className="text-white/80 text-sm">Aires et spots recommandés</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="prose-custom max-w-4xl mx-auto">
            <p>
              La Norvège compte 18 routes touristiques nationales (Nasjonale Turistveger),
              spécialement aménagées pour leur beauté exceptionnelle. Parmi les plus célèbres :
              la <strong>route des Trolls</strong> (Trollstigen) et ses lacets vertigineux,
              la <strong>route de l&apos;Atlantique</strong> avec ses ponts spectaculaires, ou encore
              la <strong>route des Fjords</strong> qui serpente entre le Sognefjord et le Geirangerfjord.
              Ces routes sont gratuites et offrent des points de vue à couper le souffle.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Questions fréquentes sur la location de van en Norvège
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-rock-50 rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg mb-3">
                Quelle est la meilleure période pour louer un van en Norvège ?
              </h3>
              <p className="text-rock-700">
                La meilleure période s&apos;étend de mi-mai à mi-septembre, avec un pic en juin-juillet
                pour profiter du soleil de minuit. Le printemps (mai-juin) offre des paysages verdoyants
                et moins de touristes, tandis que l&apos;automne (septembre) permet d&apos;admirer les
                couleurs et potentiellement les premières aurores boréales.
              </p>
            </div>

            <div className="bg-rock-50 rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg mb-3">
                Faut-il un permis spécial pour conduire un van en Norvège ?
              </h3>
              <p className="text-rock-700">
                Non, le permis B classique suffit pour les vans de moins de 3,5 tonnes, ce qui
                correspond à la majorité des vans aménagés proposés en location. Au-delà de ce poids,
                un permis C1 ou C est nécessaire.
              </p>
            </div>

            <div className="bg-rock-50 rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg mb-3">
                Peut-on faire un aller simple entre deux villes ?
              </h3>
              <p className="text-rock-700">
                Oui, la plupart des loueurs proposent des trajets aller simple (one-way) moyennant
                un supplément. C&apos;est pratique pour optimiser votre itinéraire, par exemple en
                commençant à Oslo et en terminant à Bergen, ou inversement.
              </p>
            </div>

            <div className="bg-rock-50 rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg mb-3">
                Les vans sont-ils équipés pour l&apos;hiver ?
              </h3>
              <p className="text-rock-700">
                Les vans de location en Norvège sont équipés de pneus hiver de novembre à avril,
                conformément à la législation. Certains modèles disposent également d&apos;un chauffage
                autonome Webasto ou Eberspächer, indispensable pour voyager hors saison. Vérifiez
                ces équipements lors de la réservation.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/faq-location-van-norvege" className="btn-secondary">
              Voir toutes les questions
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-rock-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Prêt à partir à l&apos;aventure ?
          </h2>
          <p className="text-rock-300 text-lg max-w-2xl mx-auto mb-8">
            La Norvège vous attend avec ses fjords majestueux, ses routes légendaires et sa nature
            préservée. Réservez votre van dès maintenant et vivez l&apos;expérience d&apos;une vie.
          </p>
          <a
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
            target="_blank"
            rel="sponsored noopener"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-rock-900 font-semibold rounded-lg hover:bg-rock-100 transition-all duration-200 text-lg"
          >
            Trouver mon van idéal
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
