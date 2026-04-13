import React from 'react';
import { BlogPost } from '@/data/blog';
import Image from 'next/image';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false, onClick }) => {
  return (
    <article
      onClick={onClick}
      className={`
        cursor-pointer overflow-hidden rounded-apple-lg
        ${featured ? 'shadow-lg' : 'shadow'}
        hover:shadow-apple-xl hover:scale-105
        transition-all duration-apple
        bg-white dark:bg-neutral-100
      `}
    >
      {post.featuredImage && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-apple hover:scale-105"
          />
          {featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="capitalize">{post.category}</span>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-neutral-600 line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-apple-sm font-medium"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-neutral-600 text-xs rounded-apple-sm">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <span className="text-primary font-medium text-sm hover:text-primary-600 transition-colors">
            Read Article →
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
export type { BlogCardProps };
