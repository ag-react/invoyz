module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Spartan'],
      serif: ['sans-serif']
    },
    extend: {
      screens: {
        xs: '375px',
      },
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
        'green-faded': '#33D69F10',
        'yellow': '#FF8F00',
        'yellow-faded': '#FF8F0010',
        'dim': '#373B53',
        'dim-faded': '#373B5310',
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
      spacing: {
        '18': '4.5rem'
      },
      gridTemplateColumns: {
        'list-big': '80px 120px 1fr 100px 105px 15px',
        'list-banner': 'auto 1fr'
      }
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
