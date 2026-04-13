import React from 'react';

interface AppleGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 'auto';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  responsive?: boolean;
}

const AppleGrid: React.FC<AppleGridProps> = ({
  children,
  columns = 3,
  gap = 'lg',
  className = '',
  responsive = true,
}) => {
  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-4',
    md: 'gap-8',
    lg: 'gap-12',
    xl: 'gap-16',
  };

  const columnsClasses = typeof columns === 'number'
    ? `grid-cols-1 md:grid-cols-2 ${columns >= 3 ? 'lg:grid-cols-3' : ''} ${columns === 4 ? 'xl:grid-cols-4' : ''}`
    : 'grid-cols-auto';

  if (columns === 'auto' && responsive) {
    return (
      <div className={`grid ${gapClasses[gap]} sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`grid ${columnsClasses} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default AppleGrid;
export type { AppleGridProps };
