// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
     'node_modules/flowbite-react/lib/esm/**/*.{js,jsx,ts,tsx}',
     flowbite.content(),
  ],
  theme: {
    extend: {fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
    // eslint-disable-next-line no-undef
    require('daisyui'),
    flowbite.plugin(),
]
}

