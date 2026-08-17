import React from 'react';
import { ThemeMode, Language } from '../types';
import { PROFILE_INFO, ABOUT_ME, MILESTONES, COURSES, RESEARCH_ITEMS } from '../data/profileData';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  Mail, 
  MapPin, 
  GraduationCap, 
  CheckCircle, 
  BookOpen,
  Award,
  ExternalLink
} from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
  lang: Language;
  avatarUrl?: string;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, theme, lang, avatarUrl }) => {
  if (!isOpen) return null;
  const isDark = theme === 'dark';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-xl border shadow-2xl flex flex-col overflow-hidden ${
          isDark ? 'bg-[#0a1018] border-white/10 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
        }`}
      >
        {/* Modal Top Controls Bar */}
        <div className={`p-4 border-b flex items-center justify-between shrink-0 ${
          isDark ? 'bg-[#05070a] border-white/10' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-500" />
            <span className="font-bold text-sm font-mono">
              {lang === 'vi' ? 'SƠ YẾU LÝ LỊCH HỌC THUẬT (ACADEMIC CV)' : 'ACADEMIC CURRICULUM VITAE'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono font-semibold border transition-all cursor-pointer ${
                isDark ? 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-200' : 'border-slate-300 bg-white hover:bg-slate-100'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'In / Lưu PDF' : 'Print / Save PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-sm border transition-all cursor-pointer ${
                isDark ? 'border-white/10 hover:bg-white/10 text-slate-400 hover:text-white' : 'border-slate-300 hover:bg-slate-100 text-slate-600'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable / Viewable CV Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans print:p-0 print:text-black">
          
          {/* Header Identity */}
          <div className={`border-b pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}>
            <div className="flex items-center gap-4">
              {avatarUrl && (
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-blue-500/40 shrink-0 shadow-md">
                  <img src={avatarUrl} alt={PROFILE_INFO.name} className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {PROFILE_INFO.name}
                </h1>
                <p className="text-blue-500 font-mono text-sm font-semibold mt-0.5">
                  {lang === 'vi' ? 'Giảng viên Chuyên ngành Công nghệ Thông tin • ThS CNTT (2021 - 2024)' : 'Lecturer in IT • M.Sc. in IT (2021 - 2024)'}
                </p>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'vi' ? 'Mục tiêu Nghiên cứu sinh (Data Mining & AI Ứng dụng) • VB2 Ngôn ngữ Anh (2024 - 2026)' : 'Prospective PhD Candidate (Data Mining & Applied AI) • 2nd Degree in English (2024 - 2026)'}
                </p>
              </div>
            </div>

            <div className={`text-xs font-mono space-y-1 sm:text-right ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <div>Email: {PROFILE_INFO.email}</div>
              <div>Địa chỉ: {PROFILE_INFO.locationVi}</div>
              <div>Lĩnh vực: IT, Data Mining & Applied AI</div>
            </div>
          </div>

          {/* About & Mission */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'vi' ? '1. TÓM TẮT TIỂU SỬ & ĐỊNH HƯỚNG' : '1. BIOGRAPHY & MISSION'}</span>
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-justify text-slate-300">
              {lang === 'vi' ? ABOUT_ME.introVi : ABOUT_ME.introEn}
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'vi' ? '2. QUÁ TRÌNH ĐÀO TẠO & HỌC VỊ' : '2. EDUCATION & ACADEMIC DEGREES'}</span>
            </h2>
            <div className="space-y-3">
              {MILESTONES.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm gap-4 border-l-2 border-blue-500/60 pl-3">
                  <div>
                    <div className="font-bold">{lang === 'vi' ? item.roleVi : item.roleEn}</div>
                    <div className="text-slate-400 text-xs">{lang === 'vi' ? item.organizationVi : item.organizationEn}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{lang === 'vi' ? item.descriptionVi : item.descriptionEn}</div>
                  </div>
                  <div className="font-mono text-xs font-semibold shrink-0 text-blue-400">
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teaching Repertoire */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>{lang === 'vi' ? '3. CÁC HỌC PHẦN GIẢNG DẠY CHÍNH (3+ NĂM KINH NGHIỆM)' : '3. TEACHING PORTFOLIO (3+ YEARS)'}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {COURSES.map((c) => (
                <div key={c.id} className={`p-3 rounded-lg border ${isDark ? 'bg-[#05070a] border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="font-bold text-blue-400">{c.code}: {lang === 'vi' ? c.titleVi : c.titleEn}</div>
                  <div className="text-slate-400 text-[11px] mt-1">{c.studentsCount} • {c.duration}</div>
                  <div className="text-slate-400 text-[11px] mt-1">Tech: {c.techStack.slice(0, 4).join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Publications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>{lang === 'vi' ? '4. NGHIÊN CỨU KHOA HỌC & CÔNG BỐ' : '4. RESEARCH & PUBLICATIONS'}</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {RESEARCH_ITEMS.map((r) => (
                <div key={r.id} className="border-l-2 border-emerald-500/60 pl-3">
                  <div className="font-bold flex items-center justify-between gap-2 flex-wrap">
                    <span>{lang === 'vi' ? r.titleVi : r.titleEn}</span>
                    {r.link && (
                      <a 
                        href={r.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 font-mono hover:underline inline-flex items-center gap-1"
                      >
                        <span>ResearchGate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div className="text-xs text-emerald-400 font-mono">{r.year} • {lang === 'vi' ? r.typeVi : r.typeEn}</div>
                  <div className="text-xs text-slate-400 mt-1">{lang === 'vi' ? r.abstractVi : r.abstractEn}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
