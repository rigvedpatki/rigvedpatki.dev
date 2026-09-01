import type { DateRange } from './portfolio';

export type InstitutionId =
  'vit' | 'eit-digital' | 'tu-berlin' | 'kth' | 'aalto';

export interface Institution {
  name: string;
  location?: string;
  schemaType: 'EducationalOrganization' | 'CollegeOrUniversity';
}

export interface EducationRecord {
  title: string;
  institutionId: InstitutionId;
  period: DateRange;
  detail?: string;
  projects?: string[];
}

export const institutions: Record<InstitutionId, Institution> = {
  vit: {
    name: 'Vishwakarma Institute of Technology',
    location: 'Pune',
    schemaType: 'EducationalOrganization'
  },
  'eit-digital': {
    name: 'EIT Digital Master School',
    schemaType: 'EducationalOrganization'
  },
  'tu-berlin': {
    name: 'Technische Universität Berlin',
    schemaType: 'CollegeOrUniversity'
  },
  kth: {
    name: 'KTH Royal Institute of Technology',
    location: 'Stockholm',
    schemaType: 'CollegeOrUniversity'
  },
  aalto: {
    name: 'Aalto University',
    location: 'Finland',
    schemaType: 'CollegeOrUniversity'
  }
};

export const education = [
  {
    title: 'Bachelor of Technology (B.Tech) in Information Technology',
    institutionId: 'vit',
    period: { label: 'Aug 2009 - May 2013', start: '2009-08', end: '2013-05' },
    detail: 'Graduated with a CGPA of 7.56 out of 10',
    projects: [
      'IP Address Calculation for Class-full and CIDR IP addressing',
      'Using KNN algorithm in Data minning for a given data set',
      'LogMon - An application for collecting , searching and analyzing log files of all computers in a local area network'
    ]
  },
  {
    title:
      'Master of Science (M.Sc.) in ICT Innovation: Cloud Computing and Services',
    institutionId: 'tu-berlin',
    period: { label: 'Sep 2015 - Apr 2016', start: '2015-09', end: '2016-04' },
    detail: 'In association with EIT Digital Master School',
    projects: [
      'Cloud based Employee Reimbursement Application',
      'JogAir - Application for collecting and displaying pollution data of Germany.',
      'Internet Service Lab - Graphical HATEOAS Representation for REST API Development.'
    ]
  },
  {
    title: 'Summer School EIT Digital',
    institutionId: 'aalto',
    period: { label: 'Jun 2016', start: '2016-06', end: '2016-06' },
    detail: 'In association with EIT Digital Master School'
  },
  {
    title:
      'Master of Science (M.Sc.) in ICT Innovation: Cloud Computing and Services',
    institutionId: 'kth',
    period: { label: 'Aug 2016 - May 2018', start: '2016-08', end: '2018-05' },
    detail: 'In association with EIT Digital Master School',
    projects: ['Swedish Event Management System']
  }
] satisfies EducationRecord[];

education.forEach(({ period }) => {
  if (period.end && period.end < period.start) {
    throw new Error(`Invalid education date range: ${period.label}`);
  }
});
