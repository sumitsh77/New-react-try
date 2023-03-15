/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans'],
      serif: ['DM Serif Display'],
      mono: ['Fira Mono'],
      display: ['Yeseva One'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
