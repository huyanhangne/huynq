import React from 'react';
import { ThemeMode, Language } from '../types';
import { PROFILE_INFO } from '../data/profileData';
import { 
  Heart, 
  ArrowUp, 
  GraduationCap, 
  Github, 
  Linkedin, 
  Mail,
  Code
} from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ theme, lang }) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors duration-300 ${
        isDark ? 'bg-[#05070a] border-white/10 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}>
          
          {/* Brand & Identity */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                QH
              </div>
              <span className={`font-bold text-base tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {PROFILE_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono">
              {lang === 'vi'
                ? 'Giảng viên Chuyên ngành Công nghệ Thông tin • Khai phá Dữ liệu & AI Ứng Dụng'
                : 'Lecturer in Information Technology • Data Mining & Applied AI'}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className={`p-2.5 rounded-sm border transition-all ${
                isDark ? 'border-white/10 bg-white/5 hover:border-blue-500/50 text-slate-300 hover:text-white' : 'border-slate-300 hover:border-blue-500 hover:text-slate-900'
              }`}
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-sm border transition-all ${
                isDark ? 'border-white/10 bg-white/5 hover:border-blue-500/50 text-slate-300 hover:text-white' : 'border-slate-300 hover:border-blue-500 hover:text-slate-900'
              }`}
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-sm border transition-all ${
                isDark ? 'border-white/10 bg-white/5 hover:border-blue-500/50 text-slate-300 hover:text-white' : 'border-slate-300 hover:border-blue-500 hover:text-slate-900'
              }`}
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-sm border transition-all cursor-pointer ${
                isDark ? 'border-white/10 bg-white/5 hover:border-blue-500/50 text-slate-300 hover:text-white' : 'border-slate-300 hover:border-blue-500 hover:text-slate-900'
              }`}
              title={lang === 'vi' ? 'Lên đầu trang' : 'Back to top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} {PROFILE_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>{lang === 'vi' ? 'Học thuật • Công nghệ • Sáng tạo' : 'Academia • Technology • Innovation'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
