// Shared tab bar for phones (owned by Member 1). Used only by App.jsx.
// Fixed to the bottom of the screen and hidden on wider screens, where the
// same links are in the Header.
// Props:
//   items       [{ screen, label }] — the tabs
//   current     the screen name of the highlighted tab
//   onNavigate  (screen) => void

// One line-drawn icon per screen name.
const ICON_PATHS = {
  home: "M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z",
  saved: "M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z",
  about: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 7.5v.5",
};

export default function BottomNavigation({ items, current, onNavigate }) {
  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-20 flex border-t-2 border-line bg-surface pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      {items.map((item) => {
        const isActive = item.screen === current;
        return (
          <button
            key={item.screen}
            type="button"
            onClick={() => onNavigate(item.screen)}
            aria-current={isActive ? "page" : undefined}
            className={
              "flex min-h-16 flex-1 flex-col items-center justify-center gap-0.5 px-1 py-2 text-xs font-extrabold transition-colors " +
              (isActive ? "text-berry-700" : "text-ink-soft")
            }
          >
            {/* The active tab's icon sits in a pink pill. */}
            <span className={"rounded-full px-4 py-1 transition-colors " + (isActive ? "bg-berry-100" : "")}>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={ICON_PATHS[item.screen]} />
              </svg>
            </span>
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
