import type { PersonalInfo, Stat, TechCategory, ExperienceEntry, Project, Education } from './types'

export const personal: PersonalInfo = {
  name: 'Bruno Gnoatto',
  title: 'Senior Back-End Developer',
  tagline: 'Precision back-end engineering, built to scale.',
  email: 'bgnoatto@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bgnoatto/',
  github: 'https://github.com/bgnoatto',
  location: 'Argentina · Remote',
}

export const stats: Stat[] = [
  { value: '10+', label: 'Years Experience' },
  { value: '6', label: 'Companies' },
  { value: '1', label: 'National Scale System' },
  { value: '100%', label: 'Remote Ready' },
]

export const techStack: TechCategory[] = [
  {
    category: 'Backend',
    items: [
      { name: 'Java', iconSlug: 'java', dots: 5 },
      { name: 'Spring Boot', iconSlug: 'springboot', dots: 5 },
      { name: 'Node.js', iconSlug: 'nodedotjs', dots: 4 },
      { name: 'REST APIs', iconSlug: 'openapiinitiative', dots: 5 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', iconSlug: 'docker', dots: 4 },
      { name: 'Kubernetes', iconSlug: 'kubernetes', dots: 4 },
      { name: 'Git', iconSlug: 'git', dots: 5 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', iconSlug: 'mysql', dots: 4 },
      { name: 'SQL Server', iconSlug: 'microsoftsqlserver', dots: 4 },
      { name: 'PostgreSQL', iconSlug: 'postgresql', dots: 4 },
    ],
  },
]

export const experience: ExperienceEntry[] = [
  {
    company: 'NSSA S.A.',
    role: 'Back-End Developer · Technical Leader',
    period: 'Apr 2022 – Present',
    isCurrent: true,
    bullets: [
      "Led technical development of Argentina's national SUBE recharge system.",
      'Spearheaded migration of legacy components to Java Spring Boot microservices.',
      'Improved developer onboarding, reducing ramp-up time by 40%.',
      'Delivered biweekly production releases under Scrum.',
    ],
  },
  {
    company: 'NeuralSoft S.A.',
    role: 'Software Developer & Analyst',
    period: 'Jun 2019 – Mar 2022',
    isCurrent: false,
    bullets: [
      'Maintained and extended a proprietary ERP system using Java and PostgreSQL.',
      'Enhanced and supported internal systems using REST APIs.',
      'Led implementation, documentation, and training for in-house solutions.',
    ],
  },
  {
    company: 'Municipality of Santa Fe',
    role: 'Software Developer & Analyst',
    period: 'Apr 2018 – May 2019',
    isCurrent: false,
    bullets: [
      'Modernized municipal systems through RESTful services and UI enhancements.',
      'Integrated and maintained tax and cadastral systems for government operations.',
      'Practiced Agile methodologies and code versioning using Git.',
    ],
  },
  {
    company: 'CARSA S.A. – ACERCAR A.C.E.',
    role: 'Back-End Developer & Analyst',
    period: 'Apr 2015 – May 2018',
    isCurrent: false,
    bullets: [
      'Delivered critical enterprise solutions: inventory systems, online billing, MRP tools.',
      'Developed back-end services using Java, Spring Boot, Node.js, and REST APIs.',
      'Worked on front-end features with Angular 2 and TypeScript.',
    ],
  },
  {
    company: 'Ministry of Government and State Reform',
    role: 'Technical Support & Developer',
    period: 'Feb 2014 – Jan 2015',
    isCurrent: false,
    bullets: [
      'Supported and maintained applications for judicial reform and healthcare services.',
      'Used Java, Swing, REST/SOAP APIs, and Eclipse IDE.',
    ],
  },
  {
    company: 'PRECISSION S.R.L.',
    role: 'iOS Game Developer & Software Engineer',
    period: 'Mar 2011 – Jan 2014',
    isCurrent: false,
    bullets: [
      'Built and released mobile games using Unity 3D and C#.',
      'Developed a production management system using Silverlight and MVVM.',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'SUBE Recharge System',
    type: 'Professional · Flagship',
    stack: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'Kubernetes'],
    description:
      "Argentina's national public transport recharge system. Led backend architecture and migration from legacy systems to scalable Spring Boot microservices.",
    link: 'https://www.linkedin.com/in/bgnoatto/',
    flagship: true,
  },
  {
    title: 'Notification Challenge',
    type: 'Personal · Backend',
    stack: ['Spring Boot 3.5', 'Kafka', 'PostgreSQL', 'JWT', 'Testcontainers', 'CircleCI'],
    description:
      'Production-ready microservice for user management and async notification dispatch via Kafka. Includes JWT auth, full test coverage with Testcontainers, and CI/CD pipeline.',
    repo: 'https://github.com/bgnoatto/notification-challenge',
  },
  {
    title: 'Notification Challenge Web',
    type: 'Personal · Frontend',
    stack: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Docker'],
    description:
      'User portal built with Next.js 16 App Router and Server Components. JWT auth via httpOnly cookies, real-time notification management dashboard.',
    repo: 'https://github.com/bgnoatto/notification-challenge-web',
  },
]

export const education: Education = {
  degree: "Bachelor's Degree in Systems Engineering",
  institution: 'National Technological University (UTN)',
  location: 'Santa Fe, Argentina',
  years: '2003 – 2018',
}
