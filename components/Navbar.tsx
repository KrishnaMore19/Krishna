'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(3,4,15,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '0.5px solid rgba(0,229,255,0.12)'
            : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <span
              className="font-orbitron font-bold text-lg tracking-[3px] gradient-text"
              style={{ letterSpacing: '3px' }}
            >
              KM.DEV
            </span>
            <span
              className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-DEFAULT to-purple-DEFAULT w-0 group-hover:w-full transition-all duration-300"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm tracking-widest uppercase transition-colors duration-200 group"
                  style={{
                    color: active ? '#00E5FF' : '#7B82A8',
                    letterSpacing: '1.5px',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-cyan-DEFAULT transition-all duration-300"
                    style={{ width: active ? '100%' : '0' }}
                  />
                  <span className="absolute -bottom-1 left-0 h-px bg-cyan-DEFAULT w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              )
            })}

            <Link
              href="/contact"
              className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold tracking-wide btn-gradient"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cosmic-muted hover:text-cyan-DEFAULT transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(3,4,15,0.97)', paddingTop: '80px' }}
          >
            <div className="flex flex-col items-center gap-8 pt-12">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-orbitron text-lg tracking-widest uppercase transition-colors"
                    style={{ color: active ? '#00E5FF' : '#E8EAFF' }}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                className="mt-4 px-8 py-3 rounded-lg text-sm font-semibold btn-gradient"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
