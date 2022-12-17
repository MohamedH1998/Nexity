/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "pale-grey": "#FBFDFF",
        "heather-field": "#616165",
        grey: "#8F9094",
        "grim-reaper": "#0B103A",
        "light-grim-reaper": "#182072",
        "lynx-white": "#F6F9F8",
        "grams-hair": "#F4F6F8",
        "golden-chalice": "#E9C46A",
        "light-golden-chalice": "rgba(233, 196, 106, 0.5)",
        "azure-tide": "#2A9D8F",
        "light-azure-tide": "rgba(42, 157, 143, 0.5)",
        "lighter-azure-tide": "rgba(42, 157, 143, 0.4)",
        bloodletter: "#E76F51",
        "light-bloodletter": "rgba(231, 111, 81, 0.5)",
        "french-lilac-blue": "#ADB8E3",
        "light-french-lilac-blue": "rgba(173, 184, 227, 0.5)"
      },
      fontFamily: {
        montserrat: "Montserrat"
      },
      boxShadow: {
        x: "0px 2px 2px rgba(0, 0, 0, 0.1)"
      },
      screens: {
        "lg-laptop": "1073px",
        nav: "1121px"
      }
    }
  },
  safeList: [
    "p-8",
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/
    },
    {
      pattern: /flex-.*/
    },
    {
      pattern: /(bottom|right|top|left)-[0-9]+/
    },
    {
      pattern: /(w|h)-[0-9]+/
    }
  ],
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
