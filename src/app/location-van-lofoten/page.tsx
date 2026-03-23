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
  title: 'Location van Lofoten : plages arctiques et montagnes',
  description: 'Louer un van aux Lofoten : plages de sable blanc, montagnes vertigineuses, villages de p\u00eacheurs. Conseils camping, parking et itin\u00e9raires.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/location-van-lofoten/',
  },
  openGraph: {
    type: 'article',
    title: 'Location van Lofoten : plages arctiques et montagnes',
    description: 'Louer un van aux Lofoten : plages de sable blanc, montagnes vertigineuses, villages de p\u00eacheurs.',
    url: 'https://www.explorenorwayvan.com/location-van-lofoten/',
    images: [{ url: '/images/og-image-norvege.jpg', width: 1200, height: 630, alt: 'Location van Lofoten Norv\u00e8ge' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van Lofoten' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location van Lofoten : plages arctiques et montagnes',
  description: 'Louer un van aux Lofoten : plages de sable blanc, montagnes vertigineuses, villages de p\u00eacheurs. Conseils camping, parking et itin\u00e9raires.',
  image: 'https://www.explorenorwayvan.com/images/van-route-cotiere.jpg',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan', url: 'https://www.explorenorwayvan.com' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan', logo: { '@type': 'ImageObject', url: 'https://www.explorenorwayvan.com/images/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.explorenorwayvan.com/location-van-lofoten/' },
};

export default function LocationLofotenPage() {
  if (!isCityPublished('location-van-lofoten')) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Location de van aux Lofoten : l&apos;archipel mythique"
        subtitle="Plages de sable blanc, montagnes plongeant dans la mer et villages de p\u00eacheurs color\u00e9s."
        imageSrc="/images/van-route-cotiere.jpg"
        imageAlt="Van sur une route c\u00f4ti\u00e8re des \u00eeles Lofoten en Norv\u00e8ge"
        badge="\u00celes Lofoten"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} currentPath="/location-van-lofoten/" />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              Les <strong>Lofoten</strong> forment un archipel au-dessus du cercle polaire, avec des paysages
              parmi les plus photographi\u00e9s de Norv\u00e8ge. Reine, Henningsv\u00e6r, Ramberg\u00a0: chaque village
              semble sorti d&apos;une carte postale, coinc\u00e9 entre des pics granitiques et une mer
              d&apos;un bleu profond.
            </p>
            <p>
              L&apos;archipel est accessible depuis Bod\u00f8 par ferry ou par la E10 depuis le continent
              via Narvik. Point important\u00a0: il n&apos;existe pas de loueur de van sur place. La plupart
              des voyageurs r\u00e9cup\u00e8rent leur v\u00e9hicule \u00e0 Troms\u00f8, Bod\u00f8 ou Narvik avant de rejoindre
              les \u00eeles. Le van reste le meilleur moyen de circuler dans l&apos;archipel, \u00e0 votre rythme,
              en vous arr\u00eatant l\u00e0 o\u00f9 le paysage vous cloue sur place.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages / Inconv\u00e9nients */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Les Lofoten en van\u00a0: avantages et inconv\u00e9nients
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
                    <strong>Paysages uniques au monde</strong>
                    <p className="text-rock-600 text-sm">Montagnes vertigineuses tombant directement dans l&apos;oc\u00e9an Arctique</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">\u2713</span>
                  <div>
                    <strong>Plages arctiques</strong>
                    <p className="text-rock-600 text-sm">Sable blanc et eau turquoise sous les sommets enneig\u00e9s, un contraste saisissant</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">\u2713</span>
                  <div>
                    <strong>Villages de p\u00eacheurs authentiques</strong>
                    <p className="text-rock-600 text-sm">Rorbuer rouges sur pilotis, s\u00e9choirs \u00e0 morue, port anim\u00e9</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">\u2713</span>
                  <div>
                    <strong>Randonn\u00e9es spectaculaires</strong>
                    <p className="text-rock-600 text-sm">Reinebringen, Ryten, Kvalvika\u00a0: des sentiers avec vue sur l&apos;archipel</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">\u2713</span>
                  <div>
                    <strong>Soleil de minuit en \u00e9t\u00e9</strong>
                    <p className="text-rock-600 text-sm">De fin mai \u00e0 mi-juillet, le soleil ne se couche pas</p>
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
                    <strong>Camping sauvage interdit dans plusieurs zones</strong>
                    <p className="text-rock-600 text-sm">Bobilparker (parkings d\u00e9di\u00e9s) obligatoires dans la plupart des spots populaires</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">\u2717</span>
                  <div>
                    <strong>Tr\u00e8s fr\u00e9quent\u00e9 en \u00e9t\u00e9</strong>
                    <p className="text-rock-600 text-sm">Juin \u00e0 ao\u00fbt, les parkings et ferries se remplissent vite</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">\u2717</span>
                  <div>
                    <strong>Routes \u00e9troites et sinueuses</strong>
                    <p className="text-rock-600 text-sm">Tunnels \u00e0 voie unique, croisements d\u00e9licats avec les camping-cars</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">\u2717</span>
                  <div>
                    <strong>Pas de loueur sur place</strong>
                    <p className="text-rock-600 text-sm">Il faut louer \u00e0 Troms\u00f8, Bod\u00f8 ou Narvik puis rouler jusqu&apos;aux \u00eeles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">\u2717</span>
                  <div>
                    <strong>M\u00e9t\u00e9o tr\u00e8s changeante</strong>
                    <p className="text-rock-600 text-sm">Quatre saisons en une journ\u00e9e, m\u00eame en plein \u00e9t\u00e9</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comment acc\u00e9der aux Lofoten en van */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-6">
            Comment acc\u00e9der aux Lofoten en van
          </h2>
          <p className="text-center text-rock-700 max-w-3xl mx-auto mb-12">
            Trois itin\u00e9raires principaux pour rejoindre l&apos;archipel avec votre van.
            Chacun a ses avantages selon votre point de d\u00e9part.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-fjord-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Depuis Bod\u00f8 (ferry)</h3>
              <p className="text-rock-700">
                Ferry Bod\u00f8 \u2192 Moskenes, environ 3\u00a0h\u00a030 de travers\u00e9e. R\u00e9servez imp\u00e9rativement
                en avance durant l&apos;\u00e9t\u00e9\u00a0: les places pour les vans partent vite.
                Vous d\u00e9barquez directement au sud des Lofoten, pr\u00e8s de Reine.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Depuis Troms\u00f8 (route)</h3>
              <p className="text-rock-700">
                E6 puis E10 via Narvik\u00a0: comptez 4 \u00e0 5\u00a0h de route. Le trajet longe
                des fjords magnifiques. Vous entrez par le nord de l&apos;archipel, c\u00f4t\u00e9 Svolv\u00e6r.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-fjord-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Depuis Narvik (E10)</h3>
              <p className="text-rock-700">
                Route directe E10 jusqu&apos;\u00e0 Svolv\u00e6r en 3\u00a0h environ. L&apos;option la plus rapide
                si vous remontez depuis Trondheim par la E6. Paysages grandioses
                d\u00e8s l&apos;entr\u00e9e de l&apos;archipel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Trouvez un van pour les Lofoten"
            description="Comparez les offres de location \u00e0 Troms\u00f8, Bod\u00f8 et Narvik. R\u00e9servez votre van et mettez le cap sur l&apos;archipel."
            buttonText="Voir les disponibilit\u00e9s"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Les plus beaux stops */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Les plus beaux stops aux Lofoten
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Reine et Hamn\u00f8y
              </h3>
              <p className="text-rock-700 mb-3">
                Le village le plus photographi\u00e9 de Norv\u00e8ge. Rorbuer rouges sur pilotis,
                refl\u00e9t\u00e9s dans une eau calme, encadr\u00e9s par des pics ac\u00e9r\u00e9s.
              </p>
              <p className="text-sm text-rock-600">
                Bobilparkering disponible \u00e0 proximit\u00e9 du village. Arriv\u00e9e t\u00f4t le matin
                recommand\u00e9e en haute saison pour trouver une place.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Henningsv\u00e6r
              </h3>
              <p className="text-rock-700 mb-3">
                Surnomm\u00e9 le \u00ab\u00a0Venise des Lofoten\u00a0\u00bb, ce village de p\u00eacheurs est reli\u00e9
                au continent par une s\u00e9rie de ponts. Son stade de football, coinc\u00e9
                entre la mer et la roche, est devenu viral sur les r\u00e9seaux sociaux.
              </p>
              <p className="text-sm text-rock-600">
                Galeries d&apos;art, restaurants de poisson frais et ambiance vivante le soir.
              </p>
            </div>

            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                Plage de Ramberg et Haukland
              </h3>
              <p className="text-rock-700 mb-3">
                Sable blanc, eau turquoise et montagnes en arri\u00e8re-plan. On se croirait
                aux Cara\u00efbes, sauf que la temp\u00e9rature de l&apos;eau rappelle vite la r\u00e9alit\u00e9 arctique.
              </p>
              <p className="text-sm text-rock-600">
                Parking am\u00e9nag\u00e9 pour les vans \u00e0 Haukland. Baignade pour les courageux uniquement.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                \u00c5 i Lofoten
              </h3>
              <p className="text-rock-700 mb-3">
                Le bout de la route, litt\u00e9ralement. Ce minuscule village au nom d&apos;une seule
                lettre marque l&apos;extr\u00e9mit\u00e9 sud de la E10. Le mus\u00e9e de la morue s\u00e9ch\u00e9e
                (T\u00f8rrfiskmuseum) raconte l&apos;histoire de cette industrie s\u00e9culaire.
              </p>
              <p className="text-sm text-rock-600">
                Parking limit\u00e9\u00a0: garez-vous au parking pr\u00e9vu et finissez \u00e0 pied.
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
            <h3>Camping r\u00e9glement\u00e9\u00a0: les Bobilparker</h3>
            <p>
              Le camping sauvage en van est interdit dans de nombreuses zones des Lofoten.
              Les autorit\u00e9s locales ont mis en place des \u00ab\u00a0Bobilparker\u00a0\u00bb, des aires de stationnement
              d\u00e9di\u00e9es aux camping-cars et vans, souvent avec toilettes et point d&apos;eau.
              Comptez entre 150 et 300\u00a0NOK la nuit (environ 13 \u00e0 27\u00a0\u20ac). Respectez
              ces r\u00e8gles\u00a0: les amendes sont \u00e9lev\u00e9es et les habitants excéd\u00e9s par le camping sauvage.
            </p>

            <h3>R\u00e9servez les ferries en avance</h3>
            <p>
              Le ferry Bod\u00f8-Moskenes affiche complet tr\u00e8s t\u00f4t en juillet et ao\u00fbt.
              R\u00e9servez d\u00e8s que vos dates sont fix\u00e9es, id\u00e9alement 2 \u00e0 3\u00a0mois avant le d\u00e9part.
              Le site Torghatten Nord g\u00e8re cette ligne. Pr\u00e9voyez d&apos;arriver au port
              45\u00a0minutes avant l&apos;embarquement.
            </p>

            <h3>Provisions\u00a0: faites le plein \u00e0 Svolv\u00e6r ou Leknes</h3>
            <p>
              Ces deux villes disposent des derniers supermarch\u00e9s bien achaland\u00e9s (Rema\u00a01000,
              Coop Extra). Plus au sud, les \u00e9piceries sont rares et les prix grimpent.
              Faites le plein de courses avant de descendre vers Reine et \u00c5.
            </p>

            <h3>Randonn\u00e9e du Reinebringen</h3>
            <p>
              Depuis 2019, des escaliers en b\u00e9ton (sherpa stairs) s\u00e9curisent la mont\u00e9e.
              Comptez 1\u00a0h\u00a030 aller-retour pour un panorama \u00e0 couper le souffle sur Reine.
              Partez t\u00f4t le matin pour \u00e9viter la foule et profiter de la meilleure lumi\u00e8re.
              Chaussures de randonn\u00e9e recommand\u00e9es\u00a0: les marches peuvent \u00eatre glissantes par temps humide.
            </p>

            <h3>P\u00eache en mer</h3>
            <p>
              Plusieurs op\u00e9rateurs \u00e0 Svolv\u00e6r, Henningsv\u00e6r et Reine organisent des sorties de p\u00eache.
              Le cabillaud, le fl\u00e9tan et la morue abondent dans ces eaux froides. Une exp\u00e9rience
              m\u00e9morable, surtout sous le soleil de minuit. Aucun permis n&apos;est requis pour la p\u00eache
              en mer en Norv\u00e8ge.
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
            <Link href="/location-van-tromso" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location van Troms\u00f8
            </Link>
            <Link href="/location-van-trondheim" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location van Trondheim
            </Link>
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
