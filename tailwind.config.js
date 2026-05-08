export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#26191b',
        mist: '#f7f1ec',
        brass: '#c0913d',
        teal: '#a32024',
        rosewood: '#64171b',
        ivory: '#fffaf4'
      },
      fontFamily: {
        sans: [
          'Noto Sans TC',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ]
      },
      boxShadow: {
        soft: '0 16px 42px rgba(100, 23, 27, 0.16)'
      }
    }
  },
  plugins: []
}
