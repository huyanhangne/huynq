import React, { useState, useRef, useEffect } from 'react';
import { ThemeMode, Language } from '../types';
import { PROFILE_INFO, FAQ_LIST } from '../data/profileData';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  HelpCircle, 
  RotateCcw,
  BookOpen,
  Mail,
  GraduationCap
} from 'lucide-react';

interface InteractiveChatbotProps {
  theme: ThemeMode;
  lang: Language;
}

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const InteractiveChatbot: React.FC<InteractiveChatbotProps> = ({ theme, lang }) => {
  const isDark = theme === 'dark';

  const defaultWelcomeVi = `Xin chào! Tôi là Trợ lý Học thuật Ảo của ThS. Nguyễn Quang Huy. Bạn có thể hỏi tôi về: các môn học Thầy giảng dạy (Java Spring MVC, Flutter, OOP, AI), định hướng nghiên cứu Tiến sĩ, lợi thế từ Văn bằng 2 Ngôn ngữ Anh, hoặc cách đăng ký hướng dẫn Đồ án tốt nghiệp nhé!`;
  const defaultWelcomeEn = `Hello! I am the Virtual Academic Assistant for MSc. Nguyen Quang Huy. Feel free to ask about his courses (Spring MVC, Flutter, OOP, AI), PhD research in AI & Education, the 2nd Degree in English Linguistics, or thesis supervision procedures!`;

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: lang === 'vi' ? defaultWelcomeVi : defaultWelcomeEn,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    {
      labelVi: 'Java Spring & Flutter',
      labelEn: 'Spring & Flutter Courses',
      queryVi: 'Thầy Huy giảng dạy môn Java Spring MVC và Flutter như thế nào?',
      queryEn: 'How does Mr. Huy teach Java Spring MVC and Flutter courses?',
    },
    {
      labelVi: 'Đăng ký Đồ án / NCKH',
      labelEn: 'Thesis Supervision',
      queryVi: 'Điều kiện để đăng ký Thầy Huy hướng dẫn Đồ án Tốt nghiệp là gì?',
      queryEn: 'What are the requirements for MSc. Huy to supervise my thesis?',
    },
    {
      labelVi: 'Lợi thế VB2 Ngôn ngữ Anh',
      labelEn: '2nd Degree in English',
      queryVi: 'Văn bằng 2 Ngôn ngữ Anh mang lại lợi thế gì trong giảng dạy và nghiên cứu AI?',
      queryEn: 'How does the 2nd Degree in English benefit AI research and teaching?',
    },
    {
      labelVi: 'Định hướng Nghiên cứu Tiến sĩ',
      labelEn: 'PhD Research Track',
      queryVi: 'Định hướng nghiên cứu Tiến sĩ của Thầy là gì?',
      queryEn: 'What is Mr. Huy’s PhD research focus?',
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (queryToSend?: string) => {
    const query = queryToSend || inputQuery.trim();
    if (!query) return;

    const userMsg: Message = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // Smart semantic matching based on profile knowledge base
    setTimeout(() => {
      let botResponse = '';
      const qLower = query.toLowerCase();

      if (qLower.includes('spring') || qLower.includes('java') || qLower.includes('flutter') || qLower.includes('môn học') || qLower.includes('giảng dạy') || qLower.includes('course')) {
        botResponse = lang === 'vi'
          ? `ThS. Nguyễn Quang Huy có hơn 3 năm kinh nghiệm giảng dạy các học phần cốt lõi:
1. Java Spring MVC / Spring Boot 3 (IT3020): Chuyên sâu về Dependency Injection, JPA, Spring Security 6 và kiến trúc Enterprise.
2. Lập trình Di động Đa nền tảng Flutter (IT3080): Làm chủ Widget Tree, BLoC Pattern và tích hợp Firebase.
3. OOP & Design Patterns (IT2010): Rèn luyện tư duy SOLID, Factory, Observer và Clean Code.
4. AI Ứng dụng & Prompt Engineering (IT4010).
Phương pháp giảng dạy trọng tâm là Project-Based Learning (học qua dự án thực tế), cung cấp repo mã nguồn mẫu và video bài giảng chi tiết.`
          : `MSc. Nguyen Quang Huy has over 3 years of university teaching experience in core computing subjects:
1. Java Spring MVC & Spring Boot (IT3020): Enterprise architecture, Spring Security, JPA/Hibernate.
2. Cross-platform Mobile App with Flutter (IT3080): BLoC State Management & REST/Firebase APIs.
3. OOP & Software Design Patterns (IT2010): SOLID principles and clean architectures.
4. Applied AI & Prompt Engineering in Education (IT4010).
All courses emphasize Project-Based Learning with enterprise standard repositories.`;
      } else if (qLower.includes('đồ án') || qLower.includes('nghiên cứu khoa học') || qLower.includes('hướng dẫn') || qLower.includes('thesis') || qLower.includes('supervise') || qLower.includes('nckh')) {
        botResponse = lang === 'vi'
          ? `Thầy Huy luôn khuyến khích và nhận hướng dẫn sinh viên có tinh thần tự giác, đam mê các hướng:
- Ứng dụng AI/GenAI trong Giáo dục & Đánh giá code tự động.
- Xây dựng hệ thống Web Enterprise (Java Spring Boot, Microservices).
- Phát triển ứng dụng Mobile thực chiến với Flutter.
Để đăng ký, bạn hãy chuẩn bị: (1) CV/Bảng điểm, (2) Ý tưởng đề tài hoặc hướng muốn làm, rồi gửi email trực tiếp tới: ngquanghuy595@gmail.com.`
          : `Mr. Huy actively supervises motivated students in:
- Generative AI in Computing Education & Intelligent Tutoring.
- Enterprise Web Systems (Java Spring Boot/Microservices).
- Cross-platform Mobile App Engineering (Flutter).
Please prepare your CV, transcript, and topic proposal, then email him directly at: ngquanghuy595@gmail.com.`;
      } else if (qLower.includes('ngôn ngữ anh') || qLower.includes('văn bằng 2') || qLower.includes('vb2') || qLower.includes('english') || qLower.includes('linguistics')) {
        botResponse = lang === 'vi'
          ? `Văn bằng 2 Cử nhân Ngôn ngữ Anh là một điểm nhấn đặc biệt của Thầy Huy:
- Giúp kết hợp tư duy logic chặt chẽ của kỹ sư phần mềm với sự thấu hiểu tâm lý và năng lực ngôn ngữ.
- Vận dụng Ngôn ngữ học Tri nhận (Cognitive Linguistics) để giải thích các khái niệm code trừu tượng (như Interface, Đa hình, Con trỏ) bằng ẩn dụ trực quan, giúp sinh viên giảm tải nhận thức.
- Tự tin giảng dạy các chương trình quốc tế (EMI) và viết các bài báo khoa học chuẩn quốc tế.`
          : `Holding a Second Degree in English Linguistics provides MSc. Huy a distinct interdisciplinary edge:
- Seamlessly synthesizing algorithmic rigor with empathetic communication.
- Applying Cognitive Linguistics & Metaphors to deconstruct abstract programming concepts for novice students.
- Facilitating English-Medium Instruction (EMI) and publishing in international scientific conferences.`;
      } else if (qLower.includes('tiến sĩ') || qLower.includes('phd') || qLower.includes('nghiên cứu') || qLower.includes('research')) {
        botResponse = lang === 'vi'
          ? `Định hướng nghiên cứu bậc Tiến sĩ (PhD Track) của Thầy Huy tập trung vào: "Trí tuệ Nhân tạo và Đổi mới Giáo dục (AI in Education / AIED)".
Trọng tâm nghiên cứu là phát triển mô hình Trợ lý gia sư Socratic AI giúp phân tích lỗi cú pháp, gợi mở tư duy phản biện cho người học thay vì chỉ đưa code sao chép, nâng cao hiệu quả nắm vững kiến thức lập trình lên đến 35%.`
          : `MSc. Huy's PhD research track focuses on "Artificial Intelligence in Education (AIED)".
His research develops Socratic AI Tutoring models that guide students through debugging reasoning rather than passive code generation, significantly boosting novice problem-solving mastery.`;
      } else if (qLower.includes('liên hệ') || qLower.includes('email') || qLower.includes('contact') || qLower.includes('gặp')) {
        botResponse = lang === 'vi'
          ? `Bạn có thể liên hệ với Thầy Huy qua:
- Email chính thức: ngquanghuy595@gmail.com
- Giờ tiếp sinh viên (Office Hours): Thứ Ba & Thứ Năm (14:00 - 16:30) tại Văn phòng Bộ môn CNTT hoặc qua Google Meet.
- Bạn cũng có thể để lại lời nhắn ở phần Liên hệ cuối trang!`
          : `You can reach MSc. Huy via:
- Official Email: ngquanghuy595@gmail.com
- Office Hours: Tue & Thu (14:00 - 16:30) at the IT Faculty Office or via Google Meet.
- Or simply leave a message via the Contact section below!`;
      } else {
        botResponse = lang === 'vi'
          ? `Cảm ơn câu hỏi của bạn! ThS. Nguyễn Quang Huy là Giảng viên CNTT với 3+ năm kinh nghiệm giảng dạy Java Spring MVC, Flutter, OOP, Web và AI, đồng thời đang theo đuổi nghiên cứu Tiến sĩ về AI & Giáo dục kết hợp thế mạnh Văn bằng 2 Ngôn ngữ Anh. Bạn có thể gửi câu hỏi chi tiết hơn hoặc gửi email trực tiếp tới ngquanghuy595@gmail.com nhé!`
          : `Thank you for your question! MSc. Nguyen Quang Huy is an IT Lecturer with 3+ years lecturing Java Spring MVC, Flutter, OOP, Web and AI, currently conducting PhD research in AI & Education with an interdisciplinary background in English Linguistics. Feel free to contact him at ngquanghuy595@gmail.com!`;
      }

      const botMsg: Message = {
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 650);
  };

  const handleResetChat = () => {
    setMessages([
      {
        sender: 'bot',
        text: lang === 'vi' ? defaultWelcomeVi : defaultWelcomeEn,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className={`rounded-xl border overflow-hidden shadow-lg ${
      isDark ? 'bg-[#0a1018] border-white/10' : 'bg-white border-slate-200 shadow-slate-200/60'
    }`}>
      {/* Assistant Header */}
      <div className={`p-4 border-b flex items-center justify-between ${
        isDark ? 'bg-[#05070a]/90 border-white/10' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm flex items-center gap-2">
              <span>{lang === 'vi' ? 'Trợ Lý Học Thuật Ảo (ThS. Huy AI)' : 'Academic Virtual Assistant'}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Online
              </span>
            </div>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {lang === 'vi' ? 'Hỏi đáp nhanh về học phần, nghiên cứu & tư vấn' : 'Instant Q&A regarding courses, research & office hours'}
            </p>
          </div>
        </div>

        <button
          onClick={handleResetChat}
          className={`p-2 rounded-sm text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
            isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
          }`}
          title={lang === 'vi' ? 'Làm mới cuộc trò chuyện' : 'Reset chat'}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{lang === 'vi' ? 'Làm mới' : 'Reset'}</span>
        </button>
      </div>

      {/* Messages Feed */}
      <div className="p-4 sm:p-5 h-80 overflow-y-auto space-y-4">
        {messages.map((msg, index) => {
          const isBot = msg.sender === 'bot';
          return (
            <div
              key={index}
              className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}
            >
              {isBot && (
                <div className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                  isBot
                    ? isDark
                      ? 'bg-[#05070a] border border-white/10 text-slate-200'
                      : 'bg-slate-100 border border-slate-200 text-slate-800'
                    : 'bg-blue-600 text-white shadow-sm'
                }`}
              >
                {msg.text}
                <div className={`text-[10px] mt-1 text-right font-mono ${
                  isBot
                    ? isDark ? 'text-slate-500' : 'text-slate-400'
                    : 'text-blue-200'
                }`}>
                  {msg.time}
                </div>
              </div>

              {!isBot && (
                <div className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className={`rounded-xl px-4 py-3 text-xs flex items-center gap-1.5 ${
              isDark ? 'bg-[#05070a] border border-white/10 text-slate-400' : 'bg-slate-100 text-slate-500'
            }`}>
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
              <span className="ml-1 font-mono text-[11px]">{lang === 'vi' ? 'Đang soạn câu trả lời...' : 'Thinking...'}</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className={`p-3 border-t flex flex-wrap gap-2 ${
        isDark ? 'bg-[#05070a]/90 border-white/10' : 'bg-slate-50/80 border-slate-200'
      }`}>
        <span className={`text-[11px] font-mono py-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {lang === 'vi' ? 'Gợi ý câu hỏi:' : 'Suggestions:'}
        </span>
        {quickPrompts.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(lang === 'vi' ? item.queryVi : item.queryEn)}
            className={`text-xs px-2.5 py-1 rounded-sm border transition-all cursor-pointer ${
              isDark
                ? 'bg-white/5 border-white/10 text-slate-300 hover:border-blue-500/50 hover:text-blue-400'
                : 'bg-white border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600'
            }`}
          >
            {lang === 'vi' ? item.labelVi : item.labelEn}
          </button>
        ))}
      </div>

      {/* Chat Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className={`p-3 border-t flex items-center gap-2 ${
          isDark ? 'bg-[#05070a] border-white/10' : 'bg-white border-slate-200'
        }`}
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder={lang === 'vi' ? 'Nhập câu hỏi cho Thầy Huy...' : 'Ask a question...'}
          className={`flex-1 px-4 py-2.5 rounded-lg text-xs sm:text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
            isDark
              ? 'bg-[#0a1018] border-white/10 text-white placeholder-slate-500'
              : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
          }`}
        />
        <button
          type="submit"
          disabled={!inputQuery.trim()}
          className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white transition-all cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
