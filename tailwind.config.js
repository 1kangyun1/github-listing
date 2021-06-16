module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        black: '2px solid #808080',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
