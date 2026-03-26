// Main portfolio data source - enhanced based on provided profile
export const portfolioData = {
  hero: {
    name: "Kuldeep Maurya",
    title: "Full Stack Developer",
    subtitle: "Building Scalable SaaS Platforms & High-Performance Web Applications. Expertise in backend systems, multi-tenant architecture, and production-ready enterprise applications.",
    cta: "View My Work",
    image: "/kuldeep2.png",
  },
  files: {
    resume: "/resume.pdf",
  },
  about: {
    title: "About Me",
    description: `I am a Full Stack Web Developer with over 1.5 years of experience building scalable SaaS platforms, CRM systems, and high-performance applications. I specialize in robust backend architecture, REST API design, Role-Based Access Control (RBAC) systems, and aggressive performance optimization.

Driven by a passion for solving complex engineering challenges, I have independently driven the development of 15+ production-grade web applications. These span across various sectors, including corporate business portals, educational platforms, and NGO systems. I possess a strong track record of engineering multi-tenant software solutions that can securely support upwards of 1000+ active users, transforming broad requirements into secure, seamless, and optimized digital products.`,
    image: "/kuldeep3.png",
  },
  skills: [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Redux Toolkit", level: 80, category: "Frontend" },
    { name: "SEO Optimization", level: 85, category: "Frontend" },

    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 85, category: "Backend" },
    { name: "REST API Design", level: 90, category: "Backend" },
    { name: "JWT & RBAC", level: 90, category: "Backend" },

    { name: "MongoDB", level: 85, category: "Database" },
    { name: "Mongoose", level: 85, category: "Database" },
    { name: "Data Modeling", level: 80, category: "Database" },
    { name: "Query Optimization", level: 80, category: "Database" },

    { name: "Data Structures & Algorithms", level: 80, category: "Programming" },
    { name: "Java (OOP)", level: 85, category: "Programming" },
    { name: "System Design", level: 75, category: "Programming" },
    { name: "Scalable Architecture", level: 80, category: "Programming" }
  ],
  projects: [
    {
      id: "fakhri",
      title: "Fakhri IT Services Workspace",
      subtitle: "Comprehensive SaaS-based CRM & Workflow Automation",
      description: "An intensive SaaS platform configured to modernize business operations. It combines a powerful Customer Relationship Management (CRM) core, customizable granular dashboards, and streamlined workflow automation into a unified portal. Engineered with advanced RBAC, enabling distinct operational boundaries for Super Admins, Admins, and general Clients.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
      bannerImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      technologies: ["Next.js", "Node.js", "MongoDB", "RBAC", "Tailwind CSS"],
      problem: "Enterprises traditionally rely on disjointed, multiple tools for managing client interactions, task allocation, and workflows, resulting in profound operational inefficiencies.",
      solutions: [
        "Architected a centralized SaaS workspace bringing CRM and operations natively together.",
        "Implemented strict JWT authentication layered with complex multi-level Role-Based Access Control.",
        "Scaled the platform to smoothly manage operations for over 1000+ active clients and extensive employee databases.",
        "Slashed operational redundancies by 50% through automated processes."
      ],
      liveLink: "https://www.fakhriitservices.com",
      githubLink: null
    },
    {
      id: "erohan",
      title: "Erohan Foundation",
      subtitle: "NGO Management & Secured Donation Portal",
      description: "A digital ecosystem formulated exclusively for the Erohan Foundation, promoting global digital donations seamlessly. Integrating a highly versatile responsive storefront with a custom management backend, allowing continuous campaign monitoring, transparency, and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      bannerImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      technologies: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
      problem: "The foundation required a reliable channel to digitize donations, enforce complete regulatory compliance, and orchestrate various funding campaigns securely.",
      solutions: [
        "Embedded end-to-end Razorpay payment integration to ensure secure, uninterrupted financial transactions.",
        "Forged an intuitive CMS dashboard offering administrators immediate oversight of funds and campaign trajectories.",
        "Augmented user trust via polished UI/UX ensuring maximum conversions during fundraising runs."
      ],
      liveLink: "https://www.erohanfoundation.org",
      githubLink: null
    },
    {
      id: "news",
      title: "Swatantra India News",
      subtitle: "High-Speed Dynamic Editorial Portal",
      description: "A fast rendering news broadcasting application built on a headless CMS framework. Handles colossal content uploads efficiently while maintaining supreme Core Web Vital scores and maximizing SEO footprints. Designed specifically to maintain editorial flexibility for immediate mass-scale announcements.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      bannerImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      technologies: ["Next.js", "React", "CMS", "Tailwind CSS"],
      problem: "Newspapers need ultra-fast web endpoints and a friction-free pipeline for journalists to continually push content without technical bottlenecks.",
      solutions: [
        "Connected a robust backend CMS allowing seamless editorial modifications and category tagging.",
        "Leveraged advanced Next.js server-side capabilities producing unparalleled loading times.",
        "Achieved comprehensive SEO alignment to capture immense organic search engine traffic."
      ],
      liveLink: "https://www.swatantraindia.in",
      githubLink: null
    },
    {
      id: "flourishers",
      title: "Flourishers Edge",
      subtitle: "Premium Corporate Web Infrastructure",
      description: "An elegant, polished, and meticulously optimized corporate portal serving as the primary lead generation structure for Flourishers Edge. Embraces immersive micro-animations, clear architectural styling, and direct API integrations supporting B2B service demonstrations.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      bannerImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      problem: "The corporate entity needed to transform an outdated digital appearance into a highly convertible, trust-inspiring, modern asset.",
      solutions: [
        "Developed custom UI libraries offering crisp transitions utilizing Framer Motion.",
        "Reduced overall page-load latencies utilizing intelligent asset hydration techniques.",
        "Elevated brand professionalism to aggressively target enterprise clientele."
      ],
      liveLink: "https://flourishersedge.com",
      githubLink: null
    },
    {
      id: "school",
      title: "Hind Convent School",
      subtitle: "Dedicated Educational Gateway",
      description: "An essential academic synchronization platform engineered to bridge communication gaps among administrators, scholars, and guardians. Hosts dynamic notice boards, immediate event tracking, and intuitive facility tours all encased in a universally accessible web framework.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      bannerImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      technologies: ["Next.js", "MongoDB", "Node.js", "REST API"],
      problem: "Educational institutions require straightforward workflows to continually keep parents universally updated independently from manual circulars.",
      solutions: [
        "Provided a clear mobile-first design language catering extensively directly to parents on mobile endpoints.",
        "Created an autonomous data structure simplifying routine updates generated by school officials.",
        "Assisted in unifying brand identity scaling its online presence substantially."
      ],
      liveLink: "https://www.hindconventschool.com",
      githubLink: null
    },
    {
      id: "sarvatralabs",
      title: "Sarvatra Labs Infrastructure",
      subtitle: "B2B Tech Showcasing Platform",
      description: "A highly resilient corporate structure emphasizing B2B technological proficiency. Serves successfully scaled services securely conveying sophisticated digital portfolios and agency authority.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      bannerImage: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      technologies: ["Next.js", "React", "Optimization"],
      problem: "Technology agencies require extremely high-performance portfolios to empirically demonstrate their actual capabilities to technical clients.",
      solutions: [
        "Solidified rigorous performance optimizations attaining maximum index benchmarks.",
        "Segmented code-base structurally enabling quick scaling and integrations."
      ],
      liveLink: "https://www.sarvatralabs.com",
      githubLink: null
    }
  ],
  services: [
    {
      title: "Full Stack Development",
      description: "End-to-end web application development crafting beautiful, responsive frontends and highly scalable, secure backend architectures.",
      icon: "code",
    },
    {
      title: "Backend & Systems Design",
      description: "Specializing in multi-tenant SaaS engineering, resilient REST APIs, and comprehensive Role-Based Access Control (RBAC) modeling.",
      icon: "server",
    },
    {
      title: "Optimization & Scalability",
      description: "Enhancing enterprise platforms using database indexing, complex query optimizations, payload reductions, and robust caching paradigms.",
      icon: "briefcase",
    },
    {
      title: "Modern UI/UX Implementation",
      description: "Deploying sophisticated web layouts utilizing Next.js, Framer Motion, and Tailwind CSS ensuring premier user conversions.",
      icon: "palette",
    },
  ],
  experience: [
    {
      company: "Pushpako2",
      position: "Full Stack Developer",
      duration: "Jan 2026 – Present",
      description: "Architecting and building sophisticated, scalable web applications and enterprise-level backend systems. Overseeing vast deployments prioritizing security, speed, and seamless scaling.",
      achievements: [
        "Developed and successfully launched 10+ production-ready web platforms handling substantial real-world data.",
        "Engineered backend solutions confidently supporting operations for over 1000+ simultaneous users and business clients.",
        "Drastically optimized API architectures, effectively decreasing payload transmission by 40%.",
        "Significantly improved overall database operational velocity via structured indexing protocols and resilient caching techniques."
      ],
    },
    {
      company: "Flourishers Edge Pvt. Ltd.",
      position: "Frontend Developer",
      duration: "Aug 2024 – Jan 2026",
      description: "Spearheaded advanced frontend development cycles, generating custom CMS dashboard structures, optimizing client-facing platforms, and achieving maximum organic reach.",
      achievements: [
        "Engineered premium corporate user interfaces maximizing core Next.js efficiencies mixed with Tailwind CSS styling.",
        "Boosted core web vital scores, successfully amplifying organic performance rendering speeds by over 25%.",
        "Erected strictly responsive, user-friendly CMS management endpoints empowering editorial independence.",
        "Greatly elevated foundational SEO ranking positions employing strict optimization strategies and modern layout schemas."
      ],
    },
  ],
  education: [
    {
      school: "Technocrats Institute of Technology",
      degree: "B.Tech in Computer Science & Engineering – AIML",
      year: "2020 - 2024",
      details: "CGPA: 88% | GATE 2026 Qualified (DA) – AIR 5078 | GATE 2026 Qualified (CS) – AIR 13656",
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
    title: "Available for Technical Ventures",
    description: "I am actively open to expansive freelance projects focused firmly on full stack web architecture, stringent backend configurations, SaaS platforms, and dedicated technical consultancy.",
    services: ["SaaS Architecture", "Database Modeling", "API Integration", "High-Performance Next.js Builds"],
    rate: "",
  },
  contact: {
    email: "kuldeepmaurya4296@gmail.com",
    phone: "+91-6263638053",
    location: "Bhopal, Madhya Pradesh, India",
    socials: [
      { name: "GitHub", url: "https://github.com/kuldeepmaurya4296", icon: "/social/github.png" },
      { name: "LinkedIn", url: "https://linkedin.com/in/kuldeepmaurya4296", icon: "/social/linkedin.png" },
      { name: "Whatsapp", url: "https://wa.me/+916263638053", icon: "/social/whatsapp.png" },
    ],
  },
};
