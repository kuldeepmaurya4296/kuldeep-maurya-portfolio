// Main portfolio data source - customize this with your information
export const portfolioData = {
  hero: {
    name: "Kuldeep Maurya",
    title: "Full Stack Developer & Designer",
    subtitle: "Building beautiful, functional digital experiences",
    cta: "View My Work",
    image: "/kuldeep2.png",
  },
  files:{
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
    // {
    //   id: 1,
    //   title: "Flourishers Edge Corporate Website",
    //   subtitle: "Modern business website with animations & CMS integration",
    //   description:
    //     "A fully responsive corporate website built for Flourishers Edge Pvt. Ltd. using Next.js, Tailwind CSS, and Framer Motion. Designed with clean UI/UX and powered by Sanity CMS for dynamic content management.",
    //   image: "/projects/FE-home.png",
    //   bannerImage: "/projects/FE-banner.png",
    //   technologies: ["Next.js", "React", "Tailwind CSS", "Sanity CMS", "Framer Motion", "Vercel"],
    //   problem:
    //     "The company needed a modern, fast, animation-rich corporate website with full control over content through a CMS.",
    //   solutions: [
    //     "Developed a fully responsive UI using Tailwind CSS",
    //     "Added smooth page animations with Framer Motion",
    //     "Integrated Sanity CMS for real-time content updates",
    //     "Optimized performance using Next.js Server Components",
    //     "Implemented modular and scalable components",
    //   ],
    //   screenshots: ["/projects/FE-home.png",'/projects/FE-about.png', "/projects/FE-careers.png",'/projects/FE-projects.png', "/projects/FE-services.png","/projects/FE-contact.png"],
    //   liveLink: "https://www.flourishersedge.com/",
    //   githubLink: null
    // },

    // {
    //   id: 2,
    //   title: "Hind Convent School Website",
    //   subtitle: "Complete school information & management system",
    //   description:
    //     "A complete school website built with the MERN stack including notices, events, dynamic pages, and clean responsive UI. Ensures easy access to academic information for parents and students.",
    //   image: "/projects/hind-home.png",
    //   bannerImage: "/projects/hind-banner.png",
    //   technologies: ["Next.js", "React", "MongoDB", "Node.js", "Tailwind CSS", "Framer Motion"],
    //   problem:
    //     "The school needed a centralized and fast website where parents and students could access information easily.",
    //   solutions: [
    //     "Designed a modern and clean UI with Tailwind CSS",
    //     "Implemented smooth animations using Framer Motion",
    //     "Built dynamic sections using MongoDB",
    //     "Improved SEO with server-rendered pages",
    //     "Made the entire platform fully responsive",
    //   ],
    //   screenshots: ["/projects/hind-home.png", "/projects/hind-about.png", "/projects/hind-faq.png","/projects/hind-contact.png"],
    //   liveLink: "https://www.hindconventschool.com/",
    //   githubLink: null
    // },

    // {
    //   id: 3,
    //   title: "Swatantra India News Portal",
    //   subtitle: "Digital news platform with CMS & PDF newspaper viewer",
    //   description:
    //     "A powerful news portal built using Next.js and Sanity CMS. Includes category-based news rendering, article pages, animated transitions, and PDF newspaper viewer.",
    //   image: "/projects/swatantra-home.png",
    //   bannerImage: "/projects/swatantra-banner.png",
    //   technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Framer Motion", "PDF Viewer"],
    //   problem:
    //     "The news agency needed a modern digital platform to publish news, articles, and daily PDF editions quickly.",
    //   solutions: [
    //     "Integrated Sanity CMS for category-based news management",
    //     "Added a fast PDF viewer for digital newspapers",
    //     "Used Next.js ISR for real-time content updates",
    //     "Implemented animations using Framer Motion",
    //     "Optimized SEO with dynamic routing",
    //   ],
    //   screenshots: ["/projects/swatantra-home.png", "/projects/swatantra-post.png", "/projects/swatantra-share.png",  "/projects/swatantra-subs.png",  "/projects/swatantra-pdf.png"],
    //   liveLink: "https://swatantra-india-news.vercel.app/",
    //   githubLink: null
    // },

    {
      id: 4,
      title: "Spinx Template",
      subtitle: "Premium modern landing page template",
      description:
        "A high-quality, modern, and animated landing page template built with Next.js. Designed for marketing, startups, and agency websites with smooth UI motion.",
      image: "/projects/spinx-home.png",
      bannerImage: "/projects/spinx-banner.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
      problem:
        "The company needed a reusable landing page template to quickly develop modern websites for clients.",
      solutions: [
        "Created a pixel-perfect UI using Tailwind CSS",
        "Added component-level animations with Framer Motion",
        "Structured reusable sections for easy customization",
        "Optimized layout for high-speed performance",
        "Ensured mobile-first responsive design",
      ],
      screenshots: ["/projects/spinx-home.png", "/projects/spinx-c.png", "/projects/spinx-s.png","/projects/spinx-we.png"],
      liveLink: "https://spinx-template.vercel.app/",
      githubLink: "https://github.com/spideyO0/spinx-template"
    },

    {
      id: 5,
      title: "Nova uPVC Commercial Website",
      subtitle: "Corporate landing page with Slice Machine integration",
      description:
        "A commercial uPVC brand website designed and developed using Next.js and Prismic Slice Machine for structured and dynamic content sections.",
      image: "/projects/nova-home.png",
      bannerImage: "/projects/nova-banner.png",
      technologies: ["Next.js", "Prismic", "Slice Machine", "Tailwind CSS"],
      problem:
        "The client needed a flexible commercial website where components could be added or edited through Prismic CMS.",
      solutions: [
        "Designed a clean and premium commercial UI",
        "Implemented custom Prismic Slices for dynamic content",
        "Built reusable marketing components",
        "Optimized for high performance on Vercel",
        "Ensured device-friendly responsive layout",
      ],
      screenshots: ["/projects/nova-home.png", "/projects/nova-a.png", "/projects/nova-b.png","/projects/nova-c.png"],
      liveLink: "https://generic-web-page.vercel.app/",
      githubLink: "https://github.com/spideyO0/novaupvc-landingpage-slicemachine"
    },

    // {
    //   id: 6,
    //   title: "Tulip LMS (Learning Management System)",
    //   subtitle: "EdTech LMS platform (contributed)",
    //   description:
    //     "A learning management system built for an education company. I contributed in UI development, layout fixing, and frontend integration.",
    //   image: "/ecommerce-website.jpg",
    //   bannerImage: "/ecommerce-website.jpg",
    //   technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    //   problem:
    //     "The EdTech company required an organized interface for courses, students, and progress tracking.",
    //   solutions: [
    //     "Improved UI layout for dashboards",
    //     "Enhanced component structures",
    //     "Fixed responsive and styling issues",
    //     "Worked on frontend API integrations",
    //   ],
    //   // screenshots: ["/ecommerce-website.jpg", "/ecommerce-website.jpg", "/ecommerce-website.jpg"],
    //   liveLink: null,
    //   githubLink: "https://github.com/mehul7169/tulip-lms"
    // },

    {
      id: 7,
      title: "Text Summarizer",
      subtitle: "AI-based text summary generator",
      description:
        "A mini project built using Python Flask for summarizing large text content. Includes a minimal UI using HTML, CSS and supports real-time summary generation.",
      image: "/ecommerce-website.jpg",
      bannerImage: "/ecommerce-website.jpg",
      technologies: ["Python", "Flask", "HTML", "CSS"],
      problem:
        "Students needed a lightweight tool to summarize large content quickly.",
      solutions: [
        "Built a simple Flask backend for summarization",
        "Created a clean and minimal frontend",
        "Implemented character & sentence extraction",
        "Added responsive layout",
      ],
      screenshots: ["/ecommerce-website.jpg"],
      liveLink: null,
      // githubLink: "https://github.com/kuldeepmaurya4296/TextSummarizer"
    },

    {
      id: 8,
      title: "TextUtils",
      subtitle: "React-based text utility tool",
      description:
        "My first React project that provides multiple text transformation features including uppercase, lowercase, copy text, clear text, and dark mode.",
      image: "/projects/text-utills.png",
      bannerImage: "/projects/text-utills.png",
      technologies: ["React", "JavaScript", "Bootstrap"],
      problem:
        "Users needed a quick tool to transform and clean text directly from the browser.",
      solutions: [
        "Built fast text transformation utilities",
        "Added dark/light mode switching",
        "Implemented reusable functional components",
        "Made the UI clean and responsive",
      ],
      screenshots: ["/projects/text-utills.png"],
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
