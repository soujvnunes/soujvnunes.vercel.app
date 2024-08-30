export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      <div className="h-full bg-gradient-to-r from-indigo-500/40 to-amber-500/40 dark:from-indigo-500/20 dark:to-amber-500/20">
        <div className="h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-50 lg:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-amber-950">
          <div className="h-full bg-[url(/images/rapport.png)] from-black/5 to-black/0 bg-repeat [mask-image:radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:bg-[url(/images/rapportDark.png)]" />
        </div>
      </div>
    </div>
  );
}
