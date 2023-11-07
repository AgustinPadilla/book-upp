/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#113946',
        darkbeige: '#BCA37F',
        beige: '#EAD7BB',
        lightbeige: '#FAF0E4'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
