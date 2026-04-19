export function Slogan() {
  return (
    <div className="relative border-b border-sand/25 bg-gradient-to-b from-[#FDFBF7] via-parchment/95 to-[#FAF9F6]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/50 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-3xl px-6 py-10 text-center sm:px-8 sm:py-12 md:py-14">
        <p className="mx-auto max-w-2xl font-display text-[1.35rem] font-normal leading-[1.45] tracking-tight text-balance text-ink/90 sm:text-2xl md:text-[1.75rem] md:leading-snug lg:text-[1.95rem]">
          Ruhunuzu yansıtacak{" "}
          <span className="font-medium italic text-ink">huzur dolu</span> koku ve ışıklar.
        </p>
        <div
          className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-10"
          aria-hidden
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-sand/70 sm:w-14" />
          <span className="h-1 w-1 rounded-full bg-clay/70" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-sand/70 sm:w-14" />
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sand/40 to-transparent"
        aria-hidden
      />
    </div>
  );
}
