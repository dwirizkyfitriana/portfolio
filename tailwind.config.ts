import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      current: 'currentColor',
      black: '#0D0D0D',
      white: '#FFFFFF',
      onyx: '#181818',
      'dark-grey': '#808080',
      'medium-grey': 'rgba(128, 128, 128, 0.5)',
      'light-grey': '#C5C5C5',
      'light-blue': 'rgba(63, 100, 234, 0.43)',
      'light-red': 'rgba(233, 63, 64, 0.43)',
      'light-yellow': 'rgba(255, 184, 0, 0.43)',
      'dark-border': '#383737',
      'white-10%': 'rgba(255, 255, 255, 0.1)',
      'white-25%': 'rgba(255, 255, 255, 0.25)',
      'white-70%': 'rgba(255, 255, 255, 0.7)',
      'black-10%': 'rgb(21, 21, 21, 0.1)',
      'black-50%': 'rgba(21, 21, 21, 0.5)',
      'main-white': '#FBFBFB',
      'faint-white': '#F3F3F3',
      'light-border': '#EBEBEB',
      'light-bg': '#F6F6F6',
      'dark-bg': '#151515',
      'dark-navbar': 'rgba(24, 24, 29, 0.3)',
      'dark-navbar-60': 'rgba(24, 24, 29, 0.6)'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    backdropBlur: {
      xs: '2px'
    },
    extend: {
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #1A1A1A 0%, #131313 100%)',
        'gradient-header': 'url("/assets/images/gradient-header.svg")',
        'gradient-footer': 'url("/assets/images/gradient-footer.svg")'
      },
      keyframes: {
        arrow: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        arrow: 'arrow 1s infinite'
      }
    }
  },
  plugins: [require('daisyui')]
}
export default config
