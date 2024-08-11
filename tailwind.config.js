/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "rgb(10, 45, 79)",
        "foreground-dark": "rgb(33, 37, 41)",
        "foreground-light": "rgb(255, 255, 255)",
        "accent-green": "rgb(102, 187, 106)",
      },
    },
  },
  plugins: [],
};
