/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        header: "5rem 3fr 1fr 1fr 3rem",
      },
    },
  },
  plugins: [],
};
