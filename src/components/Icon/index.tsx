import { twMerge } from "tailwind-merge";
import getIconPaths, { type IconPaths } from "./getIconPaths";
import getIconClasses, { type IconClasses } from "./getIconClasses";

export type IconProps = React.ComponentProps<"svg"> & IconClasses & IconPaths;

export default function Icon({
  name,
  size = "md",
  className,
  ...props
}: IconProps) {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(...getIconClasses({ size }), className)}
      {...props}
    >
      {getIconPaths({ name }).map((path) => (
        <path key={path.d} {...path} />
      ))}
    </svg>
  );
}
