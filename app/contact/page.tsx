'use client'

import { motion, type Variants } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'krishna.more8200@gmail.com',
    href: 'mailto:krishna.more8200@gmail.com',
    color: '#00E5FF',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8200640037',
    href: 'tel:+918200640037',
    color: '#9D4EDD',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'KrishnaMore19',
    href: 'https://github.com/KrishnaMore19',
    color: '#00E5FF',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'krishnamore19',
    href: 'https://www.linkedin.com/in/krishnamore19/',
    color: '#9D4EDD',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
    color: '#00E5FF',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
    color: '#9D4EDD',
  },
]

const lookingForItems = [
  'Full-time SWE / DevOps roles',
  'Freelance web & cloud projects',
  'AI integration collaborations',
  'Open source contributions',
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const iconVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 16, delay: 0.1 },
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-36 pb-28">
      <SectionHeader
        number="04"
        title="Contact"
        subtitle="Let's build something great together"
      />

      {/* Top hero text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14 max-w-2xl"
      >
        <p className="text-cosmic-muted text-base leading-relaxed">
          I'm open to full-time roles, freelance projects, and technical collaborations.
          Especially excited about DevOps, cloud-native systems, and AI-powered applications.
          Drop a message and I'll get back to you within 24 hours.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Contact info — left sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          <div className="glass-card rounded-2xl p-6 mb-2">
            <h3 className="font-orbitron font-bold text-white text-sm mb-5 tracking-wide">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-5">
              {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}12`, border: `0.5px solid ${color}30` }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs text-cosmic-muted tracking-widest uppercase mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:opacity-70 transition-opacity"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What I'm looking for — animated list */}
          <div className="glass-card rounded-2xl p-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <h3 className="font-orbitron font-bold text-white text-sm tracking-wide">
                Looking For
              </h3>
              <motion.ul
                role="list"
                aria-label="What I'm looking for"
                className="flex flex-col gap-2.5"
                variants={containerVariants}
              >
                {lookingForItems.map((item) => (
                  <motion.li
                    key={item}
                    variants={listItemVariants}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300"
                    style={{
                      background: 'rgba(0,229,255,0.04)',
                      border: '0.5px solid rgba(0,229,255,0.12)',
                    }}
                    whileHover={{
                      background: 'rgba(0,229,255,0.08)',
                      borderColor: 'rgba(0,229,255,0.28)',
                    }}
                  >
                    <motion.span
                      variants={iconVariants}
                      aria-hidden="true"
                      className="flex h-7 w-7 items-center justify-center rounded-full flex-shrink-0"
                      style={{ background: 'rgba(0,229,255,0.12)' }}
                    >
                      <CheckCircle2 size={13} style={{ color: '#00E5FF' }} />
                    </motion.span>
                    <span className="text-sm text-cosmic-muted">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Form — right */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-orbitron font-bold text-white text-sm mb-6 tracking-wide">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  )
}