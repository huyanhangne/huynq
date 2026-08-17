import React from 'react';
import { ThemeMode, Language } from '../types';
import { PROFILE_INFO } from '../data/profileData';
import { HeroAbstractCanvas } from './HeroAbstractCanvas';
import { 
  Terminal, 
  Sparkles, 
  BookOpen, 
  ArrowRight, 
  Mail, 
  FileText, 
  GraduationCap, 
  CheckCircle2, 
  Code, 
  Cpu, 
  Layers,
  Camera
} from 'lucide-react';

interface HeroProps {
  theme: ThemeMode;
  lang: Language;
  avatarUrl?: string;
  onOpenCV: () => void;
  onOpenAvatarModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  theme, 
  lang, 
  avatarUrl, 
  onOpenCV,
  onOpenAvatarModal 
}) => {
  const isDark = theme === 'dark';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className={`relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-gradient-to-b from-[#05070a] via-[#080d14] to-[#05070a] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Abstract generative neural + code + linguistic canvas backdrop */}
      <HeroAbstractCanvas theme={theme} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Main Hero Content (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Academic & Interdisciplinary Tag */}
            <div className={`inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-md border text-[10px] sm:text-[11px] font-mono uppercase tracking-widest backdrop-blur-md transition-all ${
              isDark ? 'border-white/10 bg-white/5 text-slate-300' : 'border-slate-300 bg-white text-black shadow-xs'
            }`}>
              <span className={`inline-flex items-center gap-1.5 font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                <GraduationCap className="w-3.5 h-3.5" />
                {lang === 'vi' ? 'Giảng viên CNTT' : 'IT Lecturer'}
              </span>
              <span className={isDark ? 'text-white/20' : 'text-slate-400'}>•</span>
              <span className={`inline-flex items-center gap-1 font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                <Cpu className="w-3.5 h-3.5" />
                {lang === 'vi' ? 'Data Mining & AI Ứng Dụng' : 'Data Mining & Applied AI'}
              </span>
              <span className={isDark ? 'text-white/20' : 'text-slate-400'}>•</span>
              <span className={`inline-flex items-center gap-1 font-medium ${isDark ? 'text-slate-400' : 'text-black'}`}>
                <BookOpen className="w-3.5 h-3.5" />
                {lang === 'vi' ? 'VB2 Ngôn ngữ Anh (2024-2026)' : '2nd Deg. English (2024-2026)'}
              </span>
            </div>

            {/* Main Headline & Identity */}
            <div className="space-y-2.5 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15]">
                <span className={isDark ? 'text-white' : 'text-black'}>
                  {PROFILE_INFO.name}
                </span>
              </h1>
              <p className={`text-base sm:text-xl font-medium leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-black'
              }`}>
                {lang === 'vi' ? (
                  <>
                    Kết nối <span className="text-blue-600 font-bold">Tư duy Kỹ thuật</span> với{' '}
                    <span className="text-emerald-600 font-bold">Sức mạnh AI</span> và{' '}
                    <span className="text-cyan-600 font-bold">Sự thấu hiểu Ngôn ngữ</span>
                  </>
                ) : (
                  <>
                    Bridging <span className="text-blue-600 font-bold">Computational Logic</span> with{' '}
                    <span className="text-emerald-600 font-bold">AI Intelligence</span> &{' '}
                    <span className="text-cyan-600 font-bold">Linguistic Empathy</span>
                  </>
                )}
              </p>
            </div>

            {/* Core Teaching & Research Overview Pill */}
            <div className={`p-4 sm:p-5 rounded-lg border backdrop-blur-sm transition-all ${
              isDark 
                ? 'bg-[#0d131f]/80 border-white/10 text-slate-300 shadow-xl' 
                : 'bg-white border-slate-200 text-black shadow-sm'
            }`}>
              <p className="text-xs sm:text-sm sm:leading-relaxed leading-normal">
                {lang === 'vi' ? (
                  <>
                    Hơn <strong>3 năm kinh nghiệm giảng dạy</strong> đại học các học phần{' '}
                    <span className="font-mono text-[11px] sm:text-xs px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 font-semibold border border-blue-500/20">Java Spring MVC</span>,{' '}
                    <span className="font-mono text-[11px] sm:text-xs px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20">OOP</span>,{' '}
                    <span className="font-mono text-[11px] sm:text-xs px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 font-semibold border border-indigo-500/20">Flutter</span> và{' '}
                    <span className="font-mono text-[11px] sm:text-xs px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-500 font-semibold border border-cyan-500/20">AI Ứng dụng</span>.{' '}
                    Tận tâm truyền thụ tư duy lập trình chuẩn mực và đồng hành cùng sinh viên hội nhập toàn cầu.
                  </>
                ) : (
                  <>
                    Over <strong>3 years lecturing</strong> university courses in{' '}
                    <span className="font-mono text-[11px] sm:text-xs px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 font-semibold border border-blue-500/20">Java Spring MVC</span>,{' '}
                    <span className="font-mono text-[11px] sm:text-xs px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20">OOP</span>,{' '}
                    <span className="font-mono text-[11px] sm:text-xs px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 font-semibold border border-indigo-500/20">Flutter</span>, and{' '}
                    <span className="font-mono text-[11px] sm:text-xs px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-500 font-semibold border border-cyan-500/20">Applied AI</span>.{' '}
                    Committed to software craftsmanship, pedagogical innovation, and international student mentorship.
                  </>
                )}
              </p>
            </div>

            {/* Action Buttons (Full width on mobile for easy tapping) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                id="hero-explore-btn"
                onClick={() => scrollTo('teaching')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 active:scale-95 transition-all cursor-pointer min-h-[44px]"
              >
                <span>{lang === 'vi' ? 'Khám phá Giảng dạy & Dự án' : 'Explore Courses & Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cv-btn"
                onClick={onOpenCV}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-sm font-semibold text-xs uppercase tracking-wider border transition-all cursor-pointer active:scale-95 min-h-[44px] ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:border-white/20'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                }`}
              >
                <FileText className="w-4 h-4 text-blue-500" />
                <span>{lang === 'vi' ? 'Tải Academic CV' : 'Download Academic CV'}</span>
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollTo('contact')}
                className={`inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-sm font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer min-h-[44px] ${
                  isDark
                    ? 'text-slate-400 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>{lang === 'vi' ? 'Liên hệ & Hợp tác' : 'Get in Touch'}</span>
              </button>
            </div>

            {/* Quick Metrics Bar (Responsive 2x2 on small, 4x1 on md+) */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3 border-t ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <div className={`p-3 rounded-lg border text-center sm:text-left ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200 shadow-xs'}`}>
                <div className="text-xl sm:text-2xl font-bold font-mono text-blue-500">3+</div>
                <div className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'vi' ? 'Năm Giảng dạy' : 'Years Teaching'}
                </div>
              </div>
              <div className={`p-3 rounded-lg border text-center sm:text-left ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200 shadow-xs'}`}>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-500">1,500+</div>
                <div className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'vi' ? 'Sinh viên' : 'Students'}
                </div>
              </div>
              <div className={`p-3 rounded-lg border text-center sm:text-left ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200 shadow-xs'}`}>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-500">4+</div>
                <div className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'vi' ? 'Học phần' : 'Core Courses'}
                </div>
              </div>
              <div className={`p-3 rounded-lg border text-center sm:text-left ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200 shadow-xs'}`}>
                <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-500">100%</div>
                <div className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'vi' ? 'Tận tâm' : 'Mentorship'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Profile Card (Right 5 cols) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md relative">
              
              {/* Outer glowing frame */}
              <div className={`relative rounded-xl p-5 sm:p-6 border backdrop-blur-xl transition-all shadow-2xl ${
                isDark 
                  ? 'bg-[#0a1018]/90 border-white/10 shadow-black/60' 
                  : 'bg-white border-slate-200 shadow-slate-200/80'
              }`}>
                
                {/* Visual Header / Avatar Banner */}
                <div className={`flex items-center gap-4 pb-5 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                  
                  {/* Clickable Avatar Photo with Camera Badge */}
                  <div className="relative group shrink-0">
                    <div 
                      onClick={onOpenAvatarModal}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 p-[2px] shadow-xl overflow-hidden cursor-pointer group-hover:scale-105 transition-transform"
                      title={lang === 'vi' ? 'Bấm để đổi ảnh Avatar' : 'Click to change avatar'}
                    >
                      {avatarUrl ? (
                        <img
                          src={avatarUrl}
                          alt={PROFILE_INFO.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover rounded-[10px]"
                        />
                      ) : (
                        <div className={`w-full h-full rounded-[10px] flex flex-col items-center justify-center font-mono font-bold ${
                          isDark ? 'bg-[#05070a] text-blue-400' : 'bg-slate-50 text-blue-600'
                        }`}>
                          <span className="text-2xl tracking-tighter">NQH</span>
                          <span className="text-[10px] text-emerald-400 font-normal">M.Sc.</span>
                        </div>
                      )}
                      
                      {/* Hover Camera Overlay */}
                      {onOpenAvatarModal && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-[10px] font-mono transition-opacity rounded-xl">
                          <Camera className="w-5 h-5 mb-0.5 text-blue-400" />
                          <span>{lang === 'vi' ? 'Đổi ảnh' : 'Edit'}</span>
                        </div>
                      )}
                    </div>

                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-[#05070a] flex items-center justify-center text-[10px] text-white shadow-md">
                      ✓
                    </span>
                  </div>

                  {/* Profile info */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-bold text-base sm:text-lg truncate">{PROFILE_INFO.name}</h3>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20 font-bold">
                        {lang === 'vi' ? 'ThS CNTT 2021-2024' : 'M.Sc. in IT 2021-2024'}
                      </span>
                    </div>
                    <p className={`text-xs font-medium mt-0.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      {lang === 'vi' ? 'Giảng viên Chuyên ngành Công nghệ Thông tin' : 'Lecturer in Information Technology'}
                    </p>
                    <p className={`text-[11px] font-mono mt-1 truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {PROFILE_INFO.email}
                    </p>

                    {onOpenAvatarModal && (
                      <button
                        onClick={onOpenAvatarModal}
                        className={`mt-2 inline-flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded border transition-all cursor-pointer ${
                          isDark
                            ? 'border-white/10 bg-white/5 text-slate-300 hover:text-blue-400 hover:border-blue-500/40'
                            : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-blue-600'
                        }`}
                      >
                        <Camera className="w-3 h-3 text-blue-500" />
                        <span>{lang === 'vi' ? 'Thay đổi ảnh' : 'Change photo'}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Academic Highlights Checklist */}
                <div className="py-4 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs leading-relaxed">
                    <div className="p-1 rounded-md bg-blue-500/10 text-blue-500 border border-blue-500/20 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-semibold">{lang === 'vi' ? 'Chuyên ngành CNTT & Giảng dạy:' : 'IT Specialization & Lecturing:'}</span>{' '}
                      <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                        Java Spring MVC/Boot, Web Development, OOP, Flutter Mobile, Data Mining & AI.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs leading-relaxed">
                    <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-semibold">{lang === 'vi' ? 'Nghiên cứu & Mục tiêu NCS:' : 'Research Focus (Prospective PhD):'}</span>{' '}
                      <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                        {lang === 'vi' ? 'Khai phá dữ liệu (Data Mining) và Trí tuệ Nhân tạo ứng dụng (Applied AI).' : 'Data Mining paradigms & Applied Artificial Intelligence algorithms.'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs leading-relaxed">
                    <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-semibold">{lang === 'vi' ? 'Học vấn & Ngôn ngữ:' : 'Education & Linguistics:'}</span>{' '}
                      <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                        {lang === 'vi' ? 'Thạc sĩ CNTT (2021 - 2024) & Văn bằng 2 Ngôn ngữ Anh (2024 - 2026).' : 'M.Sc. in IT (2021 - 2024) & 2nd Degree in English Linguistics (2024 - 2026).'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mini Code Syntax Card Snippet */}
                <div className={`rounded-lg p-3 font-mono text-[11px] border leading-relaxed ${
                  isDark ? 'bg-[#05070a] border-white/10 text-slate-300' : 'bg-slate-900 border-slate-800 text-slate-200 shadow-xs'
                }`}>
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-slate-500 text-[10px]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      <span className="ml-1 text-slate-400">EducatorIdentity.java</span>
                    </span>
                    <span>Java 21</span>
                  </div>
                  <div className="text-emerald-400">@Component</div>
                  <div><span className="text-blue-400">public class</span> <span className="text-amber-300">LecturerHuy</span> {'{'}</div>
                  <div className="pl-3 text-slate-400">// Bridge logic, AI and human empathy</div>
                  <div className="pl-3"><span className="text-blue-400">Philosophy</span> vision = <span className="text-blue-400">new</span> Philosophy(</div>
                  <div className="pl-6 text-cyan-300">"Logic" <span className="text-slate-400">∩</span> "AI" <span className="text-slate-400">∩</span> "Linguistics"</div>
                  <div className="pl-3">);</div>
                  <div>{'}'}</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
