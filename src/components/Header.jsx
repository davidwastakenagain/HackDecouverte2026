// Shared site header (owned by Member 1). Used only by App.jsx.
// Shows the site name on every screen. On wider screens it also shows the
// navigation links; on phones those are in BottomNavigation instead.
// Props:
//   items       [{ screen, label }] — the navigation links
//   current     the screen name of the highlighted link
//   onNavigate  (screen) => void

export default function Header({ items, current, onNavigate }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="rounded font-display text-xl font-semibold tracking-tight text-ink"
        >
          Crave<span className="text-berry-600">Better</span>
        </button>

        <nav aria-label="Main" className="hidden gap-1 md:flex">
          {items.map((item) => {
            const isActive = item.screen === current;
            return (
              <button
                key={item.screen}
                type="button"
                onClick={() => onNavigate(item.screen)}
                aria-current={isActive ? "page" : undefined}
                className={
                  "rounded-md px-3 py-2 text-[0.95rem] font-semibold transition-colors " +
                  (isActive ? "bg-berry-50 text-berry-700" : "text-ink-soft hover:text-ink")
                }
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
