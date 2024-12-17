/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    extend: {
      fontFamily:{
        archivo: ["archivo", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '4rem',
        }
      },
      colors: {
        'red-orange': {
          500: 'color-mix(in srgb, theme("colors.red.500) 50%, theme("colors.orange.500") 50%)'
        }
      },
    },
  },
  plugins: [],
}