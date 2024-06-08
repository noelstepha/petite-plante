import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        irish: "rgba(57, 116, 125)",
        darkIrish: '#323d44',
        overwhite: "rgba(255,255,255, 0.5)",
        "herb-50": "#f0fff4",
        "herb-100": "#e6f7e7",
        "herb-200": "#b4d2a5",
        "herb-400": "#51a641",
        "herb-500": "#7bbb6b",
        "herb-600": "#78af6c",
        "herb-700": "#9dd672",
        secondary: "#e8b648",
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '18/6': '18 / 6',
      },
    },
  },
  plugins: [],
}

