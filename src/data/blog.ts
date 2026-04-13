export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Simple text content for now, can be JSX later
  date: string; // ISO date string
  readTime: string;
  tags: string[];
  category: string;
  featuredImage: string;
  published: boolean;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'modern-react-patterns',
    slug: 'modern-react-patterns-2024',
    title: 'Modern React Patterns in 2024: Building Scalable Applications',
    excerpt:
      'Explore the latest React patterns and best practices for building maintainable, scalable applications in 2024.',
    content:
      'In this article, we dive deep into the most effective React patterns that have emerged in 2024. From the Compound Components Pattern to the Render Props evolution, we explore how modern React applications are being architected for maximum scalability and maintainability. We cover component composition strategies, state management decisions, and the latest hooks that are changing how we write React code. Key topics include: Server Components integration, advanced custom hooks patterns, component communication strategies, and performance optimization techniques that leverage React 18\'s concurrent features.',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['React', 'JavaScript', 'Patterns', 'Architecture'],
    category: 'Development',
    featuredImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    published: true,
    featured: true,
  },
  {
    id: 'design-systems-future',
    slug: 'the-future-of-design-systems',
    title: 'The Future of Design Systems: Trends and Predictions',
    excerpt:
      'How design systems are evolving to meet the demands of modern product development, and what the future holds.',
    content:
      'Design systems have become essential for modern product teams, but where are they heading? This article explores emerging trends including AI-assisted design, dynamic theming across platforms, and component-driven development. We examine how design systems are bridging the gap between design and development, enabling true collaboration across disciplines. Learn about Token-based design systems, automated documentation generation, and how component APIs are evolving to provide more flexibility while maintaining consistency.',
    date: '2024-02-28',
    readTime: '6 min read',
    tags: ['Design Systems', 'UI/UX', 'Product Development'],
    category: 'Design',
    featuredImage:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    published: true,
    featured: true,
  },
  {
    id: 'typescript-advanced-patterns',
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for Frontend Developers',
    excerpt:
      'Master TypeScript with advanced patterns that improve type safety and developer experience.',
    content:
      "TypeScript has evolved far beyond simple type annotations. In this comprehensive guide, we explore advanced patterns including: Conditional Types for complex type transformations, Mapped Types for creating derived types, Template Literal Types for string manipulation, and Discriminated Unions for state management. Learn how to leverage these patterns to create type-safe APIs, build better abstractions, and catch errors at compile-time instead of runtime. Real-world examples demonstrate how these patterns solve common frontend challenges.",
    date: '2024-02-10',
    readTime: '10 min read',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    category: 'Development',
    featuredImage:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    published: true,
  },
  {
    id: 'career-pivot-to-tech',
    slug: 'pivoting-to-tech-from-non-tech-careers',
    title: 'Pivoting to Tech: A Guide for Non-Technical Professionals',
    excerpt:
      'Practical advice for making a successful career transition into the tech industry.',
    content:
      "Making a career pivot into tech can feel overwhelming, but it's absolutely achievable with the right strategy. This guide shares practical advice drawn from helping dozens of professionals successfully transition. We cover: Identifying transferable skills from your current career, choosing the right technical path based on your strengths, building a learning roadmap that fits your schedule, creating a portfolio that showcases your potential, networking effectively without prior industry connections, and acing technical interviews as a career-changer. Real success stories provide inspiration and actionable insights.",
    date: '2024-01-22',
    readTime: '7 min read',
    tags: ['Career', 'Consulting', 'Tech', 'Education'],
    category: 'Consulting',
    featuredImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    published: true,
  },
  {
  id: 'performance-optimization-guide',
  slug: 'performance-optimization-real-world-guide',
  title: 'Performance Optimization: A Real-World Guide',
  excerpt:
    'Proven techniques for optimizing web performance without sacrificing user experience.',
  content:
    "Web performance isn't just about faster load times—it's about creating better user experiences. This comprehensive guide walks through real-world optimization techniques that deliver measurable impact. Topics include: Image optimization strategies from lazy loading to WebP adoption, JavaScript bundle splitting and tree-shaking, CSS optimization and critical path rendering, Font loading strategies that prevent layout shifts, API optimization including pagination and caching patterns, and Real-world case studies showing 70% performance improvements.",
  date: '2024-01-15',
  readTime: '9 min read',
  tags: ['Performance', 'Optimization', 'Web Development'],
  category: 'Development',
    featuredImage:
      'https://images.unsplash.com/photo-1550751827-4bd374c6f58e?w=800&h=400&fit=crop',
    published: true,
  },
  {
    id: 'graphql-frontend-guide',
    slug: 'mastering-graphql-frontend-development',
    title: 'Mastering GraphQL: Frontend Development Guide',
    excerpt:
      'Learn GraphQL patterns that will revolutionize how you build frontend applications.',
    content:
      'GraphQL represents a fundamental shift in how frontend developers think about data. This guide covers everything from basic queries to advanced patterns including: Schema-first development for frontend teams, Optimizing with query batching and persisted queries, Implementing real-time features with subscriptions, Building type-safe GraphQL clients with codegen, Error handling strategies that improve UX, and Caching patterns that reduce unnecessary network requests. Complete with code examples and best practices for production applications.',
    date: '2023-12-28',
    readTime: '8 min read',
    tags: ['GraphQL', 'API', 'JavaScript', 'React'],
    category: 'Development',
    featuredImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    published: true,
  },
  {
    id: 'mobile-first-design-deep-dive',
    slug: 'mobile-first-design-deep-dive',
    title: 'Mobile-First Design: Principles and Best Practices',
    excerpt:
      'Deep dive into mobile-first design methodology and implementation strategies.',
    content:
      "Mobile-first isn't just about responsive breakpoints—it's a fundamental mindset shift. This article explores the entire mobile-first design process from research to implementation. Learn about: Touch target optimization and gesture design, Content prioritization for small screens, Performance considerations for mobile networks, Progressive enhancement vs. graceful degradation, Testing on real devices and browser dev tools, and How mobile-first improves accessibility for all users. Includes practical examples and common pitfalls to avoid.",
    date: '2023-12-15',
    readTime: '7 min read',
    tags: ['Mobile Design', 'UI/UX', 'Responsive Design'],
    category: 'Design',
    featuredImage:
      'https://images.unsplash.com/photo-1519389950473-47ba0537786c?w=800&h=400&fit=crop',
    published: true,
  },
];

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.published);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.published && post.featured).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.published && post.category === category);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export interface BlogSummary {
  total: number;
  byCategory: Record<string, number>;
  byTag: Record<string, number>;
  recent: BlogPost[];
}

export function getBlogSummary(): BlogSummary {
  const published = getPublishedPosts();
  const tags: Record<string, number> = {};

  const byCategory = published.reduce((acc: Record<string, number>, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  published.forEach(post => {
    post.tags.forEach(tag => {
      tags[tag] = (tags[tag] || 0) + 1;
    });
  });

  return {
    total: published.length,
    byCategory,
    byTag: tags,
    recent: published.slice(0, 5),
  };
}
