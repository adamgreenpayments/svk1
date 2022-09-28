/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#19233d",
        
"secondary": "#6b37f5",
        
"accent": "#33e2f1",
        
"neutral": "#ffd100",
        
"base-100": "#ebebeb",
        
"info": "#2f84ff",
        
"success": "#36D399",
        
"warning": "#ffd100",
        
"error": "#ff8692",
        },
      },
    ],
  }
}