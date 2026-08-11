import profileimg from "../assets/profileimg.webp";
import astaImg from "../assets/projects_ss/asta/1_overview.webp";
import spatialstudioImg from "../assets/projects_ss/spatialstudio/1_landing-page.webp";
import crewflowImg from "../assets/projects_ss/crewflow/1_landing-page.webp";
import kisanSaathiImg from "../assets/projects_ss/kisansaathi/overview.webp";
import netflixGptImg from "../assets/projects_ss/netflixgpt/overview.webp";
import ryzeRedesignImg from "../assets/projects_ss/ryzeredesign/overview.webp";
import travellerImg from "../assets/projects_ss/traveller/overview.webp";
import gameImg from "../assets/projects_ss/game/overview.webp";

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
      image: astaImg,
      tags: ["Python", "FastAPI", "React", "SQLite", "LanceDB", "Ollama"],
      stats: { architecture: "Multi-Agent", retrieval: "Hybrid RAG" },
      liveUrl: "#",
      githubUrl:
        "https://github.com/Ayushaggarwal05/Personal_Intelligence_System",
      caseStudy: {
        overview: "ASTA is a privacy-first, locally-run AI assistant built for software engineers to analyze, explain, and write code directly against complex codebases. It is designed to run entirely offline to protect corporate code and prevent intellectual property leaks.",
        challenge: "Parsing and indexing thousands of code lines into a format that a local LLM can reason about without exceeding its context window, while keeping latency minimal on standard consumer hardware.",
        solution: "We built a recursive AST (Abstract Syntax Tree) code parser that splits files into semantic code chunks. Chunks are embedded locally and indexed in a LanceDB vector database. A FastAPI coordinator then deploys a hybrid keyword-semantic RAG pipeline, feeding context into local Ollama models with fast response rates."
      }
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
      image: spatialstudioImg,
      tags: ["FastAPI", "OpenCV", "YOLO", "PyTorch", "PostgreSQL", "Docker"],
      stats: { ai: "Generative + CV", optimization: "Spatial Analysis" },
      liveUrl: "#",
      githubUrl: "https://github.com/Ayushaggarwal05/Home_Decor_AI",
      caseStudy: {
        overview: "Spatial Studio is an AI-powered interior design and layout platform. It allows users to upload raw photos of a room, automatically identifies furniture items, analyzes the occupancy/clearance grids, and generates visually optimized redesigns.",
        challenge: "Performing accurate 3D geometry layout approximations and obstacle detection from flat, uncalibrated 2D mobile photos, followed by stable image generation of layout changes.",
        solution: "Implemented a computer vision pipeline utilizing YOLOv8 and PyTorch to classify objects, detect boundaries, and calculate real-world physical dimensions. The data is mapped to an interior occupancy grid. The layout suggestions are then processed using generative diffusion models to create high-contrast, stylized layout redesigns."
      }
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
      image: crewflowImg,
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
      caseStudy: {
        overview: "CrewFlow is a modern multi-tenant SaaS workspace and project management platform. Designed for enterprise agility, it allows organizations to spin up private workspaces, manage complex project hierarchies, assign issues, and track progress.",
        challenge: "Ensuring strict data isolation and security between multiple independent corporations sharing the same database, while providing zero-latency live updates across collaborative Kanban boards.",
        solution: "Designed a multi-tenant PostgreSQL schema utilizing client schema filters and hierarchical role-based access control (RBAC). Front-end states are managed using Redux Toolkit, and workspace interactions are synchronized using React and Django REST APIs, supporting smooth drag-and-drop boards using @dnd-kit."
      }
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
      image: kisanSaathiImg,
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
      caseStudy: {
        overview: "Kisan Saathi is an AI-powered agricultural portal designed to empower farmers with data-driven agricultural insights. The platform features live commodity market (Mandi) price tracking, localized crop weather forecasting, and automated plant disease diagnostics.",
        challenge: "Performing fast, reliable crop leaf disease classifications on low-bandwidth rural networks where uploading high-resolution images is slow and failure-prone.",
        solution: "Implemented a light-weight front-end image compressor that scales and optimizes uploaded leaf photos before transmission. Images are processed using the Gemini API vision endpoints to diagnose crop infections and suggest remedies, while live Mandi prices are retrieved via government APIs and presented using interactive chart analytics."
      }
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
      image: netflixGptImg,
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
      caseStudy: {
        overview: "Netflix-GPT is an AI-enhanced movie discovery and recommendation platform. It combines a high-fidelity streaming interface inspired by Netflix with natural language search capabilities to let users find movies based on moods, genres, or complex descriptive prompts.",
        challenge: "Parsing user queries like 'underdog sports movies with a 90s aesthetic' and matching them to structured movie catalogs with fast search query response times.",
        solution: "Integrated Gemini AI vector reasoning to parse natural language queries, map them to search categories, and fetch movie IDs from TMDB (The Movie Database) APIs. User state is managed with Redux Toolkit, and secure authentication is implemented using Clerk Auth."
      }
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
      image: ryzeRedesignImg,
      tags: ["React", "GSAP", "Framer Motion", "Tailwind CSS", "React Router"],
      stats: { animation: "GSAP 3", UX: "Modern" },
      liveUrl: "https://ryze-redesign-website.vercel.app/",
      githubUrl: "https://github.com/Ayushaggarwal05/Ryze_Redesign_website",
      caseStudy: {
        overview: "Ryze AI Redesign is a high-fidelity marketing landing page rebuild showcasing modern front-end motion design and interactive graphics. The redesign focuses on achieving fluid page scrolls, micro-interactions, and premium aesthetics that match top tech startups.",
        challenge: "Synchronizing complex visual entrance animations, parallax scrolls, and hover triggers without causing screen tearing, layout shifts, or dropping frame rates below 60fps.",
        solution: "Constructed interactive layouts using React and Tailwind CSS, driving entrance animations with Framer Motion and advanced scroll effects with GSAP (GreenSock). Scroll events are debounced, and canvas/layout paints are optimized using GPU-accelerated transforms to maintain steady 60fps performance."
      }
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
      image: travellerImg,
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
      caseStudy: {
        overview: "Traveller is a full-stack travel planning and comparison portal. It assists users in creating multi-destination travel itineraries, comparing transport routes, booking accommodations, and accessing guide listings through a responsive multilingual interface.",
        challenge: "Managing localized states and comparing transportation routes in real-time across multiple third-party transit APIs while maintaining a smooth multilingual UI.",
        solution: "Developed a localized front-end architecture using React, i18next, and React Router. Transit comparisons are aggregated using Express/Node.js endpoints, caching search results to reduce API rates. Animations are handled using Framer Motion to make page transitions look seamless."
      }
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
      image: gameImg,
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
      caseStudy: {
        overview: "An interactive browser-based Rock Paper Scissors game featuring smooth game loops, score mechanics, and real-time computer choice heuristics built with Vanilla JavaScript, HTML5, and CSS3.",
        challenge: "Designing a responsive, animated game dashboard using vanilla DOM APIs that keeps track of user scores, displays animations for choices, and resets states instantly without layout shifts.",
        solution: "Structured using semantic HTML5 and styled with vanilla CSS custom properties (variables) for fast theme toggles. Game state and scoring logic are handled via pure JavaScript event listeners, leveraging CSS keyframe animations for the countdown and hand shake transitions."
      }
    },
  ],
};
