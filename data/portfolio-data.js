// Main portfolio data source - customize this with your information
export const portfolioData = {
  hero: {
    name: "Kuldeep Maurya",
    title: "Full Stack Developer & Designer",
    subtitle: "Building beautiful, functional digital experiences",
    cta: "View My Work",
    image: "/kuldeep2.png",
  },
  files: {
    resume: '/resume.pdf',
  },
  about: {
    title: "About Me",
    description: `I am a MERN Stack and Java Developer with strong experience in building modern, responsive, and user-friendly web applications. I currently work as a Frontend Developer at Flourishers Edge Pvt. Ltd., where I create websites using Next.js, React, Tailwind CSS, and Framer Motion.

    I have built real-world projects such as corporate websites, school websites, landing page templates, a news portal with CMS, a real-time chat application, a text summarizer, and many utility tools. I enjoy writing clean code, improving UI/UX, and learning new technologies.
    
    My focus is on building fast, smooth, and visually appealing web experiences. I love solving problems and continuously improving my development skills.`,

    image: "/kuldeep3.png",
  },
  skills: [
    // Frontend
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Next.js", level: 88, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 92, category: "Frontend" },
    { name: "TypeScript", level: 80, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Framer Motion", level: 85, category: "Frontend" },

    // Backend
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 82, category: "Backend" },
    { name: "MongoDB", level: 80, category: "Backend" },
    { name: "MySQL / SQL", level: 78, category: "Backend" },

    // Programming
    { name: "Java", level: 85, category: "Programming" },
  ],
 projects: [
  {
    id: 1,
    title: "Modern Corporate Web Platform",
    subtitle: "High-performance business website with animations & CMS integration",
    description:
      "A highly responsive and visually rich corporate web platform built using Next.js and Tailwind CSS. The website features smooth animations using Framer Motion, structured layouts, fast rendering, and a headless CMS for dynamic content updates. This project focuses on delivering a premium UI/UX experience with optimized loading speed, SEO-friendly architecture, and scalable components. The entire platform is designed to empower the internal content team to manage pages, services, and updates independently without developer involvement, ensuring long-term maintainability and flexibility.",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    bannerImage: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "CMS", "Vercel"],
    problem:
      "The organization needed a modern and feature-rich corporate website that could deliver high performance, smooth animations, and dynamic content management while maintaining a premium brand presence.",
    solutions: [
      "Developed a complete UI system with reusable and scalable components",
      "Integrated headless CMS for easy content management without developer dependency",
      "Implemented smooth animations using Framer Motion for interactive UI",
      "Improved SEO using server-side rendering and optimized metadata",
      "Enhanced site performance using image optimization and caching techniques",
      "Created a clean, consistent, and professional design suitable for corporate branding"
    ],
    // screenshots: [
    //   "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
    //   "https://images.unsplash.com/photo-1550439062-609e1531270e"
    // ],
    liveLink: null,
    githubLink: null
  },

  {
    id: 2,
    title: "Educational Institution Web Portal",
    subtitle: "Complete school information & responsive academic platform",
    description:
      "A centralized, informative, and responsive school website created to help parents and students access academic information easily. The portal includes structured pages for notices, events, curriculum, faculty, facilities, FAQs, and contact details. Built using the MERN stack and Next.js for hybrid rendering, the project focuses on clarity, accessibility, and mobile-first design. It also includes smooth UI transitions and optimized loading times. Designed to be intuitive, the platform helps educational institutions create a strong digital presence and keeps stakeholders updated effortlessly.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    bannerImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    technologies: ["Next.js", "React", "MongoDB", "Node.js", "Tailwind CSS", "Framer Motion"],
    problem:
      "The institution needed a centralized digital platform to share academic updates, notices, events, and essential student resources instantly in an organized and accessible way.",
    solutions: [
      "Developed a clean and responsive UI optimized for parents and students",
      "Built dedicated sections for academic updates and campus-related information",
      "Integrated MongoDB for dynamic data handling and structured content",
      "Implemented smooth transitions using Framer Motion for better UX",
      "Improved page visibility with SEO-friendly server-side rendering",
      "Ensured fast loading performance across all device sizes"
    ],
    // screenshots: [
    //   "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    //   "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
    // ],
    liveLink: null,
    githubLink: null
  },

  {
    id: 3,
    title: "Digital News & Article Publishing Portal",
    subtitle: "Dynamic news website with CMS & e-paper viewer",
    description:
      "A modern and high-speed digital news platform built using Next.js and a headless CMS. The platform supports category-based news publishing, dynamic article pages, fast routing, and structured metadata for improved SEO. It also includes a built-in PDF viewer that allows users to read digital newspaper editions directly on the website. With smooth animations, high-performance rendering, and clean typography, this news portal provides an engaging and professional reading experience, while allowing editors to publish content instantly.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    bannerImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    technologies: ["Next.js", "Tailwind CSS", "CMS", "Framer Motion", "PDF Viewer"],
    problem:
      "The agency needed a fast and flexible news publishing system with support for category-wise articles and digital newspaper uploads.",
    solutions: [
      "Integrated headless CMS for quick news and article publishing",
      "Added dynamic article routing with SEO-friendly structures",
      "Implemented a PDF viewer for digital newspaper editions",
      "Designed smooth animated transitions for a refined reading experience",
      "Used ISR for near real-time data updates and low server load",
      "Optimized images, metadata, and layouts for high performance"
    ],
    // screenshots: [
    //   "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    //   "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    // ],
    liveLink: null,
    githubLink: null
  },

  {
    id: 4,
    title: "Spinx Template",
    subtitle: "Premium animated landing page template",
    description:
      "A premium-quality landing page template designed for marketing agencies, startups, and modern businesses. Built with Next.js and Tailwind CSS, this template provides smooth animations, responsive sections, and a highly customizable layout. It includes multiple prebuilt sections such as features, services, testimonials, call-to-action blocks, and hero banners. The template focuses on visual appeal, modularity, and performance optimization, helping developers quickly build stunning websites without starting from scratch.",
    image: "/projects/spinx-home.png",
    bannerImage: "/projects/spinx-banner.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    problem:
      "Developers and agencies needed a reusable, highly customizable landing page template that could be quickly adapted for different clients.",
    solutions: [
      "Created a modular component-based structure for customization",
      "Designed a visually premium interface with clean spacing and alignment",
      "Added smooth animations with Framer Motion to enhance UX",
      "Optimized layout for high performance and faster load speed",
      "Ensured mobile-first design with full responsiveness",
      "Provided ready-made sections for faster project delivery"
    ],
    // screenshots: [
    //   "/projects/spinx-home.png",
    //   "/projects/spinx-c.png"
    // ],
    liveLink: "https://spinx-template.vercel.app/",
    githubLink: "https://github.com/spideyO0/spinx-template"
  },

  {
    id: 5,
    title: "uPVC Product Landing Platform",
    subtitle: "Commercial landing page with CMS slice integration",
    description:
      "A product-focused commercial landing platform featuring customizable content blocks powered by Prismic Slice Machine. Designed specifically for showcasing product details, brand highlights, and commercial service offerings. The website includes reusable slice components, responsive layouts, structured typography, and a clean visual hierarchy. It enables marketing teams to update content dynamically without coding. The platform is optimized for fast rendering, consistent layout behavior, and high performance across all devices.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    bannerImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    technologies: ["Next.js", "Prismic CMS", "Slice Machine", "Tailwind CSS"],
    problem:
      "The brand needed a flexible landing platform where content blocks could be updated or rearranged through a CMS without technical assistance.",
    solutions: [
      "Developed modular slices in Prismic for easy content editing",
      "Created a premium UI layout that aligns with commercial branding",
      "Implemented reusable marketing sections for scalability",
      "Ensured fast and optimized loading using Next.js features",
      "Improved responsiveness to make it functional on all devices",
      "Added structured layouts for clear and persuasive product presentation"
    ],
    // screenshots: [
    //   "https://images.unsplash.com/photo-1506765515384-028b60a970df"
    // ],
    liveLink: null,
    githubLink: null
  },

  {
    id: 6,
    title: "Learning Management System (LMS)",
    subtitle: "Dashboard UI & frontend integration (contribution)",
    description:
      "Contributed to the UI and frontend logic of a Learning Management System designed for course management, student progress tracking, and instructor modules. My work involved designing responsive layouts, building structured components, optimizing UI behavior, and integrating APIs for dynamic content flow. The focus was to create a clean, intuitive, and accessible interface that improves user efficiency and enhances the overall system usability.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    bannerImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    problem:
      "The organization needed a structured LMS interface that was easy to use for students, instructors, and admins.",
    solutions: [
      "Improved dashboard layouts for better visual structure",
      "Designed responsive UI components for cross-device usability",
      "Worked on frontend API integration for dynamic course data",
      "Created reusable components for a scalable architecture",
      "Enhanced the overall user experience with clean UI patterns",
      "Fixed layout bugs and styling inconsistencies across modules"
    ],
    // screenshots: [
    //   "https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
    // ],
    liveLink: null,
    githubLink: null
  },

  {
    id: 7,
    title: "Text Summarizer",
    subtitle: "AI-powered text summary generator",
    description:
      "A lightweight and intuitive text summarization tool built using Python Flask. The project allows users to input long paragraphs and instantly receive concise summaries. It includes a clean frontend interface made with HTML & CSS and backend logic for extracting key information. This tool is ideal for students and readers who want quick insights from long content. It is optimized for fast processing, minimal UI complexity, and straightforward usability.",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
    bannerImage: "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
    technologies: ["Python", "Flask", "HTML", "CSS"],
    problem:
      "Students needed a simple and quick tool to generate summaries from large pieces of text without manual effort.",
    solutions: [
      "Developed a Flask backend to process large inputs efficiently",
      "Designed a simple and clean UI for easy usage",
      "Implemented logic for extracting key sentences based on frequency",
      "Added character and word limit handling for smooth input testing",
      "Ensured responsive UI using basic CSS styling",
      "Provided real-time output for instant readability"
    ],
    // screenshots: [
    //   "https://images.unsplash.com/photo-1556157382-97eda2d62296"
    // ],
    liveLink: null,
    githubLink: null
  },

  {
    id: 8,
    title: "TextUtils",
    subtitle: "React-based text transformation tool",
    description:
      "A beginner-friendly yet efficient text utility tool built using React. It provides multiple features including uppercase/lowercase conversion, text copying, clearing text, and dark/light mode switching. The UI is designed using Bootstrap to ensure simplicity and responsiveness. This project helped build strong fundamentals in functional components, state management, event handling, and React routing. It's a fast, user-friendly, and practical tool for everyday text manipulation tasks.",
    image: "/projects/text-utills.png",
    bannerImage: "/projects/text-utills.png",
    technologies: ["React", "JavaScript", "Bootstrap"],
    problem:
      "Users needed a quick and easy-to-use tool to format and manipulate text directly from a web browser.",
    solutions: [
      "Developed text transformation utilities like uppercase/lowercase conversion",
      "Added dark/light mode for better readability",
      "Implemented copy-to-clipboard functionality",
      "Created reusable functional components for clean architecture",
      "Ensured fast performance using React state updates",
      "Designed a responsive interface using Bootstrap"
    ],
    // screenshots: [
    //   "/projects/text-utills.png"
    // ],
    liveLink: "https://kuldeepmaurya4296.github.io/TextUtils-React/",
    githubLink: "https://github.com/kuldeepmaurya4296/TextUtils-React/"
  }
],



  services: [
    {
      title: "Web Development",
      description: "Custom web applications using React, Next.js, and modern JavaScript frameworks.",
      icon: "code",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-centered interfaces designed with Figma and built with Tailwind CSS.",
      icon: "palette",
    },
    {
      title: "Backend Development",
      description: "Scalable server solutions with Node.js, databases, and cloud deployment.",
      icon: "server",
    },
    {
      title: "Consulting",
      description: "Technical guidance and architecture planning for your next big project.",
      icon: "briefcase",
    },
  ],

  experience: [
    {
      company: "Flourishers Edge Pvt. Ltd.",
      position: "Front End Developer ",
      duration: "2024 - Present",
      description:
        "Working as a Frontend Developer focusing on building modern, responsive, and animation-rich websites using Next.js and Tailwind CSS.",
      achievements: [
        "Developed a complete corporate website using Next.js, Tailwind CSS & Framer Motion",
        "Implemented animations, scroll effects & responsive layouts",
        "Integrated Sanity CMS for dynamic content updates",
        "Improved UI/UX for client projects with reusable component architecture",
      ],
    },
    {
      company: "Freelance / Personal Projects",
      position: "Full Stack Developer",
      duration: "2022 - 2024",
      description:
        "Built multiple production-level projects including school websites, news portals, landing pages, and utility apps using the MERN stack.",
      achievements: [
        "Created a complete School Website (HCS) using MERN & Next.js",
        "Developed a News Portal with Sanity CMS and PDF Viewer",
        "Built Spinx and Nova uPVC landing page templates",
        "Completed projects like Real-Time Chat App, Text Summarizer, TextUtils, and more",
      ],
    },
  ],

  education: [
    {
      school: "Technocrats Institute of Technology",
      degree: "B.Tech in Computer Science & Engineering – AIML",
      year: "2020 - 2024",
      details: "CGPA: 88%",
    },
    {
      school: "Govt. Model H S School, Sitlaha, Rewa",
      degree: "Higher Secondary (Class 12th)",
      year: "2020",
      details: "Marks: 83.6%",
    },
    {
      school: "Govt. Model H S School, Sitlaha, Rewa",
      degree: "High School (Class 10th)",
      year: "2018",
      details: "Marks: 87.7%",
    },
  ],

  freelancing: {
    title: "Available for Freelance Projects",
    description: "I'm open to freelance opportunities for web development, consulting, and technical mentorship.",
    services: ["Web Development", "Code Review", "Technical Consulting", "UI/UX Design"],
    rate: "",
  },
  contact: {
    email: "kuldeepmaurya4296@gmail.com",
    phone: "+91 6263638053",
    location: "Bhopal Madhya Pradesh",
    socials: [
      { name: "GitHub", url: "https://github.com/kuldeepmaurya4296/", icon: "/social/github.png" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/kuldeepmaurya4296/", icon: "/social/linkedin.png" },
      { name: "Whatsapp", url: "https://wa.me/+916263638053", icon: "/social/whatsapp.png" },
    ],
  },
};
