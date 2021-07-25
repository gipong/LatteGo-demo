module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'p1': "url('images/p1.png')",
        'p1m': "url('images/p1m.png')",
        'p3': "url('images/p3.png')",
        'p3m': "url('images/p3m.png')",
        'p4': "url('images/p4.png')",
        'p5m': "url('images/p5m.png')",
        'p5': "url('images/p5.png')",
        'p6': "url('images/p6.png')",
        'p6m': "url('images/p6m.png')",
        'p7': "url('images/p7.png')",
        'p7m': "url('images/p7m.png')",
        'p8': "url('images/p8.png')",
        'p9': "url('images/p9.png')",
        'p9m': "url('images/p9m.png')",
        'p10': "url('images/p10.png')",
        'p10m': "url('images/p10m.png')",
        'p11': "url('images/p11.png')",
        'p12': "url('images/p12.png')",
        'p12m': "url('images/p12m.png')",
        'p13': "url('images/p13.png')",
        'p13m': "url('images/p13m.png')",
      }
    },
    screens: {
      'md': {'min': '0px', 'max': '768px'},
      'lg': {'min': '769px'}
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
