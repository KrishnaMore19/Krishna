'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'AI', value: 'ai' },
  { label: 'DevOps', value: 'devops' },
]

export default function ProjectsPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <div className="max-w-6xl mx-auto px-6 pt-36 pb-28">
      <SectionHeader
        number="01"
        title="Projects"
        subtitle="A selection of real-world systems I've built"
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map((f) => (
          <motion.button
            key={f.value}
            onClick={() => setActive(f.value)}
            whileTap={{ scale: 0.96 }}
            className="relative px-6 py-2.5 rounded-full text-sm transition-all duration-200"
            style={{
              background: active === f.value
                ? 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(157,78,221,0.15))'
                : 'rgba(255,255,255,0.03)',
              border: active === f.value
                ? '0.5px solid rgba(0,229,255,0.5)'
                : '0.5px solid rgba(0,229,255,0.15)',
              color: active === f.value ? '#00E5FF' : '#7B82A8',
              fontWeight: active === f.value ? 600 : 400,
            }}
          >
            {f.label}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project, i) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <ProjectCard project={project} index={i} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-cosmic-muted"
        >
          No projects in this category yet.
        </motion.div>
      )}
    </div>
  )
}
