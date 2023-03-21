/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        'noto-serif':['"Noto Serif TC"', 'serif'],
      },
      maincolor:"#E6785F",
      secondcolor:"#885f58"
    },
    
  },
  plugins: [],
}
