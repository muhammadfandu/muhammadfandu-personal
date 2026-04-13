import React from 'react';
import Head from 'next/head';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import { projects } from '@/data/portfolio';
import {
  AppleSection,
  AppleTypography,
  AppleButton,
} from '@/components/apple';

export default function PortfolioIndex() {
  return (
    <div>
      <Head>
        <title>Portfolio • Muhammad Fandu</title>
        <meta name="description" content="Explore my web development, graphic design, and consulting projects." />
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
            Portfolio
          </AppleTypography>
          <AppleTypography variant="lg" color="neutral" className="mb-12">
            Explore my collection of web development projects, graphic design work,
            and consulting experiences. Each project represents a unique challenge
            solved with creativity and technical expertise.
          </AppleTypography>
        </div>
      </AppleSection>

      {/* All Projects with Filters */}
      <AppleSection background="primary" padding="none">
        <div className="container-apple">
          <PortfolioGrid
            projects={projects}
            showFilters={true}
          />
        </div>
      </AppleSection>

      {/* CTA Section */}
      <AppleSection background="secondary" padding="lg">
        <div className="container-apple text-center max-w-3xl mx-auto">
          <AppleTypography variant="h2" color="primary" className="mb-4">
            Interested in Collaborating?
          </AppleTypography>
          <AppleTypography variant="lg" color="neutral" className="mb-8">
            Let&apos;s discuss how I can help bring your next project to life with
            the same attention to detail and quality.
          </AppleTypography>

          <AppleButton variant="primary" size="lg" href="mailto:muhammad.p.widodo@gmail.com">
            Start a Project
          </AppleButton>
        </div>
      </AppleSection>

      <Footer />
    </div>
  );
}
