"use client";

import { type ErrorProps } from "next";

export default function Error({ error, reset }: ErrorProps) {
  return (
    <section className="m-auto text-center">
      <h2 className="TypographyTitle mb-md">{error.message}</h2>
      <button onClick={reset}>Try again</button>
    </section>
  );
}
