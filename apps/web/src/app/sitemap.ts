import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rkcourierandremovals.co.uk'; // Placeholder URL

  // Core static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/services/house-removal',
    '/services/courier-service',
    '/services/waste-clearance',
    '/contact',
    '/quote',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
