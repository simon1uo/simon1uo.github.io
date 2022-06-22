const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.stone,
        lightBg: colors.slate
      },
      boxShadow: {
        '3xl': '0 4px 10px rgba(0,2,4,.06),0 0 1px rgba(0,2,4,.11)'
      }
    }
  }
}
