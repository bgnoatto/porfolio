import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: '#020617',
        surface: { 1: '#0F172A', 2: '#1E293B' },
        accent: { DEFAULT: '#22C55E', hover: '#4ADE80' },
      },
    },
  },
  plugins: [],
}

export default config
