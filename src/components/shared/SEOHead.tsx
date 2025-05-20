
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
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Maurício Magalhães | Consultoria Financeira e Investimentos Personalizados",
  description = "Assessoria de investimentos especializada para quem possui mais de R$300 mil. Planejamento patrimonial, blindagem e gestão de patrimônio com resultados comprovados.",
  keywords = "assessor de investimentos, consultor financeiro independente, planejamento patrimonial, gestão de patrimônio, blindagem patrimonial",
  canonicalUrl = "https://www.mauriciomagalhaes.com.br",
  ogType = "website",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  location = "Goiânia, GO"
}) => {
  // Concatenate location-specific keywords if provided
  const fullKeywords = location 
    ? `${keywords}, consultor financeiro ${location}, investimentos ${location}` 
    : keywords;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
