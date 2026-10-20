import { MetadataRoute } from 'next';
import { person, projects } from './lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ['', 1],
    ['/projects', 0.9],
    ...projects.map((p): [string, number] => [`/projects/${p.slug}`, 0.8]),
    ['/testimonials', 0.7],
    ['/certificates', 0.7],
    ['/contact', 0.7],
  ];
  return pages.map(([path, priority]) => ({
    url: `${person.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
