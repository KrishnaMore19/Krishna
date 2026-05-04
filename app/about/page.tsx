'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import { GraduationCap, Briefcase, Award, Target, ExternalLink } from 'lucide-react'

const journey = [
  {
    year: 'Aug 2021',
    title: 'Started B.E. Computer Engineering',
    subtitle: 'Shree Swaminarayan Institute of Technology — GTU',
    desc: 'Dove into programming fundamentals, data structures, and algorithms. Fell in love with building things.',
    icon: GraduationCap,
    color: '#9D4EDD',
  },
  {
    year: '2022–2023',
    title: 'Frontend & Backend Exploration',
    subtitle: 'Self-learning & college projects',
    desc: 'Built my first full-stack apps using MERN stack. Started exploring RESTful API design and database modeling.',
    icon: Target,
    color: '#00E5FF',
  },
  {
    year: '2024',
    title: 'Expanded to DevOps & Cloud',
    subtitle: 'Docker, Kubernetes, AWS, Jenkins',
    desc: 'Started containerizing applications, learned CI/CD pipelines, and got hands-on with AWS cloud services and Terraform.',
    icon: Target,
    color: '#9D4EDD',
  },
  {
    year: 'Jan–Apr 2025',
    title: 'MERN Intern — BuiltUp Technologies',
    subtitle: 'Professional experience in Agile team',
    desc: 'Built and deployed a Hospital Management System with secure RBAC, REST APIs, and React dashboard UI enhancements.',
    icon: Briefcase,
    color: '#00E5FF',
  },
  {
    year: 'Oct 2025',
    title: 'BCG GenAI Job Simulation',
    subtitle: 'Forage — AI-powered financial chatbot',
    desc: 'Built a financial analysis chatbot for BCG using Python, pandas, LangChain, and rule-based AI logic on 10-K/10-Q data.',
    icon: Award,
    color: '#9D4EDD',
  },
  {
    year: 'May 2025',
    title: 'B.E. Computer Engineering',
    subtitle: 'GTU — CGPA: 7.93/10',
    desc: 'Graduated with strong fundamentals in software engineering, cloud computing, and AI/ML systems.',
    icon: GraduationCap,
    color: '#00E5FF',
  },
]

const certs = [
  // Google Cloud
  {
    name: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals',
    issuer: 'Google',
    issued: 'Sep 2023',
    credentialId: '5040307',
    credentialUrl: 'https://www.skills.google/public_profiles/98025b2e-a22f-4ab4-a8f5-a942b7df9a5e/badges/5040307',
    color: '#00E5FF',
  },
  {
    name: 'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud',
    issuer: 'Google',
    issued: 'Sep 2023',
    credentialId: '5074597',
    credentialUrl: 'https://www.skills.google/public_profiles/98025b2e-a22f-4ab4-a8f5-a942b7df9a5e/badges/5074597',
    color: '#00E5FF',
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google',
    issued: 'Sep 2023',
    credentialId: '5091680',
    credentialUrl: 'https://www.skills.google/public_profiles/98025b2e-a22f-4ab4-a8f5-a942b7df9a5e/badges/5091680',
    color: '#00E5FF',
  },
  {
    name: 'Google Cloud GenAI Game – Level 3',
    issuer: 'Google',
    issued: 'Sep 2023',
    credentialId: '5091607',
    credentialUrl: 'https://www.skills.google/public_profiles/98025b2e-a22f-4ab4-a8f5-a942b7df9a5e/badges/5091607',
    color: '#00E5FF',
  },
  // Forage
  {
    name: 'BCG — GenAI Job Simulation',
    issuer: 'Forage',
    issued: 'Oct 2025',
    credentialId: 'nwdP2v3kthP68Wrni',
    credentialUrl: 'https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_68ca5d667ecbfddfcdc1539c_1760011989181_completion_certificate.pdf',
    color: '#9D4EDD',
  },
  {
    name: 'J.P. Morgan — Software Engineering Job Simulation',
    issuer: 'Forage',
    issued: 'Oct 2025',
    credentialId: 'mPFtn8brhnxpnvH8R',
    credentialUrl: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68ca5d667ecbfddfcdc1539c_1761275173624_completion_certificate.pdf',
    color: '#9D4EDD',
  },
  {
    name: 'Electronic Arts — Software Engineering Job Simulation',
    issuer: 'Forage',
    issued: null,
    credentialId: null,
    credentialUrl: null,
    color: '#9D4EDD',
  },
  // Meta / MLSA
  {
    name: 'Introduction to Front-End Development',
    issuer: 'Meta',
    issued: null,
    credentialId: null,
    credentialUrl: null,
    color: '#00E5FF',
  },
  {
    name: 'Programming with JavaScript',
    issuer: 'Meta',
    issued: null,
    credentialId: null,
    credentialUrl: null,
    color: '#00E5FF',
  },
  {
    name: 'Deploy Static Website on Azure',
    issuer: 'MLSA — Microsoft',
    issued: null,
    credentialId: null,
    credentialUrl: null,
    color: '#9D4EDD',
  },
  {
    name: 'Exploring Azure and AI Language Studio',
    issuer: 'MLSA — Microsoft',
    issued: null,
    credentialId: null,
    credentialUrl: null,
    color: '#9D4EDD',
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    color: '#00E5FF',
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    color: '#9D4EDD',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Spring Boot', 'Java', 'Python', 'Hibernate ORM'],
  },
  {
    title: 'Databases',
    color: '#00E5FF',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'DevOps & Cloud',
    color: '#9D4EDD',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'CI/CD', 'Git', 'GitHub'],
  },
  {
    title: 'AI / ML',
    color: '#00E5FF',
    skills: ['LangChain', 'OpenAI API', 'Google Gemini API', 'Python', 'pandas'],
  },
  {
    title: 'Practices',
    color: '#9D4EDD',
    skills: ['Agile / Scrum', 'REST API Design', 'RBAC', 'JWT Auth', 'Version Control'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] },
  }),
}

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-36 pb-28">
      {/* Hero */}
      <div className="mb-20">
        <SectionHeader number="00" title="About Me" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          <div>
            <p className="text-cosmic-muted leading-relaxed mb-5">
              I'm a Full Stack & DevOps Developer based in India, passionate about building
              systems that scale. I combine frontend polish with backend rigor and
              cloud-native thinking — so the products I build don't just look good, they perform.
            </p>
            <p className="text-cosmic-muted leading-relaxed mb-5">
              I graduated in Computer Engineering from Gujarat Technological University (CGPA: 7.93)
              and have hands-on experience with MERN stack, Spring Boot, FastAPI, Docker, Kubernetes,
              and AWS. I also integrate AI into products using LangChain and Gemini API.
            </p>
            <p className="text-cosmic-muted leading-relaxed">
              I'm currently looking for full-time opportunities where I can contribute to
              meaningful products, grow as an engineer, and work with teams that care deeply
              about quality and impact.
            </p>
          </div>

          {/* Quick info card */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            {[
              { label: 'Location', value: 'India' },
              { label: 'Degree', value: 'B.E. Computer Engineering (GTU)' },
              { label: 'CGPA', value: '7.93 / 10' },
              { label: 'Email', value: 'krishna.more8200@gmail.com' },
              { label: 'Phone', value: '+91 8200640037' },
              { label: 'Status', value: '✓ Open to Opportunities', highlight: true },
            ].map(({ label, value, highlight }) => (
              <div
                key={label}
                className="flex justify-between items-start text-sm py-2"
                style={{ borderBottom: '0.5px solid rgba(0,229,255,0.08)' }}
              >
                <span className="text-cosmic-muted tracking-wide">{label}</span>
                
<span
  style={{ color: highlight ? '#00E5FF' : '#E8EAFF', textAlign: 'right', maxWidth: '55%', wordBreak: 'break-all' }}
>
  {value}
</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Journey Timeline */}
      <div className="mb-20">
        <SectionHeader number="01" title="Journey" subtitle="From curious student to full-stack engineer" />
        <div className="flex flex-col gap-0">
          {journey.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.year}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="timeline-item pb-8"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${item.color}18`, border: `0.5px solid ${item.color}35` }}
                  >
                    <Icon size={15} style={{ color: item.color }} />
                  </div>
                  <div>
                    <span className="text-xs tracking-[1.5px] uppercase mb-1 block" style={{ color: item.color }}>
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold text-base mb-0.5">{item.title}</h3>
                    <p className="text-xs text-cosmic-muted mb-2 tracking-wide">{item.subtitle}</p>
                    <p className="text-sm text-cosmic-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Skills grid */}
      <div className="mb-20">
        <SectionHeader number="02" title="Skills" subtitle="Full-stack from UI to infrastructure" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card rounded-2xl p-5"
            >
              <p
                className="text-xs tracking-[1.5px] uppercase font-semibold mb-3"
                style={{ color: group.color }}
              >
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span key={s} className="skill-chip">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <SectionHeader number="03" title="Certifications" subtitle="Verified credentials & course completions" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card rounded-xl p-5 flex items-start gap-4"
              style={{ border: `0.5px solid ${cert.color}18` }}
              whileHover={{ borderColor: `${cert.color}40` }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${cert.color}12`, border: `0.5px solid ${cert.color}30` }}
              >
                <Award size={15} style={{ color: cert.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium leading-snug mb-1">{cert.name}</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-cosmic-muted text-xs tracking-wide">{cert.issuer}</p>
                  {cert.issued && (
                    <p className="text-xs" style={{ color: cert.color, opacity: 0.7 }}>
                      {cert.issued}
                    </p>
                  )}
                </div>
                {cert.credentialId && (
                  <p className="text-cosmic-muted text-xs mt-1 opacity-50">
                    ID: {cert.credentialId}
                  </p>
                )}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs mt-2 transition-opacity hover:opacity-70"
                    style={{ color: cert.color }}
                  >
                    Show credential <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}