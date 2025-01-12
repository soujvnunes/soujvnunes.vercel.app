import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss";
import { type CSSRuleObject } from "tailwindcss/types/config";
import theme from "./src/lib/theme";
import rgb from "./src/lib/rgb";

const config = {
  content: ["./src/**/*.{tsx,ts,mdx}"],
  theme: {
    spacing: theme.aliases.spacing,
    borderRadius: theme.aliases.radius,
    opacity: theme.tokens.alphas,
    fontFamily: {
      sans: [
        theme.tokens.font.families.sans,
        "-apple-system-font",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: rgb(theme.aliases.colors.primary.base),
        accent: rgb(theme.aliases.colors.primary.accent),
      },
      secondary: {
        DEFAULT: rgb(theme.aliases.colors.secondary.base),
        accent: rgb(theme.aliases.colors.secondary.accent),
      },
      background: rgb(theme.aliases.colors.background),
      error: rgb(theme.aliases.colors.error),
      success: rgb(theme.aliases.colors.success),
      foreground: rgb(theme.aliases.colors.foreground),
      warning: rgb(theme.aliases.colors.warning),
    },
    fontSize: {
      headline: [
        theme.aliases.typography.x2l,
        {
          fontWeight: theme.tokens.font.weights.bold,
          lineHeight: theme.aliases.typography.x2l,
        },
      ],
      title: [
        theme.aliases.typography.xl,
        {
          fontWeight: theme.tokens.font.weights.bold,
          lineHeight: theme.aliases.typography.xl,
        },
      ],
      subtitle: [
        theme.aliases.typography.md,
        { lineHeight: theme.aliases.typography.md },
      ],
      heading: [
        theme.aliases.typography.sm,
        {
          fontWeight: theme.tokens.font.weights.bold,
          lineHeight: theme.aliases.typography.lg,
        },
      ],
      body: [
        theme.aliases.typography.sm,
        {
          lineHeight: theme.aliases.typography.lg,
        },
      ],
      caption: [
        theme.aliases.typography.xs,
        {
          fontWeight: theme.tokens.font.weights.semibold,
          lineHeight: theme.aliases.typography.sm,
          letterSpacing: theme.tokens.units[2],
        },
      ],
      footnote: [
        theme.aliases.typography.xs,
        { lineHeight: theme.aliases.typography.sm },
      ],
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      return addBase(theme.rules.jss as unknown as CSSRuleObject);
    }),
  ],
} satisfies Config;

export default config;
