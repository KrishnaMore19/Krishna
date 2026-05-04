'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  number: string
  title: string
  subtitle?: string
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-3">
        <span className="sec-num">{number}</span>
        <h2
          className="font-orbitron font-bold text-2xl md:text-3xl text-white"
          style={{ letterSpacing: '-0.5px' }}
        >
          {title}
        </h2>
        <div
          className="flex-1 h-px"
          style={{ background: 'rgba(0,229,255,0.18)' }}
        />
      </div>
      {subtitle && (
        <p className="text-cosmic-muted text-sm ml-16 md:ml-20">{subtitle}</p>
      )}
    </motion.div>
  )
}
