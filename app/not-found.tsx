import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-parchment px-6 text-center">
      <p className="font-display text-4xl font-semibold text-ink">404</p>
      <p className="mt-2 text-stone">Sayfa bulunamadı.</p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-parchment transition hover:bg-stone"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
}
