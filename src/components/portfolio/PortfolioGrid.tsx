import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Project } from '@/data/portfolio';
import AppleGrid from '../apple/AppleGrid';
import AppleCard from '../apple/AppleCard';
import AppleButton from '../apple/AppleButton';
import Link from 'next/link';

interface PortfolioGridProps {
  projects: Project[];
  showFilters?: boolean;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects, showFilters = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'Graphic Design' },
    { id: 'consulting', name: 'Consulting' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleCardClick = (projectId: string) => {
    router.push(`/portfolio/${projectId}`);
  };

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <AppleButton
              key={category.id}
              variant={selectedCategory === category.id ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </AppleButton>
          ))}
        </div>
      )}

      <AppleGrid columns={3} gap="lg">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleCardClick(project.id)}
            className="cursor-pointer transition-transform duration-apple hover:scale-105"
          >
            <AppleCard
              image={project.image}
              title={project.title}
              description={project.description}
              badge={project.featured ? 'Featured' : undefined}
              footer={
                <div className="flex gap-2 justify-between">
                  <AppleButton
                    variant="tertiary"
                    size="sm"
                    href={`/portfolio/${project.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/portfolio/${project.id}`);
                    }}
                  >
                    View Details
                  </AppleButton>
                  {project.liveUrl && (
                    <AppleButton
                      variant="primary"
                      size="sm"
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Live
                    </AppleButton>
                  )}
                </div>
              }
            />
          </div>
        ))}
      </AppleGrid>
    </div>
  );
};

export default PortfolioGrid;
export type { PortfolioGridProps };
