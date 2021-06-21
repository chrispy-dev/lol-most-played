module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        backgroundColor: {
          'deep-purple': {
            '900': '#0A0B22',
            '700': '#16162E'
          }
        },
        borderColor: {
          'deep-purple': {
            '900': '#0A0B22',
            '700': '#16162E'
          }
        },
        minHeight: {
          'nav-screen': 'calc(100vh - 76px)'
        }
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}