// Every fact on the site lives here, checked against Omolara's own
// certificates, reports and dashboards.

export const person = {
  name: 'Omolara Buhari',
  fullName: 'Modinat Omolara Buhari',
  role: 'Data Analyst',
  focus: 'Business intelligence & reporting',
  location: 'Vilnius, Lithuania',
  current: 'Data Analyst at Amdari Inc. (UK, remote) since April 2025',
  email: 'omolarabuhari1@gmail.com',
  phone: '+370 602 91709',
  phoneHref: 'tel:+37060291709',
  linkedin: 'https://linkedin.com/in/omolarabuhari',
  github: 'https://github.com/Omolara-Buhari',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
};

export type Tool = 'Power BI' | 'Tableau' | 'Excel' | 'SQL' | 'Python';
export const TOOLS: Tool[] = ['Power BI', 'Tableau', 'Excel', 'SQL', 'Python'];

export type Project = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  programme?: string;
  tools: Tool[];
  format: string;
  summary: string;
  kpis?: { value: string; label: string }[];
  problem: string;
  approach: string[];
  findings: string[];
  cover?: string;
  gallery: string[];
  files: { label: string; href: string; kind: 'pptx' | 'pdf' | 'ipynb' }[];
};

const E = '/dashboards/enhanced/';

export const projects: Project[] = [
  {
    slug: 'novomed-sales-performance',
    title: 'NovaMed sales performance',
    client: 'NovaMed Solutions',
    sector: 'Pharmaceutical distribution',
    programme: '10Alytics · Data Analytics EU',
    tools: ['Power BI'],
    format: 'Power BI dashboard + slide deck',
    summary:
      'Top and bottom performers across drugs and customers for a pharmaceutical distributor, with margin, COGS and month-on-month revenue in one interactive view.',
    kpis: [
      { value: '$56M', label: 'Total revenue' },
      { value: '$46M', label: 'Total profit' },
      { value: '82%', label: 'Profit margin' },
      { value: '213K', label: 'Units sold' },
    ],
    problem:
      'NovaMed needed to see which drugs and customers drove its results, understand its margins and act on weak performers.',
    approach: [
      'Ranked drugs by revenue, quantity and profit to build top-five and bottom-five views.',
      'Calculated profit margin, revenue and COGS measures.',
      'Analysed customer performance and month-on-month revenue trends.',
      'Built an interactive Power BI report with month, drug and customer filters.',
    ],
    findings: [
      'An 82% profit margin across $56M of revenue.',
      'Clear top and bottom performers by drug and by customer, ready for sales and inventory decisions.',
    ],
    cover: `${E}NovoMed_Sales_Performance_Analysis_slide8_img2_enhanced.png`,
    gallery: [
      `${E}NovoMed_Sales_Performance_Analysis_slide8_img2_enhanced.png`,
      `${E}NovoMed_Sales_Performance_Analysis_slide9_img1_enhanced.png`,
    ],
    files: [
      { label: 'Slide deck', href: '/projects/NovoMed Sales Performance Analysis.pptx', kind: 'pptx' },
      { label: 'Report', href: '/CERTIFICATES/Novo Med sales performance Analsysis ppt.pdf', kind: 'pdf' },
    ],
  },
  {
    slug: 'choco-de-luxe-sales',
    title: 'Choco De Luxe sales analysis',
    client: 'Choco De Luxe',
    sector: 'Retail · European artisanal chocolate',
    programme: 'Capstone project',
    tools: ['Tableau'],
    format: 'Tableau dashboard + 16-slide deck',
    summary:
      'Sales, profit and delivery performance for a European artisanal chocolate brand, broken down by country, channel, product and salesperson in 12 visualisations.',
    kpis: [
      { value: '€5.32M', label: 'Revenue' },
      { value: '€2.45M', label: 'Profit' },
      { value: '2,094', label: 'Transactions' },
      { value: '95.6%', label: 'Delivery success rate' },
    ],
    problem:
      'The brand wanted to know where its sales and profit really came from, and how reliably it delivered, across countries and channels.',
    approach: [
      'Mapped sales performance against delivery success by country.',
      'Compared channel effectiveness: website, warehouse and social media.',
      'Ranked product-level profitability and salesperson productivity.',
      'Contrasted organic and non-organic demand by channel.',
    ],
    findings: [
      '€2.45M profit on €5.32M revenue across 2,094 transactions.',
      'A 95.6% delivery success rate, with clear differences between channels.',
    ],
    cover: '/dashboards/choco-deluxe/choco_deluxe_main_dashboard.png',
    gallery: [
      '/dashboards/choco-deluxe/choco_deluxe_main_dashboard.png',
      `${E}Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide3_img1_enhanced.png`,
      `${E}Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide8_img3_enhanced.png`,
      `${E}Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide9_img3_enhanced.png`,
      `${E}Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide10_img3_enhanced.png`,
      `${E}Analysis_of_Choco_De_Luxe_Sales_Data_ppt_slide15_img1_enhanced.png`,
    ],
    files: [{ label: 'Slide deck', href: '/projects/Analysis of Choco De Luxe Sales Data ppt.pptx', kind: 'pptx' }],
  },
  {
    slug: 'fusionpoint-consumer-electronics',
    title: 'Consumer electronics sales trends',
    client: 'FusionPoint Industries',
    sector: 'Retail · Consumer electronics',
    tools: ['Tableau'],
    format: 'Tableau dashboard + 19-slide deck',
    summary:
      'Sales trends and profitability for a consumer electronics business: category and regional performance, customer purchase behaviour, seasonal demand and payment preferences.',
    kpis: [
      { value: '$6.18M', label: 'Revenue' },
      { value: '$1.61M', label: 'Profit' },
      { value: '26%', label: 'Profit margin' },
      { value: '12,745', label: 'Units sold' },
    ],
    problem:
      'FusionPoint needed to understand which categories, regions and customers drove profit, and how demand moved through the year.',
    approach: [
      'Compared sales performance by product category and by US state.',
      'Profiled top customers and their purchase behaviour.',
      'Plotted profitability by product and demand patterns over 12 months.',
      'Summarised payment preferences, from debit card to cash on delivery.',
    ],
    findings: [
      '$1.61M profit on $6.18M revenue, a 26% margin across 547 orders.',
      'Seasonal peaks and the product lines that carry profit, in 11 visualisations.',
    ],
    cover: '/dashboards/consumer-electronic/consumer_electronic_main_dashboard.png',
    gallery: [
      '/dashboards/consumer-electronic/consumer_electronic_main_dashboard.png',
      `${E}Consumer_Electronic_Sales_Trend_Analysis_slide3_img2_enhanced.png`,
      `${E}Consumer_Electronic_Sales_Trend_Analysis_slide9_img1_enhanced.png`,
      `${E}Consumer_Electronic_Sales_Trend_Analysis_slide12_img1_enhanced.png`,
      `${E}Consumer_Electronic_Sales_Trend_Analysis_slide13_img3_enhanced.png`,
      `${E}Consumer_Electronic_Sales_Trend_Analysis_slide15_img1_enhanced.png`,
    ],
    files: [{ label: 'Slide deck', href: '/projects/Consumer Electronic Sales Trend Analysis.pptx', kind: 'pptx' }],
  },
  {
    slug: 'employee-success-sql',
    title: 'Employee success analysis',
    client: 'HR analytics case study',
    sector: 'Human resources',
    tools: ['SQL', 'Power BI'],
    format: 'SQL queries + 26-slide deck',
    summary:
      'Employee performance and success metrics pulled with SQL and presented in 22 visualisations, to support data-driven HR and workforce decisions.',
    problem:
      'The organisation needed a clear view of employee performance and the factors behind success, to manage its workforce and spot high performers.',
    approach: [
      'Wrote and optimised SQL queries to extract employee data.',
      'Modelled performance metrics and success indicators.',
      'Built 22 visualisations with filtering and drill-down.',
      'Wrote up the analysis in a 26-slide report.',
    ],
    findings: ['A workforce view HR could filter by team and metric, with the drivers of success called out.'],
    cover: `${E}Employee_Success_Analysis_using_SQL_slide3_img6_enhanced.png`,
    gallery: [
      `${E}Employee_Success_Analysis_using_SQL_slide3_img6_enhanced.png`,
      `${E}Employee_Success_Analysis_using_SQL_slide6_img9_enhanced.png`,
      `${E}Employee_Success_Analysis_using_SQL_slide6_img11_enhanced.png`,
      `${E}Employee_Success_Analysis_using_SQL_slide8_img6_enhanced.png`,
      `${E}Employee_Success_Analysis_using_SQL_slide9_img1_enhanced.png`,
      `${E}Employee_Success_Analysis_using_SQL_slide13_img6_enhanced.png`,
    ],
    files: [{ label: 'Slide deck', href: '/projects/Employee Success Analysis using SQL.pptx', kind: 'pptx' }],
  },
  {
    slug: 'techhub-retail-bi',
    title: 'TechHub Retail BI dashboard',
    client: 'TechHub Retail',
    sector: 'Retail · UK online electronics',
    programme: 'Uptrail internship',
    tools: ['Tableau'],
    format: 'Tableau dashboard + written report',
    summary:
      'An executive dashboard for a UK online electronics retailer, joining 18 months of sales, customer and product data to guide 2025 planning.',
    problem:
      'Management wanted to know which categories, regions and suppliers were profitable, who their customers were, and where to grow in 2025.',
    approach: [
      'Joined three datasets (sales, customers, products) in one Tableau relationship model.',
      'Cleaned types, nulls and headers, and built a Year → Quarter → Month hierarchy.',
      'Created calculated fields for profit, margin, customer tenure and lifetime value.',
      'Designed views for segmentation, geography, product portfolio and acquisition channels.',
    ],
    findings: ['Profitable categories, regions and suppliers identified, with seasonal demand patterns for planning.'],
    gallery: [],
    files: [{ label: 'Report', href: '/projects/Tech Hub Retail Sales Analysis.pdf', kind: 'pdf' }],
  },
  {
    slug: 'streamworks-churn',
    title: 'Churn prediction',
    client: 'StreamWorks Media',
    sector: 'Subscription streaming',
    programme: 'Uptrail internship',
    tools: ['Python'],
    format: 'Jupyter notebook + report',
    summary:
      'Which subscribers are likely to cancel, and why: 5,000+ customer records, engineered tenure and engagement features, and two classification models.',
    kpis: [
      { value: '5,000+', label: 'Customer records' },
      { value: '98.9%', label: 'Model accuracy' },
      { value: '0.0', label: 'F1 score on churners' },
    ],
    problem:
      'A UK streaming service was losing subscribers soon after sign-up and wanted to know who would churn so it could act early.',
    approach: [
      'Cleaned dates, types and missing values; one-hot encoded categorical fields.',
      'Engineered tenure, loyalty, referral, promotion and engagement features.',
      'Trained logistic regression and random forest models and read their ROC curves.',
    ],
    findings: [
      'High accuracy hid a real problem: the data was imbalanced, so the model labelled almost everyone as staying (F1 of 0 on churners).',
      'Recommended resampling and richer features before using the model for retention decisions.',
      'Tenure was the strongest signal for watch time and loyalty.',
    ],
    gallery: [],
    files: [
      { label: 'Notebook', href: '/projects/week 3 streamworks_analysis .ipynb.ipynb', kind: 'ipynb' },
      { label: 'Report', href: '/projects/week 3-Churn Prediction for Stream Works Media Analysis.pdf', kind: 'pdf' },
    ],
  },
  {
    slug: 'green-cart-customer-behaviour',
    title: 'Sales & customer behaviour',
    client: 'Green Cart Ltd',
    sector: 'E-commerce · Groceries',
    programme: 'Uptrail internship',
    tools: ['Python'],
    format: 'Jupyter notebook (78 cells)',
    summary:
      'Merged sales, product and customer files in pandas to find revenue trends, top categories, loyalty patterns and delivery performance.',
    problem:
      'Green Cart needed to understand its sales and customers to plan inventory, keep customers and grow revenue, but its data was split across three messy files.',
    approach: [
      'Loaded and merged three CSV files: sales, products and customers.',
      'Standardised text, dates and numbers.',
      'Engineered revenue, price bands, loyalty tiers and order weeks.',
      'Visualised with line plots, bar charts, boxplots, heatmaps and count plots.',
    ],
    findings: [
      'Weekly revenue trends by region and the top categories by revenue.',
      'Loyalty patterns and delivery performance, with recommendations.',
    ],
    gallery: [],
    files: [
      { label: 'Notebook', href: '/projects/week 2.ipynb', kind: 'ipynb' },
      {
        label: 'Project brief',
        href: '/projects/Week 2 - Project Brief - Sales and Customer Behaviour Insights - Green Cart Ltd.pdf',
        kind: 'pdf',
      },
    ],
  },
  {
    slug: 'cafe-harmony-sales',
    title: 'Café Harmony sales dashboard',
    client: 'Café Harmony',
    sector: 'Hospitality',
    tools: ['Excel'],
    format: 'Excel dashboard + report',
    summary:
      'An Excel dashboard for a café: monthly sales, revenue by product, stock performance, staff performance, customer ratings and demographics.',
    kpis: [
      { value: '$12,590', label: 'Sales revenue' },
      { value: '1,000', label: 'Customers' },
      { value: '10', label: 'Stock items' },
    ],
    problem: 'The café needed one place to see sales, stock and staff performance instead of scattered spreadsheets.',
    approach: [
      'Built pivot-driven views with slicers for product, location and month.',
      'Tracked monthly sales, revenue by product and stock performance.',
      'Added staff performance, customer ratings and gender demographics.',
    ],
    findings: ['Best and worst sellers, slow stock and top staff visible at a glance.'],
    cover: '/dashboards/cafe-harmony/Screenshot_3-12-2025_15157_.jpeg',
    gallery: [
      '/dashboards/cafe-harmony/Screenshot_3-12-2025_15157_.jpeg',
      '/dashboards/cafe-harmony/enhanced/cafe_harmony_page5_img1_enhanced.png',
      '/dashboards/cafe-harmony/enhanced/cafe_harmony_page5_img2_enhanced.png',
      '/dashboards/cafe-harmony/enhanced/cafe_harmony_page6_img7_enhanced.png',
    ],
    files: [{ label: 'Report', href: '/projects/Sales Analysis of Cafe Harmony.pdf', kind: 'pdf' }],
  },
  {
    slug: 'streamline-logistics',
    title: 'Delivery performance overview',
    client: 'Streamline Logistic Solutions',
    sector: 'Logistics',
    tools: ['Excel'],
    format: 'Excel dashboard + report',
    summary:
      'Delivery times, delays, routes, zones and vehicles for a logistics company, in one Excel dashboard with zone, route and date slicers.',
    kpis: [
      { value: '1,500', label: 'Orders analysed' },
      { value: '152 min', label: 'Average delivery time' },
      { value: '15', label: 'Average delays' },
    ],
    problem: 'The company needed to see where deliveries slowed down: by route, zone, vehicle or day.',
    approach: [
      'Trended average delivery time across the period.',
      'Compared delivery time by route, zone performance and vehicle type.',
      'Split deliveries into fast, normal and slow bands.',
    ],
    findings: ['The slowest routes, zones and vehicles, ranked for operations to act on.'],
    cover: '/dashboards/streamline-logistics/streamline_logistics_page16_dashboard.png',
    gallery: ['/dashboards/streamline-logistics/streamline_logistics_page16_dashboard.png'],
    files: [{ label: 'Report', href: '/CERTIFICATES/Streamline Logistic Solution Analysis using excel.pdf', kind: 'pdf' }],
  },
];

export const credentials = [
  {
    title: 'Master Data Analyst (MDA)',
    issuer: '10Alytics',
    date: '27 Sep 2025',
    detail: 'Problem solving, Excel, SQL, data storytelling, Power BI, Tableau, Microsoft Fabric and ChatGPT for analytics.',
    href: '/CERTIFICATES/Data Analyst Certificate.pdf',
  },
  {
    title: 'Certificate of Excellence',
    issuer: 'Uptrail · Data Analyst Internship',
    date: '6 Nov 2025',
    detail: 'For outstanding performance, analytical skill and tool proficiency in the internship programme.',
    href: '/CERTIFICATES/Modinat Omolara Buhari - CE (1).pdf',
  },
  {
    title: 'Certificate of Completion',
    issuer: 'Uptrail · Data Analyst Internship',
    date: '6 Nov 2025',
    detail: 'Completed the data analyst internship programme.',
    href: '/CERTIFICATES/Modinat Omolara Buhari .cc.pdf',
  },
  {
    title: '10Alytics Global Hackathon 2025',
    issuer: '10Alytics · Participant',
    date: '30 Nov 2025',
    detail: 'Submitted a project on “Unravelling Africa’s Sovereign Debt Crisis: Pathways to Sustainable Recovery”.',
    href: '/CERTIFICATES/Modinat_Omolara_Buhari_Hackathon_Certificate.pdf',
  },
];

export const skills = {
  Advanced: ['Excel', 'Power BI', 'Tableau', 'SQL', 'Python', 'Microsoft Fabric', 'SQL Server', 'MySQL', 'pandas', 'NumPy', 'Jupyter'],
  Intermediate: ['PostgreSQL', 'Microsoft Azure', 'Looker Studio', 'SSRS', 'R', 'PowerPoint', 'Access'],
  Practice: ['Data cleaning', 'ETL', 'Data modelling', 'Statistics', 'Dashboard design', 'Data storytelling', 'Stakeholder reporting'],
};

export const recommendationsDate = 'September 2025';

export const recommendations = [
  {
    name: 'Joshua Akinola',
    role: 'Data Scientist · Data Analyst · Coach',
    relation: 'Trained Omolara at 10Alytics',
    quote:
      'I had the pleasure of training Omolara in Data Analytics during her time at 10alytics, and I must say she was an outstanding student. From the very beginning, she demonstrated a strong eagerness to learn, quickly grasping complex concepts in Excel, SQL, Power BI, Tableau, and data storytelling. What stood out most about Omolara was not just her technical ability, but her problem-solving mindset. She consistently applied analytical thinking to real-world case studies, delivering insights that were both accurate and impactful. Her dedication, curiosity, and collaborative spirit made her a joy to work with. I am very proud of the progress she made during the program and have no doubt that she will excel in any role she takes on. Omolara would be a tremendous asset to any team looking for a data-driven professional who is not only skilled but also highly motivated and committed to growth. I wholeheartedly recommend her and look forward to seeing all the amazing things she will accomplish in her career.',
    pull: 'She consistently applied analytical thinking to real-world case studies, delivering insights that were both accurate and impactful.',
  },
  {
    name: 'Thecla Oshodi',
    role: 'Data Analyst · SQL, Power BI, Tableau, ETL',
    relation: 'Capstone teammate',
    quote:
      'I had the pleasure of working with Omolara on our Data Analytics Capstone Project, and I was truly impressed by her skills and dedication. She demonstrated strong expertise in tools like Excel, Tableau, Power BI, SQL, and Microsoft Fabric, and consistently delivered clear insights from complex datasets. Her ability to collaborate, communicate effectively, and problem-solve made our teamwork smooth and productive. She brings both technical knowledge and a positive attitude, which made working together an excellent experience. I highly recommend her for any data analytics role or project.',
    pull: '…consistently delivered clear insights from complex datasets.',
  },
  {
    name: 'Aletor Agboigbe',
    role: 'Educator & Data Analyst',
    relation: 'Worked together on cross-team projects',
    quote:
      'I highly recommend Omolara BUHARI, a dedicated and passionate data analytics professional. I had the opportunity to work with her on cross-team projects, where she consistently stood out for her expertise in Excel, SQL, Tableau, Power BI, and Microsoft Fabric. Omolara’s collaborative approach, attention to detail, and ability to turn data into actionable insights make her an invaluable asset to any team.',
    pull: 'Omolara’s collaborative approach, attention to detail, and ability to turn data into actionable insights make her an invaluable asset to any team.',
  },
  {
    name: 'Evangelista Emelogu',
    role: 'Data & Business Analyst · Banking',
    relation: 'Worked together on data projects',
    quote:
      'I had the privilege of working with Omolara Buhari on several data-focused projects, and her expertise in Excel, Power BI, SQL, and Tableau is outstanding. She consistently delivers clean, accurate, and well-structured datasets, turning complex data into clear, actionable insights. Omolara’s attention to detail and professionalism make her a reliable and valuable asset in any data-driven environment.',
    pull: 'She consistently delivers clean, accurate, and well-structured datasets.',
  },
  {
    name: 'Joy Chituru Woke',
    role: 'Data Analyst · MSc Management & International Business',
    relation: 'Worked together on data projects',
    quote:
      'I had the opportunity to work with Omolara Bwari on several data-focused projects, and her command of Excel, powerBI, SQL, Tableau and microsoft fabrics is remarkable. She has a keen eye for detail, ensuring datasets are always clean, accurate, and well-structured. Their reliability and precision make them a strong asset in any data-driven environment.',
    pull: 'She has a keen eye for detail, ensuring datasets are always clean, accurate, and well-structured.',
  },
  {
    name: 'Tatenda Kamwendo',
    role: 'Solutions Associate at Beeline',
    relation: 'Worked together',
    quote:
      'I’ve been impressed by Omolara Buhari’s analytical mindset and problem-solving skills. They approach data with structure and creativity, uncovering trends that others might miss. Her ability to translate findings into actionable insights makes her highly effective in any analytical role. It was a pleasure to work with her!',
    pull: 'They approach data with structure and creativity, uncovering trends that others might miss.',
  },
];

// Real counts, derived from the projects above: what she has used and how often.
export function toolCounts() {
  return TOOLS.map((tool) => ({ tool, count: projects.filter((p) => p.tools.includes(tool)).length }));
}
