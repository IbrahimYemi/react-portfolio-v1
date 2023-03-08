/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%' : { transform : 'translateX(0px)' },
          '10%' : { transform : 'translateY(10px, )',  },
          '100%': {transform : 'translateX(90vw)' },
        }
      },
      animation: {
        wiggle: 'wiggle 20s linear infinite',
        wiggle2: 'wiggle 30s ease-in-out infinite',
        wiggle3: 'wiggle 25s ease-out infinite',
      }
    }
  },
  plugins: [],
}
