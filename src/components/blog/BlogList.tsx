import React from 'react';
import { BlogPost } from '@/data/blog';
import BlogCard from './BlogCard';
import AppleGrid from '../apple/AppleGrid';

interface BlogListProps {
  posts: BlogPost[];
  showFeatured?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ posts, showFeatured = true }) => {
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const regularPosts = posts.filter(p => !featuredPosts.includes(p));

  return (
    <div>
      {showFeatured && featuredPosts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <AppleGrid columns={3} gap="lg">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} featured={true} />
            ))}
          </AppleGrid>
        </div>
      )}

      <div>
        <h2 className="text-3xl font-bold mb-8">
          {showFeatured ? 'All Articles' : 'Articles'}
        </h2>
        <AppleGrid columns={3} gap="lg">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </AppleGrid>
      </div>
    </div>
  );
};

export default BlogList;
export type { BlogListProps };
