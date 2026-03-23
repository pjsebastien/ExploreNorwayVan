export const dynamic = 'force-dynamic'

import { MetadataRoute } from 'next'
import { getPublishedArticles } from '@/lib/blog'
import { getPublishedCities } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.explorenorwayvan.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/road-trip-norvege-van/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/itineraire-norvege-10-jours-van/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/prix-location-van-norvege/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/dormir-en-van-norvege/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/camping-sauvage-norvege-van/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq-location-van-norvege/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/a-propos/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]

  // Pages villes publiées
  const cities = getPublishedCities()
  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}/`,
    lastModified: new Date(city.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Articles de blog publiés
  const articles = getPublishedArticles()
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}/`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...cityRoutes, ...articleRoutes]
}
