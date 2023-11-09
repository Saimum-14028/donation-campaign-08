/** @type {import('tailwindcss').Config} */
/* eslint-disable no-undef */

export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

