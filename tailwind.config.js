/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: [
          ' proxima-nova',
          'sans-serif'
        ],
        serif: [
          'Crimson Pro',
          'serif'
        ],
        display: [
          'proxima-nova',
          'sans-serif'
        ],
        body: [
          ' proxima-nova',
          'sans-serif'
        ]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
