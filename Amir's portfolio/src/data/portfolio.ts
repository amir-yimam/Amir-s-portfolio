export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface SkillCategory {
  [category: string]: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'CloudSync Dashboard',
    description:
      'Real-time analytics platform for monitoring cloud infrastructure metrics. Features customizable widgets, anomaly detection, and multi-cloud support across AWS, GCP, and Azure.',
    image:
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'DevFlow API Gateway',
    description:
      'A developer-first API framework with built-in JWT authentication, rate limiting, automatic OpenAPI docs, and a powerful plugin system for extending functionality.',
    image:
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'NeuralChat',
    description:
      'AI-powered collaborative chat application with context-aware responses, smart message threading, file sharing, and real-time presence indicators.',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'FastAPI', 'React', 'OpenAI', 'WebSockets'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 4,
    title: 'BlockVault',
    description:
      'Decentralized file storage built on IPFS with end-to-end encryption, granular access control, and a clean drag-and-drop interface for managing digital assets.',
    image:
      'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Solidity', 'React', 'IPFS', 'Web3.js', 'Ethers.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

export const skills: SkillCategory = {
  Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Three.js', 'GraphQL'],
  Backend: ['Node.js', 'Python', 'Go', 'FastAPI', 'Express', 'Rust', 'gRPC'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'ClickHouse'],
  Tools: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Terraform', 'Figma', 'Linux'],
};

export const stats: Stat[] = [
  { label: 'Years Coding', value: '5+' },
  { label: 'Projects Shipped', value: '40+' },
  { label: 'Languages Known', value: '8' },
  { label: 'Open Source PRs', value: '120+' },
];

export const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const typingRoles = [
  'Full-Stack Engineer',
  'System Architect',
  'Open Source Contributor',
  'Problem Solver',
  'Tech Enthusiast',
];
