"use client";

import { twText } from "lib/ui";
import { twMerge } from "tailwind-merge";

interface ErrorProps {
  reset(): void;
  error: Error & {
    digest?: string;
  };
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <section className="m-auto text-center">
      <h2 className={twMerge(twText.title, "mb-md")}>{error.message}</h2>
      <button onClick={reset}>Try again</button>
    </section>
  );
}
