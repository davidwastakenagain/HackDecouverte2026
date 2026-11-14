// Shared bottom navigation (owned by Member 1). Used only by App.jsx.
// Props: current ("home" or "saved"), onNavigate(screen).

const TABS = [
  { screen: "home", label: "Cravings", icon: "🥗" },
  { screen: "saved", label: "Saved", icon: "🔖" },
];

export default function BottomNavigation({ current, onNavigate }) {
  return (
    <nav className="fixed bottom-0 left-1/2 flex w-full max-w-md -translate-x-1/2 border-t border-sage-100 bg-cream">
      {TABS.map((tab) => {
        const isActive = tab.screen === current;
        return (
          <button
            key={tab.screen}
            type="button"
            onClick={() => onNavigate(tab.screen)}
            aria-current={isActive ? "page" : undefined}
            className={
              "flex flex-1 flex-col items-center gap-0.5 py-2 text-xs " +
              (isActive ? "font-semibold text-sage-700" : "text-ink-soft")
            }
          >
            <span className="text-xl" aria-hidden="true">
              {tab.icon}
            </span>
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
