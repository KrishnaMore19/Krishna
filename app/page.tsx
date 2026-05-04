'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Cpu, Cloud, Code2, Brain, Terminal, GitBranch, Layers, Zap, Database } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import SectionHeader from '@/components/SectionHeader'
import { featuredProjects, projects } from '@/data/projects'

const techStack = ['React.js','TypeScript','Node.js','FastAPI','Python','Docker','Kubernetes','AWS','LangChain','PostgreSQL','MongoDB']

const skillCategories = [
  { icon: Code2, title: 'Frontend', color: '#00E5FF', skills: ['React.js','TypeScript','Tailwind CSS','HTML5','CSS3','Bootstrap'] },
  { icon: Cpu,   title: 'Backend',  color: '#9D4EDD', skills: ['Node.js','Express.js','FastAPI','Spring Boot','Java','Python'] },
  { icon: Cloud, title: 'DevOps & Cloud', color: '#00E5FF', skills: ['Docker','Kubernetes','AWS','Jenkins','Terraform','CI/CD'] },
  { icon: Brain, title: 'AI / ML',  color: '#9D4EDD', skills: ['LangChain','OpenAI API','Google Gemini','Python','pandas'] },
]

const terminalLines = [
  { text: '$ initializing portfolio...', color: '#64748B', delay: 0.5 },
  { text: '✓ React.js + TypeScript loaded', color: '#00E5FF', delay: 0.8 },
  { text: '✓ Node.js + FastAPI running',   color: '#00E5FF', delay: 1.1 },
  { text: '✓ Docker containers healthy',   color: '#00E5FF', delay: 1.4 },
  { text: '✓ AWS cloud connected',          color: '#00E5FF', delay: 1.7 },
  { text: '✓ AI models initialized',        color: '#9D4EDD', delay: 2.0 },
  { text: '$ status: READY TO BUILD 🚀',    color: '#22C55E', delay: 2.4 },
]

const stats = [
  { icon: GitBranch, label: 'Projects Built', value: '10+', color: '#00E5FF' },
  { icon: Layers,    label: 'Tech Stack',      value: '20+', color: '#9D4EDD' },
  { icon: Zap,       label: 'AI Features',     value: '3+',  color: '#00E5FF' },
  { icon: Database,  label: 'Databases',       value: '5+',  color: '#9D4EDD' },
]

const bars = [3,5,2,7,4,6,3,8,5,7,4,6,5,8,3,6,7,4,5,6]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] as const } },
})

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }} className="noise">
        {/* Radial glow */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(0,229,255,0.07) 0%, transparent 70%)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', paddingTop: 120, paddingBottom: 80, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 56, alignItems: 'center' }}>

            {/* LEFT */}
            <div>
              {/* Status badge */}
              <motion.div variants={fadeUp(0)} initial="hidden" animate="show"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(0,229,255,0.18)', borderRadius: 100, padding: '7px 18px', marginBottom: 28 }}
              >
                <span className="pulse-dot" />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: '2px', color: '#00E5FF', textTransform: 'uppercase' }}>Open for Opportunities</span>
              </motion.div>

              {/* Name */}
              <motion.h1 variants={fadeUp(0.1)} initial="hidden" animate="show"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, lineHeight: 1.05, marginBottom: 12, fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '-2px' }}
              >
                <span className="gradient-text">Krishna More</span>
                <br />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: '#64748B', fontSize: 'clamp(16px, 2.2vw, 26px)', letterSpacing: 0 }}>
                  Full Stack · DevOps · AI Developer
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p variants={fadeUp(0.2)} initial="hidden" animate="show"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748B', fontSize: 16, lineHeight: 1.75, maxWidth: 480, marginBottom: 36 }}
              >
                Building scalable web applications and cloud-native solutions.
                From React UIs to Kubernetes clusters — I turn complex problems into elegant systems.
              </motion.p>

              {/* CTAs - UI Pro Max: cursor-pointer + 44px touch target */}
              <motion.div variants={fadeUp(0.3)} initial="hidden" animate="show"
                style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 48 }}
              >
                <Link href="/projects" style={{ textDecoration: 'none' }}>
                  <motion.span whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, #00E5FF, #9D4EDD)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, padding: '13px 26px', borderRadius: 12, cursor: 'pointer', letterSpacing: '0.3px', minHeight: 44 }}
                  >View Projects <ArrowRight size={15} /></motion.span>
                </Link>
                <a href="/Krishna_More_Resume.pdf" download style={{ textDecoration: 'none' }}>
                  <motion.span whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', border: '0.5px solid rgba(0,229,255,0.35)', color: '#F8FAFC', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14, padding: '13px 26px', borderRadius: 12, cursor: 'pointer', minHeight: 44, transition: 'border-color 0.2s, color 0.2s' }}
                    onHoverStart={e => {}}
                  ><Download size={15} /> Download Resume</motion.span>
                </a>
              </motion.div>

              {/* Tech pills */}
              <motion.div variants={fadeUp(0.4)} initial="hidden" animate="show">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '2px', color: '#64748B', textTransform: 'uppercase', marginBottom: 14 }}>Tech Stack</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {techStack.map(t => (
                    <motion.span key={t} whileHover={{ borderColor: '#00E5FF', color: '#F8FAFC', y: -1 }}
                      style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(0,229,255,0.16)', borderRadius: 100, padding: '5px 14px', fontSize: 12, color: '#CBD5E1', fontFamily: "'DM Sans', sans-serif", cursor: 'default', transition: 'border-color 0.2s, color 0.2s' }}
                    >{t}</motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Terminal + Stats */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
              className="hidden lg:flex"
            >
              {/* Terminal */}
              <div className="scanlines" style={{ borderRadius: 16, overflow: 'hidden', background: 'rgba(4,6,18,0.92)', border: '0.5px solid rgba(0,229,255,0.22)', boxShadow: '0 0 40px rgba(0,229,255,0.06), 0 24px 64px rgba(0,0,0,0.6)' }}>
                {/* Title bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '0.5px solid rgba(0,229,255,0.08)' }}>
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }} />
                  <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 8 }}>
                    <Terminal size={11} style={{ color: '#64748B' }} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#64748B', letterSpacing: '1px' }}>krishna@portfolio:~</span>
                  </div>
                </div>
                {/* Lines */}
                <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 210 }}>
                  {terminalLines.map((line, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: line.delay }}
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: line.color, lineHeight: 1.4 }}
                    >{line.text}</motion.div>
                  ))}
                  <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}
                    style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}
                  >
                    <span style={{ color: '#00E5FF', fontFamily: 'JetBrains Mono', fontSize: 13 }}>$</span>
                    <span style={{ display: 'inline-block', width: 8, height: 16, background: '#00E5FF', borderRadius: 1 }} />
                  </motion.div>
                </div>
              </div>

              {/* Stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {stats.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 2.7 + i * 0.08 }}
                      style={{ background: 'rgba(255,255,255,0.035)', border: `0.5px solid ${s.color}22`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}
                    >
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: `${s.color}12`, border: `0.5px solid ${s.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={16} style={{ color: s.color }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: '#F8FAFC', lineHeight: 1 }}>{s.value}</div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#64748B', marginTop: 2 }}>{s.label}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* GitHub bar */}
              <motion.a href="https://github.com/KrishnaMore19" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 3.2 }}
                whileHover={{ borderColor: 'rgba(0,229,255,0.4)' }}
                style={{ background: 'rgba(255,255,255,0.035)', border: '0.5px solid rgba(0,229,255,0.16)', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', cursor: 'pointer', transition: 'border-color 0.25s ease' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Github size={17} style={{ color: '#00E5FF' }} />
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#F8FAFC', margin: 0 }}>KrishnaMore19</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#64748B', margin: 0 }}>github.com</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                  {bars.map((h, i) => (
                    <motion.div key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.25, delay: 3.3 + i * 0.035 }}
                      style={{ width: 4, height: h * 3, borderRadius: 1, background: h > 5 ? 'rgba(0,229,255,0.7)' : h > 3 ? 'rgba(157,78,221,0.5)' : 'rgba(255,255,255,0.1)', transformOrigin: 'bottom' }}
                    />
                  ))}
                </div>
                <ArrowRight size={14} style={{ color: '#64748B' }} />
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>
        <SectionHeader number="01" title="Featured Projects" subtitle="Real-world systems built with modern stacks" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {featuredProjects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <motion.span whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', border: '0.5px solid rgba(0,229,255,0.3)', color: '#F8FAFC', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14, padding: '12px 28px', borderRadius: 12, cursor: 'pointer', transition: 'border-color 0.2s' }}
            >View All Projects <ArrowRight size={14} /></motion.span>
          </Link>
        </motion.div>
      </section>

      {/* ── SKILLS ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px' }}>
        <SectionHeader number="02" title="Skills" subtitle="Technologies I work with every day" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div key={cat.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4, borderColor: 'rgba(0,229,255,0.35)' }}
                style={{ background: 'rgba(255,255,255,0.035)', border: '0.5px solid rgba(0,229,255,0.16)', borderRadius: 16, padding: 24, cursor: 'default', transition: 'border-color 0.25s, transform 0.25s' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: `${cat.color}15`, border: `0.5px solid ${cat.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={17} style={{ color: cat.color }} />
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600, color: cat.color }}>{cat.title}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {cat.skills.map(s => <span key={s} className="chip" style={{ fontSize: 11 }}>{s}</span>)}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 96px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', padding: '64px 32px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,229,255,0.05), rgba(157,78,221,0.05))', border: '0.5px solid rgba(0,229,255,0.18)' }}
        >
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,229,255,0.05), transparent)' }} />
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', color: '#F8FAFC', marginBottom: 12, position: 'relative', zIndex: 1 }}>Open for Opportunities</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748B', fontSize: 15, maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
            Looking for full-time roles, freelance projects, and collaborations. Especially excited about DevOps, AI integration, and scalable systems.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <motion.span whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, #00E5FF, #9D4EDD)', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, padding: '13px 28px', borderRadius: 12, cursor: 'pointer', minHeight: 44 }}
              >Get In Touch <ArrowRight size={15} /></motion.span>
            </Link>
            <a href="https://github.com/KrishnaMore19" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <motion.span whileHover={{ scale: 1.04, y: -2, borderColor: '#00E5FF', color: '#00E5FF' }} whileTap={{ scale: 0.97 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', border: '0.5px solid rgba(0,229,255,0.3)', color: '#F8FAFC', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14, padding: '13px 28px', borderRadius: 12, cursor: 'pointer', minHeight: 44, transition: 'border-color 0.2s, color 0.2s' }}
              ><Github size={15} /> GitHub</motion.span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}