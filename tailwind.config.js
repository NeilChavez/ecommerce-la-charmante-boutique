/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fill,minmax(10rem, 1fr))'
      },
      aspectRatio: {
        '16/9': '56.25%' // 16/9 = 0.5625
      }
    }
  },
  plugins: []
}
