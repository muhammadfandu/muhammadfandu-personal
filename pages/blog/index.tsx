import React from 'react';
import Head from 'next/head';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import BlogList from '@/components/blog/BlogList';
import { getPublishedPosts } from '@/data/blog';
import {
  AppleSection,
  AppleTypography,
  AppleButton,
} from '@/components/apple';

export default function BlogIndex() {
  const posts = getPublishedPosts();

  return (
    <div>
      <Head>
        <title>Blog • Muhammad Fandu</title>
        <meta name="description" content="Explore insights on web development, design, and consulting from Muhammad Fandu." />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <AppleSection background="primary" padding="lg">
        <div className="text-center max-w-4xl mx-auto">
          <AppleTypography
            variant="h1"
            gradient
            className="mb-6"
          >
            Blog
          </AppleTypography>
          <AppleTypography variant="lg" color="neutral" className="mb-12">
            Insights on web development, design patterns, consulting strategies,
            and everything in between. Sharing knowledge to help others grow.
          </AppleTypography>
        </div>
      </AppleSection>

      {/* Articles List */}
      <AppleSection background="primary" padding="none">
        <div className="container-apple">
          <BlogList posts={posts} showFeatured={true} />
        </div>
      </AppleSection>

      {/* CTA Section */}
      <AppleSection background="secondary" padding="lg">
        <div className="container-apple text-center max-w-3xl mx-auto">
          <AppleTypography variant="h2" color="primary" className="mb-4">
            Stay Updated
          </AppleTypography>
          <AppleTypography variant="lg" color="neutral" className="mb-8">
            Get notified when new articles are published and never miss insights
            on the latest in web development and design.
          </AppleTypography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppleButton
              variant="primary"
              size="lg"
              href="mailto:muhammad.pe.widodo@gmail.com"
            >
              Subscribe via Email
            </AppleButton>
            <AppleButton
              variant="secondary"
              size="lg"
              href="/rss.xml"
            >
              RSS Feed
            </AppleButton>
          </div>
        </div>
      </AppleSection>

      <Footer />
    </div>
  );
}
