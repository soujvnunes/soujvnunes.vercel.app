export default function BusinessSocialsSkeleton() {
  return (
    <aside className="flex animate-pulse space-x-2" aria-hidden>
      {[0, 1, 2, 3].map((bone) => (
        <div className="h-8 w-8 rounded-lg bg-white/40" key={bone} />
      ))}
    </aside>
  );
}
