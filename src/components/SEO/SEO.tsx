// src/components/SEO.tsx
import { Helmet } from "react-helmet-async";
import { seoData } from "../../config";

interface SEOProps {
  page?: keyof typeof seoData;
  title?: string;              // For dynamic title
  description?: string;        // For dynamic description
  keywords?: string;           // For dynamic keywords
  canonical?: string;
}

const SITE_NAME = "PureCheckup";
const SITE_URL = "https://www.purecheckup.com";



const SEO = (props: SEOProps) => {
  const page = props.page;
  const dynamicProps = {
    title: props.title,
    description: props.description,
    keywords: props.keywords,
    canonical: props.canonical,
  };
  const meta = page?.trim() ? seoData[page] : dynamicProps;

  if (!meta) return null;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <link rel="canonical" href={meta.canonical} />

      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />

      {/* Author & Publisher */}
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />

       {/* Structured Data (Simple & Safe) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        })}
      </script>
    </Helmet>
  );
};


export default SEO;