import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#03040F',
        deep: '#080B1A',
        panel: 'rgba(255,255,255,0.04)',
        cyan: {
          DEFAULT: '#00E5FF',
          dim: 'rgba(0,229,255,0.15)',
          border: 'rgba(0,229,255,0.18)',
          hover: 'rgba(0,229,255,0.35)',
        },
        purple: {
          DEFAULT: '#9D4EDD',
          dim: 'rgba(157,78,221,0.15)',
          border: 'rgba(157,78,221,0.22)',
        },
        cosmic: {
          text: '#E8EAFF',
          muted: '#7B82A8',
          faint: '#3D4166',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        sora: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #00E5FF, #9D4EDD)',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,229,255,0.08) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 30s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0,229,255,0.25)',
        'purple-glow': '0 0 20px rgba(157,78,221,0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
