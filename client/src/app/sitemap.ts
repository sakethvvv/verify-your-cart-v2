import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { guides } from '@/lib/guides-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://verifyyourcart.com'

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const guideUrls = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticUrls = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/guides',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/cookies',
    '/editorial-policy',
  ].map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: url === '' ? 1 : 0.5,
  }))

  return [...staticUrls, ...blogUrls, ...guideUrls]
}
