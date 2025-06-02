import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  loading?: 'lazy' | 'eager';
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=',
  loading = 'lazy' 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const fallbackImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f";
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!imageRef) return;

    // If browser doesn't support IntersectionObserver, load image immediately
    if (!('IntersectionObserver' in window)) {
      setImageSrc(src);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    observerRef.current.observe(imageRef);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [imageRef, src]);

  const handleError = () => {
    console.error(`LazyImage: Erro ao carregar imagem: ${src}`);
    setHasError(true);
    setImageSrc(fallbackImage);
  };

  return (
    <img
      ref={setImageRef}
      src={hasError ? fallbackImage : imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${imageSrc === placeholder ? 'opacity-0' : 'opacity-100'} ${className}`}
      loading={loading}
      onError={handleError}
      onLoad={() => {
        if (imageSrc !== src && !hasError) {
          setImageSrc(src);
        }
      }}
    />
  );
};

export default LazyImage;
