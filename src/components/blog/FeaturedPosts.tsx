
import React from 'react';
import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-navy-dark dark:text-white border-b pb-2">Artigos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={post.id || index} className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <BlogCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
