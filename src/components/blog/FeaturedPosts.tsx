
import React from 'react';
import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-navy-dark border-b pb-2">Artigos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={post.id || index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
