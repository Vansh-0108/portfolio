/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'home-image': "url('./src/assets/designer-work-office.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'main-color': '#d3ad7f',
        'my-black' : '#13131a',
        'my-bg' : '#010103',
      }
    },
  },
  plugins: [],
}
