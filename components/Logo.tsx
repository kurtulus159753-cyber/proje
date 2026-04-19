import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group flex shrink-0 items-center rounded-2xl outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-clay ${className}`}
      aria-label="GLOREA ana sayfa"
    >
      <span className="relative rounded-2xl bg-gradient-to-br from-sand/80 via-white to-stone-300/45 p-[2px] shadow-[0_8px_28px_rgba(44,42,40,0.09)] ring-1 ring-ink/[0.06] transition group-hover:shadow-[0_12px_36px_rgba(44,42,40,0.12)] group-hover:ring-ink/10">
        <span className="flex h-12 min-w-[8.5rem] items-center justify-center overflow-hidden rounded-[0.85rem] bg-gradient-to-b from-white to-cream/40 px-4 py-2.5 ring-1 ring-inset ring-sand/55 sm:h-14 sm:min-w-[9.5rem] sm:px-5 sm:py-3">
          <Image
            src="/urunler/logo.jpeg"
            alt="GLOREA"
            width={160}
            height={52}
            className="h-auto max-h-10 w-auto max-w-[160px] object-contain object-center sm:max-h-12"
            priority
            sizes="(max-width: 640px) 140px, 168px"
          />
        </span>
      </span>
    </Link>
  );
}
