
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  location?: string;
  structuredData?: Record<string, any>;
  author?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Maurício Magalhães | Consultoria Financeira e Investimentos Personalizados",
  description = "Assessoria de investimentos especializada para quem possui mais de R$300 mil. Planejamento patrimonial, blindagem e gestão de patrimônio com resultados comprovados.",
  keywords = "assessor de investimentos, consultor financeiro independente, planejamento patrimonial, gestão de patrimônio, blindagem patrimonial",
  canonicalUrl = "https://mauriciosmagalhaes.com",
  ogType = "website",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  location = "Goiânia, GO",
  structuredData,
  author = "Maurício Magalhães"
}) => {
  // Concatenate location-specific keywords if provided
  const fullKeywords = location 
    ? `${keywords}, consultor financeiro ${location}, investimentos ${location}` 
    : keywords;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Maurício Magalhães Consultoria Financeira" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      
      {/* Insert structured data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
