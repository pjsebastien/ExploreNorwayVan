import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateCTA from '@/components/AffiliateCTA';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'FAQ Location Van Norvège : Toutes vos Questions',
  description: 'Toutes les réponses à vos questions sur la location de van en Norvège : permis, assurance, camping sauvage, budget, meilleure période et plus encore.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/faq-location-van-norvege',
  },
  openGraph: {
    title: 'FAQ Location Van Norvège : Toutes vos Questions',
    description: 'Réponses aux questions fréquentes sur la location de van en Norvège.',
    url: 'https://www.explorenorwayvan.com/faq-location-van-norvege',
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'FAQ Location Van Norvège' },
];

const faqItems = [
  {
    question: "Quelle est la meilleure période pour louer un van en Norvège ?",
    answer: "La meilleure période s'étend de mi-mai à mi-septembre. Juin et juillet offrent les journées les plus longues avec le soleil de minuit dans le nord. Mai et septembre sont moins fréquentés et permettent de voir les aurores boréales tout en bénéficiant de conditions de conduite correctes. L'hiver (novembre-mars) est réservé aux aventuriers expérimentés en raison des routes fermées et des conditions difficiles."
  },
  {
    question: "Faut-il un permis spécial pour conduire un van en Norvège ?",
    answer: "Non, le permis B français ou européen suffit pour conduire un van de moins de 3,5 tonnes, ce qui correspond à la quasi-totalité des vans aménagés de location. Au-delà de ce poids (certains grands camping-cars), un permis C1 est nécessaire. Si votre permis est délivré hors UE, un permis international peut être exigé par le loueur."
  },
  {
    question: "Le camping sauvage est-il vraiment autorisé en Norvège ?",
    answer: "Oui, grâce au droit d'Allemannsretten (droit d'accès à la nature), le camping sauvage est légal en Norvège. Vous pouvez camper presque partout dans la nature à condition de respecter quelques règles : rester à 150 mètres minimum des habitations, ne pas séjourner plus de 2 nuits au même endroit, ne laisser aucune trace et éviter les terrains cultivés. Pour les véhicules motorisés, certaines communes peuvent avoir des restrictions locales."
  },
  {
    question: "Combien coûte la location d'un van en Norvège ?",
    answer: "Les prix varient selon la saison et le type de véhicule. En basse saison (oct-avril), comptez 70-150€/jour pour un van. En haute saison (juin-août), les tarifs montent à 120-280€/jour. Ces prix incluent généralement le kilométrage illimité et l'assurance de base. Ajoutez un budget pour l'assurance complémentaire (15-40€/jour), le carburant (~1,80€/L), les péages (5-15€/jour) et les ferries (variable selon les traversées)."
  },
  {
    question: "Peut-on faire un trajet aller simple (one-way) avec le van ?",
    answer: "Oui, la plupart des loueurs proposent des trajets one-way entre Oslo et Bergen, ou vers d'autres villes norvégiennes. Un supplément est généralement facturé (100-300€ selon la distance). C'est pratique pour optimiser votre itinéraire sans avoir à revenir au point de départ. Vérifiez cette option au moment de la réservation."
  },
  {
    question: "Les vans sont-ils équipés pour l'hiver ?",
    answer: "Les vans de location en Norvège sont équipés de pneus hiver de novembre à avril, conformément à la loi. Certains modèles disposent d'un chauffage autonome (Webasto ou Eberspächer), indispensable pour les nuits froides. En hiver, vérifiez que le van dispose d'un chauffage efficace, de réservoirs d'eau antigel et d'équipements adaptés. Les routes de montagne (Trollstigen, etc.) sont fermées en hiver."
  },
  {
    question: "Quelle caution est demandée pour la location ?",
    answer: "La caution varie selon le loueur et le niveau d'assurance choisi. Avec l'assurance de base, elle est généralement de 2000-3000€. Avec une assurance medium (franchise réduite), elle descend à 800-1500€. Avec l'assurance premium (franchise zéro), elle peut être de 0-500€. La caution est bloquée sur votre carte bancaire et libérée après le retour du véhicule (7-14 jours)."
  },
  {
    question: "Où peut-on vidanger les eaux usées du van ?",
    answer: "Les stations de vidange sont disponibles dans la plupart des campings, aires de services (Bobilplass) et certaines stations-service. Elles sont parfois gratuites, parfois payantes (5-15€). Ne vidangez jamais vos eaux usées dans la nature. Les applications comme Park4Night ou Campercontact indiquent les points de vidange les plus proches."
  },
  {
    question: "Les routes norvégiennes sont-elles adaptées aux vans ?",
    answer: "Oui, l'infrastructure norvégienne est excellente pour les vans et camping-cars. Les routes principales sont larges et bien entretenues. Certaines routes de montagne et tunnels peuvent être étroits, mais les véhicules de moins de 2,5m de large passent sans problème. Les 18 routes touristiques nationales sont spécialement aménagées avec des aires de repos panoramiques. Attention aux pentes raides et aux virages serrés sur les routes comme Trollstigen."
  },
  {
    question: "Faut-il réserver les ferries à l'avance ?",
    answer: "Pour la plupart des ferries locaux (traversées de fjords), aucune réservation n'est nécessaire : vous faites la queue et embarquez. En haute saison, prévoyez une marge d'attente aux traversées populaires. Pour les longs trajets (ex : Bergen-Kirkenes via Hurtigruten) ou les ferries internationaux, la réservation est indispensable. Les ferries Express vers les îles peuvent aussi nécessiter une réservation en été."
  },
  {
    question: "Comment fonctionne le système de péage en Norvège ?",
    answer: "La Norvège utilise un système de péage automatique (bompenger) sans barrière. Votre véhicule est photographié et facturé automatiquement. Les loueurs équipent généralement leurs véhicules d'un badge AutoPASS ou facturent les péages a posteriori. Demandez au loueur comment les péages seront gérés pour éviter les surprises. Budget moyen : 5-15€/jour selon l'itinéraire."
  },
  {
    question: "Peut-on emmener un animal de compagnie dans le van ?",
    answer: "Cela dépend du loueur. Certains acceptent les animaux moyennant un supplément de nettoyage (50-100€), d'autres les refusent catégoriquement. Vérifiez la politique du loueur avant de réserver. Pour entrer en Norvège avec un animal, vous devez respecter les règles européennes : puce électronique, vaccin antirabique à jour, passeport européen pour animal de compagnie."
  },
  {
    question: "Quel budget total prévoir pour 10 jours en van en Norvège ?",
    answer: "Pour un voyage de 10 jours à deux personnes, comptez : location van (900-1800€), assurance complémentaire (150-350€), carburant (250-400€), péages (80-120€), ferries (150-300€), alimentation (250-400€), activités (100-300€). Budget total : 1900-3700€ selon le niveau de confort, soit 95-185€/jour/personne. Le camping sauvage gratuit permet de réduire significativement les coûts."
  },
  {
    question: "Les prises électriques en Norvège sont-elles les mêmes qu'en France ?",
    answer: "Oui, la Norvège utilise les mêmes prises de type C et E qu'en France (2 broches rondes). Aucun adaptateur n'est nécessaire pour vos appareils français. Les vans de location sont équipés de prises 12V et souvent de prises USB. Certains modèles ont un convertisseur 220V pour les appareils électriques classiques."
  },
  {
    question: "Quelle est la vitesse maximale autorisée en Norvège ?",
    answer: "Les limitations de vitesse sont strictes : 50 km/h en ville, 80 km/h hors agglomération, 90-100 km/h sur les voies rapides (rare). Les amendes sont très élevées (plusieurs centaines d'euros pour 10 km/h au-dessus de la limite). Les radars sont nombreux. Avec un van, respectez scrupuleusement les limitations, notamment dans les descentes où le freinage est plus long."
  }
];

// Schema.org FAQPage
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <Hero
        title="Vos questions sur le van en Norvège"
        subtitle="Permis, assurance, budget, camping sauvage... Toutes les réponses pour bien préparer votre voyage."
        imageSrc="/images/roadtrip-paysages-sauvages.jpg"
        imageAlt="Paysages sauvages norvégiens en road trip"
        badge="Questions fréquentes"
      />

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-rock-50 rounded-2xl p-6 md:p-8">
                  <h2 className="text-lg md:text-xl font-display font-semibold mb-4 text-rock-900">
                    {item.question}
                  </h2>
                  <p className="text-rock-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Prêt à réserver votre van ?"
            description="Comparez les offres de location de van en Norvège et trouvez le véhicule idéal pour votre aventure."
            buttonText="Voir les offres"
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
          />
        </div>
      </section>

      {/* Question non trouvée */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-semibold mb-4">
            Vous n&apos;avez pas trouvé votre réponse ?
          </h2>
          <p className="text-rock-600 mb-8 max-w-2xl mx-auto">
            Consultez nos articles pour obtenir plus d&apos;informations sur la location de van
            en Norvège, les itinéraires et les conseils pratiques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/prix-location-van-norvege" className="btn-primary">
              Prix et budget
            </Link>
            <Link href="/camping-sauvage-norvege-van" className="btn-outline">
              Camping sauvage
            </Link>
            <Link href="/road-trip-norvege-van" className="btn-outline">
              Routes panoramiques
            </Link>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="section-padding bg-rock-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-semibold mb-8">
            Articles complémentaires
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/itineraire-norvege-10-jours-van" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Itinéraire 10 jours
            </Link>
            <Link href="/dormir-en-van-norvege" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Où dormir en van
            </Link>
            <Link href="/location-van-oslo" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location Oslo
            </Link>
            <Link href="/location-van-bergen" className="btn-outline border-white text-white hover:bg-white hover:text-rock-900">
              Location Bergen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
