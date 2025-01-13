export default function notFound() {
  return (
    <section className="text-center">
      <h1 className="mb-8 mb-md text-title font-semibold tracking-tighter text-error">
        Oops! Something went wrong
      </h1>
      <p className="mb-4 text-foreground text-opacity-secondary">
        Simulated error coming from DevTools.
      </p>
    </section>
  );
}
