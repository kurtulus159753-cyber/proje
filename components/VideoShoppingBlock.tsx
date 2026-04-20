import Image from "next/image";
const FEATURE_IMAGE_SRC = "/urunler/eda.jpeg";

export function VideoShoppingBlock() {
  return (
    <div className="relative aspect-video w-full min-h-[260px] overflow-hidden rounded-4xl border border-sand/50 bg-[#0e0d0c] shadow-lift sm:min-h-[300px] lg:min-h-[340px]">
      <div className="absolute inset-0">
        <Image
          src={FEATURE_IMAGE_SRC}
          alt="Eda görseli"
          fill
          sizes="(max-width: 1024px) 100vw, 960px"
          className="object-cover object-top"
          priority
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-ink/10"
          aria-hidden
        />
      </div>
    </div>
  );
}
