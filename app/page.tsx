export default async function Page() {
  const { getContributions } = await import("actions/getContributions");
  const { default: buildContributions } = await import(
    "lib/buildContributions"
  );
  const rawContributions = await getContributions();
  const contributions = buildContributions(rawContributions);

  return (
    <section>
      {contributions.map((contribution) => (
        <article key={contribution.id}>
          <h3>{contribution.name}</h3>
        </article>
      ))}
    </section>
  );
}
