export interface Project {
  id: string;
  title: string;
  category: 'web' | 'design' | 'consulting';
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  featured?: boolean;
  featuredOrder?: number;
  date?: string;
  role?: string;
  client?: string;
}

export const projects: Project[] = [
  {
    id: 'angular-dashboard',
    title: 'Modern Analytics Dashboard',
    category: 'web',
    description:
      'A comprehensive analytics dashboard built with Angular and modern web technologies for real-time data visualization.',
    longDescription:
      'Built a comprehensive analytics dashboard for enterprise clients, featuring real-time data streaming, interactive charts with D3.js, and role-based access control. Implemented responsive design patterns ensuring seamless experience across devices.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Angular', 'TypeScript', 'D3.js', 'RxJS', 'Material UI'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    featuredOrder: 1,
    date: '2024-01-15',
    role: 'Frontend Lead',
    client: 'TechCorp Solutions',
  },
  {
    id: 'design-system',
    title: 'Design System & Component Library',
    category: 'design',
    description:
      'Created a comprehensive design system with reusable components, ensuring consistency across multiple products.',
    longDescription:
      'Architected and built a complete design system from scratch, including Figma libraries, React components, documentation, and automated testing. Streamlined development and design processes across 5 products.',
    image: 'https://images.unsplash.com/photo-1561089489-f42486ed1233?w=800&h=600&fit=crop',
    technologies: ['Figma', 'React', 'Storybook', 'TypeScript'],
    githubUrl: '#',
    featured: true,
    featuredOrder: 2,
    date: '2024-02-20',
    role: 'Design Systems Engineer',
    client: 'Design Studio Pro',
  },
  {
    id: 'react-ecommerce',
    title: 'Modern E-Commerce Platform',
    category: 'web',
    description:
      'Full-stack e-commerce solution with modern React, optimized performance, and exceptional user experience.',
    longDescription:
      'Developed a full-featured e-commerce platform with React, Redux, and Node.js. Implemented advanced search, user reviews, payment integration with Stripe, and admin dashboard. Achieved 99.5% uptime and 40% conversion improvement.',
    image: 'https://images.unsplash.com/photo-1556742049-0cf827b916ca?w=800&h=600&fit=crop',
    technologies: ['React', 'Redux', 'Node.js', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    date: '2023-11-08',
    role: 'Fullstack Developer',
    client: 'ShopTrend Inc.',
  },
  {
    id: 'brand-design',
    title: 'Premium Brand Identity Design',
    category: 'design',
    description:
      'Complete brand identity design including logo, color palette, typography, and marketing materials.',
    longDescription:
      'Crafted comprehensive brand identity for a luxury skincare brand, including logo design, color psychology research, typography selection, packaging design, and digital asset creation. Resulted in 150% brand recognition increase.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
    technologies: ['Affinity Designer', 'Adobe Illustrator', 'Figma'],
    githubUrl: '#',
    date: '2023-09-12',
    client: 'Luxury Skin Co.',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website Redesign',
    category: 'web',
    description:
      'Modernized portfolio website with stunning animations and Apple-like aesthetics for enhanced brand presentation.',
    longDescription:
      'Redesigned and developed a modern portfolio website with smooth animations, optimizing performance and accessibility. Implemented advanced animations with Framer Motion and achieved perfect lighthouse scores.',
    image: 'https://images.unsplash.com/photo-1467232004584-a24162f76113?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: '/',
    githubUrl: 'https://github.com/muhammadfandu/portfolio',
    featured: true,
    featuredOrder: 3,
    date: '2024-03-28',
    role: 'Frontend Developer',
    client: 'Personal Project',
  },
  {
    id: 'tech-workshop',
    title: 'Web Development Workshop',
    category: 'consulting',
    description:
      'Conducted comprehensive web development training for beginners transitioning to advanced techniques.',
    longDescription:
      'Designed and delivered a comprehensive 3-month web development bootcamp covering HTML/CSS fundamentals, JavaScript mastery, React applications, and deployment strategies. 95% of participants landed developer roles within 6 months.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
    technologies: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
    date: '2024-01-10',
    client: 'CodeAcademy Institute',
  },
  {
    id: 'sketch-plugin',
    title: 'Sketch Plugin for Designers',
    category: 'web',
    description:
      'Built a custom Sketch plugin to automate design workflows and improve team productivity.',
    longDescription:
      'Developed a sophisticated Sketch plugin for automating repetitive design tasks, including asset export, layer organization, and style synchronization. Reduced design team manual work by 60% monthly.',
    image: 'https://images.unsplash.com/photo-1561736778-92e52d9c3e47?w=800&h=600&fit=crop',
    technologies: ['JavaScript', 'Sketch API', 'React', 'Node.js'],
    githubUrl: '#',
    date: '2023-12-05',
    client: 'DesignFlow Agency',
  },
  {
    id: 'consulting-guide',
    title: 'Career Consulting Program',
    category: 'consulting',
    description:
      'Comprehensive career guidance program helping developers navigate their professional journey.',
    longDescription:
      'Created a structured 2-month career consulting program including resume optimization, interview prep, portfolio reviews, salary negotiation, and long-term career roadmap. Helped 50+ developers secure better positions.',
    image: 'https://images.unsplash.com/photo-1499750310749-276a668914bf?w=800&h=600&fit=crop',
    technologies: ['Career Development', 'Technical Interview Prep', 'Portfolio Review'],
    date: '2024-02-15',
    client: 'Developers Community',
  },
];

export const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
  { id: 'design', name: 'Graphic Design', count: projects.filter(p => p.category === 'design').length },
  { id: 'consulting', name: 'Consulting', count: projects.filter(p => p.category === 'consulting').length },
];

export const featuredProjects = projects
  .filter(p => p.featured)
  .sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));
