'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card card-hover rounded-2xl p-6 flex flex-col gap-4 h-full"
    >
      <div>
        <span className="tag-chip">{project.tag}</span>
      </div>

      <div>
        <h3 className="font-orbitron font-bold text-lg text-white mb-2">
          {project.title}
        </h3>
        <p className="text-cosmic-muted text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.slice(0, 5).map((tech) => (
          <span key={tech} className="skill-chip">{tech}</span>
        ))}
        {project.techStack.length > 5 && (
          <span className="skill-chip opacity-60">+{project.techStack.length - 5}</span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'rgba(0,229,255,0.1)' }}>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cosmic-muted hover:text-cyan-DEFAULT transition-colors text-xs tracking-wide"
            >
              <Github size={13} />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cosmic-muted hover:text-cyan-DEFAULT transition-colors text-xs tracking-wide"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center gap-1 text-xs text-cyan-DEFAULT hover:opacity-70 transition-opacity tracking-wide"
        >
          Details <ArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  )
}
