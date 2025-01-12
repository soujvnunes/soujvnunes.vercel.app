export interface IconClasses {
  size: "sm" | "md";
}

export default function getIconClasses({ size }: IconClasses) {
  return [
    "inline-flex fill-current align-middle",
    {
      sm: "h-md w-md",
      md: "h-lg w-lg",
    }[size],
  ];
}
