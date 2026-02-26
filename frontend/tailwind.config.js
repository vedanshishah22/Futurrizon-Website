/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002379",   // deep navy — text, headings, dark bg
        navy: "#002379",   // alias
        orange: "#FF5F00",   // deep orange — CTA, primary actions
        peach: "#FF9F66",   // light orange — accents, highlights
        cream: "#FFFAE6",   // cream — main background
        dark: "#002379",   // dark alias (navy)
        light: "#FFFAE6",   // light alias (cream)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #002379, #003299)',
        'gradient-orange': 'linear-gradient(to right, #FF5F00, #FF9F66)',
      },
    },
  },
  plugins: [],
}
