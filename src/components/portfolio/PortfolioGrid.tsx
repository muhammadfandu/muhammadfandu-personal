import React, { useState } from 'react';
import { Project } from '@/data/portfolio';
import AppleGrid from '../apple/AppleGrid';
import AppleCard from '../apple/AppleCard';
import AppleButton from '../apple/AppleButton';

interface PortfolioGridProps {
  projects: Project[];
  showFilters?: boolean;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects, showFilters = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'Graphic Design' },
    { id: 'consulting', name: 'Consulting' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
          <AppleCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            badge={project.featured ? 'Featured' : undefined}
            footer={
              <div className="flex gap-2 justify-between">
                {project.liveUrl && (
                  <AppleButton
                    variant="primary"
                    size="sm"
                    href={project.liveUrl}
                  >
                    View Live
                  </AppleButton>
                )}
                {project.githubUrl && (
                  <AppleButton
                    variant="tertiary"
                    size="sm"
                    href={project.githubUrl}
                  >
                    GitHub
                  </AppleButton>
                )}
              </div>
            }
          />
        ))}
      </AppleGrid>
    </div>
  );
};

export default PortfolioGrid;
export type { PortfolioGridProps };
