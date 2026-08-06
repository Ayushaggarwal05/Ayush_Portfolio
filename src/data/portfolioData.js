import profileimg from "../assets/profileimg.jpeg";

export const portfolioData = {
  personalInfo: {
    name: "Ayush Aggarwal",
    title: "AI Engineer & Full Stack Developer",
    tagline:
      "Building intelligent AI systems, scalable SaaS platforms, and high-performance full-stack applications that solve real-world problems.",
    aboutMe:
      "I'm an AI Engineer and Full Stack Developer passionate about building software that combines intelligent automation with scalable engineering. From multi-agent AI systems and Retrieval-Augmented Generation (RAG) pipelines to production-ready SaaS platforms, I enjoy solving complex problems through clean architecture and thoughtful design. I'm always exploring emerging AI technologies while focusing on building practical products that deliver real value.",
    location: "Delhi, India",
    email: "aayushaggarwal348@gmail.com",
    github: "https://github.com/Ayushaggarwal05",
    linkedin: "https://www.linkedin.com/in/ayushaggarwal005/",
    twitter: "https://twitter.com",
    resumeUrl: "#",
    avatar: profileimg,
    status: "Available for Hire",
    expertise: [
      "Agents",
      "RAG Systems",
      "FastAPI",
      "Django",
      "React",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "System Design",
      "Multi-Tenant SaaS",
      "Git & GitHub",
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
        "Crafting responsive, accessible, and high-performance user interfaces using React, TypeScript, Tailwind CSS, and modern animation libraries to deliver seamless user experiences across devices.",
    },
    {
      id: "service-2",
      title: "Full Stack Development",
      icon: "Layers",
      description:
        "Designing and developing scalable backend systems, secure REST APIs, authentication workflows, and robust databases using Django, FastAPI, Node.js, PostgreSQL, and Redis.",
    },
    {
      id: "service-3",
      title: "Performance Optimization",
      icon: "Zap",
      description:
        "Optimizing performance through efficient rendering, API optimization, database indexing, caching strategies, lazy loading, and scalable architecture for production environments.",
    },
    {
      id: "service-4",
      title: "UI/UX & SaaS Architecture",
      icon: "Layout",
      description:
        "Architecting scalable SaaS applications with reusable component systems, multi-tenant isolation, role-based access control, and modular design patterns.",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "SQL", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 95 },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "Django", level: 90 },
        { name: "FastAPI", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
      ],
    },
    {
      category: "AI & Machine Learning",
      items: [
        { name: "AI Agents", level: 90 },
        { name: "LangGraph", level: 88 },
        { name: "LangChain", level: 86 },
        { name: "RAG", level: 90 },
        { name: "Ollama", level: 88 },
        { name: "Gemini API", level: 90 },
        { name: "OpenAI API", level: 90 },
        { name: "MCP", level: 88 },
        { name: "Prompt Engineering", level: 92 },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "SQLite", level: 90 },
        { name: "Redis", level: 82 },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Docker", level: 80 },
        { name: "Git", level: 92 },
        { name: "GitHub", level: 92 },
        { name: "Vercel", level: 90 },
        { name: "Postman", level: 90 },
      ],
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Full Stack AI Intern",
      company: "Pathixo Pvt Ltd",
      duration: "May 2026 – Present",
      points: [
        "Engineered AI-powered full-stack applications using React, FastAPI, and Python, delivering scalable features across modern web architectures.",
        "Designed and implemented multi-agent AI workflows, integrating LLM APIs, Retrieval-Augmented Generation (RAG), and local LLM inference with Ollama to enable intelligent automation.",
        "Built secure RESTful APIs, optimized backend performance, and contributed to scalable, production-ready AI systems following clean architecture and engineering best practices.",
        "Collaborated on end-to-end feature development, translating complex AI capabilities into reliable, user-focused software solutions.",
      ],
      technologies: [
        "React",
        "FastAPI",
        "Python",
        "RAG Systems",
        "Ollama",
        "AI Agents",
        "System Design",
      ],
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "ASTA",
      category: "AI Engineering",
      subtitle: "Personal Engineering Intelligence System",
      description:
        "A privacy-first AI engineering assistant that helps developers understand, navigate, and interact with large codebases using multi-agent workflows, Hybrid RAG, and local LLMs.",
      features: [
        "Multi-agent architecture for project analysis and code explanation",
        "Hybrid RAG with semantic and keyword-based retrieval",
        "Optimized local LLM inference using Ollama",
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      tags: ["Python", "FastAPI", "React", "SQLite", "LanceDB", "Ollama"],
      stats: { architecture: "Multi-Agent", retrieval: "Hybrid RAG" },
      liveUrl: "#",
      githubUrl:
        "https://github.com/Ayushaggarwal05/Personal_Intelligence_System",
    },
    {
      id: "proj-2",
      title: "Spatial Studio",
      category: "SaaS",
      subtitle: "AI-Powered Interior Design & Space Optimization",
      description:
        "An AI-powered interior design platform that analyzes room layouts, detects furniture, and generates optimized redesigns using computer vision, generative AI, and spatial optimization.",
      features: [
        "Computer vision for room and furniture detection",
        "AI-generated interior redesigns from user prompts",
        "Layout optimization using occupancy analysis",
      ],
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
      tags: ["FastAPI", "OpenCV", "YOLO", "PyTorch", "PostgreSQL", "Docker"],
      stats: { ai: "Generative + CV", optimization: "Spatial Analysis" },
      liveUrl: "#",
      githubUrl: "https://github.com/Ayushaggarwal05/Home_Decor_AI",
    },
    {
      id: "proj-3",
      title: "CrewFlow",
      category: "SaaS",
      subtitle: "Multi-Tenant SaaS Project Management Platform",
      description:
        "A multi-tenant SaaS project management platform that enables organizations to manage teams, projects, and workflows securely with role-based access control, Kanban boards, and organization-level data isolation.",
      features: [
        "Multi-tenant architecture with organization-level data isolation",
        "Hierarchical role-based access control (RBAC)",
        "Interactive Kanban boards with drag-and-drop support",
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
      liveUrl: "https://crewflow-frontend.vercel.app/",
      githubUrl: "https://github.com/Ayushaggarwal05/CrewFlow",
    },
    {
      id: "proj-4",
      title: "Kisan Saathi",
      category: "Full-Stack Portal",
      subtitle: "AI-Powered Agricultural Empowerment Platform",
      description:
        "An AI-powered agricultural platform that helps farmers detect plant diseases, track live market prices, and access localized weather forecasts for better farming decisions.",
      features: [
        "AI-based plant disease detection using Gemini",
        "Live Mandi price tracking and visualization",
        "Localized weather forecasts and farming insights",
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
      id: "proj-5",
      title: "Netflix-GPT",
      category: "Frontend Interactive",
      subtitle: "AI-Powered Movie Discovery Platform",
      description:
        "An AI-enhanced Netflix clone that combines real-time movie discovery with natural language search, secure authentication, and a responsive streaming-style interface.",
      features: [
        "Natural language movie search powered by Gemini",
        "TMDB integration with trailer playback",
        "Secure authentication and multilingual support",
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
      liveUrl: "https://netflix-gpt-nine-sigma.vercel.app/",
      githubUrl: "https://github.com/Ayushaggarwal05/Netflix-GPT-",
    },
    {
      id: "proj-6",
      title: "Ryze AI Redesign",
      category: "Frontend Interactive",
      subtitle: "Modern Marketing Website Redesign",
      description:
        "A complete redesign of the Ryze AI marketing website focused on modern UI/UX, responsive layouts, smooth animations, and reusable React components.",
      features: [
        "GSAP-powered scroll animations",
        "Framer Motion micro-interactions",
        "Responsive and reusable component architecture",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "GSAP", "Framer Motion", "Tailwind CSS", "React Router"],
      stats: { animation: "GSAP 3", UX: "Modern" },
      liveUrl: "https://ryze-redesign-website.vercel.app/",
      githubUrl: "https://github.com/Ayushaggarwal05/Ryze_Redesign_website",
    },
    {
      id: "proj-7",
      title: "Traveller",
      category: "Full-Stack Portal",
      subtitle: "Smart Travel Planning Platform",
      description:
        "A travel planning platform that helps users create personalized itineraries, compare travel options, discover local guides, and plan trips through a responsive multilingual interface.",
      features: [
        "Personalized trip itinerary planning",
        "Travel route and transportation comparison",
        "Multilingual interface with responsive design",
      ],
      image:
        "https://images.unsplash.com/photo-1506461883276-594a12b11db3?auto=format&fit=crop&w=600&q=80",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Framer Motion",
        "i18next",
      ],
      stats: { optimization: "Route", language: "Hindi/Eng" },
      liveUrl: "#",
      githubUrl: "https://github.com/Ayushaggarwal05",
    },
    {
      id: "proj-8",
      title: "Rock Paper Scissors Game",
      category: "Frontend Interactive",
      subtitle: "Interactive Browser Game",
      description:
        "A browser-based Rock Paper Scissors game built with Vanilla JavaScript, featuring responsive gameplay, animated interactions, and real-time score tracking.",
      features: [
        "Interactive gameplay with responsive UI",
        "Smooth CSS animations and transitions",
        "Real-time score tracking using JavaScript",
      ],
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80",
      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "DOM Manipulation",
        "CSS Animations",
      ],
      stats: { engine: "Vanilla JS", logic: "Interactive" },
      liveUrl: "#",
      githubUrl: "https://github.com/Ayushaggarwal05",
    },
  ],
};
