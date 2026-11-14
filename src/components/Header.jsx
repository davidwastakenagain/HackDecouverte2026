// Shared header (owned by Member 1). Used only by App.jsx.
// Props:
//   title   (string)
//   onBack  (optional function — shows a round back button)
//   brand   (optional boolean — shows the logo mark and a greeting)

export default function Header({ title, onBack, brand }) {
  return (
    <header className="sticky top-0 z-10 flex items-center gap-3 bg-blush-50/90 px-4 pt-5 pb-3 backdrop-blur">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-ink shadow-sm"
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
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
      )}

      {brand && (
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 21c-4-2.5-8-6-8-10.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 8 2.5C20 15 16 18.5 12 21z" />
          </svg>
        </span>
      )}

      <div className="min-w-0">
        {brand && <p className="text-xs text-ink-soft">Hello, mama</p>}
        <h1 className="truncate text-xl font-bold text-ink">{title}</h1>
      </div>
    </header>
  );
}
