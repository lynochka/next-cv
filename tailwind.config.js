/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bruce: "url('/img/bruce.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
