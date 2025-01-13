import themizer from "themizer";

const theme = themizer(
  (tokens) => ({
    colors: {
      primary: {
        base: tokens.palette.amber[500],
        accent: [
          { dark: tokens.palette.amber[400] },
          tokens.palette.amber[600],
        ],
      },
      secondary: {
        base: tokens.palette.indigo[500],
        accent: [
          { dark: tokens.palette.indigo[400] },
          tokens.palette.indigo[600],
        ],
      },
      background: [
        { dark: tokens.palette.amber[950] },
        tokens.palette.amber[50],
      ],
      foreground: [
        { dark: tokens.palette.amber[50] },
        tokens.palette.amber[950],
      ],
      error: [{ dark: tokens.palette.red[400] }, tokens.palette.red[600]],
      success: [{ dark: tokens.palette.green[400] }, tokens.palette.green[600]],
      warning: [
        { dark: tokens.palette.yellow[400] },
        tokens.palette.yellow[600],
      ],
    },
    typography: {
      xs: tokens.units[12],
      sm: tokens.units[16],
      md: [{ desktop: tokens.units[24] }, tokens.units[16]],
      lg: tokens.units[24],
      xl: [{ desktop: tokens.units[40] }, tokens.units[24]],
      x2l: [{ desktop: tokens.units[64] }, tokens.units[40]],
    },
    sizing: {
      x2s: tokens.units[16],
      xs: tokens.units[24],
      sm: tokens.units[32],
      md: tokens.units[40],
      lg: tokens.units[64],
      xl: tokens.units[104],
      x2l: tokens.units[168],
    },
    spacing: {
      xs: tokens.units[4],
      sm: tokens.units[8],
      md: tokens.units[16],
      lg: tokens.units[24],
      xl: tokens.units[40],
      x2l: tokens.units[64],
    },
    radius: {
      xs: tokens.units[2],
      sm: tokens.units[4],
      md: tokens.units[8],
      lg: tokens.units[16],
    },
  }),
  {
    prefixAtoms: "jv",
    medias: {
      desktop: "@media (min-width: 1024px)",
      dark: "@media (prefers-color-scheme: dark)",
    },
    tokens: {
      font: {
        weights: { regular: "400", semibold: "600", bold: "800" },
        families: { sans: "sofia-pro" },
      },
      alphas: {
        primary: "1",
        secondary: "0.6",
        tertiary: "0.4",
        quartary: "0.2",
        quintary: "0.1",
        sextary: "0",
      },
      units: {
        2: "0.125rem",
        4: "0.25rem",
        8: "0.5rem",
        12: "0.75rem",
        16: "1rem",
        24: "1.5rem",
        32: "2rem",
        40: "2.5rem",
        64: "4rem",
        104: "6.5rem",
        168: "10.5rem",
      },
      palette: {
        zinc: {
          200: "228 228 231", // #e4e4e7
          800: "39 39 42", // #27272A
        },
        slate: {
          50: "248 250 252", // #f8fafc
          950: "2 6 23", // #020617
        },
        sky: {
          300: "118 193 228", // #76C1E4
          600: "55 130 205", // #3782cd
          700: "25 118 210", // #1976D2
        },
        blue: {
          600: "46 118 255", // #2e76ff
          800: "66 80 228", // #4250E4
        },
        amber: {
          50: "255 251 244", // #fffbf4
          400: "251 191 36", // #fbbf24
          500: "245 158 11", // #f59e0b
          600: "217 119 6", // #d97706
          900: "31 20 2", // #1f1402
          950: "16 10 1", // #100a01
        },
        indigo: {
          400: "129 140 248", // #818cf8
          500: "99 102 241", // #6366f1
          600: "87 81 252", // #5751FC
          700: "79 70 229", // #4f46e5
        },
        fuchsia: {
          400: "255 151 255", // #FF97FF
        },
        rose: {
          500: "242 73 107", // #F2496B
        },
        cyan: {
          300: "128 222 234", // #80DEEA
          500: "0 172 193", // #00ACC1
        },
        violet: {
          600: "124 77 255", // #7C4DFF
        },
        pink: {
          500: "255 71 133", // #FF4785
        },
        green: {
          400: "74 222 128", // #4ADE80
          600: "22 163 74", // #16A34A
        },
        yellow: {
          400: "250 204 21", // #FACC15
          600: "202 138 4", // #CA8A04
        },
        red: {
          400: "239 68 68", // #EF4444
          600: "220 38 38", // #DC2626
        },
      },
    } as const,
  },
);

export default theme;
