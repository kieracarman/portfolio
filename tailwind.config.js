const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        'background-light': '#1c3254',
        text: '#2e2e2e',
        blush: '#ffeaee',
        accent: '#75e3f0',
        cta: '#f2a6c6',
        alert: '#F25757',
        warn: '#F7D08A',
        success: '#00A878'
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', ...fontFamily.sans]
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
            p: {
              fontWeight: '500'
            },
            blockquote: {
              backgroundColor: '#F3F4F6',
              borderRadius: '1rem',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem'
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
