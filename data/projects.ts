export interface Project {
  slug: string
  title: string
  tag: string
  category: 'ai' | 'fullstack' | 'devops'
  description: string
  longDescription: string
  techStack: string[]
  github: string
  live: string
  features: string[]
  challenges: string
  architecture: string
  architectureDiagram?: string   // optional ASCII diagram stored in data
  featured?: boolean
}

export const projects: Project[] = [
  // ── FEATURED (shown on homepage) ──────────────────────────────
  {
    slug: 'job-portal',
    title: 'Job Portal + AI',
    tag: 'AI / Full Stack',
    category: 'ai',
    featured: true,
    description:
      'Full-stack job portal connecting job seekers and recruiters with an AI-powered chatbot for resume analysis, job recommendations, cover letter generation, and career guidance.',
    longDescription:
      'Built with MERN Stack and FastAPI + LangChain backend using Gemini API. Job seekers get AI chatbot assistance with ATS resume scoring, smart job recommendations, and personalized career roadmaps. Recruiters can post and manage listings. Each job page includes AI-powered cover letter generation, resume tips, and job match analysis. Improved job matching speed by 40% through vector-based AI recommendations using ChromaDB.',
    techStack: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'Python', 'LangChain', 'ChromaDB', 'Google Gemini API', 'Cloudinary', 'JWT Auth'],
    github: 'https://github.com/KrishnaMore19/JobPortal',
    live: '',
    features: [
      'Role-based access for job seekers and recruiters',
      'AI chatbot: resume analysis with ATS score',
      'Smart job recommendations based on skills',
      'AI-generated cover letters per job listing',
      'Job match analysis showing skill gaps',
      'Career roadmap and guidance from AI',
      'Resume upload and profile management',
      '40% faster job matching via AI recommendations',
    ],
    challenges:
      'Integrating LangChain with Google Gemini required careful prompt engineering and context window management to produce consistent outputs across varied job descriptions. ChromaDB vector search needed fine-tuning to return semantically relevant job matches without false positives.',
    architecture:
      'React frontend → Node.js/Express REST API → MongoDB for user/job data. A separate FastAPI microservice handles all AI operations (LangChain + Gemini + ChromaDB), called by the Node.js backend. JWT tokens secure all routes. The AI service is stateless and horizontally scalable independently of the main API.',
    architectureDiagram: `
  ┌─────────────────┐      ┌──────────────────────┐
  │   React.js UI   │─────▶│  Node.js / Express   │
  │  (TypeScript)   │      │     REST API          │
  └─────────────────┘      └────────┬─────────────┘
                                    │
                     ┌──────────────┼──────────────┐
                     ▼              ▼               ▼
              ┌──────────┐  ┌──────────┐   ┌──────────────┐
              │  MongoDB  │  │  JWT /   │   │  FastAPI AI  │
              │   (data)  │  │  Auth    │   │  Microservice│
              └──────────┘  └──────────┘   └──────┬───────┘
                                                   │
                                          ┌────────▼───────┐
                                          │ LangChain +    │
                                          │ Google Gemini  │
                                          └────────────────┘`,
  },
  {
    slug: 'vibekit-studio',
    title: 'VibeKit Studio',
    tag: 'Full Stack / SaaS',
    category: 'fullstack',
    featured: true,
    description:
      'Full-stack SaaS app where users pick a design vibe, build a mini-site with a visual editor, and publish it to a live public URL — with 6 theme presets, auto-save, and view tracking.',
    longDescription:
      'VibeKit Studio lets users generate a theme, build a mini-site with a visual editor, and publish it instantly. Built with React 18 + Vite + Tailwind CSS + Framer Motion on the frontend and Netlify Functions (serverless Node.js) + PostgreSQL on the backend. Features 6 complete design presets (Minimal, Neo-Brutal, Dark/Neon, Pastel, Luxury, Retro/Pixel), live preview with viewport toggle (Desktop/Tablet/Mobile), auto-save every 1.5s, and slug-based public publishing with view count tracking.',
    techStack: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Netlify Functions', 'Node.js', 'PostgreSQL', 'JWT', 'bcrypt', 'Netlify'],
    github: 'https://github.com/KrishnaMore19/Vibekit',
    live: 'https://vibekit12.netlify.app/',
    features: [
      '6 complete theme presets (Minimal, Neo-Brutal, Dark/Neon, Pastel, Luxury, Retro)',
      'Live preview with Desktop / Tablet / Mobile viewport toggle',
      'Auto-save every 1.5 seconds',
      'Hero, Features, Gallery, and Contact section editors',
      'Slug editor with availability check',
      'Publish / Unpublish with view count tracking',
      'JWT auth with httpOnly cookie + localStorage fallback',
      'Skeleton loaders and Framer Motion animations',
    ],
    challenges:
      'Building a real-time live preview that updates instantly as users type — without causing layout flicker — required careful iframe isolation and debounced state sync. The slug collision handling needed atomic database checks to prevent race conditions on concurrent publish attempts.',
    architecture:
      'React SPA on Netlify CDN → Netlify Functions (serverless Node.js) for all API routes → PostgreSQL for users, pages (JSONB content), and contact submissions. JWT stored in httpOnly cookie. Published pages served from /p/:slug with server-side view count increments.',
  },
  {
    slug: 'ai-research-assistant',
    title: 'AI Research Assistant',
    tag: 'AI / SaaS',
    category: 'ai',
    featured: true,
    description:
      'Full-stack AI-powered research assistant with document management, RAG-based chat, semantic search, analytics dashboard, smart notes, and Razorpay subscription management.',
    longDescription:
      'A comprehensive AI research tool built with Next.js 14 (frontend) and FastAPI (backend). Upload PDF, TXT, or DOCX documents and chat with them using RAG (Retrieval Augmented Generation) via ChromaDB vector embeddings. Supports semantic, keyword, and hybrid search modes. Includes an analytics dashboard tracking document usage and query trends, smart notes linked to documents, and a full subscription system with Razorpay payments offering Starter (Free), Pro, and Enterprise plans.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Recharts', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'ChromaDB', 'OpenRouter API', 'Razorpay', 'JWT'],
    github: 'https://github.com/KrishnaMore19/Ai-researcher',
    live: '',
    features: [
      'Document upload: PDF, TXT, DOCX (up to 10MB)',
      'RAG-based AI chat with document context',
      'Semantic, keyword, and hybrid search modes',
      'Analytics dashboard with query and usage trends',
      'Smart notes linked to specific documents',
      'Razorpay subscription: Starter / Pro / Enterprise',
      'Multi-model AI: Llama 3.2, Mistral, Gemma via OpenRouter',
      'JWT + OAuth2 authentication',
    ],
    challenges:
      'Building a hybrid search system that combines semantic (vector) and keyword search required careful tuning of ChromaDB retrieval parameters and result re-ranking. Keeping RAG context windows accurate across long documents without exceeding model token limits required chunking strategies with overlapping windows.',
    architecture:
      'Next.js frontend (App Router) → FastAPI backend → PostgreSQL for users/subscriptions + ChromaDB for document embeddings. OpenRouter API routes queries to the appropriate AI model. Razorpay webhooks update subscription state. Document processing pipeline: upload → chunk → embed → store in ChromaDB → serve via RAG at query time.',
  },

  // ── ALL OTHER PROJECTS ─────────────────────────────────────────
  {
    slug: 'aws-eks-three-tier',
    title: 'Three-Tier AWS EKS Deployment',
    tag: 'DevOps / Cloud',
    category: 'devops',
    featured: false,
    description:
      'Production-grade three-tier web app (ReactJS + NodeJS + MongoDB) deployed on AWS EKS with ArgoCD GitOps, Jenkins CI/CD, Prometheus + Grafana monitoring, and Terraform infrastructure provisioning.',
    longDescription:
      'End-to-end DevOps implementation of a three-tier web application on AWS EKS. Infrastructure provisioned with Terraform and AWS CLI. Jenkins server deployed on AWS with full CI/CD pipeline integration including SonarQube code quality gates. EKS cluster created with Load Balancer setup and private ECR repositories for container image management. Monitoring stack deployed via Helm with Prometheus and Grafana. GitOps-based continuous delivery using ArgoCD for zero-downtime deployments.',
    techStack: ['AWS EKS', 'Terraform', 'Jenkins', 'ArgoCD', 'Prometheus', 'Grafana', 'Helm', 'Docker', 'Kubernetes', 'SonarQube', 'AWS ECR', 'AWS IAM', 'ReactJS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/KrishnaMore19/3-tier-on-aws',
    live: '',
    features: [
      'Full infrastructure as code with Terraform',
      'Jenkins CI/CD pipeline with SonarQube quality gates',
      'AWS EKS cluster with Load Balancer setup',
      'Private ECR repositories for container images',
      'ArgoCD GitOps continuous delivery',
      'Prometheus + Grafana monitoring stack via Helm',
      'AWS IAM user setup and permission management',
      'Three-tier app: React + Node.js + MongoDB',
    ],
    challenges:
      'Coordinating IAM permissions across Terraform, Jenkins, EKS, and ECR without over-provisioning required a least-privilege policy design pass. Integrating ArgoCD with the Jenkins pipeline so that CD is fully automated yet auditable through Git history required careful branch strategy and webhook configuration.',
    architecture:
      'Terraform provisions VPC, EKS cluster, EC2 Jenkins server, and ECR repos on AWS. Jenkins pipeline: code push → SonarQube scan → Docker build → push to ECR → update K8s manifests in Git → ArgoCD detects change → deploys to EKS. Prometheus scrapes all pods. Grafana dashboards show cluster and app metrics.',
  },
  {
    slug: 'ai-travel-guide',
    title: 'AI Travel Guide',
    tag: 'AI / Full Stack',
    category: 'ai',
    featured: false,
    description:
      'Intelligent travel planning app with AI-powered itinerary generation, real-time streaming, weather integration, and curated destination discovery — built with Next.js and FastAPI.',
    longDescription:
      'An AI travel assistant that creates personalized travel plans based on preferences, budget, and interests. Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion on the frontend and FastAPI + MongoDB on the backend. Uses OpenRouter/LLaMA for AI itinerary generation with real-time streaming so users watch the plan being built live. Integrates OpenWeather API for current destination weather. Includes a destination discovery page with filtering by budget, duration, and travel type.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'FastAPI', 'Python', 'MongoDB', 'OpenRouter API', 'LLaMA', 'OpenWeather API', 'Uvicorn'],
    github: 'https://github.com/KrishnaMore19/Ai-Travel-Guide',
    live: '',
    features: [
      'AI-powered personalized itinerary generation',
      'Real-time streaming — watch AI build your plan live',
      'AI thought process visibility during generation',
      'OpenWeather API integration for destination weather',
      'Destination discovery with budget/duration filters',
      'MongoDB persistent storage for itineraries',
      'Responsive UI with Framer Motion animations',
      'Swagger + ReDoc API documentation',
    ],
    challenges:
      'Implementing real-time streaming from the LLaMA model through FastAPI to the Next.js frontend required Server-Sent Events on the backend and a custom ReadableStream consumer on the client. Keeping the AI thought process visible without overwhelming the UI needed careful stream chunk parsing and state management.',
    architecture:
      'Next.js frontend streams responses from FastAPI backend via SSE. FastAPI calls OpenRouter API (LLaMA model) and forwards tokens as they arrive. MongoDB stores completed itineraries and destination suggestions. OpenWeather API called server-side to avoid CORS and key exposure.',
  },
  {
    slug: 'mcp-file-search',
    title: 'MCP File Search Server',
    tag: 'DevOps / Tools',
    category: 'devops',
    featured: false,
    description:
      'A Model Context Protocol (MCP) server that enables AI assistants to search keywords in files — with case-sensitive options, line number reporting, and full MCP Inspector compatibility.',
    longDescription:
      'Built a custom MCP (Model Context Protocol) server that exposes a file search tool to AI coding assistants like Claude. The server accepts a file path, keyword, and optional case-sensitivity flag, then returns all matching lines with their line numbers. Fully compatible with the MCP Inspector for visual debugging. Uses Zod for parameter validation and the official @modelcontextprotocol/sdk. Enables AI assistants to search codebases and text files as part of agentic workflows.',
    techStack: ['Node.js', '@modelcontextprotocol/sdk', 'Zod', 'JavaScript', 'MCP Inspector', 'Yarn'],
    github: 'https://github.com/KrishnaMore19/mcp-server-1',
    live: '',
    features: [
      'MCP-compatible server for AI assistant integration',
      'Keyword search with case-sensitive / insensitive option',
      'Returns matching lines with exact line numbers',
      'Full MCP Inspector compatibility for debugging',
      'Zod schema validation for all tool parameters',
      'Error handling for file access and permission issues',
      'Works with Claude, Cursor, and other MCP clients',
    ],
    challenges:
      'Implementing the MCP protocol correctly required deep reading of the SDK specification to handle tool registration, request/response schemas, and error propagation in a way that is compatible with multiple AI client implementations.',
    architecture:
      'Node.js MCP server registers a single tool (search_file) via @modelcontextprotocol/sdk. Tool receives validated parameters via Zod, reads the target file, applies regex or string matching per line, and returns structured JSON results. MCP Inspector connects via stdio transport for local debugging.',
  },
  {
    slug: 'taskflow',
    title: 'TaskFlow — Task Manager',
    tag: 'Full Stack',
    category: 'fullstack',
    featured: false,
    description:
      'Production-ready multi-user task management app with React + Tailwind CSS frontend, Node.js + Express + PostgreSQL backend, JWT auth, and full CRUD with priority/status filtering.',
    longDescription:
      'TaskFlow is a full-stack task management application supporting multiple users with complete isolation — each user only sees their own tasks. Built with React 18 + React Router 6 + Tailwind CSS (frontend) and Node.js + Express 4 + PostgreSQL + Sequelize ORM (backend). Features JWT authentication with bcryptjs password hashing (12 rounds), full task CRUD, status transitions (pending → in_progress → completed), priority levels (low/medium/high), search, sorting, and filtering. Tables auto-created by Sequelize on first run.',
    techStack: ['React 18', 'React Router 6', 'Tailwind CSS', 'Axios', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM', 'JWT', 'bcryptjs', 'express-validator'],
    github: 'https://github.com/KrishnaMore19/Taskflow',
    live: 'https://taskflow-self-phi.vercel.app/',
    features: [
      'Multi-user with full data isolation per user',
      'Task CRUD with title, description, priority, due date',
      'Status transitions: pending → in_progress → completed',
      'Filter by status, priority, and search by title',
      'Sort by createdAt, dueDate, or priority',
      'JWT authentication with 7-day token expiry',
      'bcryptjs password hashing (12 rounds)',
      'Input validation on all endpoints via express-validator',
    ],
    challenges:
      'Ensuring complete user-scoped data isolation at the database level (not just at the API layer) required adding user FK constraints on all task queries so even direct DB manipulation cannot leak cross-user data. Generic error messages were carefully designed to prevent user enumeration attacks.',
    architecture:
      'React SPA (Vite) → Express REST API → PostgreSQL via Sequelize ORM. JWT middleware on all task routes injects user context. Task queries always include WHERE user_id = :userId. Sequelize auto-syncs models to DB tables on startup. Frontend Axios instance attaches JWT from localStorage via interceptors.',
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    tag: 'Full Stack',
    category: 'fullstack',
    featured: false,
    description:
      'Spring Boot e-commerce platform with product listing, cart management, order processing, Spring Security + JWT authentication, and Hibernate ORM with optimized PostgreSQL schema.',
    longDescription:
      'Built a production-ready e-commerce application using Spring Boot featuring product listing, cart management, and order processing with RESTful APIs. Authentication and authorization handled with Spring Security and JWT. Hibernate ORM manages all database interactions with a carefully normalized PostgreSQL schema designed for performance at scale — composite indexes for product-order-inventory joins.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate ORM', 'PostgreSQL', 'REST APIs', 'JWT Auth', 'Maven'],
    github: '',
    live: '',
    features: [
      'Product listing with search and category filters',
      'Shopping cart and multi-item checkout',
      'Order management and tracking',
      'Role-based access: Admin, Customer',
      'Spring Security + JWT authentication',
      'Optimized PostgreSQL schema with composite indexing',
      'Hibernate ORM for data persistence',
    ],
    challenges:
      'Designing a normalized PostgreSQL schema handling inventory, users, orders, and products simultaneously while maintaining fast query times required careful indexing. Transactional integrity during concurrent checkouts solved using Spring @Transactional with database-level locking.',
    architecture:
      'Spring Boot MVC exposing REST endpoints. Spring Security intercepts all requests, validates JWT tokens, and enforces RBAC. Hibernate ORM maps Java entities to PostgreSQL tables with foreign keys and composite indexes for efficient joins.',
    architectureDiagram: `
  ┌─────────────────┐      ┌──────────────────────┐
  │  HTTP Client    │─────▶│  Spring Boot MVC     │
  │  (REST calls)   │      │  Controllers / APIs  │
  └─────────────────┘      └────────┬─────────────┘
                                    │
                     ┌──────────────┼──────────────┐
                     ▼              ▼               ▼
              ┌──────────┐  ┌──────────┐   ┌──────────────┐
              │Spring    │  │Hibernate │   │ PostgreSQL   │
              │Security  │  │  ORM     │──▶│  Database    │
              │(JWT/RBAC)│  │ Entities │   │  (indexed)   │
              └──────────┘  └──────────┘   └──────────────┘`,
  },
  {
    slug: 'hospital-management',
    title: 'Hospital Management System',
    tag: 'MERN Stack',
    category: 'fullstack',
    featured: false,
    description:
      'Hospital Management System built with MERN stack featuring multi-role RBAC (Admin, Doctor, Nurse, Receptionist), secure REST APIs for patient records, and an enhanced React dashboard — built during internship at BuiltUp Technologies.',
    longDescription:
      'Developed and deployed during internship at BuiltUp Technologies using the MERN stack. The system supports multiple roles each with scoped access to patient records, appointments, and billing. Implemented secure authentication with JWT and bcrypt, REST APIs for all patient operations, and enhanced the React dashboard for improved accessibility and UX. Built collaboratively in an Agile team environment.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'bcrypt', 'REST APIs', 'Tailwind CSS'],
    github: '',
    live: '',
    features: [
      'Multi-role RBAC: Admin, Doctor, Nurse, Receptionist',
      'Patient record management (CRUD)',
      'Appointment scheduling system',
      'Secure JWT + bcrypt authentication',
      'React dashboard with improved accessibility',
      'Role-scoped API responses per user type',
    ],
    challenges:
      'Each role needed its own scoped API responses. Solved using middleware-level data filtering based on the decoded JWT role claim so a nurse never receives doctor-level patient data payloads.',
    architecture:
      'React frontend → Express.js REST API with JWT middleware injecting role context → MongoDB for patient, user, and appointment documents. Role-based data filtering at the controller layer before sending responses.',
    architectureDiagram: `
  ┌─────────────────┐      ┌──────────────────────┐
  │   React.js UI   │─────▶│  Express.js API      │
  │  (Dashboard)    │      │  (JWT Middleware)     │
  └─────────────────┘      └────────┬─────────────┘
                                    │
                     ┌──────────────┼──────────────┐
                     ▼              ▼               ▼
              ┌──────────┐  ┌──────────┐   ┌──────────────┐
              │  MongoDB  │  │  RBAC    │   │  bcrypt +    │
              │(patients, │  │ Filter   │   │  JWT Auth    │
              │  users)   │  │ Layer    │   │              │
              └──────────┘  └──────────┘   └──────────────┘`,
  },
  {
    slug: 'expenses-tracker',
    title: 'Expenses Tracker',
    tag: 'MERN / DevOps',
    category: 'devops',
    featured: false,
    description:
      'Full-stack MERN expenses tracker containerized with Docker and orchestrated on Kubernetes — featuring income/expense tracking, category management, and monthly summaries with a CI/CD-ready deployment setup.',
    longDescription:
      'A full-stack expenses tracking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js), containerized with Docker, and orchestrated using Kubernetes for scalable deployment. Users can add income and expense transactions by category, view monthly summaries, and track spending patterns over time. The entire app is packaged as Docker images and deployed via Kubernetes manifests with separate deployments for frontend, backend, and MongoDB — demonstrating a real-world microservice deployment pattern.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Docker', 'Kubernetes', 'Docker Compose', 'REST APIs', 'JWT Auth'],
    github: 'https://github.com/KrishnaMore19/expenses-tracker',
    live: '',
    features: [
      'Income and expense transaction tracking',
      'Category-based transaction management',
      'Monthly summary and spending breakdown',
      'Docker containerized frontend, backend, and DB',
      'Kubernetes manifests for scalable deployment',
      'Docker Compose for local development',
      'Persistent MongoDB storage via K8s PersistentVolume',
      'JWT-secured REST API',
    ],
    challenges:
      'Configuring persistent MongoDB storage in Kubernetes required PersistentVolume and PersistentVolumeClaim setup to survive pod restarts. Networking between the React frontend, Node.js backend, and MongoDB pods required careful Kubernetes Service and DNS configuration.',
    architecture:
      'Three separate Docker images (React frontend, Node.js/Express API, MongoDB). Kubernetes deploys each as its own Deployment + Service. MongoDB uses a PersistentVolumeClaim for data persistence. Frontend communicates with backend via K8s ClusterIP service. Docker Compose mirrors the same topology for local dev.',
  },
]

export const featuredProjects = projects.filter(p => p.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}