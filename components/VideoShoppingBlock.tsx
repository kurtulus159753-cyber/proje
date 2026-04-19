"use client";
// Video: public/urunler/Avatar_video.mp4 — ilk oynatmaya kadar public/urunler/fs.png tam çerçeve poster.

import Image from "next/image";
import { Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/urunler/Avatar_video.mp4";
const INTRO_POSTER_SRC = "/urunler/fs.png";
const PRODUCT_IMAGE_SRC = "/ürünler/ürün-10-sabun.jpeg";

export function VideoShoppingBlock() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  /** İlk kez oynatılmadan önce fs.png poster gösterilir */
  const [hasUserStarted, setHasUserStarted] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || videoFailed) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [videoFailed]);

  const onVideoError = useCallback(() => {
    setVideoFailed(true);
  }, []);

  const onVideoLoadedData = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.pause();
      v.currentTime = 0;
    } catch {
      /* ignore */
    }
  }, []);

  const togglePlayback = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      setHasUserStarted(true);
      v.muted = false;
      void v.play().catch(() => {
        v.muted = true;
        void v.play().catch(() => {});
      });
    } else {
      v.pause();
    }
  }, []);

  const onOverlayKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        togglePlayback();
      }
    },
    [togglePlayback],
  );

  const showIntroPoster = !videoFailed && !hasUserStarted;

  return (
    <div className="relative aspect-video w-full min-h-[260px] overflow-hidden rounded-4xl border border-sand/50 bg-[#0e0d0c] shadow-lift sm:min-h-[300px] lg:min-h-[340px]">
      <div className="absolute inset-0 z-0">
        {videoFailed ? (
          <>
            <Image
              src={PRODUCT_IMAGE_SRC}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-ink/15"
              aria-hidden
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-[#0e0d0c]" aria-hidden />
        )}
      </div>

      {!videoFailed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 z-[1] h-full w-full bg-[#0e0d0c] object-contain object-center transition-opacity duration-300 ${
            hasUserStarted ? "opacity-100" : "opacity-0"
          }`}
          muted={false}
          loop
          playsInline
          preload="auto"
          aria-label="Ürün tanıtım videosu — oynatmak veya durdurmak için alana tıklayın"
          onError={onVideoError}
          onLoadedData={onVideoLoadedData}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      {showIntroPoster && (
        <div className="absolute inset-0 z-[2]">
          <Image
            src={INTRO_POSTER_SRC}
            alt="Video önizleme"
            fill
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover object-center"
            priority
          />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-ink/35 via-transparent to-transparent"
        aria-hidden
      />

      {!videoFailed && (
        <button
          type="button"
          className={`absolute inset-0 z-[4] flex cursor-pointer items-center justify-center transition-colors ${
            !isPlaying ? "bg-ink/25 hover:bg-ink/35" : "bg-transparent hover:bg-ink/10"
          }`}
          onClick={togglePlayback}
          onKeyDown={onOverlayKeyDown}
          aria-label={isPlaying ? "Videoyu duraklat" : "Videoyu oynat"}
        >
          {!isPlaying && (
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-parchment/95 text-ink shadow-lift backdrop-blur-sm transition hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]">
              <Play className="ml-1 h-8 w-8 sm:h-9 sm:w-9" fill="currentColor" strokeWidth={0} aria-hidden />
            </span>
          )}
        </button>
      )}

      <div
        className="absolute bottom-3 right-3 z-10 w-[min(calc(100%-1.5rem),220px)] animate-fade-in-up rounded-2xl bg-white/80 p-3 shadow-lift ring-1 ring-white/50 backdrop-blur-md motion-reduce:translate-y-0 motion-reduce:animate-none motion-reduce:opacity-100 sm:bottom-4 sm:right-4 sm:w-[min(calc(100%-2rem),240px)] sm:p-3.5"
      >
        <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.28em] text-stone sm:text-[9px]">
          VİDEODAKİ ÜRÜN
        </p>
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-mist">
          <Image
            src={PRODUCT_IMAGE_SRC}
            alt="Garden - Signature Candle"
            fill
            sizes="240px"
            className="object-cover object-center"
          />
        </div>
        <p className="mt-3 font-display text-[0.95rem] font-semibold leading-snug tracking-tight text-ink sm:text-base">
          Garden - Signature Candle
        </p>
        <p className="mt-1 font-display text-sm font-medium text-stone">449 TL</p>
      </div>
    </div>
  );
}
