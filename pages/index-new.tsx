import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import {
  AppleHero,
  AppleSection,
  AppleCard,
  AppleButton,
  AppleTypography,
AppleGrid,
} from '@/components/apple';
import Navbar from './layout/navbar';
import Footer from './layout/footer';

export default function HomeNew() {
  const services = [
    {
      id: 'web',
      image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
      title: 'Web Development',
      description:
        'Dedicated Web Developer with a solid Angular foundation, specialize in creating dynamic and user-friendly web applications.',
      badge: 'Featured',
    },
    {
      id: 'design',
      image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg',
      title: 'Graphic Design',
      description:
        'Specialized in design programs including Affinity Designer and Figma, create visually attractive and impactful designs.',
    },
    {
      id: 'consulting',
      image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg',
      title: 'General Consultant',
      description:
        'Provide valuable guidance to individuals and organizations through deep expertise and insights.',
    },
  ];

  return (
    <div>
      <Head>
        <title>Muhammad Fandu • Frontend Artisan</title>
        <meta name="description" content="Frontend Web Artisan specializing in web development, graphic design, and consulting services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Apple-inspired Hero Section */}
      <AppleHero
        title="Hello, I Am Muhammad Fandu"
        subtitle="Frontend Web Artisan crafting digital experiences with code"
        image="/hero-bg.jpg"
        imageAlt="Professional workspace background"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AppleButton
            variant="primary"
            size="lg"
            href="mailto:muhammad.p.widodo@gmail.com"
          >
            Contact Me
          </AppleButton>
          <AppleButton
            variant="secondary"
            size="lg"
            href="/portfolio"
          >
            View Portfolio
          </AppleButton>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://www.instagram.com/muhammadfandu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-300 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-widodo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-300 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
          </a>
          <a
            href="https://medium.com/@muhammadfandu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-300 transition-colors"
          >
            <FontAwesomeIcon icon={faMedium} className="h-8 w-8" />
          </a>
        </div>
      </AppleHero>

      {/* Available For Section */}
      <AppleSection background="primary" padding="lg">
        <div className="text-center mb-16">
          <AppleTypography variant="h2" color="primary" className="mb-4">
            Available For
          </AppleTypography>
          <AppleTypography variant="lg" color="neutral">
            Professional services tailored to your needs
          </AppleTypography>
        </div>

        <AppleGrid columns={3} gap="lg">
          {services.map((service) => (
            <AppleCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              badge={service.badge}
              featured={service.id === 'web'}
              onClick={() => {
                // Navigate or show details
                console.log(`Clicked on ${service.id}`);
              }}
              footer={
                <AppleButton
                  variant="tertiary"
                  size="sm"
                  onClick={() => {
                    console.log(`Learn more about ${service.id}`);
                  }}
                >
                  Learn More
                </AppleButton>
              }
            />
          ))}
        </AppleGrid>
      </AppleSection>

      {/* About Section */}
      <AppleSection background="secondary" padding="lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <AppleTypography variant="h2" color="primary" className="mb-6">
              Crafting Digital Experiences
            </AppleTypography>
            <div className="space-y-4">
              <AppleTypography variant="base" color="neutral">
                I am a Frontend Developer specializing in creating dynamic and user-friendly
                web applications. With expertise in modern frameworks and a passion for
                clean code, I transform ideas into elegant digital solutions.
              </AppleTypography>
              <AppleTypography variant="base" color="neutral">
                Based in Southeast Asia, I prefer to call myself a Frontend Web Artisan
                because I craft beautiful, functional web experiences with code.
              </AppleTypography>
            </div>
            <div className="mt-8">
              <AppleButton
                variant="primary"
                size="md"
                href="/docs/getting-started"
              >
                View Documentation
              </AppleButton>
            </div>
          </div>

          <div className="relative">
            <img
              src="/profile.png"
              alt="Muhammad Fandu"
              className="rounded-apple-xl shadow-apple-xl"
            />
          </div>
        </div>
      </AppleSection>

      {/* Call to Action Section */}
      <AppleSection background="primary" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <AppleTypography variant="h2" color="primary" className="mb-6">
            Ready to Start Your Project?
          </AppleTypography>
          <AppleTypography variant="lg" color="neutral" className="mb-8">
            Let's collaborate to bring your vision to life with clean,
            modern web solutions.
          </AppleTypography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppleButton
              variant="primary"
              size="lg"
              href="mailto:muhammad.p.widodo@gmail.com"
            >
              Get In Touch
            </AppleButton>
            <AppleButton
              variant="secondary"
              size="lg"
              href="/portfolio"
            >
              View My Work
            </AppleButton>
          </div>
        </div>
      </AppleSection>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Export both for gradual migration
