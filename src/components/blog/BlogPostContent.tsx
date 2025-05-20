
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
        <div className="relative h-96 overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
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
