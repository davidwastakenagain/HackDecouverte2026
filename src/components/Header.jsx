// Shared header (owned by Member 1). Used only by App.jsx.
// Props: title (string), onBack (optional function — shows a back button).

export default function Header({ title, onBack }) {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b border-sage-100 bg-cream px-4">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full text-xl text-sage-700 hover:bg-sage-100"
        >
          ←
        </button>
      )}
      <h1 className="text-lg font-semibold text-sage-700">{title}</h1>
    </header>
  );
}
