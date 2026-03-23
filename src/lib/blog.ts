export type ArticleImage = {
  src: string
  alt: string
  credit?: string
}

export type ArticleSection = {
  id: string
  title: string
  content: string
  image?: {
    src: string
    alt: string
  }
}

export type Article = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  publishedAt: string
  isPublished: boolean
  month: number
  country: string
  heroImage: ArticleImage
  tags: string[]
  sections: ArticleSection[]
}

// Imports statiques des fichiers JSON (compatible Vercel serverless)
import janvier from '@/content/blog/norvege-en-van-en-janvier.json'
import fevrier from '@/content/blog/norvege-en-van-en-fevrier.json'
import mars from '@/content/blog/norvege-en-van-en-mars.json'
import avril from '@/content/blog/norvege-en-van-en-avril.json'
import mai from '@/content/blog/norvege-en-van-en-mai.json'
import juin from '@/content/blog/norvege-en-van-en-juin.json'
import juillet from '@/content/blog/norvege-en-van-en-juillet.json'
import aout from '@/content/blog/norvege-en-van-en-aout.json'
import septembre from '@/content/blog/norvege-en-van-en-septembre.json'
import octobre from '@/content/blog/norvege-en-van-en-octobre.json'
import novembre from '@/content/blog/norvege-en-van-en-novembre.json'
import decembre from '@/content/blog/norvege-en-van-en-decembre.json'

const allArticles: Article[] = [
  janvier,
  fevrier,
  mars,
  avril,
  mai,
  juin,
  juillet,
  aout,
  septembre,
  octobre,
  novembre,
  decembre,
] as Article[]

export function getAllArticles(): Article[] {
  return allArticles.sort((a, b) => a.month - b.month)
}

export function getPublishedArticles(): Article[] {
  const now = new Date()
  return getAllArticles().filter(
    (a) => a.isPublished && new Date(a.publishedAt) <= now
  )
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug)
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  const published = getPublishedArticles()
  return published.filter((a) => a.slug !== currentSlug).slice(0, limit)
}
