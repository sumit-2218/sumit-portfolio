import type { LucideIcon } from 'lucide-react'
import { Bot, Braces, Database, Gauge, Globe2, Layers3, ShieldCheck, Smartphone, Workflow } from 'lucide-react'

export type Project = {
  slug: string; number: string; name: string; eyebrow: string; summary: string; description: string;
  stack: string[]; tags: string[]; url?: string; status: string; accent: string; icon: LucideIcon;
  highlights: string[]; learnings: string[]; architecture: string[];
}

export const projects: Project[] = [
  {
    slug: 'sales-operations-agent', number: '01', name: 'Sales Operations Agent', eyebrow: 'AI / SALES INTELLIGENCE',
    summary: 'A focused sales workspace that scores leads, explains fit, and helps teams move from raw prospects to thoughtful outreach.',
    description: 'A full-stack AI-assisted sales operations platform built around explainable lead scoring, lead management, and grounded AI analysis. The system is designed to avoid inventing prospect facts and to flag leads when there is not enough information to make a confident call.',
    stack: ['React', 'TypeScript', 'FastAPI', 'MySQL', 'Ollama', 'Qwen2.5 3B'], tags: ['AI', 'Full-stack', 'Lead scoring'],
    url: 'https://sales-operations-agent-umber.vercel.app/', status: 'Live preview', accent: 'mint', icon: Bot,
    highlights: ['Lead fit scoring against a target customer profile', 'Strong / potential / weak match classifications', 'AI-generated analysis with a focus on supplied facts', 'Authentication, dashboard, and system health endpoints'],
    learnings: ['Connecting a local language model to a web product', 'Designing API boundaries between frontend, backend, and AI gateway', 'Testing scoring logic and guarding against unsupported AI claims'],
    architecture: ['React + TypeScript interface', 'FastAPI application and scoring services', 'MySQL persistence', 'Ollama running Qwen2.5 3B behind a gateway'],
  },
  {
    slug: 'cyvanta', number: '02', name: 'Cyvanta', eyebrow: 'INVESTIGATION / GRAPH ANALYSIS',
    summary: 'A criminal-network analysis concept that helps investigators explore entities and relationships in case material.',
    description: 'Cyvanta (previously referred to as CrimeGraph AI) is a PHP and MySQL application concept for organizing investigation data and exploring relationships extracted from documents. It is a work in progress, with AI-assisted relationship extraction still being refined.',
    stack: ['PHP', 'MySQL', 'Python', 'Document extraction'], tags: ['Backend', 'Data analysis', 'Security'],
    url: 'https://peru-oyster-657501.hostingersite.com/', status: 'Live preview', accent: 'violet', icon: ShieldCheck,
    highlights: ['Structured investigation records', 'PDF and TXT document processing workflow', 'Relationship-focused analysis concept', 'Backend-first approach to sensitive information'],
    learnings: ['Turning unstructured document text into usable data', 'Thinking carefully about evidence and relationship confidence', 'Separating application logic from optional AI services'],
    architecture: ['PHP web application', 'MySQL data layer', 'Document text extraction', 'Optional Python AI service'],
  },
  {
    slug: 'instagas', number: '03', name: 'InstaGas', eyebrow: 'UTILITY / BOOKING WORKFLOW',
    summary: 'An LPG booking and operations system with customer flows, admin controls, and order status updates.',
    description: 'InstaGas is a web-based LPG booking workflow with customer and administrative views. It focuses on the practical lifecycle of a booking: submitting a request, reviewing it, and communicating status changes through the interface.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'AJAX', 'WebSockets'], tags: ['Full-stack', 'Workflow', 'Real-time UI'],
    url: 'https://lightpink-antelope-289036.hostingersite.com/index.php', status: 'Live preview', accent: 'amber', icon: Workflow,
    highlights: ['Customer booking interface', 'Admin-side booking and status management', 'AJAX interactions for smoother updates', 'Real-time update exploration with WebSockets'],
    learnings: ['Modeling a real-world booking lifecycle', 'Connecting interface actions to persistent backend data', 'Designing clear status feedback for users'],
    architecture: ['PHP request handlers', 'MySQL booking records', 'Bootstrap responsive UI', 'AJAX and WebSocket-based updates'],
  },
  {
    slug: 'taskmanager-web', number: '04', name: 'TaskManager Web', eyebrow: 'PRODUCTIVITY / CRUD',
    summary: 'A task management web app with secure sign-in and user-specific task workflows.',
    description: 'A full-stack task manager built with Spring Boot and React. The application explores authentication, protected endpoints, validation, and CRUD operations while keeping each user’s tasks scoped to their account. The current version runs locally and does not have a public live demo.',
    stack: ['Spring Boot', 'React', 'MySQL', 'Spring Security', 'JWT', 'JPA'], tags: ['Backend', 'Authentication', 'CRUD'],
    status: 'Local development', accent: 'blue', icon: Layers3,
    highlights: ['Create, view, update, and delete tasks', 'JWT-based authentication flow', 'Protected API routes and user-specific data', 'Validation and frontend/backend integration'],
    learnings: ['Structuring a Spring Boot service and controller layer', 'Using JPA to map application data', 'Debugging CORS and authentication across a frontend and API'],
    architecture: ['React frontend', 'Spring Boot REST API', 'Spring Security and JWT', 'Spring Data JPA with MySQL'],
  },
]

export type SkillGroup = { title: string; note: string; icon: LucideIcon; skills: string[] }
export const skillGroups: SkillGroup[] = [
  { title: 'Backend engineering', note: 'APIs, auth, application logic', icon: Braces, skills: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Python', 'FastAPI', 'PHP', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC'] },
  { title: 'AI & machine learning', note: 'Local models and applied AI', icon: Bot, skills: ['Ollama', 'Qwen2.5 3B', 'LLM integration', 'AI agents fundamentals', 'NLP fundamentals', 'Model training', 'Model evaluation', 'Document extraction'] },
  { title: 'Data & storage', note: 'Relational and cloud-connected data', icon: Database, skills: ['MySQL', 'MongoDB', 'SQLite', 'Firebase', 'SQL', 'Database design', 'JPA / ORM', 'Migrations'] },
  { title: 'Frontend & mobile', note: 'Interfaces that connect to APIs', icon: Smartphone, skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Kotlin', 'Jetpack Compose'] },
  { title: 'Tools & delivery', note: 'Build, test, ship, repeat', icon: Gauge, skills: ['Git', 'GitHub', 'Postman', 'Maven', 'Vite', 'Swagger / OpenAPI', 'Vercel', 'Render', 'Cloudflare Tunnel', 'Ollama local runtime'] },
  { title: 'Exploring next', note: 'Current learning roadmap', icon: Globe2, skills: ['Microservices', 'Docker', 'Apache Kafka', 'gRPC', 'Distributed systems', 'System design', 'RAG', 'Embeddings & vector search', 'Cloud deployment'] },
]
