import type { Metadata } from "next";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { kokuProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Oda Kokuları — GLOREA",
  description: "Reed diffuser, kokulu sprey ve oda kokusu setleri.",
};

export default function OdaKokulariPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-parchment">
        <div className="border-b border-sand/40 bg-gradient-to-b from-sage/25 to-parchment">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone">
              Koleksiyon
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Oda kokuları
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-stone sm:text-base">
              Diffuser, sprey ve set formlarında zarif şişeler. Kokuları odanıza yayılan ince bir
              katman olarak düşünün — demo vitrin.
            </p>
            <Link
              href="/#tum-urunler"
              className="mt-6 inline-flex text-sm font-medium text-ink underline underline-offset-4 hover:text-stone"
            >
              Ana sayfadaki tüm koleksiyona dön
            </Link>
          </div>
        </div>

        <section
          className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
          aria-labelledby="koku-heading"
        >
          <h2 id="koku-heading" className="sr-only">
            Oda kokusu ürünleri listesi
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5 lg:gap-6">
            {kokuProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
