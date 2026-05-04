'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink, GraduationCap, Briefcase, Code2, Award } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const experience = [
  {
    role: 'MERN Intern',
    company: 'BuiltUp Technologies',
    period: 'Jan 2025 – Apr 2025',
    points: [
      'Developed and deployed a Hospital Management System (HMS) using the MERN stack.',
      'Implemented secure user authentication and role-based access control, improving data security.',
      'Designed REST APIs for patient record management, ensuring efficient data handling.',
      'Enhanced React-based dashboard UI, improving user experience and accessibility.',
      'Contributed to both frontend and backend development, collaborating in an Agile team environment.',
    ],
  },
  {
    role: 'GenAI Job Simulation on Forage',
    company: 'BCG',
    period: 'October 2025',
    points: [
      'Completed a job simulation involving AI-powered financial chatbot development for BCG\'s GenAI Consulting team.',
      'Gained experience in Python programming, including the use of libraries such as pandas for data manipulation.',
      'Integrated and interpreted complex financial data from 10-K and 10-Q reports, employing rule-based logic to create a chatbot that provides user-friendly financial insights and analysis.',
    ],
  },
]

const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'GraphQL', 'TypeScript (Node.js)'],
  Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
  'DevOps & Cloud': ['Git', 'GitHub', 'Docker', 'Kubernetes', 'AWS Cloud', 'Jenkins', 'Terraform', 'CI/CD pipelines'],
  'AI / ML': ['LangChain', 'OpenAI API', 'Google Gemini API'],
  'Other Tools': ['Agile/Scrum', 'API Integration', 'Version Control'],
}

const projects = [
  {
    name: 'AI-Powered Research Assistant',
    desc: 'Built and deployed a full-stack Research Copilot module with RAG-based AI chat, document management, and analytics dashboard. Helps users summarize, analyze, and extract key insights from research papers and documents automatically.',
    stack: 'Next.js, FastAPI, LangChain',
  },
  {
    name: 'Job Portal Website',
    desc: 'Full-stack job portal with role-based authentication for job seekers and recruiters. Integrated AI-powered features: chatbot assistance, job match analysis, resume tips, and cover letter generation. Improved job matching speed by 40% through AI-powered recommendations.',
    stack: 'React, Node.js, Express, MongoDB, FastAPI, LangChain, Google Gemini API',
  },
]

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-36 pb-28">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14">
        <SectionHeader number="05" title="Resume" />
        <motion.a
          href="/Krishna_More_Resume.pdf"
          download
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="btn-gradient flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold self-start"
        >
          <Download size={15} />
          Download PDF
        </motion.a>
      </div>

      {/* Resume card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl p-8 md:p-12"
      >
        {/* Header */}
        <div className="mb-10 pb-8" style={{ borderBottom: '0.5px solid rgba(0,229,255,0.15)' }}>
          <h1 className="font-orbitron font-black text-3xl md:text-4xl gradient-text-white mb-2">
            Krishna More
          </h1>
          <p className="text-cosmic-muted text-base mb-5">Full Stack & DevOps Developer</p>
          <div className="flex flex-wrap gap-4 text-sm text-cosmic-muted">
            <a href="mailto:krishna.more8200@gmail.com" className="hover:text-cyan-DEFAULT transition-colors">
              krishna.more8200@gmail.com
            </a>
            <span>(+91) 8200640037</span>
            <a href="https://linkedin.com/in/krishnamore19" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-DEFAULT transition-colors flex items-center gap-1">
              LinkedIn <ExternalLink size={11} />
            </a>
            <a href="https://github.com/KrishnaMore19" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-DEFAULT transition-colors flex items-center gap-1">
              GitHub <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-10">
          <p className="text-cosmic-muted text-sm leading-relaxed">
            Full Stack & DevOps Developer with hands-on experience in building scalable web applications
            and cloud-native solutions. Proficient in React.js, Node.js, Express.js, FastAPI, REST APIs,
            PostgreSQL, MongoDB, Docker, Kubernetes, and AWS. Skilled in CI/CD pipelines, Agile methodologies,
            and AI-powered feature integration (LangChain, OpenAI, Gemini). Strong problem-solving,
            collaboration, and communication skills with a proven track record of delivering optimized digital solutions.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Code2 size={16} style={{ color: '#00E5FF' }} />
            <h2 className="font-orbitron font-bold text-white text-base">Skills</h2>
          </div>
          <div className="flex flex-col gap-4">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="flex flex-wrap gap-2 items-start">
                <span
                  className="text-xs tracking-widest uppercase shrink-0 pt-1"
                  style={{ color: '#00E5FF', minWidth: '110px' }}
                >
                  {cat}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Briefcase size={16} style={{ color: '#00E5FF' }} />
            <h2 className="font-orbitron font-bold text-white text-base">Experience</h2>
          </div>
          <div className="flex flex-col gap-8">
            {experience.map((exp) => (
              <div key={exp.role} className="timeline-item pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h3 className="text-white font-semibold">{exp.role}</h3>
                    <p className="text-cyan-DEFAULT text-sm">{exp.company}</p>
                  </div>
                  <span className="text-cosmic-muted text-xs tracking-wide mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {exp.points.map((p) => (
                    <li key={p} className="text-sm text-cosmic-muted flex items-start gap-2">
                      <span style={{ color: '#9D4EDD', flexShrink: 0 }}>›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Code2 size={16} style={{ color: '#00E5FF' }} />
            <h2 className="font-orbitron font-bold text-white text-base">Projects</h2>
          </div>
          <div className="flex flex-col gap-5">
            {projects.map((p) => (
              <div key={p.name} className="timeline-item pb-1">
                <h3 className="text-white font-semibold mb-1">{p.name}</h3>
                <p className="text-xs text-cyan-DEFAULT mb-1.5 tracking-wide">{p.stack}</p>
                <p className="text-sm text-cosmic-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <GraduationCap size={16} style={{ color: '#00E5FF' }} />
            <h2 className="font-orbitron font-bold text-white text-base">Education</h2>
          </div>
          <div className="timeline-item">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <h3 className="text-white font-semibold">Bachelor of Engineering (Computer Engineering)</h3>
              <span className="text-cosmic-muted text-xs tracking-wide">Aug 2021 – May 2025</span>
            </div>
            <p className="text-cyan-DEFAULT text-sm mb-1">
              Gujarat Technological University — Shree Swaminarayan Institute of Technology
            </p>
            <p className="text-cosmic-muted text-sm">CGPA: 7.93 / 10</p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Award size={16} style={{ color: '#00E5FF' }} />
            <h2 className="font-orbitron font-bold text-white text-base">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: 'Introduction to Front-End Development', issuer: 'Meta' },
              { name: 'Programming with JavaScript', issuer: 'Meta' },
              { name: 'Deploy Static Website on Azure', issuer: 'Microsoft Learn Student Ambassadors (MLSA)' },
              { name: 'Exploring Azure and AI Language Studio', issuer: 'MLSA' },
            ].map((c) => (
              <div
                key={c.name}
                className="text-sm py-2.5 px-3 rounded-lg"
                style={{ background: 'rgba(0,229,255,0.04)', border: '0.5px solid rgba(0,229,255,0.12)' }}
              >
                <p className="text-white text-xs font-medium mb-0.5">{c.name}</p>
                <p className="text-cosmic-muted text-xs">{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}