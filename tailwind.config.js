module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'p1': "url('images/p1.png')",
        'p3': "url('images/p3.png')",
        'p4': "url('images/p4.png')",
        'p5': "url('images/p5.png')",
        'p6': "url('images/p6.png')",
        'p7': "url('images/p7.png')",
        'p8': "url('images/p8.png')",
        'p9': "url('images/p9.png')",
        'p10': "url('images/p10.png')",
        'p11': "url('images/p11.png')",
        'p12': "url('images/p12.png')",
        'p13': "url('images/p13.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
