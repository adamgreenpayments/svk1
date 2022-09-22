/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: ""
  },
  mode: 'jit',
  corePlugins: {
    preflight: false,
   }
}