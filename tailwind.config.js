const defaultTheme = require("tailwindcss/defaultTheme");
const dimension = {
  2: "0.125rem",
  4: "0.25rem",
  8: "0.5rem",
  16: "1rem",
  24: "1.5rem",
  32: "2rem",
  40: "2.5rem",
  64: "4rem",
  104: "6.5rem",
  168: "10.5rem",
};
const sizing = {
  x2s: dimension[16],
  xs: dimension[24],
  sm: dimension[32],
  md: dimension[40],
  lg: dimension[16],
  xl: dimension[104],
  x2l: dimension[168],
};
const spacing = {
  xs: dimension[4],
  sm: dimension[8],
  md: dimension[16],
  lg: dimension[24],
  xl: dimension[40],
  x2l: dimension[16],
};
const radius = {
  xs: dimension[2],
  sm: dimension[4],
  md: dimension[8],
  lg: dimension[16],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{tsx,mdx}", "./components/**/*.{tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sofia-pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        zinc: {
          200: "#e4e4e7",
          800: "#27272A",
        },
        slate: {
          50: "#f8fafc",
          950: "#020617",
        },
        sky: {
          300: "#76C1E4",
          600: "#3782cd",
          700: "#1976D2",
        },
        blue: {
          600: "#2e76ff",
          800: "#4250E4",
        },
        amber: {
          50: "#fffbf4",
          900: "#1f1402",
          950: "#100a01",
        },
        indigo: {
          700: "#5751FC",
        },
        fuchsia: {
          400: "#FF97FF",
        },
        rose: {
          500: "#F2496B",
        },
        cyan: {
          300: "#80DEEA",
          500: "#00ACC1",
        },
        violet: {
          600: "#7C4DFF",
        },
        pink: {
          500: "#FF4785",
        },
      },
      height: sizing,
      width: sizing,
      minWidth: sizing,
      padding: spacing,
      margin: spacing,
      borderRadius: radius,
      space: spacing,
    },
  },
  plugins: [],
};
