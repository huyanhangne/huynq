import { Course, Milestone, Project, ResearchItem, SkillCategory, AcademicPillar } from '../types';

export const PROFILE_INFO = {
  name: 'ThS. Nguyễn Quang Huy',
  nameEn: 'MSc. Nguyen Quang Huy',
  titlesVi: [
    'Giảng viên Chuyên ngành Công nghệ Thông tin',
    'Thạc sĩ Công nghệ Thông tin (2021 - 2024)',
    'Cử nhân Ngôn ngữ Anh (VB2, 2024 - 2026)',
    'Mục tiêu Nghiên cứu sinh (Data Mining & AI Ứng dụng)'
  ],
  titlesEn: [
    'Lecturer in Information Technology',
    'Master of Science in IT (2021 - 2024)',
    'B.A. in English Linguistics (2nd Degree, 2024 - 2026)',
    'Prospective PhD Researcher (Data Mining & Applied AI)'
  ],
  email: 'ngquanghuy595@gmail.com',
  locationVi: 'Hà Nội / TP. Hồ Chí Minh, Việt Nam',
  locationEn: 'Vietnam',
  affiliationVi: 'Khoa Công nghệ Thông tin',
  affiliationEn: 'Faculty of Information Technology',
  statusVi: 'Mở cơ hội hợp tác nghiên cứu Khai phá dữ liệu & AI ứng dụng | Hướng dẫn đồ án',
  statusEn: 'Open for Data Mining & Applied AI research collaboration | Thesis supervision',
  github: 'https://github.com/huyanhangne',
  linkedin: 'https://www.linkedin.com/in/huynguyen01707/',
  scholar: 'https://scholar.google.com',
  researchGate: 'https://researchgate.net',
  phone: '+84 (0) 908 342 105',
  defaultAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
};

export const AVATAR_PRESETS = [
  {
    id: 'preset-1',
    nameVi: 'Chân Dung Giảng Viên (Trang Nhã)',
    nameEn: 'Academic Lecturer (Classic)',
    descVi: 'Phong thái học thuật, nghiêm cẩn & hiện đại',
    descEn: 'Academic scholar in modern navy blazer',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'preset-2',
    nameVi: 'Kỹ Sư Công Nghệ & AI',
    nameEn: 'Tech & AI Educator',
    descVi: 'Phong cách chuyên gia CNTT năng động',
    descEn: 'Dynamic software engineering educator',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'preset-3',
    nameVi: 'Nghiên Cứu Sinh Tiến Sĩ',
    nameEn: 'PhD Researcher',
    descVi: 'Tập trung học thuật, nghiên cứu đa ngành',
    descEn: 'Focused researcher in AI & Linguistics',
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'preset-4',
    nameVi: 'Nhà Sư Phạm Trẻ Toàn Cầu',
    nameEn: 'Global Educator',
    descVi: 'Thân thiện, truyền cảm hứng & hội nhập',
    descEn: 'Approachable, globally-minded mentor',
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  },
];

// Exact requested 200-300 words About Me text (sincere, professional, approachable)
export const ABOUT_ME = {
  introVi: `Chào bạn, tôi là Nguyễn Quang Huy – Giảng viên Chuyên ngành Công nghệ Thông tin với hơn 3 năm gắn bó trên giảng đường đại học và các dự án công nghệ thực chiến. Tôi đã hoàn thành chương trình Thạc sĩ Công nghệ Thông tin (giai đoạn 2021 - 2024) và hiện đang theo học Văn bằng 2 Cử nhân Ngôn ngữ Anh (giai đoạn 2024 - 2026). Hành trình giảng dạy của tôi tập trung vào việc truyền cảm hứng và xây dựng nền tảng vững chắc cho sinh viên qua các môn học cốt lõi như Lập trình hướng đối tượng (OOP), Phát triển ứng dụng Web với Java Spring MVC, Lập trình di động đa nền tảng Flutter, cùng Khai phá dữ liệu & AI Ứng dụng.

Với tôi, công nghệ là nghệ thuật giải quyết vấn đề và phục vụ cuộc sống. Định hướng học thuật dài hạn của tôi là Mục tiêu Nghiên cứu sinh (PhD Candidate) tập trung chuyên sâu vào lĩnh vực Khai phá dữ liệu (Data Mining) và Trí tuệ Nhân tạo Ứng dụng (Applied AI) – nhằm xây dựng các giải pháp phân tích dữ liệu thông minh và tối ưu hóa hệ thống trong thực tiễn.

Đặc biệt, việc trau dồi thêm Văn bằng 2 chuyên ngành Ngôn ngữ Anh (2024 - 2026) mang lại cho tôi lợi thế đa chiều độc đáo: kết nối tư duy logic sắc bén của một kỹ sư CNTT với sự thấu hiểu ngôn ngữ, khả năng tiếp cận và công bố các công trình nghiên cứu quốc tế, cũng như diễn giải các bài toán kỹ thuật phức tạp trở nên trực quan, gần gũi với người học.`,
  
  introEn: `Hello and welcome! I am Nguyen Quang Huy, a Lecturer specializing in Information Technology with over 3 years of university teaching experience and practical software engineering background. I hold a Master of Science in Information Technology (2021 - 2024) and am pursuing a Second Degree in English Linguistics (2024 - 2026). My pedagogical focus centers on empowering students with solid foundations in Object-Oriented Programming (OOP), Enterprise Web Development with Java Spring MVC, Cross-Platform Mobile Apps with Flutter, and Data Mining & Applied AI.

I view technology as a human-centric discipline of continuous discovery. My academic aspiration as a Prospective PhD Researcher is dedicated to Data Mining and Applied Artificial Intelligence — designing intelligent data extraction paradigms and applied machine learning architectures.

Furthermore, my ongoing Second Degree in English Linguistics (2024 - 2026) equips me with an invaluable interdisciplinary bridge: seamlessly harmonizing rigorous computational logic with global communication fluency and international scientific research collaboration.`
};

export const ACADEMIC_PILLARS: AcademicPillar[] = [
  {
    titleVi: 'Chuyên Ngành Công Nghệ Thông Tin',
    titleEn: 'Information Technology Rigor',
    subtitleVi: 'Nền tảng ThS CNTT (2021 - 2024) & Thực chiến',
    subtitleEn: 'M.Sc. in IT Foundation & Enterprise Systems',
    descriptionVi: '3+ năm chuyên sâu giảng dạy Java Spring Boot/MVC, OOP, cấu trúc dữ liệu, kiến trúc phần mềm sạch và hệ sinh thái Flutter.',
    descriptionEn: '3+ years mastering and teaching Java Spring Boot/MVC, clean code paradigms, and Flutter cross-platform ecosystem.',
    icon: 'Terminal',
    highlightColor: 'from-blue-600 to-indigo-600'
  },
  {
    titleVi: 'Khai Phá Dữ Liệu & AI Ứng Dụng',
    titleEn: 'Data Mining & Applied AI',
    subtitleVi: 'Mục tiêu Nghiên cứu sinh (Prospective PhD)',
    subtitleEn: 'Doctoral Research Focus on Applied Intelligence',
    descriptionVi: 'Tập trung nghiên cứu các kỹ thuật Khai phá dữ liệu (Data Mining), thuật toán học máy và ứng dụng Trí tuệ Nhân tạo trong xử lý dữ liệu thực tế.',
    descriptionEn: 'Investigating Data Mining methodologies, machine learning models, and Applied AI systems for real-world intelligent analytics.',
    icon: 'Sparkles',
    highlightColor: 'from-emerald-500 to-teal-600'
  },
  {
    titleVi: 'Cầu Nối Ngôn Ngữ & Hội Nhập',
    titleEn: 'Linguistic Cognition & Global Outreach',
    subtitleVi: 'Văn bằng 2 Ngôn ngữ Anh (2024 - 2026)',
    subtitleEn: '2nd Degree in English Linguistics (2024 - 2026)',
    descriptionVi: 'Vận dụng ngôn ngữ học để nâng cao năng lực viết bài báo khoa học quốc tế, truyền cảm hứng giảng dạy và hội nhập học thuật toàn cầu.',
    descriptionEn: 'Leveraging linguistic precision to facilitate international academic publishing and deliver clear, globally aligned instruction.',
    icon: 'BookOpen',
    highlightColor: 'from-blue-500 to-cyan-500'
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: '2024 - 2026',
    roleVi: 'Văn bằng 2 Cử nhân Ngôn ngữ Anh',
    roleEn: 'B.A. in English Linguistics (2nd Degree)',
    organizationVi: 'Trường Đại học Ngoại ngữ',
    organizationEn: 'University of Foreign Languages',
    descriptionVi: 'Nâng cao năng lực ngôn ngữ học ứng dụng, phân tích diễn ngôn và viết công bố khoa học quốc tế, làm giàu tư duy giao tiếp kỹ thuật.',
    descriptionEn: 'Advancing applied linguistics, academic writing, and international scientific publication capabilities.',
    badge: 'Đào tạo 2024 - 2026'
  },
  {
    year: '2024 - Định hướng',
    roleVi: 'Mục tiêu Nghiên cứu sinh (Data Mining & AI Ứng dụng)',
    roleEn: 'Prospective PhD Researcher (Data Mining & Applied AI)',
    organizationVi: 'Khoa Công nghệ Thông tin',
    organizationEn: 'Faculty of Information Technology',
    descriptionVi: 'Chuẩn bị và phát triển đề cương nghiên cứu sinh chuyên sâu về Khai phá dữ liệu (Data Mining), mô hình học máy và Trí tuệ Nhân tạo ứng dụng.',
    descriptionEn: 'Developing doctoral research proposals in Data Mining paradigms, machine learning models, and Applied AI frameworks.',
    badge: 'Mục tiêu Nghiên cứu sinh'
  },
  {
    year: '2021 - 2024',
    roleVi: 'Thạc sĩ Công nghệ Thông tin (ThS CNTT)',
    roleEn: 'Master of Science in Information Technology (M.Sc. in IT)',
    organizationVi: 'Khoa / Trường Đại học chuyên ngành CNTT',
    organizationEn: 'Faculty / University of Information Technology',
    descriptionVi: 'Bảo vệ thành công luận văn Thạc sĩ chuyên ngành Công nghệ Thông tin, nghiên cứu thuật toán xử lý dữ liệu và mô hình tính toán thông minh.',
    descriptionEn: 'Successfully defended Master thesis in IT, focusing on data processing algorithms and intelligent computing models.',
    badge: 'ThS CNTT 2021 - 2024'
  },
  {
    year: '2021 - Hiện tại',
    roleVi: 'Giảng viên Chuyên ngành Công nghệ Thông tin',
    roleEn: 'Lecturer in Information Technology',
    organizationVi: 'Khoa Công nghệ Thông tin',
    organizationEn: 'Faculty of Information Technology',
    descriptionVi: 'Trực tiếp giảng dạy sinh viên các học phần: Lập trình Java & Spring MVC, Lập trình Hướng đối tượng (OOP), Lập trình ứng dụng Web & Di động (Flutter), Khai phá dữ liệu & AI Ứng dụng.',
    descriptionEn: 'Lecturing undergraduate students in Java & Spring MVC, OOP, Full-stack Web, Mobile App Development (Flutter), Data Mining & Applied AI.',
    badge: '3+ năm kinh nghiệm'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'teaching',
    titleVi: 'Chuyên Môn Giảng Dạy Cốt Lõi',
    titleEn: 'Core Teaching Disciplines',
    descriptionVi: 'Các môn học trọng tâm được thiết kế theo chuẩn đầu ra thực chiến cho sinh viên',
    descriptionEn: 'Core academic courses structured around industry-grade practical engineering',
    icon: 'GraduationCap',
    skills: [
      {
        name: 'Java & Spring MVC / Boot',
        level: 95,
        experience: '3+ Năm giảng dạy',
        descriptionVi: 'Kiến trúc MVC, Dependency Injection, RESTful APIs, Spring Security, Hibernate/JPA, Microservices.',
        descriptionEn: 'MVC Architecture, Dependency Injection, Spring Security, JPA/Hibernate, Microservices.',
        iconName: 'Server',
        tags: ['Java 17/21', 'Spring Boot', 'REST API', 'JPA/Hibernate']
      },
      {
        name: 'Lập trình Hướng Đối Tượng (OOP)',
        level: 96,
        experience: '3+ Năm giảng dạy',
        descriptionVi: '4 trụ cột OOP, Nguyên lý SOLID, Design Patterns (Factory, Singleton, Observer, Strategy), Clean Code.',
        descriptionEn: '4 OOP pillars, SOLID Principles, GoF Design Patterns, Clean Code architectures.',
        iconName: 'Code',
        tags: ['SOLID', 'Design Patterns', 'Refactoring', 'UML']
      },
      {
        name: 'Phát triển Di Động Flutter & Dart',
        level: 90,
        experience: '3 Năm giảng dạy & dự án',
        descriptionVi: 'Widget Tree, State Management (Bloc, Provider), Local Database, Firebase integration, Cross-platform iOS/Android.',
        descriptionEn: 'Widget trees, Bloc/Provider state patterns, Firebase, SQLite/Hive, Cross-platform build.',
        iconName: 'Smartphone',
        tags: ['Flutter 3.x', 'Dart', 'Bloc', 'REST Integration']
      },
      {
        name: 'Nhập môn AI & Machine Learning',
        level: 88,
        experience: 'Nghiên cứu & giảng dạy',
        descriptionVi: 'Học máy cơ bản, Xử lý ngôn ngữ tự nhiên (NLP), Prompt Engineering, Fine-tuning LLM, Ứng dụng AI trong giáo dục.',
        descriptionEn: 'Core ML algorithms, NLP foundations, LLM Prompt Engineering, Educational AI integration.',
        iconName: 'Brain',
        tags: ['Python', 'PyTorch', 'GenAI', 'LLM Prompting']
      },
      {
        name: 'Phát triển Ứng Dụng Web',
        level: 92,
        experience: 'Full-stack & Mentoring',
        descriptionVi: 'HTML5/CSS3/JavaScript hiện đại, React, Node.js/Express, Tailwind CSS, RESTful API design & deployment.',
        descriptionEn: 'Modern JS/TS, React, Node.js, Tailwind CSS, API architectures and deployment pipelines.',
        iconName: 'Globe',
        tags: ['React', 'TypeScript', 'Tailwind', 'Node.js']
      }
    ]
  },
  {
    id: 'research_interdisciplinary',
    titleVi: 'Năng Lực Đa Ngành & Nghiên Cứu',
    titleEn: 'Interdisciplinary & Research Capabilities',
    descriptionVi: 'Sự kết hợp độc đáo giữa Trí tuệ Nhân tạo, Ngôn ngữ học và Phương pháp Sư phạm hiện đại',
    descriptionEn: 'Unique synergy of Artificial Intelligence, Applied Linguistics, and Modern Pedagogy',
    icon: 'Layers',
    skills: [
      {
        name: 'Văn Bằng 2 Ngôn Ngữ Anh (English Linguistics)',
        level: 94,
        experience: 'Cử nhân VB2 - IELTS C1 Level',
        descriptionVi: 'Năng lực viết bài báo khoa học quốc tế, diễn đạt diễn ngôn kỹ thuật mạch lạc, giảng dạy chương trình chất lượng cao hoàn toàn bằng tiếng Anh.',
        descriptionEn: 'High-level academic paper authoring, technical English discourse analysis, English-medium instruction (EMI).',
        iconName: 'Languages',
        tags: ['Academic Writing', 'Technical English', 'EMI Teaching', 'IELTS 7.5+']
      },
      {
        name: 'AI trong Giáo Dục (AIED & EdTech)',
        level: 90,
        experience: 'Định hướng Nghiên cứu Tiến sĩ',
        descriptionVi: 'Xây dựng trợ lý ảo chấm bài tự động, mô hình đánh giá mức độ hiểu code của sinh viên, hệ thống gợi ý bài tập thích ứng.',
        descriptionEn: 'Automated grading assistants, novice code comprehension modeling, adaptive practice recommenders.',
        iconName: 'Cpu',
        tags: ['EdTech', 'Adaptive Learning', 'AI Tutoring', 'NLP for Code']
      },
      {
        name: 'Phương Pháp Sư Phạm Khai Phóng & Đồng Cảm',
        level: 96,
        experience: 'Phương châm giảng dạy',
        descriptionVi: 'Ứng dụng Project-Based Learning (học qua dự án), Active Learning, cá nhân hóa phản hồi và khích lệ tư duy phản biện.',
        descriptionEn: 'Project-Based Learning (PBL), flipped classroom, constructive empathetic feedback, critical thinking.',
        iconName: 'HeartHandshake',
        tags: ['Active Learning', 'Project-Based', 'Mentorship', 'Growth Mindset']
      },
      {
        name: 'Cơ Sở Dữ Liệu & Hệ Thống',
        level: 88,
        experience: 'Quản trị & Giảng dạy',
        descriptionVi: 'MySQL, PostgreSQL, MongoDB, Thiết kế ERD chuẩn hóa, Tối ưu câu truy vấn, Caching với Redis.',
        descriptionEn: 'PostgreSQL, MySQL, MongoDB, Database normalization, Query optimization, Redis caching.',
        iconName: 'Database',
        tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
      }
    ]
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-java-spring',
    code: 'IT3020',
    titleVi: 'Phát Triển Ứng Dụng Doanh Nghiệp Với Java Spring MVC',
    titleEn: 'Enterprise Application Development with Java Spring MVC',
    studentsCount: '450+ Sinh viên/năm',
    duration: '45 Tiết lý thuyết & Thực hành Lab',
    descriptionVi: 'Môn học trang bị kiến thức chuyên sâu về mô hình MVC, cơ chế Dependency Injection, xây dựng RESTful Web Services bảo mật với Spring Security và kết nối CSDL qua Spring Data JPA.',
    descriptionEn: 'Comprehensive course on MVC architecture, Dependency Injection, secure RESTful APIs via Spring Security, and persistence with Spring Data JPA.',
    techStack: ['Java 17/21', 'Spring Boot', 'Spring Security', 'Hibernate/JPA', 'PostgreSQL', 'Docker'],
    syllabusVi: [
      'Chương 1: Tổng quan Kiến trúc Phần mềm Hướng Dịch vụ & Mô hình MVC',
      'Chương 2: Spring Core, Inversion of Control (IoC) & Dependency Injection (DI)',
      'Chương 3: Xây dựng RESTful API chuẩn REST và xử lý Exception toàn cục',
      'Chương 4: Quản lý dữ liệu với Spring Data JPA & Tối ưu hóa quan hệ Entity',
      'Chương 5: Bảo mật hệ thống với Spring Security 6 & JWT Authentication',
      'Chương 6: Đồ án môn học: Xây dựng hệ thống E-commerce / LMS hoàn chỉnh'
    ],
    syllabusEn: [
      'Unit 1: Service-Oriented Architectures & Modern MVC Design',
      'Unit 2: Spring Core, Inversion of Control (IoC) & Dependency Injection (DI)',
      'Unit 3: RESTful API Engineering and Global Exception Handling',
      'Unit 4: Persistence with Spring Data JPA & Entity Relationship Optimization',
      'Unit 5: Enterprise Security with Spring Security 6 & JWT Authentication',
      'Unit 6: Capstone Project: End-to-end Enterprise LMS / E-Commerce System'
    ],
    featured: true
  },
  {
    id: 'course-flutter',
    code: 'IT3080',
    titleVi: 'Lập Trình Ứng Dụng Di Động Đa Nền Tảng (Flutter & Dart)',
    titleEn: 'Cross-Platform Mobile App Engineering with Flutter & Dart',
    studentsCount: '380+ Sinh viên/năm',
    duration: '45 Tiết Lab thực chiến',
    descriptionVi: 'Hướng dẫn sinh viên từ con số 0 đến làm chủ kiến trúc Widget, quản lý trạng thái (State Management) với Bloc/Provider, và tích hợp Backend REST/Firebase.',
    descriptionEn: 'From zero to mastering Flutter declarative UI, robust state management (Bloc/Provider), and cloud database integrations.',
    techStack: ['Flutter 3.x', 'Dart', 'Bloc Pattern', 'Firebase', 'Dio REST', 'App Store / Google Play CI'],
    syllabusVi: [
      'Chương 1: Ngôn ngữ Dart hiện đại và tư duy Lập trình Hướng đối tượng trong Dart',
      'Chương 2: Cấu trúc Widget Tree: Stateless vs Stateful và Layout phức tạp',
      'Chương 3: Quản lý trạng thái chuyên nghiệp với BLoC Pattern & Hydrated Bloc',
      'Chương 4: Tích hợp RESTful API với Dio, Retrofit và Caching dữ liệu offline',
      'Chương 5: Xác thực Firebase Authentication, Cloud Firestore & Push Notifications',
      'Chương 6: Đồ án nhóm: Triển khai Ứng dụng Di động thực tế lên TestFlight / APK'
    ],
    syllabusEn: [
      'Unit 1: Modern Dart Language & OOP paradigms in Dart',
      'Unit 2: Widget Tree Architecture, Statefulness, and Responsive Layouts',
      'Unit 3: Scalable State Management with BLoC Pattern & Hydrated Bloc',
      'Unit 4: REST API Consumption with Dio, Retrofit, and Offline Caching',
      'Unit 5: Firebase Auth, Cloud Firestore, and Push Notification Pipelines',
      'Unit 6: Group Capstone: Deploying production-ready Mobile App to APK/TestFlight'
    ],
    featured: true
  },
  {
    id: 'course-oop',
    code: 'IT2010',
    titleVi: 'Lập Trình Hướng Đối Tượng & Thiết Kế Phần Mềm (OOP)',
    titleEn: 'Object-Oriented Programming & Software Design Patterns',
    studentsCount: '500+ Sinh viên/năm',
    duration: '60 Tiết chuẩn đầu ra',
    descriptionVi: 'Môn học nền tảng then chốt: Giúp sinh viên rèn luyện tư duy phân rã bài toán, áp dụng 4 tính chất OOP, nguyên lý SOLID và các mẫu thiết kế kinh điển.',
    descriptionEn: 'Fundamental course shaping computational problem decomposition, 4 OOP pillars, SOLID guidelines, and GoF patterns.',
    techStack: ['Java', 'C++', 'SOLID', 'Design Patterns', 'UML Diagramming', 'JUnit Testing'],
    syllabusVi: [
      'Chương 1: Tư duy trừu tượng hóa thế giới thực vào mô hình Lớp (Class) & Đối tượng (Object)',
      'Chương 2: Đóng gói (Encapsulation), Kế thừa (Inheritance) & Đa hình (Polymorphism)',
      'Chương 3: Thiết kế Hợp đồng với Abstract Class & Interface',
      'Chương 4: 5 Nguyên lý thiết kế phần mềm linh hoạt SOLID',
      'Chương 5: Mẫu thiết kế phổ biến: Singleton, Factory, Observer, Strategy',
      'Chương 6: Thực hành Refactoring và Viết Unit Test với JUnit 5'
    ],
    syllabusEn: [
      'Unit 1: Real-world Abstraction into Classes & Objects',
      'Unit 2: Encapsulation, Inheritance, and Dynamic Polymorphism',
      'Unit 3: Contract-Based Design with Interfaces and Abstract Classes',
      'Unit 4: The 5 SOLID Software Architecture Principles',
      'Unit 5: GoF Design Patterns: Singleton, Factory, Observer, Strategy',
      'Unit 6: Clean Code Refactoring & Unit Testing with JUnit 5'
    ]
  },
  {
    id: 'course-ai-intro',
    code: 'IT4010',
    titleVi: 'Trí Tuệ Nhân Tạo Ứng Dụng & Kỹ Thuật Prompting (Applied AI)',
    titleEn: 'Applied Artificial Intelligence & Prompt Engineering in Education',
    studentsCount: '300+ Sinh viên/năm',
    duration: '30 Tiết chuyên đề',
    descriptionVi: 'Tiếp cận Trí tuệ Nhân tạo hiện đại: Từ Machine Learning cơ bản đến ứng dụng các mô hình ngôn ngữ lớn (LLMs), Agentic AI và đạo đức AI trong công nghệ.',
    descriptionEn: 'Modern AI paradigm: from classic ML baselines to LLM fine-tuning, Agent workflows, and ethical computing.',
    techStack: ['Python', 'Scikit-learn', 'PyTorch Basics', 'Gemini API', 'LangChain', 'HuggingFace'],
    syllabusVi: [
      'Chương 1: Bức tranh toàn cảnh về Trí tuệ Nhân tạo và Học máy (Supervised / Unsupervised)',
      'Chương 2: Cơ sở thuật toán Hồi quy, Cây quyết định & Mạng nơ-ron nhân tạo',
      'Chương 3: Cơ chế Transformer và sự bùng nổ của Large Language Models (LLMs)',
      'Chương 4: Kỹ thuật Prompt Engineering nâng cao (Few-shot, Chain-of-Thought, ReAct)',
      'Chương 5: Xây dựng ứng dụng RAG (Retrieval-Augmented Generation) cá nhân hóa',
      'Chương 6: Đạo đức AI, Bản quyền và Bảo mật dữ liệu trong kỷ nguyên số'
    ],
    syllabusEn: [
      'Unit 1: Landscape of Artificial Intelligence and Machine Learning paradigms',
      'Unit 2: Core Regression, Decision Trees, and Neural Foundations',
      'Unit 3: Transformer Mechanisms & Rise of Large Language Models',
      'Unit 4: Advanced Prompt Engineering (Few-shot, Chain-of-Thought, ReAct)',
      'Unit 5: Building Domain-Specific Retrieval-Augmented Generation (RAG) Apps',
      'Unit 6: AI Ethics, Intellectual Property, and Academic Integrity'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-edugpt',
    titleVi: 'AI-CodeMentor: Trợ Lý Gia Sư Ảo Hỗ Trợ Sinh Viên Lập Trình',
    titleEn: 'AI-CodeMentor: Intelligent Pedagogical Code Tutoring System',
    category: 'ai',
    roleVi: 'Chủ nhiệm dự án & Thiết kế mô hình',
    roleEn: 'Project Lead & System Architect',
    descriptionVi: 'Hệ thống tích hợp LLMs được tinh chỉnh để giải thích lỗi biên dịch, phân tích độ phức tạp thuật toán và đưa ra câu hỏi gợi mở thay vì đưa trực tiếp lời giải, giúp sinh viên tự rèn luyện tư duy logic.',
    descriptionEn: 'A fine-tuned LLM tutoring architecture that deconstructs compiler errors and poses Socratic guiding questions rather than direct answers to build self-efficacy.',
    tags: ['Python', 'FastAPI', 'Gemini Pro API', 'LangChain', 'React', 'Tailwind'],
    metricsVi: 'Đã thử nghiệm trên 3 lớp đại học với 180+ sinh viên, tăng 35% tốc độ tự sửa lỗi cú pháp',
    metricsEn: 'Piloted with 180+ students across 3 classes, improving self-debugging efficiency by 35%',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: 'proj-lms-spring',
    titleVi: 'SmartEdu Portal: Hệ Thống Quản Lý Đồ Án & Chấm Điểm Tự Động',
    titleEn: 'SmartEdu Portal: Automated Grading & Assignment Management Platform',
    category: 'edtech',
    roleVi: 'Trưởng nhóm phát triển Backend & Giám sát',
    roleEn: 'Lead Backend Architect',
    descriptionVi: 'Nền tảng quản lý nộp bài tập Java/C++ với Docker sandbox cách ly để biên dịch và chạy test cases tự động, kèm hệ thống chống đạo văn thông minh.',
    descriptionEn: 'An isolated Docker sandbox autograder for Java/C++ assignments with automated test case evaluation and anti-plagiarism metrics.',
    tags: ['Java Spring Boot 3', 'Docker Engine', 'PostgreSQL', 'Redis', 'RabbitMQ', 'React'],
    metricsVi: 'Xử lý hơn 5,000 lượt nộp bài mỗi kỳ với độ trễ phản hồi < 3 giây',
    metricsEn: 'Processed 5,000+ submissions per semester with <3s response latency',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: 'proj-flutter-dictionary',
    titleVi: 'LingoTech: Ứng Dụng Tra Cứu Thuật Ngữ CNTT & Diễn Giải Đa Ngữ',
    titleEn: 'LingoTech: Multilingual IT Terminology & Concept Translator App',
    category: 'software',
    roleVi: 'Tác giả & Nhà phát triển',
    roleEn: 'Creator & Developer',
    descriptionVi: 'Sản phẩm kết hợp giữa chuyên môn CNTT và Văn bằng 2 Ngôn ngữ Anh: Cung cấp từ điển thuật ngữ chuyên ngành có ví dụ code song ngữ, ngữ cảnh sử dụng và phát âm chuẩn bản xứ.',
    descriptionEn: 'Synergy of Computer Science & English Linguistics: Multilingual specialized IT dictionary with contextual code snippets and native acoustic pronunciation.',
    tags: ['Flutter', 'Dart', 'SQLite', 'Bloc', 'OpenAI/Gemini Embedding', 'Offline First'],
    metricsVi: 'Hơn 2,500 lượt tải về và sử dụng làm tài liệu tham khảo cho sinh viên năm nhất',
    metricsEn: '2,500+ student downloads as primary terminology reference for freshmen',
    githubUrl: 'https://github.com',
    demoUrl: '#'
  },
  {
    id: 'proj-curriculum-ai',
    titleVi: 'Khung Chương Trình Chuẩn Hoá Java Spring MVC Cho Sinh Viên Kỹ Thuật',
    titleEn: 'Standardized Java Spring MVC Curriculum Framework for Engineering Students',
    category: 'teaching',
    roleVi: 'Biên soạn & Giảng dạy chính',
    roleEn: 'Primary Author & Instructor',
    descriptionVi: 'Bộ giáo trình điện tử, slide bài giảng, ngân hàng 50+ bài lab thực hành và mã nguồn mẫu được cập nhật liên tục theo chuẩn công nghiệp doanh nghiệp.',
    descriptionEn: 'Open-access syllabus, lecture slides, 50+ real-world lab exercises, and sample clean-code repositories aligned with enterprise standards.',
    tags: ['Curriculum Design', 'Java 21', 'Spring Boot 3.3', 'Microservices', 'Clean Architecture'],
    metricsVi: 'Được áp dụng chính thức cho các khóa sinh viên chuyên ngành Kỹ thuật Phần mềm',
    metricsEn: 'Adopted as the primary syllabus for undergraduate Software Engineering majors',
    githubUrl: 'https://github.com'
  }
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: 'res-1',
    titleVi: 'Khai thác top-k tập chiếm hữu cao',
    titleEn: 'Mining Top-k High Occupancy Itemsets',
    typeVi: 'Bài báo & Công trình Nghiên cứu Khoa học (Publication)',
    typeEn: 'Scientific Research Publication',
    year: '2024',
    statusVi: 'Đã công bố trên ResearchGate',
    statusEn: 'Published on ResearchGate',
    link: 'https://www.researchgate.net/publication/385907758_Khai_thac_top-k_tap_chiem_huu_cao',
    abstractVi: 'Công trình nghiên cứu đề xuất và phát triển các thuật toán hiệu năng cao cho bài toán khai phá top-k tập chiếm hữu cao (Top-k High Occupancy Itemset Mining) trong cơ sở dữ liệu lớn. Giải pháp giúp tối ưu hóa không gian tìm kiếm, loại bỏ các mẫu dư thừa và trích xuất các tri thức có giá trị chiếm hữu cao nhất phục vụ phân tích dữ liệu và ra quyết định thông minh.',
    abstractEn: 'This research investigates and proposes novel high-performance algorithmic frameworks for mining Top-k High Occupancy Itemsets from extensive databases. The proposed approach optimizes search-space pruning, eliminates unpromising candidates, and discovers actionable high-occupancy patterns for intelligent data analysis and decision support.',
    tags: ['Data Mining', 'Top-k High Occupancy', 'Itemset Mining', 'Pattern Mining', 'Knowledge Discovery', 'ResearchGate']
  }
];

export const TESTIMONIALS = [
  {
    name: 'Trần Minh Đức',
    roleVi: 'Cựu sinh viên Kỹ thuật Phần mềm (Hiện là Java Backend Engineer tại FPT Software)',
    roleEn: 'Alumni (Java Backend Engineer at FPT Software)',
    quoteVi: 'Thầy Huy giảng dạy môn Spring MVC rất thực tế và truyền cảm hứng. Thầy không dạy lý thuyết suông mà luôn giải thích rõ bản chất đằng sau mỗi Annotation và cách doanh nghiệp triển khai. Nhờ kiến thức từ môn học của thầy, em đã tự tin đỗ vòng phỏng vấn kỹ thuật ngay lần đầu tiên!',
    quoteEn: 'Mr. Huy teaches Spring MVC with extraordinary clarity and real-world relevance. He deconstructs the inner workings behind every annotation rather than pure memorization. His mentorship helped me ace my first technical interview!'
  },
  {
    name: 'Lê Hoàng Yến',
    roleVi: 'Sinh viên năm 4 (Thủ khoa đồ án chuyên ngành Mobile)',
    roleEn: 'Final-year CS Student (Top Capstone Project Award)',
    quoteVi: 'Điều em ấn tượng nhất ở Thầy Huy là khả năng giải thích những khái niệm phức tạp như BLoC Pattern hay Đa hình trong OOP bằng ngôn ngữ cực kỳ gần gũi, sinh động. Thầy có vốn tiếng Anh chuyên ngành xuất sắc, luôn khuyến khích sinh viên đọc tài liệu gốc quốc tế.',
    quoteEn: 'What impressed me most is Mr. Huy’s gift for demystifying complex concepts like BLoC patterns and polymorphism using vivid, approachable analogies. His command of technical English inspired us to read international docs directly.'
  },
  {
    name: 'Nguyễn Tiến Đạt',
    roleVi: 'Sinh viên tham gia nhóm Nghiên cứu Khoa học Sinh viên do ThS. Huy hướng dẫn',
    roleEn: 'Student Researcher guided by MSc. Huy',
    quoteVi: 'Thầy luôn kiên nhẫn lắng nghe và tôn trọng ý tưởng của sinh viên. Dưới sự hướng dẫn tận tâm của thầy, nhóm em đã hoàn thành bài báo khoa học đầu tay về ứng dụng AI trong học tập và đạt giải Nhì cấp trường.',
    quoteEn: 'He is deeply patient, supportive, and open to student ideas. Under his dedicated guidance, our team completed our first research paper on AI in learning and won second prize university-wide.'
  }
];

export const FAQ_LIST = [
  {
    qVi: 'Thầy có nhận hướng dẫn sinh viên làm Đồ án Tốt nghiệp / Nghiên cứu khoa học không?',
    qEn: 'Do you accept supervising undergraduate graduation theses and student scientific research?',
    aVi: 'Có. Thầy luôn chào đón các bạn sinh viên có đam mê học hỏi, thái độ nghiêm túc và mong muốn nghiên cứu về: (1) Ứng dụng AI/GenAI trong Giáo dục; (2) Phát triển hệ thống Web Enterprise (Java Spring Boot/Microservices); (3) Ứng dụng Mobile thực chiến với Flutter. Các bạn vui lòng gửi email kèm CV/bảng điểm và ý tưởng đề tài qua email: ngquanghuy595@gmail.com.',
    aEn: 'Yes! I warmly welcome motivated students eager to research: (1) AI/GenAI in Education; (2) Enterprise Web Architectures (Spring Boot/Microservices); (3) Cross-platform Mobile Apps (Flutter). Please email your CV, transcript, and topic pitch to ngquanghuy595@gmail.com.'
  },
  {
    qVi: 'Lợi thế của việc học CNTT kết hợp với Ngôn ngữ Anh là gì?',
    qEn: 'What is the unique advantage of combining Computer Science with English Linguistics?',
    aVi: 'Tiếng Anh là chìa khóa tiếp cận kho tri thức toàn cầu, tài liệu kỹ thuật chuẩn quốc tế và các bài báo khoa học mới nhất trước khi được dịch lại. Hơn thế, việc hiểu sâu về ngôn ngữ học giúp rèn luyện khả năng phân tích ngữ nghĩa, giao tiếp hiệu quả với đồng nghiệp đa quốc gia và thấu hiểu cách các mô hình ngôn ngữ lớn (LLMs) hoạt động.',
    aEn: 'English unlocks the global computing knowledgebase, RFC standards, and cutting-edge papers firsthand. Moreover, linguistic depth cultivates semantic reasoning, cross-cultural collaboration fluency, and deeper intuition into how Large Language Models (LLMs) process syntax.'
  },
  {
    qVi: 'Sinh viên mới bắt đầu học lập trình nên tập trung vào những kỹ năng nào?',
    qEn: 'What core skills should freshman students prioritize when beginning their programming journey?',
    aVi: 'Hãy tập trung thật vững chắc vào 3 trụ cột: (1) Tư duy thuật toán & Giải quyết vấn đề cơ bản; (2) Hiểu sâu sắc bản chất Lập trình Hướng đối tượng (OOP) và Clean Code; (3) Kỹ năng tự đọc tài liệu kỹ thuật tiếng Anh và sử dụng công cụ AI như một người trợ lý phản biện thay vì phụ thuộc sao chép.',
    aEn: 'Focus intensely on 3 pillars: (1) Algorithmic fundamentals & problem decomposition; (2) Deep mastery of Object-Oriented Principles (OOP) and Clean Code; (3) Reading authentic English technical docs and treating AI as an inquisitive learning companion rather than a shortcut.'
  }
];
