import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d'
      }
    }
  },

  corePlugins: {
    container: false
  },
  /**
   * Custom class container base tailwindcss
   * @param addComponents Add component styles
   * @param theme Tailwind theme
   */
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
