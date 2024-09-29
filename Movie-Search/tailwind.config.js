/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        10: '10',
      },
      fontSize: {
        sm: '16px',
        base: '18px',
        lg: '20px',
        xl: '22px',
        '2xl': '24px',
        '3xl': '32px',
      }
    },
  },
  plugins: [],
}

