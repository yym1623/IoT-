/** @type {import('tailwindcss').Config} */

import primeui from "tailwindcss-primeui"
import defaultTheme from "tailwindcss/defaultTheme"
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['selector', '[class="p-dark"]'],
  plugins: [primeui],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      }
    }
  }
};
