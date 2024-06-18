export type Svgs = keyof typeof svgs;

export default async function getIconSvg(svg: Svgs) {
  const Svg = await svgs[svg]();

  return Svg.ReactComponent;
}

// Pairing each callable splitted SVG with its key to turn the usage predictable
const svgs = {
  ArrowOutward: () => import("./svgs/ArrowOutward.svg"),
  Behance: () => import("./svgs/Behance.svg"),
  BeproNetwork: () => import("./svgs/BeproNetwork.svg"),
  Cross: () => import("./svgs/Cross.svg"),
  GitHub: () => import("./svgs/GitHub.svg"),
  Language: () => import("./svgs/Language.svg"),
  LinkedIn: () => import("./svgs/LinkedIn.svg"),
  Medium: () => import("./svgs/Medium.svg"),
  Pen: () => import("./svgs/Pen.svg"),
  Polkamarkets: () => import("./svgs/Polkamarkets.svg"),
  Ufal: () => import("./svgs/Ufal.svg"),
  Vitalk: () => import("./svgs/Vitalk.svg"),
};
