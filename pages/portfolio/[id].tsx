import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import { Project, projects } from '@/data/portfolio';
import {
  AppleSection,
  AppleTypography,
  AppleButton,
  AppleGrid,
  AppleCard,
} from '@/components/apple';
import Image from 'next/image';

interface PortfolioDetailProps {
  project: Project;
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{project.title} • Muhammad Fandu</title>
        <meta name="description" content={project.description} />
      </Head>

      <Navbar />

      {/* Hero Section with Project Image */}
      <AppleSection background="primary" padding="none" className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        </div>

        <div className="relative z-10 container-apple py-32">
          <div className="max-w-5xl mx-auto text-center">
            <AppleTypography
              variant="h1"
              className="text-white mb-4"
            >
              {project.title}
            </AppleTypography>
            <AppleTypography variant="xl" className="text-white/90 mb-8 max-w-3xl mx-auto">
              {project.description}
            </AppleTypography>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {project.liveUrl && (
                <AppleButton
                  variant="primary"
                  size="lg"
                  href={project.liveUrl}
                  target="_blank"
                >
                  View Live Project
                </AppleButton>
              )}
              {project.githubUrl && (
                <AppleButton
                  variant="tertiary"
                  size="lg"
                  href={project.githubUrl}
                  target="_blank"
                >
                  View on GitHub
                </AppleButton>
              )}
            </div>
            {project.featured && (
              <div className="inline-block rounded-apple-sm bg-primary/20 text-surface-green px-3 py-1 text-sm font-medium">
                Featured Project
              </div>
            )}
          </div>
        </div>
      </AppleSection>

      {/* Project Metadata */}
      <AppleSection background="primary" padding="sm">
        <AppleGrid columns={4} gap="md" className="container-apple">
          <div className="text-center">
            <AppleTypography variant="h3" color="primary" className="mb-2">Role</AppleTypography>
            <AppleTypography variant="base" color="neutral">{project.role || 'Developer'}</AppleTypography>
          </div>
          <div className="text-center">
            <AppleTypography variant="h3" color="primary" className="mb-2">Client</AppleTypography>
            <AppleTypography variant="base" color="neutral">{project.client || '—'}</AppleTypography>
          </div>
          <div className="text-center">
            <AppleTypography variant="h3" color="primary" className="mb-2">Date</AppleTypography>
            <AppleTypography variant="base" color="neutral">
              {project.date ? new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : '—'}
            </AppleTypography>
          </div>
          <div className="text-center">
            <AppleTypography variant="h3" color="primary" className="mb-2">Category</AppleTypography>
            <AppleTypography variant="base" color="neutral">
              {project.category === 'web' ? 'Web Development' : project.category === 'design' ? 'Graphic Design' : 'Consulting'}
            </AppleTypography>
          </div>
        </AppleGrid>
      </AppleSection>

      {/* Long Description */}
      <AppleSection background="primary" padding="lg">
        <div className="max-w-4xl mx-auto">
          <AppleTypography variant="h2" className="mb-8">
            Project Overview
          </AppleTypography>
          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>
        </div>
      </AppleSection>

      {/* Technologies */}
      <AppleSection background="secondary" padding="lg">
        <div className="container-apple">
          <AppleTypography variant="h2" className="text-center mb-12">
            Technologies Used
          </AppleTypography>
          <AppleGrid columns={3} gap="md" className="max-w-4xl mx-auto">
            {project.technologies.map((tech, index) => (
              <div key={index} className="text-center rounded-apple-sm bg-surface-light p-6">
                <AppleTypography variant="h4" color="primary" className="mb-2">
                  {tech}
                </AppleTypography>
                <AppleTypography variant="sm" color="neutral-outline">
                  Expert Level
                </AppleTypography>
              </div>
            ))}
          </AppleGrid>
        </div>
      </AppleSection>

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <AppleSection background="primary" padding="lg">
          <div className="max-w-4xl mx-auto">
            <AppleTypography variant="h2" className="mb-8">
              Key Features
            </AppleTypography>
            <AppleGrid columns={2} gap="md">
              {project.features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-surface-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <AppleTypography variant="base">
                    {feature}
                  </AppleTypography>
                </div>
              ))}
            </AppleGrid>
          </div>
        </AppleSection>
      )}

      {/* Additional Images */}
      {project.images && project.images.length > 0 && (
        <AppleSection background="secondary" padding="lg">
          <div className="container-apple">
            <AppleTypography variant="h2" className="text-center mb-12">
              Project Gallery
            </AppleTypography>
            <AppleGrid columns={2} gap="lg">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-video relative rounded-apple-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </AppleGrid>
          </div>
        </AppleSection>
      )}

      {/* CTA Section */}
      <AppleSection background="primary" padding="lg" className="text-center">
        <div className="max-w-3xl mx-auto">
          <AppleTypography variant="h2" color="primary" className="mb-4">
            Like What You See?
          </AppleTypography>
          <AppleTypography variant="lg" color="neutral" className="mb-8">
            Interested in a similar project? Let's discuss how I can help bring your vision to life.
          </AppleTypography>
          <div className="flex flex-wrap justify-center gap-4">
            <AppleButton variant="primary" size="lg" href="mailto:muhammad.p.widodo@gmail.com">
              Start a Discussion
            </AppleButton>
            <AppleButton variant="secondary" size="lg" href="/portfolio">
              View All Projects
            </AppleButton>
          </div>
        </div>
      </AppleSection>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.id === params?.id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default PortfolioDetail;