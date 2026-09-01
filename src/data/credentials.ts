export type CredentialType = 'Employer training' | 'Course certificate';

export interface Credential {
  title: string;
  issuer: string;
  issued: `${number}-${number}`;
  issuedLabel: string;
  type: CredentialType;
  description: string;
}

export const credentials = [
  {
    title: 'Artificial Intelligence General Awareness',
    issuer: 'Veritas Technologies LLC',
    issued: '2024-04',
    issuedLabel: 'April 2024',
    type: 'Employer training',
    description:
      'Comprehensive overview of AI fundamentals, machine learning concepts, and practical applications in enterprise environments.'
  },
  {
    title: 'Go - The Complete Guide',
    issuer: 'Academind',
    issued: '2024-02',
    issuedLabel: 'February 2024',
    type: 'Course certificate',
    description:
      'Mastered Go programming language fundamentals, concurrency patterns, and building scalable backend services.'
  },
  {
    title: 'Master NestJS - The JavaScript Node.js Framework',
    issuer: 'Udemy',
    issued: '2021-09',
    issuedLabel: 'September 2021',
    type: 'Course certificate',
    description:
      'Advanced training in NestJS framework including dependency injection, modules, middleware, and building enterprise-grade REST APIs.'
  },
  {
    title: 'Angular: Securing Apps',
    issuer: 'LinkedIn',
    issued: '2020-10',
    issuedLabel: 'October 2020',
    type: 'Course certificate',
    description:
      'Best practices for securing Angular applications including authentication, authorization, and protecting against common vulnerabilities.'
  },
  {
    title: 'JavaScript: Security Essentials',
    issuer: 'LinkedIn',
    issued: '2020-10',
    issuedLabel: 'October 2020',
    type: 'Course certificate',
    description:
      'Essential security practices for JavaScript development including XSS prevention, secure coding patterns, and vulnerability mitigation.'
  }
] satisfies Credential[];

credentials.forEach((credential, index) => {
  const previous = credentials[index - 1];
  if (previous && previous.issued < credential.issued) {
    throw new Error('Credentials must be ordered newest first.');
  }
});
