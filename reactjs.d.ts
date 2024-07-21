import * as React from "react";

declare module "react" {
  export type ReactComponentProps = React.SVGProps<SVGSVGElement> & {
    title?: string;
  };
}
