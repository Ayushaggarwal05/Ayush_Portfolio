import profileimg from "../assets/profileimg.jpeg";

export const portfolioData = {
  personalInfo: {
    name: "Ayush Aggarwal",
    title: "Full Stack Engineer & AIML Enthusiast",
    tagline:
      "Building high-performance, visually stunning web applications with modern SaaS aesthetics.",
    aboutMe:
      "I am a passionate software engineer specializing in building premium web applications. With expertise spanning front-end craftsmanship and solid back-end architecture, I design digital experiences that are fast, stable, and visually captivating.",
    location: "Delhi, India",
    email: "aayushaggarwal348@gmail.com",
    github: "https://github.com/Ayushaggarwal05",
    linkedin: "https://www.linkedin.com/in/ayushaggarwal005/",
    twitter: "https://twitter.com",
    resumeUrl: "#",
    avatar: profileimg,
    status: "Available for Hire",
    expertise: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Python",
      "Next.js",
      "AIML",
      "System Design",
    ],
    stats: [
      { id: 1, label: "Years Learning & Building", value: "1+" },
      { id: 2, label: "Projects Completed", value: "8+" },
      { id: 3, label: "Client Satisfaction", value: "100%" },
      { id: 4, label: "Coffee Consumed", value: "85+" },
    ],
  },

  services: [
    {
      id: "service-1",
      title: "Frontend Craftsmanship",
      icon: "Cpu",
      description:
        "Designing sleek, responsive, and interactive user interfaces using React, Tailwind CSS, and Framer Motion for flawless transitions.",
    },
    {
      id: "service-2",
      title: "Full Stack Development",
      icon: "Layers",
      description:
        "Developing robust, scalable server-side systems, secure RESTful APIs, and efficient database architectures using Node.js, Express, and databases.",
    },
    {
      id: "service-3",
      title: "Performance Optimization",
      icon: "Zap",
      description:
        "Auditing and accelerating web applications. Fine-tuning bundle sizes, caching strategies, and asset delivery to score 95+ on Lighthouse.",
    },
    {
      id: "service-4",
      title: "UI/UX & SaaS Architecture",
      icon: "Layout",
      description:
        "Bridging the gap between design and clean code. Developing scalable UI component libraries and modular design systems.",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Python", level: 85 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React.js", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "Node.js & Express", level: 80 },
        { name: "Redux / Zustand", level: 85 },
        { name: "Framer Motion", level: 88 },
      ],
    },
    {
      category: "Styling & UI",
      items: [
        { name: "Tailwind CSS", level: 95 },
        { name: "PostCSS", level: 90 },
        { name: "CSS Modules / Sass", level: 85 },
      ],
    },
    {
      category: "Tools & Backend",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "MongoDB & PostgreSQL", level: 80 },
        { name: "Docker", level: 70 },
        { name: "Vercel / AWS", level: 85 },
      ],
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Senior Frontend Engineer",
      company: "WebCraft Solutions",
      duration: "2024 - Present",
      description:
        "Leading frontend development for enterprise-grade SaaS products. Refactored the core design system using clean Tailwind architecture, improving page loading performance by 35%.",
    },
    {
      id: "exp-2",
      role: "Full Stack Developer",
      company: "AppStudio Technologies",
      duration: "2022 - 2024",
      description:
        "Designed and engineered secure payment integrations, real-time messaging services using WebSockets, and scalable REST APIs using Express.js and PostgreSQL.",
    },
    {
      id: "exp-3",
      role: "Associate Web Developer",
      company: "PixelPerfect Labs",
      duration: "2021 - 2022",
      description:
        "Developed and launched custom responsive websites for global clients. Integrated Headless CMS configurations, customized SVG graphics, and managed SEO optimization plans.",
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "CrewFlow",
      category: "Multi-Tenant SaaS",
      subtitle: "Multi-Tenant SaaS Project Management Platform",
      description:
        "A production-grade project management SaaS platform engineered for strict organization-level data isolation, hierarchical enterprise RBAC, and an optimistic drag-and-drop Kanban engine.",
      features: [
        "Scoped organization-level data multi-tenancy & isolation",
        "Enterprise-grade hierarchical RBAC custom permission models",
        "Drag-and-drop Kanban workflow boards with optimistic updates"
      ],
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
      tags: [
        "Django",
        "React",
        "Redux Toolkit",
        "PostgreSQL",
        "Tailwind CSS",
        "@dnd-kit",
      ],
      stats: { performance: "98%", security: "Strict RBAC" },
      liveUrl: "#",
      githubUrl: "https://github.com/Ayushaggarwal05/CrewFlow",
    },
    {
      id: "proj-2",
      title: "Kisan Saathi",
      category: "Full-Stack Portal",
      subtitle: "AI-Powered Agricultural Empowerment Portal",
      description:
        "An AI-driven agricultural platform bridging the gap between traditional farming and modern tech. Features Gemini AI plant disease diagnosis, real-time crop Mandi price analytics via web scraping, and hyper-local precision weather forecasting.",
      features: [
        "Computer Vision Gemini crop disease diagnosis models",
        "Live Mandi crop price scraping & Recharts visual logs",
        "Hyper-local precision weather forecasting & alerts"
      ],
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gemini AI",
        "Tailwind CSS",
      ],
      stats: { accuracy: "95% AI", database: "MongoDB" },
      liveUrl: "#",
      githubUrl: "https://github.com/Ayushaggarwal05/Kisan-Saathi-Project-",
    },
    {
      id: "proj-3",
      title: "Netflix-GPT",
      category: "UI / Interactive",
      subtitle: "Conversational Movie Search & Streaming Clone",
      description:
        "A high-fidelity Netflix clone integrating Clerk authentication, dynamic TMDB movie catalogs, and immersive YouTube trailer backdrops. Features a custom Redux Toolkit state architecture, multi-language localization, and an intelligent Gemini-powered GPT search engine.",
      features: [
        "Clerk and Firebase unified session authentication keys",
        "TMDB real-time catalog feeds with YouTube backdrop trailers",
        "Gemini SDK custom natural-language movie query resolution"
      ],
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
      tags: [
        "React",
        "Gemini AI",
        "Redux Toolkit",
        "Clerk Auth",
        "Tailwind CSS",
        "TMDB API",
      ],
      stats: { search: "AI GPT", responsive: "Fluid" },
      liveUrl: "#",
      githubUrl: "https://github.com/Ayushaggarwal05/Netflix-GPT-",
    },
    {
      id: "proj-4",
      title: "Ryze AI Redesign",
      category: "UI / Interactive",
      subtitle: "GreenSock-Animated High-Converting Marketing Site",
      description:
        "A visually premium marketing website redesign for the Ryze AI ad platform. Features complex GSAP scroll-triggered timelines, modular glassmorphism cards, Framer Motion micro-interactions, and high-converting marketing inner pages.",
      features: [
        "Complex GSAP scroll-triggered layout timelines",
        "Highly reusable glassmorphic component layout templates",
        "Fluid Framer Motion micro-interactions & transitions"
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "GSAP", "Framer Motion", "Tailwind CSS", "React Router"],
      stats: { animation: "GSAP 3", UX: "Modern" },
      liveUrl: "#",
      githubUrl: "https://github.com/Ayushaggarwal05/Ryze_Redesign_website",
    },
    {
      id: "proj-5",
      title: "Traveller",
      category: "Full-Stack Portal",
      subtitle: "Smart Travel Planning & Route Optimization Platform",
      description:
        "A smart travel planning application for creating custom itineraries, hiring verified local guides, and comparing travel costs across transportation modes. Features responsive layouts, Framer Motion animations, and Hindi/English localized interfaces.",
      features: [
        "Verified local guides profiles and marketplace dashboard",
        "Transportation networks route cost comparators",
        "Mobile-first bottom navigation and full dual-language i18n"
      ],
      image:
        "https://images.unsplash.com/photo-1506461883276-594a12b11db3?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion", "i18next"],
      stats: { optimization: "Route", language: "Hindi/Eng" },
      liveUrl: "#",
      githubUrl: "https://github.com/Ayushaggarwal05",
    },
    {
      id: "proj-6",
      title: "Rock Paper Scissors Game",
      category: "UI / Interactive",
      subtitle: "Interactive Vanilla JS Game with Outcome Matrices",
      description:
        "An interactive Rock-Paper-Scissors game featuring synchronized hand-shake pre-calculation animations, active state option selections, random CPU decision trees, and a full-outcome calculation matrix.",
      features: [
        "Synchronized CSS shake gesture anticipation pre-animations",
        "Active option triggers and dynamic responsive states",
        "Deterministic matrix logic resolving R/P/S visual states"
      ],
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80",
      tags: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "CSS Animations"],
      stats: { engine: "Vanilla JS", logic: "Matrix" },
      liveUrl: "#",
      githubUrl: "https://github.com/Ayushaggarwal05",
    },
  ],
};
