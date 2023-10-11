/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono , monospace",
    },
    extend: {},
  },
  // eslint-disable-next-line
  plugins: [require("daisyui")],
};
