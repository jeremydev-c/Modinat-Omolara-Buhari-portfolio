import { credentials, person } from '../lib/content';

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.fullName,
    alternateName: person.name,
    jobTitle: 'Data Analyst',
    description:
      'Data analyst specialising in business intelligence and reporting with Power BI, Tableau, Excel, SQL and Python.',
    url: person.url,
    email: `mailto:${person.email}`,
    telephone: person.phoneHref.replace('tel:', ''),
    address: { '@type': 'PostalAddress', addressLocality: 'Vilnius', addressCountry: 'LT' },
    sameAs: [person.linkedin, person.github],
    knowsAbout: ['Data Analysis', 'Business Intelligence', 'Power BI', 'Tableau', 'SQL', 'Python', 'Excel', 'ETL'],
    hasCredential: credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.title,
      recognizedBy: { '@type': 'Organization', name: c.issuer.split(' · ')[0] },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
