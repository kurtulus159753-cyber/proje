"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/products";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const total = heroSlides.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4500);
    return () => window.clearInterval(id);
  }, [total]);

  const slide = heroSlides[index];

  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,4rem)_1fr_minmax(0,4rem)] lg:items-stretch lg:gap-4">
        <div className="hidden items-center justify-center lg:flex">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sand/70 bg-cream/80 text-ink shadow-soft transition hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
            aria-label="Önceki slayt"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-4xl border border-sand/60 bg-gradient-to-b from-parchment via-mist to-cream/80 shadow-lift">
          <Image
            key={slide.id}
            src={slide.image}
            alt={slide.productName}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-contain object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-6 pt-4 text-center sm:px-6 sm:pb-8 md:pb-10">
            <div className="max-w-2xl w-full rounded-3xl border border-white/20 bg-parchment/90 px-5 py-5 shadow-lift backdrop-blur-md sm:px-10 sm:py-6 md:py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone sm:text-sm">
                {slide.productName}
              </p>
              <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-[2rem] md:leading-tight">
                {slide.headline}
              </p>
              <p className="mt-3 text-sm text-stone sm:text-base">{slide.subline}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-ink/60">
                Ödev vitrin · gerçek satış yok
              </p>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-center lg:flex">
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % total)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sand/70 bg-cream/80 text-ink shadow-soft transition hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
            aria-label="Sonraki slayt"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6 lg:hidden">
        <button
          type="button"
          onClick={() => setIndex((i) => (i - 1 + total) % total)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sand/70 bg-cream/90 text-ink shadow-soft"
          aria-label="Önceki slayt"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Slayt göstergeleri">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-ink" : "w-2 bg-sand hover:bg-clay"
              }`}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % total)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sand/70 bg-cream/90 text-ink shadow-soft"
          aria-label="Sonraki slayt"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
