import React from 'react';
import { useRouter } from 'next/router';
import { BlogPost } from '@/data/blog';
import BlogCard from './BlogCard';
import AppleGrid from '../apple/AppleGrid';

interface BlogListProps {
  posts: BlogPost[];
  showFeatured?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ posts, showFeatured = true }) => {
  const router = useRouter();
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const regularPosts = posts.filter(p => !featuredPosts.includes(p));

  const handlePostClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div>
      {showFeatured && featuredPosts.length > 0 && (
        <div className="mb-16">
          <AppleGrid columns={3} gap="lg">
            {featuredPosts.map((post) => (
              <div key={post.id} onClick={() => handlePostClick(post.slug)} className="cursor-pointer transition-transform duration-apple hover:scale-105">
                <BlogCard post={post} featured={true} />
              </div>
            ))}
          </AppleGrid>
        </div>
      )}

      <AppleGrid columns={3} gap="lg">
        {posts.map((post) => (
          <div key={post.id} onClick={() => handlePostClick(post.slug)} className="cursor-pointer transition-transform duration-apple hover:scale-105">
            <BlogCard post={post} />
          </div>
        ))}
      </AppleGrid>
    </div>
  );
};

export default BlogList;
export type { BlogListProps };
