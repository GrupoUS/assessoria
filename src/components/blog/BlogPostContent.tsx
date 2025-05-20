
import React from 'react';
import { BlogPost } from '@/types/blog';

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <>
      {/* Featured Image */}
      {post.imageUrl && (
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}

      {/* Article Content */}
      <article className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </>
  );
};

export default BlogPostContent;
