/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        65: "65deg",
      },
      backgroundImage: {
        'me': "url('/src/assets/me.jpeg')",
      }
    },
  },
  plugins: [require("daisyui")],
};

