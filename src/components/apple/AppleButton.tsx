import React from 'react';

interface AppleButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: (e?: any) => void;
  className?: string;
  disabled?: boolean;
  target?: string;
}

const AppleButton: React.FC<AppleButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className = '',
  disabled = false,
  target
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-apple font-display transition-all duration-apple focus:outline-none focus:ring-2 focus:ring-primary';

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm font-medium gap-2',
    md: 'px-5 py-3 text-base font-medium gap-2',
    lg: 'px-8 py-4 text-lg font-semibold gap-3',
  };

  const variantClasses = {
    primary: `
      bg-primary-600 text-white
      hover:bg-primary-600
      active:bg-primary-700
      shadow
    `,
    secondary: `
      bg-surface-light border border-primary-200 text-primary-700
      hover:bg-primary-50
      hover:border-primary-300
      active:bg-primary-100
      
    `,
    tertiary: `
      text-primary-600 hover:text-primary-700
      hover:bg-primary-50
      
    `,
    glass: `
      bg-surface-glass/80 backdrop-blur-md
      border border-white/20
      hover:bg-white/20
      active:bg-white/30
      text-white
      ${className.includes('text-') ? '' : 'text-white'}
    `,
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabledClasses,
    className,
  ].join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        aria-disabled={disabled}
        target={target || '_self'}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AppleButton;
export type { AppleButtonProps };
