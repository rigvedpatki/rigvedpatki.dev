export type OrganizationId =
  'cohesity' | 'veritas' | 'ecozen' | 'advinans' | 'tallbird' | 'accenture';

export interface Organization {
  name: string;
  location: string;
  legalName?: string;
}

export interface DateRange {
  label: string;
  start: `${number}-${number}`;
  end: `${number}-${number}` | null;
}

export interface Role {
  id: RoleId;
  organizationId: OrganizationId;
  title: string;
  period: DateRange;
  summary: string;
  outcomes: string[];
}

export type RoleId =
  | 'cohesity-mts-iii'
  | 'veritas-senior-software-engineer'
  | 'ecozen-full-stack-developer'
  | 'advinans-backend-developer'
  | 'tallbird-full-stack-developer'
  | 'accenture-associate-software-engineer';

export interface Project {
  title: string;
  subtitle: string;
  narrative: string;
  contributions: string[];
  technologies: string[];
}

export interface ProjectGroup {
  roleIds: RoleId[];
  projects: Project[];
}

export const organizations = {
  cohesity: { name: 'Cohesity', legalName: 'Cohesity Inc', location: 'Pune' },
  veritas: { name: 'Veritas Technologies LLC', location: 'Pune' },
  ecozen: { name: 'Ecozen Solutions', location: 'Pune' },
  advinans: { name: 'Advinans', location: 'Stockholm, Sweden' },
  tallbird: { name: 'TallBird Employment Innovations', location: 'Pune' },
  accenture: { name: 'Accenture', location: 'Mumbai' }
} satisfies Record<OrganizationId, Organization>;

export const roles = [
  {
    id: 'cohesity-mts-iii',
    organizationId: 'cohesity',
    title: 'Member of Technical Staff III',
    period: {
      label: 'December 2024 - Present',
      start: '2024-12',
      end: null
    },
    summary:
      "Leads full-stack product initiatives and team delivery for Cohesity's data management platform following its acquisition of Veritas Technologies.",
    outcomes: [
      'Guides a cross-functional Scrum team of 7 developers through planning and delivery',
      'Architects scalable full-stack features and drives technical decisions for enterprise customers',
      'Mentors engineers while maintaining continuity across the product and organizational transition'
    ]
  },
  {
    id: 'veritas-senior-software-engineer',
    organizationId: 'veritas',
    title: 'Senior Software Engineer',
    period: {
      label: 'August 2020 - December 2024',
      start: '2020-08',
      end: '2024-12'
    },
    summary:
      'Progressed from product delivery into frontend architecture, Scrum leadership, and mentorship for Veritas Appliance products.',
    outcomes: [
      'Led a Scrum team of 7 developers for 2 years, maintaining a 95%+ sprint completion rate',
      'Architected and developed the Angular 12 NetInsights dashboard, providing real-time appliance monitoring to thousands of enterprise customers',
      'Mentored 4 junior developers through reviews, pairing, and architectural discussions; each progressed to a mid-level role',
      'Designed and delivered a customer-facing application end to end, from UX mockups and frontend implementation to backend APIs',
      'Improved dashboard load times by 40% through code splitting, lazy loading, and more efficient state management'
    ]
  },
  {
    id: 'ecozen-full-stack-developer',
    organizationId: 'ecozen',
    title: 'Full Stack Web Developer',
    period: {
      label: 'September 2019 - August 2020',
      start: '2019-09',
      end: '2020-08'
    },
    summary:
      'Owned full-stack delivery of an agricultural IoT monitoring and control platform across multiple farms.',
    outcomes: [
      'Built a Vue.js dashboard with live visualizations for 100+ IoT devices',
      'Designed Node.js and TypeScript APIs handling 10,000+ daily requests with 99.9% uptime',
      'Built an MQTT and MongoDB data pipeline to ingest, validate, and store time-series sensor data',
      'Reduced response time to critical device issues by 60% with scheduled monitoring and email alerts'
    ]
  },
  {
    id: 'advinans-backend-developer',
    organizationId: 'advinans',
    title: 'Backend Developer',
    period: {
      label: 'September 2018 - August 2019',
      start: '2018-09',
      end: '2019-08'
    },
    summary:
      'Automated container deployment workflows on Google Cloud Platform.',
    outcomes: [
      'Reduced deployment time from 30 minutes to 2 minutes with a Slack bot for Docker and Kubernetes releases',
      'Implemented authentication, validation, and orchestration in TypeScript with Google Cloud Functions',
      'Integrated with Google Kubernetes Engine APIs for zero-downtime deployments'
    ]
  },
  {
    id: 'tallbird-full-stack-developer',
    organizationId: 'tallbird',
    title: 'Full Stack Developer',
    period: {
      label: 'January 2018 - August 2018',
      start: '2018-01',
      end: '2018-08'
    },
    summary:
      'Delivered progressive web and serverless products for an early-stage HR technology company.',
    outcomes: [
      'Built a React progressive web app with offline support and push notifications, achieving a 90+ Lighthouse score',
      'Architected a Firebase backend using Cloud Functions and Cloud Firestore for business logic and real-time synchronization',
      'Shipped responsive, accessible interfaces through rapid iteration on user feedback and business requirements'
    ]
  },
  {
    id: 'accenture-associate-software-engineer',
    organizationId: 'accenture',
    title: 'Associate Software Engineer',
    period: {
      label: 'October 2013 - September 2015',
      start: '2013-10',
      end: '2015-09'
    },
    summary: 'Developed and supported SAP ABAP systems for enterprise clients.',
    outcomes: [
      'Built and maintained programs supporting core business processes',
      'Resolved production incidents and optimized SAP batch jobs for processing efficiency',
      'Translated business requirements into technical specifications with functional consultants'
    ]
  }
] satisfies Role[];

export const projectGroups = [
  {
    roleIds: ['cohesity-mts-iii', 'veritas-senior-software-engineer'],
    projects: [
      {
        title: 'System Health Insights',
        subtitle: 'Analytics Dashboard with Frontend Leadership',
        narrative:
          "Enterprise appliance customers needed a clearer view of health across distributed systems. I led the dashboard's frontend architecture, shaping a modular Angular application for real-time monitoring and proactive issue detection.",
        contributions: [
          'Established modular component patterns and frontend coding standards for the team',
          'Implemented interactive visualizations for live system metrics',
          'Designed the interface to remain usable across device types and screen sizes'
        ],
        technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'RESTful APIs']
      },
      {
        title: 'Support Engineer Triage Application',
        subtitle: 'Full-Stack Debugging Platform',
        narrative:
          'Support engineers needed logs, metrics, and diagnostics without moving between disconnected sources. I designed and delivered a unified debugging application from UX mockups through production deployment.',
        contributions: [
          'Built the frontend around rapid access to critical debugging data',
          'Designed backend APIs to aggregate multiple diagnostic sources',
          'Reduced triage effort through automated log parsing and issue classification'
        ],
        technologies: [
          'Angular',
          'Node.js',
          'TypeScript',
          'Express.js',
          'RESTful APIs'
        ]
      },
      {
        title: 'Release Management Automation',
        subtitle: 'CLI Tool for Microservices Deployment',
        narrative:
          'Coordinating releases across 25+ microservices created repetitive work and opportunities for human error. I built a command-line workflow that joined release preparation, deployment, and validation.',
        contributions: [
          'Automated version bumps, changelogs, and dependency updates',
          'Integrated CI/CD pipelines with rollback and validation checks',
          'Reduced release cycle time by 70%'
        ],
        technologies: ['Node.js', 'TypeScript', 'CLI frameworks', 'Git APIs']
      }
    ]
  },
  {
    roleIds: ['ecozen-full-stack-developer'],
    projects: [
      {
        title: 'IoT Analytics Dashboard',
        subtitle: 'Real-Time Monitoring Platform',
        narrative:
          'Farm operators needed one place to monitor device performance, environmental conditions, and operational metrics. I built a responsive Vue.js dashboard for live oversight across multiple farms.',
        contributions: [
          'Visualized live sensor data from 100+ devices',
          'Designed interactions for non-technical farm operators',
          'Surfaced critical device conditions through live alerts'
        ],
        technologies: ['Vue.js', 'JavaScript', 'RESTful APIs', 'WebSockets']
      },
      {
        title: 'MQTT Client & Data Pipeline',
        subtitle: 'IoT Data Processing Solution',
        narrative:
          'Heterogeneous devices produced continuous sensor streams that needed consistent validation and storage. I engineered the ingestion path from MQTT communication through MongoDB persistence.',
        contributions: [
          'Developed MQTT client for real-time device communication',
          'Parsed, validated, and stored sensor data through an ETL pipeline',
          'Added scheduled processing and email alerts for device anomalies'
        ],
        technologies: ['Node.js', 'TypeScript', 'MQTT', 'MongoDB', 'Express.js']
      }
    ]
  },
  {
    roleIds: ['advinans-backend-developer'],
    projects: [
      {
        title: 'Kubernetes Deployment Automation',
        subtitle: 'Slack-Integrated DevOps Bot',
        narrative:
          'Manual container releases took 30 minutes and interrupted the development workflow. I created a Slack bot that authenticated, validated, and orchestrated deployments to Kubernetes.',
        contributions: [
          'Reduced deployment time from 30 minutes to under 2 minutes',
          'Ran deployment logic in TypeScript on Google Cloud Functions',
          'Integrated Google Kubernetes Engine for zero-downtime releases'
        ],
        technologies: [
          'TypeScript',
          'Google Cloud Functions',
          'Kubernetes',
          'Docker',
          'GCP',
          'Slack API'
        ]
      }
    ]
  },
  {
    roleIds: ['tallbird-full-stack-developer'],
    projects: [
      {
        title: 'Progressive Web Application',
        subtitle: 'Modern HR Platform',
        narrative:
          'The HR product needed a reliable app-like experience across devices and network conditions. I designed and built a React progressive web application around offline use and timely updates.',
        contributions: [
          'Achieved 90+ Lighthouse score across performance, accessibility, and best practices',
          'Used service workers and caching strategies for offline support',
          'Added push notifications and a responsive, mobile-first interface'
        ],
        technologies: [
          'React',
          'Service Workers',
          'Web App Manifest',
          'JavaScript'
        ]
      },
      {
        title: 'Serverless Backend Architecture',
        subtitle: 'Firebase-Powered Infrastructure',
        narrative:
          'To support real-time product behavior without traditional server operations, I designed the backend around managed Firebase services and automatic scaling.',
        contributions: [
          'Implemented business logic with Firebase Cloud Functions',
          'Synchronized application data in real time with Cloud Firestore',
          'Designed authentication, authorization, and RESTful endpoints for web and mobile clients'
        ],
        technologies: [
          'Firebase',
          'Cloud Functions',
          'Cloud Firestore',
          'Node.js',
          'JavaScript'
        ]
      }
    ]
  }
] satisfies ProjectGroup[];

export function getRole(roleId: RoleId) {
  const role = roles.find(({ id }) => id === roleId);

  if (!role) {
    throw new Error(`Unknown role: ${roleId}`);
  }

  return role;
}

function assertChronologicalOrder(records: readonly { period: DateRange }[]) {
  records.forEach((record, index) => {
    if (record.period.end && record.period.end < record.period.start) {
      throw new Error(`Invalid date range: ${record.period.label}`);
    }

    const previous = records[index - 1];
    if (previous && previous.period.start < record.period.start) {
      throw new Error('Portfolio records must be ordered newest first.');
    }
  });
}

assertChronologicalOrder(roles);
