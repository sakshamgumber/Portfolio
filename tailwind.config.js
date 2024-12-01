/** @type {import('tailwindcss').Config} */
import tailwidnscrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mono:['monolithic']
    },
    html: {
      scrollBehavior: 'smooth',
    },
  },
  plugins: [tailwidnscrollbar],
}

