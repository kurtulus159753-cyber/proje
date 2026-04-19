import type { Metadata } from "next";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { mumProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Mumlar — GLOREA",
  description: "Soy mum, cam kavanoz ve el yapımı mum koleksiyonu.",
};

export default function MumlarPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-parchment">
        <div className="border-b border-sand/40 bg-gradient-to-b from-cream/40 to-parchment">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone">
              Koleksiyon
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Mumlar
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-stone sm:text-base">
              Cam kavanoz, soy ve tabak mumlar — mekanda sıcak ışık ve katmanlı koku deneyimi. Tüm
              ürünler vitrin amaçlıdır.
            </p>
            <Link
              href="/#tum-urunler"
              className="mt-6 inline-flex text-sm font-medium text-ink underline underline-offset-4 hover:text-stone"
            >
              Ana sayfadaki tüm koleksiyona dön
            </Link>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="mum-heading">
          <h2 id="mum-heading" className="sr-only">
            Mum ürünleri listesi
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5 lg:gap-6">
            {mumProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
