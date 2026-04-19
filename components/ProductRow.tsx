import { allProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductRow() {
  return (
    <section
      id="tum-urunler"
      className="border-t border-sand/35 bg-[#FAF9F6]/80 py-14"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 text-center sm:mb-10">
          <h2
            id="products-heading"
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Tüm koleksiyon
          </h2>
          <p className="text-sm text-stone sm:text-base">
            20 ürün — oda kokuları ve mumlar. Fiyatlar örnek vitrin içindir.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5 lg:gap-6">
          {allProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
