export default function AppBackground() {
  return (
    <div aria-hidden className="inset-0 fixed -z-10">
      <div className="to-amber-500/40 dark:from-indigo-500/20 dark:to-amber-500/20 h-full bg-gradient-to-r from-secondary/tertiary">
        <div className="h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background lg:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]">
          <div className="from-black/5 to-black/0 h-full bg-[url(/images/rapport.png)] bg-repeat [mask-image:radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:bg-[url(/images/rapportDark.png)]" />
        </div>
      </div>
    </div>
  );
}
