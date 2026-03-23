export type City = {
  name: string
  slug: string
  href: string
  publishedAt: string
}

const allCities: City[] = [
  { name: 'Oslo', slug: 'location-van-oslo', href: '/location-van-oslo', publishedAt: '2025-01-01T00:00:00Z' },
  { name: 'Bergen', slug: 'location-van-bergen', href: '/location-van-bergen', publishedAt: '2025-01-01T00:00:00Z' },
  { name: 'Tromsø', slug: 'location-van-tromso', href: '/location-van-tromso', publishedAt: '2026-03-23T00:00:00Z' },
  { name: 'Stavanger', slug: 'location-van-stavanger', href: '/location-van-stavanger', publishedAt: '2026-04-04T00:00:00Z' },
  { name: 'Trondheim', slug: 'location-van-trondheim', href: '/location-van-trondheim', publishedAt: '2026-04-10T00:00:00Z' },
  { name: 'Lofoten', slug: 'location-van-lofoten', href: '/location-van-lofoten', publishedAt: '2026-04-16T00:00:00Z' },
  { name: 'Ålesund', slug: 'location-van-alesund', href: '/location-van-alesund', publishedAt: '2026-04-22T00:00:00Z' },
]

export function getAllCities(): City[] {
  return allCities
}

export function getPublishedCities(): City[] {
  const now = new Date()
  return allCities.filter((c) => new Date(c.publishedAt) <= now)
}

export function getCityBySlug(slug: string): City | undefined {
  return allCities.find((c) => c.slug === slug)
}

export function isCityPublished(slug: string): boolean {
  const city = getCityBySlug(slug)
  if (!city) return false
  return new Date(city.publishedAt) <= new Date()
}
