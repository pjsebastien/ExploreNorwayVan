import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Prix Location Van Norvège : Tarifs et Budget Complet',
  description: 'Découvrez les prix de location de van en Norvège : tarifs par saison, assurances, caution, péages et ferries. Budget complet pour votre road trip.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/prix-location-van-norvege',
  },
  openGraph: {
    title: 'Prix Location Van Norvège : Tarifs et Budget Complet',
    description: 'Tarifs de location van en Norvège, assurances, caution et budget complet pour votre road trip.',
    url: 'https://www.explorenorwayvan.com/prix-location-van-norvege',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Prix Location Van Norvège' },
];

const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Prix Location Van Norvège : Tarifs et Budget Complet',
  description: 'Tout savoir sur les prix de location de van en Norvège avec budget détaillé.',
  author: { '@type': 'Organization', name: 'ExploreNorwayVan' },
  publisher: { '@type': 'Organization', name: 'ExploreNorwayVan' },
};

export default function PrixLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <Hero
        title="Combien coûte un van en Norvège ?"
        subtitle="Budget complet : location, carburant, ferries et péages. Tout pour préparer votre voyage."
        imageSrc="/images/van-face-fjords.jpg"
        imageAlt="Van aménagé face aux fjords norvégiens"
        badge="À partir de 80€/jour"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">
            <p className="text-lg">
              Comprendre les <strong>prix de location de van en Norvège</strong> est essentiel pour bien
              préparer votre budget voyage. Entre le coût du véhicule, les assurances, le carburant, les
              ferries et les péages, les dépenses peuvent vite s&apos;accumuler. Voici comment
              aide à anticiper tous les coûts pour éviter les mauvaises surprises.
            </p>
            <p>
              La bonne nouvelle : malgré la réputation de la Norvège comme destination chère, voyager en
              van permet de réaliser des économies significatives sur l&apos;hébergement et la restauration.
              En optimisant votre budget, un road trip norvégien reste accessible à de nombreux voyageurs.
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs location */}
      <section className="section-padding bg-rock-50 section-accent">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Tarifs de location selon la saison
          </h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-fjord-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-display font-semibold">Type de véhicule</th>
                  <th className="px-6 py-4 text-center font-display font-semibold">Basse saison<br /><span className="text-sm font-normal">(oct-avril)</span></th>
                  <th className="px-6 py-4 text-center font-display font-semibold">Mi-saison<br /><span className="text-sm font-normal">(mai, sept)</span></th>
                  <th className="px-6 py-4 text-center font-display font-semibold">Haute saison<br /><span className="text-sm font-normal">(juin-août)</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rock-100">
                <tr>
                  <td className="px-6 py-4 font-medium">Van compact (2 pers.)</td>
                  <td className="px-6 py-4 text-center">70-100€/jour</td>
                  <td className="px-6 py-4 text-center">90-130€/jour</td>
                  <td className="px-6 py-4 text-center">120-160€/jour</td>
                </tr>
                <tr className="bg-rock-50">
                  <td className="px-6 py-4 font-medium">Van aménagé standard (2-3 pers.)</td>
                  <td className="px-6 py-4 text-center">90-130€/jour</td>
                  <td className="px-6 py-4 text-center">120-170€/jour</td>
                  <td className="px-6 py-4 text-center">160-220€/jour</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Van grand confort (4 pers.)</td>
                  <td className="px-6 py-4 text-center">120-170€/jour</td>
                  <td className="px-6 py-4 text-center">160-230€/jour</td>
                  <td className="px-6 py-4 text-center">200-300€/jour</td>
                </tr>
                <tr className="bg-rock-50">
                  <td className="px-6 py-4 font-medium">Camping-car profilé</td>
                  <td className="px-6 py-4 text-center">150-200€/jour</td>
                  <td className="px-6 py-4 text-center">200-280€/jour</td>
                  <td className="px-6 py-4 text-center">280-380€/jour</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Camping-car intégral</td>
                  <td className="px-6 py-4 text-center">180-250€/jour</td>
                  <td className="px-6 py-4 text-center">250-350€/jour</td>
                  <td className="px-6 py-4 text-center">350-450€/jour</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose-custom max-w-4xl mx-auto">
            <p>
              Ces tarifs sont indicatifs et varient selon les loueurs. Ils incluent généralement :
              le kilométrage illimité, l&apos;assurance responsabilité civile, l&apos;équipement de base
              (literie, cuisine, vaisselle) et l&apos;assistance 24h/24. Les réductions pour les locations
              longue durée (plus de 14 jours) peuvent atteindre 15-25%.
            </p>
          </div>
        </div>
      </section>

      {/* Assurances */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Assurances et options
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 border-2 border-rock-100">
              <h3 className="text-xl font-display font-semibold mb-2">Assurance de base</h3>
              <p className="text-3xl font-bold text-fjord-600 mb-4">Incluse</p>
              <ul className="space-y-2 text-rock-600 mb-6">
                <li>• Responsabilité civile</li>
                <li>• Vol avec franchise élevée</li>
                <li>• Dommages avec franchise élevée</li>
                <li>• Franchise : 1500-3000€</li>
              </ul>
              <p className="text-sm text-rock-500">
                Protection minimale, franchise à votre charge en cas de sinistre.
              </p>
            </div>

            <div className="card p-8 border-2 border-fjord-500 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fjord-500 text-white text-sm px-3 py-1 rounded-full">
                Recommandé
              </span>
              <h3 className="text-xl font-display font-semibold mb-2">Assurance medium</h3>
              <p className="text-3xl font-bold text-fjord-600 mb-4">15-25€<span className="text-lg">/jour</span></p>
              <ul className="space-y-2 text-rock-600 mb-6">
                <li>• Tous risques</li>
                <li>• Franchise réduite : 500-800€</li>
                <li>• Bris de glace inclus</li>
                <li>• Assistance renforcée</li>
              </ul>
              <p className="text-sm text-rock-500">
                Bon compromis entre protection et coût.
              </p>
            </div>

            <div className="card p-8 border-2 border-forest-500">
              <h3 className="text-xl font-display font-semibold mb-2">Assurance premium</h3>
              <p className="text-3xl font-bold text-forest-600 mb-4">30-45€<span className="text-lg">/jour</span></p>
              <ul className="space-y-2 text-rock-600 mb-6">
                <li>• Franchise zéro</li>
                <li>• Tous dommages couverts</li>
                <li>• Pneus et pare-brise inclus</li>
                <li>• Rapatriement inclus</li>
              </ul>
              <p className="text-sm text-rock-500">
                Tranquillité totale, idéal pour les routes de montagne.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-fjord-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-display font-semibold text-lg mb-4">Notre conseil</h3>
            <p className="text-rock-700">
              Pour un road trip en Norvège, nous recommandons au minimum l&apos;assurance medium. Les routes
              de montagne, les tunnels étroits et la météo changeante augmentent les risques de petits
              accrochages. Une assurance externe type <em>World Nomads</em> ou via votre carte bancaire
              peut également compléter la couverture du loueur.
            </p>
          </div>
        </div>
      </section>

      {/* Caution */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Caution et dépôt de garantie
          </h2>

          <div className="prose-custom max-w-4xl mx-auto">
            <p>
              La <strong>caution</strong> est un élément important à prendre en compte. Elle varie
              généralement entre <strong>1 000€ et 3 000€</strong> selon le véhicule et le niveau
              d&apos;assurance choisi. Cette somme est bloquée sur votre carte bancaire au moment
              de la prise en charge et libérée après le retour du véhicule (sous 7 à 14 jours).
            </p>

            <div className="bg-white rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Montants typiques de caution</h3>
              <ul className="space-y-2">
                <li><strong>Assurance de base :</strong> 2 000 - 3 000€</li>
                <li><strong>Assurance medium :</strong> 800 - 1 500€</li>
                <li><strong>Assurance premium :</strong> 0 - 500€</li>
              </ul>
            </div>

            <p>
              <strong>Important :</strong> Assurez-vous que votre carte bancaire dispose d&apos;un plafond
              suffisant pour couvrir la caution. Une carte de débit (Visa Electron, Maestro) est souvent
              refusée ; privilégiez une carte de crédit (Visa, Mastercard classique).
            </p>
          </div>
        </div>
      </section>

      {/* Coûts additionnels */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Péages, ferries et carburant
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="w-14 h-14 bg-fjord-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-fjord-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Péages</h3>
              <p className="text-rock-600 mb-4">
                La Norvège compte de nombreux péages automatiques (bompenger). Les véhicules sont
                détectés par caméra et facturés automatiquement.
              </p>
              <ul className="text-rock-600 space-y-2">
                <li>• Environ 2-8€ par passage</li>
                <li>• Budget moyen : 5-15€/jour</li>
                <li>• Facturation via le loueur ou AutoPASS</li>
              </ul>
            </div>

            <div className="card p-8">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Ferries</h3>
              <p className="text-rock-600 mb-4">
                Les ferries sont indispensables pour traverser les fjords. Les prix varient selon
                la longueur du véhicule et la traversée.
              </p>
              <ul className="text-rock-600 space-y-2">
                <li>• Courte traversée : 15-30€</li>
                <li>• Longue traversée : 40-80€</li>
                <li>• Budget moyen : 20-50€/jour</li>
              </ul>
            </div>

            <div className="card p-8">
              <div className="w-14 h-14 bg-rock-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-rock-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Carburant</h3>
              <p className="text-rock-600 mb-4">
                Le diesel et l&apos;essence sont chers en Norvège. Prévoyez un budget conséquent,
                surtout pour les longs trajets.
              </p>
              <ul className="text-rock-600 space-y-2">
                <li>• Diesel : ~1,70-1,90€/L</li>
                <li>• Essence : ~1,80-2,00€/L</li>
                <li>• Conso moyenne van : 10-12L/100km</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Budget global */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
            Budget global estimatif
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-display font-semibold mb-6 text-fjord-700">
                Budget économique<br />
                <span className="text-lg font-normal text-rock-500">10 jours - 2 personnes</span>
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Location van compact</span>
                  <span className="font-semibold">900€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Assurance medium</span>
                  <span className="font-semibold">180€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Carburant (1500 km)</span>
                  <span className="font-semibold">280€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Péages</span>
                  <span className="font-semibold">80€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Ferries</span>
                  <span className="font-semibold">200€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Alimentation (courses)</span>
                  <span className="font-semibold">300€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Activités</span>
                  <span className="font-semibold">100€</span>
                </li>
              </ul>
              <div className="flex justify-between text-xl font-bold text-fjord-700">
                <span>Total</span>
                <span>~2 040€</span>
              </div>
              <p className="text-sm text-rock-500 mt-2">Soit ~100€/jour/personne</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-forest-500">
              <h3 className="text-2xl font-display font-semibold mb-6 text-forest-700">
                Budget confort<br />
                <span className="text-lg font-normal text-rock-500">10 jours - 2 personnes</span>
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Location van aménagé</span>
                  <span className="font-semibold">1 600€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Assurance premium</span>
                  <span className="font-semibold">350€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Carburant (2000 km)</span>
                  <span className="font-semibold">400€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Péages</span>
                  <span className="font-semibold">120€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Ferries</span>
                  <span className="font-semibold">350€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Alimentation + restaurants</span>
                  <span className="font-semibold">500€</span>
                </li>
                <li className="flex justify-between border-b border-rock-100 pb-2">
                  <span>Activités (kayak, randos guidées)</span>
                  <span className="font-semibold">300€</span>
                </li>
              </ul>
              <div className="flex justify-between text-xl font-bold text-forest-700">
                <span>Total</span>
                <span>~3 620€</span>
              </div>
              <p className="text-sm text-rock-500 mt-2">Soit ~180€/jour/personne</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-rock-600 max-w-2xl mx-auto">
              Ces budgets n&apos;incluent pas le vol aller-retour (comptez 150-400€/pers selon la saison
              et l&apos;anticipation). Le camping sauvage est gratuit en Norvège, ce qui permet de
              réduire significativement les coûts d&apos;hébergement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AffiliateCTA
            title="Comparez les tarifs des loueurs"
            description="Trouvez le meilleur rapport qualité-prix pour votre location de van en Norvège. Comparez les offres et réservez en toute confiance."
            buttonText="Voir les offres"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Liens internes */}
      <section className="section-padding bg-rock-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-semibold mb-8">
            Continuez votre préparation
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/road-trip-norvege-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Routes panoramiques
            </Link>
            <Link href="/itineraire-norvege-10-jours-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Itinéraire 10 jours
            </Link>
            <Link href="/camping-sauvage-norvege-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Camping sauvage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
