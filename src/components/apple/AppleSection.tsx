import React from 'react';

interface AppleSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'primary' | 'secondary';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const AppleSection: React.FC<AppleSectionProps> = ({
  children,
  className = '',
  background = 'default',
  padding = 'lg',
  fullWidth = false,
}) => {
  const bgClasses = {
    default: 'bg-background',
    primary: 'bg-white dark:bg-neutral-900',
    secondary: 'bg-surface-light dark:bg-surface-dark',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-12',
    md: 'py-20',
    lg: 'py-32',
  };

  const containerClass = fullWidth ? '' : 'container-apple';

  return (
    <section className={`${paddingClasses[padding]} ${bgClasses[background]}`}>
      <div className={`${containerClass} ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default AppleSection;
export type { AppleSectionProps };
