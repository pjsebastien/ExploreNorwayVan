import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'À propos d\'ExploreNorwayVan',
  description: 'Découvrez l\'équipe derrière ExploreNorwayVan, notre mission et pourquoi nous sommes passionnés par la location de van en Norvège.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/a-propos/',
  },
  openGraph: {
    title: 'À propos d\'ExploreNorwayVan',
    description: 'Découvrez l\'équipe derrière ExploreNorwayVan et notre passion pour la Norvège en van.',
    url: 'https://www.explorenorwayvan.com/a-propos/',
    type: 'website',
    images: [{ url: '/images/og-image-norvege.jpg', width: 1200, height: 630, alt: 'ExploreNorwayVan - Location van Norvège' }],
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos' },
];

const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ExploreNorwayVan',
  url: 'https://www.explorenorwayvan.com',
  logo: 'https://www.explorenorwayvan.com/images/logo.png',
  description: 'Guide indépendant de référence pour la location de van en Norvège. Comparatifs, itinéraires et conseils pratiques.',
  foundingDate: '2025',
  sameAs: [],
};

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-fjord-50 to-forest-50 py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-rock-900">
            À propos d&apos;ExploreNorwayVan
          </h1>
          <p className="text-xl text-rock-600 max-w-2xl">
            Le guide indépendant pour explorer la Norvège en van aménagé
          </p>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} currentPath="/a-propos/" />
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">

            <h2>Notre mission</h2>
            <p>
              <strong>ExploreNorwayVan</strong> est ne d&apos;une passion simple : la Norvège et la liberté
              que procure le voyage en van. Notre objectif est de fournir le guide le plus complet et le
              plus fiable pour tous ceux qui souhaitent découvrir les fjords, les montagnes et les routes
              panoramiques norvégiennes au volant d&apos;un van aménagé.
            </p>
            <p>
              Nous savons à quel point préparer un road trip en Norvège peut sembler complexe : choix du
              loueur, budget à prévoir, réglementation du camping sauvage, itinéraires à privilégier...
              C&apos;est pourquoi nous avons rassemblé toute l&apos;information utile en un seul endroit,
              vérifiée et mise à jour régulièrement.
            </p>

            <h2>Un guide indépendant et transparent</h2>
            <p>
              ExploreNorwayVan est un site éditorial indépendant. Nos recommandations sont basées sur des
              recherches approfondies et des retours de voyageurs. Nous ne sommes affiliés à aucun loueur
              en particulier.
            </p>
            <p>
              Pour financer notre travail et maintenir ce guide gratuit, certains liens de notre site sont
              des liens d&apos;affiliation (notamment vers la plateforme Yescapa). Cela signifie que nous
              pouvons percevoir une commission si vous réservez via ces liens, <strong>sans aucun surcoût
              pour vous</strong>. Ces liens sont systématiquement identifiés sur notre site.
            </p>
            <p>
              Cette source de revenus n&apos;influence en rien notre ligne éditoriale. Nous recommandons
              uniquement des services que nous jugeons utiles et fiables pour nos lecteurs.
            </p>

            <h2>Ce que vous trouverez sur notre site</h2>
            <ul>
              <li>
                <strong>Des comparatifs détaillés</strong> pour choisir le bon van et le bon loueur selon
                votre budget et vos besoins
              </li>
              <li>
                <strong>Des itinéraires testés</strong> avec distances, temps de trajet et points d&apos;intérêt
                pour chaque étape
              </li>
              <li>
                <strong>Des guides pratiques</strong> sur la réglementation, le camping sauvage,
                l&apos;Allemannsretten et la conduite en Norvège
              </li>
              <li>
                <strong>Des conseils budget</strong> avec des estimations réalistes pour planifier votre
                voyage sereinement
              </li>
            </ul>

            <h2>Notre expertise</h2>
            <p>
              Notre équipe suit de près l&apos;actualité du van life en Norvège : évolution des tarifs de
              location, nouvelles réglementations, ouverture et fermeture des routes saisonnières, et retours
              d&apos;expérience de la communauté de voyageurs. Chaque article est recherché en profondeur et
              mis à jour pour refléter les informations les plus récentes.
            </p>
            <p>
              Nous consultons régulièrement les sources officielles norvégiennes (Statens vegvesen, Visit
              Norway, Miljødirektoratet) pour garantir l&apos;exactitude de nos informations, notamment
              concernant les règles de circulation et le droit d&apos;accès à la nature.
            </p>

            <h2>Contact</h2>
            <p>
              Vous avez une question, une suggestion ou une correction à apporter ? N&apos;hésitez pas à
              nous écrire à <strong>contact[at]explorenorwayvan.com</strong>. Nous répondons à tous les
              messages dans les meilleurs délais.
            </p>

          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-semibold mb-8">Explorez nos guides</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/road-trip-norvege-van" className="btn-primary">
              Road trip Norvège
            </Link>
            <Link href="/prix-location-van-norvege" className="btn-outline">
              Prix et budget
            </Link>
            <Link href="/faq-location-van-norvege" className="btn-outline">
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
