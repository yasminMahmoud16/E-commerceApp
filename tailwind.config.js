/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./ node_modules / flowbite/**/ *.js"
    
  ],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: '.,4rem',
        sm: '2rem',
        lg: '4rem',
        xl: '2.5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      keyframes: {
        bounceRotate: {
          '0%': { transform: 'translateY(0%) rotate(-20deg)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(30%) rotate(-20deg)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '100%': { transform: 'translateY(0%) rotate(-20deg)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      animation: {
        bounceRotate: 'bounceRotate 3s infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

