'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';

const projectImages: Record<string, string[]> = {
  'employee-success-analysis-using-sql': [
    '/dashboards/enhanced/Employee_Success_Analysis_using_SQL_slide3_img6_enhanced.png',
    '/dashboards/enhanced/Employee_Success_Analysis_using_SQL_slide6_img9_enhanced.png',
    '/dashboards/enhanced/Employee_Success_Analysis_using_SQL_slide6_img11_enhanced.png',
    '/dashboards/enhanced/Employee_Success_Analysis_using_SQL_slide6_img13_enhanced.png',
    '/dashboards/enhanced/Employee_Success_Analysis_using_SQL_slide8_img6_enhanced.png',
    '/dashboards/enhanced/Employee_Success_Analysis_using_SQL_slide9_img1_enhanced.png',
    '/dashboards/enhanced/Employee_Success_Analysis_using_SQL_slide13_img6_enhanced.png',
    '/dashboards/enhanced/Employee_Success_Analysis_using_SQL_slide15_img13_enhanced.png',
  ],
  'novomed-sales-performance-analysis': [
    '/dashboards/enhanced/NovoMed_Sales_Performance_Analysis_slide1_img3_enhanced.png',
    '/dashboards/enhanced/NovoMed_Sales_Performance_Analysis_slide8_img2_enhanced.png',
    '/dashboards/enhanced/NovoMed_Sales_Performance_Analysis_slide9_img1_enhanced.png',
  ],
  'analysis-of-choco-de-luxe-sales-data': [
    '/dashboards/enhanced/Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide1_img4_enhanced.png',
    '/dashboards/enhanced/Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide3_img1_enhanced.png',
    '/dashboards/enhanced/Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide8_img3_enhanced.png',
    '/dashboards/enhanced/Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide9_img3_enhanced.png',
    '/dashboards/enhanced/Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide10_img3_enhanced.png',
    '/dashboards/enhanced/Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide15_img1_enhanced.png',
  ],
  'consumer-electronic-sales-trend-analysis': [
    '/dashboards/enhanced/Consumer_Electronic_Sales_Trend_Analysis_slide3_img2_enhanced.png',
    '/dashboards/enhanced/Consumer_Electronic_Sales_Trend_Analysis_slide9_img1_enhanced.png',
    '/dashboards/enhanced/Consumer_Electronic_Sales_Trend_Analysis_slide12_img1_enhanced.png',
    '/dashboards/enhanced/Consumer_Electronic_Sales_Trend_Analysis_slide13_img3_enhanced.png',
    '/dashboards/enhanced/Consumer_Electronic_Sales_Trend_Analysis_slide14_img2_enhanced.png',
    '/dashboards/enhanced/Consumer_Electronic_Sales_Trend_Analysis_slide15_img1_enhanced.png',
  ],
};

const projectFiles: Record<string, string> = {
  'employee-success-analysis-using-sql': '/projects/Employee Success Analysis using SQL.pptx',
  'novomed-sales-performance-analysis': '/projects/NovoMed Sales Performance Analysis.pptx',
  'analysis-of-choco-de-luxe-sales-data': '/projects/Analysis of Choco De Luxe Sales Data ppt.pptx',
  'consumer-electronic-sales-trend-analysis': '/projects/Consumer Electronic Sales Trend Analysis.pptx',
};

export default function ViewProject() {
  const params = useParams();
  const slug = params?.slug as string;
  const images = projectImages[slug] || [];
  const fileUrl = projectFiles[slug] || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>

        <div className="mb-6 flex gap-4 flex-wrap">
          <a
            href={fileUrl}
            download
            className="btn-primary flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download PowerPoint
          </a>
        </div>

        {images.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gradient mb-4">Dashboard Visualizations</h2>
            <p className="text-gray-400 mb-6">Enhanced high-resolution dashboard images from the presentation</p>
          </div>
        )}

        <div className="space-y-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-4"
            >
              <img
                src={image}
                alt={`Dashboard ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="card text-center py-12">
            <p className="text-gray-400">Dashboard images will be available here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

