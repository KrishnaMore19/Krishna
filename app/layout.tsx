import type { Metadata } from 'next'
// @ts-ignore
import './globals.css'
import Navbar from '@/components/Navbar'
import StarCanvas from '@/components/StarCanvas'

export const metadata: Metadata = {
  title: 'Krishna More — Full Stack & DevOps Developer',
  description: 'Portfolio of Krishna More — Full Stack, DevOps, and AI Developer. Building scalable web applications and cloud-native systems.',
  keywords: ['Krishna More', 'Full Stack Developer', 'DevOps', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
  authors: [{ name: 'Krishna More' }],
  openGraph: {
    title: 'Krishna More — Full Stack & DevOps Developer',
    description: 'Building scalable web applications and cloud-native solutions.',
    type: 'website',
    url: 'https://krishnamore.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Sora:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-navy text-cosmic-text antialiased">
        <StarCanvas />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}