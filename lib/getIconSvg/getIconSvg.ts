export type Svgs =
  | "ArrowOutward"
  | "Behance"
  | "BeproNetwork"
  | "Cross"
  | "GitHub"
  | "Language"
  | "LinkedIn"
  | "Medium"
  | "Pen"
  | "Polkamarkets"
  | "Ufal"
  | "Vitalk";
type ImportSvg = typeof import("*.svg");

export default async function getIconSvg(svg: Svgs) {
  const Svg = (await import(`public/icons/${svg}.svg`)) as ImportSvg;

  return Svg.ReactComponent;
}
