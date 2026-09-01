import type { ImageMetadata } from 'astro';
import angular from '../assets/icons/skills/angular.svg';
import astro from '../assets/icons/skills/astro.svg';
import aws from '../assets/icons/skills/aws.svg';
import chi from '../assets/icons/skills/chi.svg';
import docker from '../assets/icons/skills/docker.svg';
import expressJs from '../assets/icons/skills/express-js.svg';
import fiber from '../assets/icons/skills/fiber.svg';
import gcp from '../assets/icons/skills/gcp.svg';
import go from '../assets/icons/skills/go.svg';
import java from '../assets/icons/skills/java.svg';
import javascript from '../assets/icons/skills/javascript.svg';
import kubernetes from '../assets/icons/skills/kubernetes.svg';
import mongo from '../assets/icons/skills/mongo.svg';
import mysql from '../assets/icons/skills/mysql.svg';
import nestJs from '../assets/icons/skills/nest-js.svg';
import nodeJs from '../assets/icons/skills/node-js.svg';
import python from '../assets/icons/skills/python.svg';
import react from '../assets/icons/skills/react.svg';
import solidJs from '../assets/icons/skills/solid-js.svg';
import springBoot from '../assets/icons/skills/spring-boot.svg';
import typescript from '../assets/icons/skills/typescript.svg';
import vue from '../assets/icons/skills/vue.svg';

export interface Skill {
  name: string;
  icon: ImageMetadata;
  iconSize?: 20 | 24;
  fetchPriority?: 'high' | 'low';
  topics?: string[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'JavaScript',
        icon: javascript,
        iconSize: 20,
        fetchPriority: 'high'
      },
      {
        name: 'TypeScript',
        icon: typescript,
        iconSize: 20,
        fetchPriority: 'high'
      },
      { name: 'Go', icon: go, fetchPriority: 'high' },
      { name: 'Python', icon: python },
      { name: 'Java', icon: java }
    ]
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'Angular', icon: angular, fetchPriority: 'low' },
      { name: 'Vue.js', icon: vue, fetchPriority: 'low' },
      { name: 'React', icon: react, fetchPriority: 'low' },
      { name: 'Solid.js', icon: solidJs, fetchPriority: 'low' },
      { name: 'Astro', icon: astro, fetchPriority: 'low' }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: nodeJs, fetchPriority: 'low' },
      { name: 'Express.js', icon: expressJs, fetchPriority: 'low' },
      {
        name: 'Nest.js',
        icon: nestJs,
        fetchPriority: 'low',
        topics: ['NestJS']
      },
      {
        name: 'Java / Spring Boot',
        icon: springBoot,
        fetchPriority: 'low',
        topics: ['Spring Boot']
      },
      {
        name: 'Go / Fiber',
        icon: fiber,
        fetchPriority: 'low',
        topics: ['Fiber']
      },
      {
        name: 'Go / Chi',
        icon: chi,
        fetchPriority: 'low',
        topics: ['Chi']
      }
    ]
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', icon: docker, fetchPriority: 'low' },
      { name: 'Kubernetes', icon: kubernetes, fetchPriority: 'low' },
      { name: 'AWS', icon: aws, fetchPriority: 'low' },
      { name: 'GCP', icon: gcp, fetchPriority: 'low' }
    ]
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MySQL', icon: mysql, fetchPriority: 'low' },
      { name: 'MongoDB', icon: mongo, fetchPriority: 'low' }
    ]
  }
];

export const skillTopics = skillCategories.flatMap(category =>
  category.skills.flatMap(skill => skill.topics ?? [skill.name])
);
