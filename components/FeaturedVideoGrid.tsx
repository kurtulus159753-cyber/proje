import Image from "next/image";
import { VideoShoppingBlock } from "@/components/VideoShoppingBlock";
import { featuredBestSellers } from "@/lib/products";

function BestSellerCard({
  sectionTitle,
  badge,
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: {
  sectionTitle: string;
  badge: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-4xl border border-sand/50 bg-cream/40 shadow-soft">
      <div className="relative aspect-[3/4] w-full shrink-0 bg-mist">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 280px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-[#FDFBF7]/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink shadow-soft">
          {badge}
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-1 px-5 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">{sectionTitle}</p>
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h3>
        <p className="text-sm text-stone">{subtitle}</p>
      </div>
    </article>
  );
}

export function FeaturedVideoGrid() {
  const { left, right } = featuredBestSellers;

  return (
    <section
      id="one-cikanlar"
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
      aria-labelledby="featured-heading"
    >
      <div className="mb-10 text-center">
        <h2
          id="featured-heading"
          className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Çok Satanlar &amp; hikâye
        </h2>
        <p className="mt-2 text-sm text-stone sm:text-base">
          Öne çıkan görsel vitrin alanı.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:items-stretch lg:gap-6">
        <div className="min-h-0 lg:col-span-1">
          <BestSellerCard
            sectionTitle={left.sectionTitle}
            badge={left.badge}
            title={left.title}
            subtitle={left.subtitle}
            imageSrc={left.imageSrc}
            imageAlt={left.imageAlt}
          />
        </div>

        <div className="flex min-h-0 items-stretch lg:col-span-2">
          <VideoShoppingBlock />
        </div>

        <div className="min-h-0 lg:col-span-1">
          <BestSellerCard
            sectionTitle={right.sectionTitle}
            badge={right.badge}
            title={right.title}
            subtitle={right.subtitle}
            imageSrc={right.imageSrc}
            imageAlt={right.imageAlt}
          />
        </div>
      </div>
    </section>
  );
}
