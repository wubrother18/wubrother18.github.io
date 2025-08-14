import type { MetadataRoute } from 'next';

const siteUrl = 'https://wubrother18.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    '',
    '/portfolio',
    '/portfolio/linggen',
    '/about',
    '/contact',
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }));
}

