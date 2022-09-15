/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#021634',
      'background-light': '#1c3254',
      white: '#ffffff',
      blush: '#ffeaee',
      accent: '#75e3f0',
      cta: '#f2a6c6',
      alert: '#F25757',
      warn: '#F7D08A',
      success: '#00A878'
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
