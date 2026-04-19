import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/mumlar", label: "Mumlar" },
  { href: "/oda-kokulari", label: "Oda Kokuları" },
  { href: "/#tum-urunler", label: "Tüm Ürünler" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-sand/40 bg-parchment/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden rounded-full border border-sand/70 bg-cream/70 px-2 py-1.5 shadow-soft md:flex"
          aria-label="Ana menü"
        >
          <ul className="flex items-center gap-1">
            {links.map((item) => (
              <li key={item.href + item.label}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink/85 transition-colors hover:bg-sand/45 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="text-ink transition-opacity hover:opacity-65 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/30"
          aria-label="Sepet"
        >
          <ShoppingBag className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.25} aria-hidden />
        </button>
      </div>

      <nav
        className="border-t border-sand/35 bg-cream/50 px-4 py-2 md:hidden"
        aria-label="Mobil menü"
      >
        <ul className="flex flex-wrap justify-center gap-2">
          {links.map((item) => (
            <li key={item.href + item.label + "m"}>
              <Link
                href={item.href}
                className="rounded-full bg-mist/90 px-3 py-1.5 text-xs font-medium text-ink/90"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
