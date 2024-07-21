import getIconSvg, { type Svgs } from "lib/getIconSvg";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

interface IconProps extends React.ReactComponentProps {
  size?: "sm" | "md";
  name: Svgs;
}

export default memo(async function Icon({
  name,
  className,
  size = "md",
  title,
  children,
  ...props
}: IconProps) {
  const Svg = await getIconSvg(name);

  return (
    <Svg
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : "true"}
      className={twMerge("Icon", size === "md" && "IconMd", className)}
      {...props}
    />
  );
});
