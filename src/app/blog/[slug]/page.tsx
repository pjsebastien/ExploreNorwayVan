export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllArticles, getArticleBySlug, getPublishedArticles, getRelatedArticles } from '@/lib/blog'
import { getPublishedCities } from '@/lib/cities'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateCTA from '@/components/AffiliateCTA'

const monthNames = [
  '', 'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
]

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.explorenorwayvan.com/blog/${article.slug}/`,
    },
    openGraph: {
      type: 'article',
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://www.explorenorwayvan.com/blog/${article.slug}/`,
      images: [{ url: article.heroImage.src, width: 1200, height: 630, alt: article.heroImage.alt }],
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  // Vérifier la date de publication
  if (new Date(article.publishedAt) > new Date()) notFound()

  const relatedArticles = getRelatedArticles(slug)
  const publishedCities = getPublishedCities()

  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: article.title },
  ]

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: `https://www.explorenorwayvan.com${article.heroImage.src}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { '@type': 'Organization', name: 'ExploreNorwayVan', url: 'https://www.explorenorwayvan.com' },
    publisher: {
      '@type': 'Organization',
      name: 'ExploreNorwayVan',
      logo: { '@type': 'ImageObject', url: 'https://www.explorenorwayvan.com/images/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.explorenorwayvan.com/blog/${article.slug}/` },
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rock-950/90 via-rock-900/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-rock-950/60 via-transparent to-rock-950/30" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fjord-500 via-forest-500 to-fjord-500 z-10" />

        <div className="container-custom relative z-10 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-fjord-600 text-white text-sm font-medium rounded-full">
                {monthNames[article.month]}
              </span>
              <time className="text-white/80 text-sm" dateTime={article.publishedAt}>
                {formattedDate}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight text-white drop-shadow-lg">
              {article.title}
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      <div className="container-custom">
        <Breadcrumb items={breadcrumbItems} currentPath={`/blog/${article.slug}/`} />
      </div>

      {/* Sommaire */}
      <section className="bg-white pb-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <nav className="bg-rock-50 rounded-xl p-6" aria-label="Sommaire de l'article">
              <h2 className="font-display font-semibold text-lg text-rock-900 mb-4">
                Sommaire
              </h2>
              <ol className="space-y-2">
                {article.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex items-center py-1 text-sm text-rock-600 hover:text-fjord-600 transition-colors"
                    >
                      <span className="w-6 h-6 flex items-center justify-center bg-fjord-100 text-fjord-700 text-xs font-semibold rounded-full mr-3">
                        {index + 1}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Sections */}
      {article.sections.map((section, index) => (
        <div key={section.id}>
          <section
            id={section.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-rock-50'}`}
          >
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 flex items-center justify-center bg-fjord-600 text-white text-sm font-semibold rounded-full">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-rock-900">
                    {section.title}
                  </h2>
                </div>

                <div className={section.image ? 'lg:flex lg:gap-8' : ''}>
                  <div
                    className={`prose prose-rock max-w-none prose-headings:font-display prose-a:text-fjord-600 hover:prose-a:text-fjord-700 ${section.image ? 'lg:flex-1' : ''}`}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                  {section.image && (
                    <div className="mt-8 lg:mt-0 lg:w-80 flex-shrink-0">
                      <div className="rounded-xl overflow-hidden shadow-lg sticky top-24">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          width={320}
                          height={240}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* CTA après section 2 (index 1) et section 5 (index 4) */}
          {(index === 1 || index === 4) && (
            <section className="py-8 bg-rock-50">
              <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                  <AffiliateCTA
                    variant="minimal"
                    title={index === 1
                      ? 'Un van pour votre voyage ?'
                      : 'Réservez votre van maintenant'}
                    description={index === 1
                      ? 'Comparez les offres de location en Norvège et trouvez le meilleur tarif.'
                      : 'Les disponibilités partent vite en haute saison. Comparez et réservez.'}
                    buttonText="Voir les offres"
                  />
                </div>
              </div>
            </section>
          )}
        </div>
      ))}

      {/* Barre de liens villes */}
      <section className="section-padding bg-rock-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-semibold mb-4">
            Points de départ en Norvège
          </h2>
          <p className="text-rock-300 mb-8">
            Choisissez votre ville de départ pour louer un van
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {publishedCities.map((city) => (
              <Link
                key={city.slug}
                href={city.href}
                className="btn-outline border-white text-white hover:bg-white hover:text-rock-900"
              >
                Location van {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles reliés */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-10">
              Lire aussi
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group card overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={related.heroImage.src}
                      alt={related.heroImage.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-fjord-600 text-white text-xs font-medium rounded-full">
                        {monthNames[related.month]}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-display font-semibold text-rock-900 group-hover:text-fjord-600 transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
