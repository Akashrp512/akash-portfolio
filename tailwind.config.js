/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(90deg, #213167 0%, #0F158 100%)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
      colors: {
        "foreground-dark": "rgb(43, 38, 117)",
        "foreground-light": "rgb(255, 255, 255)",
        "background-start": "rgb(0, 201, 255)",
        "background-end": "rgb(74, 0, 224)",
      },
    },
  },
  plugins: [],
};
