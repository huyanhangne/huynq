import React, { useState, useEffect } from 'react';
import { ThemeMode, Language } from '../types';
import { 
  Sun, 
  Moon, 
  Globe, 
  FileText, 
  Menu, 
  X, 
  GraduationCap, 
  Sparkles,
  BookOpen,
  Mail,
  Code2,
  Camera,
  Layers,
  FlaskConical,
  User
} from 'lucide-react';

interface NavbarProps {
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  lang: Language;
  setLang: (l: Language) => void;
  avatarUrl?: string;
  onOpenCV: () => void;
  onOpenAvatarModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  setTheme,
  lang,
  setLang,
  avatarUrl,
  onOpenCV,
  onOpenAvatarModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'teaching', 'research', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', labelVi: 'Giới thiệu', labelEn: 'About', icon: User },
    { id: 'skills', labelVi: 'Kỹ năng', labelEn: 'Skills', icon: Code2 },
    { id: 'teaching', labelVi: 'Giảng dạy & Dự án', labelEn: 'Teaching & Projects', icon: GraduationCap },
    { id: 'research', labelVi: 'Nghiên cứu Đa ngành', labelEn: 'Research Hub', icon: FlaskConical },
    { id: 'contact', labelVi: 'Liên hệ', labelEn: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#05070a]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/60'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm shadow-slate-200/50'
          : isDark
          ? 'bg-[#05070a]/60 backdrop-blur-sm'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              id="nav-logo-btn"
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer"
            >
              {avatarUrl ? (
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg p-[1.5px] bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 shadow-md group-hover:scale-105 transition-transform overflow-hidden">
                    <img
                      src={avatarUrl}
                      alt="ThS. Nguyễn Quang Huy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-[6.5px]"
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border border-white dark:border-slate-900" />
                </div>
              ) : (
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 p-[1.5px] shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className={`w-full h-full rounded-[6.5px] flex items-center justify-center font-mono font-bold text-xs ${isDark ? 'bg-[#05070a] text-blue-400' : 'bg-white text-blue-600'}`}>
                    QH
                  </div>
                </div>
              )}

              <div>
                <div className={`font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-black'}`}>
                  <span className="font-mono tracking-tight text-blue-600 font-bold">Huy Nguyen, MSc.</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className={`text-[9px] sm:text-[10px] font-mono tracking-widest uppercase truncate max-w-[140px] sm:max-w-none font-medium ${isDark ? 'text-slate-400' : 'text-black'}`}>
                  {lang === 'vi' ? 'Khoa Công Nghệ Thông Tin' : 'Faculty of Information Technology'}
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-1.5 rounded-sm text-xs uppercase tracking-widest font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'text-blue-400 bg-blue-500/10 border-b-2 border-blue-500'
                        : 'text-blue-600 bg-blue-50 border-b-2 border-blue-600 font-bold'
                      : isDark
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {lang === 'vi' ? link.labelVi : link.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Right Action Utilities (Desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Avatar Change CTA (Desktop) - Icon only */}
            {onOpenAvatarModal && (
              <button
                id="change-avatar-btn"
                onClick={onOpenAvatarModal}
                className={`p-2 rounded-sm border transition-all cursor-pointer ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-blue-400 hover:text-white hover:border-blue-500/50 hover:bg-white/10'
                    : 'border-slate-200 bg-slate-50 text-blue-600 hover:text-blue-700 hover:border-slate-300 hover:bg-slate-100'
                }`}
                title={lang === 'vi' ? 'Đổi ảnh đại diện (Avatar)' : 'Change profile avatar'}
                aria-label={lang === 'vi' ? 'Đổi ảnh đại diện' : 'Change avatar'}
              >
                <Camera className="w-4 h-4" />
              </button>
            )}

            {/* Language Toggle */}
            <button
              id="lang-toggle-btn"
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-[11px] font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                isDark
                  ? 'border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 hover:border-slate-300'
              }`}
              title={lang === 'vi' ? 'Chuyển sang tiếng Anh' : 'Switch to Vietnamese'}
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>{lang === 'vi' ? 'EN' : 'VI'}</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-sm border transition-all cursor-pointer ${
                isDark
                  ? 'border-white/10 bg-white/5 text-amber-300 hover:border-white/20 hover:bg-white/10'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
              }`}
              title={isDark ? 'Chuyển sang Chế độ Sáng (Light Mode)' : 'Chuyển sang Chế độ Tối (Dark Mode)'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CV Modal Action */}
            <button
              id="open-cv-btn"
              onClick={onOpenCV}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-widest bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20 active:scale-95 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-1.5">
            {/* Quick Light/Dark Mode Switcher on mobile */}
            <button
              id="mobile-theme-btn"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-md border min-w-[40px] min-h-[40px] flex items-center justify-center transition-all ${
                isDark ? 'border-white/10 bg-white/5 text-amber-300' : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Language Toggle */}
            <button
              onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
              className={`px-2.5 py-2 rounded-md border text-xs font-mono font-bold min-h-[40px] flex items-center justify-center ${
                isDark ? 'border-white/10 bg-white/5 text-blue-400' : 'border-slate-200 bg-slate-50 text-blue-600'
              }`}
            >
              {lang === 'vi' ? 'EN' : 'VI'}
            </button>

            {/* Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md border min-w-[44px] min-h-[44px] flex items-center justify-center transition-all ${
                isDark ? 'border-white/10 bg-white/5 text-slate-200' : 'border-slate-200 bg-slate-50 text-slate-800'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`lg:hidden border-b px-4 py-4 max-h-[85vh] overflow-y-auto transition-all animate-in slide-in-from-top-2 duration-200 shadow-2xl ${
            isDark ? 'bg-[#0a1018] border-white/10 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Mobile Profile Card in Drawer */}
          <div className={`p-3 rounded-lg border mb-3 flex items-center justify-between ${
            isDark ? 'bg-[#05070a] border-white/10' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              {avatarUrl && (
                <div className="w-11 h-11 rounded-lg overflow-hidden border border-blue-500/30 shrink-0">
                  <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <div className="font-bold text-xs text-blue-500">Huy Nguyen, MSc.</div>
                <div className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'vi' ? 'Giảng viên CNTT • ThS CNTT (2021-2024)' : 'Lecturer in IT • M.Sc. in IT (2021-2024)'}
                </div>
              </div>
            </div>

            {onOpenAvatarModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAvatarModal();
                }}
                className={`p-2 rounded-sm border flex items-center justify-center transition-all ${
                  isDark ? 'border-white/10 bg-white/5 text-blue-400' : 'border-slate-200 bg-white text-blue-600'
                }`}
                title={lang === 'vi' ? 'Đổi avatar' : 'Change avatar'}
                aria-label={lang === 'vi' ? 'Đổi avatar' : 'Change avatar'}
              >
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Navigation Links List */}
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-3.5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-3 min-h-[44px] transition-all ${
                    isActive
                      ? isDark
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-blue-600 text-white font-bold'
                      : isDark
                      ? 'text-slate-300 hover:bg-white/5'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-80" />
                  <span>{lang === 'vi' ? link.labelVi : link.labelEn}</span>
                </button>
              );
            })}

            {/* Mobile Actions Drawer Bottom */}
            <div className={`pt-3 mt-2 border-t flex flex-col gap-2 ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-sm text-xs font-bold font-mono uppercase tracking-wider bg-blue-600 text-white shadow-md min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Xem & In Academic CV' : 'View & Print Academic CV'}</span>
              </button>

              <div className="flex items-center justify-between gap-2 text-xs font-mono pt-1 text-center">
                <span className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'vi' ? 'Chế độ hiển thị:' : 'Theme Mode:'}
                </span>
                <span className={`text-[11px] font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

