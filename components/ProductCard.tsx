import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import type { ProductItem } from "@/lib/products";

type ProductCardProps = {
  product: ProductItem;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-sand/60 bg-parchment shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
      <div className="relative aspect-square w-full bg-mist">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 72vw, (max-width: 1024px) 40vw, 18vw"
          className="object-cover object-center"
        />
        <button
          type="button"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-sand/70 bg-[#FDFBF7]/95 text-ink shadow-soft backdrop-blur-sm transition hover:bg-parchment hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/25"
          aria-label={`${product.name} — Sepete ekle`}
        >
          <ShoppingCart className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-1 px-4 py-4">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-ink">{product.name}</h3>
        <p className="mt-auto font-display text-lg font-semibold text-ink/90">{product.price}</p>
      </div>
    </article>
  );
}
