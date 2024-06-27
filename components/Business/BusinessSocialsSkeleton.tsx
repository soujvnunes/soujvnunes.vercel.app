export default function BusinessSocialsSkeleton() {
  return (
    <aside className="space-x-sm flex animate-pulse" aria-hidden>
      {[0, 1, 2, 3].map((bone) => (
        <div className="Button ButtonMd bg-white/40" key={bone} />
      ))}
    </aside>
  );
}
