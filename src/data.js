// ✏️ Edit this file to update everything on the site.

export const profile = {
  name: 'Sadik Mahmud',
  role: 'Software Engineer',
  focus: ['Full-Stack', 'SaaS', 'Data & ML', 'Web3', 'Modern Web Applications'],
  intro:
    'I design and build scalable web applications and multi-tenant SaaS platforms — from database architecture to polished interfaces. Currently at Nhimex Software, shipping systems used every day by local governments.',
  location: 'Kushtia, Bangladesh',
  email: 'sadikmahmud.devops@gmail.com',
  resume: '', // e.g. '/resume.pdf' (put the file in /public)
  githubUser: 'SadikMahmud2003', // used for avatar + live repos
  available: true, // shows the "Open to opportunities" badge
  socials: {
    github: 'https://github.com/SadikMahmud2003',
    linkedin: 'https://www.linkedin.com/in/sadik-mahmud-873635256',
  },
}

export const about = [
  "I'm a Junior Software Engineer at Nhimex Software and a Computer Science & Engineering graduate of Chandigarh University. I work across the full stack — backend services, databases and modern frontends — on SaaS products that municipal staff use every day to bill citizens, manage budgets and run services.",
  'I care about the parts users never see: sound database design, multi-tenant architecture, clear permissions and tested code. Beyond the web, I work with data analytics, machine learning and smart contracts, and I enjoy picking the right tool for the problem rather than the familiar one.',
]

export const facts = [
  { value: '6+', label: 'Production apps contributed to' },
  { value: '4', label: 'Municipal products shipped on' },
  { value: 'B.E.', label: 'Computer Science & Engineering' },
]

export const principles = [
  ['Understand the workflow first.', 'Billing and finance rules come from real offices — I learn them before writing code.'],
  ['Design the data well.', 'Most features live or die by the schema, so I start there.'],
  ['Ship in small, reviewed steps.', 'Pull requests, automated tests and safe database transactions.'],
]

export const experience = [
  {
    role: 'Junior Software Engineer',
    company: 'Nhimex Software',
    url: '',
    period: '2026 — Present',
    type: 'Full-time',
    summary: 'Full-stack development on e-Pourashava municipal products and the CantonFlow platform.',
    points: [
      'Build features across e-Pourashava products — water billing, finance (MFMS) and waste management.',
      'Develop billing, reporting and PDF voucher modules for CantonFlow, a multi-tenant cantonment board platform.',
      'Work with Laravel, Inertia, Vue 3 and React in a pull-request based workflow with automated tests.',
    ],
    tags: ['Laravel', 'Inertia', 'Vue 3', 'React', 'MySQL'],
  },
]

export const projects = [
  {
    title: 'MFMS — Municipal Finance',
    description:
      'Finance management for pourashavas: expense vouchers, cheque preparation and issuance with receiver receipts, cheque register, and permission-protected sector codes.',
    tags: ['Laravel 13', 'Inertia', 'Vue 3'],
    context: 'Nhimex Software',
    live: '',
    code: '',
  },
  {
    title: 'CantonFlow',
    description:
      'Multi-tenant cantonment board platform with domain-based tenancy. I built electricity shop & meter management, unit-price billing, demand charges, and PDF bills & vouchers.',
    tags: ['Laravel', 'React 19', 'Tenancy'],
    context: 'Nhimex Software',
    live: '',
    code: '',
  },
  {
    title: 'Water Bill — e-Pourashava',
    description:
      'Municipal water billing system. I added billing edits with due-period handling and tax calculation, outstanding and due-customer reports, demand collection reports, and dashboard summaries.',
    tags: ['Laravel', 'Inertia', 'Vue 3'],
    context: 'Nhimex Software',
    live: '',
    code: '',
  },
  {
    title: 'Waste Management',
    description:
      'Multi-pourashava waste management platform with a central admin panel, unified roles & permissions, and division → ward → locality setup.',
    tags: ['Laravel 13', 'Vue 3', 'shadcn-vue'],
    context: 'Nhimex Software',
    live: '',
    code: '',
  },
  {
    title: 'NERP — Company ERP',
    description:
      'Internal ERP for Nhimex Software. I built employee and department management, form validation, and a flash messaging system with safe DB transactions.',
    tags: ['Laravel 12', 'Inertia', 'Vue 3'],
    context: 'Internal tool',
    live: '',
    code: '',
  },
  {
    title: 'Sales Dashboard',
    description:
      'Interactive sales analytics dashboard turning raw transaction data into clear business insights.',
    tags: ['SQL', 'Power BI', 'Excel'],
    context: 'Personal project',
    live: '',
    code: '',
  },
]

export const skills = [
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'REST APIs', 'Multi-tenancy', 'Python', 'Django', 'Java'],
  },
  {
    title: 'Frontend',
    items: ['Vue 3', 'React', 'Inertia.js', 'TypeScript', 'Tailwind CSS', 'shadcn-vue'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'Eloquent ORM', 'Query optimization'],
  },
  {
    title: 'Testing & tools',
    items: ['Pest / PHPUnit', 'Git', 'GitHub Actions', 'Linux', 'Postman'],
  },
  {
    title: 'Data & analytics',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'Power BI', 'Excel'],
  },
  {
    title: 'Web3',
    items: ['Solidity', 'Smart contracts', 'Ethers.js'],
  },
]

export const education = [
  {
    degree: 'B.E. in Computer Science & Engineering',
    school: 'Chandigarh University',
    detail: 'Web development · Databases · Data analytics · Machine learning',
  },
  {
    degree: 'Solidity & JavaScript Web3 assessments',
    school: 'Metacrafters',
    detail: 'ERC token · Smart contract error handling · NFT collection',
  },
]
