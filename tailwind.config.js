/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        17: "80deg",
      },
    },
  },
  plugins: [require("daisyui")],
};

