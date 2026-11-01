// ✏️ Edit this file to update everything on the site.

export const profile = {
  name: 'Sadik Mahmud',
  role: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'Laravel + Vue Engineer', 'Junior Software Engineer', 'Data Enthusiast'],
  tagline:
    'I build production web apps with Laravel, Vue and React — billing, finance and municipal systems used every day by local governments in Bangladesh.',
  location: 'Kushtia, Bangladesh',
  stack: ['Laravel', 'Vue', 'React'],
  email: 'sadikmahmud.devops@gmail.com',
  resume: '', // e.g. '/resume.pdf' (put the file in /public)
  githubUser: 'SadikMahmud2003', // used for avatar + live repos
  available: true, // shows the "Available for work" badge
  socials: {
    github: 'https://github.com/SadikMahmud2003',
    linkedin: 'https://www.linkedin.com/in/sadik-mahmud-873635256',
    facebook: '',
  },
}

export const about = [
  "I'm a Junior Software Engineer at Nhimex Software and a Computer Science & Engineering graduate of Chandigarh University. Day to day I build full-stack Laravel applications with Inertia, Vue and React — the kind of systems municipalities rely on for water billing, finance, and city services.",
  'I enjoy the whole stack: designing databases and multi-tenant architecture, writing clean controllers and permissions, and shipping interfaces that make complex workflows feel simple. Outside of work I explore data analytics, machine learning, and Web3 — and I debug with coffee ☕.',
]

export const stats = [
  { value: '6+', label: 'Production apps contributed to' },
  { value: '20+', label: 'Technologies used' },
  { value: 'CSE', label: 'Chandigarh University' },
]

export const skills = [
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'Python', 'Django', 'Java', 'REST APIs', 'Multi-tenancy'],
  },
  {
    title: 'Frontend',
    items: ['Vue 3', 'React', 'Inertia.js', 'TypeScript', 'Tailwind CSS', 'shadcn-vue', 'HTML5 / CSS3'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'SQL', 'Eloquent ORM', 'Query Optimization'],
  },
  {
    title: 'Data & Analytics',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Excel', 'Scikit-learn'],
  },
  {
    title: 'Web3',
    items: ['Solidity', 'Smart Contracts', 'Remix IDE', 'Ethers.js'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub Actions', 'Linux', 'Postman', 'Pest / PHPUnit', 'VS Code'],
  },
]

export const projects = [
  {
    title: 'MFMS — Municipal Finance',
    description:
      'Finance management for pourashavas: expense vouchers, cheque preparation and issuance with receiver receipts, cheque register, and permission-protected sector codes.',
    tags: ['Laravel 13', 'Inertia', 'Vue 3'],
    live: '',
    code: '',
    featured: true,
  },
  {
    title: 'CantonFlow',
    description:
      'Multi-tenant cantonment board platform with domain-based tenancy. I built electricity shop & meter management, unit-price billing, demand charges, and PDF bills & vouchers.',
    tags: ['Laravel', 'React 19', 'Tenancy'],
    live: '',
    code: '',
    featured: true,
  },
  {
    title: 'Water Bill — e-Pourashava',
    description:
      'Municipal water billing system. Added billing edit with due-period handling and tax calculation, outstanding & due-customer reports, demand collection reports, and dashboard summaries.',
    tags: ['Laravel', 'Inertia', 'Vue 3'],
    live: '',
    code: '',
  },
  {
    title: 'Waste Management',
    description:
      'Multi-pourashava waste management platform with a central admin panel, unified roles & permissions, and division → ward → locality setup.',
    tags: ['Laravel 13', 'Vue 3', 'shadcn-vue'],
    live: '',
    code: '',
  },
  {
    title: 'NERP — Company ERP',
    description:
      'Internal ERP for Nhimex Software. Built employee and department management, form validation, and a flash messaging system with safe DB transactions.',
    tags: ['Laravel 12', 'Inertia', 'Vue 3'],
    live: '',
    code: '',
  },
  {
    title: 'Sales Dashboard',
    description:
      'Interactive sales analytics dashboard turning raw transaction data into clear business insights.',
    tags: ['SQL', 'Power BI', 'Excel'],
    live: '',
    code: '',
  },
]

export const experience = [
  {
    role: 'Junior Software Engineer',
    company: 'Nhimex Software',
    period: '2026 — Present',
    points: [
      'Build features across e-Pourashava municipal products — water billing, finance (MFMS) and waste management.',
      'Develop billing, reporting and PDF voucher modules for CantonFlow, a multi-tenant cantonment board platform.',
      'Work with Laravel, Inertia, Vue 3 and React in a pull-request based team workflow with automated tests.',
    ],
  },
  {
    role: 'BE in Computer Science & Engineering',
    company: 'Chandigarh University',
    period: 'Education',
    points: [
      'Focused on web development, databases, data analytics and machine learning.',
      'Completed Metacrafters Solidity & JavaScript Web3 assessments (ERC token, smart contract error handling, NFT collection).',
    ],
  },
]
