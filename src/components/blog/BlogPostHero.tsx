
import React from 'react';

interface BlogPostHeroProps {
  imageUrl: string;
  category: string;
  title: string;
  date: string;
}

const BlogPostHero = ({ imageUrl, category, title, date }: BlogPostHeroProps) => {
  return (
    <div className="relative">
      <div className="h-64 md:h-96 w-full overflow-hidden">
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f"} 
          alt={title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="relative -mt-32 z-10 text-white">
          <span className="inline-block px-4 py-1 bg-gold/90 text-white rounded-full text-sm font-medium mb-4">
            {category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-shadow-lg">
            {title}
          </h1>
          <div className="text-sm md:text-base text-gray-200">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHero;
