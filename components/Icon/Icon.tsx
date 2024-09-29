import getSvg, { type Svgs } from "actions/getSvg";
import { twMerge } from "tailwind-merge";

interface IconProps extends React.ReactComponentProps {
  size?: "sm" | "md";
  name: Svgs;
}

export default async function Icon({
  name,
  size = "md",
  title,
  children,
  ...props
}: IconProps) {
  const Svg = await getSvg(name);

  if (!Svg) return;

  return (
    <Svg
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : "true"}
      {...props}
    />
  );
}
