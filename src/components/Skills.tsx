import React, { useState } from 'react';
import { ThemeMode, Language } from '../types';
import { SKILL_CATEGORIES } from '../data/profileData';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Brain, 
  Globe, 
  Languages, 
  Cpu, 
  HeartHandshake, 
  Database, 
  Layers, 
  GraduationCap,
  Sparkles,
  Check
} from 'lucide-react';

interface SkillsProps {
  theme: ThemeMode;
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ theme, lang }) => {
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<string>(SKILL_CATEGORIES[0].id);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Code':
        return <Code2 className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Languages':
        return <Languages className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const currentCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section
      id="skills"
      className={`py-24 transition-colors duration-300 ${
        isDark ? 'bg-[#05070a] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-mono uppercase tracking-widest font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'NĂNG LỰC & CHUYÊN MÔN' : 'SKILLS & EXPERTISE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {lang === 'vi' ? 'Hệ Sinh Thái Kỹ Năng & Giảng Dạy' : 'Skill Ecosystem & Teaching Repertoire'}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-black'}`}>
            {lang === 'vi'
              ? 'Tổng hòa giữa kỹ thuật công nghệ chuẩn doanh nghiệp, tư duy ngôn ngữ học và năng lực sư phạm hiện đại.'
              : 'Synthesizing enterprise engineering standards, linguistic analysis, and contemporary pedagogies.'}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className={`inline-flex p-1 rounded-lg border max-w-full overflow-x-auto ${
            isDark ? 'bg-[#0a1018] border-white/10' : 'bg-white border-slate-200 shadow-xs'
          }`}>
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`skill-tab-${cat.id}`}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                      : isDark
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.id === 'teaching' ? <GraduationCap className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                  <span>{lang === 'vi' ? cat.titleVi : cat.titleEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="text-center mb-10">
          <p className={`text-xs font-mono uppercase tracking-wider max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {lang === 'vi' ? currentCategory.descriptionVi : currentCategory.descriptionEn}
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#0a1018]/90 border-white/10 hover:border-white/20 shadow-black/40'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-slate-200/50'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{skill.name}</h3>
                    <span className="text-xs font-mono text-emerald-400 font-medium">
                      {skill.experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-xs sm:text-sm leading-relaxed mb-5 min-h-[50px] ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {lang === 'vi' ? skill.descriptionVi : skill.descriptionEn}
              </p>

              {/* Progress Indicator */}
              <div className="space-y-1.5 mb-4">
                <div className="flex justify-between text-xs font-mono">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                    {lang === 'vi' ? 'Mức độ thông thạo' : 'Proficiency'}
                  </span>
                  <span className="font-semibold text-blue-400">{skill.level}%</span>
                </div>
                <div className={`w-full h-1.5 rounded-full overflow-hidden ${
                  isDark ? 'bg-white/10' : 'bg-slate-200'
                }`}>
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-400 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-sm ${
                      isDark
                        ? 'bg-white/5 text-slate-300 border border-white/10'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Interdisciplinary Quote Box */}
        <div className={`mt-14 p-6 sm:p-8 rounded-xl border text-center max-w-4xl mx-auto ${
          isDark
            ? 'bg-gradient-to-r from-blue-950/30 via-[#0a1018] to-emerald-950/20 border-white/10'
            : 'bg-gradient-to-r from-blue-50 via-slate-50 to-emerald-50 border-blue-200'
        }`}>
          <h4 className="font-mono text-xs uppercase tracking-widest font-bold mb-2 text-blue-400">
            {lang === 'vi' ? '💡 Góc nhìn Sư phạm & Ngôn ngữ' : '💡 Pedagogical & Linguistic Insight'}
          </h4>
          <p className={`text-sm sm:text-base leading-relaxed italic ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {lang === 'vi'
              ? '“Mã nguồn cũng là một ngôn ngữ — ngôn ngữ để con người giao tiếp với máy tính và lập trình viên giao tiếp với nhau. Khi sinh viên hiểu sâu sắc về ngữ nghĩa và cấu trúc ngôn ngữ, các em sẽ viết nên những hệ thống phần mềm mạch lạc, trong sáng và bền vững.”'
              : '“Code is also a language — a formal language for humans to instruct machines and for engineers to communicate with each other. When students grasp semantic depth and linguistic precision, they construct cleaner, more resilient software.”'}
          </p>
        </div>

      </div>
    </section>
  );
};
