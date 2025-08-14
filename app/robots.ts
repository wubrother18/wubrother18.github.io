import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const site = 'https://wubrother18.github.io';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}

