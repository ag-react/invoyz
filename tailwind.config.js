const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['Spartan'],
      serif: ['sans-serif']
    },
    extend: {
      fontSize: {
        'h1': ['32px', {
          lineHeight: '36px',
          letterSpacing: '-1px',
        }],
        'h2': ['20px', {
          lineHeight: '22px',
          letterSpacing: '-0.63px',
        }],
        'h3': ['16px', {
          lineHeight: '24px',
          letterSpacing: '-0.8px',
        }],
        'h4': ['12px', {
          lineHeight: '15px',
          letterSpacing: '-0.25px',
        }],
        'body1': ['12px', {
          lineHeight: '15px',
          letterSpacing: '-0.25px',
        }],
        'body2': ['11px', {
          lineHeight: '18px',
          letterSpacing: '-0.23px',
        }],
      },
      colors: {
        'indigo': '#7C5DFA',
        'indigo-faded': '#9277FF',
        'indigo-dark': '#252945',
        'indigo-darker': '#1E2139',
        'grayish': '#DFE3FA',
        'grayish-slick': '#888EB0',
        'grayish-sky': '#7E88C3',
        'grayish-dark': '#0C0E16',
        'redish': '#EC5757',
        'redish-faded': '#FF9797',
        'green': '#33D69F',
        'green-faded': '#33D69F57',
        'yellow': '#FF8F00',
        'yellow-faded': '#FF8F0057',
        'light': '#F8F8FB',
        'dark': '#141625',
        'divider': '#494E6E',
      },
      container: {
        screens: {
          '2xl': "1280px",
        }
      },
      zIndex: {
        '5000': 5000,
        '9999': 9999
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
