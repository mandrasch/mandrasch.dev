/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    // overwrite and extend values
    extend: {
      screens: {
        "sm": "480px" // adjusted in video to be smaller, default: 640px
      },
      fontFamily: {
        // register gfonts
        vollkorn: ['Vollkorn', 'serif'],
        karla: ['Karla', 'sans-serif'],
        // overwrite settings 
        'sans': ['Karla', 'Arial', 'sans-serif'],
        // overwrite typography plugin settings
        'headings': ['Vollkorn', 'serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};