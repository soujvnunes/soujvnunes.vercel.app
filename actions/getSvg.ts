export type Svgs =
  | "ArrowOutward"
  | "Behance"
  | "BeproNetwork"
  | "Cross"
  | "Document"
  | "GitHub"
  | "Language"
  | "LinkedIn"
  | "Medium"
  | "Pen"
  | "Polkamarkets"
  | "Ufal"
  | "Vitalk";
type Svg = typeof import("*.svg");

export default async function getSvg(svg: Svgs) {
  try {
    const Svg = (await import(`public/icons/${svg}.svg`)) as Svg;

    return Svg.ReactComponent;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
