import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Github, ExternalLink, CheckCircle } from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  return {
    title: project ? `${project.title} — Krishna More` : 'Project Not Found',
    description: project?.description,
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return (
    <div className="max-w-4xl mx-auto px-6 pt-36 pb-28">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-cosmic-muted hover:text-cyan-DEFAULT transition-colors text-sm mb-10 tracking-wide"
      >
        <ArrowLeft size={14} />
        Back to Projects
      </Link>

      {/* Header */}
      <div className="mb-12">
        <span className="tag-chip mb-4 inline-block">{project.tag}</span>
        <h1
          className="font-orbitron font-black text-white mb-4"
          style={{ fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '-0.5px', lineHeight: 1.1 }}
        >
          {project.title}
        </h1>
        <p className="text-cosmic-muted text-base leading-relaxed max-w-2xl">
          {project.longDescription}
        </p>
      </div>

      {/* Links */}
      {(project.github || project.live) && (
        <div className="flex gap-4 mb-14">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
            >
              <Github size={15} /> View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      )}

      {/* Tech Stack */}
      <div className="glass-card rounded-2xl p-8 mb-8">
        <h2 className="font-orbitron font-bold text-lg text-white mb-5">Tech Stack</h2>
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg text-sm"
              style={{
                background: 'rgba(0,229,255,0.07)',
                border: '0.5px solid rgba(0,229,255,0.25)',
                color: '#00E5FF',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="glass-card rounded-2xl p-8 mb-8">
        <h2 className="font-orbitron font-bold text-lg text-white mb-5">Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-cosmic-muted">
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#00E5FF' }} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture */}
      <div className="glass-card rounded-2xl p-8 mb-8">
        <h2 className="font-orbitron font-bold text-lg text-white mb-5">Architecture</h2>
        <p className="text-cosmic-muted text-sm leading-relaxed mb-6">{project.architecture}</p>

        {/* Visual arch diagram — rendered from project data, no hardcoding needed */}
        {project.architectureDiagram && (
          <div
            className="rounded-xl p-6 font-mono text-xs leading-loose overflow-x-auto"
            style={{ background: 'rgba(0,0,0,0.4)', border: '0.5px solid rgba(0,229,255,0.12)' }}
          >
            <pre style={{ color: '#7B82A8', whiteSpace: 'pre' }}>{project.architectureDiagram}</pre>
          </div>
        )}
      </div>

      {/* Challenges */}
      <div className="glass-card rounded-2xl p-8 mb-12">
        <h2 className="font-orbitron font-bold text-lg text-white mb-5">Challenges & Solutions</h2>
        <p className="text-cosmic-muted text-sm leading-relaxed">{project.challenges}</p>
      </div>

      {/* Nav between projects */}
      <div className="flex justify-between items-center pt-8" style={{ borderTop: '0.5px solid rgba(0,229,255,0.12)' }}>
        <Link
          href="/projects"
          className="btn-ghost flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
        >
          <ArrowLeft size={14} /> All Projects
        </Link>
        <Link
          href="/contact"
          className="btn-gradient flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
        >
          Hire Me →
        </Link>
      </div>
    </div>
  )
}