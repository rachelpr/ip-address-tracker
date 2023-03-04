/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 59%)",
        "very-dark-gray": "hsl(0, 0%, 17%)",
      },
    },
  },
  plugins: [],
};
