/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // sm: '144px',
      // md: '600px',
      // lg: '720px',
      // xl: '1366px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colors:{
        colors:"039855",
        secondary:"039855",
        bgcolor:"1D2939",
        mpracolo:"667085"

      }
    },
  },
  plugins: [],
}