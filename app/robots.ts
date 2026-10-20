import { MetadataRoute } from 'next';
import { person } from './lib/content';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${person.url}/sitemap.xml`,
  };
}
