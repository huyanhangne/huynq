import React from 'react';
import { ThemeMode, Language } from '../types';
import { ABOUT_ME, ACADEMIC_PILLARS, MILESTONES, PROFILE_INFO } from '../data/profileData';
import { 
  Terminal, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Award, 
  HeartHandshake,
  CheckCircle,
  Quote
} from 'lucide-react';

interface AboutProps {
  theme: ThemeMode;
  lang: Language;
  avatarUrl?: string;
  onOpenAvatarModal?: () => void;
}

export const About: React.FC<AboutProps> = ({ 
  theme, 
  lang, 
  avatarUrl, 
  onOpenAvatarModal 
}) => {
  const isDark = theme === 'dark';

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-300 relative ${
        isDark ? 'bg-[#080d14] text-slate-100' : 'bg-white text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-mono uppercase tracking-widest font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'VỀ TÔI & TRIẾT LÝ SƯ PHẠM' : 'ABOUT ME & PEDAGOGY'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {lang === 'vi' ? 'Giới Thiệu Bản Thân' : 'About Me'}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-black'}`}>
            {lang === 'vi'
              ? 'Tận tâm trong từng bài giảng, nghiêm túc trong từng công trình nghiên cứu và luôn mở lòng đồng hành cùng người học.'
              : 'Dedicated in every lecture, rigorous in academic research, and deeply empathetic in mentoring students.'}
          </p>
        </div>

        {/* Main Narrative Card: 200-300 words Sincere, Professional & Approachable */}
        <div className={`relative rounded-xl p-8 sm:p-10 border transition-all mb-16 shadow-2xl ${
          isDark 
            ? 'bg-[#0a1018]/90 border-white/10 shadow-black/40' 
            : 'bg-white border-slate-200 shadow-slate-200/40'
        }`}>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            
            {/* Left Narrative Text (200-300 words) */}
            <div className="lg:w-8/12 space-y-5">
              <div className="flex items-center gap-3">
                <Quote className={`w-8 h-8 ${isDark ? 'text-blue-500/40' : 'text-blue-600'}`} />
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-blue-600">
                  {lang === 'vi' ? 'Thông điệp từ Giảng viên' : 'A Word from the Lecturer'}
                </span>
              </div>

              {/* Formatted Paragraphs */}
              <div className={`space-y-4 text-base sm:text-lg leading-relaxed text-justify ${
                isDark ? 'text-slate-300' : 'text-black'
              }`}>
                {(lang === 'vi' ? ABOUT_ME.introVi : ABOUT_ME.introEn)
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p key={index} className="first-letter:text-2xl first-letter:font-bold first-letter:text-blue-600">
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Signature / Motto */}
              <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}>
                <div className="flex items-center gap-3">
                  {avatarUrl ? (
                    <div 
                      onClick={onOpenAvatarModal}
                      className="w-10 h-10 rounded-lg overflow-hidden border border-blue-500/30 shadow-sm shrink-0 cursor-pointer hover:scale-105 transition-transform"
                      title={lang === 'vi' ? 'Bấm để đổi ảnh' : 'Change avatar'}
                    >
                      <img src={avatarUrl} alt={PROFILE_INFO.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold text-sm">
                      QH
                    </div>
                  )}
                  <div>
                    <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-black'}`}>{PROFILE_INFO.name}</div>
                    <div className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-black font-medium'}`}>
                      {lang === 'vi' ? 'Giảng viên & Nhà nghiên cứu' : 'Lecturer & Academic Researcher'}
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  {lang === 'vi' ? '🌱 Giáo dục vị nhân sinh' : '🌱 Human-centric Pedagogy'}
                </div>
              </div>
            </div>

            {/* Right Fast Facts / Pillars Summary */}
            <div className={`lg:w-4/12 w-full p-6 rounded-lg border space-y-4 ${
              isDark ? 'bg-[#05070a] border-white/10' : 'bg-white border-slate-200'
            }`}>
              <h3 className="font-bold text-base flex items-center gap-2 text-blue-400">
                <GraduationCap className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-widest">{lang === 'vi' ? 'Hồ Sơ Năng Lực' : 'Academic Profile'}</span>
              </h3>

              <ul className="space-y-3.5 text-xs">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>{lang === 'vi' ? '3+ Năm Giảng Dạy ĐH (Khoa CNTT):' : '3+ Years University Lecturing:'}</strong>
                    <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {lang === 'vi' ? 'Chuyên ngành CNTT (Java Spring MVC, OOP, Flutter, Khai phá dữ liệu).' : 'IT Major: Java Spring MVC, OOP, Flutter, Data Mining & AI.'}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>{lang === 'vi' ? 'Khai Phá Dữ Liệu & AI Ứng Dụng:' : 'Data Mining & Applied AI:'}</strong>
                    <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {lang === 'vi' ? 'Mục tiêu Nghiên cứu sinh (Prospective PhD Researcher).' : 'Doctoral research focus on Data Mining & Applied Machine Learning.'}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>{lang === 'vi' ? 'VB2 Ngôn Ngữ Anh (2024 - 2026):' : '2nd Degree English (2024 - 2026):'}</strong>
                    <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {lang === 'vi' ? 'Nâng cao năng lực diễn ngôn & hội nhập học thuật quốc tế.' : 'Synthesizing technical logic with linguistic nuance & international research.'}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>{lang === 'vi' ? 'ThS CNTT (2021 - 2024):' : 'M.Sc. in IT (2021 - 2024):'}</strong>
                    <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                      {lang === 'vi' ? 'Thạc sĩ Công nghệ Thông tin, xử lý dữ liệu và thuật toán thông minh.' : 'Master of Science in Information Technology, intelligent computing.'}
                    </p>
                  </div>
                </li>
              </ul>

              <div className={`pt-3 mt-3 border-t text-[11px] font-mono ${isDark ? 'text-slate-400 border-white/10' : 'text-slate-500 border-slate-200'}`}>
                📍 {lang === 'vi' ? 'Trường Đại học Công nghệ / Khoa CNTT' : 'University Faculty of IT'}
              </div>
            </div>

          </div>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">
            {lang === 'vi' ? 'Ba Trụ Cột Trong Tư Duy & Hành Động' : 'Three Pillars of Thought & Action'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACADEMIC_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#0a1018]/80 border-white/10 hover:border-white/20 hover:bg-[#0d131f]'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${pillar.highlightColor} text-white flex items-center justify-center mb-5 shadow-lg`}>
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="font-bold text-lg mb-1">
                  {lang === 'vi' ? pillar.titleVi : pillar.titleEn}
                </h4>
                <p className="text-xs font-mono text-blue-400 mb-3 font-semibold uppercase tracking-wider">
                  {lang === 'vi' ? pillar.subtitleVi : pillar.subtitleEn}
                </p>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {lang === 'vi' ? pillar.descriptionVi : pillar.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-center">
            {lang === 'vi' ? 'Hành Trình Học Thuật & Giảng Dạy' : 'Academic & Professional Journey'}
          </h3>

          <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 space-y-8 my-8">
            {MILESTONES.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#080d14] group-hover:scale-125 transition-transform" />

                <div className={`p-5 rounded-lg border transition-all ${
                  isDark 
                    ? 'bg-[#0a1018]/90 border-white/10 group-hover:border-blue-500/50' 
                    : 'bg-white border-slate-200 group-hover:border-blue-400'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {item.year}
                    </span>
                    {item.badge && (
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-bold text-base sm:text-lg mb-1">
                    {lang === 'vi' ? item.roleVi : item.roleEn}
                  </h4>
                  <div className={`text-xs font-medium mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {lang === 'vi' ? item.organizationVi : item.organizationEn}
                  </div>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {lang === 'vi' ? item.descriptionVi : item.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
