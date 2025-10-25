/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,scss}', './src/**/*.component.html', './src/**/*.component.ts'],
  theme: {
    extend: {
      // Add your custom theme extensions here
      colors: {
        // Custom colors can be added here
      },
      fontFamily: {
        // Custom fonts can be added here
      },
      spacing: {
        // Custom spacing can be added here
      },
      screens: {
        // Custom breakpoints can be added here
        xs: '475px',
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here, for example:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
