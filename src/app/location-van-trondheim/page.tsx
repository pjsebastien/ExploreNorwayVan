export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isCityPublished } from '@/lib/cities';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Location van Trondheim : route de l\u2019Atlantique et centre-Norv\u00e8ge',
  description: 'Louer un van \u00e0 Trondheim : acc\u00e8s \u00e0 la route de l\u2019Atlantique, Nidaros, Trollstigen. Conseils, prix et itin\u00e9raires depuis le centre de la Norv\u00e8ge.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/location-van-trondheim/',
  },
  openGraph: {
    type: 'article',
    title: 'Location van Trondheim : route de l\u2019Atlantique et centre-Norv\u00e8ge',
    description: 'Louer un van \u00e0 Trondheim : acc\u00e8s \u00e0 la route de l\u2019Atlantique, Nidaros, Trollstigen.',
    url: 'https://www.explorenorwayvan.com/location-van-trondheim/',
    images: [{ url: '/images/og-image-norvege.jpg', width: 1200, height: 630, alt: 'Location van Trondheim Norv\u00e8ge' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Trondheim' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location van Trondheim : route de l\u2019Atlantique et centre-Norv\u00e8ge',
  description: 'Louer un van \u00e0 Trondheim : acc\u00e8s \u00e0 la route de l\u2019Atlantique, Nidaros, Trollstigen. Conseils, prix et itin\u00e9raires depuis le centre de la Norv\u00e8ge.',
  image: 'https://www.explorenorwayvan.com/images/roadtrip-route-panoramique.jpg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan', url: 'https://www.explorenorwayvan.com' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan', logo: { '@type': 'ImageObject', url: 'https://www.explorenorwayvan.com/images/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.explorenorwayvan.com/location-van-trondheim/' },
};

export default function LocationTrondheimPage() {
  if (!isCityPublished('location-van-trondheim')) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Location de van \u00e0 Trondheim : au c\u0153ur de la Norv\u00e8ge"
        subtitle="Troisi\u00e8me ville du pays et point de d\u00e9part vers la route de l\u2019Atlantique, Trollstigen et le nord."
        imageSrc="/images/roadtrip-route-panoramique.jpg"
        imageAlt="Route panoramique dans le centre de la Norv\u00e8ge pr\u00e8s de Trondheim"
        badge="Centre de la Norv\u00e8ge"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} currentPath="/location-van-trondheim/" />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              <strong>Trondheim</strong> est l&apos;ancienne capitale des rois vikings et la troisi\u00e8me ville
              de Norv\u00e8ge. La cath\u00e9drale Nidaros, la plus grande de Scandinavie, t\u00e9moigne de ce pass\u00e9
              millénaire. Ville universitaire anim\u00e9e, elle garde une atmosph\u00e8re d\u00e9tendue et chaleureuse
              tout au long de l&apos;ann\u00e9e.
            </p>
            <p>
              Sa position strat\u00e9gique, \u00e0 mi-chemin entre Oslo et le nord du pays, en fait une escale
              logique pour un road trip en van. La route de l&apos;Atlantique se trouve \u00e0 seulement 3\u00a0h\u00a030
              de route. Pour ceux qui remontent vers les Lofoten ou le cap Nord, Trondheim marque une
              \u00e9tape naturelle avant de franchir le cercle polaire.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages / Inconv\u00e9nients */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Louer \u00e0 Trondheim\u00a0: avantages et inconv\u00e9nients
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
                  <span className="text-forest-500 mr-2 mt-1">\u2713</span>
                  <div>
                    <strong>Position centrale (Oslo-Nord)</strong>
                    <p className="text-rock-600 text-sm">Trondheim se situe entre le sud et le grand nord, id\u00e9al pour couper un long trajet</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">\u2713</span>
                  <div>
                    <strong>Route de l&apos;Atlantique \u00e0 proximit\u00e9</strong>
                    <p className="text-rock-600 text-sm">L&apos;une des plus belles routes du monde, accessible en 3\u00a0h\u00a030</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">\u2713</span>
                  <div>
                    <strong>A\u00e9roport international</strong>
                    <p className="text-rock-600 text-sm">Trondheim V\u00e6rnes avec liaisons vers plusieurs villes europ\u00e9ennes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">\u2713</span>
                  <div>
                    <strong>Prix de location raisonnables</strong>
                    <p className="text-rock-600 text-sm">Moins de demande qu&apos;\u00e0 Oslo ou Bergen, tarifs souvent plus doux</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">\u2713</span>
                  <div>
                    <strong>Ville historique \u00e0 visiter</strong>
                    <p className="text-rock-600 text-sm">Cath\u00e9drale Nidaros, vieux quartiers, mus\u00e9es et gastronomie locale</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">\u2713</span>
                  <div>
                    <strong>\u00c9tape logique Oslo \u2192 Lofoten</strong>
                    <p className="text-rock-600 text-sm">Coupez le trajet en deux et profitez de la r\u00e9gion du Tr\u00f8ndelag</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-6 text-red-700 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Inconv\u00e9nients
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">\u2717</span>
                  <div>
                    <strong>Moins de loueurs qu&apos;\u00e0 Oslo</strong>
                    <p className="text-rock-600 text-sm">Le choix de v\u00e9hicules reste plus limit\u00e9 que dans la capitale</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">\u2717</span>
                  <div>
                    <strong>\u00c9loign\u00e9 des grands fjords de l&apos;ouest</strong>
                    <p className="text-rock-600 text-sm">Bergen et le Sognefjord restent \u00e0 plusieurs heures de route</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">\u2717</span>
                  <div>
                    <strong>Hiver rude</strong>
                    <p className="text-rock-600 text-sm">Temp\u00e9ratures tr\u00e8s basses et routes parfois ferm\u00e9es de novembre \u00e0 mars</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">\u2717</span>
                  <div>
                    <strong>Long trajet depuis la France</strong>
                    <p className="text-rock-600 text-sm">Peu de vols directs, souvent une escale \u00e0 Oslo ou Copenhague</p>
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
            Comment trouver un van \u00e0 Trondheim
          </h2>
          <p className="text-center text-rock-700 max-w-3xl mx-auto mb-12">
            Utilisez une plateforme de comparaison pour regrouper toutes les offres
            disponibles au d\u00e9part de Trondheim et r\u00e9server au meilleur prix.
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
                Acc\u00e9dez \u00e0 des dizaines d&apos;annonces de particuliers et professionnels.
                Comparez les \u00e9quipements, les avis et les tarifs en un coup d&apos;\u0153il.
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
                R\u00e9servez en toute s\u00e9r\u00e9nit\u00e9 gr\u00e2ce \u00e0 une assurance compl\u00e8te. Assistance 24\u00a0h/24
                et kilom\u00e9trage souvent illimit\u00e9.
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
                La mise en concurrence des loueurs garantit des tarifs comp\u00e9titifs.
                Comptez \u00e0 partir de 75\u00a0\u20ac/jour selon la p\u00e9riode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Comparez les offres \u00e0 Trondheim"
            description="Trouvez le meilleur tarif pour votre location de van au d\u00e9part de Trondheim. Comparez les loueurs et r\u00e9servez en ligne."
            buttonText="Voir les disponibilit\u00e9s"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Itin\u00e9raires depuis Trondheim */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Itin\u00e9raires au d\u00e9part de Trondheim
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Trondheim \u2192 Route de l&apos;Atlantique
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>\u2022 Dur\u00e9e\u00a0: 2-3 jours</li>
                <li>\u2022 Distance\u00a0: ~220\u00a0km</li>
                <li>\u2022 Points forts\u00a0: Kristiansund, ponts spectaculaires, panoramas oc\u00e9aniques</li>
              </ul>
              <p className="text-sm text-rock-600">
                Courte \u00e9chapp\u00e9e vers l&apos;une des routes les plus photographi\u00e9es du monde. Huit ponts
                relient les \u00eelots battus par les vagues, avec vue directe sur l&apos;oc\u00e9an.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Trondheim \u2192 Lofoten
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>\u2022 Dur\u00e9e\u00a0: 5-7 jours</li>
                <li>\u2022 Distance\u00a0: ~900\u00a0km</li>
                <li>\u2022 Points forts\u00a0: E6 vers le nord, cercle polaire, c\u00f4te du Helgeland</li>
              </ul>
              <p className="text-sm text-rock-600">
                Cap vers le nord en longeant la c\u00f4te. Vous franchirez le cercle polaire arctique
                avant d&apos;atteindre l&apos;archipel des Lofoten par la E10 depuis Narvik.
              </p>
            </div>

            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Trondheim \u2192 Trollstigen + Geiranger
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>\u2022 Dur\u00e9e\u00a0: 4-5 jours</li>
                <li>\u2022 Distance\u00a0: ~500\u00a0km</li>
                <li>\u2022 Points forts\u00a0: Trollstigen (route des trolls), Geirangerfjord</li>
              </ul>
              <p className="text-sm text-rock-600">
                Descente vers les fjords de l&apos;ouest par des lacets vertigineux. La route des trolls
                et le Geirangerfjord class\u00e9 UNESCO valent chaque virage.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Boucle Trondheim \u2192 c\u00f4te Helgeland \u2192 Mo i Rana
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>\u2022 Dur\u00e9e\u00a0: 5-7 jours</li>
                <li>\u2022 Distance\u00a0: ~800\u00a0km (boucle)</li>
                <li>\u2022 Points forts\u00a0: c\u00f4te du Helgeland, Tr\u00e6na, glacier Svartisen</li>
              </ul>
              <p className="text-sm text-rock-600">
                Itin\u00e9raire c\u00f4tier spectaculaire le long du Helgeland. Ferries entre les \u00eeles,
                montagnes plongeant dans la mer et le glacier Svartisen en point d&apos;orgue.
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
            <h3>Visitez la cath\u00e9drale Nidaros avant de partir</h3>
            <p>
              La cath\u00e9drale Nidaros est le plus grand \u00e9difice m\u00e9di\u00e9val de Scandinavie. B\u00e2tie sur la tombe
              du roi saint Olav, elle attire des p\u00e8lerins depuis le XI\u00e8me si\u00e8cle. Pr\u00e9voyez 1 \u00e0 2\u00a0heures
              pour la visite, id\u00e9alement le matin quand la lumi\u00e8re traverse les vitraux.
            </p>

            <h3>Fl\u00e2nez dans Bakklandet</h3>
            <p>
              Ce vieux quartier aux maisons en bois color\u00e9es borde la Nidelva. Caf\u00e9s, boutiques
              d&apos;artisans et le c\u00e9l\u00e8bre \u00ab\u00a0monte-v\u00e9lo\u00a0\u00bb (Trampe) font le charme de cette rue
              pittoresque. Un bon endroit pour prendre un caf\u00e9 avant de grimper dans le van.
            </p>

            <h3>Cap sur le cercle polaire</h3>
            <p>
              En roulant vers le nord sur la E6, vous franchirez le cercle polaire arctique
              \u00e0 environ 6\u00a0h de Trondheim. Un centre d&apos;accueil marque la limite\u00a0: photo souvenir
              garantie. Au-del\u00e0, le soleil de minuit (juin-juillet) transforme chaque soir\u00e9e
              en un spectacle lumineux.
            </p>

            <h3>Ferries sur la c\u00f4te</h3>
            <p>
              Les itin\u00e9raires c\u00f4tiers au nord de Trondheim n\u00e9cessitent plusieurs travers\u00e9es en ferry.
              V\u00e9rifiez les horaires sur le site de Boreal ou Torghatten Nord. En haute saison,
              la fr\u00e9quence est bonne, mais un temps d&apos;attente de 20 \u00e0 40\u00a0minutes reste courant.
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
            <Link href="/location-van-lofoten" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location van Lofoten
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
