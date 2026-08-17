import React, { useState } from 'react';
import { ThemeMode, Language } from '../types';
import { PROFILE_INFO } from '../data/profileData';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Calendar, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  Github, 
  Linkedin, 
  GraduationCap, 
  Clock, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { InteractiveChatbot } from './InteractiveChatbot';

interface ContactProps {
  theme: ThemeMode;
  lang: Language;
  avatarUrl?: string;
}

export const Contact: React.FC<ContactProps> = ({ theme, lang, avatarUrl }) => {
  const isDark = theme === 'dark';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'thesis',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const [sendMethod, setSendMethod] = useState<'mailto' | 'gmail'>('mailto');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getPurposeLabel = (p: string) => {
    switch (p) {
      case 'thesis': return lang === 'vi' ? 'Đăng ký Hướng dẫn Đồ án / Khóa luận' : 'Thesis Supervision';
      case 'research': return lang === 'vi' ? 'Hợp tác Nghiên cứu Khoa học (Data Mining & AI)' : 'Research Collaboration';
      case 'teaching': return lang === 'vi' ? 'Trao đổi về Môn học & Bài giảng' : 'Course & Teaching Inquiry';
      case 'guest_lecture': return lang === 'vi' ? 'Mời Giảng dạy / Workshop doanh nghiệp' : 'Guest Lecture / Workshop';
      default: return lang === 'vi' ? 'Liên hệ chung' : 'General Inquiry';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const emailSubject = `[Liên hệ Portfolio - ${getPurposeLabel(formData.purpose)}] ${formData.subject || formData.name}`;
    const emailBody = `Kính gửi ThS. Nguyễn Quang Huy,\n\nTôi là: ${formData.name}\nEmail liên hệ: ${formData.email}\nMục đích: ${getPurposeLabel(formData.purpose)}\n\nNội dung chi tiết:\n${formData.message}\n\nTrân trọng,\n${formData.name}`;

    if (sendMethod === 'gmail') {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE_INFO.email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    } else {
      const mailtoUrl = `mailto:${PROFILE_INFO.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-300 relative ${
        isDark ? 'bg-[#080d14] text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-mono uppercase tracking-widest font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'KẾT NỐI & HỢP TÁC' : 'CONTACT & COLLABORATION'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {lang === 'vi' ? 'Liên Hệ & Trao Đổi Học Thuật' : 'Get in Touch & Academic Collaboration'}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-black'}`}>
            {lang === 'vi'
              ? 'Luôn sẵn lòng đón nhận câu hỏi từ sinh viên, đề xuất nghiên cứu từ đồng nghiệp và cơ hội hợp tác đào tạo.'
              : 'Always receptive to student inquiries, research collaboration proposals, and visiting lectures.'}
          </p>
        </div>

        {/* Top Grid: Info & Chatbot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Contact Channels & Office Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className={`p-6 rounded-xl border transition-all ${
              isDark ? 'bg-[#0a1018]/90 border-white/10' : 'bg-slate-50 border-slate-200 shadow-xs'
            }`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono border transition-all cursor-pointer ${
                    copiedEmail
                      ? 'bg-emerald-500 text-white border-emerald-500'
                      : isDark
                      ? 'border-white/10 bg-white/5 text-slate-300 hover:text-white'
                      : 'border-slate-300 bg-white text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? (lang === 'vi' ? 'Đã sao chép' : 'Copied') : (lang === 'vi' ? 'Sao chép Email' : 'Copy Email')}</span>
                </button>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-base">{lang === 'vi' ? 'Email Chính Thức' : 'Official Email'}</h4>
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="font-mono text-sm sm:text-base font-semibold text-blue-400 hover:underline block break-all"
                >
                  {PROFILE_INFO.email}
                </a>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'vi' ? 'Phản hồi trong vòng 24 - 48 giờ làm việc' : 'Expected response within 24-48 business hours'}
                </p>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className={`p-6 rounded-xl border ${
              isDark ? 'bg-[#0a1018]/90 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">
                    {lang === 'vi' ? 'Giờ Tiếp Sinh Viên (Office Hours)' : 'Faculty Office Hours'}
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {lang === 'vi' ? 'Gặp trực tiếp hoặc qua Google Meet' : 'In-person or via Google Meet'}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className={`p-2.5 rounded-lg border flex justify-between ${
                  isDark ? 'bg-[#05070a] border-white/10' : 'bg-white border-slate-200'
                }`}>
                  <span className="font-semibold">{lang === 'vi' ? 'Thứ Ba hàng tuần:' : 'Tuesdays:'}</span>
                  <span className="text-emerald-400">14:00 - 16:30</span>
                </div>
                <div className={`p-2.5 rounded-lg border flex justify-between ${
                  isDark ? 'bg-[#05070a] border-white/10' : 'bg-white border-slate-200'
                }`}>
                  <span className="font-semibold">{lang === 'vi' ? 'Thứ Năm hàng tuần:' : 'Thursdays:'}</span>
                  <span className="text-emerald-400">09:00 - 11:30</span>
                </div>
              </div>

              <p className={`text-[11px] mt-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {lang === 'vi'
                  ? '* Sinh viên vui lòng gửi email đặt lịch hẹn trước ít nhất 1 ngày để thầy sắp xếp phòng làm việc chu đáo.'
                  : '* Please email at least 24 hours in advance to schedule an appointment.'}
              </p>
            </div>

            {/* Academic Profiles Links */}
            <div className={`p-6 rounded-xl border ${
              isDark ? 'bg-[#0a1018]/90 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <h4 className="font-bold text-sm mb-4 font-mono uppercase tracking-wider">
                {lang === 'vi' ? 'Mạng Lưới Học Thuật & Mã Nguồn' : 'Academic Networks & Profiles'}
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2 transition-all ${
                    isDark
                      ? 'bg-[#05070a] border-white/10 hover:border-blue-500/50 text-slate-200'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <Github className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold">GitHub</span>
                </a>

                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2 transition-all ${
                    isDark
                      ? 'bg-[#05070a] border-white/10 hover:border-blue-500/50 text-slate-200'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold">LinkedIn</span>
                </a>

                <a
                  href={PROFILE_INFO.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2 transition-all ${
                    isDark
                      ? 'bg-[#05070a] border-white/10 hover:border-blue-500/50 text-slate-200'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold">Scholar</span>
                </a>

                <a
                  href={PROFILE_INFO.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border flex items-center gap-2 transition-all ${
                    isDark
                      ? 'bg-[#05070a] border-white/10 hover:border-blue-500/50 text-slate-200'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="font-semibold">ResearchGate</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Virtual Academic Chatbot + Interactive Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Chatbot */}
            <InteractiveChatbot theme={theme} lang={lang} />

            {/* Direct Message Form */}
            <div className={`p-6 sm:p-8 rounded-xl border ${
              isDark ? 'bg-[#0a1018]/90 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <h4 className="font-bold text-base">
                    {lang === 'vi' ? 'Gửi Lời Nhắn Trực Tiếp Đến Email Thầy Huy' : 'Send Direct Message to MSc. Huy'}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSendMethod('mailto')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                      sendMethod === 'mailto'
                        ? 'bg-blue-600 text-white font-bold'
                        : isDark ? 'bg-white/5 text-slate-400 hover:text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    Email App
                  </button>
                  <button
                    type="button"
                    onClick={() => setSendMethod('gmail')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono flex items-center gap-1 transition-all ${
                      sendMethod === 'gmail'
                        ? 'bg-red-600 text-white font-bold'
                        : isDark ? 'bg-white/5 text-slate-400 hover:text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>Web Gmail</span>
                  </button>
                </div>
              </div>

              {submitted ? (
                <div className="p-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h5 className="font-bold text-base text-emerald-400">
                    {lang === 'vi' ? 'Đã khởi tạo thư gửi đến ngquanghuy595@gmail.com!' : 'Email created to ngquanghuy595@gmail.com!'}
                  </h5>
                  <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {lang === 'vi'
                      ? 'Trình soạn thảo thư đã được điền sẵn nội dung. Bạn chỉ cần nhấn nút "Send" (Gửi) trên ứng dụng thư để hoàn tất.'
                      : 'Your email draft is ready. Simply hit Send in your email client/Gmail to dispatch.'}
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded text-xs font-mono bg-blue-600 hover:bg-blue-500 text-white font-bold"
                    >
                      {lang === 'vi' ? 'Gửi tin nhắn khác' : 'Send another inquiry'}
                    </button>
                    <a
                      href={`mailto:${PROFILE_INFO.email}`}
                      className={`px-4 py-2 rounded text-xs font-mono border flex items-center gap-1 ${
                        isDark ? 'border-white/20 text-slate-300 hover:text-white' : 'border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>Mở lại Email</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium mb-1.5">
                        {lang === 'vi' ? 'Họ và tên người gửi *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'vi' ? 'VD: Nguyễn Văn An' : 'e.g. Alex Johnson'}
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                          isDark ? 'bg-[#05070a] border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium mb-1.5">
                        {lang === 'vi' ? 'Email phản hồi của bạn *' : 'Your Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                          isDark ? 'bg-[#05070a] border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium mb-1.5">
                        {lang === 'vi' ? 'Mục đích liên hệ' : 'Inquiry Purpose'}
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                          isDark ? 'bg-[#05070a] border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="thesis">{lang === 'vi' ? 'Đăng ký Hướng dẫn Đồ án / Khóa luận' : 'Thesis Supervision'}</option>
                        <option value="research">{lang === 'vi' ? 'Hợp tác Nghiên cứu Khoa học (Data Mining & AI)' : 'Research Collaboration'}</option>
                        <option value="teaching">{lang === 'vi' ? 'Trao đổi về Môn học & Bài giảng' : 'Course & Teaching Inquiry'}</option>
                        <option value="guest_lecture">{lang === 'vi' ? 'Mời Giảng dạy / Workshop doanh nghiệp' : 'Guest Lecture / Workshop'}</option>
                        <option value="other">{lang === 'vi' ? 'Mục đích khác' : 'Other'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium mb-1.5">
                        {lang === 'vi' ? 'Tiêu đề thư' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={lang === 'vi' ? 'VD: Đăng ký đồ án môn Java Spring' : 'e.g. Spring Boot thesis proposal'}
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                          isDark ? 'bg-[#05070a] border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium mb-1.5">
                      {lang === 'vi' ? 'Nội dung trao đổi chi tiết *' : 'Message Details *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'vi' ? 'Nhập chi tiết nội dung bạn muốn gửi tới ThS. Nguyễn Quang Huy...' : 'Your message details...'}
                      className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                        isDark ? 'bg-[#05070a] border-white/10 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{lang === 'vi' ? 'Gửi Tới: ngquanghuy595@gmail.com' : 'Send to: ngquanghuy595@gmail.com'}</span>
                    </button>

                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE_INFO.email)}&su=${encodeURIComponent('[Liên hệ trực tiếp] ThS. Nguyễn Quang Huy')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`py-3 px-4 rounded-lg font-mono text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                        isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200' : 'bg-white border-slate-300 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <span>Mở Gmail Ngay</span>
                      <ExternalLink className="w-3.5 h-3.5 text-red-500" />
                    </a>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
