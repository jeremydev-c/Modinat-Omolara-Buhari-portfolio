export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Modinat Omolara Buhari",
    "jobTitle": "Data Analyst | Business Intelligence | Reporting Analyst",
    "description": "Data Analyst with expertise in ETL processes, data warehousing, and cloud-based analytics solutions. Specializing in SQL, Excel, Power BI, Python, Tableau, and data visualization tools.",
    "url": "https://modinat-portfolio.vercel.app",
    "email": "omolarabuhari1@gmail.com",
    "telephone": "+37060291709",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vilnius",
      "addressCountry": "LT"
    },
    "sameAs": [
      "https://linkedin.com/in/omolarabuhari"
    ],
    "knowsAbout": [
      "Data Analysis",
      "Business Intelligence",
      "Power BI",
      "SQL",
      "Python",
      "Tableau",
      "ETL Processes",
      "Data Warehousing"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certificate",
        "name": "Master Data Analyst (MDA)"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

