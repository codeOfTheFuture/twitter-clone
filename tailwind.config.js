/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitter: "#00ADED",
        twitterDark: "#00A8E6",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
