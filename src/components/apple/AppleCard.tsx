import React from 'react';
import Image from 'next/image';

interface AppleCardProps {
  image: string;
  title: string;
  description: string;
  badge?: string;
  footer?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
}

const AppleCard: React.FC<AppleCardProps> = ({
  image,
  title,
  description,
  badge,
  footer,
  onClick,
  featured = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        group cursor-pointer overflow-hidden rounded-apple-lg
        transition-all duration-apple ease-apple
        hover:scale-105 hover:shadow-apple-xl
        ${featured ? 'shadow-lg' : 'shadow'}
        bg-white dark:bg-neutral-900
      `}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-apple hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {badge}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3">
          {description}
        </p>

        {footer && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-neutral-800">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppleCard;
export type { AppleCardProps };
