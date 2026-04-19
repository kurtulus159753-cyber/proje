import Link from "next/link";

const columns = [
  {
    title: "Keşfet",
    links: [
      { label: "Yeni gelenler", href: "#" },
      { label: "Çok satanlar", href: "#one-cikanlar" },
      { label: "Hediye setleri", href: "#" },
    ],
  },
  {
    title: "Yardım",
    links: [
      { label: "İletişim (demo)", href: "#" },
      { label: "Sık sorulanlar", href: "/#sik-sorulanlar" },
      { label: "Kargo & iade", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-4 border-t border-sand/50 bg-cream/40">
      <div className="mx-auto max-w-6xl rounded-t-4xl border border-sand/40 bg-parchment/90 px-6 py-14 shadow-soft sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-tight text-ink">GLOREA</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone">
              Huzurlu ışıklar ve seçkin kokular için vitrin düzeni. Bu sayfa ödev ve sunum amaçlıdır;
              ödeme veya sipariş işlemi içermez.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink/80 underline-offset-4 hover:text-ink hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1 md:hidden lg:block" />
        </div>
        <div className="mt-12 border-t border-sand/50 pt-8 text-center text-xs text-stone sm:text-left">
          <p>© {new Date().getFullYear()} GLOREA — Demo vitrin.</p>
        </div>
      </div>
    </footer>
  );
}
