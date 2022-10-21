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
      },
      typography: {
        xl: {
          css: {
            a: {
              textDecoration: 'underline',
              textDecorationThickness: '1px'
            },
            h2: {
              fontWeight: '600'
            },
            h3: {
              fontWeight: '500'
            },
            blockquote: {
              backgroundColor: '#1c3254',
              borderRadius: '1rem',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              outline: '3px',
              outlineColor: '#1c3254',
              outlineStyle: 'dashed',
              outlineOffset: '4px'
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
