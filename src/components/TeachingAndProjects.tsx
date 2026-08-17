import React, { useState } from 'react';
import { ThemeMode, Language, Course, Project } from '../types';
import { COURSES, PROJECTS } from '../data/profileData';
import { 
  GraduationCap, 
  FolderGit2, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Users, 
  ExternalLink, 
  Github, 
  CheckCircle2,
  Code2,
  Layers,
  Sparkles
} from 'lucide-react';

interface TeachingAndProjectsProps {
  theme: ThemeMode;
  lang: Language;
}

export const TeachingAndProjects: React.FC<TeachingAndProjectsProps> = ({ theme, lang }) => {
  const isDark = theme === 'dark';
  const [viewMode, setViewMode] = useState<'courses' | 'projects'>('courses');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(COURSES[0].id);
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<string>('all');

  const toggleCourseExpand = (id: string) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  const filteredProjects = selectedProjectCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedProjectCategory);

  return (
    <section
      id="teaching"
      className={`py-24 transition-colors duration-300 ${
        isDark ? 'bg-[#080d14] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-mono uppercase tracking-widest font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'HOẠT ĐỘNG SƯ PHẠM & DỰ ÁN' : 'TEACHING & PROJECTS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {lang === 'vi' ? 'Giảng Dạy Đại Học & Dự Án Thực Chiến' : 'University Courses & Practical Projects'}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-black'}`}>
            {lang === 'vi'
              ? 'Chương trình giảng dạy chuẩn hóa kết hợp cùng các công trình phần mềm phục vụ đào tạo và nghiên cứu.'
              : 'Standardized curriculum modules coupled with software engineering systems built for education and research.'}
          </p>
        </div>

        {/* View Switcher: Courses vs Projects */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex p-1 rounded-lg border ${
            isDark ? 'bg-[#0a1018] border-white/10' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              id="view-courses-btn"
              onClick={() => setViewMode('courses')}
              className={`flex items-center gap-2 px-5 py-2 rounded-sm text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                viewMode === 'courses'
                  ? 'bg-blue-600 text-white shadow-md'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'Các Môn Giảng Dạy (4 Học Phần)' : 'Academic Courses (4 Modules)'}</span>
            </button>

            <button
              id="view-projects-btn"
              onClick={() => setViewMode('projects')}
              className={`flex items-center gap-2 px-5 py-2 rounded-sm text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                viewMode === 'projects'
                  ? 'bg-blue-600 text-white shadow-md'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'Dự Án Phần Mềm & EdTech' : 'Software & EdTech Projects'}</span>
            </button>
          </div>
        </div>

        {/* COURSES VIEW */}
        {viewMode === 'courses' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {COURSES.map((course) => {
                const isExpanded = expandedCourseId === course.id;
                return (
                  <div
                    key={course.id}
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      isDark
                        ? 'bg-[#0a1018]/90 border-white/10 hover:border-white/20'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Course Header Bar */}
                    <div
                      onClick={() => toggleCourseExpand(course.id)}
                      className="p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer select-none"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="px-2.5 py-1 rounded-sm font-mono text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {course.code}
                          </span>
                          {course.featured && (
                            <span className="px-2 py-0.5 rounded-sm font-mono text-[11px] uppercase tracking-wider font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              {lang === 'vi' ? 'Môn Trọng Tâm' : 'Core Discipline'}
                            </span>
                          )}
                          <span className={`text-xs font-mono flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            <Users className="w-3.5 h-3.5" />
                            {course.studentsCount}
                          </span>
                          <span className={`text-xs font-mono flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            <Clock className="w-3.5 h-3.5" />
                            {course.duration}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                          {lang === 'vi' ? course.titleVi : course.titleEn}
                        </h3>

                        <p className={`text-sm leading-relaxed max-w-4xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          {lang === 'vi' ? course.descriptionVi : course.descriptionEn}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                        <span className="text-xs font-mono font-medium text-blue-400 hidden sm:inline">
                          {isExpanded ? (lang === 'vi' ? 'Thu gọn đề cương' : 'Collapse syllabus') : (lang === 'vi' ? 'Xem chi tiết đề cương' : 'View syllabus')}
                        </span>
                        <div className={`p-2 rounded-sm border ${
                          isDark ? 'border-white/10 text-slate-300 bg-white/5' : 'border-slate-300 text-slate-600'
                        }`}>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className={`px-6 pb-4 pt-0 flex flex-wrap gap-1.5 border-t border-dashed ${
                      isDark ? 'border-white/10' : 'border-slate-200'
                    }`}>
                      <span className={`text-xs font-mono py-1 pr-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Tech Stack:
                      </span>
                      {course.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`text-xs font-mono px-2 py-0.5 rounded-sm ${
                            isDark
                              ? 'bg-white/5 text-slate-300 border border-white/10'
                              : 'bg-white text-slate-700 border border-slate-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Syllabus Breakdown */}
                    {isExpanded && (
                      <div className={`p-6 sm:p-7 border-t transition-all ${
                        isDark ? 'bg-[#05070a] border-white/10' : 'bg-white border-slate-200'
                      }`}>
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2">
                          <Code2 className="w-4 h-4" />
                          <span>{lang === 'vi' ? 'Đề Cương Chi Tiết & Chuẩn Đầu Ra' : 'Detailed Syllabus & Learning Outcomes'}</span>
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {(lang === 'vi' ? course.syllabusVi : course.syllabusEn).map((unit, uIdx) => (
                            <div
                              key={uIdx}
                              className={`p-3 rounded-lg border text-xs sm:text-sm flex items-start gap-3 ${
                                isDark ? 'bg-[#0a1018] border-white/10' : 'bg-slate-50 border-slate-200'
                              }`}
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>
                                {unit}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                            {lang === 'vi'
                              ? '📖 Sinh viên được cung cấp trọn bộ Slides, Code Lab mẫu và Video bài giảng trực quan.'
                              : '📖 Complete slides, lab starter repositories, and video walkthroughs provided to enrolled students.'}
                          </span>
                          <span className="font-mono text-blue-400 font-semibold">
                            {lang === 'vi' ? '✓ Phương pháp Project-based Learning' : '✓ Project-based Learning'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PROJECTS VIEW */}
        {viewMode === 'projects' && (
          <div className="space-y-8">
            {/* Project Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'all', labelVi: 'Tất cả dự án', labelEn: 'All Projects' },
                { id: 'ai', labelVi: 'Trí tuệ Nhân tạo (AI)', labelEn: 'Artificial Intelligence' },
                { id: 'edtech', labelVi: 'Hệ thống Giáo dục (EdTech)', labelEn: 'EdTech Systems' },
                { id: 'software', labelVi: 'Ứng dụng Đa ngữ & Di động', labelEn: 'Multilingual & Mobile' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedProjectCategory(filter.id)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    selectedProjectCategory === filter.id
                      ? 'bg-blue-600 text-white'
                      : isDark
                      ? 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {lang === 'vi' ? filter.labelVi : filter.labelEn}
                </button>
              ))}
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`rounded-xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                    isDark
                      ? 'bg-[#0a1018]/90 border-white/10 hover:border-white/20'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {lang === 'vi' ? project.roleVi : project.roleEn}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold text-emerald-400 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight">
                      {lang === 'vi' ? project.titleVi : project.titleEn}
                    </h3>

                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {lang === 'vi' ? project.descriptionVi : project.descriptionEn}
                    </p>

                    {/* Metrics Box */}
                    {project.metricsVi && (
                      <div className={`p-3 rounded-lg text-xs font-mono border ${
                        isDark ? 'bg-[#05070a] border-white/10 text-emerald-400' : 'bg-white border-slate-200 text-emerald-700'
                      }`}>
                        📈 {lang === 'vi' ? project.metricsVi : project.metricsEn}
                      </div>
                    )}
                  </div>

                  {/* Footer & Tags */}
                  <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-[11px] font-mono px-2 py-0.5 rounded-sm ${
                            isDark ? 'bg-white/5 text-slate-300 border border-white/10' : 'bg-white text-slate-700 border border-slate-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3 text-xs pt-1">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                        {lang === 'vi' ? 'Mã nguồn & Triển khai' : 'Source & Deployment'}
                      </span>
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-blue-400 hover:underline"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
