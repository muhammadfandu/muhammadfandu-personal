import React from 'react';

interface AppleHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
  showScrollIndicator?: boolean;
}

const AppleHero: React.FC<AppleHeroProps> = ({
  title,
  subtitle,
  image,
  imageAlt = '',
  children,
  className = '',
  showScrollIndicator = true,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image or gradient */}
      <div className="absolute inset-0">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 dark:from-neutral-900 dark:to-neutral-800" />
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 dark:from-black/40 dark:to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center container-apple">
        <div className="max-w-4xl mx-auto">
          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-8 fade-in">
              {subtitle}
            </p>
          )}

          {/* Children content */}
          <div className="fade-in">
            {children}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
};

export default AppleHero;
export type { AppleHeroProps };
