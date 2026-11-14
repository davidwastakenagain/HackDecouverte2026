// Shared bottom navigation (owned by Member 1). Used only by App.jsx.
// A floating dark pill; the active tab is highlighted and shows its label.
// Props: current ("home" or "saved"), onNavigate(screen).

const TABS = [
  {
    screen: "home",
    label: "Cravings",
    // house icon
    path: "M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z",
  },
  {
    screen: "saved",
    label: "Saved",
    // bookmark icon
    path: "M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z",
  },
];

export default function BottomNavigation({ current, onNavigate }) {
  return (
    <nav className="fixed bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1 rounded-full bg-ink p-1.5 shadow-lg">
      {TABS.map((tab) => {
        const isActive = tab.screen === current;
        return (
          <button
            key={tab.screen}
            type="button"
            onClick={() => onNavigate(tab.screen)}
            aria-label={tab.label}
            aria-current={isActive ? "page" : undefined}
            className={
              "flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors " +
              (isActive ? "bg-sky-soft text-ink" : "text-white/70")
            }
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d={tab.path} />
            </svg>
            {isActive && <span>{tab.label}</span>}
          </button>
        );
      })}
    </nav>
  );
}
