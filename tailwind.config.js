/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'awa-primary': '#1a1a1a',
        'awa-secondary': '#333333',
        'awa-accent': '#c8a27c',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
      },
      height: {
        'screen-90': '90vh',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'scroll-down': 'scrollDown 1.5s ease-in-out infinite',
        'countdown': 'countdown 6s linear forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollDown: {
          '0%': { top: '-50%' },
          '100%': { top: '100%' },
        },
        countdown: {
          '0%': { strokeDashoffset: '339.292' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};