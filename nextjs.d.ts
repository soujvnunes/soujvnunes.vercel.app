import * as Next from "next";

declare module "next" {
  export interface DigestError extends Error {
    digest?: string;
  }

  export interface ErrorProps {
    reset(): void;
    error: DigestError;
  }
}
