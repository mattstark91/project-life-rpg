import type { Config } from 'tailwindcss'

// Design system "Project Life RPG"
// Palette ispirata a HUD di videogiochi (GTA V / Persona 5): nero profondo,
// pannelli grigio-viola, blu elettrico e viola per le azioni, oro per i traguardi.
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#07070c',          // sfondo principale, nero quasi assoluto
        panel: '#12121b',         // pannelli / card
        'panel-light': '#1b1b29', // pannelli in evidenza / hover
        border: '#26263a',
        electric: {
          DEFAULT: '#2E6BFF',
          soft: '#5C8BFF',
          glow: '#7FA8FF',
        },
        violet: {
          DEFAULT: '#8B3CFF',
          soft: '#A868FF',
        },
        gold: {
          DEFAULT: '#FFC24B',
          soft: '#FFD98A',
        },
        danger: '#FF3B5C',
        success: '#33E2A0',
        muted: '#8A8AA3',
      },
      fontFamily: {
        display: ['"Rajdhani"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, rgba(46,107,255,0.06) 0%, rgba(7,7,12,0) 60%)',
        scanlines:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(46,107,255,0.35)',
        'glow-gold': '0 0 20px rgba(255,194,75,0.35)',
        'glow-violet': '0 0 20px rgba(139,60,255,0.35)',
      },
      clipPath: {
        panel: 'polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.2s ease-in-out infinite',
        'slide-up': 'slide-up 0.4s ease-out',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
