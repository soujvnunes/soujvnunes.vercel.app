const defaultTheme = require("tailwindcss/defaultTheme");
const sizing = {
  x2s: 16,
  xs: 24,
  sm: 32,
  md: 40,
  lg: 64,
  xl: 104,
  x2l: 168,
};
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  x2l: 64,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx,svg}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sofia-pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        zinc: {
          200: "#e4e4e7",
        },
        slate: {
          50: "#f8fafc",
        },
        sky: {
          600: "#3782cd",
        },
        blue: {
          600: "#2e76ff",
        },
        amber: {
          50: "#fffbf4",
          900: "#1f1402",
          950: "#100a01",
        },
      },
      height: sizing,
      width: sizing,
      minWidth: sizing,
      padding: spacing,
      margin: spacing,
    },
  },
  plugins: [],
};
