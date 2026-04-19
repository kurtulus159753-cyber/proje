export function CampaignsBanner() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="campaigns-heading"
    >
      <div className="relative overflow-hidden rounded-4xl border border-sand/40 bg-gradient-to-br from-[#EEF4F0] via-[#F5EBE3] to-[#EDE9F5] px-6 py-20 text-center shadow-soft sm:px-12 sm:py-24 md:px-16 md:py-28">
        <div
          className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-white/50 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#FDFBF7]/80 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-32 w-[120%] -translate-x-1/2 bg-gradient-to-b from-white/40 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone sm:text-sm">
            Nisan kampanyası
          </p>
          <h2
            id="campaigns-heading"
            className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl"
          >
            İkinci üründe %20 indirim
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-stone sm:text-lg md:text-xl">
            20 Nisan — 5 Mayıs tarihleri arasında seçili mum ve oda kokusu ürünlerinde geçerli.
            Sepette otomatik uygulanır.
          </p>
          <span className="inline-flex items-center rounded-full border border-ink/10 bg-[#FDFBF7]/90 px-6 py-2.5 text-sm font-semibold tracking-wide text-ink shadow-sm">
            Kod: GLOREABAHAR
          </span>
        </div>
      </div>
    </section>
  );
}
