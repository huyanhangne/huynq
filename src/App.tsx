import React, { useState, useEffect } from 'react';
import { ThemeMode, Language } from './types';
import { PROFILE_INFO } from './data/profileData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { TeachingAndProjects } from './components/TeachingAndProjects';
import { ResearchHub } from './components/ResearchHub';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { AvatarModal } from './components/AvatarModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('app-theme') as ThemeMode;
    return saved || 'dark'; // Default dark mode
  });

  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app-lang') as Language;
    return saved || 'vi'; // Default Vietnamese
  });

  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    const saved = localStorage.getItem('app-avatar');
    return saved || PROFILE_INFO.defaultAvatar;
  });

  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('app-lang', lang);
  }, [lang]);

  const handleSaveAvatar = (newUrl: string) => {
    setAvatarUrl(newUrl);
    localStorage.setItem('app-avatar', newUrl);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-400 ${
      theme === 'dark' ? 'bg-[#05070a] text-[#e2e8f0]' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navigation Header */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
        avatarUrl={avatarUrl}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenAvatarModal={() => setIsAvatarModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          theme={theme}
          lang={lang}
          avatarUrl={avatarUrl}
          onOpenCV={() => setIsCVOpen(true)}
          onOpenAvatarModal={() => setIsAvatarModalOpen(true)}
        />

        {/* 2. About Me Section */}
        <About
          theme={theme}
          lang={lang}
          avatarUrl={avatarUrl}
          onOpenAvatarModal={() => setIsAvatarModalOpen(true)}
        />

        {/* 3. Skills & Teaching Competencies */}
        <Skills
          theme={theme}
          lang={lang}
        />

        {/* 4. Teaching Courses & Practical Projects */}
        <TeachingAndProjects
          theme={theme}
          lang={lang}
        />

        {/* 5. Interdisciplinary Research Hub */}
        <ResearchHub
          theme={theme}
          lang={lang}
        />

        {/* 6. Contact & Virtual Academic Assistant */}
        <Contact
          theme={theme}
          lang={lang}
          avatarUrl={avatarUrl}
        />
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        lang={lang}
      />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          id="floating-scroll-top-btn"
          onClick={scrollToTop}
          aria-label={lang === 'vi' ? 'Cuộn lên đầu trang' : 'Scroll to top'}
          title={lang === 'vi' ? 'Cuộn lên đầu trang' : 'Scroll to top'}
          className={`fixed bottom-6 right-6 z-40 p-3 rounded-full border shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer flex items-center justify-center ${
            theme === 'dark'
              ? 'bg-[#0a1018]/90 hover:bg-blue-600 text-white border-blue-500/40 hover:border-blue-400 shadow-black/80'
              : 'bg-white hover:bg-blue-600 text-slate-800 hover:text-white border-slate-300 hover:border-blue-600 shadow-slate-400/50'
          }`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        avatarUrl={avatarUrl}
        theme={theme}
        lang={lang}
      />

      {/* Avatar Customization Modal */}
      <AvatarModal
        isOpen={isAvatarModalOpen}
        onClose={() => setIsAvatarModalOpen(false)}
        currentAvatar={avatarUrl}
        onSaveAvatar={handleSaveAvatar}
        theme={theme}
        lang={lang}
      />
    </div>
  );
}
