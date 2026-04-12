import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display:  ['Neue Haas Unica', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body:     ['EB Garamond', 'Garamond', 'Georgia', 'serif'],
        fragment: ['var(--font-fragment)',   'monospace'],
        mono:     ['var(--font-space-mono)', 'monospace'],
        sans:     ['var(--font-fragment)',   'monospace'],
        // legacy
        alfa:     ['var(--font-alfa)',     'serif'],
        amulya:   ['Amulya',               'serif'],
        bebas:    ['var(--font-bebas)',    'sans-serif'],
      },
      colors: {
        bg:    '#1C1C1C',
        fg:    '#F3ECE6',
        green: '#004225',
        acid:  '#D4F744',
      },
    },
  },
  plugins: [],
}

export default config
