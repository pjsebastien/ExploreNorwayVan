import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site ExploreNorwayVan.com - Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/mentions-legales',
  },
  robots: {
    index: false,
    follow: true,
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Mentions Légales' },
];

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero simple */}
      <section className="bg-gradient-to-br from-rock-100 to-rock-50 py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-rock-900">
            Mentions Légales
          </h1>
          <p className="text-xl text-rock-600 max-w-2xl">
            Informations légales concernant le site ExploreNorwayVan.com
          </p>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">

            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>ExploreNorwayVan.com</strong> est édité par :
            </p>
            <ul>
              <li><strong>Nom :</strong> Hector Protocil</li>
              <li><strong>Statut :</strong> Entrepreneur individuel</li>
              <li><strong>Adresse :</strong> France</li>
              <li><strong>Email :</strong> contact[at]explorenorwayvan.com</li>
            </ul>
            <p>
              Directeur de la publication : Hector Protocil
            </p>

            <h2>2. Hébergement</h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul>
              <li><strong>Société :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
              <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></li>
            </ul>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.)
              est la propriété exclusive de Hector Protocil, à l&apos;exception des marques, logos ou
              contenus appartenant à d&apos;autres sociétés partenaires ou auteurs.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
              même partielle, de ces différents éléments est strictement interdite sans l&apos;accord
              exprès par écrit de Hector Protocil.
            </p>

            <h2>4. Liens hypertextes et cookies</h2>
            <p>
              Le site ExploreNorwayVan.com contient des liens hypertextes vers d&apos;autres sites et
              décline toute responsabilité à propos de ces liens externes ou des liens créés par
              d&apos;autres sites vers ExploreNorwayVan.com.
            </p>
            <p>
              La navigation sur le site est susceptible de provoquer l&apos;installation de cookie(s)
              sur l&apos;ordinateur de l&apos;utilisateur. Pour plus d&apos;informations, consultez notre{' '}
              <Link href="/politique-confidentialite" className="text-fjord-600 hover:text-fjord-700">
                politique de confidentialité
              </Link>.
            </p>

            <h2>5. Liens d&apos;affiliation</h2>
            <p>
              Ce site participe à des programmes d&apos;affiliation, notamment avec la plateforme Yescapa.
              Cela signifie que nous pouvons percevoir une commission si vous effectuez un achat après
              avoir cliqué sur certains liens présents sur ce site, sans que cela n&apos;affecte le prix
              que vous payez.
            </p>
            <p>
              Ces liens sont clairement identifiés et n&apos;influencent pas notre ligne éditoriale.
              Nous recommandons uniquement des services que nous estimons utiles pour nos lecteurs.
            </p>

            <h2>6. Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est
              périodiquement mis à jour, mais peut toutefois contenir des inexactitudes, des omissions
              ou des lacunes.
            </p>
            <p>
              Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci
              de bien vouloir le signaler par email en décrivant le problème de la manière la plus
              précise possible.
            </p>
            <p>
              Tout contenu téléchargé se fait aux risques et périls de l&apos;utilisateur et sous sa
              seule responsabilité. En conséquence, Hector Protocil ne saurait être tenu responsable
              d&apos;un quelconque dommage subi par l&apos;ordinateur de l&apos;utilisateur ou d&apos;une
              quelconque perte de données consécutives au téléchargement.
            </p>

            <h2>7. Droit applicable</h2>
            <p>
              Tout litige en relation avec l&apos;utilisation du site ExploreNorwayVan.com est soumis
              au droit français. L&apos;utilisateur reconnaît la compétence exclusive des tribunaux
              français.
            </p>

            <h2>8. Contact</h2>
            <p>
              Pour toute question ou demande d&apos;information concernant le site, ou tout signalement
              de contenu ou d&apos;activités illicites, l&apos;utilisateur peut contacter l&apos;éditeur
              à l&apos;adresse email suivante : contact[at]explorenorwayvan.com
            </p>

          </div>
        </div>
      </section>

      {/* Liens */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/politique-confidentialite" className="btn-outline">
              Politique de confidentialité
            </Link>
            <Link href="/" className="btn-primary">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
