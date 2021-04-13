module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Roboto'],
      serif: ['Montserrat'],
      mono: ['Montserrat'],
      display: ['Montserrat'],
      body: ['Montserrat'],
      Jost: ['Jost', '"Open Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue-550': '#0066CC',
        'blue-950': '#0E258D',
        'blue-trans': 'rgba(0, 102, 204, 0.04)',
      },
      spacing: {
        '17rem': '17rem',
        '30rem': '30rem',
        '37rem': '37rem',
        '64rem': '64rem',
        '70rem': '70rem',
        '7/100': '7%',
        '38/100': '38%',
        '64/100': '64%',
        '-32/100': '-32%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
};
