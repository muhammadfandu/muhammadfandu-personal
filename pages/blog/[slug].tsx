import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import { BlogPost, blogPosts } from '@/data/blog';
import {
  AppleSection,
  AppleTypography,
  AppleButton,
  AppleGrid,
} from '@/components/apple';
import Image from 'next/image';

interface BlogDetailProps {
  post: BlogPost;
}

// Helper to format the content string into paragraphs
const formatContentIntoParagraphs = (content: string): JSX.Element[] => {
  // Split by sentences to create reasonable paragraphs
  const sentences = content.split(/\.(?=\s+[A-Z]|$)/).filter(s => s.trim());
  const paragraphs: JSX.Element[] = [];

  // Group sentences into paragraphs (2-4 sentences per paragraph)
  const PARAGRAPH_SIZE = 3;
  for (let i = 0; i < sentences.length; i += PARAGRAPH_SIZE) {
    const paraSentences = sentences.slice(i, i + PARAGRAPH_SIZE);
    if (paraSentences.length > 0) {
      const paragraphText = paraSentences.map(s => s.trim()).join('. ') + '.';
      paragraphs.push(
        <p key={i} className="text-base md:text-lg leading-relaxed mb-6 text-foreground">
          {paragraphText}
        </p>
      );
    }
  }

  return paragraphs;
};

const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const contentParagraphs = formatContentIntoParagraphs(post.content);

  return (
    <div>
      <Head>
        <title>{post.title} • Muhammad Fandu Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Navbar />

      {/* Article Header with Image */}
      <AppleSection background="primary" padding="none" className="relative min-h-[60vh] overflow-hidden">
        {post.featuredImage && (
          <div className="absolute inset-0">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
          </div>
        )}

        <div className="relative z-10 container-apple py-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-white/80 mb-6">
              <time dateTime={post.date}>{formattedDate}</time>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>

            <AppleTypography
              variant="h1"
              className="text-white mb-6"
            >
              {post.title}
            </AppleTypography>

            <AppleTypography variant="xl" className="text-white/90 mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </AppleTypography>

            {post.featured && (
              <div className="inline-block rounded-apple-sm bg-primary/20 text-surface-green px-3 py-1 text-sm font-medium">
                Featured Article
              </div>
            )}
          </div>
        </div>
      </AppleSection>

      {/* Article Content */}
      <AppleSection background="primary" padding="lg">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {contentParagraphs}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <AppleTypography variant="h3" className="mb-4">
              Tags
            </AppleTypography>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-2 bg-primary-50 text-primary-700 text-sm rounded-apple-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <AppleTypography variant="h3" className="mb-4">
              Share Article
            </AppleTypography>
            <div className="flex gap-4">
              <AppleButton
                variant="primary"
                size="sm"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://muhammadfandu.com/blog/${post.slug}`)}`}
                target="_blank"
              >
                Share on Twitter
              </AppleButton>
              <AppleButton
                variant="tertiary"
                size="sm"
                href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${post.title} - https://muhammadfandu.com/blog/${post.slug}`)}`}
              >
                Email Link
              </AppleButton>
            </div>
          </div>
        </div>
      </AppleSection>

      {/* Navigation */}
      <AppleSection background="secondary" padding="lg">
        <div className="container-apple">
          <div className="flex justify-between max-w-3xl mx-auto">
            <AppleButton
              variant="secondary"
              size="lg"
              href="/blog"
            >
              ← Back to Blog
            </AppleButton>

            <AppleButton
              variant="primary"
              size="lg"
              href="/portfolio"
            >
              View Portfolio →
            </AppleButton>
          </div>
        </div>
      </AppleSection>

      {/* Related Articles */}
      <AppleSection background="primary" padding="lg">
        <div className="container-apple">
          <AppleTypography variant="h2" className="text-center mb-12">
            Related Articles
          </AppleTypography>
          <AppleGrid columns={3} gap="lg">
            {getRelatedPosts(post).map((related) => (
              <div
                key={related.slug}
                onClick={() => router.push(`/blog/${related.slug}`)}
                className="cursor-pointer transition-transform duration-apple hover:scale-105"
              >
                <div className="overflow-hidden rounded-apple-lg bg-white shadow hover:shadow-apple-xl transition-shadow duration-apple">
                  {related.featuredImage && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={related.featuredImage}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-sm text-neutral-500 mb-3">
                      {new Date(related.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {related.readTime}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-neutral-600 line-clamp-3">{related.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </AppleGrid>
        </div>
      </AppleSection>

      <Footer />
    </div>
  );
};

// Helper to get related posts (3 posts from same category, excluding current)
const getRelatedPosts = (currentPost: BlogPost): BlogPost[] => {
  return blogPosts
    .filter(post =>
      post.published &&
      post.id !== currentPost.id &&
      post.category === currentPost.category
    )
    .slice(0, 3);
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts
    .filter(post => post.published)
    .map((post) => ({
      params: { slug: post.slug },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post || !post.published) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogDetail;
