// ✏️ Edit this file to update everything on the site.

export const profile = {
  name: 'Sadik Mahmud',
  role: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'Laravel Specialist', 'PHP Engineer', 'Problem Solver'],
  tagline:
    'I build fast, reliable web applications with Laravel, PHP and modern JavaScript — from database design to polished user interfaces.',
  location: 'Bangladesh',
  email: 'hello@sadikmahmud.dev',
  resume: '', // e.g. '/resume.pdf' (put the file in /public)
  socials: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    facebook: '',
  },
}

export const about = [
  "I'm a full-stack developer who loves turning complex requirements into clean, maintainable software. Most of my work lives in the Laravel ecosystem — building admin panels, government e-services, and data-heavy business systems.",
  'I care about solid backend architecture, well-structured databases, and interfaces people actually enjoy using. When I am not shipping features, I am exploring AI tools and new ways to automate the boring parts of development.',
]

export const stats = [
  { value: '3+', label: 'Years experience' },
  { value: '20+', label: 'Projects shipped' },
  { value: '10+', label: 'Happy clients' },
]

export const skills = [
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'REST APIs', 'Livewire', 'Queues & Jobs', 'Auth & RBAC'],
  },
  {
    title: 'Frontend',
    items: ['JavaScript', 'React', 'Vue.js', 'Tailwind CSS', 'Alpine.js', 'Blade'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'Eloquent ORM', 'Query Optimization'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Git', 'Linux', 'Nginx', 'Docker', 'CI/CD', 'Composer'],
  },
]

export const projects = [
  {
    title: 'e-Pourashava',
    description:
      'A digital municipality platform for citizen services — certificates, tax payments, and application tracking, with a role-based admin panel for officials.',
    tags: ['Laravel', 'MySQL', 'Tailwind'],
    live: '',
    code: '',
    featured: true,
  },
  {
    title: 'Cantonment Board System',
    description:
      'Management system for cantonment board operations: resident records, service requests, billing, and reporting dashboards.',
    tags: ['Laravel', 'PostgreSQL', 'Livewire'],
    live: '',
    code: '',
    featured: true,
  },
  {
    title: 'Waste Management',
    description:
      'Tracks waste collection routes, vehicles and complaints in real time, giving authorities a clear view of city cleanliness.',
    tags: ['PHP', 'Laravel', 'Maps API'],
    live: '',
    code: '',
  },
  {
    title: 'IP Address Tracker',
    description:
      'Look up any IP address or domain and see its location, ISP and timezone on an interactive map.',
    tags: ['JavaScript', 'API', 'Leaflet'],
    live: '',
    code: '',
  },
]

export const experience = [
  {
    role: 'Software Developer',
    company: 'Nhimex Software',
    period: '2023 — Present',
    points: [
      'Build and maintain Laravel applications for government and enterprise clients.',
      'Design database schemas and REST APIs used by web and mobile frontends.',
      'Improve performance and deploy applications on Linux servers.',
    ],
  },
]
