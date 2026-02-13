import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Dormir en Van en Norvège : Aires, Parkings et Spots',
  description: 'Où dormir en van en Norvège ? Découvrez les aires officielles, parkings autorisés et meilleurs spots pour passer la nuit en camping-car.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/dormir-en-van-norvege',
  },
  openGraph: {
    title: 'Dormir en Van en Norvège : Aires, Parkings et Spots',
    description: 'Où dormir en van en Norvège : aires officielles, parkings et spots.',
    url: 'https://www.explorenorwayvan.com/dormir-en-van-norvege',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Dormir en Van en Norvège' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dormir en Van en Norvège : Aires, Parkings et Spots',
  description: 'Où dormir en van en Norvège : aires officielles, parkings et spots.',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan' },
};

export default function DormirVanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Où passer la nuit en van en Norvège ?"
        subtitle="Aires de camping, spots sauvages et parkings autorisés : toutes vos options."
        imageSrc="/images/paysage-fjord-van.jpg"
        imageAlt="Coucher de soleil sur un van au bord d'un fjord"
        badge="Camping sauvage légal"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              <strong>Dormir en van en Norvège</strong> est une expérience unique grâce au droit d&apos;accès
              à la nature (Allemannsretten) qui permet le <Link href="/camping-sauvage-norvege-van" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">camping sauvage</Link> presque partout. Cependant, connaître
              les différentes options de stationnement nocturne vous permettra de voyager plus sereinement
              et de profiter des meilleures infrastructures selon vos besoins.
            </p>
            <p>
              Entre les aires de camping officielles, les parkings de randonnée, les aires de repos et
              les spots sauvages, vous avez l&apos;embarras du choix. Découvrez toutes les
              possibilités pour passer des nuits confortables au cœur des paysages norvégiens lors de votre <Link href="/road-trip-norvege-van" className="text-fjord-600 hover:text-fjord-700 underline underline-offset-2">road trip</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Types d'hébergement */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Les différentes options pour dormir
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Aires de camping */}
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/camping-van-nature.jpg"
                  alt="Aire de camping en Norvège avec vue sur les montagnes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-4">Aires de camping officielles</h3>
                <p className="text-rock-600 mb-4">
                  La Norvège compte des centaines de campings équipés, du plus simple au plus luxueux.
                  Ils offrent des services appréciables après plusieurs jours de camping sauvage.
                </p>
                <ul className="text-rock-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Électricité et eau potable
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Douches et sanitaires
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vidange eaux usées
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    WiFi souvent disponible
                  </li>
                </ul>
                <p className="text-fjord-600 font-semibold">Tarif moyen : 25-45€/nuit</p>
              </div>
            </div>

            {/* Aires de services */}
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/van-point-vue.jpg"
                  alt="Aire de service pour camping-car en Norvège"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-4">Aires de services (Bobilplass)</h3>
                <p className="text-rock-600 mb-4">
                  Les <em>Bobilplass</em> sont des aires spécialement conçues pour les camping-cars et vans.
                  Plus simples que les campings, elles offrent l&apos;essentiel à prix réduit.
                </p>
                <ul className="text-rock-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Stationnement de nuit autorisé
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Borne eau et électricité
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vidange eaux grises/noires
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rock-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Sanitaires limités ou absents
                  </li>
                </ul>
                <p className="text-fjord-600 font-semibold">Tarif moyen : 15-30€/nuit</p>
              </div>
            </div>

            {/* Aires de repos */}
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/roadtrip-paysages-sauvages.jpg"
                  alt="Aire de repos sur une route panoramique norvégienne"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-4">Aires de repos (Rasteplass)</h3>
                <p className="text-rock-600 mb-4">
                  Les aires de repos le long des routes sont généralement gratuites et tolèrent le
                  stationnement nocturne. Parfaites pour une nuit de passage.
                </p>
                <ul className="text-rock-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gratuites
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Souvent avec tables de pique-nique
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Parfois WC basiques
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rock-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Pas de services
                  </li>
                </ul>
                <p className="text-fjord-600 font-semibold">Tarif : Gratuit</p>
              </div>
            </div>

            {/* Camping sauvage */}
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/van-point-vue.jpg"
                  alt="Van en camping sauvage au bord d'un lac en Norvège"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-4">Camping sauvage</h3>
                <p className="text-rock-600 mb-4">
                  Grâce à l&apos;Allemannsretten, vous pouvez dormir dans la nature presque partout.
                  C&apos;est l&apos;option la plus authentique pour vivre le van life norvégien.
                </p>
                <ul className="text-rock-600 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gratuit et légal
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Spots exceptionnels
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-forest-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tranquillité garantie
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rock-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Aucun service
                  </li>
                </ul>
                <p className="text-fjord-600 font-semibold">Tarif : Gratuit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Règles locales */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Règles et bonnes pratiques
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="prose-custom">
              <h3>Respecter les restrictions locales</h3>
              <p>
                Bien que l&apos;Allemannsretten soit très permissif, certaines zones ont des restrictions
                spécifiques pour le stationnement nocturne des camping-cars. C&apos;est notamment le cas dans :
              </p>
              <ul>
                <li>Les centres-villes et zones urbaines</li>
                <li>Certains sites touristiques très fréquentés</li>
                <li>Les zones de protection naturelle</li>
                <li>Les parkings avec panneau d&apos;interdiction explicite</li>
              </ul>
              <p>
                En cas de doute, recherchez les panneaux d&apos;interdiction (cercle rouge barré) ou
                demandez aux locaux. La plupart des Norvégiens sont accueillants envers les vanlifers
                respectueux.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-forest-50 rounded-2xl p-6">
                <h4 className="font-display font-semibold text-lg mb-4 text-forest-800">
                  Les bonnes pratiques
                </h4>
                <ul className="space-y-3 text-rock-700">
                  <li>• Ne restez pas plus de 2 nuits au même endroit</li>
                  <li>• Gardez une distance de 150m minimum des habitations</li>
                  <li>• Ne laissez aucune trace de votre passage</li>
                  <li>• Utilisez des toilettes portables ou WC publics</li>
                  <li>• Emportez tous vos déchets</li>
                  <li>• Soyez discrets (arrivée tardive, départ matinal)</li>
                </ul>
              </div>

              <div className="bg-fjord-50 rounded-2xl p-6">
                <h4 className="font-display font-semibold text-lg mb-4 text-fjord-800">
                  Applications utiles
                </h4>
                <ul className="space-y-3 text-rock-700">
                  <li><strong>Park4Night</strong> - Spots de camping sauvage</li>
                  <li><strong>iOverlander</strong> - Points d&apos;intérêt pour nomades</li>
                  <li><strong>Norcamp</strong> - Campings officiels norvégiens</li>
                  <li><strong>Campercontact</strong> - Aires de services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            variant="minimal"
            title="Prêt à explorer la Norvège en van ?"
            description="Comparez les offres de location et trouvez le van parfait pour votre aventure."
            buttonText="Trouver un van"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Liens internes */}
      <section className="section-padding bg-rock-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-semibold mb-8">
            Articles complémentaires
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/camping-sauvage-norvege-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Camping sauvage
            </Link>
            <Link href="/itineraire-norvege-10-jours-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Itinéraire 10 jours
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
