/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ubuntu: ['Ubuntu', 'sans-serif'],
        playfair: ['Playfair Display', 'sans-serif']
      },
      colors: {
        'opacity-blue': '#3461FF;',
      },
    },
  },
  plugins: [],
}
