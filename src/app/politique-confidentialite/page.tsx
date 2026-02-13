import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité du site ExploreNorwayVan.com - Protection des données personnelles et utilisation des cookies.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/politique-confidentialite',
  },
  robots: {
    index: false,
    follow: true,
  },
};

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Politique de Confidentialité' },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero simple */}
      <section className="bg-gradient-to-br from-rock-100 to-rock-50 py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-rock-900">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-rock-600 max-w-2xl">
            Protection de vos données personnelles et utilisation des cookies
          </p>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose-custom max-w-4xl mx-auto">

            <p className="text-lg">
              La présente politique de confidentialité définit et vous informe de la manière dont
              ExploreNorwayVan.com utilise et protège les informations que vous nous transmettez
              lorsque vous utilisez ce site.
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est :
            </p>
            <ul>
              <li><strong>Nom :</strong> Hector Protocil</li>
              <li><strong>Email :</strong> contact[at]explorenorwayvan.com</li>
            </ul>

            <h2>2. Données collectées</h2>
            <p>
              Nous collectons les données suivantes :
            </p>
            <ul>
              <li>
                <strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées,
                durée de visite (via cookies analytiques si acceptés)
              </li>
              <li>
                <strong>Données techniques :</strong> type d&apos;appareil, système d&apos;exploitation,
                résolution d&apos;écran
              </li>
            </ul>
            <p>
              Ce site ne collecte pas de données personnelles identifiables (nom, email, adresse)
              sauf si vous nous contactez directement par email.
            </p>

            <h2>3. Utilisation des cookies</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette,
              smartphone) lors de la visite d&apos;un site web.
            </p>

            <h3>3.1 Types de cookies utilisés</h3>
            <ul>
              <li>
                <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site
                (mémorisation des préférences de cookies)
              </li>
              <li>
                <strong>Cookies analytiques :</strong> permettent de mesurer l&apos;audience du site
                et d&apos;améliorer son contenu (Google Analytics, si accepté)
              </li>
              <li>
                <strong>Cookies de partenaires :</strong> liés aux services tiers (liens d&apos;affiliation
                Yescapa) pour le suivi des conversions
              </li>
            </ul>

            <h3>3.2 Gestion des cookies</h3>
            <p>
              Lors de votre première visite, une bannière vous permet d&apos;accepter ou de refuser
              les cookies non essentiels. Vous pouvez modifier vos préférences à tout moment en
              supprimant les cookies de votre navigateur.
            </p>
            <p>
              Pour gérer les cookies dans votre navigateur :
            </p>
            <ul>
              <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
              <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
              <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
              <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
            </ul>

            <h2>4. Liens d&apos;affiliation</h2>
            <p>
              Ce site contient des liens d&apos;affiliation vers des services tiers, notamment
              Yescapa. Lorsque vous cliquez sur ces liens, des cookies peuvent être déposés par
              ces partenaires pour suivre les conversions.
            </p>
            <p>
              Ces cookies permettent uniquement de savoir que vous avez cliqué sur un lien depuis
              notre site. Aucune donnée personnelle n&apos;est partagée avec ces partenaires.
            </p>

            <h2>5. Finalités du traitement</h2>
            <p>
              Les données collectées sont utilisées pour :
            </p>
            <ul>
              <li>Améliorer le contenu et l&apos;expérience utilisateur du site</li>
              <li>Analyser les statistiques de fréquentation</li>
              <li>Assurer le bon fonctionnement technique du site</li>
              <li>Mesurer l&apos;efficacité de nos recommandations (affiliation)</li>
            </ul>

            <h2>6. Durée de conservation</h2>
            <ul>
              <li><strong>Cookies de préférences :</strong> 12 mois</li>
              <li><strong>Cookies analytiques :</strong> 13 mois maximum</li>
              <li><strong>Cookies d&apos;affiliation :</strong> selon la politique du partenaire (généralement 30 jours)</li>
            </ul>

            <h2>7. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
              des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> obtenir la confirmation que des données vous concernant sont traitées</li>
              <li><strong>Droit de rectification :</strong> demander la correction de données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit à la limitation :</strong> demander la limitation du traitement</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : contact[at]explorenorwayvan.com
            </p>

            <h2>8. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données
              contre tout accès, modification, divulgation ou destruction non autorisés. Le site
              utilise le protocole HTTPS pour sécuriser les échanges de données.
            </p>

            <h2>9. Transfert de données</h2>
            <p>
              Certaines données peuvent être transférées vers des pays situés hors de l&apos;Union
              Européenne (notamment vers les États-Unis via l&apos;hébergement Vercel). Ces transferts
              sont encadrés par des garanties appropriées (clauses contractuelles types).
            </p>

            <h2>10. Modification de la politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Les modifications entrent en vigueur dès leur publication sur le site. Nous vous
              encourageons à consulter régulièrement cette page.
            </p>

            <h2>11. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou l&apos;exercice
              de vos droits, vous pouvez nous contacter à : contact[at]explorenorwayvan.com
            </p>

            <p className="text-rock-500 text-sm mt-8">
              Dernière mise à jour : Février 2025
            </p>

          </div>
        </div>
      </section>

      {/* Liens */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/mentions-legales" className="btn-outline">
              Mentions légales
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
