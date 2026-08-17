export type ThemeMode = 'dark' | 'light';
export type Language = 'vi' | 'en';

export interface Milestone {
  year: string;
  roleVi: string;
  roleEn: string;
  organizationVi: string;
  organizationEn: string;
  descriptionVi: string;
  descriptionEn: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  experience: string;
  descriptionVi: string;
  descriptionEn: string;
  iconName: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  titleVi: string;
  titleEn: string;
  descriptionVi: string;
  descriptionEn: string;
  icon: string;
  skills: SkillItem[];
}

export interface Course {
  id: string;
  code: string;
  titleVi: string;
  titleEn: string;
  studentsCount: string;
  duration: string;
  descriptionVi: string;
  descriptionEn: string;
  techStack: string[];
  syllabusVi: string[];
  syllabusEn: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  titleVi: string;
  titleEn: string;
  category: 'teaching' | 'ai' | 'edtech' | 'software';
  descriptionVi: string;
  descriptionEn: string;
  tags: string[];
  metricsVi?: string;
  metricsEn?: string;
  githubUrl?: string;
  demoUrl?: string;
  roleVi: string;
  roleEn: string;
}

export interface ResearchItem {
  id: string;
  titleVi: string;
  titleEn: string;
  typeVi: string;
  typeEn: string;
  year: string;
  abstractVi: string;
  abstractEn: string;
  statusVi: string;
  statusEn: string;
  tags: string[];
  coAuthorsVi?: string;
  coAuthorsEn?: string;
  link?: string;
}

export interface AcademicPillar {
  titleVi: string;
  titleEn: string;
  subtitleVi: string;
  subtitleEn: string;
  descriptionVi: string;
  descriptionEn: string;
  icon: string;
  highlightColor: string;
}
