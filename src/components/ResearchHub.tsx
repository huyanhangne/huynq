import React, { useState } from 'react';
import { ThemeMode, Language } from '../types';
import { RESEARCH_ITEMS } from '../data/profileData';
import { 
  Brain, 
  FlaskConical, 
  ExternalLink,
  BookOpen,
  Share2,
  FileCheck2
} from 'lucide-react';

interface ResearchHubProps {
  theme: ThemeMode;
  lang: Language;
}

export const ResearchHub: React.FC<ResearchHubProps> = ({ theme, lang }) => {
  const isDark = theme === 'dark';
  const [activeExperimentTab, setActiveExperimentTab] = useState<'socratic' | 'metaphor'>('socratic');

  const paper = RESEARCH_ITEMS[0];

  return (
    <section
      id="research"
      className={`py-24 transition-colors duration-300 relative ${
        isDark ? 'bg-[#05070a] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-mono uppercase tracking-widest font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'KHAI PHÁ DỮ LIỆU & CÔNG TRÌNH HỌC THUẬT' : 'DATA MINING & SCIENTIFIC PUBLICATIONS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {lang === 'vi' ? 'Công Trình Nghiên Cứu Khoa Học' : 'Scientific Research & Publications'}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-black'}`}>
            {lang === 'vi'
              ? 'Tập trung chuyên sâu vào các thuật toán Khai phá dữ liệu (Data Mining), khai thác tập mẫu hữu ích và Trí tuệ Nhân tạo ứng dụng.'
              : 'Focused on Data Mining algorithms, pattern mining optimization, and applied artificial intelligence.'}
          </p>
        </div>

        {/* Featured Research Publication Card */}
        <div className="mb-16">
          <div className={`p-6 sm:p-10 rounded-2xl border transition-all shadow-xl ${
            isDark 
              ? 'bg-[#0a1018]/95 border-white/10 shadow-black/40' 
              : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
            <div className="space-y-6">
              
              {/* Header tags & badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-sm bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase tracking-wider">
                    {lang === 'vi' ? paper.typeVi : paper.typeEn}
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-sm bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    Năm {paper.year}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-emerald-500 font-semibold flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4" />
                    {lang === 'vi' ? paper.statusVi : paper.statusEn}
                  </span>
                </div>
              </div>

              {/* Title & Author Info */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {lang === 'vi' ? paper.titleVi : paper.titleEn}
                </h3>
                <p className={`text-xs sm:text-sm font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {lang === 'vi' ? 'Tác giả: ThS. Nguyễn Quang Huy (Khoa Công nghệ Thông tin)' : 'Author: M.Sc. Nguyen Quang Huy (Faculty of Information Technology)'}
                </p>
              </div>

              {/* Abstract Section */}
              <div className={`p-5 sm:p-6 rounded-xl border ${
                isDark ? 'bg-[#05070a]/90 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-blue-500 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{lang === 'vi' ? 'Tóm tắt công trình (Abstract):' : 'Research Abstract:'}</span>
                </h4>
                <p className={`text-sm sm:text-base leading-relaxed text-justify ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  {lang === 'vi' ? paper.abstractVi : paper.abstractEn}
                </p>
              </div>

              {/* Keywords & Action Link */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-4 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-500 mr-1 uppercase tracking-wider">Từ khóa:</span>
                  {paper.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-xs font-mono px-2.5 py-1 rounded-sm ${
                        isDark ? 'bg-white/5 text-slate-300 border border-white/10' : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 shrink-0"
                  >
                    <span>{lang === 'vi' ? 'Xem bài báo trên ResearchGate' : 'View on ResearchGate'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Interactive Interdisciplinary Experiment Sandbox */}
        <div className={`rounded-xl border p-6 sm:p-8 shadow-2xl ${
          isDark 
            ? 'bg-[#0a1018]/90 border-white/10 shadow-black/40' 
            : 'bg-gradient-to-b from-white to-slate-50 border-slate-200'
        }`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1">
                <Brain className="w-4 h-4" />
                <span>{lang === 'vi' ? 'Phương Pháp Giảng Dạy & Tiếp Cận Đa Ngành' : 'Interdisciplinary Pedagogy Sandbox'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                {lang === 'vi' ? 'Tư Duy Socratic & Ẩn Dụ Ngôn Ngữ Trong CNTT' : 'Socratic Tutoring & Linguistic Metaphor Bridges'}
              </h3>
            </div>

            {/* Sandbox switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveExperimentTab('socratic')}
                className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  activeExperimentTab === 'socratic'
                    ? 'bg-blue-600 text-white shadow-md'
                    : isDark
                    ? 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                    : 'bg-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                {lang === 'vi' ? 'Trợ Lý Socratic AI' : 'Socratic AI Tutoring'}
              </button>
              <button
                onClick={() => setActiveExperimentTab('metaphor')}
                className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  activeExperimentTab === 'metaphor'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : isDark
                    ? 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                    : 'bg-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                {lang === 'vi' ? 'Cầu Nối Ngôn Ngữ Học (VB2)' : 'Linguistic Metaphors'}
              </button>
            </div>
          </div>

          {/* Sandbox content */}
          <div className="pt-6">
            {activeExperimentTab === 'socratic' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Traditional AI (Lazy answer) */}
                <div className={`p-5 rounded-lg border ${
                  isDark ? 'bg-[#05070a] border-red-500/20' : 'bg-red-50/50 border-red-200'
                }`}>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-red-400 mb-3 uppercase tracking-wider">
                    <span>❌ AI Truyền thống (Sao chép lời giải)</span>
                    <span>Tư duy thụ động</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p className={`font-mono p-2.5 rounded border ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                      <strong>Sinh viên:</strong> "Code của em bị NullPointerException ở dòng 24, sửa hộ em với!"
                    </p>
                    <p className={`font-mono p-2.5 rounded border ${isDark ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-red-100/70 border-red-200 text-red-800'}`}>
                      <strong>AI thông thường:</strong> "Đây là code đã sửa: thay dòng 24 bằng if(user != null) {'{...}'}. Hãy copy vào là chạy được ngay."
                    </p>
                    <p className={`text-[11px] italic pt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      → Hậu quả: Sinh viên không hiểu tại sao biến bị null, mất cơ hội rèn luyện tư duy debug.
                    </p>
                  </div>
                </div>

                {/* Socratic AI Tutor (Research Focus) */}
                <div className={`p-5 rounded-lg border ${
                  isDark ? 'bg-[#05070a] border-emerald-500/30' : 'bg-emerald-50/50 border-emerald-200'
                }`}>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-400 mb-3 uppercase tracking-wider">
                    <span>✨ Mô hình Socratic AI (Định hướng sư phạm)</span>
                    <span>Tư duy phản biện +35%</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p className={`font-mono p-2.5 rounded border ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                      <strong>Sinh viên:</strong> "Code của em bị NullPointerException ở dòng 24, sửa hộ em với!"
                    </p>
                    <p className={`font-mono p-2.5 rounded border border-emerald-500/30 ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-100/70 text-emerald-900'}`}>
                      <strong>Socratic AI Tutor:</strong> "Thầy thấy đối tượng 'user' được gọi ở dòng 24. Trước đó tại hàm findById(), em đã kiểm tra trường hợp Database không tìm thấy bản ghi chưa? Giá trị trả về lúc đó sẽ là gì?"
                    </p>
                    <p className={`text-[11px] text-emerald-400 font-semibold pt-1 font-mono`}>
                      → Kết quả: Sinh viên tự phát hiện nguyên nhân gốc, hiểu sâu về Optional trong Java và ghi nhớ lâu bền.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={`p-5 rounded-lg border ${isDark ? 'bg-[#05070a] border-white/10' : 'bg-white border-slate-200'}`}>
                  <div className="font-mono text-xs text-blue-400 font-bold mb-2 uppercase tracking-wider">01. Interface trong OOP</div>
                  <h4 className="font-bold text-sm mb-2">Ẩn dụ "Bản Hợp Đồng Pháp Lý"</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Thay vì định nghĩa trừu tượng, vận dụng ngôn ngữ học so sánh Interface như một bản hợp đồng: Bên ký (Class) bắt buộc phải thực thi tất cả điều khoản (Methods), giúp người học hiểu rõ tính chuẩn tắc.
                  </p>
                </div>

                <div className={`p-5 rounded-lg border ${isDark ? 'bg-[#05070a] border-white/10' : 'bg-white border-slate-200'}`}>
                  <div className="font-mono text-xs text-emerald-400 font-bold mb-2 uppercase tracking-wider">02. Polymorphism (Đa hình)</div>
                  <h4 className="font-bold text-sm mb-2">Ẩn dụ "Ngữ Cảnh Giao Tiếp"</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Giống như một từ có nghĩa khác nhau tùy vào ngữ cảnh (Pragmatics in Linguistics), một lời gọi hàm `speak()` sẽ có hành vi khác nhau tùy đối tượng thực thể (Dog/Cat/Human) được truyền vào.
                  </p>
                </div>

                <div className={`p-5 rounded-lg border ${isDark ? 'bg-[#05070a] border-white/10' : 'bg-white border-slate-200'}`}>
                  <div className="font-mono text-xs text-cyan-400 font-bold mb-2 uppercase tracking-wider">03. Asynchronous / Coroutine</div>
                  <h4 className="font-bold text-sm mb-2">Ẩn dụ "Hội Thoại Nhiều Luồng"</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Giải thích `async/await` qua mô hình nhân viên bồi bàn nhận order và chuyển vào bếp mà không cần đứng đợi, chuyển tiếp phục vụ bàn khác giống như Event Loop trong Node.js / Dart.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
