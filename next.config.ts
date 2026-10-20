import type { NextConfig } from "next";

const fileHeaders = (type: string) => [
  { key: 'Content-Type', value: type },
  { key: 'Content-Disposition', value: 'inline' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
];

const nextConfig: NextConfig = {
  // This folder has its own lockfile; don't let Next pick a parent folder as the root.
  turbopack: { root: __dirname },
  poweredByHeader: false,
  // Dashboards are large PNGs; let Next resize them for each screen.
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      { source: '/case-studies', destination: '/projects', permanent: true },
      { source: '/skills', destination: '/certificates#skills', permanent: true },
      { source: '/view-project/employee-success-analysis-using-sql', destination: '/projects/employee-success-sql', permanent: true },
      { source: '/view-project/novomed-sales-performance-analysis', destination: '/projects/novomed-sales-performance', permanent: true },
      { source: '/view-project/analysis-of-choco-de-luxe-sales-data', destination: '/projects/choco-de-luxe-sales', permanent: true },
      { source: '/view-project/consumer-electronic-sales-trend-analysis', destination: '/projects/fusionpoint-consumer-electronics', permanent: true },
      { source: '/view-project/:slug', destination: '/projects', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      { source: '/CERTIFICATES/:path*.pdf', headers: fileHeaders('application/pdf') },
      { source: '/projects/:path*.pdf', headers: fileHeaders('application/pdf') },
      {
        source: '/projects/:path*.pptx',
        headers: fileHeaders('application/vnd.openxmlformats-officedocument.presentationml.presentation'),
      },
    ];
  },
};

export default nextConfig;
