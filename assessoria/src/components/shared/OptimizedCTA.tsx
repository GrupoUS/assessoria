import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

interface OptimizedCTAProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  size?: 'small' | 'medium' | 'large';
  icon?: boolean;
  fullWidth?: boolean;
  target?: '_blank' | '_self';
  ariaLabel?: string;
  onClick?: () => void;
}

const OptimizedCTA: React.FC<OptimizedCTAProps> = ({
  text,
  href,
  variant = 'primary',
  size = 'medium',
  icon = true,
  fullWidth = false,
  target = '_self',
  ariaLabel,
  onClick
}) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gold hover:bg-gold-dark text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-navy-medium hover:bg-navy-dark text-white shadow-md hover:shadow-lg',
    whatsapp: 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
  };

  const iconComponent = variant === 'whatsapp' ? (
    <MessageCircle className="w-5 h-5" />
  ) : variant === 'secondary' ? (
    <Phone className="w-5 h-5" />
  ) : (
    <ArrowRight className="w-5 h-5" />
  );

  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    font-medium rounded-md transition-all duration-300 
    transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
  `;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    
    // Track CTA clicks for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'CTA',
        event_label: text,
        value: variant
      });
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={baseClasses}
      aria-label={ariaLabel || text}
      onClick={handleClick}
    >
      <span>{text}</span>
      {icon && iconComponent}
    </a>
  );
};

export default OptimizedCTA;
