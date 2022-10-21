/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        "sm": "480px" // adjusted in video to be smaller, default: 640px
      },
      fontFamily: {
        // register gfonts
        vollkorn: ['Vollkorn'],
        karla: ['Karla'],
        // overwrite settings 
        'sans': ['Karla', 'Arial', 'sans-serif'],
        // overwrite typography plugin settings
        'headings': ['Vollkorn', 'serif']
      },

    }
  },
  plugins: [require('@tailwindcss/typography')]
};