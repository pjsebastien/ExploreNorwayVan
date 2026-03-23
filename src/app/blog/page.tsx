export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPublishedArticles } from '@/lib/blog'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Blog van Norvège : conseils mois par mois',
  description: 'Tous nos articles pour voyager en van en Norvège : météo, itinéraires, bons plans et conseils pratiques pour chaque mois de l\'année.',
  alternates: {
    canonical: 'https://www.explorenorwayvan.com/blog/',
  },
  openGraph: {
    type: 'website',
    title: 'Blog van Norvège : conseils mois par mois',
    description: 'Tous nos articles pour voyager en van en Norvège mois par mois.',
    url: 'https://www.explorenorwayvan.com/blog/',
    images: [{ url: '/images/og-image-norvege.jpg', width: 1200, height: 630, alt: 'Blog ExploreNorwayVan' }],
  },
}

const breadcrumbItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Blog' },
]

const monthNames = [
  '', 'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
]

const schemaBlog = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog ExploreNorwayVan',
  description: 'Conseils pour voyager en van en Norvège mois par mois.',
  url: 'https://www.explorenorwayvan.com/blog/',
  publisher: {
    '@type': 'Organization',
    name: 'ExploreNorwayVan',
    logo: { '@type': 'ImageObject', url: 'https://www.explorenorwayvan.com/images/logo.png' },
  },
}

export default function BlogPage() {
  const articles = getPublishedArticles()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBlog) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-fjord-700 to-fjord-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/van-route-cotiere.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-forest-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">Blog voyage</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              La Norvège en van, mois par mois
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Météo, routes praticables, activités et bons plans : tout ce qu&apos;il faut savoir avant de partir selon la saison.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} currentPath="/blog/" />
      </div>

      {/* Articles grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {articles.length === 0 ? (
            <p className="text-center text-rock-600 text-lg">
              Les articles arrivent bientôt. Revenez dans quelques jours.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group card overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.heroImage.src}
                      alt={article.heroImage.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-fjord-600 text-white text-sm font-medium rounded-full">
                        {monthNames[article.month]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-display font-semibold text-rock-900 group-hover:text-fjord-600 transition-colors mb-3">
                      {article.title}
                    </h2>
                    <p className="text-rock-600 text-sm line-clamp-3">
                      {article.metaDescription}
                    </p>
                    <div className="mt-4 flex items-center text-fjord-600 text-sm font-medium">
                      Lire l&apos;article
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rock-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-semibold mb-4">
            Prêt à partir ?
          </h2>
          <p className="text-rock-600 max-w-2xl mx-auto mb-8">
            Comparez les offres de location de van en Norvège et trouvez le véhicule idéal pour votre voyage.
          </p>
          <a
            href="https://www.yescapa.fr/campervan-hire/norvege?ae=620&aev=vanecosse"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="btn-primary"
          >
            Voir les vans disponibles
          </a>
        </div>
      </section>
    </>
  )
}
