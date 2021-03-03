const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '375px',
      ...screens
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
        'subtitle': ['24px', {
          lineHeight: '32px',
          letterSpacing: '-0.5px',
        }],
        'body1': ['12px', {
          lineHeight: '15px',
          letterSpacing: '-0.25px',
        }],
        'body2': ['11px', {
          lineHeight: '18px',
          letterSpacing: '-0.23px',
        }],
        'body3': ['10px', {
          lineHeight: '15px',
          letterSpacing: '-0.21px',
        }],
      },
      colors: {
        'indigo': '#7C5DFA',
        'indigo-faded': '#9277FF',
        'indigo-dark': '#252945',
        'indigo-darker': '#1E2139',
        'grayish': '#DFE3FA',
        'grayish-faded': '#DFE3FA10',
        'grayish-light': '#F9FAFE',
        'grayish-slick': '#888EB0',
        'grayish-sky': '#7E88C3',
        'grayish-dark': '#0C0E16',
        'redish': '#EC5757',
        'redish-faded': '#FF9797',
        'green': '#33D69F',
        'green-faded': '#33D69F10',
        'yellow': '#FF8F00',
        'yellow-faded': '#FF8F0010',
        'dim': '#373B53',
        'dim-faded': '#373B5310',
        'light': '#F8F8FB',
        'dark': '#141625',
        'divider': '#494E6E',
        'light-01': '#00000001',
        'light-10': '#00000010',
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
      spacing: {
        '10px': '10px',
        '18': '4.5rem'
      },
      gridTemplateColumns: {
        'list-big': '80px 120px 1fr 140px 105px 15px',
        'list-banner': 'auto 1fr',
      },
      width: {
        '160': '40rem'
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
