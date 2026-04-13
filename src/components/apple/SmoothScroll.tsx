import React from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  const combinedClasses = [
    'overflow-y-auto overflow-x-hidden',
    className,
  ].join(' ');

  // eslint-disable-next-line react/no-children-prop
  return React.createElement(Component, {
    className: combinedClasses,
    children,
  });
};

export default SmoothScroll;
export type { SmoothScrollProps };
