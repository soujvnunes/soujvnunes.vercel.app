"use client";

interface ErrorProps {
  reset(): void;
  error: Error & { digest?: string };
}

export default function AppError({ error, reset }: ErrorProps) {
  return (
    <section className="m-auto text-center">
      <h2 className="mb-md text-title">{error.message}</h2>
      <button onClick={reset}>Try again</button>
    </section>
  );
}
