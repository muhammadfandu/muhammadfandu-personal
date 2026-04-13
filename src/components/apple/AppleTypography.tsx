import React from 'react';

interface AppleTypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'xl' | 'lg' | 'base' | 'sm' | 'xs';
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  color?: 'foreground' | 'primary' | 'neutral';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  as?: keyof JSX.IntrinsicElements;
}

const AppleTypography: React.FC<AppleTypographyProps> = ({
  variant = 'base',
  children,
  className = '',
  gradient = false,
  color = 'foreground',
  weight = 'normal',
  as: Component = 'p',
}) => {
  const variantClasses = {
    h1: 'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
    h2: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
    h3: 'text-3xl md:text-4lg font-semibold leading-snug',
    h4: 'text-2xl md:text-3xl font-semibold leading-snug',
    h5: 'text-xl md:text-2xl font-medium leading-snug',
    h6: 'text-lg md:text-xl font-medium leading-snug',
    xl: 'text-xl',
    lg: 'text-lg',
    base: 'text-base',
    sm: 'text-sm',
    xs: 'text-xs',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClasses = {
    foreground: 'text-foreground',
    primary: 'text-primary',
    neutral: 'text-neutral-600 dark:text-neutral-400',
  };

  const gradientClasses = gradient ? 'text-gradient' : '';

  const combinedClasses = [
    variantClasses[variant],
    weightClasses[weight],
    colorClasses[color],
    gradientClasses,
    'font-apple',
    className,
  ].join(' ');

  return React.// eslint-disable-next-line react/no-children-prop
  createElement(Component, {
    className: combinedClasses,
    children,
  });
};

export default AppleTypography;
export type { AppleTypographyProps };
