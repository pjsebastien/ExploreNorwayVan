import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Road Trip Norvège en Van : Les plus belles routes',
  description: 'Organisez votre road trip en Norvège en van aménagé. Découvrez les routes panoramiques, les fjords incontournables et nos conseils pratiques.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/road-trip-norvege-van',
  },
  openGraph: {
    title: 'Road Trip Norvège en Van : Les plus belles routes',
    description: 'Organisez votre road trip en Norvège en van aménagé. Routes panoramiques, fjords et conseils pratiques.',
    url: 'https://www.explorenorwayvan.com/road-trip-norvege-van',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip Norvège en Van' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Road Trip Norvège en Van : Les plus belles routes',
  description: 'Tout savoir pour organiser votre road trip en Norvège en van aménagé.',
  author: {
    '@type': 'Organization',
    name: 'ExploreNorwayVan',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ExploreNorwayVan',
  },
};

export default function RoadTripNorvegePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Les plus belles routes de Norvège en van"
        subtitle="Partez à la découverte des routes les plus spectaculaires d'Europe. Fjords, montagnes et paysages à couper le souffle."
        imageSrc="/images/roadtrip-route-panoramique.jpg"
        imageAlt="Road trip en van sur une route panoramique en Norvège"
        badge="18 routes panoramiques"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              Un <strong>road trip en Norvège en van</strong> est une expérience qui marque à vie. Ce pays
              scandinave offre certaines des routes les plus spectaculaires au monde, serpentant entre fjords
              vertigineux, montagnes enneigées et villages de pêcheurs colorés. Avec un <Link href="/" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">van aménagé</Link>, vous avez
              la liberté totale d&apos;explorer ces merveilles à votre rythme, de vous arrêter où bon vous semble
              et de vous réveiller face aux paysages les plus extraordinaires.
            </p>
            <p>
              La Norvège compte 18 routes touristiques nationales (Nasjonale Turistveger), spécialement
              sélectionnées pour leur beauté exceptionnelle et aménagées avec des points de vue architecturaux
              remarquables. Ces routes sont gratuites et représentent le must absolu pour tout road trip en van.
              Ajoutez à cela des centaines de kilomètres de côtes découpées, des îles accessibles par ferry et
              une infrastructure parfaitement adaptée aux camping-cars, grâce notamment au <Link href="/camping-sauvage-norvege-van" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">camping sauvage autorisé</Link>,
              et vous comprenez pourquoi la Norvège est considérée comme le paradis du van life.
            </p>
          </div>
        </div>
      </section>

      {/* Routes panoramiques */}
      <section className="section-padding bg-rock-50 section-accent">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Les meilleures routes panoramiques
          </h2>

          <div className="space-y-12">
            {/* Trollstigen */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/route-sinueuse-van.jpg"
                  alt="Route sinueuse en Norvège avec un van aménagé"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="prose-custom">
                <h3 className="text-2xl font-display font-semibold mb-4">Trollstigen - La Route des Trolls</h3>
                <p>
                  Certainement la route la plus emblématique de Norvège, la <strong>Trollstigen</strong> est
                  une prouesse d&apos;ingénierie qui grimpe à flanc de montagne à travers 11 virages en épingle
                  à cheveux. Avec une pente de 10% et des cascades qui s&apos;écoulent le long de la route,
                  l&apos;expérience est tout simplement vertigineuse.
                </p>
                <ul>
                  <li><strong>Longueur :</strong> 106 km (route complète Åndalsnes-Valldal)</li>
                  <li><strong>Ouverture :</strong> mi-mai à octobre (selon enneigement)</li>
                  <li><strong>Point de vue :</strong> plateforme panoramique au sommet</li>
                  <li><strong>Conseil :</strong> arrivez tôt le matin pour éviter la foule</li>
                </ul>
              </div>
            </div>

            {/* Route de l'Atlantique */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 prose-custom">
                <h3 className="text-2xl font-display font-semibold mb-4">Atlanterhavsveien - La Route de l&apos;Atlantique</h3>
                <p>
                  Élue &quot;route du siècle&quot; en Norvège, l&apos;<strong>Atlanterhavsveien</strong> relie une
                  série d&apos;îlots par des ponts spectaculaires qui semblent plonger dans l&apos;océan. Par temps
                  de tempête, les vagues peuvent passer au-dessus de la route, offrant un spectacle saisissant.
                </p>
                <ul>
                  <li><strong>Longueur :</strong> 8,3 km (mais la région mérite 1-2 jours)</li>
                  <li><strong>Point fort :</strong> Storseisundet Bridge, le pont &quot;ivre&quot;</li>
                  <li><strong>Activités :</strong> pêche, observation des phoques, plongée</li>
                  <li><strong>Conseil :</strong> restez jusqu&apos;au coucher du soleil</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/van-route-cotiere.jpg"
                  alt="Route de l'Atlantique avec ses ponts ondulants au-dessus de l'océan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Route des Aigles */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/paysage-fjord-van.jpg"
                  alt="Vue sur le Geirangerfjord depuis la route des Aigles"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="prose-custom">
                <h3 className="text-2xl font-display font-semibold mb-4">Ørnesvingen - La Route des Aigles</h3>
                <p>
                  Cette route en lacets offre des vues plongeantes sur le célèbre <strong>Geirangerfjord</strong>,
                  classé au patrimoine mondial de l&apos;UNESCO. Le point de vue Ørnesvingen (le virage de l&apos;aigle)
                  culmine à 620 mètres et offre l&apos;une des plus belles perspectives sur le fjord.
                </p>
                <ul>
                  <li><strong>Dénivelé :</strong> 620 mètres sur quelques kilomètres</li>
                  <li><strong>À voir :</strong> cascades des Sept Sœurs et du Prétendant</li>
                  <li><strong>Combinaison :</strong> enchaînez avec la Trollstigen</li>
                  <li><strong>Conseil :</strong> prenez le ferry Geiranger-Hellesylt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fjords incontournables */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-6">
            Les fjords incontournables
          </h2>
          <p className="text-center text-rock-600 max-w-3xl mx-auto mb-12">
            La Norvège compte plus de 1 000 fjords, mais certains se distinguent par leur beauté exceptionnelle.
            Voici ceux à ne pas manquer lors de votre road trip en van.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold mb-3">Geirangerfjord</h3>
              <p className="text-rock-600 mb-4">
                Classé UNESCO, c&apos;est le fjord le plus célèbre de Norvège avec ses cascades spectaculaires
                et ses fermes abandonnées perchées sur les falaises.
              </p>
              <p className="text-sm text-rock-500">Région : Møre og Romsdal</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold mb-3">Sognefjord</h3>
              <p className="text-rock-600 mb-4">
                Le roi des fjords : 204 km de long et jusqu&apos;à 1 308 m de profondeur. Ses branches
                Nærøyfjord et Aurlandsfjord sont particulièrement impressionnantes.
              </p>
              <p className="text-sm text-rock-500">Région : Vestland</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold mb-3">Hardangerfjord</h3>
              <p className="text-rock-600 mb-4">
                Le fjord des vergers en fleurs. Au printemps, ses rives se couvrent de cerisiers et
                pommiers en fleurs, créant un contraste saisissant avec les sommets enneigés.
              </p>
              <p className="text-sm text-rock-500">Région : Vestland</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold mb-3">Lysefjord</h3>
              <p className="text-rock-600 mb-4">
                Dominé par le célèbre Preikestolen (Rocher de la Chaire), ce fjord offre des parois
                verticales impressionnantes et une eau d&apos;un bleu profond.
              </p>
              <p className="text-sm text-rock-500">Région : Rogaland</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold mb-3">Trollfjord</h3>
              <p className="text-rock-600 mb-4">
                Un fjord étroit et spectaculaire aux îles Lofoten, accessible uniquement par bateau.
                Les falaises de 1 000 mètres encadrent une entrée de seulement 100 mètres de large.
              </p>
              <p className="text-sm text-rock-500">Région : Nordland (Lofoten)</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold mb-3">Nærøyfjord</h3>
              <p className="text-rock-600 mb-4">
                Branche du Sognefjord classée UNESCO, c&apos;est l&apos;un des fjords les plus étroits
                du monde (250 m) entouré de montagnes de 1 700 m.
              </p>
              <p className="text-sm text-rock-500">Région : Vestland</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            variant="secondary"
            title="Prêt pour votre road trip ?"
            description="Comparez les meilleures offres de location de van en Norvège et commencez à planifier votre aventure dès aujourd'hui."
            buttonText="Trouver mon van"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Conseils pratiques pour votre road trip
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">Préparation</h3>
              <ul className="space-y-3 text-rock-700">
                <li className="flex items-start">
                  <span className="text-fjord-600 mr-2">•</span>
                  Réservez votre van 3-6 mois à l&apos;avance en haute saison
                </li>
                <li className="flex items-start">
                  <span className="text-fjord-600 mr-2">•</span>
                  Téléchargez des cartes hors ligne (Google Maps, Maps.me)
                </li>
                <li className="flex items-start">
                  <span className="text-fjord-600 mr-2">•</span>
                  Vérifiez l&apos;ouverture des routes de montagne (vegvesen.no)
                </li>
                <li className="flex items-start">
                  <span className="text-fjord-600 mr-2">•</span>
                  Prévoyez des vêtements pour toutes les conditions météo
                </li>
              </ul>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">Sur la route</h3>
              <ul className="space-y-3 text-rock-700">
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  Roulez tôt le matin pour éviter les bus touristiques
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  Utilisez les aires de repos officielles (nombreuses et gratuites)
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  Faites le plein dès que possible (stations espacées)
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  Réservez les ferries populaires à l&apos;avance en été
                </li>
              </ul>
            </div>

            <div className="bg-rock-100 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4">Budget</h3>
              <ul className="space-y-3 text-rock-700">
                <li className="flex items-start">
                  <span className="text-rock-500 mr-2">•</span>
                  Faites vos courses dans les supermarchés Rema 1000 ou Kiwi
                </li>
                <li className="flex items-start">
                  <span className="text-rock-500 mr-2">•</span>
                  Profitez du camping sauvage gratuit (Allemannsretten)
                </li>
                <li className="flex items-start">
                  <span className="text-rock-500 mr-2">•</span>
                  Les routes touristiques nationales sont gratuites
                </li>
                <li className="flex items-start">
                  <span className="text-rock-500 mr-2">•</span>
                  Prévoyez 50-100€/jour pour les ferries et péages
                </li>
              </ul>
            </div>

            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">Sécurité</h3>
              <ul className="space-y-3 text-rock-700">
                <li className="flex items-start">
                  <span className="text-fjord-600 mr-2">•</span>
                  Respectez les limitations de vitesse (amendes très élevées)
                </li>
                <li className="flex items-start">
                  <span className="text-fjord-600 mr-2">•</span>
                  Attention aux tunnels étroits et aux routes sinueuses
                </li>
                <li className="flex items-start">
                  <span className="text-fjord-600 mr-2">•</span>
                  Méfiez-vous des moutons et rennes sur la route
                </li>
                <li className="flex items-start">
                  <span className="text-fjord-600 mr-2">•</span>
                  En montagne, laissez passer les véhicules qui montent
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lien vers itinéraire */}
      <section className="section-padding bg-rock-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Besoin d&apos;un itinéraire détaillé ?
          </h2>
          <p className="text-rock-300 text-lg max-w-2xl mx-auto mb-8">
            Découvrez notre itinéraire complet de 10 jours en Norvège, avec le détail jour par jour,
            les distances, les points d&apos;intérêt et les meilleurs spots pour dormir.
          </p>
          <Link
            href="/itineraire-norvege-10-jours-van"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-rock-900 font-semibold rounded-lg hover:bg-rock-100 transition-all duration-200 text-lg"
          >
            Voir l&apos;itinéraire 10 jours
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
