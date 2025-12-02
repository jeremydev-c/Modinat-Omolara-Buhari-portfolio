import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import NavigationPopup from "./components/NavigationPopup";
import StructuredData from "./components/StructuredData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Modinat Omolara Buhari - Data Analyst | Business Intelligence | Reporting Analyst",
    template: "%s | Modinat Omolara Buhari",
  },
    description: "Data Analyst | Business Intelligence | Reporting Analyst specializing in Excel, Power BI, SQL, Tableau, Microsoft Fabrics, and Python. Expertise in ETL processes, data warehousing, and cloud-based analytics solutions to optimize business intelligence and deliver actionable insights.",
  keywords: [
    "data analyst",
    "business intelligence",
    "Power BI",
    "Tableau",
    "SQL",
    "Python",
    "data visualization",
    "ETL",
    "data warehousing",
    "analytics",
    "portfolio",
    "Modinat Omolara Buhari",
  ],
  authors: [{ name: "Modinat Omolara Buhari" }],
  creator: "Modinat Omolara Buhari",
  metadataBase: new URL("https://modinat-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modinat-portfolio.vercel.app",
    siteName: "Modinat Omolara Buhari Portfolio",
    title: "Modinat Omolara Buhari - Data Analyst | BI Specialist",
    description: "Data Analyst transforming data into actionable business insights with Power BI, SQL, Python, and Tableau.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modinat Omolara Buhari - Data Analyst Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modinat Omolara Buhari - Data Analyst | BI Specialist",
    description: "Transforming data into actionable business insights. Power BI • SQL • Python • Tableau",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpg" />
        <link rel="apple-touch-icon" href="/icon.jpg" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
      </head>
      <body className="antialiased">
        <ErrorBoundary>
          <LoadingScreen />
          {children}
          <NavigationPopup />
          <Analytics />
          <SpeedInsights />
        </ErrorBoundary>
      </body>
    </html>
  );
}
