/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main:["Merriweather", "serif"],
        regular:["Edu AU VIC WA NT Pre", "cursive"]
      },
      backgroundImage: {
        'google': "url('./src/assets/google.png')",
         'google2': "url('./src/assets/google2.png')"
      },
      },
  },
  plugins: [],
}

