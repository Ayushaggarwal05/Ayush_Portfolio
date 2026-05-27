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
      { id: 2, label: "Projects Completed", value: "12+" },
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
      title: "WebCraft",
      category: "SaaS Application",
      description:
        "A premium marketing and business landing page builder enabling users to visually craft and deploy ultra-fast websites with minimal efforts.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Zustand"],
      stats: { lcp: "1.2s", performance: "99%" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "proj-2",
      title: "Library Management System",
      category: "Full-Stack Portal",
      description:
        "An administrative panel facilitating real-time book reservation, automated inventory alerts, member tracking, and smooth interactive analytics.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Express.js", "PostgreSQL", "Tailwind CSS"],
      stats: { uptime: "99.9%", activeUsers: "5k+" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "proj-3",
      title: "Cinematic Cinema Dashboard",
      category: "UI / Interactive",
      description:
        "An immersive entertainment portal showcasing fluid layout transitions, interactive movie seat reservations, and premium dark glassmorphism styling.",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Unsplash API"],
      stats: { fps: "60fps", score: "96" },
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
};
