import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'Person' | 'FAQPage' | 'Article' | 'WebPage' | 'Service';
  data: Record<string, any>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    const baseContext = "https://schema.org";
    
    switch (type) {
      case 'Organization':
        return {
          "@context": baseContext,
          "@type": "Organization",
          "name": "Maurício Magalhães Consultoria Financeira",
          "url": "https://mauriciosmagalhaes.com",
          "logo": "https://mauriciosmagalhaes.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-64-99988-6688",
            "contactType": "customer service",
            "areaServed": "BR",
            "availableLanguage": "Portuguese"
          },
          "sameAs": [
            "https://www.instagram.com/mauriciomagalhaes",
            "https://www.linkedin.com/in/mauriciomagalhaes"
          ],
          ...data
        };
        
      case 'Person':
        return {
          "@context": baseContext,
          "@type": "Person",
          "name": "Maurício Magalhães",
          "jobTitle": "Assessor de Investimentos",
          "worksFor": {
            "@type": "Organization",
            "name": "Maurício Magalhães Consultoria Financeira"
          },
          "alumniOf": {
            "@type": "Organization",
            "name": "ANCORD"
          },
          "knowsAbout": ["Investimentos", "Planejamento Financeiro", "Blindagem Patrimonial"],
          ...data
        };
        
      case 'FAQPage':
        return {
          "@context": baseContext,
          "@type": "FAQPage",
          "mainEntity": data.questions?.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })) || []
        };
        
      case 'Article':
        return {
          "@context": baseContext,
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Person",
            "name": "Maurício Magalhães"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Maurício Magalhães Consultoria Financeira",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mauriciosmagalhaes.com/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          ...data
        };
        
      case 'Service':
        return {
          "@context": baseContext,
          "@type": "Service",
          "serviceType": "Consultoria Financeira",
          "provider": {
            "@type": "Organization",
            "name": "Maurício Magalhães Consultoria Financeira"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Brasil"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Consultoria Financeira",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Planejamento Financeiro Personalizado"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Otimização de Investimentos"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Proteção Patrimonial"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Redução de Impostos"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Planejamento de Aposentadoria"
                }
              }
            ]
          },
          ...data
        };
        
      default:
        return {
          "@context": baseContext,
          "@type": type,
          ...data
        };
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;
