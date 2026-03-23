export const dynamic = 'force-dynamic'

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';
import { isCityPublished } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Location van \u00c5lesund : Geirangerfjord et Trollstigen',
  description: 'Louer un van \u00e0 \u00c5lesund pour le Geirangerfjord, Trollstigen et la route de l\u2019Atlantique. Prix, conseils et itin\u00e9raires depuis la ville Art nouveau.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/location-van-alesund/',
  },
  openGraph: {
    type: 'article',
    title: 'Location van \u00c5lesund : Geirangerfjord et Trollstigen',
    description: 'Louer un van \u00e0 \u00c5lesund pour le Geirangerfjord, Trollstigen et la route de l\u2019Atlantique.',
    url: 'https://www.explorenorwayvan.com/location-van-alesund/',
    images: [{ url: '/images/og-image-norvege.jpg', width: 1200, height: 630, alt: 'Location van \u00c5lesund Norv\u00e8ge' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Location Van \u00c5lesund' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Location van \u00c5lesund : Geirangerfjord et Trollstigen',
  description: 'Louer un van \u00e0 \u00c5lesund pour le Geirangerfjord, Trollstigen et la route de l\u2019Atlantique. Prix, conseils et itin\u00e9raires depuis la ville Art nouveau.',
  image: 'https://www.explorenorwayvan.com/images/van-face-fjords.jpg',
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan', url: 'https://www.explorenorwayvan.com' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan', logo: { '@type': 'ImageObject', url: 'https://www.explorenorwayvan.com/images/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.explorenorwayvan.com/location-van-alesund/' },
};

export default function LocationAlesundPage() {
  if (!isCityPublished('location-van-alesund')) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Location de van \u00e0 \u00c5lesund\u00a0: la porte des fjords"
        subtitle="Architecture Art nouveau, Geirangerfjord et Trollstigen \u00e0 port\u00e9e de van."
        imageSrc="/images/van-face-fjords.jpg"
        imageAlt="Van face aux fjords de l'ouest de la Norv\u00e8ge pr\u00e8s d'\u00c5lesund"
        badge="Fjords de l'ouest"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} currentPath="/location-van-alesund/" />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              <strong>&Aring;lesund</strong> est une ville singuli&egrave;re, enti&egrave;rement reconstruite en style Art nouveau apr&egrave;s l&apos;incendie d&eacute;vastateur de 1904. Perch&eacute;e sur la c&ocirc;te nord-ouest de la Norv&egrave;ge, elle s&apos;&eacute;tend sur plusieurs &icirc;les reli&eacute;es par des ponts, face &agrave; l&apos;oc&eacute;an Atlantique. Son a&eacute;roport dessert Oslo et quelques villes europ&eacute;ennes, ce qui en fait un point d&apos;acc&egrave;s direct &agrave; la r&eacute;gion des fjords de l&apos;ouest.
            </p>
            <p>
              Depuis &Aring;lesund, le Geirangerfjord (class&eacute; UNESCO) se trouve &agrave; environ 2&nbsp;heures de route. Trollstigen et ses 11&nbsp;virages en &eacute;pingle sont &agrave; 1h30. La route de l&apos;Atlantique, l&apos;une des plus spectaculaires au monde, d&eacute;marre &agrave; 2h au sud. Moins fr&eacute;quent&eacute;e que Bergen ou Oslo, &Aring;lesund concentre pourtant certains des plus beaux paysages de Norv&egrave;ge &agrave; moins de deux heures de route.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages / Inconv&eacute;nients */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Louer &agrave; &Aring;lesund&nbsp;: avantages et inconv&eacute;nients
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
                  <span className="text-forest-500 mr-2 mt-1">&check;</span>
                  <div>
                    <strong>Geirangerfjord &agrave; 2h de route</strong>
                    <p className="text-rock-600 text-sm">Le fjord le plus c&eacute;l&egrave;bre de Norv&egrave;ge, class&eacute; au patrimoine mondial UNESCO</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">&check;</span>
                  <div>
                    <strong>Trollstigen &agrave; 1h30</strong>
                    <p className="text-rock-600 text-sm">Route l&eacute;gendaire aux 11&nbsp;virages en &eacute;pingle taill&eacute;s dans la montagne</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">&check;</span>
                  <div>
                    <strong>Route de l&apos;Atlantique &agrave; 2h</strong>
                    <p className="text-rock-600 text-sm">Des ponts lanc&eacute;s au-dessus de l&apos;oc&eacute;an, un trac&eacute; unique au monde</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">&check;</span>
                  <div>
                    <strong>Ville compacte et agr&eacute;able</strong>
                    <p className="text-rock-600 text-sm">Centre Art nouveau &agrave; taille humaine, facile &agrave; visiter en une demi-journ&eacute;e</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 mr-2 mt-1">&check;</span>
                  <div>
                    <strong>Moins de touristes qu&apos;&agrave; Bergen</strong>
                    <p className="text-rock-600 text-sm">Atmosph&egrave;re calme et authentique, m&ecirc;me en haute saison</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-6 text-red-700 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Inconv&eacute;nients
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">&cross;</span>
                  <div>
                    <strong>Peu de loueurs sur place</strong>
                    <p className="text-rock-600 text-sm">L&apos;offre locale est limit&eacute;e&nbsp;; il faut souvent louer &agrave; Bergen ou Oslo puis conduire</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">&cross;</span>
                  <div>
                    <strong>&Eacute;loign&eacute; des a&eacute;roports principaux</strong>
                    <p className="text-rock-600 text-sm">Peu de vols internationaux directs, correspondance fr&eacute;quente via Oslo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">&cross;</span>
                  <div>
                    <strong>Routes panoramiques ferm&eacute;es en hiver</strong>
                    <p className="text-rock-600 text-sm">Trollstigen et la route du Geiranger sont inaccessibles de novembre &agrave; mi-mai</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">&cross;</span>
                  <div>
                    <strong>M&eacute;t&eacute;o pluvieuse sur la c&ocirc;te</strong>
                    <p className="text-rock-600 text-sm">Pr&eacute;cipitations fr&eacute;quentes toute l&apos;ann&eacute;e, pr&eacute;voyez des v&ecirc;tements imperm&eacute;ables</p>
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
            Comment trouver un van &agrave; &Aring;lesund
          </h2>
          <p className="text-center text-rock-700 max-w-3xl mx-auto mb-12">
            Utilisez une plateforme de comparaison pour acc&eacute;der aux offres de van disponibles
            dans la r&eacute;gion d&apos;&Aring;lesund et dans toute la Norv&egrave;ge.
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
                Acc&eacute;dez &agrave; des dizaines d&apos;offres de particuliers et professionnels en un seul endroit.
                Comparez les &eacute;quipements, les avis et les tarifs.
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
                R&eacute;servez en toute s&eacute;r&eacute;nit&eacute; avec une assurance compl&egrave;te incluse. Assistance 24h/24
                et kilom&eacute;trage souvent illimit&eacute;.
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
                B&eacute;n&eacute;ficiez des meilleurs tarifs gr&acirc;ce &agrave; la mise en concurrence des loueurs.
                Tarifs &agrave; partir de 80&euro;/jour selon la saison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Comparez les offres de van"
            description="Trouvez le meilleur tarif pour votre location de van au d&eacute;part d'&Aring;lesund ou d'une autre ville norv&eacute;gienne. Comparez et r&eacute;servez en ligne."
            buttonText="Voir les disponibilit&eacute;s"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Itin&eacute;raires depuis &Aring;lesund */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Itin&eacute;raires au d&eacute;part d&apos;&Aring;lesund
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                &Aring;lesund &rarr; Geirangerfjord
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>&bull; Dur&eacute;e&nbsp;: 1-2 jours</li>
                <li>&bull; Distance&nbsp;: ~100&nbsp;km</li>
                <li>&bull; Points forts&nbsp;: ferry vers Geiranger, route de l&apos;&Oslash;rnevegen, panorama de Flydalsjuvet</li>
              </ul>
              <p className="text-sm text-rock-600">
                Le trajet le plus court pour atteindre le fjord le plus photographi&eacute; de Norv&egrave;ge. La descente vers Geiranger par l&apos;&Oslash;rnevegen est m&eacute;morable.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                &Aring;lesund &rarr; Trollstigen &rarr; &Aring;ndalsnes
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>&bull; Dur&eacute;e&nbsp;: 2-3 jours</li>
                <li>&bull; Distance&nbsp;: ~150&nbsp;km</li>
                <li>&bull; Points forts&nbsp;: 11&nbsp;virages en &eacute;pingle, cascade Stigfossen, vue sur la vall&eacute;e</li>
              </ul>
              <p className="text-sm text-rock-600">
                Trollstigen reste l&apos;une des routes les plus impressionnantes d&apos;Europe. Prenez le temps de vous arr&ecirc;ter aux diff&eacute;rents belvd&egrave;res.
              </p>
            </div>

            <div className="bg-fjord-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-fjord-800">
                &Aring;lesund &rarr; Route de l&apos;Atlantique &rarr; Kristiansund
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>&bull; Dur&eacute;e&nbsp;: 2-3 jours</li>
                <li>&bull; Distance&nbsp;: ~200&nbsp;km</li>
                <li>&bull; Points forts&nbsp;: ponts sur l&apos;oc&eacute;an, village de Bud, panoramas c&ocirc;tiers</li>
              </ul>
              <p className="text-sm text-rock-600">
                La route de l&apos;Atlantique relie plusieurs &icirc;lots par des ponts spectaculaires. Par temps agit&eacute;, les vagues s&apos;&eacute;crasent contre la chauss&eacute;e.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-4 text-forest-800">
                Grande boucle&nbsp;: Geiranger &rarr; Trollstigen &rarr; Atlantique
              </h3>
              <ul className="space-y-2 text-rock-700 mb-4">
                <li>&bull; Dur&eacute;e&nbsp;: 5-7 jours</li>
                <li>&bull; Distance&nbsp;: circuit complet des fjords de l&apos;ouest</li>
                <li>&bull; Points forts&nbsp;: les trois routes panoramiques r&eacute;unies en un seul voyage</li>
              </ul>
              <p className="text-sm text-rock-600">
                Le circuit id&eacute;al pour ceux qui veulent tout voir. D&eacute;part et retour &agrave; &Aring;lesund, en combinant Geirangerfjord, Trollstigen et la route de l&apos;Atlantique.
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
            <h3>Monter au sommet du Aksla</h3>
            <p>
              Avant de quitter &Aring;lesund, grimpez les 418&nbsp;marches du Aksla. Depuis le sommet, la vue embrasse toute la ville Art nouveau, les &icirc;les alentour et les Alpes de Sunnm&oslash;re en arri&egrave;re-plan. C&apos;est le meilleur endroit pour comprendre la g&eacute;ographie de la r&eacute;gion et rep&eacute;rer les routes que vous emprunterez en van.
            </p>

            <h3>Trollstigen et Geirangerfjord&nbsp;: une question de saison</h3>
            <p>
              Les deux routes sont ouvertes de mi-mai &agrave; octobre, selon les conditions de neige. V&eacute;rifiez l&apos;&eacute;tat des routes sur le site officiel de Statens vegvesen avant de partir. En juin, il reste parfois des murs de neige de plusieurs m&egrave;tres le long de la chauss&eacute;e.
            </p>

            <h3>Ferry vers Geiranger</h3>
            <p>
              Le Geirangerfjord est aussi accessible par bateau depuis Hellesylt. Ce ferry traverse le fjord en une heure environ et vous &eacute;vite de faire le tour par la route. R&eacute;servez &agrave; l&apos;avance en &eacute;t&eacute;&nbsp;; les places pour les v&eacute;hicules partent vite.
            </p>

            <h3>Poisson frais au march&eacute;</h3>
            <p>
              &Aring;lesund est un port de p&ecirc;che actif. Passez au march&eacute; aux poissons pour acheter du poisson frais, des crevettes ou du stockfish avant de reprendre la route. C&apos;est un repas rapide, &eacute;conomique et typiquement norv&eacute;gien &agrave; pr&eacute;parer dans votre van.
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
            <Link href="/location-van-trondheim" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location van Trondheim
            </Link>
            <Link href="/itineraire-norvege-10-jours-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Itin&eacute;raire 10 jours
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
